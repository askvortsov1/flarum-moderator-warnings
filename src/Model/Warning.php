<?php


namespace Askvortsov\FlarumWarnings\Model;

use Flarum\Database\AbstractModel;
use Flarum\User\User;
use Flarum\Post\Post;

/**
 * @property Date
 * @property User addedByUser
 */
class Warning extends AbstractModel
{
    protected $table = 'warnings';

    protected $dates = ['created_at', 'hidden_at'];

    public function warnedUser()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function addedByUser()
    {
        return $this->hasOne(User::class, 'id', 'created_user_id');
    }

    public function hiddenByUser()
    {
        return $this->hasOne(User::class, 'id', 'hidden_user_id');
    }

    public function post()
    {
        return $this->hasOne(Post::class, 'id', 'post_id');
    }


    public static function strikesForUser($user)
    {
        return self::where('user_id', $user->id)->get()->filter(function ($warning) {
            return is_null($warning->hidden_at);
        })->map(function ($warning) {
            return $warning->strikes;
        })->sum();
    }
}
