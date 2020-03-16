import Component from 'flarum/Component';
import app from 'flarum/app';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import WarningListItem from './WarningListItem';
import Button from 'flarum/components/Button';
import WarningModal from './WarningModal';
import listItems from 'flarum/helpers/listItems';
import ItemList from 'flarum/utils/ItemList';

export default class WarningList extends Component {
  init() {
    super.init();
    this.loading = true;
    this.warnings = [];
    this.user = this.props.params.user;
    this.refresh();
  }

  view() {
    let loading;

    if (this.loading) {
      loading = LoadingIndicator.component();
    }

    return (
      <div className="WarningList">
        <h1 className="WarningList-warnings">{app.translator.trans('askvortsov-moderator-warnings.forum.warning_list.warnings', { strikes: this.strikeCount() })}</h1>
        <div class="Warnings-toolbar">
          <ul className="Warnings-toolbar-action">{listItems(this.actionItems().toArray())}</ul>
        </div>
        <ul className="WarningList-Warnings">
          {this.warnings.map(warning => {
            return (
              <li key={warning.id()} data-id={warning.id()}>
                {WarningListItem.component({ warning })}
              </li>
            );
          })}
          {!this.loading && this.warnings.length === 0 && (
            <label>{app.translator.trans('askvortsov-moderator-warnings.forum.warning_list.no-warnings')}</label>
          )}
        </ul>
        <div className="WarningList-loadMore">{loading}</div>
      </div>
    );
  }

  actionItems() {
    const items = new ItemList();

    if (app.session.user.canManageWarnings()) {
      items.add(
        'create_warning',
        Button.component({
          children: app.translator.trans('askvortsov-moderator-warnings.forum.warning_list.add_button'),
          className: 'Button Button--primary',
          onclick: this.handleOnClickCreate.bind(this),
        })
      );
    }

    return items;
  }

  strikeCount() {
    return this.warnings.filter(warning => !warning.isHidden()).map(warning => warning.strikes()).reduce((a,b) => a + b, 0);
  }

  parseResults(results) {
    [].push.apply(this.warnings, results);
    this.loading = false;
    m.lazyRedraw();

    return results;
  }

  refresh() {
    return app.store.find('warnings', this.user.id()).then(
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
      new WarningModal({
        callback: this.refresh.bind(this),
        ...this.props.params,
      })
    );
  }
}