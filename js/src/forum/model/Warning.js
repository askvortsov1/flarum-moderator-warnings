import Model from 'flarum/Model';
import computed from 'flarum/utils/computed';

export default class Warnings extends Model {}
Object.assign(Warnings.prototype, {
  id: Model.attribute('id'),
  public_comment: Model.attribute('public_comment'),
  private_comment: Model.attribute('private_comment'),
  strikes: Model.attribute('strikes'),

  createdAt: Model.attribute('createdAt', Model.transformDate),
  isHidden: computed('hiddenAt', (hiddenAt) => !!hiddenAt),
  hiddenAt: Model.attribute('hiddenAt', Model.transformDate),

  warnedUser: Model.hasOne('warnedUser'),
  hiddenByUser: Model.hasOne('hiddenByUser'),
  addedByUser: Model.hasOne('addedByUser'),

  post: Model.hasOne('post'),
});
