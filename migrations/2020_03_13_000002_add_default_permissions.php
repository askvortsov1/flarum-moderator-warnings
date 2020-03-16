<?php

use Flarum\Database\Migration;
use Flarum\Group\Group;

return Migration::addPermissions([
    'user.viewWarnings'   => Group::MODERATOR_ID,
    'user.manageWarnings' => Group::MODERATOR_ID,
]);
