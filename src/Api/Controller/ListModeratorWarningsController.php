<?php

namespace Askvortsov\FlarumWarnings\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Flarum\User\AssertPermissionTrait;
use Flarum\User\Exception\PermissionDeniedException;
use Askvortsov\FlarumWarnings\Api\Serializer\Warningserializer;
use Askvortsov\FlarumWarnings\Model\Warnings;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class ListWarningsController extends AbstractListController
{
    use AssertPermissionTrait;

    public $serializer = Warningserializer::class;

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

        $this->assertCan($actor, 'user.viewWarnings');

        return Warnings::where('user_id', $id)->orderBy('created_at', 'desc')->get();
    }
}
