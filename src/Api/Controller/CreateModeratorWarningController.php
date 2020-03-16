<?php

namespace Askvortsov\FlarumWarnings\Api\Controller;

use Askvortsov\FlarumWarnings\Api\Serializer\Warningserializer;
use Askvortsov\FlarumWarnings\Model\Warnings;
use Flarum\Api\Controller\AbstractCreateController;
use Flarum\User\AssertPermissionTrait;
use Flarum\Foundation\ValidationException;
use Illuminate\Support\Carbon;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class CreateWarningsController extends AbstractCreateController
{
    use AssertPermissionTrait;

    public $serializer = Warningserializer::class;

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');
        $this->assertCan($actor, 'user.manageWarnings');

        $requestBody = $request->getParsedBody();
        $requestData = $requestBody['data']['attributes'];

        $warning = new Warnings();
        $warning->user_id = $requestData['userId'];
        $warning->comment = $requestData['comment'];
        $warning->points = $requestData['points'];
        $warning->created_user_id = $actor->id;
        $warning->created_at = Carbon::now();

        if ($warning->comment === '') {
            throw new ValidationException(['message' => $this->translator->trans('askvortsov-moderator-warnings.forum.no_comment_given')]);
        }

        if (! $warning->points) {
            $warning->points = 0;
        }

        $warning->save();

        return $warning;
    }
}
