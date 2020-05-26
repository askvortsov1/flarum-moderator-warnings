import Component from "flarum/Component";
import username from "flarum/helpers/username";
import fullTime from "flarum/helpers/fullTime";
import classList from "flarum/utils/classList";
import Dropdown from "flarum/components/Dropdown";
import WarningPost from "./WarningPost";
import WarningControls from "./WarningControls";

export default class WarningListItem extends Component {
  view() {
    const { warning } = this.props;
    const addedByUser = warning.addedByUser();
    const formatedDate = fullTime(warning.createdAt());
    const controls = WarningControls.controls(warning, this).toArray();

    const attrs = this.attrs();

    return (
      <div {...attrs}>
        {controls.length
          ? Dropdown.component({
              icon: "fas fa-ellipsis-v",
              children: controls,
              className: "WarningListItem-controls",
              buttonClassName:
                "Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right",
            })
          : ""}
        <div className="WarningListItem-main">
          <h3 className="WarningListItem-title">
            {warning.isHidden()
              ? app.translator.transChoice(
                  "askvortsov-moderator-warnings.forum.warning_list_item.list_item_heading_hidden",
                  warning.strikes(),
                  {
                    mod_username: username(addedByUser),
                    strikes: warning.strikes(),
                  }
                )
              : app.translator.transChoice(
                  "askvortsov-moderator-warnings.forum.warning_list_item.list_item_heading",
                  warning.strikes(),
                  {
                    mod_username: username(addedByUser),
                    strikes: warning.strikes(),
                  }
                )}
          </h3>
          {formatedDate}
          <br />
          <ul className="WarningListItem-info">
            {warning.post() ? (
              <li className="item-excerpt">
                <h4 className="WarningListItem-subtitle">
                  {app.translator.trans(
                    "askvortsov-moderator-warnings.forum.warning_list_item.linked_post"
                  )}
                </h4>
                {WarningPost.component({ post: warning.post() })}
              </li>
            ) : (
              ""
            )}
            <li className="item-excerpt">
              <h4 className="WarningListItem-subtitle">
                {app.translator.trans(
                  "askvortsov-moderator-warnings.forum.warning_list_item.public_comment"
                )}
              </h4>
              <span>{warning.public_comment()}</span>
            </li>
            {app.session.user.canManageWarnings() ? (
              <li className="item-excerpt">
                <h4 className="WarningListItem-subtitle">
                  {app.translator.trans(
                    "askvortsov-moderator-warnings.forum.warning_list_item.private_comment"
                  )}
                </h4>
                <span>{warning.private_comment()}</span>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    );
  }

  attrs() {
    const { warning } = this.props;
    const attrs = {};

    attrs.className =
      (attrs.className || "") +
      " " +
      classList({
        WarningListItem: true,
        "WarningListItem--hidden": warning.isHidden(),
      });

    return attrs;
  }
}
