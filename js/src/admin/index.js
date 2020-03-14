import app from 'flarum/app';
import { extend } from 'flarum/extend';
import PermissionGrid from 'flarum/components/PermissionGrid';

app.initializers.add('askvortsov/flarum-moderator-strikes', () => {
    extend(PermissionGrid.prototype, 'moderateItems', items => {
        items.add(
            'moderator-strikes-view',
            {
                icon: 'fas fa-images',
                label: app.translator.trans('fof-moderator-strikes.admin.permissions.viewstrikes'),
                permission: 'user.viewModeratorStrikes',
            },
            1
        ),
            items.add(
                'moderator-strikes-manage',
                {
                    icon: 'fas fa-edit',
                    label: app.translator.trans('fof-moderator-strikes.admin.permissions.createstrikes'),
                    permission: 'user.manageModeratorStrikes',
                },
                1
            );
    });
});