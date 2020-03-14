<?php

namespace Askvortsov\FlarumModeratorStrikes\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Flarum\User\AssertPermissionTrait;
use Flarum\User\Exception\PermissionDeniedException;
use Askvortsov\FlarumModeratorStrikes\Api\Serializer\ModeratorStrikeSerializer;
use Askvortsov\FlarumModeratorStrikes\Model\ModeratorStrike;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class ListModeratorStrikesController extends AbstractListController
{
    use AssertPermissionTrait;

    public $serializer = ModeratorStrikeSerializer::class;

    public $include = ['addedByUser'];

    /**
     * Get the data to be serialized and assigned to the response document.
     *
     * @param ServerRequestInterface $request
     * @param Document               $document
     *
     * @throws PermissionDeniedException
     *
     * @return mixed
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $id = Arr::get($request->getQueryParams(), 'user_id');

        $actor = $request->getAttribute('actor');

        $this->assertCan($actor, 'user.viewModeratorStrikes');

        return ModeratorStrike::where('user_id', $id)->orderBy('created_at', 'desc')->get();
    }
}
