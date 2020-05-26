import app from "flarum/app";
import { extend } from "flarum/extend";
import PermissionGrid from "flarum/components/PermissionGrid";

app.initializers.add("askvortsov/flarum-moderator-warnings", () => {
  extend(PermissionGrid.prototype, "moderateItems", (items) => {
    items.add(
      "moderator-warnings-view",
      {
        icon: "fas fa-images",
        label: app.translator.trans(
          "askvortsov-moderator-warnings.admin.permissions.view_warnings"
        ),
        permission: "user.viewWarnings",
      },
      3
    );
    items.add(
      "moderator-warnings-manage",
      {
        icon: "fas fa-edit",
        label: app.translator.trans(
          "askvortsov-moderator-warnings.admin.permissions.manage_warnings"
        ),
        permission: "user.manageWarnings",
      },
      3
    );
    items.add(
      "moderator-warnings-delete",
      {
        icon: "fas fa-times",
        label: app.translator.trans(
          "askvortsov-moderator-warnings.admin.permissions.delete_warnings"
        ),
        permission: "user.deleteWarnings",
      },
      3
    );
  });
});
