import app from 'flarum/app';
import addModeratorStrikesPage from './addModeratorStrikesPage';
import addModerationStrikesControl from './addModerationStrikesControl';
import ModeratorStrike from './model/ModeratorStrike';
import { Extend } from '@flarum/core/forum';
import Post from 'flarum/models/Post';
import User from 'flarum/models/User';
import Model from 'flarum/Model';

app.initializers.add('askvortsov/flarum-moderator-strikes', app => {
    app.store.models.moderatorStrike = ModeratorStrike;
    app.store.models.strikes = ModeratorStrike;
    User.prototype.canViewModeratorStrikes = Model.attribute('canViewModeratorStrikes');
    User.prototype.canManageModeratorStrikes = Model.attribute('canManageModeratorStrikes');
    Post.prototype.canManageModeratorStrikes = Model.attribute('canManageModeratorStrikes');
    addModerationStrikesControl();
    addModeratorStrikesPage();
});

export const extend = [new Extend.Model('moderatorStrikes', ModeratorStrike)];