import app from 'flarum/app';
import addModeratorStrikesPage from './addModeratorStrikesPage';
import ModeratorStrike from './model/ModeratorStrike';
import { Extend } from '@flarum/core/forum';
import User from 'flarum/models/User';
import Model from 'flarum/Model';

app.initializers.add('askvortsov/flarum-moderator-strikes', app => {
    app.store.models.moderatorStrike = ModeratorStrike;
    app.store.models.strikes = ModeratorStrike;
    User.prototype.canViewModeratorStrikes = Model.attribute('canViewModeratorStrikes');
    User.prototype.canManageModeratorStrikes = Model.attribute('canManageModeratorStrikes');
    addModeratorStrikesPage();
});

export const extend = [new Extend.Model('moderatorStrikes', ModeratorStrike)];