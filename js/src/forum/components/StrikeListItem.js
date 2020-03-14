import Component from 'flarum/Component';
import username from 'flarum/helpers/username';
import fullTime from 'flarum/helpers/fullTime';

export default class StrikeListItem extends Component {
    view() {
        const { strike } = this.props;
        const addedByUser = strike.addedByUser();
        const formatedDate = fullTime(strike.createdAt());

        return (
            <div className="DiscussionListItem">
                <div className="DiscussionListItem-main">
                    <h3 className="DiscussionListItem-title">{app.translator.trans('askvortsov-moderator-strikes.forum.moderatorStrikes.list_item_heading', { mod_username: username(addedByUser), points: strike.points()})}</h3>
                    {formatedDate}
                    <ul className="DiscussionListItem-info">
                        <li className="item-excerpt">
                            <span>{strike.comment()}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}