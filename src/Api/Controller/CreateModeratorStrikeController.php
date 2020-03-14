<?php

namespace Askvortsov\FlarumModeratorStrikes\Api\Controller;

use Askvortsov\FlarumModeratorStrikes\Api\Serializer\ModeratorStrikeSerializer;
use Askvortsov\FlarumModeratorStrikes\Model\ModeratorStrike;
use Flarum\Api\Controller\AbstractCreateController;
use Flarum\User\AssertPermissionTrait;
use Flarum\Foundation\ValidationException;
use Illuminate\Support\Carbon;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class CreateModeratorStrikeController extends AbstractCreateController
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

        $strike = new Moderatorstrike();
        $strike->user_id = $requestData['userId'];
        $strike->comment = $requestData['comment'];
        $strike->points = $requestData['points'];
        $strike->created_user_id = $actor->id;
        $strike->created_at = Carbon::now();

        if ($strike->comment === '') {
            throw new ValidationException(['message' => $this->translator->trans('askvortsov-moderator-strikes.forum.no_comment_given')]);
        }

        if (! $strike->points) {
            $strike->points = 0;
        }

        $strike->save();

        return $strike;
    }
}
