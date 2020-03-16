<?php

namespace Askvortsov\FlarumWarnings\Listeners;

use Askvortsov\FlarumWarnings\Model\Warnings;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\Api\Serializer\PostSerializer;
use Illuminate\Contracts\Events\Dispatcher;

class Serialize
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'addAttributes']);
    }

    public function addAttributes(Serializing $event)
    {
        if ($event->isSerializer(UserSerializer::class)) {
            $event->attributes['canViewWarnings'] = $event
                ->actor
                ->can('viewWarnings', $event->model);

            $event->attributes['canManageWarnings'] = $event
                ->actor
                ->can('manageWarnings', $event->model);
            if ($event->attributes['canViewWarnings']) {
                $event->attributes['warningCount'] = Warnings::pointsForUser($event->model);
            }
        } elseif ($event->isSerializer(PostSerializer::class)) {
            $event->attributes['canManageWarnings'] = $event
                ->actor
                ->can('manageWarnings', $event->model);
        }
    }
}
