import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  Col,
  Form,
  Popconfirm,
  Input,
  Tag,
  Tabs,
  Checkbox,
  DatePicker,
  Row,
  Table,
  Select,
  Button,
  Icon,
  Drawer,
  Card,
  Popover,
  Radio,
} from 'antd';
import * as actionConsts from '../../../common/TitlePane/ActionConsts';
import * as localConsts from './BudgetsConsts';
import styles from '../../../common/Styles.less';
import { Link } from 'react-router-dom';
import moment from 'moment';
const FormItem = Form.Item;
const { TabPane } = Tabs;
const InputGroup = Input.Group;
const RadioGroup = Radio.Group;
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
  contactAddresses: [],
  contactPersons: [],
  commentsData: [],
  InvoiceTerm: [],
};
const CheckableTag = Tag.CheckableTag;
class BudgetsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: newObject,
      isExistMessage: '',
      commentsData: [],
      budget:[],
      enableSaveButtonValue: false,
      visible: false,
      visible1: false,
      visible2: false,
      visible4: false,
      visible7: false,
      visible8: false,
      invoiceData: [],
      invoiceId: '',
      key: 'Budget (Edit)',
      activeKey: '2',
      down: false,
      tagsFromServer: [
       
        'Status To Approved',
        'Status To Reviewed',
        'Status To Rejected',
       
      ],
      selectedTags: [],
      Item: [],
      InvoiceTerm: [],
      invoiceItemUpdate: false,
      invoiceRoleUpdate: false,
      visible6: false,
      disabled: false,
      disabled1: false,
      value: 1,
      budgetId : '',
      budgetItemSeqId : '',
      partyId : '',
      Role : [],
      Reviews : [],
      budgetReviewId:''
    };
  }
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
  handleChange = (tag, checked) => {
    const { selectedTags } = this.state;
    console.log(tag);
    if (tag === 'Status To Approved') {
      var obj = {
        budgetId: this.state.budgetId,
        statusId: 'BG_APPROVED',
      };
      this.props.handleSubmitAction(
        actionConsts.ACTION_TYPE_UPDATE_BUDGET_STATUS,
        obj,
      );
    
  }
  if (tag === 'Status To Reviewed') {
    var obj = {
      budgetId: this.state.budgetId,
      statusId: 'BG_REVIEWED',
    };
    this.props.handleSubmitAction(
      actionConsts.ACTION_TYPE_UPDATE_BUDGET_STATUS,
      obj,
    );
}
if (tag === 'Status To Rejected') {
  var obj = {
    budgetId: this.state.budgetId,
    statusId: 'BG_REJECTED',
  };
  this.props.handleSubmitAction(
    actionConsts.ACTION_TYPE_UPDATE_BUDGET_STATUS,
    obj,
  );
  

}
     
}
  showDrawer = () => {
    this.setState({
      visible: true,
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
  showDrawer2 = () => {
    console.log('22');
    this.setState({
      visible2: true,
    });
  };
  onClose2 = () => {
    this.setState({
      visible2: false,
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
  componentWillReceiveProps(nextProps) {
    const { currentAction } = this.props;
    if (nextProps.currentAction === 'new') {
      this.setState({ disabled: true, disabled1: false, activeKey: '2' });
    }
    if (nextProps.currentAction == 'view') {
      this.setState({ disabled: false, disabled1: true, activeKey: '1' });
    }
    if (nextProps.Item != undefined) {
      var tmp = [];
      tmp.push({ budgetItemSeqId: nextProps.Item.budgetItemSeqId });
      this.setState({ Item: tmp,budgetItemSeqId:nextProps.Item.budgetItemSeqId });
    }
    if (nextProps.Reviews != undefined) {
      var tmp = [];
      tmp.push({ budgetReviewId: nextProps.Reviews.budgetReviewId });
      this.setState({ Reviews: tmp,budgetReviewId : nextProps.Reviews.budgetReviewId});
    }
    if (nextProps.data != undefined) {
      var tmp = [];
      tmp.push({ budgetId: nextProps.data.budgetId });
      this.setState({ budget: tmp, budgetId: nextProps.data.budgetId });
    }
    if (nextProps.Role!= undefined) {
      var tmp = [];
      tmp.push({ partyId: this.state.partyId });
      this.setState({ Role: tmp });
    }
    
    if (nextProps.InvoiceTerm != undefined) {
      var tmp = [];
      tmp.push({ invoiceTermId: nextProps.InvoiceTerm.invoiceTermId });
      this.setState({ InvoiceTerm: tmp });
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
  iconChange = () => {
    if (!this.state.down) this.setState({ down: true });
    if (this.state.down) this.setState({ down: false });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (!errors) {
        const activeKey = this.state.activeKey;
        const key = this.state.key;
        if (activeKey === '2') {
          var obj = {
            budgetTypeId: values.budgetTypeId,
            customTimePeriodId: values.customTimePeriodId,
            comments: values.comments,
          };
          this.props.handleSubmitAction(actionConsts.ACTION_TYPE_SAVE, obj);
        }
        if (activeKey === '1') {
          if (key === 'Budget (Edit)') {
            var obj = {
              budgetId : this.state.budgetId,
              budgetTypeId: values.budgetTypeId,
              customTimePeriodId: values.customTimePeriodId,
              comments: values.comments,
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE,
              obj,
            );
          }
          if (key === 'Item') {
            var obj = {
              budgetId : this.state.budgetId,
              budgetItemTypeId: values.budgetItemTypeId,
              amount: values.amount,
              purpose: values.purpose,
              justification : values.justification
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_ITEM,
              obj,
            );
          }
         
          if (key === 'Roles') {
            var obj = {
              budgetId: this.state.budgetId,
              partyId: values.partyId,
              roleTypeId: 'CUSTOMER',
            };
            this.setState({partyId:obj.partyId});
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_ROLES,
              obj,
            );
          }
          if (key === 'Reviews') {
            var obj = {
              budgetId: this.state.budgetId,
              partyId: values.partyId,
              budgetReviewResultTypeId:'BGR_ACCEPTED',
              // reviewDate: values.reviewDate,

            };
            this.setState({partyId : obj.partyId});
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_Reviews,
              obj,
            );
          }
          if (key === 'Email') {
            var other = 'N';
            if (values.OtherCurrency === true) other = 'Y';
            var obj = {
              invoiceId: this.state.invoiceId,
              sendFrom: values.FromEmailAddress,
              sendTo: values.ToEmailAddress,
              sendCc: values.CopyEmailAddress,
              subject: values.Subject,
              bodyText: values.EmailBody,
              other: other,
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_INVOICE_SEND_EMAIL,
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
  callback = key => {
    this.setState({ key: key });
  };
  // onChange = e => {
  //   this.setState({
  //     value: e.target.value,
  //   });
  // };
  onChange(date, dateString) {
    console.log(date, dateString);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { currentAction } = this.props;
    const CompanyTypeConst = localConsts.CompanyTypeConst.map(k => (
      <Option key={k.label} value={k.value}>
        {k.label}
      </Option>
    ));
    const InvoiceTypeConst1 = localConsts.InvoiceTypeConst1.map(k => (
      <Option key={k.label} value={k.value}>
        {k.label}
      </Option>
    ));
    const To_Date_Const = localConsts.To_Date.map(k => (
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
    const { data } = this.state;
    const { selectedTags } = this.state;
    const tableColumns5 = [
      {
        title: `${localConsts.ProductType_LABEL}`,
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.BrandName_LABEL}`,
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: `${localConsts.InternalName_LABEL}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.ProductType_LABEL}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
    ];
    const tableColumns7 = [
      {
        title: `${localConsts.CustomTimePeriodId}`,
        dataIndex: 'ProductFeatureTypeId',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.ParentPeriodId}`,
        dataIndex: 'ProductFeatureCategoryId',
        id: 'Description',
      },
      {
        title: `${localConsts.PeriodTypeId}`,
        dataIndex: 'UOM',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.PeriodNum}`,
        dataIndex: 'NumberSpecified',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.PeriodName}`,
        dataIndex: 'DefaultAmount',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.FromDate_LABEL}`,
        dataIndex: 'DefaultSequenceNum',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.ThroughDate_LABEL}`,
        dataIndex: 'Abbrev',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.IsClosed}`,
        dataIndex: 'IdCode',
        id: 'ext_acc_id',
      },
    ];
    const tableColumns4 = [
      {
        title: `${localConsts.BudgetReviewId}`,
        dataIndex: 'budgetReviewId',
        key: 'budgetReviewId',
        // fixed: 'left',
      },
      {
        title: `${localConsts.PartyID_LABEL}`,
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: `${localConsts.COLUMN_Name}`,
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.BudgetReviewResult}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.ReviewDate}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
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
                  budgetId: this.state.budgetId,
                  budgetReviewId: this.state.budgetReviewId,
                  partyId: this.state.partyId,
                  budgetReviewResultTypeId : 'BGR_ACCEPTED'
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_REMOVE_Reviews,
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
    const tableColumns0 = [
      {
        title: `${localConsts.COLUMN_PartyID}`,
        dataIndex: 'Party_ID',
        id: 'Party_ID',
      },
      {
        title: `${localConsts.COLUMN_PartyTypeId}`,
        dataIndex: 'Party_Type_Id',
        id: 'Party_Type_Id',
      },
      {
        title: `${localConsts.COLUMN_FirstName}`,
        dataIndex: 'First_name',
        id: 'First_name',
      },
      {
        title: `${localConsts.COLUMN_LastName}`,
        dataIndex: 'Last_name',
        id: 'Last_name',
      },
      {
        title: `${localConsts.COLUMN_GroupName}`,
        dataIndex: 'Group_Name',
        id: 'Group_Name',
      },
    ];
    const tableColumns10 = [
      {
        title: `${localConsts.PartyID}`,
        dataIndex: 'Party_ID',
        id: 'Party_ID',
      },
      {
        title: `${localConsts.COLUMN_Name}`,
        dataIndex: 'Party_Type_Id',
        id: 'Party_Type_Id',
      },
      {
        title: `${localConsts.RoleTypeId_LABEL}`,
        dataIndex: 'First_name',
        id: 'First_name',
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
                  invoiceItemSeqId: data.InvoiceItemSeqId,
                  invoiceId: this.state.invoiceId,
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_INVOICE_ITEM_DELETE,
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
    const tableColumns = [
      {
        title: 'Item No',
        dataIndex: 'Item_No',
        id: 'Item_No',
        render: text => <Link to={`InvoiceById`}>{text}</Link>,
      },
      {
        title: 'Description',
        dataIndex: 'Description',
      },
      {
        title: 'Total',
        dataIndex: 'Total',
      },
      {
        title: 'Payment Id',
        dataIndex: 'Payment_Id',
      },
      {
        title: 'Amount Applied',
        dataIndex: 'Amount_Applied',
      },
      {
        title: 'Actions',
        width: 300,
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
    const tableColumns2 = [
      {
        title: `${localConsts.BudgetItemSeqId}`,
        dataIndex: 'budgetItemSeqId',
        id: 'budgetItemSeqId',
        render: (text, data) => {
          return (
            <Button
              className={styles.anchorNameStyle}
             
            >
              {text}
            </Button>
          );
        },
      },
      {
        title: `${localConsts.BudgetItemTypeId}`,
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: `${localConsts.COLUMN_Amount}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.Purpose}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.Justification}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
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
                  budgetItemSeqId: this.state.budgetItemSeqId,
                  budgetId: this.state.budgetId,
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_ITEM_DELETE,
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
        title: `${localConsts.COLUMN_PartyID}`,
        dataIndex: 'partyId',
        id: 'partyId',
        render: (text, data) => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                // this.setState({ invoiceRoleUpdate: true });
                // this.showDrawer2();
              }}
            >
              {text}
            </Button>
          );
        },
      },
      {
        title: `${localConsts.COLUMN_Name}`,
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: `${localConsts.COLUMN_RoleTypeId}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
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
                  partyId: this.state.partyId,
                  roleTypeId: 'CUSTOMER',
                  budgetId: this.state.budgetId,
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_ROLE_DELETE,
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

                  <div>
                    <Row style={{ marginTop: '15px' }}>
                      <Col span={7}>
                        <FormItem label={localConsts.BudgetTypeId}>
                          {getFieldDecorator('budgetTypeId', {
                            initialValue: data.partyIdFrom,
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
                              {}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7} offset={1}>
                        <FormItem label={localConsts.CustomTimePeriodId}>
                          {getFieldDecorator('customTimePeriodId', {
                            initialValue: data.partyId,
                            enableReinitialize: true,
                          })(
                            <Input
                              style={{ width: '295px' }}
                              onBlur={this.enableSaveButton}
                              addonAfter={
                                <Icon
                                  onClick={this.showDrawer8}
                                  type="idcard"
                                />
                              }
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={6}>
                        <FormItem label={localConsts.Comments}>
                          {getFieldDecorator('comments', {
                            initialValue: data.invoiceTypeId,
                            enableReinitialize: true,
                          })(
                          <Input />
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                  </div>
              
                
                </div>
            </TabPane>
            <TabPane
              tab={localConsts.TAB1_CAPTION}
              key="1"
              className={styles.tabPaneCustom}
              disabled={this.state.disabled}
            >
              <Tabs tabPosition="left" onChange={this.callback}>
                <TabPane tab="Budget (Edit)" key="Budget (Edit)">
                  <div>
                    <Card
                      title={<div>Budget: {this.state.budgetId}</div>}
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
                              checked={selectedTags.indexOf(tag) > -1}
                              onChange={checked =>
                                this.handleChange(tag, checked)
                              }
                            >
                              {tag}
                            </CheckableTag>
                          ))}
                        </div>
                      )}
                      <Row gutter={20} style={{ marginTop: '15px' }}>
                    
                        <Col span={7}>
                          <FormItem label={localConsts.BudgetTypeId}>
                            {getFieldDecorator('budgetTypeId', {
                              initialValue: data.partyId,
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
                                {}
                              </Select>,
                            )}
                          </FormItem>
                        </Col>
                      </Row>
                      <Row gutter={20}>
                        <Col span={7}>
                          <FormItem label={localConsts.CustomTimePeriodId}>
                            {getFieldDecorator('customTimePeriodId', {
                              initialValue: data.invoiceTypeId,
                              enableReinitialize: true,
                            })(
                              <Input
                              style={{ width: '295px' }}
                              onBlur={this.enableSaveButton}
                              addonAfter={
                                <Icon
                                  onClick={this.showDrawer8}
                                  type="idcard"
                                />
                              }
                            />,
                            )}
                          </FormItem>
                        </Col>
                        <Col span={6} offset={3}>
                          <FormItem label={localConsts.Comments	}>
                            {getFieldDecorator('comments', {
                              initialValue: '',
                              enableReinitialize: true,
                            })(
                              <Input   style={{ width: '295px' }} />
                            )}
                          </FormItem>
                        </Col>
                      </Row>
                     
                     
                    </Card>
                    <Card>
                      <Row>
                        <Tabs
                          defaultActiveKey="Status"
                          onChange={this.callback}
                        >
                          <TabPane
                            tab="Status"
                            key="Status"
                          >
                            {/* <Table
                              bordered
                              rowSelection={this.rowSelection}
                              columns={tableColumns}
                              style={{ color: '#A0A0A0' }}
                            /> */}
                          </TabPane>
                          <TabPane tab="Roles" key="Roles" />
                          <TabPane tab="Items" key="Items" />
                          <TabPane tab="Reviews" key="Reviews" />
                        </Tabs>
                      </Row>
                    </Card>
                  </div>
                </TabPane>
                <TabPane tab="Item" key="Item">
                  <Row style={{ marginTop: '14px' }}>
                   
                    <Col span={5} offset={15}>
                      <span
                        style={{ color: '#337AB7' }}
                        onClick={this.showDrawer}
                      >
                            Add a new budget Item

                      </span>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        className={styles.tableContainer}
                        columns={tableColumns2}
                        dataSource={this.state.Item}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
                <TabPane tab="Roles" key="Roles">
                  <Row style={{ marginTop: '14px' }}>
                    <Col span={5} offset={15}>
                      <span
                        style={{ color: '#337AB7' }}
                        onClick={this.showDrawer2}
                      >
                            Add a new Party Role
                      </span>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        className={styles.tableContainer}
                        columns={tableColumns3}
                        dataSource={this.state.Role}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
                <TabPane tab="Reviews" key="Reviews">
                  <Row style={{ marginTop: '14px' }}>
                   
                    <Col span={6} offset={18}>
                      <span
                        style={{ color: '#337AB7' }}
                        onClick={this.showDrawer5}
                      >
                           Add a new Budget Review
                      </span>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        className={styles.tableContainer}
                        columns={tableColumns4}
                        scroll={{ x: 1300 }}
                        dataSource={this.state.Reviews}
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
            // title={localConsts.NewTerms_title}
            width="709px"
            closable={true}
            onClose={this.onClose5}
            visible={this.state.visible5}
          >
            <Row gutter={20} style={{marginTop:'35px'}}>
              <Col span={11}>
                <FormItem label={localConsts.PartyID_LABEL}>
                  {getFieldDecorator('partyId', {})(
                    <Input
                    style={{ width: '295px' }}
                    onBlur={this.enableSaveButton}
                    addonAfter={
                      <Icon
                        onClick={this.showDrawer4}
                        type="idcard"
                      />
                    }
                  />,
                  )}
                </FormItem>
              </Col>
              <Col span={6} offset={2}>
                <FormItem label={localConsts.BudgetReviewResult}>
                  {getFieldDecorator('budgetReviewResultTypeId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Select
                    showSearch
                    style={{ width: '295px' }}
                    value={this.state.termTypeId}
                    onChange={this.handleChange1}
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
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.ReviewDate}>
                {getFieldDecorator('reviewDate', {
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
              
            </Row>
            
           
            <Row
              style={{
                borderTop: '1px dashed #E3E7F1',
                height: '62px',
                marginTop: '100px',
              }}
            >
              <Col span={2} offset={21}>
                <Button
                  className="button"
                  style={{ marginTop: '14px' }}
                  onClick={this.handleSubmit}
                  type="primary"
                >
                  Save
                </Button>
              </Col>
            </Row>
          </Drawer>
          <Drawer
            width="709px"
            closable={true}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <Row gutter={20} style={{ marginTop: '30px' }}>
              <Col span={11}>
                <FormItem label={localConsts.BudgetItemTypeId}>
                  {getFieldDecorator('budgetItemTypeId', {})(
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
                      {InvoiceTypeConst}
                    </Select>,
                  )}
                </FormItem>
              </Col>
              <Col span={8} offset={2}>
                <FormItem label={localConsts.COLUMN_Amount}>
                  {getFieldDecorator('amount', {})(
                   <Input
                   type="text"
                   style={{ width: '295px' }}
                 />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.Purpose}>
                  {getFieldDecorator('purpose', {})(
                    <Input
                    type="text"
                    style={{ width: '295px' }}
                  />,
                  )}
                </FormItem>
              </Col>
              <Col span={8} offset={2}>
                <FormItem label={localConsts.Justification }>
                  {getFieldDecorator('justification', {})(
                     <Input
                     type="text"
                     style={{ width: '295px' }}
                   />,
                  )}
                </FormItem>
              </Col>
            
            </Row>
            <Row
              style={{
                borderTop: '1px dashed #E3E7F1',
                height: '62px',
                marginTop: '100px',
              }}
            >
              <Col span={2} offset={21}>
                <Button
                  className="button"
                  style={{ marginTop: '14px' }}
                  type="primary"
                  onClick={this.handleSubmit}
                >
                  Save
                </Button>
              </Col>
            </Row>
          </Drawer>
          <Drawer
            title={localConsts.PartybyName_title}
            width="709px"
            closable={true}
            onClose={this.onClose6}
            visible={this.state.visible6}
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
                  size="small"
                  onChange={this.handleStandardTableChange}
                  columns={tableColumns0}
                />
              </div>
            </Row>
          </Drawer>
          <Drawer
            width="709px"
            closable={true}
            onClose={this.onClose2}
            visible={this.state.visible2}
          >
            <Row gutter={20} style={{ marginTop: '30px' }}>
              <Col span={11}>
              <FormItem label={localConsts.PartyID}>
                  {getFieldDecorator('partyId', {})(
                     <Input
                     style={{ width: '295px' }}
                     onBlur={this.enableSaveButton}
                     addonAfter={
                       <Icon
                         onClick={this.showDrawer4}
                         type="idcard"
                       />
                     }
                   />,
                  )}
                </FormItem>
              </Col>
              <Col span={11} offset={2}>
              <FormItem label={localConsts.RoleTypeId_LABEL}>
                  {getFieldDecorator('roleTypeId', {})(
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
                marginTop: '15px',
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
            <Row style={{ marginTop: '14px' }}>
              <div className={styles.tableContainerParent}>
                <Table
                  className={styles.tableContainer}
                  rowKey="id"
                  title={this.tableHeader}
                  loading={this.state.loading}
                  size="small"
                  onChange={this.handleStandardTableChange}
                  columns={tableColumns10}
                />
              </div>
            </Row>
          </Drawer>
          <Drawer
            title={localConsts.PartybyName_title}
            width="709px"
            closable={true}
            onClose={this.onClose4}
            visible={this.state.visible4}
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
                  rowKey="id"
                  title={this.tableHeader}
                  loading={this.state.loading}
                  size="small"
                  onChange={this.handleStandardTableChange}
                  columns={tableColumns0}
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
              <Col span={11}>
                <FormItem label={localConsts.BillingAccountID_LABEL}>
                  {getFieldDecorator('BillingAccountID_LABEL', {})(
                    <Input
                      placeholder={localConsts.BillingAccountID_PLACEHOLDER}
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
                <FormItem label={localConsts.Description_LABEL}>
                  {getFieldDecorator('Description', {})(
                    <Input
                      placeholder={localConsts.Description_PLACEHOLDER}
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
                <FormItem label={localConsts.AccountingExternalAccountId_LABEL}>
                  {getFieldDecorator('AccountingExternalAccountId_LABEL ', {})(
                    <Input
                      placeholder={
                        localConsts.AccountingExternalAccountId_PLACEHOLDER
                      }
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
            title={localConsts.LookupProduct_title}
            width="709px"
            closable={true}
            onClose={this.onClose7}
            visible={this.state.visible7}
          >
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.ProductId_LABEL}>
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
              <Col span={11} offset={2}>
                <FormItem label={localConsts.BrandName_LABEL}>
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
              <Col span={11}>
                <FormItem label={localConsts.InternalName_LABEL}>
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
              <Col span={11} offset={2}>
                <FormItem label={localConsts.ProductType_LABEL}>
                  {getFieldDecorator('AgreementTypeId', {})(
                    <Select
                      showSearch
                      style={{ width: '302px' }}
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
            <Row>
              <Col span={11}>
                <FormItem label={localConsts.PrimaryCategory_LABEL}>
                  {getFieldDecorator('AgreementTypeId', {})(
                    <Select
                      showSearch
                      style={{ width: '302px' }}
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
                  rowKey="id"
                  title={this.tableHeader}
                  columns={tableColumns5}
                  loading={this.state.loading}
                  size="small"
                  onChange={this.handleStandardTableChange}
                />
              </div>
            </Row>
          </Drawer>
          <Drawer
            // title={localConsts.LookupProductFeature_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose8}
            visible={this.state.visible8}
          >
            <Row gutter={20} style={{marginTop:'30px'}}>
              <Col span={11}>
                <FormItem label={localConsts.CustomTimePeriodId}>
                  {getFieldDecorator('ProductFeatureId', {})(
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
              <Col span={11} offset={2}>
                <FormItem label={localConsts.PeriodTypeId}>
                  {getFieldDecorator('ProductFeatureTypeId', {})(
                    <Select
                      showSearch
                      style={{ width: '302px' }}
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
            <Row gutter={20}>
              <Col span={11}>
              <FormItem label={localConsts.ParentPeriodId}>
                  {getFieldDecorator('ProductFeatureId', {})(
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
              <Col span={11} offset={2}>
                <FormItem label={localConsts.PeriodNum}>
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
              <Col span={11}>
                <FormItem label={localConsts.PeriodName}>
                  {getFieldDecorator('UOM', {})(
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
              <Col span={11}>
                <FormItem label={localConsts.FromDate_LABEL}>
                {getFieldDecorator('FromDate', {
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
              <Col span={11} offset={2}>
                <FormItem label={localConsts.ThroughDate_LABEL}>
                {getFieldDecorator('FromDate', {
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
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.IsClosed}>
                  {getFieldDecorator('DefaultAmountTo', {})(
                    <Select
                    showSearch
                    style={{ width: '302px' }}
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
                marginTop: '15',
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
                  rowKey="id"
                  title={this.tableHeader}
                  columns={tableColumns7}
                  loading={this.state.loading}
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
BudgetsForm.propTypes = {
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
  connect(({ Budgets_Accounting }) => ({
    dataById: [],
    data: Budgets_Accounting.reducerSave,
    Item: Budgets_Accounting.reducerSaveItem,
    Role: Budgets_Accounting.reducerSaveRole,
    RemoveRole : Budgets_Accounting.reducerRemoveRole,
    Reviews: Budgets_Accounting.reducerSaveReviews,
  }))(BudgetsForm),
);
