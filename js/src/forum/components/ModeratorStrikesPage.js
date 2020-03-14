import UserPage from 'flarum/components/UserPage';
import ModeratorStrikes from './ModeratorStrikes';

export default class ModeratorStrikesPage extends UserPage {
    init() {
        super.init();
        this.loadUser(m.route.param('username'));
    }

    content() {
        return (
            <div className="DiscussionsUserPage">
                {ModeratorStrikes.component({
                    params: {
                        user: this.user,
                        sort: 'newest',
                    },
                })}
            </div>
        );
    }
}