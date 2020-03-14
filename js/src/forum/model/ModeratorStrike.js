import Model from 'flarum/Model';

export default class ModeratorStrike extends Model { }
Object.assign(ModeratorStrike.prototype, {
    id: Model.attribute('id'),
    comment: Model.attribute('comment'),
    points: Model.attribute('points'),
    createdAt: Model.attribute('createdAt', Model.transformDate),
    addedByUser: Model.hasOne('addedByUser'),
});
