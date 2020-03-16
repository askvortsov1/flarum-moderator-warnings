<?php


namespace Askvortsov\FlarumWarnings\Model;

use Flarum\Database\AbstractModel;
use Flarum\User\User;

/**
 * @property Date
 * @property User addedByUser
 */
class Warning extends AbstractModel
{
    protected $table = 'warnings';

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
        self::where('user_id', $user->id)->get()->map(function ($warning) {
                    return $warning->points;
                })->sum();
    }
}
