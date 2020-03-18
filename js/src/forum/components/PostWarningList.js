import Component from 'flarum/Component';
import PostWarning from './PostWarning';
import WarningPreview from './WarningPreview';

export default class PostWarningList extends Component {
    init() {
        super.init();

        this.post = this.props.post;
    }

    view() {
        return (
            <div className="Post-warning-list">
                {this.props.post.warnings().map(warning => {
                    return PostWarning.component({ warning })
                })}
            </div>
        );
    }
}