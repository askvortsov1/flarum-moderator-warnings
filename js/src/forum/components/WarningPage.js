import UserPage from 'flarum/components/UserPage';
import WarningList from './WarningList';

export default class WarningPage extends UserPage {
    init() {
        super.init();
        this.loadUser(m.route.param('username'));
    }

    content() {
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