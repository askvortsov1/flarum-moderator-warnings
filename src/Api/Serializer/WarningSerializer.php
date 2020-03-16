<?php

namespace Askvortsov\FlarumWarnings\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\BasicUserSerializer;

class WarningSerializer extends AbstractSerializer
{
    protected $type = 'warnings';

    /**
     * @inheritDoc
     */
    protected function getDefaultAttributes($warnings)
    {
        return [
            'id'        => $warnings->id,
            'userId'    => $warnings->user_id,
            'comment'   => $warnings->comment,
            'points'    => $warnings->points,
            'createdAt' => $this->formatDate($warnings->created_at),
        ];
    }

    protected function addedByUser($warnings)
    {
        return $this->hasOne($warnings, BasicUserSerializer::class);
    }
}
