<?php

namespace Askvortsov\FlarumModeratorStrikes\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\BasicUserSerializer;

class ModeratorStrikeSerializer extends AbstractSerializer
{
    protected $type = 'moderatorStrike';

    /**
     * @inheritDoc
     */
    protected function getDefaultAttributes($moderatorStrike)
    {
        return [
            'id'        => $moderatorStrike->id,
            'userId'    => $moderatorStrike->user_id,
            'comment'   => $moderatorStrike->comment,
            'points'    => $moderatorStrike->points,
            'createdAt' => $this->formatDate($moderatorStrike->created_at),
        ];
    }

    protected function addedByUser($moderatorStrike)
    {
        return $this->hasOne($moderatorStrike, BasicUserSerializer::class);
    }
}
