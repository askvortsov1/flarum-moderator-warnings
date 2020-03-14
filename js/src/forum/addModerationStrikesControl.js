import { extend } from 'flarum/extend';
import app from 'flarum/app';
import PostControls from 'flarum/utils/PostControls';
import Button from 'flarum/components/Button';

import ModeratorStrikesModal from './components/ModeratorStrikesModal';

export default function () {
    extend(PostControls, 'moderationControls', function (items, post) {
        if (!post.canManageModeratorStrikes()) return;
        console.log(post)
        console.log(post.props)
        const user = post.user();

        items.add('strike',
            <Button
                icon="fas fa-exclamation-circle"
                onclick={() => app.modal.show(new ModeratorStrikesModal({
                    callback: () => {},
                    user: user,
                }))}>
                {app.translator.trans('askvortsov-moderator-strikes.forum.post_controls.strike_button')}
            </Button>
        );
    });
}
