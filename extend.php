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
use Askvortsov\FlarumWarnings\Access\WarningsPolicy;
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
        ->get('/warnings/{user_id}', 'moderator_warnings.index', Controller\ListWarningsController::class)
        ->get('/warnings/{user_id}/{id}', 'moderator_warnings.update', Controller\UpdateWarningsController::class)
        ->post('/warnings', 'moderator-warnings.create', Controller\CreateWarningsController::class),

    function (Dispatcher $events) {
        $events->subscribe(Serialize::class);
        $events->subscribe(WarningsPolicy::class);
    },
];
