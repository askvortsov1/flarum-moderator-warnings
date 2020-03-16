import app from 'flarum/app';
import addWarningsPage from './addWarningPage';
import addWarningsControl from './addWarningControl';
import Warnings from './model/Warnings';
import { Extend } from '@flarum/core/forum';
import Post from 'flarum/models/Post';
import User from 'flarum/models/User';
import Model from 'flarum/Model';

app.initializers.add('askvortsov/flarum-moderator-warnings', app => {
    app.store.models.warnings = Warnings;
    User.prototype.canViewWarnings = Model.attribute('canViewWarnings');
    User.prototype.canManageWarnings = Model.attribute('canManageWarnings');
    Post.prototype.canManageWarnings = Model.attribute('canManageWarnings');
    addWarningsControl();
    addWarningsPage();
});

export const extend = [new Extend.Model('Warnings', Warnings)];