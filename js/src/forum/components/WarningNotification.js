import Notification from "flarum/components/Notification";
import username from "flarum/helpers/username";
import { truncate } from "flarum/utils/string";

export default class WarningNotification extends Notification {
  icon() {
    return "fas fa-exclamation-circle";
  }

  href() {
    return app.route("user.warnings", {
      username: app.session.user.username(),
    });
  }

  content() {
    const warning = this.props.notification.subject();

    if (warning.strikes()) {
      return app.translator.transChoice(
        "askvortsov-moderator-warnings.forum.notifications.warning_text",
        warning.strikes(),
        {
          mod_username: username(this.props.notification.fromUser()),
          strikes: warning.strikes() || "0",
        }
      );
    } else {
      return app.translator.trans(
        "askvortsov-moderator-warnings.forum.notifications.warning_no_strikes_text",
        {
          mod_username: username(this.props.notification.fromUser()),
        }
      );
    }
  }
}
