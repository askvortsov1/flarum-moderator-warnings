<?php

/*
 * This file is part of askvortsov/flarum-moderator-strikes.
 *
 * Copyright (c) 2020 Alexander Skvortsov.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Askvortsov\FlarumModeratorStrikes;


use Flarum\Extend;
use Askvortsov\FlarumModeratorStrikes\Api\Controller;
use Askvortsov\FlarumModeratorStrikes\Listeners\SerializePermissions;
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
        ->get('/strikes/{user_id}', 'moderator_strikes.index', Controller\ListModeratorStrikesController::class)
        ->get('/strikes/{user_id}/{id}', 'moderator_strikes.update', Controller\UpdateModeratorStrikeController::class)
        ->post('/strikes', 'moderator-strikes.create', Controller\CreateModeratorStrikeController::class),

    function (Dispatcher $events) {
        $events->subscribe(SerializePermissions::class);
    },
];
