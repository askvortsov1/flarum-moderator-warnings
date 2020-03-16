import { extend } from 'flarum/extend';
import UserPage from 'flarum/components/UserPage';
import LinkButton from 'flarum/components/LinkButton';
import WarningsPage from './components/WarningsPage';
import Model from 'flarum/Model';
import User from 'flarum/models/User';

export default function () {
    User.prototype.canViewWarnings = Model.attribute('canViewWarnings');

    app.routes['user.warnings'] = { path: '/u/:username/warnings', component: WarningsPage.component() };

    extend(UserPage.prototype, 'navItems', function (items) {
        if (this.user.canViewWarnings()) {
            items.add(
                'warnings',
                LinkButton.component({
                    href: app.route('user.warnings', { username: this.user.username() }),
                    children: app.translator.trans('askvortsov-moderator-warnings.forum.user.warnings'),
                    icon: 'fas fa-exclamation-circle',
                }),
                10
            );
        }
    });
}