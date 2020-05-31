Hey {!! $user->display_name !!}!

{!! $blueprint->getEmailSubject() !!}

{!! $url->to('forum')->route('savePassword') !!}

{!! $translator->trans('core.views.reset_password.new_password_label') !!}

{!! $translator->trans('askvortsov-moderator-warnings.admin.permissions.manage_warnings') !!}


{!! $url->to('forum')->route('tags') !!}

The following reason was given:

---

{!! $blueprint->warning->public_comment !!}