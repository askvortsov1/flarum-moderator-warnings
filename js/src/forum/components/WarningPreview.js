import Component from 'flarum/Component';

export default class WarningPreview extends Component {
    view() {
        return (
            <a className="WarningPreview" href={app.route('user.warnings', { username: this.props.warning.warnedUser().username() })} config={m.route} onclick={this.onclick}>
                {this.props.warning.public_comment()}
            </a>
        );
    }

    onclick() {
        console.log("ClICK!");
    }
}
