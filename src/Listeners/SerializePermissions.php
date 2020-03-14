<?php

namespace Askvortsov\FlarumModeratorStrikes\Listeners;

use Askvortsov\FlarumModeratorStrikes\Model\ModeratorStrike;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\Api\Serializer\PostSerializer;
use Illuminate\Contracts\Events\Dispatcher;

class SerializePermissions
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'addAttributes']);
    }

    public function addAttributes(Serializing $event)
    {
        if ($event->isSerializer(UserSerializer::class)) {
            $event->attributes['canViewModeratorStrikes'] = $event
                ->actor
                ->can('viewModeratorStrikes', $event->model);

            $event->attributes['canManageModeratorStrikes'] = $event
                ->actor
                ->can('manageModeratorStrikes', $event->model);
            if ($event->attributes['canViewModeratorStrikes']) {
                $event->attributes['strikeCount'] = ModeratorStrike::pointsForUser($event->model);
            }
        } elseif ($event->isSerializer(PostSerializer::class)) {
            $event->attributes['canManageModeratorStrikes'] = $event
                ->actor
                ->can('manageModeratorStrikes', $event->model);
        }
    }
}
