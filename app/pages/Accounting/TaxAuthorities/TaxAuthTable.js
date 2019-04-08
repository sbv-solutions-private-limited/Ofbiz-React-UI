import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table, Button, Icon, Popconfirm, Input, Badge } from 'antd';
import TableOptions from '../../../common/Table/TableOptions';
import TaxAuthForm from './TaxAuthForm';
import * as actionConsts from '../../../common/TitlePane/ActionConsts';
import * as localConsts from './TaxAuthConsts';
import styles from '../../../common/Styles.less';
const ButtonGroup = Button.Group;
class TaxAuthTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: [],
      selectedObjects: [],
      loading: false,
      lazyDataLoading: false,
      filtersAppliedValue: {},
      borderedValue: true,
      showHeaderValue: true,
      scrollValue: { x: 1000 },
      expandableValue: this.expandedRowRenderPanel,
      rowSelectionValue: true,
      paginationValue: { position: 'bottom' },
      Tax: [],
      taxAuthGeoId : 'NA'
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ loading: false });
    if (nextProps.Tax != undefined) {
      var tmp = [];
      tmp.push({ taxAuthGeoId: this.state.taxAuthGeoId});
      this.setState({ Tax: tmp });
    }
  }
  componentDidMount() {
    this.props.setClick(value => {
      this.toggleTableRowsSelected(value);
    });
    this.props.clearSelected(() => {
      this.toggleTableRowsSelectedClear();
    });
  }
  render() {
    const {
      selectedRowKeys,
      borderedValue,
      showHeaderValue,
      scrollValue,
      expandableValue,
      rowSelectionValue,
    } = this.state;
    let { data } = this.props;
    data = data.content || [];
    const rowSelection = rowSelectionValue
      ? {
          selectedRowKeys,
          onChange: (selectedKeys, selectedRows) => {
            this.onSelectChange(selectedKeys, selectedRows);
          },
        }
      : undefined;
    const paginationProps = {
      ...this.state.paginationValue,
      total: this.props.data.totalElements,
      showTotal: this.showTotal,
      showQuickJumper: true,
      defaultCurrent: 1,
      onShowSizeChange: this.onShowSizeChange,
      showSizeChanger: true,
    };
    return (
      <div>
        <div className={styles.tableContainerParent}>
          <Table
            className={styles.tableContainer}
            rowKey="id"
            title={this.tableHeader}
            columns={this.tableColumns}
            dataSource={this.state.Tax}
            size="small"
            bordered={borderedValue}
            showHeader={showHeaderValue}
            scroll={scrollValue}
            pagination={paginationProps}
            onChange={this.handleStandardTableChange}
          />
        </div>
      </div>
    );
  }
  tableColumns = [
    {
      title: `${localConsts.TaxAuthGeoID}`,
      dataIndex: 'taxAuthGeoId',
      key: 'taxAuthGeoId',
      width: 300,
      sorter: (a, b) => a.name.length - b.name.length,
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div className={styles.customFilterDropdown}>
          <Input
            className={styles.tableColumnName}
            placeholder={localConsts.COLUMN_NAME_PLACEHOLDER}
            value={selectedKeys[0]}
            ref={ele => (this.searchInput = ele)}
            onChange={e =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={this.handleColumnFilterSearch(selectedKeys, confirm)}
          />
          <ButtonGroup>
            <Button
              className={styles.tableColumnNameButton}
              type="primary"
              icon="search"
              size="default"
              onClick={this.handleColumnFilterSearch(selectedKeys, confirm)}
            />
            <Button
              type="danger"
              icon="rollback"
              size="default"
              onClick={this.handleColumnFilterReset(clearFilters)}
            />
          </ButtonGroup>
        </div>
      ),
      filterIcon: filtered => (
        <Icon type="filter" style={{ color: filtered ? 'red' : '#aaa' }} />
      ),
      onFilter: (value, record) => {
        const returnValue =
          (record.name ? record.name.toLowerCase() : '') +
          (record.code ? `${record.code}`.toLowerCase() : '');
        return returnValue.includes(value);
      },
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => {
            this.searchInput.focus();
          });
        }
      },
      render: (text, data) => {
        const { searchText } = this.state;
        const numbers = /^[0-9]+$/;
        let badgeType = styles.badgeDefault;
        if (data.blocked === true) {
          badgeType = styles.badgeError;
        } else if (data.status === true) {
          badgeType = styles.badgeSuccess;
        }
        return searchText ? (
          searchText.match(numbers) ? (
            <div>
              <Button
                className={styles.anchorNameStyle}
                onClick={() => {
                  this.props.handleSubmitAction(
                    actionConsts.ACTION_TYPE_SINGLE_SELECTION,
                    data,
                  );
                  this.props.toggleView();
                }}
              >
                {text
                  .split(
                    new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'),
                  )
                  .map(
                    (fragment, i) =>
                      fragment.toLowerCase() === searchText.toLowerCase() ? (
                        <span key={i} className={styles.highlight}>
                          {fragment}
                        </span>
                      ) : (
                        fragment
                      ),
                  )}
              </Button>
              <span className={styles.anchorCode}>
                {data.code
                  .split(
                    new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'),
                  )
                  .map(
                    (fragment, i) =>
                      fragment === searchText ? (
                        <span key={i} className={styles.highlight}>
                          {fragment}
                        </span>
                      ) : (
                        fragment
                      ),
                  )}
              </span>
            </div>
          ) : (
            <div>
        
              <Button
                className={styles.anchorNameStyle}
                onClick={() => {
                  this.props.handleSubmitAction(
                    actionConsts.ACTION_TYPE_SINGLE_SELECTION,
                    data,
                  );
                }}
              >
                {text
                  .split(
                    new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'),
                  )
                  .map(
                    (fragment, i) =>
                      fragment.toLowerCase() === searchText.toLowerCase() ? (
                        <span key={i} className={styles.highlight}>
                          {fragment}
                        </span>
                      ) : (
                        fragment
                      ),
                  )}
              </Button>
            </div>
          )
        ) : (
          <div>
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_SINGLE_SELECTION,
                  data,
                );
                this.props.toggleView();
              }}
            >
              {text}
            </Button>
          </div>
        );
      },
    },
    {
      title: `${localConsts.TaxAuthorityParty}`,
      dataIndex: 'Invoice Type',
      width: 300,
      sorter: (a, b) => a.shortName.length - b.shortName.length,
    },
    {
      title: `${localConsts.RequireTaxIdForExemption}`,
      dataIndex: 'Invoice Date',
      width: 250,
    },
    {
      title: `${localConsts.TaxIdFormatPattern}`,
      dataIndex: 'Invoice Date',
      width: 250,
    },
    {
      title: `${localConsts.IncludeTaxInPrice}`,
      dataIndex: 'Invoice Date',
      width: 250,
    },

  ];
  expandedRowRenderPanel = record => (
    <div>
      <div className={styles.description}>
        <span className={styles.remarks}>Description:</span> {record.remarks}
      </div>
      <div className={styles.description}>
        <span className={styles.address}>Address:</span> {record.addresses}
      </div>
    </div>
  );
  tableHeader = () => (
    <div>
      <TableOptions
        handleTableProperties={this.handleTableProperties}
        handleSubmitAction={this.props.handleSubmitAction}
        handleLazyDataLoading={this.handleLazyDataLoading}
        // searchForm={PaymentGroupsSearchForm}
      />
    </div>
  );
  handleTableProperties = (
    filtersAppliedParam,
    borderedParam,
    showHeaderParam,
    fixedHeaderParam,
    expandableParam,
    rowSelectionParam,
    paginationParam,
  ) => {
    const fixedHeader = fixedHeaderParam ? { x: 1000, y: 340 } : { x: 1000 };
    const expandable = expandableParam
      ? this.expandedRowRenderPanel
      : undefined;
    this.setState({
      filtersAppliedValue: filtersAppliedParam,
      borderedValue: borderedParam,
      showHeaderValue: showHeaderParam,
      scrollValue: fixedHeader,
      expandableValue: expandable,
      rowSelectionValue: rowSelectionParam,
      paginationValue: paginationParam,
    });
  };
  handleLazyDataLoading = checked => {
    this.setState({ lazyDataLoading: checked }, () => {
      const { lazyDataLoading, currentPageValue, pageSizeValue } = this.state;
      const params = {
        currentPage: currentPageValue,
        pageSize: pageSizeValue,
        ...this.state.filtersAppliedValue,
        isLazy: lazyDataLoading,
      };
      this.props.handleSubmitAction(actionConsts.ACTION_TYPE_LIST, params);
    });
  };
  handleStandardTableChange = (pagination, filters, sorter) => {
    this.setState(
      {
        currentPageValue: pagination.current - 1,
        pageSizeValue: pagination.pageSize,
      },
      () => {
        if (this.state.lazyDataLoading === true) {
          let sortOrder = '';
          if (sorter.order === 'descend') {
            sortOrder = 'desc';
          } else if (sorter.order === 'ascend') {
            sortOrder = 'asc';
          }
          let sortField = '';
          if (sorter.field) {
            sortField = sorter.field;
          }
          const params = {
            sortField,
            sortOrder,
            currentPage: pagination.current - 1,
            pageSize: pagination.pageSize,
            ...this.state.filtersAppliedValue,
            isLazy: true,
          };
          this.setState(
            {
              loading: true,
            },
            () => {
              this.props.handleSubmitAction(
                actionConsts.ACTION_TYPE_LIST,
                params,
              );
            },
          );
        }
      },
    );
  };
  showTotal = (total, range) => `${range[0]}-${range[1]} of ${total} items`;
  onShowSizeChange = () => {};
  toggleTableRowsSelected = value => {
    const selectedIds = [];
    const data = this.props.data.content || [];
    data.map(v => selectedIds.push(v.id));
    if (value === true) {
      this.setState(
        {
          selectedRowKeys: selectedIds,
          selectedObjects: data,
        },
        () => {
          if (this.state.selectedObjects) {
            this.state.selectedObjects.map(v => (v.dialogContent = v.name));
          }
          const dataForAction = {
            selectedIds: this.state.selectedRowKeys,
            selectedName: this.state.selectedObjects,
          };
          this.props.handleSubmitAction(
            actionConsts.ACTION_TYPE_MULTIPLE_SELECTION,
            dataForAction,
          );
        },
      );
    } else {
      this.setState({ selectedRowKeys: [], selectedObjects: [] }, () => {
        const dataForAction = {
          selectedIds: this.state.selectedRowKeys,
          selectedName: this.state.selectedObjects,
        };
        this.props.handleSubmitAction(
          actionConsts.ACTION_TYPE_MULTIPLE_SELECTION,
          dataForAction,
        );
      });
    }
  };
  onSelectChange = (selectedRowKeys, selectedRows) => {
    this.setState(
      {
        selectedRowKeys,
        selectedObjects: selectedRows,
      },
      () => {
        this.state.selectedObjects.map(v => (v.dialogContent = v.name));
        const dataForAction = {
          selectedIds: this.state.selectedRowKeys,
          selectedName: this.state.selectedObjects,
        };
        this.props.handleSubmitAction(
          actionConsts.ACTION_TYPE_MULTIPLE_SELECTION,
          dataForAction,
        );
      },
    );
  };
  toggleTableRowsSelectedClear = () => {
    this.setState({ selectedRowKeys: [] });
  };
  handleColumnFilterSearch = (selectedKeys, handleConfirm) => () => {
    handleConfirm();
    this.setState({ searchText: selectedKeys[0] });
  };
  handleColumnFilterReset = clearFilters => () => {
    clearFilters();
    this.setState({ searchText: '' });
  };
}
TaxAuthTable.propTypes = {
  setClick: PropTypes.func,
  handleSubmitAction: PropTypes.func,
  data: PropTypes.any,
  toggleEdit: PropTypes.func,
  toggleView: PropTypes.func,
  clearSelected: PropTypes.func,
};
export default connect(({ Tax_Auth_Accounting }) => ({
  data: [],
  Tax : Tax_Auth_Accounting.reducerSave,
  paymentGroup: [],
}))(TaxAuthTable);
