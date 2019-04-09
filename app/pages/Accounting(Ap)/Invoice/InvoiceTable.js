import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table, Button, Icon, Popconfirm, Input, Badge, Select } from 'antd';
import TableOptions from '../../../common/Table/TableOptions';
import InvoiceSearchForm from './InvoiceSearchForm';
import * as actionConsts from '../../../common/TitlePane/ActionConsts';
import * as localConsts from './InvoiceConsts';
import styles from '../../../common/Styles.less';
const ButtonGroup = Button.Group;
class InvoiceTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invoiceData: [],
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
      currentStatus: '',
      disabled: true,
      defaultValue: 'NA',
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ loading: false });
    if (nextProps.data != undefined) {
      var tmp = [];
      tmp.push({ invoiceId: nextProps.data.invoiceId });
      this.setState({ invoiceData: tmp });
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
  start = () => {
    this.setState({ loading: true });
    var id = this.state.invoiceData[0].invoiceId;
    var temp = [];
    temp.push(id);
    var obj = {
      invoiceIds: temp,
      statusId: this.state.currentStatus,
    };
    this.props.handleSubmitAction(
      actionConsts.ACTION_TYPE_SAVE_MASSCHANGE_INVOICE_STATUS,
      obj,
    );
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };
  handleChange = value => {
    this.setState({ currentStatus: value });
    if (this.state.selectedRowKeys.length > 0 && value != 'NA') {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  };
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
    const StatusTypeConst = localConsts.statusConst.map(k => (
      <Option key={k.label} value={k.value}>
        {k.label}
      </Option>
    ));
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
        <div>
          <div style={{ display: 'flex', marginTop: 10, marginBottom: 10 }}>
            <div style={{ marginLeft: 20 }}>Running Total (Outstanding) : </div>
            <div style={{ marginLeft: 20 }}>
              <Select
                showSearch
                onChange={this.handleChange}
                onBlur={this.enableSaveButton}
                style={{ width: '295px' }}
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                {StatusTypeConst}
              </Select>
            </div>
            <div style={{ marginLeft: 20 }}>
              <Button
                type="primary"
                value="small"
                onClick={this.start}
                disabled={this.state.disabled}
                loading={this.state.loading}
              >
                Run
              </Button>
              {/* <span style={{ marginLeft: 8 }}>
                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
              </span> */}
            </div>
          </div>
          <Table
            className={styles.tableContainer}
            rowKey="id"
            title={this.tableHeader}
            columns={this.tableColumns}
            dataSource={this.state.invoiceData}
            size="small"
            bordered={borderedValue}
            showHeader={showHeaderValue}
            scroll={{ x: 1300 }}
            rowSelection={rowSelection}
            pagination={paginationProps}
            onChange={this.handleStandardTableChange}
          />
        </div>
      </div>
    );
  }
  tableColumns = [
    {
      title: `${localConsts.COLUMN_InvoiceID}`,
      dataIndex: 'invoiceId',
      key: 'invoiceId',
      width: 130,
      fixed: 'left',
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
      title: `${localConsts.COLUMN_InvoiceType}`,
      dataIndex: 'Invoice Type',
      sorter: (a, b) => a.shortName.length - b.shortName.length,
    },
    {
      title: `${localConsts.COLUMN_InvoiceDate}`,
      dataIndex: 'Invoice Date',
    },
    {
      title: `${localConsts.COLUMN_ToParty}`,
      dataIndex: 'ToParty',
    },
    {
      title: `${localConsts.COLUMN_FromParty}`,
      dataIndex: 'FromParty',
    },
    {
      title: `${localConsts.COLUMN_Status}`,
      dataIndex: 'status',
    },
    {
      title: `${localConsts.COLUMN_Amount}`,
      dataIndex: 'amount',
    },
    {
      title: `${localConsts.Description_LABEL}`,
      dataIndex: 'DueAmount',
    },
    {
      title: `${localConsts.COLUMN_DueAmount}`,
      dataIndex: 'DueAmount',
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
        searchForm={InvoiceSearchForm}
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
InvoiceTable.propTypes = {
  setClick: PropTypes.func,
  data: PropTypes.any,
  toggleEdit: PropTypes.func,
  toggleView: PropTypes.func,
  clearSelected: PropTypes.func,
};
export default connect(({ Invoice_AP }) => ({
  data: Invoice_AP.reducerSave,
}))(InvoiceTable);
