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
use Askvortsov\FlarumWarnings\Listeners\Serialize;
use Illuminate\Contracts\Events\Dispatcher;

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

    function (Dispatcher $events) {
        $events->subscribe(Serialize::class);
        $events->subscribe(UserPolicy::class);
    },
];
