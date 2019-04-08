import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  Col,
  Form,
  Input,
  Tag,
  Tabs,
  AutoComplete,
  Popconfirm,
  Checkbox,
  DatePicker,
  Row,
  Table,
  Divider,
  Select,
  Badge,
  Button,
  Icon,
  Drawer,
  Card,
  Popover,
} from 'antd';
import { formItemLayout } from '../../../common/Layout/FormItemLayout';
import * as actionConsts from '../../../common/TitlePane/ActionConsts';
import * as commonConsts from '../../../common/commonConsts';
import * as localConsts from './PaymentConsts';
import styles from '../../../common/Styles.less';
import { Link } from 'react-router-dom';
import moment from 'moment';
const FormItem = Form.Item;
const InputGroup = Input.Group;
const { TabPane } = Tabs;
const newObject = {
  id: '',
  FromPartyID: '',
  ToPartyID: '',
  InvoiceType: '',
  InvoiceDate: '',
  DueDate: '',
  Description: '',
  RoleTypeId: '',
  BillingAccountID: '',
  Currency: '',
  RecurrenceInfoId: '',
  InvoiceMessage: '',
  ReferenceNumber: '',
  deletedOn: null,
  modifiedBy: '',
  modifiedIp: '',
  modifiedOn: '',
  addressObj: null,
  contactPersonDetailsObj: [],
  contactAddresses: [],
  contactPersons: [],
  commentsData: [],
  toPaymentId: '',
  billingAccountId: '',
  taxAuthGeoId: '',
};
const CheckableTag = Tag.CheckableTag;
class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: newObject,
      isExistMessage: '',
      commentsData: [],
      enableSaveButtonValue: false,
      stateId: 'Not Paid',
      visibleAddress: false,
      visibleContactPerson: false,
      visible: false,
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
      visible6: false,
      visible7: false,
      visible8: false,
      visible9: false,
      key: this.props.key,
      activeKey: '2',
      Payment: [],
      down: false,
      tagsFromServer: [
        'Status To Received',
        'Status To Cancelled',
        'Print As Check',
        'Status To Void',
      ],
      selectedTags: [],
      paymentId: '1000',
      taxData: [],
      BillingData: [],
      paymentData: [],
      invoiceData: [],
      currKey: 'invoice',
      invoiceId: '',
      paymentApplicationId: '',
      paymentId: '10031',
    };
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  showDrawer2 = () => {
    this.setState({
      visible2: true,
    });
  };
  onClose2 = () => {
    this.setState({
      visible2: false,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  showDrawer1 = () => {
    this.setState({
      visible1: true,
    });
  };
  onClose1 = () => {
    this.setState({
      visible1: false,
    });
    billingAccountId;
  };
  showDrawer3 = () => {
    this.setState({
      visible3: true,
    });
  };
  onClose3 = () => {
    this.setState({
      visible3: false,
    });
  };
  showDrawer4 = () => {
    this.setState({
      visible4: true,
    });
  };
  onClose4 = () => {
    this.setState({
      visible4: false,
    });
  };
  showDrawer5 = () => {
    this.setState({
      visible5: true,
    });
  };
  onClose5 = () => {
    this.setState({
      visible5: false,
    });
  };
  showDrawer6 = () => {
    this.setState({
      visible6: true,
    });
  };
  onClose6 = () => {
    this.setState({
      visible6: false,
    });
  };
  showDrawer7 = () => {
    this.setState({
      visible7: true,
    });
  };
  onClose7 = () => {
    this.setState({
      visible7: false,
    });
  };
  showDrawer8 = () => {
    this.setState({
      visible8: true,
    });
  };
  onClose8 = () => {
    this.setState({
      visible8: false,
    });
  };
  showDrawer9 = () => {
    this.setState({
      visible9: true,
    });
  };
  onClose9 = () => {
    this.setState({
      visible9: false,
    });
  };
  handleChange = (tag, checked) => {
    const { selectedTags } = this.state;
    var statusId = '';
    if (tag === 'Status To Received') {
      statusId = 'PMNT_RECEIVED';
    }
    if (tag === 'Status To Cancelled') {
      statusId = 'PMNT_CANCELLED';
    }
    if (tag === 'Print As Check') {
      statusId = '';
    }
    if (tag === 'Status To Void') {
      statusId = 'PMNT_VOID';
    }
    var obj = {
      paymentId: this.state.paymentId,
      statusId: statusId,
    };
    this.props.handleSubmitAction(
      actionConsts.ACTION_TYPE_SET_PAYMENT_STATUS,
      obj,
    );
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentAction === 'new') {
      this.setState({ disabled: true, disabled1: false, activeKey: '2' });
    }
    if (nextProps.currentAction == 'view') {
      this.setState({ disabled: false, disabled1: true, activeKey: '1' });
    }
    if (nextProps.paymentApp != 'undefined') {
      var tmp = [];
      tmp.push({
        amountApplied: nextProps.paymentApp.amountApplied,
        invoiceId: this.state.invoiceId,
        paymentApplicationId: nextProps.paymentApp.paymentApplicationId,
      });
      this.setState({ invoiceData: tmp });
    }
    if (nextProps.paymentApp != 'undefined') {
      var tmp = [];
      tmp.push({
        amountApplied: nextProps.paymentApp.amountApplied,
        toPaymentId: this.state.toPaymentId,
        paymentApplicationId: nextProps.paymentApp.paymentApplicationId,
      });
      this.setState({ paymentData: tmp });
    }
    if (nextProps.paymentApp != 'undefined') {
      var tmp = [];
      tmp.push({
        amountApplied: nextProps.paymentApp.amountApplied,
        billingAccountId: this.state.billingAccountId,
        paymentApplicationId: nextProps.paymentApp.paymentApplicationId,
      });
      this.setState({ BillingData: tmp });
    }
    if (nextProps.paymentApp != 'undefined') {
      var tmp = [];
      tmp.push({
        amountApplied: nextProps.paymentApp.amountApplied,
        taxAuthGeoId: this.state.taxAuthGeoId,
        paymentApplicationId: nextProps.paymentApp.paymentApplicationId,
      });
      this.setState({ taxData: tmp });
    }
    if (nextProps.paymentApp.invoiceId) {
      this.setState({ invoiceData: [] });
    }
    if (nextProps.paymentApp.toPaymentId) {
      this.setState({ paymentData: [] });
    }
    if (nextProps.paymentApp.billingAccountId) {
      this.setState({ BillingData: [] });
    }
    if (nextProps.paymentApp.taxAuthGeoId) {
      this.setState({ taxData: [] });
    }
    const { currentAction } = this.props;
    if (
      currentAction === actionConsts.ACTION_TYPE_EDIT ||
      currentAction === actionConsts.ACTION_TYPE_VIEW
    ) {
      if (nextProps.dataById.data) {
        if (nextProps.dataById.data.contactAddresses !== null) {
          nextProps.dataById.data.contactAddresses.forEach(
            (value, index) => (value.id = index + 1),
          );
        } else {
          nextProps.dataById.data.contactAddresses = [];
        }
        if (nextProps.dataById.data.contactPersons !== null) {
          nextProps.dataById.data.contactPersons.forEach(
            (value, index) => (value.id = index + 1),
          );
        } else {
          nextProps.dataById.data.contactPersons = [];
        }
        this.setState({ data: nextProps.dataById.data || [] });
      }
    }
    if (
      currentAction === actionConsts.ACTION_TYPE_CLOSE ||
      currentAction === actionConsts.ACTION_TYPE_SAVE ||
      currentAction === actionConsts.ACTION_TYPE_UPDATE
    ) {
      this.setState({ isExistMessage: '' }, () => {
        this.props.form.resetFields();
      });
    }
    if (
      nextProps.dataById.data !== undefined &&
      nextProps.dataById.data !== null
    ) {
      this.setState({
        commentsData: nextProps.dataById.data.comments || [],
      });
    }
  }
  componentDidMount() {
    this.props.setClick(() => {
      this.clearFormFieds();
    });
    this.props.isExists(isExistMessageParam => {
      this.isExistsFunc(isExistMessageParam);
    });
  }
  isExistsFunc = isExistMessageParam => {
    this.setState({ isExistMessage: isExistMessageParam }, () => {
      this.enableSaveButton(
        _.size(this.state.isExistMessage) > 0,
        'isExistMessage',
      );
    });
  };
  callback = key => {
    this.setState({ key: key });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (!errors) {
        const activeKey = this.state.activeKey;
        const key = this.state.key;
        if (key === 'Edit') {
          var obj = {
            paymentId: '10031',
          };
          this.props.handleSubmitAction(
            actionConsts.ACTION_TYPE_UPDATE_PAYMENT,
            obj,
          );
        }
        if (key === 'Applications') {
          var obj = {
            invoiceId: values.InvoiceID,
            paymentId: '10020',
            toPaymentId: values.TopaymentID,
            billingAccountId: values.BillingAccountID,
            taxAuthGeoId: values.TaxAuthGeoID,
            amountApplied: values.AmountApplied,
          };
          if (obj.invoiceId) {
            this.setState({ currKey: 'invoice', invoiceId: obj.invoiceId });
          }
          if (obj.toPaymentId) {
            this.setState({
              currKey: 'toPaymentId',
              toPaymentId: obj.toPaymentId,
            });
          }
          if (obj.billingAccountId) {
            this.setState({
              currKey: 'billingAccountId',
              billingAccountId: obj.billingAccountId,
            });
          }
          if (obj.taxAuthGeoId) {
            this.setState({
              currKey: 'taxAuthGeoId',
              taxAuthGeoId: obj.taxAuthGeoId,
            });
          }
          this.props.handleSubmitAction(
            actionConsts.ACTION_TYPE_SAVE_PAYMENT_APPLICATIONS,
            obj,
          );
        }
      }
    });
    this.props.form.resetFields();
  };
  iconChange = () => {
    if (!this.state.down) this.setState({ down: true });
    if (this.state.down) this.setState({ down: false });
  };
  checkIsExists = event => {
    const isExistsCheck = this.props.currentAction;
    const dataForExists = event.target.value || '';
    const isSameName = _.isEqual(dataForExists, this.state.data.name);
    if (
      !isSameName &&
      (isExistsCheck === actionConsts.ACTION_TYPE_EDIT ||
        isExistsCheck === actionConsts.ACTION_TYPE_NEW) &&
      dataForExists.length > 0
    ) {
      this.props.handleSubmitAction(
        actionConsts.ACTION_TYPE_ISEXISTS,
        dataForExists,
      );
    } else {
      this.setState({ isExistMessage: '' });
    }
  };
  clearFormFieds = () => {
    this.setState({
      data: newObject,
    });
    this.setState({ isExistMessage: '', enableSaveButtonValue: true }, () =>
      this.props.toggleSaveButtonEnable(this.state.enableSaveButtonValue),
    );
    this.props.form.resetFields();
  };
  enableSaveButton = (enableFlag, isExistMessageFlag) => {
    const valuesObject = this.props.form.getFieldsValue();
    const dataFromState = this.state.data;
    valuesObject.modifiedBy = this.state.data.modifiedBy;
    valuesObject.modifiedOn = this.state.data.modifiedOn;
    valuesObject.name = valuesObject.name;
    valuesObject.shortName = valuesObject.shortName;
    valuesObject.remarks = valuesObject.remarks;
    const resultsValue = _.isMatch(dataFromState, valuesObject);
    this.props.form.validateFields(errors => {
      if (errors) {
        this.setState({ enableSaveButtonValue: true }, () =>
          this.props.toggleSaveButtonEnable(this.state.enableSaveButtonValue),
        );
      }
    });
    if (isExistMessageFlag === 'isExistMessage') {
      this.setState({ enableSaveButtonValue: enableFlag }, () =>
        this.props.toggleSaveButtonEnable(this.state.enableSaveButtonValue),
      );
    } else {
      this.setState({ enableSaveButtonValue: resultsValue }, () =>
        this.props.toggleSaveButtonEnable(this.state.enableSaveButtonValue),
      );
    }
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { currentAction } = this.props;
    const PaymentTypeConst = localConsts.PaymentTypeConst.map(k => (
      <Option key={k.label} value={k.value}>
        {k.label}
      </Option>
    ));
    const InvoiceTypeConst = localConsts.InvoiceTypeConst.map(k => (
      <Option key={k.label} value={k.value}>
        {k.label}
      </Option>
    ));
    const InvoiceIdType = localConsts.InvoiceIdType.map(k => (
      <Option key={k.label} value={k.value}>
        {k.label}
      </Option>
    ));
    const from_Date_Const = localConsts.from_Date.map(k => (
      <Option key={k.label} value={k.value}>
        {k.label}
      </Option>
    ));
    const To_Date_Const = localConsts.To_Date.map(k => (
      <Option key={k.label} value={k.value}>
        {k.label}
      </Option>
    ));
    const { data, isExistMessage, commentsData } = this.state;
    const tableColumns5 = [
      {
        title: `${localConsts.COLUMN_InvoiceID}`,
        dataIndex: 'invoiceId',
        key: 'invoiceId',
        width: 130,
        fixed: 'left',
        sorter: (a, b) => a.name.length - b.name.length,
      },
      {
        title: `${localConsts.COLUMN_InvoiceType}`,
        dataIndex: 'Invoice Type',
      },
      {
        title: `${localConsts.COLUMN_FromParty}`,
        dataIndex: 'FromParty',
      },
      {
        title: `${localConsts.COLUMN_ToParty}`,
        dataIndex: 'ToParty',
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
        title: `${localConsts.Currency_LABEL}`,
        dataIndex: 'Currency',
      },
    ];
    const tableColumns6 = [
      {
        title: `${localConsts.PaymentID_LABEL}`,
        dataIndex: 'invoiceId',
        key: 'invoiceId',
        width: 130,
        fixed: 'left',
        sorter: (a, b) => a.name.length - b.name.length,
      },
      {
        title: `${localConsts.COLUMN_FromParty}`,
        dataIndex: 'FromParty',
      },
      {
        title: `${localConsts.COLUMN_ToParty}`,
        dataIndex: 'ToParty',
      },
      {
        title: `${localConsts.COLUMN_EffectiveDate}`,
        dataIndex: 'status',
      },
      {
        title: `${localConsts.COLUMN_Amount}`,
        dataIndex: 'amount',
      },
      {
        title: `${localConsts.Currency_LABEL}`,
        dataIndex: 'Currency',
      },
    ];
    const tableColumns8 = [
      {
        title: `${localConsts.GeoID_LABEL}`,
        dataIndex: 'invoiceId',
        key: 'invoiceId',
        width: 130,
        fixed: 'left',
        sorter: (a, b) => a.name.length - b.name.length,
      },
      {
        title: `${localConsts.GeoTypeID_LABEL}`,
        dataIndex: 'FromParty',
      },
      {
        title: `${localConsts.NAME_LABEL}`,
        dataIndex: 'ToParty',
      },
      {
        title: `${localConsts.Code_LABEL}`,
        dataIndex: 'status',
      },
      {
        title: `${localConsts.SecondaryCode_LABEL}`,
        dataIndex: 'amount',
      },
      {
        title: `${localConsts.Abbreviation_LABEL}`,
        dataIndex: 'Currency',
      },
      {
        title: `${localConsts.WellKnownText_LABEL}`,
        dataIndex: 'Currency',
      },
    ];
    const tableColumns1 = [
      {
        title: `${localConsts.COLUMN_BillingAcctID}`,
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.COLUMN_Description}`,
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: `${localConsts.COLUMN_AccountingExternalAccountId}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
    ];
    const tableColumns0 = [
      {
        title: `${localConsts.COLUMN_InvoiceID}`,
        width: 300,
        dataIndex: 'invoiceId',
        id: 'invoiceId',
      },
      {
        title: `${localConsts.COLUMN_ItemNo}`,
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.COLUMN_AmountApplied}`,
        dataIndex: 'amountApplied',
        id: 'amountApplied',
      },
      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        render: data => (
          <div>
            &emsp;
            <Popconfirm
              title={localConsts.POPCONFIRM_TITLE}
              icon={<Icon type="question" style={{ color: 'red' }} />}
              okText={localConsts.POPCONFIRM_OK_TEXT}
              okType="danger"
              cancelText={localConsts.POPCONFIRM_CANCEL_TEXT}
              placement={localConsts.POPCONFIRM_PLACEMENT}
              onConfirm={() => {
                var obj = {
                  paymentApplicationId: data.paymentApplicationId,
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_PAYMENT_APPLICATION_ITEM_DELETE,
                  obj,
                );
              }}
            >
              <Icon type="delete" className={styles.icon} />
            </Popconfirm>&emsp;
          </div>
        ),
      },
    ];
    const tableColumns10 = [
      {
        title: `${localConsts.TopaymentID}`,
        dataIndex: 'toPaymentId',
        id: 'toPaymentId',
      },
      {
        title: `${localConsts.COLUMN_AmountApplied}`,
        dataIndex: 'amountApplied',
        id: 'amountApplied',
      },
      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        width: 600,
        render: data => (
          <div>
            &emsp;
            <Popconfirm
              title={localConsts.POPCONFIRM_TITLE}
              icon={<Icon type="question" style={{ color: 'red' }} />}
              okText={localConsts.POPCONFIRM_OK_TEXT}
              okType="danger"
              cancelText={localConsts.POPCONFIRM_CANCEL_TEXT}
              placement={localConsts.POPCONFIRM_PLACEMENT}
              onConfirm={() => {
                var obj = {
                  paymentApplicationId: data.paymentApplicationId,
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_PAYMENT_APPLICATION_ITEM_DELETE,
                  obj,
                );
              }}
            >
              <Icon type="delete" className={styles.icon} />
            </Popconfirm>&emsp;
          </div>
        ),
      },
    ];
    const tableColumns11 = [
      {
        title: `${localConsts.BillingAccountID_LABEL}`,
        dataIndex: 'billingAccountId',
        id: 'billingAccountId',
      },
      {
        title: `${localConsts.COLUMN_AmountApplied}`,
        dataIndex: 'amountApplied',
        id: 'amountApplied',
      },
      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        render: data => (
          <div>
            &emsp;
            <Popconfirm
              title={localConsts.POPCONFIRM_TITLE}
              icon={<Icon type="question" style={{ color: 'red' }} />}
              okText={localConsts.POPCONFIRM_OK_TEXT}
              okType="danger"
              cancelText={localConsts.POPCONFIRM_CANCEL_TEXT}
              placement={localConsts.POPCONFIRM_PLACEMENT}
              onConfirm={() => {
                var obj = {
                  paymentApplicationId: data.paymentApplicationId,
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_PAYMENT_APPLICATION_ITEM_DELETE,
                  obj,
                );
              }}
            >
              <Icon type="delete" className={styles.icon} />
            </Popconfirm>&emsp;
          </div>
        ),
      },
    ];
    const tableColumns12 = [
      {
        title: `${localConsts.taxAuthGeoId}`,
        dataIndex: 'taxAuthGeoId',
        id: 'taxAuthGeoId',
      },
      {
        title: `${localConsts.COLUMN_AmountApplied}`,
        dataIndex: 'amountApplied',
        id: 'amountApplied',
      },
      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        render: data => (
          <div>
            &emsp;
            <Popconfirm
              title={localConsts.POPCONFIRM_TITLE}
              icon={<Icon type="question" style={{ color: 'red' }} />}
              okText={localConsts.POPCONFIRM_OK_TEXT}
              okType="danger"
              cancelText={localConsts.POPCONFIRM_CANCEL_TEXT}
              placement={localConsts.POPCONFIRM_PLACEMENT}
              onConfirm={() => {
                var obj = {
                  paymentApplicationId: data.paymentApplicationId,
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_PAYMENT_APPLICATION_ITEM_DELETE,
                  obj,
                );
              }}
            >
              <Icon type="delete" className={styles.icon} />
            </Popconfirm>&emsp;
          </div>
        ),
      },
    ];
    const tableColumns2 = [
      {
        title: `${localConsts.COLUMN_PartyID}`,
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.COLUMN_PartyTypeId}`,
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: `${localConsts.COLUMN_FirstName}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_LastName}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_GroupName}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
    ];
    const tableColumns3 = [
      {
        title: `${localConsts.COLUMN_GLAccountID}`,
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.COLUMN_Name}`,
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: `${localConsts.Column_Type}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_GLAccountClass}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
    ];
    const tableColumns = [
      {
        title: 'Invoice ID',
        dataIndex: 'InvoiceID',
        id: 'InvoiceID',
        render: text => <Link to={`InvoiceById`}>{text}</Link>,
      },
      {
        title: 'Item No',
        dataIndex: 'Item_No',
        id: 'Item_No',
        render: text => <Link to={`InvoiceById`}>{text}</Link>,
      },
      {
        title: 'Billing Account ID',
        dataIndex: 'BillingAccountID',
      },
      {
        title: 'Override Gl Account Id',
        dataIndex: 'Total',
      },
      {
        title: 'To payment ID',
        dataIndex: 'Payment_Id',
      },
      {
        title: 'Amount Applied',
        dataIndex: 'Amount_Applied',
      },
      {
        title: 'Actions',
        render: text => (
          <Link to={`/update`}>
            <Button
              shape="omitted"
              type="primary"
              style={{ background: '#337AB7', borderRadius: '13px' }}
            >
              Update
            </Button>
          </Link>
        ),
      },
    ];
    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit} id={localConsts.FORM_ID}>
          <Tabs
            activeKey={this.state.activeKey}
            onChange={this.callback}
            size="small"
            className={styles.tab}
          >
            <TabPane
              tab={localConsts.TAB2_CAPTION}
              key="2"
              className={styles.tabPaneCustom}
              disabled={this.state.disabled1}
            >
              <div
                className={styles.tabPaneCard}
                hidden={currentAction === actionConsts.ACTION_TYPE_VIEW}
              >
                <Row style={{ marginTop: '15px' }}>
                  <Col span={7}>
                    <FormItem label={localConsts.FromPartyID_LABEL}>
                      {getFieldDecorator('partyIdFrom', {
                        initialValue: data.partyIdFrom,
                        enableReinitialize: true,
                      })(
                        <Input
                          onBlur={this.enableSaveButton}
                          style={{ width: '295px' }}
                          addonAfter={
                            <Icon type="idcard" onClick={this.showDrawer} />
                          }
                        />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={1}>
                    <FormItem label={localConsts.ToPartyID_Organization_LABEL}>
                      {getFieldDecorator('partyIdTo', {
                        initialValue: data.partyIdTo,
                        enableReinitialize: true,
                      })(
                        <Select
                          showSearch
                          onBlur={this.enableSaveButton}
                          style={{ width: '295px' }}
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.props.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          {PaymentTypeConst}
                        </Select>,
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <Row>
                  <Col span={7}>
                    <FormItem label={localConsts.paymentType_LABEL}>
                      {getFieldDecorator('paymentTypeId', {
                        initialValue: data.paymentTypeId,
                        enableReinitialize: true,
                      })(
                        <Select
                          showSearch
                          onBlur={this.enableSaveButton}
                          style={{ width: '295px' }}
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.props.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          {PaymentTypeConst}
                        </Select>,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={1}>
                    <FormItem label={localConsts.PaymentMethodId_LABEL}>
                      {getFieldDecorator('paymentMethodTypeId', {
                        initialValue: data.paymentMethodTypeId,
                        enableReinitialize: true,
                      })(
                        <Select
                          showSearch
                          onBlur={this.enableSaveButton}
                          style={{ width: '295px' }}
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.props.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          {PaymentTypeConst}
                        </Select>,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={1}>
                    <FormItem label={localConsts.ReferenceNumber_LABEL}>
                      {getFieldDecorator('paymentRefNum', {
                        initialValue: data.InvoiceType,
                        enableReinitialize: true,
                      })(
                        <Input
                          style={{ width: '295px' }}
                          onBlur={this.enableSaveButton}
                        />,
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <Row>
                  <Col span={7}>
                    <FormItem label={localConsts.OverrideGlAccountId_LABEL}>
                      {getFieldDecorator('overrideGlAccountId', {
                        initialValue: data.overrideGlAccountId,
                        enableReinitialize: true,
                      })(
                        <Input
                          style={{ width: '295px' }}
                          addonAfter={
                            <Icon type="idcard" onClick={this.showDrawer3} />
                          }
                        />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={1}>
                    <FormItem label={localConsts.Amount_LABEL}>
                      {getFieldDecorator('amount', {})(
                        <Input style={{ width: '295px' }} />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={1}>
                    <FormItem label={localConsts.FinAccountId_LABEL}>
                      {getFieldDecorator('finAccountTransId', {
                        initialValue: data.finAccountTransId,
                        enableReinitialize: true,
                      })(
                        <Select
                          showSearch
                          style={{ width: '295px' }}
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.props.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          {PaymentTypeConst}
                        </Select>,
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <Row>
                  <Col span={23}>
                    <FormItem label={localConsts.Comments_LABEL}>
                      {getFieldDecorator('comments', {
                        initialValue: data.comments,
                        enableReinitialize: true,
                      })(
                        <Input.TextArea
                          type="text"
                          rows={4}
                          onBlur={this.checkIsExists}
                        />,
                      )}
                    </FormItem>
                  </Col>
                </Row>
                {/* <div style={localConsts.NAME_ERROR_MSG_ISEXISTS_STYLE}>
                  {isExistMessage}
                </div> */}
              </div>
            </TabPane>
            <TabPane
              tab={localConsts.TAB1_CAPTION}
              key="1"
              className={styles.tabPaneCustom}
              disabled={this.state.disabled}
            >
              <Tabs tabPosition="left" onChange={this.callback}>
                <TabPane tab="Overview" key="Overview">
                  <div>
                    <Card
                      title={
                        <div>Payment Overview: {this.state.paymentId}</div>
                      }
                      bordered={true}
                      extra={
                        <div>
                          <Icon
                            style={{ marginTop: '0px' }}
                            onClick={this.iconChange}
                            type={this.state.down ? 'caret-down' : 'caret-up'}
                          />
                        </div>
                      }
                    >
                      {this.state.down && (
                        <div>
                          <h6 style={{ marginRight: 8, display: 'inline' }} />
                          {this.state.tagsFromServer.map(tag => (
                            <CheckableTag
                              key={tag}
                              checked={
                                this.state.selectedTags.indexOf(tag) > -1
                              }
                              onChange={checked =>
                                this.handleChange(tag, checked)
                              }
                            >
                              {tag}
                            </CheckableTag>
                          ))}
                        </div>
                      )}
                      <Row gutter={16} style={{ marginTop: '15px' }}>
                        <Col span={6}>
                          <div>{localConsts.PaymentType_LABEL}</div>
                          <p style={{ color: '#3E3E3E' }}>Reference Number</p>
                        </Col>
                        <Col span={6}>
                          <div>Status</div>
                          <p style={{ color: '#3E3E3E' }}>In-Process</p>
                        </Col>
                        <Col span={6}>
                          <div>From Party ID</div>
                          <p style={{ color: '#3E3E3E' }}>
                            Your Company Name Here
                          </p>
                        </Col>
                        <Col span={6}>
                          <div>To Party ID</div>
                          <p style={{ color: '#3E3E3E' }}>
                            Lead, John [sfa101]
                          </p>
                        </Col>
                      </Row>
                      <Row gutter={16}>
                        <Col span={6}>
                          <div>Payment Method Type</div>
                          <p style={{ color: '#3E3E3E' }}>2018-12-13</p>
                        </Col>
                        <Col span={6}>
                          <div>Payment Method Id</div>
                          <p style={{ color: '#3E3E3E' }}>2018-12-13</p>
                        </Col>
                        <Col span={6}>
                          <div>Total</div>
                          <p style={{ color: '#3E3E3E' }}>Reference No</p>
                        </Col>
                        <Col span={6}>
                          <div>Payment Preference ID</div>
                          <p style={{ color: '#3E3E3E' }}>
                            Lead, John [sfa101]
                          </p>
                        </Col>
                      </Row>
                      <Row gutter={16}>
                        <Col span={6}>
                          <div>Amount</div>
                          <p style={{ color: '#3E3E3E' }}>END_USER_CUSTOMER</p>
                        </Col>
                        <Col span={6}>
                          <div>Actual Currency Amount</div>
                          <p style={{ color: '#3E3E3E' }}>9010</p>
                        </Col>
                        <Col span={6}>
                          <div>Effective Date</div>
                          <p style={{ color: '#3E3E3E' }}>Pay</p>
                        </Col>
                        <Col span={6}>
                          <div>Comments</div>
                          <p style={{ color: '#3E3E3E' }}>
                            Lead, John [sfa101]
                          </p>
                        </Col>
                      </Row>
                    </Card>
                    <Card>
                      <Row>
                        <Tabs
                          defaultActiveKey="Applied_Payments"
                          onChange={this.callback}
                        >
                          <TabPane
                            tab="Payments Applied "
                            key="Applied_Payments"
                          >
                            <Table
                              bordered
                              rowSelection={this.rowSelection}
                              columns={tableColumns}
                              style={{ color: '#A0A0A0' }}
                            />
                          </TabPane>
                          <TabPane tab="Transcations" key="Terms" />
                        </Tabs>
                      </Row>
                    </Card>
                  </div>
                </TabPane>
                <TabPane tab="Edit" key="Edit">
                  <Card
                    title={<div>ID: {this.state.paymentId}</div>}
                    bordered={true}
                    extra={
                      <div>
                        <Icon
                          style={{ marginTop: '0px' }}
                          onClick={this.iconChange}
                          type={this.state.down ? 'caret-down' : 'caret-up'}
                        />
                      </div>
                    }
                  >
                    {this.state.down && (
                      <div>
                        <h6 style={{ marginRight: 8, display: 'inline' }} />
                        {this.state.tagsFromServer.map(tag => (
                          <CheckableTag
                            key={tag}
                            checked={this.state.selectedTags.indexOf(tag) > -1}
                            onChange={checked =>
                              this.handleChange(tag, checked)
                            }
                          >
                            {tag}
                          </CheckableTag>
                        ))}
                      </div>
                    )}
                    <Row style={{ marginTop: '15px' }}>
                      <Col span={7}>
                        <FormItem label={localConsts.FromPartyID_LABEL}>
                          {getFieldDecorator('partyIdFrom', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                              style={{ width: '295px' }}
                              addonAfter={
                                <Icon type="idcard" onClick={this.showDrawer} />
                              }
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7} offset={2}>
                        <FormItem label={localConsts.ToPartyID}>
                          {getFieldDecorator('partyIdTo', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                              style={{ width: '295px' }}
                              addonAfter={
                                <Icon type="idcard" onClick={this.showDrawer} />
                              }
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={2} offset={2}>
                        <FormItem label={localConsts.StatusID_LABEL}>
                          {getFieldDecorator('StatusID', {
                            initialValue: this.state.stateId,
                            enableReinitialize: true,
                          })(<Input disabled style={{ width: '200px' }} />)}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={7}>
                        <FormItem label={localConsts.paymentType_LABEL}>
                          {getFieldDecorator('paymentTypeId', {
                            initialValue: data.paymentTypeId,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                              style={{ width: '295px' }}
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {PaymentTypeConst}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7} offset={2}>
                        <FormItem label={localConsts.PaymentMethodId_LABEL}>
                          {getFieldDecorator('paymentMethodTypeId', {
                            initialValue: data.paymentMethodTypeId,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                              style={{ width: '295px' }}
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {PaymentTypeConst}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={7}>
                        <FormItem label={localConsts.Amount_LABEL}>
                          {getFieldDecorator('Amount', {
                            initialValue: data.InvoiceType,
                            enableReinitialize: true,
                          })(
                            <Input
                              style={{ width: '295px' }}
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7} offset={2}>
                        <FormItem label={localConsts.Currency_LABEL}>
                          {getFieldDecorator('Currency', {
                            initialValue: data.paymentMethodTypeId,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                              style={{ width: '295px' }}
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {PaymentTypeConst}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={7}>
                        <FormItem
                          label={localConsts.ActualCurrencyAmount_LABEL}
                        >
                          {getFieldDecorator('ActualCurrencyAmount', {
                            initialValue: data.InvoiceType,
                            enableReinitialize: true,
                          })(
                            <Input
                              style={{ width: '295px' }}
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7} offset={2}>
                        <FormItem label={localConsts.ActualCurrencyUomId_LABEL}>
                          {getFieldDecorator('ActualCurrencyUomId', {
                            initialValue: data.paymentMethodTypeId,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                              style={{ width: '295px' }}
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {PaymentTypeConst}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={7}>
                        <FormItem label={localConsts.EffectiveDate_LABEL}>
                          {getFieldDecorator('EffectiveDate	', {
                            initialValue: moment(),
                            enableReinitialize: true,
                          })(
                            <DatePicker
                              style={{ width: '295px' }}
                              onChange={this.onChange}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7} offset={2}>
                        <FormItem label={localConsts.ReferenceNumber_LABEL}>
                          {getFieldDecorator('paymentRefNum', {
                            initialValue: data.InvoiceType,
                            enableReinitialize: true,
                          })(
                            <Input
                              style={{ width: '295px' }}
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={17}>
                        <FormItem label={localConsts.Comments_LABEL}>
                          {getFieldDecorator('comments', {
                            initialValue: data.comments,
                            enableReinitialize: true,
                          })(
                            <Input.TextArea
                              type="text"
                              rows={4}
                              onBlur={this.checkIsExists}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={7}>
                        <FormItem label={localConsts.OverrideGlAccountId_LABEL}>
                          {getFieldDecorator('overrideGlAccountId', {
                            initialValue: data.overrideGlAccountId,
                            enableReinitialize: true,
                          })(
                            <Input
                              style={{ width: '295px' }}
                              addonAfter={
                                <Icon
                                  type="idcard"
                                  onClick={this.showDrawer3}
                                />
                              }
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7} offset={2}>
                        <FormItem label={localConsts.finAccountTransId_LABEL}>
                          {getFieldDecorator('finAccountTransId', {
                            initialValue: data.finAccountTransId,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              style={{ width: '295px' }}
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {PaymentTypeConst}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                  </Card>
                </TabPane>
                <TabPane tab="Applications" key="Applications">
                  <Card
                    title={<div>ID: {this.state.paymentId}</div>}
                    bordered={true}
                    extra={
                      <div>
                        <Icon
                          style={{ marginTop: '0px' }}
                          onClick={this.iconChange}
                          type={this.state.down ? 'caret-down' : 'caret-up'}
                        />
                      </div>
                    }
                  >
                    {this.state.down && (
                      <div>
                        <h6 style={{ marginRight: 8, display: 'inline' }} />
                        {this.state.tagsFromServer.map(tag => (
                          <CheckableTag
                            key={tag}
                            checked={this.state.selectedTags.indexOf(tag) > -1}
                            onChange={checked =>
                              this.handleChange(tag, checked)
                            }
                          >
                            {tag}
                          </CheckableTag>
                        ))}
                      </div>
                    )}
                    <Row style={{ marginTop: 14 }}>Payment Applications</Row>
                    <Row>
                      <Col span={15}>
                        {' '}
                        Amount Total US$50,000.00 Amount not yet applied
                        US$50,000.00
                      </Col>
                      <Col span={5} offset={20}>
                        <span
                          style={{ color: '#337AB7' }}
                          onClick={this.showDrawer4}
                        >
                          Apply this payment to
                        </span>
                      </Col>
                    </Row>
                  </Card>
                  <Tabs defaultActiveKey="Invoice">
                    <TabPane tab="Invoice" key="Invoice">
                      <Row style={{ marginTop: '14px' }}>
                        <div className={styles.tableContainerParent}>
                          <Table
                            className={styles.tableContainer}
                            columns={tableColumns0}
                            dataSource={this.state.invoiceData}
                            size="small"
                            onChange={this.handleStandardTableChange}
                          />
                        </div>
                      </Row>
                    </TabPane>
                    <TabPane tab=" To payment ID " key="To payment ID ">
                      <Row style={{ marginTop: '14px' }}>
                        <div className={styles.tableContainerParent}>
                          <Table
                            className={styles.tableContainer}
                            columns={tableColumns10}
                            dataSource={this.state.paymentData}
                            size="small"
                            onChange={this.handleStandardTableChange}
                          />
                        </div>
                      </Row>
                    </TabPane>
                    <TabPane
                      tab=" Billing Account ID"
                      key="Billing Account ID "
                    >
                      <Row style={{ marginTop: '14px' }}>
                        <div className={styles.tableContainerParent}>
                          <Table
                            className={styles.tableContainer}
                            columns={tableColumns11}
                            dataSource={this.state.BillingData}
                            size="small"
                            onChange={this.handleStandardTableChange}
                          />
                        </div>
                      </Row>
                    </TabPane>
                    <TabPane tab=" Tax Auth Geo ID " key=" Tax Auth Geo ID ">
                      <Row style={{ marginTop: '14px' }}>
                        <div className={styles.tableContainerParent}>
                          <Table
                            className={styles.tableContainer}
                            columns={tableColumns12}
                            dataSource={this.state.taxData}
                            size="small"
                            onChange={this.handleStandardTableChange}
                          />
                        </div>
                      </Row>
                    </TabPane>
                  </Tabs>
                </TabPane>
              </Tabs>
              {/* <img
                alt=""
                src={imgUnderCon}
                className={styles.imgUnderConstruction}
              /> */}
              <div />
            </TabPane>
          </Tabs>
          <Row
            hidden={currentAction === actionConsts.ACTION_TYPE_NEW}
            style={commonConsts.LABEL_AUDIT_STYLE}
          >
            <Col span={12}>
              <span>
                {commonConsts.LABEL_AUDIT_CREATEDBY}
                {data.createdBy || localConsts.LABEL_NOTAVAILABLE},
                {commonConsts.LABEL_AUDIT_CREATEDON}
                {data.createdOn || localConsts.LABEL_NOTAVAILABLE},
                {commonConsts.LABEL_AUDIT_CREATEDIP}
                {data.createdIp || localConsts.LABEL_NOTAVAILABLE}
              </span>
            </Col>
            <Col span={12}>
              <span className={styles.labelModified}>
                {commonConsts.LABEL_AUDIT_MODIFIEDBY}
                {data.modifiedBy || localConsts.LABEL_NOTAVAILABLE},
                {commonConsts.LABEL_AUDIT_MODIFIEDON}
                {data.modifiedOn || localConsts.LABEL_NOTAVAILABLE},
                {commonConsts.LABEL_AUDIT_MODIFIEDIP}
                {data.modifiedIp || localConsts.LABEL_NOTAVAILABLE}
              </span>
            </Col>
          </Row>
          <Drawer
            title={localConsts.PartybyName_title}
            width="709px"
            closable={true}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.PartyID_LABEL}>
                  {getFieldDecorator('Party_ID', {})(
                    <Input
                      placeholder={localConsts.PartyID_PLACEHOLDER}
                      addonBefore={
                        <Select defaultValue="Contains">{InvoiceIdType}</Select>
                      }
                      addonAfter={
                        <Popover content="ignore case">
                          <Checkbox />
                        </Popover>
                      }
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={8} offset={2}>
                <FormItem label={localConsts.partyTypeID_LABEL}>
                  {getFieldDecorator('Party_Type_ID', {})(
                    <Input style={{ width: '300px' }} type="text" />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.FirstName_LABEL}>
                  {getFieldDecorator('First_Name', {})(
                    <Input
                      placeholder={localConsts.FirstName_PLACEHOLDER}
                      addonBefore={
                        <Select defaultValue="Contains">{InvoiceIdType}</Select>
                      }
                      addonAfter={
                        <Popover content="ignore case">
                          <Checkbox />
                        </Popover>
                      }
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={11} offset={2}>
                <FormItem label="Last Name">
                  {getFieldDecorator('Last_Name', {})(
                    <Input
                      placeholder={localConsts.LastName_PLACEHOLDER}
                      addonBefore={
                        <Select defaultValue="Contains">{InvoiceIdType}</Select>
                      }
                      addonAfter={
                        <Popover content="ignore case">
                          <Checkbox />
                        </Popover>
                      }
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.Group_Name_LABEL}>
                  {getFieldDecorator('Group_Name', {})(
                    <Input
                      placeholder={localConsts.Group_Name_PLACEHOLDER}
                      addonBefore={
                        <Select defaultValue="Contains">{InvoiceIdType}</Select>
                      }
                      addonAfter={
                        <Popover content="ignore case">
                          <Checkbox />
                        </Popover>
                      }
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row
              style={{
                borderTop: '1px dashed #E3E7F1',
                height: '62px',
                borderBottom: '1px dashed #E3E7F1',
              }}
            >
              <Col span={2} offset={21}>
                <Button
                  className="button"
                  style={{ marginTop: '14px' }}
                  type="primary"
                >
                  Search
                </Button>
              </Col>
            </Row>
            <Row style={{ marginTop: '14px' }}>
              <div className={styles.tableContainerParent}>
                <Table
                  className={styles.tableContainer}
                  columns={tableColumns2}
                  size="small"
                  onChange={this.handleStandardTableChange}
                />
              </div>
            </Row>
          </Drawer>
          <Drawer
            title={localConsts.BillingAccountbyName_title}
            width="709px"
            closable={true}
            onClose={this.onClose1}
            visible={this.state.visible1}
          >
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label={localConsts.BillingAccountID_LABEL}>
                  {getFieldDecorator('BillingAccountID_LABEL', {})(
                    <Input
                      addonBefore={
                        <Select defaultValue="Contains">{InvoiceIdType}</Select>
                      }
                      addonAfter={
                        <Popover content="ignore case">
                          <Checkbox />
                        </Popover>
                      }
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label={localConsts.Description_LABEL}>
                  {getFieldDecorator('Description', {})(
                    <Input
                      addonBefore={
                        <Select defaultValue="Contains">{InvoiceIdType}</Select>
                      }
                      addonAfter={
                        <Popover content="ignore case">
                          <Checkbox />
                        </Popover>
                      }
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label={localConsts.AccountingExternalAccountId_LABEL}>
                  {getFieldDecorator('AccountingExternalAccountId_LABEL ', {})(
                    <Input
                      addonBefore={
                        <Select defaultValue="Contains">{InvoiceIdType}</Select>
                      }
                      addonAfter={
                        <Popover content="ignore case">
                          <Checkbox />
                        </Popover>
                      }
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row
              style={{
                borderTop: '1px dashed #E3E7F1',
                height: '62px',
                borderBottom: '1px dashed #E3E7F1',
              }}
            >
              <Col span={2} offset={21}>
                <Button
                  className="button"
                  style={{ marginTop: '14px' }}
                  type="primary"
                >
                  Search
                </Button>
              </Col>
            </Row>
            <Row style={{ marginTop: '14px' }}>
              <div className={styles.tableContainerParent}>
                <Table
                  className={styles.tableContainer}
                  columns={tableColumns1}
                  size="small"
                  onChange={this.handleStandardTableChange}
                />
              </div>
            </Row>
          </Drawer>
          <Drawer
            width="709px"
            closable={true}
            onClose={this.onClose8}
            visible={this.state.visible8}
          >
            <Row gutter={20} style={{ marginTop: 24 }}>
              <Col span={12}>
                <FormItem label={localConsts.GeoID_LABEL}>
                  {getFieldDecorator('GeoID', {})(
                    <Input
                      addonBefore={
                        <Select defaultValue="Contains">{InvoiceIdType}</Select>
                      }
                      addonAfter={
                        <Popover content="ignore case">
                          <Checkbox />
                        </Popover>
                      }
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label={localConsts.GeoTypeID_LABEL}>
                  {getFieldDecorator('GeoTypeID', {
                    initialValue: data.paymentMethodTypeId,
                    enableReinitialize: true,
                  })(
                    <Select
                      showSearch
                      onBlur={this.enableSaveButton}
                      style={{ width: '295px' }}
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {PaymentTypeConst}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label={localConsts.NAME_LABEL}>
                  {getFieldDecorator('Name', {})(
                    <Input
                      addonBefore={
                        <Select defaultValue="Contains">{InvoiceIdType}</Select>
                      }
                      addonAfter={
                        <Popover content="ignore case">
                          <Checkbox />
                        </Popover>
                      }
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label={localConsts.Code_LABEL}>
                  {getFieldDecorator('Code ', {})(
                    <Input
                      addonBefore={
                        <Select defaultValue="Contains">{InvoiceIdType}</Select>
                      }
                      addonAfter={
                        <Popover content="ignore case">
                          <Checkbox />
                        </Popover>
                      }
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label={localConsts.SecondaryCode_LABEL}>
                  {getFieldDecorator('SecondaryCode', {})(
                    <Input
                      addonBefore={
                        <Select defaultValue="Contains">{InvoiceIdType}</Select>
                      }
                      addonAfter={
                        <Popover content="ignore case">
                          <Checkbox />
                        </Popover>
                      }
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label={localConsts.Abbreviation_LABEL}>
                  {getFieldDecorator('Abbreviation ', {})(
                    <Input
                      addonBefore={
                        <Select defaultValue="Contains">{InvoiceIdType}</Select>
                      }
                      addonAfter={
                        <Popover content="ignore case">
                          <Checkbox />
                        </Popover>
                      }
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row
              style={{
                borderTop: '1px dashed #E3E7F1',
                height: '62px',
                borderBottom: '1px dashed #E3E7F1',
                marginTop: 24,
              }}
            >
              <Col span={2} offset={21}>
                <Button
                  className="button"
                  style={{ marginTop: '14px' }}
                  type="primary"
                >
                  Search
                </Button>
              </Col>
            </Row>
            <Row style={{ marginTop: '14px' }}>
              <div className={styles.tableContainerParent}>
                <Table
                  className={styles.tableContainer}
                  columns={tableColumns8}
                  size="small"
                  onChange={this.handleStandardTableChange}
                />
              </div>
            </Row>
          </Drawer>
          <Drawer
            width="709px"
            closable={true}
            onClose={this.onClose4}
            visible={this.state.visible4}
          >
            <Row gutter={20} style={{ marginTop: 24 }}>
              <Col span={12}>
                <FormItem label={localConsts.InvoiceID}>
                  {getFieldDecorator('InvoiceID', {
                    initialValue: data.partyIdFrom,
                    enableReinitialize: true,
                  })(
                    <Input
                      onBlur={this.enableSaveButton}
                      style={{ width: '295px' }}
                      addonAfter={
                        <Icon type="idcard" onClick={this.showDrawer5} />
                      }
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label={localConsts.TopaymentID}>
                  {getFieldDecorator('TopaymentID', {
                    initialValue: data.partyIdFrom,
                    enableReinitialize: true,
                  })(
                    <Input
                      onBlur={this.enableSaveButton}
                      style={{ width: '295px' }}
                      addonAfter={
                        <Icon type="idcard" onClick={this.showDrawer6} />
                      }
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label={localConsts.BillingAccountID}>
                  {getFieldDecorator('BillingAccountID', {
                    initialValue: data.partyIdFrom,
                    enableReinitialize: true,
                  })(
                    <Input
                      onBlur={this.enableSaveButton}
                      style={{ width: '295px' }}
                      addonAfter={
                        <Icon type="idcard" onClick={this.showDrawer1} />
                      }
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label={localConsts.TaxAuthGeoID}>
                  {getFieldDecorator('TaxAuthGeoID', {
                    initialValue: data.partyIdFrom,
                    enableReinitialize: true,
                  })(
                    <Input
                      onBlur={this.enableSaveButton}
                      style={{ width: '295px' }}
                      addonAfter={
                        <Icon type="idcard" onClick={this.showDrawer8} />
                      }
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label={localConsts.Outstandingamount}>
                  {getFieldDecorator('Outstandingamount', {
                    initialValue: data.partyIdFrom,
                    enableReinitialize: true,
                  })(
                    <Input
                      onBlur={this.enableSaveButton}
                      style={{ width: '295px' }}
                      placeholder={localConsts.NOTE}
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row
              style={{
                borderTop: '1px dashed #E3E7F1',
                height: '62px',
                borderBottom: '1px dashed #E3E7F1',
                marginTop: '24px',
              }}
            >
              <Col span={2} offset={21}>
                <Button
                  onClick={this.handleSubmit}
                  className="button"
                  style={{ marginTop: '14px' }}
                  type="primary"
                >
                  Save
                </Button>
              </Col>
            </Row>
          </Drawer>
          <Drawer
            title={localConsts.LookupGLAccount_title}
            width="709px"
            closable={true}
            onClose={this.onClose3}
            visible={this.state.visible3}
          >
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label={localConsts.GLAccountID_LABEL}>
                  {getFieldDecorator('GLAccountID', {})(
                    <Input
                      addonBefore={
                        <Select defaultValue="Contains">{InvoiceIdType}</Select>
                      }
                      addonAfter={
                        <Popover content="ignore case">
                          <Checkbox />
                        </Popover>
                      }
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label={localConsts.NAME_LABEL}>
                  {getFieldDecorator('name', {})(
                    <Input
                      addonBefore={
                        <Select defaultValue="Contains">{InvoiceIdType}</Select>
                      }
                      addonAfter={
                        <Popover content="ignore case">
                          <Checkbox />
                        </Popover>
                      }
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <FormItem label={localConsts.Type_LABEL}>
                  {getFieldDecorator('paymentType', {
                    initialValue: data.InvoiceType,
                    enableReinitialize: true,
                  })(
                    <Select
                      showSearch
                      style={{ width: '300px' }}
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {}
                    </Select>,
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label={localConsts.GLAccountClass_LABEL}>
                  {getFieldDecorator('paymentType', {
                    initialValue: data.InvoiceType,
                    enableReinitialize: true,
                  })(
                    <Select
                      showSearch
                      style={{ width: '300px' }}
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row
              style={{
                borderTop: '1px dashed #E3E7F1',
                height: '62px',
                borderBottom: '1px dashed #E3E7F1',
              }}
            >
              <Col span={2} offset={21}>
                <Button
                  className="button"
                  style={{ marginTop: '14px' }}
                  type="primary"
                >
                  Search
                </Button>
              </Col>
            </Row>
            <Row style={{ marginTop: '14px' }}>
              <div className={styles.tableContainerParent}>
                <Table
                  className={styles.tableContainer}
                  columns={tableColumns3}
                  size="small"
                  onChange={this.handleStandardTableChange}
                />
              </div>
            </Row>
          </Drawer>
          <Drawer
            title={localConsts.LookupInvoices_title}
            width="709px"
            closable={true}
            onClose={this.onClose5}
            visible={this.state.visible5}
          >
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label={localConsts.InvoiceID_LABEL}>
                  {getFieldDecorator('InvoiceID', {})(
                    <Input
                      addonBefore={
                        <Select defaultValue="Contains">{InvoiceIdType}</Select>
                      }
                      addonAfter={
                        <Popover content="ignore case">
                          <Checkbox />
                        </Popover>
                      }
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label={localConsts.InvoiceType_LABEL}>
                  {getFieldDecorator('InvoiceType', {})(
                    <Select
                      showSearch
                      style={{ width: '330px' }}
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {InvoiceTypeConst}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label={localConsts.FromPartyID_LABEL}>
                  {getFieldDecorator('FromPartyID', {})(
                    <Input
                      name="FromPartyID"
                      addonAfter={
                        <Icon onClick={this.showDrawer} type="idcard" />
                      }
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label={localConsts.ToPartyID_LABEL}>
                  {getFieldDecorator('ToPartyID')(
                    <Input
                      name="ToPartyID"
                      addonAfter={
                        <Icon onClick={this.showDrawer} type="idcard" />
                      }
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label={localConsts.from_Date_LABEL}>
                  {getFieldDecorator('from_Date', {})(
                    <DatePicker
                      onChange={this.onChange}
                      style={{ width: '250px' }}
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label={localConsts.ThroughDate_LABEL}>
                  {getFieldDecorator('ThroughDate', {})(
                    <DatePicker
                      onChange={this.onChange}
                      style={{ width: '250px' }}
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label={localConsts.Status_LABEL}>
                  {getFieldDecorator('Status', {})(
                    <Select
                      showSearch
                      style={{ width: '250px' }}
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {InvoiceTypeConst}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row
              style={{
                borderTop: '1px dashed #E3E7F1',
                height: '62px',
                borderBottom: '1px dashed #E3E7F1',
                marginTop: '15',
              }}
            >
              <Col span={2} offset={21}>
                <Button
                  className="button"
                  style={{ marginTop: '14px' }}
                  type="primary"
                >
                  Search
                </Button>
              </Col>
            </Row>
            <Row style={{ marginTop: '14px' }}>
              <div className={styles.tableContainerParent}>
                <Table
                  className={styles.tableContainer}
                  columns={tableColumns5}
                  size="small"
                  onChange={this.handleStandardTableChange}
                />
              </div>
            </Row>
          </Drawer>
          <Drawer
            title={localConsts.LookupPayment_title}
            width="709px"
            closable={true}
            onClose={this.onClose6}
            visible={this.state.visible6}
          >
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label={localConsts.PaymentID_LABEL}>
                  {getFieldDecorator('PaymentID', {})(
                    <Input
                      addonBefore={
                        <Select defaultValue="Contains">{InvoiceIdType}</Select>
                      }
                      addonAfter={
                        <Popover content="ignore case">
                          <Checkbox />
                        </Popover>
                      }
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label={localConsts.PaymentTypeID_LABEL}>
                  {getFieldDecorator('PaymentTypeID	', {})(
                    <Select
                      showSearch
                      style={{ width: '330px' }}
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {InvoiceTypeConst}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label={localConsts.FromPartyID_LABEL}>
                  {getFieldDecorator('FromPartyID', {})(
                    <Input
                      name="FromPartyID"
                      addonAfter={
                        <Icon onClick={this.showDrawer} type="idcard" />
                      }
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label={localConsts.ToPartyID_LABEL}>
                  {getFieldDecorator('ToPartyID')(
                    <Input
                      name="ToPartyID"
                      addonAfter={
                        <Icon onClick={this.showDrawer} type="idcard" />
                      }
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label={localConsts.AmountApplied_LABEL}>
                  {getFieldDecorator('AmountApplied', {})(
                    <Input
                      addonBefore={
                        <Select defaultValue="Contains">{InvoiceIdType}</Select>
                      }
                      addonAfter={
                        <Popover content="ignore case">
                          <Checkbox />
                        </Popover>
                      }
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row
              style={{
                borderTop: '1px dashed #E3E7F1',
                height: '62px',
                borderBottom: '1px dashed #E3E7F1',
                marginTop: '15',
              }}
            >
              <Col span={2} offset={21}>
                <Button
                  className="button"
                  style={{ marginTop: '14px' }}
                  type="primary"
                >
                  Search
                </Button>
              </Col>
            </Row>
            <Row style={{ marginTop: '14px' }}>
              <div className={styles.tableContainerParent}>
                <Table
                  className={styles.tableContainer}
                  columns={tableColumns6}
                  size="small"
                  onChange={this.handleStandardTableChange}
                />
              </div>
            </Row>
          </Drawer>
          <Drawer
            title={localConsts.LookupGLAccount_title}
            width="709px"
            closable={true}
            onClose={this.onClose2}
            visible={this.state.visible2}
          >
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label={localConsts.GLAccountID_LABEL}>
                  {getFieldDecorator('GLAccountID', {})(
                    <InputGroup>
                      <Select defaultValue="Contains">{InvoiceIdType}</Select>
                      <AutoComplete />
                      <Checkbox
                        style={{ marginLeft: '193px' }}
                        onChange={this.onChange}
                      >
                        Ignore Case
                      </Checkbox>
                    </InputGroup>,
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label={localConsts.NAME_LABEL}>
                  {getFieldDecorator('name', {})(
                    <InputGroup>
                      <Select defaultValue="Contains">{InvoiceIdType}</Select>
                      <AutoComplete />
                      <Checkbox style={{ marginLeft: '193px' }}>
                        Ignore Case
                      </Checkbox>
                    </InputGroup>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <FormItem label={localConsts.Type_LABEL}>
                  {getFieldDecorator('paymentType', {
                    initialValue: data.InvoiceType,
                    enableReinitialize: true,
                  })(
                    <Select
                      showSearch
                      style={{ width: '300px' }}
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {PaymentTypeConst}
                    </Select>,
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label={localConsts.GLAccountClass_LABEL}>
                  {getFieldDecorator('paymentType', {
                    initialValue: data.InvoiceType,
                    enableReinitialize: true,
                  })(
                    <Select
                      showSearch
                      style={{ width: '300px' }}
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {PaymentTypeConst}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row
              style={{
                borderTop: '1px dashed #E3E7F1',
                height: '62px',
                borderBottom: '1px dashed #E3E7F1',
              }}
            >
              <Col span={2} offset={21}>
                <Button
                  className="button"
                  style={{ marginTop: '14px' }}
                  type="primary"
                >
                  Search
                </Button>
              </Col>
            </Row>
            <Row style={{ marginTop: '14px' }}>
              <div className={styles.tableContainerParent}>
                <Table
                  className={styles.tableContainer}
                  columns={tableColumns3}
                  size="small"
                  onChange={this.handleStandardTableChange}
                />
              </div>
            </Row>
          </Drawer>
        </Form>
      </Fragment>
    );
  }
}
PaymentForm.propTypes = {
  dataById: PropTypes.any,
  form: PropTypes.object,
  currentAction: PropTypes.string,
  resetFields: PropTypes.func,
  validateFields: PropTypes.func,
  setClick: PropTypes.func,
  isExists: PropTypes.func,
  handleSubmitAction: PropTypes.func,
  toggleSaveButtonEnable: PropTypes.func,
};
export default Form.create()(
  connect(({ Payment_AP }) => ({
    dataById: [],
    Payment: Payment_AP.reducerSave,
    paymentApp: Payment_AP.reducerApplication,
  }))(PaymentForm),
);
