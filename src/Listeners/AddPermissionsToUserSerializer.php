<?php

namespace Askvortsov\FlarumWarnings\Listeners;

use Askvortsov\FlarumWarnings\Model\Warning;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\UserSerializer;
use Illuminate\Contracts\Events\Dispatcher;

class AddPermissionsToUserSerializer
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
                ->can('user.viewWarnings');

            $event->attributes['canManageWarnings'] = $event
                ->model
                ->can('user.manageWarnings');
            $event->attributes['canDeleteWarnings'] = $event
                ->model
                ->can('user.deleteWarnings');
            $event->attributes['visibleWarningCount'] = Warning::where('user_id', $event->model->id)->where('hidden_at', null)->count();
        }
    }
}
