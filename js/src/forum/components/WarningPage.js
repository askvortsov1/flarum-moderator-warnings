import UserPage from 'flarum/components/UserPage';
import WarningList from './WarningList';

export default class WarningPage extends UserPage {
  oninit(vnode) {
    super.oninit(vnode);

    this.loadUser(m.route.param('username'));
  }

  content() {
    if (
      app.session.user &&
      (app.session.user.canViewWarnings() || (this.user.id() === app.session.user.id() && this.user.visibleWarningCount() > 0))
    ) {
      return (
        <div className="WarningsUserPage">
          {WarningList.component({
            params: {
              user: this.user,
              sort: 'newest',
            },
          })}
        </div>
      );
    }
  }
}
