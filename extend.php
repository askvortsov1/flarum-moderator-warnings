<?php

/*
 * This file is part of askvortsov/flarum-moderator-warnings.
 *
 * Copyright (c) 2020 Alexander Skvortsov.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Askvortsov\FlarumWarnings;


use Flarum\Extend;
use Askvortsov\FlarumWarnings\Access\UserPolicy;
use Askvortsov\FlarumWarnings\Api\Controller;
use Askvortsov\FlarumWarnings\Listeners;
use Askvortsov\FlarumWarnings\Notification\WarningBlueprint;
use Askvortsov\FlarumWarnings\Api\Serializer\WarningSerializer;
use Flarum\Event\ConfigureNotificationTypes;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Contracts\View\Factory;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),

    new Extend\Locales(__DIR__ . '/resources/locale'),

    (new Extend\Routes('api'))
        ->get('/warnings/{user_id}', 'warnings.index', Controller\ListWarningsController::class)
        ->patch('/warnings/{warning_id}', 'warnings.update', Controller\UpdateWarningController::class)
        ->delete('/warnings/{warning_id}', 'warnings.delete', Controller\DeleteWarningController::class)
        ->post('/warnings', 'warnings.create', Controller\CreateWarningController::class),

    function (Dispatcher $events, Factory $views) {
        $events->subscribe(Listeners\AddPermissionsToUserSerializer::class);
        $events->subscribe(Listeners\AddPostWarningRelationship::class);
        $events->subscribe(UserPolicy::class);

        $events->listen(ConfigureNotificationTypes::class, function (ConfigureNotificationTypes $event) {
            $event->add(WarningBlueprint::class, WarningSerializer::class, ['alert', 'email']);
        });

        $views->addNamespace('askvortsov-moderator-warnings', __DIR__.'/views');
    },
];
