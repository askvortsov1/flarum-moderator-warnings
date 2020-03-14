<?php

namespace Askvortsov\FlarumModeratorStrikes\Api\Controller;

use Askvortsov\FlarumModeratorStrikes\Api\Serializer\ModeratorStrikeSerializer;
use Askvortsov\FlarumModeratorStrikes\Model\ModeratorStrike;
use Flarum\Api\Controller\AbstractCreateController;
use Flarum\User\AssertPermissionTrait;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class UpdateModeratorStrikeController extends AbstractCreateController
{
    use AssertPermissionTrait;

    public $serializer = ModeratorStrikeSerializer::class;

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');
        $this->assertCan($actor, 'user.manageModeratorStrikes');

        $requestBody = $request->getParsedBody();
        $requestData = $requestBody['data']['attributes'];

        $strike = ModeratorStrike::find(Arr::get($request->getQueryParams(), 'id'));

        if ($requestData['isHidden']) {
            $strike->hidden_at = Carbon::now();
            $strike->hidden_user_id = $actor->id;
        } else {
            $strike->hidden_at = null;
            $strike->hidden_user_id = null;
        }

        $strike->save();

        return $strike;
    }
}
