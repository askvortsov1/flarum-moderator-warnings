<?php

namespace Askvortsov\FlarumWarnings\Api\Controller;

use Askvortsov\FlarumWarnings\Notification\WarningBlueprint;
use Flarum\Notification\NotificationSyncer;
use Askvortsov\FlarumWarnings\Api\Serializer\WarningSerializer;
use Askvortsov\FlarumWarnings\Model\Warning;
use Flarum\Api\Controller\AbstractCreateController;
use Flarum\User\AssertPermissionTrait;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class DeleteWarningController extends AbstractCreateController
{
    use AssertPermissionTrait;

    public $serializer = WarningSerializer::class;

    /**
     * @var NotificationSyncer
     */
    protected $notifications;

    /**
     * @param NotificationSyncer $notifications
     */
    public function __construct(NotificationSyncer $notifications)
    {
        $this->notifications = $notifications;
    }

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');
        $this->assertCan($actor, 'user.deleteWarnings');

        $warning = Warning::find(Arr::get($request->getQueryParams(), 'warning_id'));

        $warning->delete();

        $this->notifications->sync(new WarningBlueprint($warning), []);

        return $warning;
    }
}
