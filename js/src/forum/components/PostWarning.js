import Component from 'flarum/Component';
import icon from 'flarum/helpers/icon';
import username from 'flarum/helpers/username';
import WarningPreview from './WarningPreview';

export default class PostWarning extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    this.warning = this.attrs.warning;
  }

  view() {
    return (
      <div className="Post-warning">
        <span className="Post-warning-summary">
          {icon('fas fa-exclamation-circle')}
          {this.warning.strikes()
            ? app.translator.trans('askvortsov-moderator-warnings.forum.post.warning', {
                strikes: this.warning.strikes() || 0,
                mod_username: username(this.warning.addedByUser()),
              })
            : app.translator.trans('askvortsov-moderator-warnings.forum.post.warning_no_strikes', {
                mod_username: username(this.warning.addedByUser()),
              })}
        </span>
      </div>
    );
  }

  oncreate(vnode) {
    super.oncreate(vnode);

    const warning = this.warning;

    let timeout;

    const hidePreview = () => {
      this.$('.Post-warning-preview')
        .removeClass('in')
        .one('transitionend', function () {
          $(this).hide();
        });
    };

    const $preview = $('<ul class="Dropdown-menu Post-warning-preview fade"/>');
    this.$().append($preview);

    this.$()
      .children()
      .hover(
        function () {
          clearTimeout(timeout);
          timeout = setTimeout(function () {
            if (!$preview.hasClass('in') && $preview.is(':visible')) return;

            // When the user hovers their mouse over the list of people who have
            // replied to the post, render a list of reply previews into a
            // popup.
            m.render($preview[0], <li data-id={warning.id()}>{WarningPreview.component({ warning })}</li>);
            $preview.show();
            setTimeout(() => $preview.off('transitionend').addClass('in'));
          }, 200);
        },
        function () {
          clearTimeout(timeout);
          timeout = setTimeout(hidePreview, 250);
        }
      );

    // Whenever the user hovers their mouse over a particular name in the
    // list of repliers, highlight the corresponding post in the preview
    // popup.
    $('.Post-warning')
      .find('.Post-warning-summary a')
      .hover(
        function () {
          $('.Post-warning')
            .find('[data-number="' + $(this).data('number') + '"]')
            .addClass('active');
        },
        function () {
          $('.Post-warning').find('[data-number]').removeClass('active');
        }
      );
  }
}
