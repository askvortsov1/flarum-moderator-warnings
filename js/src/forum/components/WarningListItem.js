import Component from 'flarum/Component';
import username from 'flarum/helpers/username';
import fullTime from 'flarum/helpers/fullTime';

export default class WarningListItem extends Component {
  view() {
    const { warning } = this.props;
    const addedByUser = warning.addedByUser();
    const formatedDate = fullTime(warning.createdAt());

    return (
      <div className="WarningListItem">
        <div className="WarningListItem-main">
          <h3 className="WarningListItem-title">{app.translator.trans('askvortsov-moderator-warnings.forum.warning_list_item.list_item_heading', { mod_username: username(addedByUser), strikes: warning.strikes() })}</h3>
          {formatedDate}
          <ul className="WarningListItem-info">
            <li className="item-excerpt">
              <span>{warning.public_comment()}</span>
            </li>
            {app.session.user.canManageWarnings() ?
              <li className="item-excerpt">
                <span>{warning.private_comment()}</span>
              </li> : ''}
          </ul>
        </div>
      </div>
    );
  }
}