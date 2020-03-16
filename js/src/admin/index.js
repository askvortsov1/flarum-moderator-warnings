import app from 'flarum/app';
import { extend } from 'flarum/extend';
import PermissionGrid from 'flarum/components/PermissionGrid';

app.initializers.add('askvortsov/flarum-moderator-warnings', () => {
    extend(PermissionGrid.prototype, 'moderateItems', items => {
        items.add(
            'moderator-warnings-view',
            {
                icon: 'fas fa-images',
                label: app.translator.trans('fof-moderator-warnings.admin.permissions.viewwarnings'),
                permission: 'user.viewWarnings',
            },
            1
        ),
            items.add(
                'moderator-warnings-manage',
                {
                    icon: 'fas fa-edit',
                    label: app.translator.trans('fof-moderator-warnings.admin.permissions.createwarnings'),
                    permission: 'user.manageWarnings',
                },
                1
            );
    });
});