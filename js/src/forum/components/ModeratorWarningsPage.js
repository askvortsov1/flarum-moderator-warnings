import UserPage from 'flarum/components/UserPage';
import Warnings from './Warnings';

export default class WarningsPage extends UserPage {
    init() {
        super.init();
        this.loadUser(m.route.param('username'));
    }

    content() {
        return (
            <div className="DiscussionsUserPage">
                {Warnings.component({
                    params: {
                        user: this.user,
                        sort: 'newest',
                    },
                })}
            </div>
        );
    }
}