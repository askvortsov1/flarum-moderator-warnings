import app from 'flarum/app';
import addWarningPage from './addWarningPage';
import addWarningControl from './addWarningControl';
import Warning from './model/Warning';
import { Extend } from '@flarum/core/forum';
import Post from 'flarum/models/Post';
import User from 'flarum/models/User';
import Model from 'flarum/Model';

app.initializers.add('askvortsov/flarum-moderator-warnings', app => {
    app.store.models.warnings = Warning;
    User.prototype.canViewWarnings = Model.attribute('canViewWarnings');
    User.prototype.canManageWarnings = Model.attribute('canManageWarnings');
    User.prototype.canDeleteWarnings = Model.attribute('canDeleteWarnings');
    User.prototype.strikeCount = Model.attribute('strikeCount');
    addWarningControl();
    addWarningPage();
});

export const extend = [new Extend.Model('warnings', Warning)];