import Component from 'flarum/Component';
import PostWarning from './PostWarning';
import WarningPreview from './WarningPreview';

export default class PostWarningList extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    this.post = this.attrs.post;
  }

  view() {
    return (
      <div className="Post-warning-list">
        {this.attrs.post.warnings().map((warning) => {
          return PostWarning.component({ warning });
        })}
      </div>
    );
  }
}
