import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  Col,
  Form,
  Input,
  Popconfirm,
  Tabs,
  AutoComplete,
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
import * as localConsts from './PaymentGroupsConsts';
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
  paymentGroup: [],
};
class PaymentGroupsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: newObject,
      isExistMessage: '',
      commentsData: [],
      enableSaveButtonValue: false,
      visibleAddress: false,
      visibleContactPerson: false,
      visible: false,
      visible1: false,
      visible2: false,
      visible0: false,
      currentKey: '2',
      key: this.props.key,
      activeKey: '2',
      paymentGroupId: '',
      visible3: false,
      payment: [],
      paymentMsg: [],
      paymentId: '',
      paymentGroupMemberUpdate: false,
      disabled: false,
      disabled1: false,
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
  };
  showDrawer0 = () => {
    this.setState({
      visible0: true,
    });
  };
  onClose0 = () => {
    this.setState({
      visible0: false,
    });
  };
  componentWillReceiveProps(nextProps) {
    const { currentAction } = this.props;
    if (nextProps.currentAction === 'new') {
      this.setState({ disabled: true, disabled1: false, activeKey: '2' });
    }
    if (nextProps.currentAction == 'view') {
      this.setState({ disabled: false, disabled1: true, activeKey: '1' });
    }
    if (nextProps.paymentGroup != undefined) {
      var tmp = [];
      tmp.push({ paymentGroupId: nextProps.paymentGroup.paymentGroupId });
      this.setState({
        paymentGroup: tmp,
        paymentGroupId: nextProps.paymentGroup.paymentGroupId,
      });
    }
    if (nextProps.paymentMsg != undefined) {
      var tmp = [];
      tmp.push(nextProps.paymentMsg);
      this.setState({ paymentMsg: tmp });
    }
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
    const activeKey = this.state.activeKey;
    const key = this.state.key;
    this.props.form.validateFields((errors, values) => {
      if (!errors) {
        if (activeKey === '2') {
          var obj = {
            paymentGroupTypeId: values.paymentGroupTypeId,
            paymentGroupName: values.paymentGroupName,
          };
          this.props.handleSubmitAction(actionConsts.ACTION_TYPE_SAVE, obj);
        }
        if (activeKey === '1') {
          if (key === 'Group') {
            var obj = {
              paymentGroupId: this.state.paymentGroupId,
              paymentGroupTypeId: values.PaymentGroupTypeId,
              paymentGroupName: values.PaymentGroupName,
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_PAYMENT_GROUP,
              obj,
            );
          }
          if (key === 'Group Members' && !this.state.paymentGroupMemberUpdate) {
            if (this.state.paymentMsg[0].responseMessage != 'undefined') {
              var tmp = [];
              tmp.push({ paymentId: values.paymentId });
              this.setState({ payment: tmp, paymentId: values.paymentId });
            }
            var obj = {
              paymentGroupId: this.state.paymentGroupId,
              paymentId: values.paymentId,
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_PAYMENT_GROUP_MEMBERS,
              obj,
            );
          }
          if (key === 'Group Members' && this.state.paymentGroupMemberUpdate) {
            var obj = {
              paymentGroupId: this.state.paymentGroupId,
              paymentId: values.paymentId,
              fromDate: '13/03/2019 11:45:14',
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_PAYMENT_GROUP_MEMBERS,
              obj,
            );
          }
        }
      }
    });
    this.props.form.resetFields();
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
    const tableColumns0 = [
      {
        title: `${localConsts.COLUMN_PaymentId}`,
        dataIndex: 'paymentId',
        id: 'paymentId',
        render: (text, data) => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({ paymentGroupMemberUpdate: true });
                this.showDrawer3();
              }}
            >
              {text}
            </Button>
          );
        },
      },
      {
        title: `${localConsts.COLUMN_ReferenceNumber}`,
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: `${localConsts.COLUMN_FromParty}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_ToParty}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_PaymentType}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_ThroughDate}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        dataIndex: 'paymentId',
        id: 'paymentId',
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
                  paymentGroupId: this.state.paymentGroupId,
                  paymentId: data,
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_PAYMENT_GROUP_MEMBER_DELETE,
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
        title: `${localConsts.COLUMN_PaymentID}`,
        dataIndex: 'InvoiceID',
        id: 'InvoiceID',
        render: text => <Link to={`InvoiceById`}>{text}</Link>,
      },
      {
        title: `${localConsts.COLUMN_FromParty}`,
        dataIndex: 'Item_No',
        id: 'Item_No',
        render: text => <Link to={`InvoiceById`}>{text}</Link>,
      },
      {
        title: `${localConsts.COLUMN_ToParty}`,
        dataIndex: 'BillingAccountID',
      },
      {
        title: `${localConsts.COLUMN_PaymentType}`,
        dataIndex: 'Total',
      },
      {
        title: `${localConsts.COLUMN_PaymentStatus}`,
        dataIndex: 'Payment_Id',
      },
      {
        title: `${localConsts.COLUMN_Amount}`,
        dataIndex: 'Amount_Applied',
      },
      {
        title: `${localConsts.COLUMN_FromDate}`,
        dataIndex: 'Amount_Applied',
      },
      {
        title: `${localConsts.COLUMN_ThroughDate}`,
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
            onChange={this.callback}
          >
            <TabPane
              tab={localConsts.TAB2_CAPTION}
              key="2"
              className={styles.tabPaneCustom}
              disabled={this.state.disabled1}
            >
              <div className={styles.tabPaneCard}>
                <Row style={{ marginTop: '15px' }}>
                  <Col span={6}>
                    <FormItem label={localConsts.Type_LABEL}>
                      {getFieldDecorator('paymentGroupTypeId', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Select
                          showSearch
                          onBlur={this.enableSaveButton}
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
                  <Col span={6} offset={3}>
                    <FormItem label={localConsts.PaymentGroupName_LABEL}>
                      {getFieldDecorator('paymentGroupName', {
                        initialValue: data.InvoiceType,
                        enableReinitialize: true,
                      })(<Input onBlur={this.enableSaveButton} />)}
                    </FormItem>
                  </Col>
                </Row>
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
                        <div>
                          Payment Group Overview For {this.state.paymentGroupId}
                        </div>
                      }
                      bordered={true}
                    >
                      <Row gutter={16}>
                        <Col span={6}>
                          <div>{localConsts.PaymentGroupID_LABEL}</div>
                          <p style={{ color: '#3E3E3E' }}>Reference Number</p>
                        </Col>
                        <Col span={6}>
                          <div>Type</div>
                          <p style={{ color: '#3E3E3E' }}>In-Process</p>
                        </Col>
                        <Col span={6}>
                          <div>Payment Group Name</div>
                          <p style={{ color: '#3E3E3E' }}>
                            Your Company Name Here
                          </p>
                        </Col>
                      </Row>
                    </Card>
                    <Card>
                      <Table
                        bordered
                        rowSelection={this.rowSelection}
                        columns={tableColumns}
                        style={{ color: '#A0A0A0' }}
                      />
                    </Card>
                  </div>
                </TabPane>
                <TabPane tab="Group" key="Group">
                  <Row style={{ marginTop: '15px' }}>
                    <Col span={6}>
                      <FormItem label={localConsts.PaymentGroupID_LABEL}>
                        {getFieldDecorator('PaymentGroupId', {
                          initialValue: this.state.paymentGroupId,
                          enableReinitialize: true,
                        })(<Input disabled />)}
                      </FormItem>
                    </Col>
                    <Col span={6} offset={2}>
                      <FormItem label={localConsts.PaymentGroupTypeId_LABEL}>
                        {getFieldDecorator('PaymentGroupTypeId', {
                          initialValue: data.InvoiceType,
                          enableReinitialize: true,
                        })(
                          <Select
                            showSearch
                            onBlur={this.enableSaveButton}
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
                    <Col span={6} offset={3}>
                      <FormItem label={localConsts.PaymentGroupName_LABEL}>
                        {getFieldDecorator('PaymentGroupName', {
                          initialValue: data.InvoiceType,
                          enableReinitialize: true,
                        })(<Input />)}
                      </FormItem>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tab="Group Members" key="Group Members">
                  <Row style={{ marginTop: '14px' }}>
                    <Col span={4} className={styles.copy}>
                      {localConsts.ListAgreementItems}
                    </Col>
                    <Col span={5} offset={15}>
                      <span
                        style={{ color: '#337AB7' }}
                        onClick={this.showDrawer3}
                      >
                        Add Payment Group Member
                      </span>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        className={styles.tableContainer}
                        columns={tableColumns0}
                        dataSource={this.state.payment}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
              </Tabs>
            </TabPane>
          </Tabs>
          <Drawer
            title={localConsts.LookupPayment_title}
            width="709px"
            closable={true}
            onClose={this.onClose0}
            visible={this.state.visible0}
          >
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.PaymentId_LABEL}>
                  {getFieldDecorator('Party_ID', {})(
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
              <Col span={11} offset={1}>
                <FormItem label={localConsts.PaymentTypeID_LABEL}>
                  {getFieldDecorator('Party_Type_ID', {})(
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
                      {InvoiceTypeConst}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.FromPartyID_LABEL}>
                  {getFieldDecorator('FromPartyID', {
                    initialValue: data.FromPartyID,
                    enableReinitialize: true,
                  })(
                    <Input
                      style={{ width: '302px' }}
                      name="FromPartyID"
                      addonAfter={
                        <Icon onClick={this.showDrawer} type="idcard" />
                      }
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={11} offset={1}>
                <FormItem label={localConsts.ToPartyID_LABEL}>
                  {getFieldDecorator('ToPartyID', {
                    initialValue: data.FromPartyID,
                    enableReinitialize: true,
                  })(
                    <Input
                      style={{ width: '302px' }}
                      name="FromPartyID"
                      addonAfter={
                        <Icon onClick={this.showDrawer} type="idcard" />
                      }
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.AmountApplied_LABEL}>
                  {getFieldDecorator('Group_Name', {})(
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
                  columns={tableColumns0}
                  size="small"
                  onChange={this.handleStandardTableChange}
                />
              </div>
            </Row>
          </Drawer>
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
                <FormItem label={localConsts.Description_LABEL}>
                  {getFieldDecorator('Description', {})(
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
                <FormItem label={localConsts.AccountingExternalAccountId_LABEL}>
                  {getFieldDecorator('AccountingExternalAccountId_LABEL ', {})(
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
          <Drawer
            width="709px"
            closable={true}
            onClose={this.onClose3}
            visible={this.state.visible3}
          >
            <Row gutter={20} style={{ marginTop: '24px' }}>
              <Col span={7}>
                <FormItem label={localConsts.PaymentId_LABEL}>
                  {getFieldDecorator('paymentId', {
                    initialValue: this.state.paymentId,
                    enableReinitialize: true,
                  })(
                    <Input
                      style={{ width: '240px' }}
                      onBlur={this.enableSaveButton}
                      addonAfter={
                        <Icon type="idcard" onClick={this.showDrawer0} />
                      }
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={7} offset={2}>
                <FormItem label={localConsts.FromDate_LABEL}>
                  {getFieldDecorator('fromDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                      style={{ width: '260px' }}
                      onChange={this.onChange}
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={7}>
                <FormItem label={localConsts.SequenceNum_LABEL}>
                  {getFieldDecorator('sequenceNum', {
                    initialValue: data.sequenceNum,
                    enableReinitialize: true,
                  })(
                    <Input
                      type="text"
                      name="FromPartyID"
                      style={{ width: '240px' }}
                      placeholder={localConsts.PaymentId_PLACEHOLDER}
                      onBlur={this.checkIsExists}
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={7} offset={2}>
                <FormItem label={localConsts.ThroughDate_LABEL}>
                  {getFieldDecorator('thruDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                      style={{ width: '260px' }}
                      onChange={this.onChange}
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
                marginTop: '14px',
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
        </Form>
      </Fragment>
    );
  }
}
PaymentGroupsForm.propTypes = {
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
  connect(({ Payment_Groups_AR }) => ({
    dataById: [],
    paymentGroup: Payment_Groups_AR.reducerSave,
    paymentMsg: Payment_Groups_AR.reducerSavePaymentGroupMember,
  }))(PaymentGroupsForm),
);
