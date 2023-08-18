import { extend } from 'flarum/extend';
import Model from 'flarum/Model';
import Post from 'flarum/models/Post';
import CommentPost from 'flarum/components/CommentPost';
import PostWarningList from './components/PostWarningList';

export default function addWarningsToPosts() {
  Post.prototype.warnings = Model.hasMany('warnings');

  extend(CommentPost.prototype, 'footerItems', function (items) {
    const post = this.attrs.post;
    const warnings = post.warnings();

    if (!warnings) return;
    items.add(
      `warnings`,
      PostWarningList.component({
        post: post,
      })
    );
  });
}
