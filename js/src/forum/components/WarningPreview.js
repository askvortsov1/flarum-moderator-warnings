import Component from "flarum/Component";
import WarningListItem from "./WarningListItem";

export default class WarningPreview extends Component {
  init() {
    super.init();

    this.warning = this.props.warning;
  }

  view() {
    return (
      <a
        className="WarningPreview"
        href={app.route("user.warnings", {
          username: this.warning.warnedUser().username(),
        })}
        config={m.route}
      >
        <WarningListItem warning={this.warning}></WarningListItem>
      </a>
    );
  }
}
