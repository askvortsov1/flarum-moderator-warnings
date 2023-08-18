import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import username from 'flarum/helpers/username';
import Stream from 'flarum/utils/Stream';

export default class WarningModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);

    this.publicComment = Stream('');
    this.privateComment = Stream('');
    this.strikes = Stream(0);
  }

  className() {
    return 'WarningsModal Modal--large';
  }

  title() {
    return app.translator.trans('askvortsov-moderator-warnings.forum.warning_modal.heading', { username: username(this.attrs.user) });
  }

  content() {
    return (
      <div className="Modal-body">
        <div className="Form Form--centered">
          <div className="Form-group">
            <div>
              <label>
                {app.translator.trans('askvortsov-moderator-warnings.forum.warning_modal.strikes_heading')}
                <input type="number" className="FormControl" bidi={this.strikes} min="0" max="5"></input>
              </label>
            </div>
          </div>
          <div className="Form-group">
            <div>
              <label>
                {app.translator.trans('askvortsov-moderator-warnings.forum.warning_modal.public_comment_heading', {
                  username: username(this.attrs.user),
                })}
                <textarea className="FormControl" bidi={this.publicComment} required={true} rows="6" />
              </label>
            </div>
          </div>
          <div className="Form-group">
            <div>
              <label>
                {app.translator.trans('askvortsov-moderator-warnings.forum.warning_modal.private_comment_heading', {
                  username: username(this.attrs.user),
                })}
                <textarea className="FormControl" bidi={this.privateComment} rows="6" />
              </label>
            </div>
          </div>
          <div className="Form-group">
            <Button className="Button Button--primary Button--block" type="submit" loading={this.loading}>
              {app.translator.trans('askvortsov-moderator-warnings.forum.warning_modal.submit_button')}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  onsubmit(e) {
    e.preventDefault();

    app.alerts.dismiss(this.successAlert);

    this.loading = true;

    if (!this.strikes()) {
      this.strikes(0);
    }

    const newWarning = {
      userId: this.attrs.user.id(),
      strikes: this.strikes(),
      public_comment: this.publicComment(),
      private_comment: this.privateComment(),
    };

    if (this.attrs.post) {
      newWarning.post = this.attrs.post;
    }

    app.store
      .createRecord('warnings')
      .save(newWarning)
      .then(this.hide.bind(this))
      .then(
        (this.successAlert = app.alerts.show(
          { type: 'success' },
          app.translator.trans('askvortsov-moderator-warnings.forum.warning_modal.confirmation_message')
        ))
      )
      .then(this.attrs.callback)
      .catch(() => {});
  }
}
