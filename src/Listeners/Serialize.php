<?php

namespace Askvortsov\FlarumWarnings\Listeners;

use Askvortsov\FlarumWarnings\Model\Warning;
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
                ->model
                ->can('viewWarnings', $event->model);

            $event->attributes['canManageWarnings'] = $event
                ->model
                ->can('manageWarnings', $event->model);
            $event->attributes['strikeCount'] = Warning::strikesForUser($event->model);
        }
    }
}
