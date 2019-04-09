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
} from 'antd';
import * as actionConsts from '../../../common/TitlePane/ActionConsts';
import * as localConsts from './InvoiceConsts';
import styles from '../../../common/Styles.less';
import { Link } from 'react-router-dom';
import moment from 'moment';
const FormItem = Form.Item;
const { TabPane } = Tabs;
const InputGroup = Input.Group;
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
class InvoiceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: newObject,
      isExistMessage: '',
      commentsData: [],
      enableSaveButtonValue: false,
      visible: false,
      visible1: false,
      visible2: false,
      visible4:  false,
      visible7:  false,
      visible8:false,
      invoiceData   : [],
      invoiceId: '',
      key: 'Invoice (Edit)',
      activeKey: '2',
      down: false,
      tagsFromServer: [
        'Copy',
        'PDF',
        'Email',
        'Status To Approved',
        'Status To Sent',
        'Status To Ready',
        'Status To ',
        'Status To Cancelled',
      ],
      selectedTags: [],
      InvoiceItem: [],
      InvoiceTerm: [],
      invoiceItemUpdate: false,
      invoiceRoleUpdate: false,
      visible6: false,
      disabled: false,
      disabled1: false,
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
    if (tag === 'Copy') {
      var obj = {
        invoiceIdToCopyFrom: this.state.invoiceId,
      };
      this.props.handleSubmitAction(
        actionConsts.ACTION_TYPE_SAVE_COPY_INVOICE,
        obj,
      );
    } else {
      var obj = {
        invoiceId: this.state.invoiceId,
        statusId: 'INVOICE_APPROVED',
      };
      this.props.handleSubmitAction(
        actionConsts.ACTION_TYPE_SAVE_SET_INVOICE_STATUS,
        obj,
      );
    }
  };
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
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentAction === 'new') {
      this.setState({ disabled: true, disabled1: false, activeKey: '2' });
    }
    if (nextProps.currentAction == 'view') {
      this.setState({ disabled: false, disabled1: true, activeKey: '1' });
    }
    const { currentAction } = this.props;
    if (nextProps.InvoiceItem != undefined) {
      var tmp = [];
      tmp.push({ InvoiceItemSeqId: nextProps.InvoiceItem.invoiceItemSeqId });
      this.setState({ InvoiceItem: tmp });
    }
    if (nextProps.data != undefined) {
      var tmp = [];
      tmp.push({ invoiceId: nextProps.data.invoiceId });
      this.setState({ invoiceData: tmp, invoiceId: nextProps.data.invoiceId });
    }
    if (nextProps.InvoiceRole != undefined) {
      var tmp = [];
      tmp.push({ invoiceId: nextProps.InvoiceRole });
      this.setState({ InvoiceRole: tmp });
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
          console.log(values);
          var obj = {
            invoiceTypeId: values.invoiceTypeId,
            partyIdFrom: 'Company',
            partyId: values.partyId,
          };
          this.props.handleSubmitAction(actionConsts.ACTION_TYPE_SAVE, obj);
        }
        if (activeKey === '1') {
          if (key === 'Invoice (Edit)') {
            var obj = {
              invoiceId: this.state.invoiceId,
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_INVOICE,
              obj,
            );
          }
          if (key === 'Invoice Item') {
            var obj = {
              invoiceId: this.state.invoiceId,
              invoiceItemTypeId: values.invoiceItemTypeId,
              overrideGlAccountId: values.overrideGlAccountId,
              overrideOrgPartyId: values.overrideOrgPartyId,
              inventoryItemId: values.inventoryItemId,
              productId: values.productId,
              productFeatureId: values.productFeatureId,
              parentInvoiceId: values.parentInvoiceId,
              parentInvoiceItemSeqId: values.parentInvoiceItemSeqId,
              uomId: values.uomId,
              taxableFlag: values.taxableFlag,
              quantity: values.quantity,
              amount: values.amount,
              description: values.description,
              taxAuthPartyId: values.taxAuthPartyId,
              taxAuthGeoId: values.taxAuthGeoId,
              taxAuthorityRateSeqId: values.taxAuthorityRateSeqId,
              salesOpportunityId: values.salesOpportunityId,
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_INVOICE_ITEM,
              obj,
            );
          }
          if (key === 'Invoice Item' && this.state.invoiceItemUpdate) {
            var obj = {
              invoiceId: this.state.invoiceId,
              invoiceItemTypeId: values.invoiceItemTypeId,
              overrideGlAccountId: values.overrideGlAccountId,
              overrideOrgPartyId: values.overrideOrgPartyId,
              inventoryItemId: values.inventoryItemId,
              productId: values.productId,
              productFeatureId: values.productFeatureId,
              parentInvoiceId: values.parentInvoiceId,
              parentInvoiceItemSeqId: values.parentInvoiceItemSeqId,
              uomId: values.uomId,
              taxableFlag: values.taxableFlag,
              quantity: values.quantity,
              amount: values.amount,
              description: values.description,
              taxAuthPartyId: values.taxAuthPartyId,
              taxAuthGeoId: values.taxAuthGeoId,
              taxAuthorityRateSeqId: values.taxAuthorityRateSeqId,
              salesOpportunityId: values.salesOpportunityId,
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_INVOICE_ITEM,
              obj,
            );
          }
          if (key === 'Invoice Roles') {
            var obj = {
              invoiceId: this.state.invoiceId,
              partyId: values.Party_ID,
              roleTypeId: 'CUSTOMER',
              datetimePerformed: moment(values.datetimePerformed).format(
                'YYYY-MM-DD',
              ),
              percentage: values.Percentage,
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_INVOICE_ROLES,
              obj,
            );
          }
          if (key === 'Invoice Roles' && this.state.invoiceRoleUpdate) {
            var obj = {
              invoiceId: this.state.invoiceId,
              partyId: values.Party_ID,
              roleTypeId: 'CUSTOMER',
              datetimePerformed: moment(values.datetimePerformed).format(
                'YYYY-MM-DD',
              ),
              percentage: values.Percentage,
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_INVOICE_ROLES,
              obj,
            );
          }
          if (key === 'Invoice Terms') {
            var obj = {
              invoiceId: this.state.invoiceId,
              termTypeId: values.TermTypeId,
              invoiceItemSeqId: '',
              termValue: values.TermValue,
              termDays: values.TermDays,
              textValue: values.TextValue,
              description: values.Description,
              uomId: values.Uom,
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_INVOICE_TERMS,
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
  render() {
    const { getFieldDecorator } = this.props.form;
    const { currentAction } = this.props;
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
    const tableColumns4 = [
      {
        title: `${localConsts.InvoiceTermId}`,
        dataIndex: 'invoiceTermId',
        key: 'invoiceTermId',
        width: 100,
        fixed: 'left',
      },
      {
        title: `${localConsts.TermTypeId}`,
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: `${localConsts.ItemNo}`,
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.TermValue}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.TermDays}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.TextValue}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.Description}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.Uom}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
    ];
    const tableColumns7 = [
      {
        title: `${localConsts.ProductFeatureTypeId}`,
        dataIndex: 'ProductFeatureTypeId',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.ProductFeatureCategoryId}`,
        dataIndex: 'ProductFeatureCategoryId',
        id: 'Description',
      },
      {
        title: `${localConsts.UOM}`,
        dataIndex: 'UOM',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.NumberSpecified}`,
        dataIndex: 'NumberSpecified',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.DefaultAmount}`,
        dataIndex: 'DefaultAmount',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.DefaultSequenceNum}`,
        dataIndex: 'DefaultSequenceNum',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.Abbrev}`,
        dataIndex: 'Abbrev',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.IdCode}`,
        dataIndex: 'IdCode',
        id: 'ext_acc_id',
      },
    ];
    const tableColumns8 = [
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
        title: `${localConsts.COLUMN_ItemNo}`,
        width: 300,
        dataIndex: 'InvoiceItemSeqId',
        id: 'InvoiceItemSeqId',
        render: (text, data) => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({ invoiceItemUpdate: true });
                this.showDrawer();
              }}
            >
              {text}
            </Button>
          );
        },
      },
      {
        title: `${localConsts.COLUMN_Quantity}`,
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: `${localConsts.COLUMN_InvoiceItemType}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_ProductId}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_Description}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_OverrideGlAccountId}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_UnitPrice}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_Total}`,
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
    const tableColumns3 = [
      {
        title: `${localConsts.COLUMN_PartyID}`,
        dataIndex: 'InvoiceItemSeqId',
        id: 'InvoiceItemSeqId',
        render: (text, data) => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({ invoiceRoleUpdate: true });
                this.showDrawer2();
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
        title: `${localConsts.COLUMN_Percentage}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_DateTimePerformed}`,
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
                  partyId: '10000',
                  roleTypeId: 'ACCOUNT',
                  invoiceId: this.state.invoiceId,
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_INVOICE_ROLE_DELETE,
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
                <Row style={{ marginTop: '15px' }}>
                  <Col span={7}>
                    <FormItem label={localConsts.FromPartyID_LABEL}>
                      {getFieldDecorator('partyIdFrom', {
                        initialValue: data.partyIdFrom,
                        enableReinitialize: true,
                      })(
                        <Input
                          style={{ width: '295px' }}
                          onBlur={this.enableSaveButton}
                          addonAfter={
                            <Icon onClick={this.showDrawer6} type="idcard" />
                          }
                        />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={1}>
                    <FormItem label={localConsts.ToPartyID_LABEL}>
                      {getFieldDecorator('partyId', {
                        initialValue: data.partyId,
                        enableReinitialize: true,
                      })(
                        <Input
                          style={{ width: '295px' }}
                          onBlur={this.enableSaveButton}
                          addonAfter={
                            <Icon onClick={this.showDrawer6} type="idcard" />
                          }
                        />,
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <Row>
                  <Col span={6}>
                    <FormItem label={localConsts.InvoiceType_LABEL}>
                      {getFieldDecorator('invoiceTypeId', {
                        initialValue: data.invoiceTypeId,
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
                          {InvoiceTypeConst}
                        </Select>,
                      )}
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
                <TabPane tab="Invoice (Edit)" key="Invoice (Edit)">
                  <div>
                    <Card
                      title={<div>Invoice: {this.state.invoiceId}</div>}
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
                          <FormItem label={localConsts.FromPartyID_LABEL}>
                            {getFieldDecorator('partyIdFrom', {
                              initialValue: data.partyIdFrom,
                              enableReinitialize: true,
                            })(
                              <Input
                                style={{ width: '295px' }}
                                onBlur={this.enableSaveButton}
                                addonAfter={
                                  <Icon
                                    onClick={this.showDrawer6}
                                    type="idcard"
                                  />
                                }
                              />,
                            )}
                          </FormItem>
                        </Col>
                        <Col span={6} offset={2}>
                          <FormItem label={localConsts.ToPartyID_LABEL}>
                            {getFieldDecorator('partyId', {
                              initialValue: data.partyId,
                              enableReinitialize: true,
                            })(
                              <Input
                                style={{ width: '295px' }}
                                onBlur={this.enableSaveButton}
                                addonAfter={
                                  <Icon
                                    onClick={this.showDrawer6}
                                    type="idcard"
                                  />
                                }
                              />,
                            )}
                          </FormItem>
                        </Col>
                      </Row>
                      <Row gutter={20}>
                        <Col span={7}>
                          <FormItem label={localConsts.InvoiceType_LABEL}>
                            {getFieldDecorator('invoiceTypeId', {
                              initialValue: data.invoiceTypeId,
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
                                {InvoiceTypeConst}
                              </Select>,
                            )}
                          </FormItem>
                        </Col>
                        <Col span={6} offset={2}>
                          <FormItem label={localConsts.InvoiceDate_LABEL}>
                            {getFieldDecorator('invoiceDate', {
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
                        <Col span={7}>
                          <FormItem label={localConsts.DueDate_LABEL}>
                            {getFieldDecorator('dueDate', {
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
                        <Col span={6} offset={2}>
                          <FormItem label={localConsts.Description_LABEL}>
                            {getFieldDecorator('description', {
                              initialValue: data.description,
                              enableReinitialize: true,
                            })(
                              <Input type="text" style={{ width: '295px' }} />,
                            )}
                          </FormItem>
                        </Col>
                      </Row>
                      <Row gutter={20}>
                        <Col span={7}>
                          <FormItem label={localConsts.RoleTypeId_LABEL}>
                            {getFieldDecorator('roleTypeId', {
                              initialValue: data.roleTypeId,
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
                                {InvoiceTypeConst}
                              </Select>,
                            )}
                          </FormItem>
                        </Col>
                        <Col span={6} offset={2}>
                          <FormItem label={localConsts.BillingAccountID_LABEL}>
                            {getFieldDecorator('billingAccountId', {
                              initialValue: data.billingAccountId,
                              enableReinitialize: true,
                            })(
                              <Input
                                style={{ width: '295px' }}
                                addonAfter={
                                  <Icon
                                    onClick={this.showDrawer1}
                                    type="idcard"
                                  />
                                }
                              />,
                            )}
                          </FormItem>
                        </Col>
                      </Row>
                      <Row gutter={20}>
                        <Col span={7}>
                          <FormItem label={localConsts.Currency_LABEL}>
                            {getFieldDecorator('currencyUomId', {
                              initialValue: data.InvoiceType,
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
                                {InvoiceTypeConst}
                              </Select>,
                            )}
                          </FormItem>
                        </Col>
                        <Col span={6} offset={2}>
                          <FormItem label={localConsts.RecurrenceInfoId_LABEL}>
                            {getFieldDecorator('recurrenceInfoId', {
                              initialValue: data.RoleTypeId,
                              enableReinitialize: true,
                            })(
                              <Input type="text" style={{ width: '295px' }} />,
                            )}
                          </FormItem>
                        </Col>
                      </Row>
                      <Row gutter={20}>
                        <Col span={7}>
                          <FormItem label={localConsts.ReferenceNumber_LABEL}>
                            {getFieldDecorator('referenceNumber', {
                              initialValue: data.referenceNumber,
                              enableReinitialize: true,
                            })(
                              <Input type="text" style={{ width: '295px' }} />,
                            )}
                          </FormItem>
                        </Col>
                        <Col span={6} offset={2}>
                          <FormItem label={localConsts.InvoiceMessage_LABEL}>
                            {getFieldDecorator('invoiceMessage', {
                              initialValue: data.invoiceMessage,
                              enableReinitialize: true,
                            })(
                              <Input
                                type="text"
                                style={{ width: '295px' }}
                                onBlur={this.checkIsExists}
                              />,
                            )}
                          </FormItem>
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
                            tab="Applied Payments"
                            key="Applied_Payments"
                          >
                            <Table
                              bordered
                              rowSelection={this.rowSelection}
                              columns={tableColumns}
                              style={{ color: '#A0A0A0' }}
                            />
                          </TabPane>
                          <TabPane tab="Terms" key="Terms" />
                          <TabPane tab="Items" key="Items" />
                          <TabPane tab="Transcations" key="Transcations" />
                        </Tabs>
                      </Row>
                    </Card>
                  </div>
                </TabPane>
                <TabPane tab="Invoice Item" key="Invoice Item">
                  <Row style={{ marginTop: '14px' }}>
                    <Col span={4} className={styles.copy}>
                      {localConsts.ListAgreementItems}
                    </Col>
                    <Col span={5} offset={15}>
                      <span
                        style={{ color: '#337AB7' }}
                        onClick={this.showDrawer}
                      >
                        Create Invoice Item
                      </span>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        className={styles.tableContainer}
                        columns={tableColumns2}
                        dataSource={this.state.InvoiceItem}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
                <TabPane tab="Invoice Roles" key="Invoice Roles">
                  <Row style={{ marginTop: '14px' }}>
                    <Col span={4} className={styles.copy}>
                      {localConsts.ListAgreementItems}
                    </Col>
                    <Col span={5} offset={15}>
                      <span
                        style={{ color: '#337AB7' }}
                        onClick={this.showDrawer2}
                      >
                        Create Invoice Roles
                      </span>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        className={styles.tableContainer}
                        columns={tableColumns3}
                        dataSource={this.state.InvoiceItem}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
                <TabPane tab="Invoice Terms" key="Invoice Terms">
                  <Row style={{ marginTop: '14px' }}>
                    <Col span={6} className={styles.copy}>
                      {localConsts.ListAgreementItemTerms}
                    </Col>
                    <Col span={6} offset={18}>
                      <span
                        style={{ color: '#337AB7' }}
                        onClick={this.showDrawer5}
                      >
                        Create Invoice Term
                      </span>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        className={styles.tableContainer}
                        columns={tableColumns4}
                        scroll={{ x: 1300 }}
                        dataSource={this.state.InvoiceTerm}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
                <TabPane
                  tab="Send per Email"
                  key="Email"
                  className={styles.tabPaneCustom}
                >
                  <Row gutter={20} style={{ marginTop: '15px' }}>
                    <Col span={11}>
                      <FormItem label={localConsts.FromEmailAddress}>
                        {getFieldDecorator('FromEmailAddress', {
                          initialValue: '',
                          enableReinitialize: true,
                        })(
                          <Input
                            type="text"
                            rows={4}
                            style={{ width: '295px' }}
                            onBlur={this.enableSaveButton}
                          />,
                        )}
                      </FormItem>
                    </Col>
                    <Col span={11}>
                      <FormItem label={localConsts.ToEmailAddress}>
                        {getFieldDecorator('ToEmailAddress', {
                          initialValue: '',
                          enableReinitialize: true,
                        })(
                          <Input
                            type="text"
                            rows={4}
                            style={{ width: '295px' }}
                            onBlur={this.enableSaveButton}
                          />,
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col span={11}>
                      <FormItem label={localConsts.CopyEmailAddress}>
                        {getFieldDecorator('CopyEmailAddress', {
                          initialValue: '',
                          enableReinitialize: true,
                        })(
                          <Input
                            type="text"
                            rows={4}
                            style={{ width: '295px' }}
                            onBlur={this.enableSaveButton}
                          />,
                        )}
                      </FormItem>
                    </Col>
                    <Col span={11}>
                      <FormItem label={localConsts.Subject}>
                        {getFieldDecorator('Subject', {
                          initialValue: '',
                          enableReinitialize: true,
                        })(
                          <Input
                            type="text"
                            defaultValue="Please find attached invoice."
                            rows={4}
                            style={{ width: '295px' }}
                            onBlur={this.enableSaveButton}
                          />,
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col span={11}>
                      <FormItem label={localConsts.EmailBody}>
                        {getFieldDecorator('EmailBody', {
                          initialValue: '',
                          enableReinitialize: true,
                        })(
                          <Input
                            type="text"
                            rows={4}
                            style={{ width: '295px' }}
                            onBlur={this.enableSaveButton}
                          />,
                        )}
                      </FormItem>
                    </Col>
                    <Col span={11}>
                      <FormItem label={localConsts.OtherCurrency}>
                        {getFieldDecorator('OtherCurrency', {
                          initialValue: '',
                          enableReinitialize: true,
                        })(<Checkbox onChange={this.onChange} />)}
                      </FormItem>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane
                  tab="Commission Run"
                  key="Commission"
                  className={styles.tabPaneCustom}
                >
                  <Row gutter={20} style={{ marginTop: '15px' }}>
                    <Col span={11}>
                      <FormItem label={localConsts.PartyID}>
                        {getFieldDecorator('PartyID', {
                          initialValue: data.invoiceTypeId,
                          enableReinitialize: true,
                        })(
                          <Select
                            showSearch
                            style={{ width: '595px' }}
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
                  <Row gutter={20} style={{ marginTop: '15px' }}>
                    <Col span={11}>
                      <FormItem label={localConsts.FromDate}>
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
                    <Col span={11} offset={1}>
                      <FormItem label={localConsts.ThroughDate}>
                        {getFieldDecorator('ThroughDate', {
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
                  <Row gutter={20} style={{ marginTop: '25' }}>
                    <Col offset={10}>
                      <Button type="primary">Find</Button>
                    </Col>
                  </Row>
                </TabPane>
              </Tabs>
            </TabPane>
          </Tabs>
          <Drawer
            title={localConsts.NewTerms_title}
            width="709px"
            closable={true}
            onClose={this.onClose5}
            visible={this.state.visible5}
          >
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.TermTypeId}>
                  {getFieldDecorator('TermTypeId', {})(
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
              <Col span={6} offset={2}>
                <FormItem label={localConsts.ItemNo}>
                  {getFieldDecorator('ItemNo', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                      type="text"
                      value={this.state.termDays}
                      onChange={this.handleChange4}
                      rows={4}
                      style={{ width: '295px' }}
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.TermValue}>
                  {getFieldDecorator('TermValue', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                      type="text"
                      rows={4}
                      style={{ width: '295px' }}
                      value={this.state.termValue}
                      onChange={this.handleChange3}
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={6} offset={2}>
                <FormItem label={localConsts.TermDays}>
                  {getFieldDecorator('TermDays', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                      type="text"
                      value={this.state.termDays}
                      onChange={this.handleChange4}
                      rows={4}
                      style={{ width: '295px' }}
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={24}>
                <FormItem label={localConsts.TextValue}>
                  {getFieldDecorator('TextValue', {})(
                    <Input.TextArea
                      type="text"
                      value={this.state.textValue}
                      onChange={this.handleChange7}
                      rows={4}
                      style={{ width: '795px' }}
                    />,
                  )}
                </FormItem>{' '}
              </Col>
              <Col span={24}>
                <FormItem label={localConsts.Description}>
                  {getFieldDecorator('Description', {})(
                    <Input.TextArea
                      type="text"
                      value={this.state.description}
                      onChange={this.handleChange8}
                      rows={4}
                      style={{ width: '795px' }}
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.Uom}>
                  {getFieldDecorator('Uom', {})(
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
            <Row gutter={20} style={{marginTop:'15'}}>
              <Col span={11}>
                <FormItem label={localConsts.COLUMN_InvoiceItemType}>
                  {getFieldDecorator('invoiceItemTypeId', {})(
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
                <FormItem label={localConsts.COLUMN_UOM}>
                  {getFieldDecorator('uomId', {})(
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
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.COLUMN_OverrideGlAccountId}>
                  {getFieldDecorator('overrideGlAccountId', {})(
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
                <FormItem label={localConsts.COLUMN_TaxableFlag}>
                  {getFieldDecorator('taxableFlag', {})(
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
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.COLUMN_Quantity}>
                  {getFieldDecorator('quantity', {})(
                    <Input style={{ width: '290px' }} type="text" />,
                  )}
                </FormItem>
              </Col>
              <Col span={8} offset={2}>
                <FormItem label={localConsts.COLUMN_UnitPrice}>
                  {getFieldDecorator('amount', {})(
                    <Input style={{ width: '290px' }} type="text" />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.COLUMN_InventoryItemId}>
                  {getFieldDecorator('inventoryItemId', {})(
                    <Input style={{ width: '290px' }} type="text" />,
                  )}
                </FormItem>
              </Col>
              <Col span={11} offset={2}>
                <FormItem label={localConsts.COLUMN_ProductFeatureId}>
                  {getFieldDecorator('productFeatureId')(
                    <Input
                      addonAfter={
                        <Icon onClick={this.showDrawer8} type="idcard" />
                      }
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.COLUMN_ProductId}>
                  {getFieldDecorator('productId')(
                    <Input
                      addonAfter={
                        <Icon onClick={this.showDrawer7} type="idcard" />
                      }
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={24}>
                <FormItem label={localConsts.COLUMN_Description}>
                  {getFieldDecorator('description', {})(
                    <Input.TextArea
                      type="text"
                      value={this.state.agreementText}
                      rows={4}
                      style={{ width: '795px' }}
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
                  columns = {tableColumns0}
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
                <FormItem label={localConsts.COLUMN_PartyID}>
                  {getFieldDecorator('Party_ID', {})(
                    <Input
                      style={{ width: '300px' }}
                      value={this.state.partyId}
                      onChange={this.handleChange}
                      addonAfter={
                        <Icon onClick={this.showDrawer4} type="idcard" />
                      }
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={8} offset={2}>
                <FormItem label={localConsts.COLUMN_RoleTypeId}>
                  {getFieldDecorator('RoleTypeId', {})(
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
              <Col span={11}>
                <FormItem label={localConsts.COLUMN_Percentage}>
                  {getFieldDecorator('Percentage', {})(
                    <Input style={{ width: '300px' }} type="text" />,
                  )}
                </FormItem>
              </Col>
              <Col span={8} offset={2}>
                <FormItem label={localConsts.COLUMN_DateTimePerformed}>
                  {getFieldDecorator('DateTimePerformed', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                      onBlur={this.enableSaveButton}
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
                  columns ={tableColumns0}
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
            title={localConsts.LookupProductFeature_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose8}
            visible={this.state.visible8}
          >
           <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.ProductFeatureId}>
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
                <FormItem label={localConsts.ProductFeatureTypeId}>
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
              <FormItem label={localConsts.ProductFeatureCategoryId}>
                  {getFieldDecorator('ProductFeatureCategoryId', {})(
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
              <Col span={11} offset={2}>
              <FormItem label={localConsts.Description}>
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
              <FormItem label={localConsts.UOM}>
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
                <FormItem label={localConsts.NumberSpecifiedfrom}>
                  {getFieldDecorator('To_Date', {})(
                    <InputGroup compact style={{ display: 'flex' }}>
                      <Input
                        onChange={this.onChange}
                        style={{ width: '250px' }}
                      />
                      <Select defaultValue="Less Than">{To_Date_Const}</Select>
                    </InputGroup>,
                  )}
                </FormItem>
              </Col>
              <Col span={11} offset={2}>
                <FormItem label={localConsts.NumberSpecifiedTo}>
                  {getFieldDecorator('To_Date', {})(
                    <InputGroup compact style={{ display: 'flex' }}>
                      <Input
                        onChange={this.onChange}
                        style={{ width: '250px' }}
                      />
                      <Select defaultValue="Less Than">{To_Date_Const}</Select>
                    </InputGroup>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.DefaultAmountfrom}>
                  {getFieldDecorator('DefaultAmountTo', {})(
                    <InputGroup compact style={{ display: 'flex' }}>
                      <Input
                        onChange={this.onChange}
                        style={{ width: '250px' }}
                      />
                      <Select defaultValue="Less Than">{To_Date_Const}</Select>
                    </InputGroup>,
                  )}
                </FormItem>
              </Col>
              <Col span={11} offset={2}>
                <FormItem label={localConsts.DefaultAmountTo}>
                  {getFieldDecorator('DefaultAmountTo', {})(
                    <InputGroup compact style={{ display: 'flex' }}>
                      <Input
                        onChange={this.onChange}
                        style={{ width: '250px' }}
                      />
                      <Select defaultValue="Less Than">{To_Date_Const}</Select>
                    </InputGroup>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.DefaultSequenceNumfrom}>
                  {getFieldDecorator('To_Date', {})(
                    <InputGroup compact style={{ display: 'flex' }}>
                      <Input
                        onChange={this.onChange}
                        style={{ width: '250px' }}
                      />
                      <Select defaultValue="Less Than">{To_Date_Const}</Select>
                    </InputGroup>,
                  )}
                </FormItem>
              </Col>
              <Col span={11} offset={2}>
                <FormItem label={localConsts.DefaultSequenceNumTo}>
                  {getFieldDecorator('To_Date', {})(
                    <InputGroup compact style={{ display: 'flex' }}>
                      <Input
                        onChange={this.onChange}
                        style={{ width: '250px' }}
                      />
                      <Select defaultValue="Less Than">{To_Date_Const}</Select>
                    </InputGroup>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.Abbrev}>
                  {getFieldDecorator('Abbrev', {})(
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
                <FormItem label={localConsts.IdCode}>
                  {getFieldDecorator('IdCode', {})(
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
InvoiceForm.propTypes = {
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
  connect(({ Invoice_AP }) => ({
    dataById: [],
    data: Invoice_AP.reducerSave,
    InvoiceItem: Invoice_AP.reducerSaveInvoiceItem,
    InvoiceRole: Invoice_AP.reducerSaveInvoiceRole,
    InvoiceTerm: Invoice_AP.reducerSaveInvoiceTerm,
  }))(InvoiceForm),
);
