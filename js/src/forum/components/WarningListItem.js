import Component from 'flarum/Component';
import Dropdown from 'flarum/components/Dropdown';
import Link from 'flarum/components/Link';
import avatar from 'flarum/helpers/avatar';
import username from 'flarum/helpers/username';
import humanTime from 'flarum/helpers/humanTime';
import classList from 'flarum/utils/classList';
import WarningPost from './WarningPost';
import WarningControls from './WarningControls';

export default class WarningListItem extends Component {
  view() {
    const { warning } = this.attrs;
    const addedByUser = warning.addedByUser();
    const controls = WarningControls.controls(warning, this).toArray();

    return (
      <div {...this.elementAttrs()}>
        {controls.length
          ? Dropdown.component(
              {
                icon: 'fas fa-ellipsis-v',
                className: 'WarningListItem-controls',
                buttonClassName: 'Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right',
              },
              controls
            )
          : ''}
        <div className="WarningListItem-main">
          <h3 className="WarningListItem-title">
            <Link href={addedByUser ? app.route.user(addedByUser) : '#'} className="WarningListItem-author">
              {avatar(addedByUser)} {username(addedByUser)}
            </Link>
          </h3>
          <span class="WarningListItem-strikes">
            {warning.isHidden()
              ? app.translator.trans('askvortsov-moderator-warnings.forum.warning_list_item.list_item_heading_hidden', {
                  time: humanTime(warning.createdAt()),
                  strikes: warning.strikes() || 0,
                })
              : app.translator.trans('askvortsov-moderator-warnings.forum.warning_list_item.list_item_heading', {
                  time: humanTime(warning.createdAt()),
                  strikes: warning.strikes() || 0,
                })}
          </span>
          <hr />
          <ul className="WarningListItem-info">
            {warning.post() ? (
              <li className="item-excerpt">
                <h3 className="WarningListItem-subtitle">
                  {app.translator.trans('askvortsov-moderator-warnings.forum.warning_list_item.linked_post')}
                </h3>
                {WarningPost.component({ post: warning.post() })}
              </li>
            ) : (
              ''
            )}
            <li className="item-excerpt">
              <h3 className="WarningListItem-subtitle">
                {app.translator.trans('askvortsov-moderator-warnings.forum.warning_list_item.public_comment')}
              </h3>
              <p class="WarningListItem-comment">{m.trust(warning.public_comment())}</p>
            </li>
            {app.session.user.canManageWarnings() && warning.private_comment() ? (
              <li className="item-excerpt">
                <h3 className="WarningListItem-subtitle">
                  {app.translator.trans('askvortsov-moderator-warnings.forum.warning_list_item.private_comment')}
                </h3>
                <p class="WarningListItem-comment">{m.trust(warning.private_comment())}</p>
              </li>
            ) : (
              ''
            )}
          </ul>
        </div>
      </div>
    );
  }

  elementAttrs() {
    const { warning } = this.attrs;
    const attrs = {};

    attrs.className =
      (attrs.className || '') +
      ' ' +
      classList({
        WarningListItem: true,
        'WarningListItem--hidden': warning.isHidden(),
      });

    return attrs;
  }
}
