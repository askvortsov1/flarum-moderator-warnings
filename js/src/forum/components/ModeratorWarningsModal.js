import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import username from 'flarum/helpers/username';

export default class WarningsModal extends Modal {
    init() {
        super.init();

        this.warningContent = m.prop('');
        this.warningPoints = m.prop(0);
    }

    className() {
        return 'WarningsModal Modal--large';
    }

    title() {
        return app.translator.trans('askvortsov-moderator-warnings.forum.Warnings.create-heading');
    }

    content() {
        return (
            <div className="Modal-body">
                <div className="Form Form--centered">
                    <div className="Form-group">
                        <div>
                            <label>
                                {app.translator.trans('askvortsov-moderator-warnings.forum.Warnings.points_heading')}
                                <input
                                    type="number"
                                    className="FormControl"
                                    value={this.warningPoints()} min="0" max="5"
                                    oninput={m.withAttr('value', this.warningPoints)}>
                                </input>
                            </label>
                        </div>
                    </div>
                    <div className="Form-group">
                        <div>
                            <label>
                                {app.translator.trans('askvortsov-moderator-warnings.forum.Warnings.input_heading', {
                                    username: username(this.props.user),
                                })}
                                <textarea
                                    className="FormControl"
                                    value={this.warningContent()}
                                    oninput={m.withAttr('value', this.warningContent)}
                                    rows="6"
                                />
                            </label>
                        </div>
                    </div>
                    <div className="Form-group">
                        <Button className="Button Button--primary Button--block" type="submit" loading={this.loading}>
                            {app.translator.trans('askvortsov-moderator-warnings.forum.Warnings.submit_button')}
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
            .createRecord('warnings')
            .save(
                {
                    userId: this.props.user.id(),
                    points: this.warningPoints(),
                    comment: this.warningContent(),
                },
                { errorHandler: this.onerror.bind(this) }
            )
            .then(this.hide.bind(this))
            .then(this.props.callback)
            .catch(() => { });
    }

    onerror(error) {
        if (error.status === 422) {
            error.alert.props.children = app.translator.trans('askvortsov-moderator-warnings.forum.Warnings.no_content_given');
        }

        super.onerror(error);
    }
}