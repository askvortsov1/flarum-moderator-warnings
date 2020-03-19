Hey {!! $user->display_name !!}!

{!! $blueprint->getEmailSubject() !!}

{!! app()->url() !!}/u/{!! $blueprint->warning->warnedUser->username !!}/warnings

The following reason was given:

---

{!! $blueprint->warning->public_comment !!}