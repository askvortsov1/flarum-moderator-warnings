import Model from 'flarum/Model';

export default class Warnings extends Model { }
Object.assign(Warnings.prototype, {
    id: Model.attribute('id'),
    public_comment: Model.attribute('public_comment'),
    private_comment: Model.attribute('private_comment'),
    strikes: Model.attribute('strikes'),
    createdAt: Model.attribute('createdAt', Model.transformDate),
    hiddenAt: Model.attribute('hiddenAt', Model.transformDate),
    addedByUser: Model.hasOne('addedByUser'),
    hiddenByUser: Model.hasOne('hiddenByUser'),
    post: Model.hasOne('post'),
});
