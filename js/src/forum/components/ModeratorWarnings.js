import Component from 'flarum/Component';
import app from 'flarum/app';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import WarningListItem from './WarningListItem';
import Button from 'flarum/components/Button';
import WarningsCreate from './WarningsModal';
import listItems from 'flarum/helpers/listItems';
import ItemList from 'flarum/utils/ItemList';

export default class Warnings extends Component {
    init() {
        super.init();
        this.loading = true;
        this.warnings = [];
        this.refresh();
    }

    view() {
        let loading;

        if (this.loading) {
            loading = LoadingIndicator.component();
        }

        return (
            <div className="DiscussionList">
                <h1 className="DiscussionList-warnings">{app.translator.trans('askvortsov-moderator-warnings.forum.user.warnings')}</h1>
                <div class="Warnings-toolbar">
                    <ul className="Warnings-toolbar-action">{listItems(this.actionItems().toArray())}</ul>
                </div>
                <ul className="DiscussionList-discussions">
                    {this.warnings.map(warning => {
                        return (
                            <li key={warning.id()} data-id={warning.id()}>
                                {WarningListItem.component({ warning })}
                            </li>
                        );
                    })}
                    {!this.loading && this.warnings.length === 0 && (
                        <label>{app.translator.trans('askvortsov-moderator-warnings.forum.Warnings.noWarnings')}</label>
                    )}
                </ul>
                <div className="DiscussionList-loadMore">{loading}</div>
            </div>
        );
    }

    actionItems() {
        const { user } = this.props.params;
        const items = new ItemList();
        const canCreateWarning = user.canManageWarnings();

        items.add(
            'create_warning',
            Button.component({
                children: app.translator.trans('askvortsov-moderator-warnings.forum.Warnings.add_button'),
                className: 'Button Button--primary',
                onclick: this.handleOnClickCreate.bind(this),
                disabled: !canCreateWarning,
            })
        );

        return items;
    }

    parseResults(results) {
        [].push.apply(this.warnings, results);
        this.loading = false;
        m.lazyRedraw();

        return results;
    }

    refresh() {
        return app.store.find('warnings', this.props.params.user.id()).then(
            results => {
                this.warnings = [];
                this.parseResults(results);
            },
            () => {
                this.loading = false;
                m.redraw();
            }
        );
    }

    handleOnClickCreate(e) {
        e.preventDefault();
        app.modal.show(
            new WarningsCreate({
                callback: this.refresh.bind(this),
                ...this.props.params,
            })
        );
    }
}