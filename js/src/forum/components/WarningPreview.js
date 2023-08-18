import Component from 'flarum/Component';
import Link from 'flarum/components/Link';
import WarningListItem from './WarningListItem';

export default class WarningPreview extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    this.warning = this.attrs.warning;
  }

  view() {
    return (
      <Link
        className="WarningPreview"
        href={app.route('user.warnings', {
          username: this.warning.warnedUser().username(),
        })}
      >
        <WarningListItem warning={this.warning}></WarningListItem>
      </Link>
    );
  }
}
