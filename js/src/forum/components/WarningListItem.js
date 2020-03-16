import Component from 'flarum/Component';
import username from 'flarum/helpers/username';
import fullTime from 'flarum/helpers/fullTime';

export default class WarningListItem extends Component {
    view() {
        const { warning } = this.props;
        const addedByUser = warning.addedByUser();
        const formatedDate = fullTime(warning.createdAt());

        return (
            <div className="DiscussionListItem">
                <div className="DiscussionListItem-main">
                    <h3 className="DiscussionListItem-title">{app.translator.trans('askvortsov-moderator-warnings.forum.Warnings.list_item_heading', { mod_username: username(addedByUser), points: warning.points()})}</h3>
                    {formatedDate}
                    <ul className="DiscussionListItem-info">
                        <li className="item-excerpt">
                            <span>{warning.comment()}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}