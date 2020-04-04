<?php

namespace Askvortsov\FlarumWarnings\Access;

use Askvortsov\FlarumWarnings\Model\Warning;
use Flarum\User\AbstractPolicy;
use Flarum\User\User;

class UserPolicy extends AbstractPolicy
{
    /**
     * {@inheritdoc}
     */
    protected $model = User::class;

    /**
     * @param User $actor
     * @param $ability
     * @param User $user
     * @return bool|null
     */
    public function can(User $actor, $ability, User $user)
    {
        if ($ability == 'user.viewWarnings' && $actor->id == $user->id) {
            return true;
        } elseif ($ability == 'user.viewWarnings') {
            return $actor->can('user.viewWarnings');
        }
    }
}
