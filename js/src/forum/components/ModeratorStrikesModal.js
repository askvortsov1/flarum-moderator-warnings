import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import username from 'flarum/helpers/username';

export default class ModeratorStrikesModal extends Modal {
    init() {
        super.init();

        this.strikeContent = m.prop('');
        this.strikePoints = m.prop(0);
    }

    className() {
        return 'ModeratorStrikesModal Modal--large';
    }

    title() {
        return app.translator.trans('askvortsov-moderator-strikes.forum.moderatorStrikes.create-heading');
    }

    content() {
        return (
            <div className="Modal-body">
                <div className="Form Form--centered">
                    <div className="Form-group">
                        <div>
                            <label>
                                {app.translator.trans('askvortsov-moderator-strikes.forum.moderatorStrikes.points_heading')}
                                <input
                                    type="number"
                                    className="FormControl"
                                    value={this.strikePoints()} min="0" max="5"
                                    oninput={m.withAttr('value', this.strikePoints)}>
                                </input>
                            </label>
                        </div>
                    </div>
                    <div className="Form-group">
                        <div>
                            <label>
                                {app.translator.trans('askvortsov-moderator-strikes.forum.moderatorStrikes.input_heading', {
                                    username: username(this.props.user),
                                })}
                                <textarea
                                    className="FormControl"
                                    value={this.strikeContent()}
                                    oninput={m.withAttr('value', this.strikeContent)}
                                    rows="6"
                                />
                            </label>
                        </div>
                    </div>
                    <div className="Form-group">
                        <Button className="Button Button--primary Button--block" type="submit" loading={this.loading}>
                            {app.translator.trans('askvortsov-moderator-strikes.forum.moderatorStrikes.submit_button')}
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    onsubmit(e) {
        e.preventDefault();

        this.loading = true;

        app.store
            .createRecord('strikes')
            .save(
                {
                    userId: this.props.user.id(),
                    points: this.strikePoints(),
                    comment: this.strikeContent(),
                },
                { errorHandler: this.onerror.bind(this) }
            )
            .then(this.hide.bind(this))
            .then(this.props.callback)
            .catch(() => { });
    }

    onerror(error) {
        if (error.status === 422) {
            error.alert.props.children = app.translator.trans('askvortsov-moderator-strikes.forum.moderatorStrikes.no_content_given');
        }

        super.onerror(error);
    }
}