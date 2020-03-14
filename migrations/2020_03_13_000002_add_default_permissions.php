<?php

use Flarum\Database\Migration;
use Flarum\Group\Group;

return Migration::addPermissions([
    'user.viewModeratorStrikes'   => Group::MODERATOR_ID,
    'user.manageModeratorStrikes' => Group::MODERATOR_ID,
]);
