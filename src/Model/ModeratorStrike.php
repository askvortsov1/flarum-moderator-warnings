<?php


namespace Askvortsov\FlarumModeratorStrikes\Model;

use Flarum\Database\AbstractModel;
use Flarum\User\User;

/**
 * @property Date
 * @property User addedByUser
 */
class ModeratorStrike extends AbstractModel
{
    protected $table = 'moderation_strikes';

    protected $dates = ['created_at', 'hidden_at'];

    public function addedByUser()
    {
        return $this->hasOne(User::class, 'id', 'created_user_id');
    }

    public function hiddenByUser()
    {
        return $this->hasOne(User::class, 'id', 'hidden_user_id');
    }

    public static function pointsForUser($user)
    {
        self::where('user_id', $user->id)->get()->map(function ($strike) {
                    return $strike->points;
                })->sum();
    }
}
