import Component from "flarum/Component";
import fullTime from "flarum/helpers/fullTime";
import username from "flarum/helpers/username";

export default class WarningPreview extends Component {
  init() {
    super.init();

    this.warning = this.props.warning;
  }

  view() {
    console.log(this.warning.strikes());
    const formatedDate = fullTime(this.warning.createdAt());
    return (
      <a
        className="WarningPreview"
        href={app.route("user.warnings", {
          username: this.warning.warnedUser().username(),
        })}
        config={m.route}
      >
        <div className="WarningListItem-main">
          <h3 className="WarningListItem-title">
            {app.translator.transChoice(
              "askvortsov-moderator-warnings.forum.post.warning",
              this.warning.strikes(),
              {
                strikes: this.warning.strikes() || "0",
                mod_username: username(this.warning.addedByUser()),
              }
            )}
          </h3>
          {formatedDate}
          <br />
          <ul className="WarningListItem-info">
            <li class="item-excerpt">
              <h4 className="WarningListItem-subtitle">
                {app.translator.trans(
                  "askvortsov-moderator-warnings.forum.warning_list_item.public_comment"
                )}
              </h4>
              <p>{m.trust(this.warning.public_comment())}</p>
            </li>
            {app.session.user.canManageWarnings() ? (
              <li class="item-excerpt">
                <h4 className="WarningListItem-subtitle">
                  {app.translator.trans(
                    "askvortsov-moderator-warnings.forum.warning_list_item.private_comment"
                  )}
                </h4>
                <p>{m.trust(this.warning.private_comment())}</p>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </a>
    );
  }
}
