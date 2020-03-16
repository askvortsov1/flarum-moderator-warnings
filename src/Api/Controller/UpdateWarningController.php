<?php

namespace Askvortsov\FlarumWarnings\Api\Controller;

use Askvortsov\FlarumWarnings\Api\Serializer\WarningSerializer;
use Askvortsov\FlarumWarnings\Model\Warning;
use Flarum\Api\Controller\AbstractCreateController;
use Flarum\User\AssertPermissionTrait;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class UpdateWarningController extends AbstractCreateController
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

        $warning = Warning::find(Arr::get($request->getQueryParams(), 'id'));

        if ($requestData['isHidden']) {
            $warning->hidden_at = Carbon::now();
            $warning->hidden_user_id = $actor->id;
        } else {
            $warning->hidden_at = null;
            $warning->hidden_user_id = null;
        }

        $warning->save();

        return $warning;
    }
}
