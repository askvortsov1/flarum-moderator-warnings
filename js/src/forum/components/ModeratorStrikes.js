import Component from 'flarum/Component';
import app from 'flarum/app';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import StrikeListItem from './StrikeListItem';
import Button from 'flarum/components/Button';
import ModeratorStrikeCreate from './ModeratorStrikesModal';
import listItems from 'flarum/helpers/listItems';
import ItemList from 'flarum/utils/ItemList';

export default class ModeratorStrikes extends Component {
    init() {
        super.init();
        this.loading = true;
        this.strikes = [];
        this.refresh();
    }

    view() {
        let loading;

        if (this.loading) {
            loading = LoadingIndicator.component();
        }

        return (
            <div className="DiscussionList">
                <h1 className="DiscussionList-strikes">{app.translator.trans('askvortsov-moderator-strikes.forum.user.strikes')}</h1>
                <div class="ModeratorStrikes-toolbar">
                    <ul className="ModeratorStrikes-toolbar-action">{listItems(this.actionItems().toArray())}</ul>
                </div>
                <ul className="DiscussionList-discussions">
                    {this.strikes.map(strike => {
                        return (
                            <li key={strike.id()} data-id={strike.id()}>
                                {StrikeListItem.component({ strike })}
                            </li>
                        );
                    })}
                    {!this.loading && this.strikes.length === 0 && (
                        <label>{app.translator.trans('askvortsov-moderator-strikes.forum.moderatorStrikes.noStrikes')}</label>
                    )}
                </ul>
                <div className="DiscussionList-loadMore">{loading}</div>
            </div>
        );
    }

    actionItems() {
        const { user } = this.props.params;
        const items = new ItemList();
        const canCreateStrike = user.canManageModeratorStrikes();

        items.add(
            'create_strike',
            Button.component({
                children: app.translator.trans('askvortsov-moderator-strikes.forum.moderatorStrikes.add_button'),
                className: 'Button Button--primary',
                onclick: this.handleOnClickCreate.bind(this),
                disabled: !canCreateStrike,
            })
        );

        return items;
    }

    parseResults(results) {
        [].push.apply(this.strikes, results);
        this.loading = false;
        m.lazyRedraw();

        return results;
    }

    refresh() {
        return app.store.find('strikes', this.props.params.user.id()).then(
            results => {
                this.strikes = [];
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
            new ModeratorStrikeCreate({
                callback: this.refresh.bind(this),
                ...this.props.params,
            })
        );
    }
}