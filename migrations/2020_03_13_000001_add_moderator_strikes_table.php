<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if ($schema->hasTable('moderation_strikes')) {
            return;
        }

        $schema->create('moderation_strikes', function (Blueprint $table) use ($schema) {
            $table->bigIncrements('id');

            $table->integer('user_id')->unsigned();
            $table->integer('points');
            $table->mediumText('comment');
            $table->dateTime('created_at')->nullable();
            $table->integer('created_user_id')->unsigned()->nullable();
            $table->dateTime('hidden_at')->nullable();
            $table->integer('hidden_user_id')->unsigned()->nullable();

            $table->index('user_id', 'user_id');

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('created_user_id')->references('id')->on('users')->onDelete('set null');
            $table->foreign('hidden_user_id')->references('id')->on('users')->onDelete('set null');
        });
    },
    'down' => function (Builder $schema) {
        $schema->dropIfExists('moderation_strikes');
    },
];