import Component from "flarum/Component";
import PostPreview from "flarum/components/PostPreview";

export default class WarningPost extends Component {
  view() {
    return (
      <div className="WarningPost">
        <ul class="Dropdown-menu PostPreview-preview fade in">
          <li>{PostPreview.component({ post: this.props.post })}</li>
        </ul>
      </div>
    );
  }

  config(isInitialized) {
    if (isInitialized) return;

    let timeout;

    this.$(".PostPreview-preview").show().css("position", "relative");
  }
}
