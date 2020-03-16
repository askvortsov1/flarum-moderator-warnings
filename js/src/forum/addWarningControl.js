import { extend } from 'flarum/extend';
import app from 'flarum/app';
import PostControls from 'flarum/utils/PostControls';
import Button from 'flarum/components/Button';

import WarningsModal from './components/WarningModal';

export default function () {
    extend(PostControls, 'moderationControls', function (items, post) {
        if (!post.canManageWarnings()) return;
        console.log(post)
        console.log(post.props)
        const user = post.user();

        items.add('warning',
            <Button
                icon="fas fa-exclamation-circle"
                onclick={() => app.modal.show(new WarningModal({
                    callback: () => {},
                    user: user,
                }))}>
                {app.translator.trans('askvortsov-moderator-warnings.forum.post_controls.warning_button')}
            </Button>
        );
    });
}
