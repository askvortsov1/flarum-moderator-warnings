<?php

namespace Askvortsov\FlarumWarnings\Access;

use Askvortsov\FlarumWarnings\Model\Warnings;
use Flarum\User\AbstractPolicy;
use Flarum\User\User;

class WarningPolicy extends AbstractPolicy
{
    /**
     * {@inheritdoc}
     */
    protected $model = Warnings::class;

    /**
     * @param User $actor
     * @param Tag $tag
     * @return bool|null
     */
    public function viewWarnings(User $actor, Warnings $warning)
    {
        if ($actor->id == $warning->user->id) {
            return true;
        }
    }
}
