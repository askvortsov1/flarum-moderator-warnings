<?php

namespace Askvortsov\FlarumWarnings\Api\Controller;

use Askvortsov\FlarumWarnings\Api\Serializer\WarningSerializer;
use Askvortsov\FlarumWarnings\Model\Warning;
use Flarum\Api\Controller\AbstractCreateController;
use Flarum\User\AssertPermissionTrait;
use Flarum\Foundation\ValidationException;
use Illuminate\Support\Carbon;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class CreateWarningController extends AbstractCreateController
{
    use AssertPermissionTrait;

    public $serializer = WarningSerializer::class;

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');
        $this->assertCan($actor, 'user.manageWarnings');

        $requestBody = $request->getParsedBody();
        $requestData = $requestBody['data']['attributes'];

        $warning = new Warning();
        $warning->user_id = $requestData['userId'];
        $warning->public_comment = $requestData['public_comment'];
        $warning->private_comment = $requestData['private_comment'];
        $warning->strikes = $requestData['strikes'];
        $warning->created_user_id = $actor->id;
        $warning->created_at = Carbon::now();

        if (array_key_exists('postId', $requestData)) {
            $warning->post_id = $requestData['postId'];
        }

        if ($warning->public_comment === '') {
            throw new ValidationException(['message' => $this->translator->trans('askvortsov-moderator-warnings.forum.validation.public_comment_required')]);
        }

        if (!$warning->strikes) {
            $warning->strikes = 0;
        }

        if ($warning->strikes < 0 || $warning->strikes > 5) {
            throw new ValidationException(['message' => $this->translator->trans('askvortsov-moderator-warnings.forum.validation.invalid_strike_count')]);
        }

        $warning->save();

        return $warning;
    }
}