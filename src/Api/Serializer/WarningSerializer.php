<?php

namespace Askvortsov\FlarumWarnings\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Api\Serializer\PostSerializer;

class WarningSerializer extends AbstractSerializer
{
    protected $type = 'warnings';

    /**
     * @inheritDoc
     */
    protected function getDefaultAttributes($warnings)
    {
        $attributes = [
            'id'               => $warnings->id,
            'userId'           => $warnings->user_id,
            'postId'           => $warnings->post_id,
            'public_comment'   => $warnings->public_comment,
            'strikes'          => $warnings->strikes,
            'createdAt'        => $this->formatDate($warnings->created_at),
            'hiddenAt'         => $this->formatDate($warnings->hidden_at),
        ];

        if ($this->actor->can('user.manageWarnings')) {
            $attributes['private_comment'] = $warnings->private_comment;
        }

        return $attributes;
    }

    protected function addedByUser($warnings)
    {
        return $this->hasOne($warnings, BasicUserSerializer::class);
    }

    protected function hiddenByUser($warnings)
    {
        return $this->hasOne($warnings, BasicUserSerializer::class);
    }

    protected function post($warnings)
    {
        return $this->hasOne($warnings, PostSerializer::class);
    }
}
