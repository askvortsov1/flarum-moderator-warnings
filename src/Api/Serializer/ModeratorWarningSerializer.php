<?php

namespace Askvortsov\FlarumWarnings\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\BasicUserSerializer;

class Warningserializer extends AbstractSerializer
{
    protected $type = 'Warnings';

    /**
     * @inheritDoc
     */
    protected function getDefaultAttributes($Warnings)
    {
        return [
            'id'        => $Warnings->id,
            'userId'    => $Warnings->user_id,
            'comment'   => $Warnings->comment,
            'points'    => $Warnings->points,
            'createdAt' => $this->formatDate($Warnings->created_at),
        ];
    }

    protected function addedByUser($Warnings)
    {
        return $this->hasOne($Warnings, BasicUserSerializer::class);
    }
}
