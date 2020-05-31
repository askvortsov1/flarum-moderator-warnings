module.exports=function(n){var t={};function r(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return n[a].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=n,r.c=t,r.d=function(n,t,a){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:a})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var s in n)r.d(a,s,function(t){return n[t]}.bind(null,s));return a},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=30)}([function(n,t){n.exports=flarum.core.compat.app},function(n,t){n.exports=flarum.core.compat.Model},function(n,t){n.exports=flarum.core.compat["helpers/username"]},function(n,t){n.exports=flarum.core.compat.extend},function(n,t){n.exports=flarum.core.compat.Component},function(n,t){n.exports=flarum.core.compat["components/Button"]},function(n,t){n.exports=flarum.core.compat["utils/ItemList"]},function(n,t){n.exports=flarum.core.compat["models/User"]},function(n,t){n.exports=flarum.core.compat["components/UserPage"]},function(n,t){n.exports=flarum.core.compat["helpers/fullTime"]},function(n,t){n.exports=flarum.core.compat["components/NotificationGrid"]},function(n,t){n.exports=flarum.core.compat["utils/PostControls"]},function(n,t){n.exports=flarum.core.compat["utils/UserControls"]},function(n,t){n.exports=flarum.core.compat["components/Alert"]},function(n,t){n.exports=flarum.core.compat["components/Modal"]},function(n,t){n.exports=flarum.core.compat["components/LinkButton"]},function(n,t){n.exports=flarum.core.compat["components/LoadingIndicator"]},function(n,t){n.exports=flarum.core.compat["utils/classList"]},function(n,t){n.exports=flarum.core.compat["components/Dropdown"]},function(n,t){n.exports=flarum.core.compat["components/PostPreview"]},function(n,t){n.exports=flarum.core.compat["components/Separator"]},function(n,t){n.exports=flarum.core.compat["helpers/listItems"]},function(n,t){n.exports=flarum.core.compat["models/Post"]},function(n,t){n.exports=flarum.core.compat["components/CommentPost"]},function(n,t){n.exports=flarum.core.compat["helpers/icon"]},function(n,t){n.exports=flarum.core.compat["components/Notification"]},function(n,t){n.exports=flarum.core.compat["utils/computed"]},,function(n,t){n.exports=flarum.core},function(n,t){n.exports=flarum.core.compat["utils/string"]},function(n,t,r){"use strict";r.r(t);var a=r(0),s=r.n(a),e=r(10),o=r.n(e),i=(r(28),r(3)),c=r(7),u=r.n(c),p=r(1),l=r.n(p),d=r(11),f=r.n(d),h=r(12),g=r.n(h),w=r(5),v=r.n(w);function b(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}var _=r(13),k=r.n(_),y=r(14),x=r.n(y),C=r(2),W=r.n(C),N=function(n){function t(){return n.apply(this,arguments)||this}b(t,n);var r=t.prototype;return r.init=function(){n.prototype.init.call(this),this.publicComment=m.prop(""),this.privateComment=m.prop(""),this.strikes=m.prop(0)},r.className=function(){return"WarningsModal Modal--large"},r.title=function(){return app.translator.trans("askvortsov-moderator-warnings.forum.warning_modal.heading",{username:W()(this.props.user)})},r.content=function(){return console.log,m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("div",{className:"Form-group"},m("div",null,m("label",null,app.translator.trans("askvortsov-moderator-warnings.forum.warning_modal.strikes_heading"),m("input",{type:"number",className:"FormControl",value:this.strikes(),min:"0",max:"5",oninput:m.withAttr("value",this.strikes)})))),m("div",{className:"Form-group"},m("div",null,m("label",null,app.translator.trans("askvortsov-moderator-warnings.forum.warning_modal.public_comment_heading",{username:W()(this.props.user)}),m("textarea",{className:"FormControl",value:this.publicComment(),required:!0,oninput:m.withAttr("value",this.publicComment),rows:"6"})))),m("div",{className:"Form-group"},m("div",null,m("label",null,app.translator.trans("askvortsov-moderator-warnings.forum.warning_modal.private_comment_heading",{username:W()(this.props.user)}),m("textarea",{className:"FormControl",value:this.privateComment(),oninput:m.withAttr("value",this.privateComment),rows:"6"})))),m("div",{className:"Form-group"},m(v.a,{className:"Button Button--primary Button--block",type:"submit",loading:this.loading},app.translator.trans("askvortsov-moderator-warnings.forum.warning_modal.submit_button")))))},r.onsubmit=function(n){n.preventDefault(),app.alerts.dismiss(this.successAlert),this.loading=!0,this.strikes()||this.strikes(0);var t={userId:this.props.user.id(),strikes:this.strikes(),public_comment:this.publicComment(),private_comment:this.privateComment()};this.props.post&&(t.post=this.props.post),app.store.createRecord("warnings").save(t).then(this.hide.bind(this)).then(app.alerts.show(this.successAlert=new k.a({type:"success",children:app.translator.trans("askvortsov-moderator-warnings.forum.warning_modal.confirmation_message")}))).then(this.props.callback).catch((function(){}))},t}(x.a),P=r(8),A=r.n(P),I=r(15),L=r.n(I);function O(){return(O=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a])}return n}).apply(this,arguments)}var M=r(4),U=r.n(M),B=r(16),j=r.n(B),D=r(9),F=r.n(D),H=r(17),S=r.n(H),T=r(18),R=r.n(T),V=r(19),z=r.n(V),E=function(n){function t(){return n.apply(this,arguments)||this}b(t,n);var r=t.prototype;return r.view=function(){return m("div",{className:"WarningPost"},m("ul",{class:"Dropdown-menu PostPreview-preview fade in"},m("li",null,z.a.component({post:this.props.post}))))},r.config=function(n){n||this.$(".PostPreview-preview").show().css("position","relative")},t}(U.a),q=r(20),G=r.n(q),J=r(6),K=r.n(J),Q={controls:function(n,t){var r=this,a=new K.a;return["user","moderation","destructive"].forEach((function(s){var e=r[s+"Controls"](n,t).toArray();e.length&&(e.forEach((function(n){return a.add(n.itemName,n)})),a.add(s+"Separator",G.a.component()))})),a},userControls:function(n,t){return new K.a},moderationControls:function(n,t){return new K.a},destructiveControls:function(n,t){var r=new K.a;return!n.isHidden()&&app.session.user.canManageWarnings()&&r.add("hide",v.a.component({icon:"far fa-trash-alt",children:app.translator.trans("askvortsov-moderator-warnings.forum.warning_controls.delete_button"),onclick:this.hideAction.bind(n)})),n.isHidden()&&app.session.user.canManageWarnings()&&r.add("restore",v.a.component({icon:"fas fa-reply",children:app.translator.trans("askvortsov-moderator-warnings.forum.warning_controls.restore_button"),onclick:this.restoreAction.bind(n)})),n.isHidden()&&app.session.user.canDeleteWarnings()&&r.add("delete",v.a.component({icon:"fas fa-times",children:app.translator.trans("askvortsov-moderator-warnings.forum.warning_controls.delete_forever_button"),onclick:this.deleteAction.bind(n,t)})),r},hideAction:function(){return this.pushAttributes({hiddenAt:new Date,hiddenUser:app.session.user}),this.save({isHidden:!0}).then((function(){return m.redraw()}))},restoreAction:function(){return this.pushAttributes({hiddenAt:null,hiddenUser:null}),this.save({isHidden:!1}).then((function(){return m.redraw()}))},deleteAction:function(n){return n&&(n.loading=!0),this.delete().then((function(){})).catch((function(){})).then((function(){n&&(n.loading=!1),location.reload()}))}},X=function(n){function t(){return n.apply(this,arguments)||this}b(t,n);var r=t.prototype;return r.view=function(){var n=this.props.warning,t=n.addedByUser(),r=F()(n.createdAt()),a=Q.controls(n,this).toArray(),s=this.attrs();return m("div",s,a.length?R.a.component({icon:"fas fa-ellipsis-v",children:a,className:"WarningListItem-controls",buttonClassName:"Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right"}):"",m("div",{className:"WarningListItem-main"},m("h3",{className:"WarningListItem-title"},n.isHidden()?app.translator.transChoice("askvortsov-moderator-warnings.forum.warning_list_item.list_item_heading_hidden",n.strikes(),{mod_username:W()(t),strikes:n.strikes()||"0"}):app.translator.transChoice("askvortsov-moderator-warnings.forum.warning_list_item.list_item_heading",n.strikes(),{mod_username:W()(t),strikes:n.strikes()||"0"})),r,m("br",null),m("ul",{className:"WarningListItem-info"},n.post()?m("li",{className:"item-excerpt"},m("h4",{className:"WarningListItem-subtitle"},app.translator.trans("askvortsov-moderator-warnings.forum.warning_list_item.linked_post")),E.component({post:n.post()})):"",m("li",{className:"item-excerpt"},m("h4",{className:"WarningListItem-subtitle"},app.translator.trans("askvortsov-moderator-warnings.forum.warning_list_item.public_comment")),m("p",{class:"warning-comment"},m.trust(n.public_comment()))),app.session.user.canManageWarnings()?m("li",{className:"item-excerpt"},m("h4",{className:"WarningListItem-subtitle"},app.translator.trans("askvortsov-moderator-warnings.forum.warning_list_item.private_comment")),m("p",{class:"warning-comment"},m.trust(n.private_comment()))):"")))},r.attrs=function(){var n=this.props.warning,t={};return t.className=(t.className||"")+" "+S()({WarningListItem:!0,"WarningListItem--hidden":n.isHidden()}),t},t}(U.a),Y=r(21),Z=r.n(Y),nn=function(n){function t(){return n.apply(this,arguments)||this}b(t,n);var r=t.prototype;return r.init=function(){n.prototype.init.call(this),this.loading=!0,this.warnings=[],this.user=this.props.params.user,this.refresh()},r.view=function(){var n;return this.loading&&(n=j.a.component()),m("div",{className:"WarningList"},m("h1",{className:"WarningList-warnings"},this.strikeCount()?s.a.translator.transChoice("askvortsov-moderator-warnings.forum.warning_list.warnings",this.strikeCount(),{strikes:this.strikeCount()||"0"}):s.a.translator.trans("askvortsov-moderator-warnings.forum.warning_list.warnings_no_strikes")),m("div",{class:"Warnings-toolbar"},m("ul",{className:"Warnings-toolbar-action"},Z()(this.actionItems().toArray()))),m("ul",{className:"WarningList-Warnings"},this.warnings.map((function(n){return m("li",{key:n.id(),"data-id":n.id()},X.component({warning:n}))})),!this.loading&&0===this.warnings.length&&m("label",null,s.a.translator.trans("askvortsov-moderator-warnings.forum.warning_list.no_warnings"))),m("div",{className:"WarningList-loadMore"},n))},r.actionItems=function(){var n=new K.a;return s.a.session.user.canManageWarnings()&&n.add("create_warning",v.a.component({children:s.a.translator.trans("askvortsov-moderator-warnings.forum.warning_list.add_button"),className:"Button Button--primary",onclick:this.handleOnClickCreate.bind(this)})),n},r.strikeCount=function(){return this.warnings.filter((function(n){return!n.isHidden()})).map((function(n){return n.strikes()})).reduce((function(n,t){return n+t}),0)},r.parseResults=function(n){return[].push.apply(this.warnings,n),this.loading=!1,m.lazyRedraw(),n},r.refresh=function(){var n=this;return s.a.store.find("warnings",this.user.id()).catch((function(){})).then((function(t){n.warnings=[],n.parseResults(t)}))},r.handleOnClickCreate=function(n){n.preventDefault(),s.a.modal.show(new N(O({callback:this.refresh.bind(this)},this.props.params)))},t}(U.a),tn=function(n){function t(){return n.apply(this,arguments)||this}b(t,n);var r=t.prototype;return r.init=function(){n.prototype.init.call(this),this.loadUser(m.route.param("username"))},r.content=function(){if(app.session.user&&(app.session.user.canViewWarnings()||this.user.id()===app.session.user.id()&&this.user.visibleWarningCount()>0))return m("div",{className:"WarningsUserPage"},nn.component({params:{user:this.user,sort:"newest"}}))},t}(A.a),rn=function(){app.routes["user.warnings"]={path:"/u/:username/warnings",component:tn.component()},Object(i.extend)(A.a.prototype,"navItems",(function(n){app.session.user&&(app.session.user.canViewWarnings()||this.user.id()===app.session.user.id()&&this.user.visibleWarningCount()>0)&&n.add("warnings",L.a.component({href:app.route("user.warnings",{username:this.user.username()}),children:app.translator.trans("askvortsov-moderator-warnings.forum.user.warnings"),icon:"fas fa-exclamation-circle"}),10)}))},an=r(22),sn=r.n(an),en=r(23),on=r.n(en),cn=r(24),un=r.n(cn),mn=function(n){function t(){return n.apply(this,arguments)||this}b(t,n);var r=t.prototype;return r.init=function(){n.prototype.init.call(this),this.warning=this.props.warning},r.view=function(){console.log(this.warning.strikes());var n=F()(this.warning.createdAt());return m("a",{className:"WarningPreview",href:app.route("user.warnings",{username:this.warning.warnedUser().username()}),config:m.route},m("div",{className:"WarningListItem-main"},m("h3",{className:"WarningListItem-title"},app.translator.transChoice("askvortsov-moderator-warnings.forum.post.warning",this.warning.strikes(),{strikes:this.warning.strikes()||"0",mod_username:W()(this.warning.addedByUser())})),n,m("br",null),m("ul",{className:"WarningListItem-info"},m("li",{class:"item-excerpt"},m("h4",{className:"WarningListItem-subtitle"},app.translator.trans("askvortsov-moderator-warnings.forum.warning_list_item.public_comment")),m("p",null,m.trust(this.warning.public_comment()))),app.session.user.canManageWarnings()?m("li",{class:"item-excerpt"},m("h4",{className:"WarningListItem-subtitle"},app.translator.trans("askvortsov-moderator-warnings.forum.warning_list_item.private_comment")),m("p",null,m.trust(this.warning.private_comment()))):"")))},t}(U.a),pn=function(n){function t(){return n.apply(this,arguments)||this}b(t,n);var r=t.prototype;return r.init=function(){n.prototype.init.call(this),this.warning=this.props.warning},r.view=function(){return m("div",{className:"Post-warning"},m("span",{className:"Post-warning-summary"},un()("fas fa-exclamation-circle"),this.warning.strikes()?app.translator.transChoice("askvortsov-moderator-warnings.forum.post.warning",this.warning.strikes(),{strikes:this.warning.strikes()||"0",mod_username:W()(this.warning.addedByUser())}):app.translator.trans("askvortsov-moderator-warnings.forum.post.warning_no_strikes",{mod_username:W()(this.warning.addedByUser())})))},r.config=function(n){var t=this;if(!n){var r,a=this.warning,s=function(){t.$(".Post-warning-preview").removeClass("in").one("transitionend",(function(){$(this).hide()}))},e=$('<ul class="Dropdown-menu Post-warning-preview fade"/>');this.$().append(e),this.$().children().hover((function(){clearTimeout(r),r=setTimeout((function(){!e.hasClass("in")&&e.is(":visible")||(m.render(e[0],m("li",{"data-id":a.id()},mn.component({warning:a}))),e.show(),setTimeout((function(){return e.off("transitionend").addClass("in")})))}),200)}),(function(){clearTimeout(r),r=setTimeout(s,250)})),$(".Post-warning").find(".Post-warning-summary a").hover((function(){$(".Post-warning").find('[data-number="'+$(this).data("number")+'"]').addClass("active")}),(function(){$(".Post-warning").find("[data-number]").removeClass("active")}))}},t}(U.a),ln=function(n){function t(){return n.apply(this,arguments)||this}b(t,n);var r=t.prototype;return r.init=function(){n.prototype.init.call(this),this.post=this.props.post},r.view=function(){return m("div",{className:"Post-warning-list"},this.props.post.warnings().map((function(n){return pn.component({warning:n})})))},t}(U.a);var dn=r(25),fn=r.n(dn),hn=(r(29),function(n){function t(){return n.apply(this,arguments)||this}b(t,n);var r=t.prototype;return r.icon=function(){return"fas fa-exclamation-circle"},r.href=function(){return app.route("user.warnings",{username:app.session.user.username()})},r.content=function(){var n=this.props.notification.subject();return n.strikes()?app.translator.transChoice("askvortsov-moderator-warnings.forum.notifications.warning_text",n.strikes(),{mod_username:W()(this.props.notification.fromUser()),strikes:n.strikes()||"0"}):app.translator.trans("askvortsov-moderator-warnings.forum.notifications.warning_no_strikes_text",{mod_username:W()(this.props.notification.fromUser())})},t}(fn.a)),gn=r(26),wn=r.n(gn),vn=function(n){function t(){return n.apply(this,arguments)||this}return b(t,n),t}(l.a);O(vn.prototype,{id:l.a.attribute("id"),public_comment:l.a.attribute("public_comment"),private_comment:l.a.attribute("private_comment"),strikes:l.a.attribute("strikes"),createdAt:l.a.attribute("createdAt",l.a.transformDate),isHidden:wn()("hiddenAt",(function(n){return!!n})),hiddenAt:l.a.attribute("hiddenAt",l.a.transformDate),warnedUser:l.a.hasOne("warnedUser"),hiddenByUser:l.a.hasOne("hiddenByUser"),addedByUser:l.a.hasOne("addedByUser"),post:l.a.hasOne("post")}),s.a.initializers.add("askvortsov/flarum-moderator-warnings",(function(n){n.store.models.warnings=vn,u.a.prototype.canViewWarnings=l.a.attribute("canViewWarnings"),u.a.prototype.canManageWarnings=l.a.attribute("canManageWarnings"),u.a.prototype.canDeleteWarnings=l.a.attribute("canDeleteWarnings"),u.a.prototype.visibleWarningCount=l.a.attribute("visibleWarningCount"),Object(i.extend)(f.a,"moderationControls",(function(n,t){s.a.session.user&&s.a.session.user.canManageWarnings()&&n.add("warning",m(v.a,{icon:"fas fa-exclamation-circle",onclick:function(){return s.a.modal.show(new N({callback:function(){location.reload()},user:t.user(),post:t}))}},s.a.translator.trans("askvortsov-moderator-warnings.forum.post_controls.warning_button")))})),Object(i.extend)(g.a,"moderationControls",(function(n,t){s.a.session.user&&s.a.session.user.canManageWarnings()&&n.add("warning",m(v.a,{icon:"fas fa-exclamation-circle",onclick:function(){return s.a.modal.show(new N({callback:function(){location.reload()},user:t}))}},s.a.translator.trans("askvortsov-moderator-warnings.forum.post_controls.warning_button")))})),rn(),sn.a.prototype.warnings=l.a.hasMany("warnings"),Object(i.extend)(on.a.prototype,"footerItems",(function(n){var t=this.props.post;t.warnings()&&n.add("warnings",ln.component({post:t}))})),n.notificationComponents.warning=hn,Object(i.extend)(o.a.prototype,"notificationTypes",(function(t){t.add("warning",{name:"warning",icon:"fas fa-exclamation-circle",label:n.translator.trans("askvortsov-moderator-warnings.forum.settings.warning_notification_label")})}))}))}]);
//# sourceMappingURL=forum.js.map