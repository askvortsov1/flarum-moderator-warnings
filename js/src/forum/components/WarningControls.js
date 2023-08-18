import Button from 'flarum/components/Button';
import Separator from 'flarum/components/Separator';
import ItemList from 'flarum/utils/ItemList';

/**
 * The `WarningControls` utility constructs a list of buttons for a warning which
 * perform actions on it.
 */
export default {
  /**
   * Get a list of controls for a warning.
   *
   * @param {Warning} warning
   * @param {*} context The parent component under which the controls menu will
   *     be displayed.
   * @return {ItemList}
   * @public
   */
  controls(warning, context) {
    const items = new ItemList();

    ['user', 'moderation', 'destructive'].forEach((section) => {
      const controls = this[section + 'Controls'](warning, context).toArray();
      if (controls.length) {
        controls.forEach((item) => items.add(item.itemName, item));
        items.add(section + 'Separator', Separator.component());
      }
    });

    return items;
  },

  /**
   * Get controls for a warning pertaining to the current user (e.g. report).
   *
   * @param {Warning} warning
   * @param {*} context The parent component under which the controls menu will
   *     be displayed.
   * @return {ItemList}
   * @protected
   */
  userControls(warning, context) {
    return new ItemList();
  },

  /**
   * Get controls for a warning pertaining to moderation (e.g. edit).
   *
   * @param {Warning} warning
   * @param {*} context The parent component under which the controls menu will
   *     be displayed.
   * @return {ItemList}
   * @protected
   */
  moderationControls(warning, context) {
    return new ItemList();
  },

  /**
   * Get controls for a warning that are destructive (e.g. delete).
   *
   * @param {Warning} warning
   * @param {*} context The parent component under which the controls menu will
   *     be displayed.
   * @return {ItemList}
   * @protected
   */
  destructiveControls(warning, context) {
    const items = new ItemList();
    if (!warning.isHidden() && app.session.user.canManageWarnings()) {
      items.add(
        'hide',
        <Button icon="far fa-trash-alt" onclick={this.hideAction.bind(warning)}>
          {app.translator.trans('askvortsov-moderator-warnings.forum.warning_controls.delete_button')}
        </Button>
      );
    }
    if (warning.isHidden() && app.session.user.canManageWarnings()) {
      items.add(
        'restore',
        <Button icon="fas fa-reply" onclick={this.restoreAction.bind(warning)}>
          {app.translator.trans('askvortsov-moderator-warnings.forum.warning_controls.restore_button')}
        </Button>
      );
    }
    if (warning.isHidden() && app.session.user.canDeleteWarnings()) {
      items.add(
        'delete',
        <Button icon="fas fa-times" onclick={this.deleteAction.bind(warning)}>
          {app.translator.trans('askvortsov-moderator-warnings.forum.warning_controls.delete_forever_button')}
        </Button>
      );
    }

    return items;
  },

  /**
   * Hide a warning.
   *
   * @return {Promise}
   */
  hideAction() {
    this.pushAttributes({ hiddenAt: new Date(), hiddenUser: app.session.user });

    return this.save({ isHidden: true }).then(() => m.redraw());
  },

  /**
   * Restore a warning.
   *
   * @return {Promise}
   */
  restoreAction() {
    this.pushAttributes({ hiddenAt: null, hiddenUser: null });

    return this.save({ isHidden: false }).then(() => m.redraw());
  },

  /**
   * Delete a warning.
   *
   * @return {Promise}
   */
  deleteAction(context) {
    if (context) context.loading = true;

    return this.delete()
      .then(() => {})
      .catch(() => {})
      .then(() => {
        if (context) context.loading = false;
        location.reload();
      });
  },
};
