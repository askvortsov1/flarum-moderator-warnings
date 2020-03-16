import { extend } from 'flarum/extend';
import UserPage from 'flarum/components/UserPage';
import LinkButton from 'flarum/components/LinkButton';
import WarningPage from './components/WarningPage';
import Model from 'flarum/Model';
import User from 'flarum/models/User';

export default function () {
    app.routes['user.warnings'] = { path: '/u/:username/warnings', component: WarningPage.component() };

    extend(UserPage.prototype, 'navItems', function (items) {
        if (app.session.user.canViewWarnings() || this.user.id() === app.session.user.id()) {
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