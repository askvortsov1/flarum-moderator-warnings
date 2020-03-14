import { extend } from 'flarum/extend';
import UserPage from 'flarum/components/UserPage';
import LinkButton from 'flarum/components/LinkButton';
import ModeratorStrikesPage from './components/ModeratorStrikesPage';
import Model from 'flarum/Model';
import User from 'flarum/models/User';

export default function () {
    User.prototype.canViewModeratorStrikes = Model.attribute('canViewModeratorStrikes');

    app.routes['user.strikes'] = { path: '/u/:username/strikes', component: ModeratorStrikesPage.component() };

    extend(UserPage.prototype, 'navItems', function (items) {
        if (this.user.canViewModeratorStrikes()) {
            items.add(
                'strikes',
                LinkButton.component({
                    href: app.route('user.strikes', { username: this.user.username() }),
                    children: app.translator.trans('askvortsov-moderator-strikes.forum.user.strikes'),
                    icon: 'fas fa-exclamation-circle',
                }),
                10
            );
        }
    });
}