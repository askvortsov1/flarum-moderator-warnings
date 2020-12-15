<?php

namespace Askvortsov\FlarumWarnings\Provider;

use Askvortsov\FlarumWarnings\Model\Warning;
use Flarum\Formatter\Formatter;
use Flarum\Foundation\AbstractServiceProvider;

class WarningProvider extends AbstractServiceProvider
{
    public function register()
    {
        Warning::setFormatter($this->app->make(Formatter::class));
    }
}
