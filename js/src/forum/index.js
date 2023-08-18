import app from 'flarum/app';
import NotificationGrid from 'flarum/components/NotificationGrid';
import { Extend } from '@flarum/core/forum';
import { extend } from 'flarum/extend';
import User from 'flarum/models/User';
import Model from 'flarum/Model';
import addWarningControl from './addWarningControl';
import addWarningPage from './addWarningPage';
import addWarningsToPosts from './addWarningsToPosts';
import WarningNotification from './components/WarningNotification';
import Warning from './model/Warning';

app.initializers.add('askvortsov/flarum-moderator-warnings', (app) => {
  app.store.models.warnings = Warning;
  User.prototype.canViewWarnings = Model.attribute('canViewWarnings');
  User.prototype.canManageWarnings = Model.attribute('canManageWarnings');
  User.prototype.canDeleteWarnings = Model.attribute('canDeleteWarnings');
  User.prototype.visibleWarningCount = Model.attribute('visibleWarningCount');
  addWarningControl();
  addWarningPage();
  addWarningsToPosts();

  app.notificationComponents.warning = WarningNotification;
  extend(NotificationGrid.prototype, 'notificationTypes', function (items) {
    items.add('warning', {
      name: 'warning',
      icon: 'fas fa-exclamation-circle',
      label: app.translator.trans('askvortsov-moderator-warnings.forum.settings.warning_notification_label'),
    });
  });
});
