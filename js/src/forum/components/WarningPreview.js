import Component from "flarum/Component";
import WarningListItem from "./WarningListItem";

export default class WarningPreview extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    this.warning = this.attrs.warning;
  }

  view() {
    return (
      <a
        className="WarningPreview"
        route={app.route("user.warnings", {
          username: this.warning.warnedUser().username(),
        })}
      >
        <WarningListItem warning={this.warning}></WarningListItem>
      </a>
    );
  }
}
