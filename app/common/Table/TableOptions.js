/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Select, Switch, Button, Icon } from 'antd';
import styles from './TableOptions.less';

const ButtonGroup = Button.Group;
const { Option } = Select;

class TableOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSettingsButton: false,
      toggleSearchButton: false,
      toggleCloseButton: true,

      toggleSettingsPane: true,
      toggleSearchPane: true,

      filtersApplied: {},

      bordered: false,
      showHeader: true,
      fixedHeader: false,
      expandable: true,
      rowSelection: true,
      pagination: { position: 'bottom' },
    };
  }

  handleSearchFilters = filtersAppliedList => {
    this.setState({ filtersApplied: filtersAppliedList });
    this.toggleButtons('close');
  };

  toggleButtons = toggleFor => {
    if (_.isEqual(toggleFor, 'settings')) {
      this.setState({
        toggleSettingsButton: true,
        toggleSearchButton: false,
        toggleCloseButton: false,
        toggleSettingsPane: false,
        toggleSearchPane: true,
      });
    } else if (_.isEqual(toggleFor, 'search')) {
      this.setState({
        toggleSettingsButton: false,
        toggleSearchButton: true,
        toggleCloseButton: false,
        toggleSettingsPane: true,
        toggleSearchPane: false,
      });
    } else if (_.isEqual(toggleFor, 'close')) {
      this.setState({
        toggleSettingsButton: false,
        toggleSearchButton: false,
        toggleCloseButton: true,
        toggleSettingsPane: true,
        toggleSearchPane: true,
      });
    }
  };

  handleChange = prop => enable => {
    this.setState({ [prop]: enable }, () => {
      this.callParentFunction();
    });
  };

  handlePaginationChange = value => {
    this.setState(
      {
        pagination: { position: value },
      },
      () => {
        this.callParentFunction();
      },
    );
  };

  callParentFunction() {
    const {
      filtersApplied,
      bordered,
      showHeader,
      fixedHeader,
      expandable,
      rowSelection,
      pagination,
    } = this.state;
    this.props.handleTableProperties(
      filtersApplied,
      bordered,
      showHeader,
      fixedHeader,
      expandable,
      rowSelection,
      pagination,
    );
  }

  getFlattenString(obj) {
    const filtersMapped = _.map(
      obj,
      (v, k) => `${_.startCase(_.toLower(k))}: ${v}`,
    ).join(', ');
    if (!_.isEmpty(filtersMapped)) {
      return `Filtered by - ${filtersMapped}`;
    }
    return ``;
  }

  render() {
    const {
      toggleSettingsButton,
      toggleSearchButton,
      toggleCloseButton,
      toggleSettingsPane,
      toggleSearchPane,
      filtersApplied,
    } = this.state;

    const SearchForm = this.props.searchForm;
    const getSearchForm = () => {
      if (SearchForm !== 'NA') {
        return (
          <SearchForm
            handleSubmitAction={this.props.handleSubmitAction}
            handleSearchFilters={this.handleSearchFilters}
          />
        );
      }
      return <span />;
    };
    const LocalButton = this.props.customButton;
    const getCustomButton = () => {
      if (LocalButton !== 'NA') {
        return LocalButton;
      }
      return <span />;
    };

    return (
      <div style={{ display: 'block' }}>
        <div className={styles.tableHeader}>
          <div style={{ display: 'flow-root', height: '24px' }}>
            <Fragment>{getCustomButton()}</Fragment>
            <div className={styles.filterPanel}>
              <span />
              <span style={{ fontWeight: 'normal' }}>
                {this.getFlattenString(filtersApplied)}
              </span>
            </div>
            <ButtonGroup style={{ marginTop: '0px', float: 'right' }}>
              <Button
                type="default"
                icon="setting"
                size="small"
                disabled={toggleSettingsButton}
                onClick={() => {
                  this.toggleButtons('settings');
                }}
              />
              <Button
                type="default"
                htmlType="submit"
                icon="filter"
                size="small"
                hidden={SearchForm === 'NA'}
                disabled={toggleSearchButton}
                onClick={() => {
                  this.toggleButtons('search');
                }}
              />
              <Button
                type="danger"
                icon="close"
                size="small"
                disabled={toggleCloseButton}
                style={{ marginLeft: 4 }}
                onClick={() => {
                  this.toggleButtons('close');
                }}
              />
            </ButtonGroup>
            <Switch
              size="default"
              hidden={SearchForm === 'NA'}
              style={{ marginTop: '0px', marginRight: '8px', float: 'right' }}
              checkedChildren="Lazy"
              unCheckedChildren="Eager"
              onChange={this.props.handleLazyDataLoading}
              defaultChecked
            />
          </div>
          <div className={styles.toggleSettings} hidden={toggleSettingsPane}>
            <div layout="inline">
              <label>
                Bordered: 
                <Switch
                  size="small"
                  className={styles.tableOptionsLabel}
                  onChange={this.handleChange('bordered')}
                  checkedChildren={<Icon type="check" />}
                  unCheckedChildren={<Icon type="close" />}
                  defaultChecked
                />
              </label>
              <label>
                Column Header: 
                <Switch
                  size="small"
                  className={styles.tableOptionsLabel}
                  checkedChildren={<Icon type="check" />}
                  unCheckedChildren={<Icon type="close" />}
                  defaultChecked
                  onChange={this.handleChange('showHeader')}
                />
              </label>
              <label>
                Fixed Header: 
                <Switch
                  size="small"
                  className={styles.tableOptionsLabel}
                  checkedChildren={<Icon type="check" />}
                  unCheckedChildren={<Icon type="close" />}
                  defaultChecked={false}
                  onChange={this.handleChange('fixedHeader')}
                />
              </label>
              <label>
                Expandable: 
                <Switch
                  size="small"
                  className={styles.tableOptionsLabel}
                  defaultChecked
                  checkedChildren={<Icon type="check" />}
                  unCheckedChildren={<Icon type="close" />}
                  onChange={this.handleChange('expandable')}
                />
              </label>
              <label>
                Multi Select: 
                <Switch
                  size="small"
                  className={styles.tableOptionsLabel}
                  defaultChecked
                  checkedChildren={<Icon type="check" />}
                  unCheckedChildren={<Icon type="close" />}
                  checked={!!this.state.rowSelection}
                  onChange={this.handleChange('rowSelection')}
                />
              </label>
              <label>Pagination:
                <Select
                  className={styles.tableOptionsLabel}
                  defaultValue="bottom"
                  style={{ width: '90px' }}
                  size="small"
                  onChange={this.handlePaginationChange}
                >
                  <Option value="top">Top</Option>
                  <Option value="bottom">Bottom</Option>
                  <Option value="both">Both</Option>
                  <Option value="none">None</Option>
                </Select>
              </label>
            </div>
          </div>
          <div className={styles.toggleSettings} hidden={toggleSearchPane}>
            {getSearchForm()}
          </div>
        </div>
      </div>
    );
  }
}

TableOptions.defaultProps = {
  searchForm: 'NA',
  customButton: 'NA',
};

TableOptions.propTypes = {
  handleSubmitAction: PropTypes.func,
  handleTableProperties: PropTypes.func,
  handleLazyDataLoading: PropTypes.func,
  searchForm: PropTypes.any,
  customButton: PropTypes.any,
};

export default TableOptions;
