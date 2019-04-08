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
  Radio,
  Select,
  Badge,
  Button,
  Icon,
  Drawer,
  Card,
  Popover,
} from 'antd';
import * as actionConsts from '../../../common/TitlePane/ActionConsts';
import * as localConsts from './PaymentGatewayConfigConsts';
import styles from '../../../common/Styles.less';
import { Link } from 'react-router-dom';
import moment from 'moment';
const FormItem = Form.Item;
const InputGroup = Input.Group;
const RadioGroup = Radio.Group;
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
      value: 1,
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
      disabled: this.props.disabled,
      disabled1: this.props.disabled1,
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
    if (
      this.state.activeKey != '3' &&
      this.state.activeKey != '4' &&
      this.state.activeKey != '5' &&
      this.state.activeKey != '6' &&
      this.state.activeKey != '7' &&
      this.state.activeKey != '8' &&
      this.state.activeKey != '9' &&
      this.state.activeKey != '10' &&
      this.state.activeKey != '11' &&
      this.state.activeKey != '12'
    ) {
      this.setState({
        activeKey: nextProps.activeKey,
        disabled: nextProps.disabled,
        disabled1: nextProps.disabled1,
      });
    }
    if (nextProps.activeKey == '13') {
      this.setState({
        activeKey: nextProps.activeKey,
        disabled: nextProps.disabled,
        disabled1: nextProps.disabled1,
      });
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
    this.setState({ activeKey: key });
  };
  onChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (!errors) {
        const key = this.state.activeKey;
        if (key === '2') {
          var obj = {
            paymentGatewayConfigId: 'AUTHORIZE_NET_CONFIG',
            paymentGatewayConfigTypeId: values.PaymentGatewayConfigTypeId,
            description: values.PaymentGatewayConfigDescription,
          };
          this.props.handleSubmitAction(
            actionConsts.ACTION_TYPE_UPDATE_PAYMENT_GATEWAY_CONFIG,
            obj,
          );
        }
        if (key === '3') {
          var obj = {
            paymentGatewayConfigId: 'CLEARCOMMERCE_CONFIG',
            sourceId: values.sourceId,
            groupId: values.groupId,
            clientId: values.clientId,
            username: values.username,
            pwd: values.pwd,
            userAlias: values.userAlias,
            effectiveAlias: values.effectiveAlias,
            processMode: values.processMode,
            serverURL: values.serverURL,
            enableCVM: values.enableCVM,
          };
          this.props.handleSubmitAction(
            actionConsts.ACTION_TYPE_UPDATE_PAYMENT_GATEWAY_CONFIG_CLEARCOMMERCE_CONFIG,
            obj,
          );
        }
        if (key === '4') {
          var obj = {
            paymentGatewayConfigId: 'AUTHORIZE_NET_CONFIG',
            transactionUrl: values.transactionUrl,
            certificateAlias: values.certificateAlias,
            apiVersion: values.apiVersion,
            delimitedData: values.delimitedData,
            delimiterChar: values.delimiterChar,
            cpVersion: values.cpVersion,
            cpMarketType: values.cpMarketType,
            cpDeviceType: values.cpDeviceType,
            method: values.method,
            emailCustomer: values.emailCustomer,
            emailMerchant: values.emailMerchant,
            testMode: values.testMode,
            relayResponse: values.relayResponse,
            tranKey: values.tranKey,
            userId: values.userId,
            pwd: values.pwd,
            transDescription: values.transDescription,
            // duplicateWindow : values.duplicateWindow,
          };
          this.props.handleSubmitAction(
            actionConsts.ACTION_TYPE_UPDATE_PAYMENT_GATEWAY_AUTHORIZE_NET_CONFIG,
            obj,
          );
        }
        if (key === '5') {
          var obj = {
            paymentGatewayConfigId: 'CYBERSOURCE_CONFIG',
            merchantId: values.merchantId,
            production: values.production,
            apiVersion: values.apiVersion,
            keysDir: values.keysDir,
            keysFile: values.keysFile,
            logEnabled: values.logEnabled,
            logDir: values.logDir,
            logFile: values.logFile,
            method: values.method,
            emailCustomer: values.emailCustomer,
            emailMerchant: values.emailMerchant,
            enableDav: values.enableDav,
            fraudScore: values.fraudScore,
            ignoreAvs: values.ignoreAvs,
            disableBillAvs: values.disableBillAvs,
            avsDeclineCodes: values.avsDeclineCodes,
          };
          this.props.handleSubmitAction(
            actionConsts.ACTION_TYPE_UPDATE_PAYMENT_GATEWAY_CONFIG_CYBERSOURCE_CONFIG,
            obj,
          );
        }
        if (key === '6') {
          var obj = {
            paymentGatewayConfigId: 'IDEAL_CONFIG',
            merchantId: values.merchantId,
            merchantSubId: values.merchantSubId,
            merchantReturnURL: values.merchantReturnURL,
            acquirerURL: values.acquirerURL,
            acquirerTimeout: values.acquirerTimeout,
            privateCert: values.privateCert,
            acquirerKeyStoreFilename: values.acquirerKeyStoreFilename,
            acquirerKeyStorePassword: values.acquirerKeyStorePassword,
            merchantKeyStoreFilename: values.merchantKeyStoreFilename,
            merchantKeyStorePassword: values.merchantKeyStorePassword,
            expirationPeriod: values.expirationPeriod,
          };
          this.props.handleSubmitAction(
            actionConsts.ACTION_TYPE_UPDATE_PAYMENT_GATEWAY_CONFIG_IDEAL_CONFIG,
            obj,
          );
        }
        if (key === '7') {
          var obj = {
            paymentGatewayConfigId: 'EWAY_CONFIG',
            customerId: values.customerId,
            refundPwd: values.refundPwd,
            testMode: values.testMode,
            enableCvn: values.enableCvn,
            enableBeagle: values.enableBeagle,
          };
          this.props.handleSubmitAction(
            actionConsts.ACTION_TYPE_UPDATE_PAYMENT_GATEWAY_CONFIG_EWAY_CONFIG,
            obj,
          );
        }
        if (key === '11') {
          var obj = {
            paymentGatewayConfigId: 'PAYFLOWPRO_CONFIG',
            certsPath: values.certsPath,
            hostAddress: values.hostAddress,
            hostPort: values.hostPort,
            timeout: values.timeout,
            proxyAddress: values.proxyAddress,
            vendor: values.vendor,
            userId: values.userId,
            pwd: values.pwd,
            partner: values.partner,
            checkAvs: values.checkAvs,
            checkCvv2: values.checkCvv2,
            preAuth: values.preAuth,
            enableTransmit: values.enableTransmit,
            logFileName: values.logFileName,
            loggingLevel: values.loggingLevel,
            maxLogFileSize: values.maxLogFileSize,
            stackTraceOn: values.stackTraceOn,
            redirectUrl: values.redirectUrl,
            returnUrl: values.returnUrl,
            cancelReturnUrl: values.cancelReturnUrl,
          };
          this.props.handleSubmitAction(
            actionConsts.ACTION_TYPE_UPDATE_PAYMENT_GATEWAY_CONFIG_PAYFLOWPRO_CONFIG,
            obj,
          );
        }
        if (key === '10') {
          var obj = {
            paymentGatewayConfigId: 'PAYPAL_CONFIG',
            businessEmail: values.businessEmail,
            apiUserName: values.apiUserName,
            apiPassword: values.apiPassword,
            apiSignature: values.apiSignature,
            apiEnvironment: values.apiEnvironment,
            notifyUrl: values.notifyUrl,
            Pwd: values.Pwd,
            cancelReturnUrl: values.cancelReturnUrl,
            imageUrl: values.imageUrl,
          };
          this.props.handleSubmitAction(
            actionConsts.ACTION_TYPE_UPDATE_PAYMENT_GATEWAY_CONFIG_PAYPAL_CONFIG,
            obj,
          );
        }
        if (key === '9') {
          var obj = {
            paymentGatewayConfigId: 'SAGEPAY_CONFIG',
            vendor: values.vendor,
            productionHost: values.productionHost,
            testingHost: values.testingHost,
            protocolVersion: values.protocolVersion,
            sagePayMode: values.sagePayMode,
            authenticationTransType: values.authenticationTransType,
            authenticationUrl: values.authenticationUrl,
            authoriseTransType: values.authoriseTransType,
            authoriseUrl: values.authoriseUrl,
            releaseTransType: values.releaseTransType,
            releaseUrl: values.releaseUrl,
            voidUrl: values.voidUrl,
            refundUrl: values.refundUrl,
          };
          this.props.handleSubmitAction(
            actionConsts.ACTION_TYPE_UPDATE_PAYMENT_GATEWAY_CONFIG_SAGEPAY_CONFIG,
            obj,
          );
        }
        if (key === '8') {
          var obj = {
            paymentGatewayConfigId: 'SECUREPAY_CONFIG',
            merchantId: values.merchantId,
            pwd: values.pwd,
            serverURL: values.serverURL,
            // processTimeout : values.processTimeout,
            enableAmountRound: values.enableAmountRound,
          };
          this.props.handleSubmitAction(
            actionConsts.ACTION_TYPE_UPDATE_PAYMENT_GATEWAY_CONFIG_SECUREPAY_CONFIG,
            obj,
          );
        }
        if (key === '12') {
          var obj = {
            paymentGatewayConfigId: 'WORLDPAY_CONFIG',
            redirectUrl: values.redirectUrl,
            instId: values.instId,
            authMode: values.authMode,
            fixContact: values.fixContact,
            hideContact: values.hideContact,
            hideCurrency: values.hideCurrency,
            langId: values.langId,
            withDelivery: values.withDelivery,
            // testMode : values.testMode,
          };
          this.props.handleSubmitAction(
            actionConsts.ACTION_TYPE_UPDATE_PAYMENT_GATEWAY_WORLDPAY_CONFIG,
            obj,
          );
        }
        if (key === '13') {
          var obj = {
            paymentGatewayConfigTypeId: 'SAGEPAY',
            parentTypeId: values.parentTypeId,
            hasTable: values.hasTable,
            description: values.description,
          };
          this.props.handleSubmitAction(
            actionConsts.ACTION_TYPE_UPDATE_PAYMENT_GATEWAY_CONFIG_TYPE,
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
    const LoggingLevelDropdown = localConsts.LoggingLevelDropdown.map(k => (
      <Option key={k.label} value={k.value}>
        {k.label}
      </Option>
    ));
    const enableCVMDropdown = localConsts.enableCVMDropdown.map(k => (
      <Option key={k.label} value={k.value}>
        {k.label}
      </Option>
    ));
    const AuthorizationModeDropdown = localConsts.AuthorizationModeDropdown.map(
      k => (
        <Option key={k.label} value={k.value}>
          {k.label}
        </Option>
      ),
    );
    const testModeDropdown = localConsts.testModeDropdown.map(k => (
      <Option key={k.label} value={k.value}>
        {k.label}
      </Option>
    ));
    const AuthorisationTypeConst = localConsts.AuthorisationTypeConst.map(k => (
      <Option key={k.label} value={k.value}>
        {k.label}
      </Option>
    ));
    const processModeDropdown = localConsts.processModeDropdown.map(k => (
      <Option key={k.label} value={k.value}>
        {k.label}
      </Option>
    ));
    const ReleaseTypeConst = localConsts.ReleaseTypeConst.map(k => (
      <Option key={k.label} value={k.value}>
        {k.label}
      </Option>
    ));
    const AuthenticationTypeConst = localConsts.AuthenticationTypeConst.map(
      k => (
        <Option key={k.label} value={k.value}>
          {k.label}
        </Option>
      ),
    );
    const ModeTypeConst = localConsts.ModeTypeConst.map(k => (
      <Option key={k.label} value={k.value}>
        {k.label}
      </Option>
    ));
    const TFdropDown = localConsts.TFdropDown.map(k => (
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
          <Tabs onChange={this.callback} size="small" className={styles.tab}>
            <TabPane
              tab={localConsts.TAB1_CAPTION}
              key="1"
              className={styles.tabPaneCustom}
              // disabled={this.state.disabled}
            >
              <Tabs
                activeKey={this.state.activeKey}
                tabPosition="left"
                onChange={this.callback}
              >
                <TabPane
                  tab="Update Payment Gateway Config"
                  key="2"
                  disabled={this.state.disabled1}
                >
                  <Row gutter={20}>
                    <Col span={7}>
                      <FormItem label={localConsts.PaymentGatewayConfigTypeId}>
                        {getFieldDecorator('PaymentGatewayConfigTypeId', {})(
                          <Input onBlur={this.enableSaveButton} />,
                        )}
                      </FormItem>
                    </Col>
                    <Col span={7}>
                      <FormItem
                        label={localConsts.PaymentGatewayConfigDescription}
                      >
                        {getFieldDecorator(
                          'PaymentGatewayConfigDescription',
                          {},
                        )(<Input onBlur={this.enableSaveButton} />)}
                      </FormItem>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane
                  onChange={this.callback}
                  tab="Update Payment Gateway Config Clear Commerce"
                  key="3"
                  disabled={this.state.disabled1}
                >
                  <Card>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.SourceId}>
                          {getFieldDecorator('sourceId', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                              // style={{ width: '295px' }}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.GroupId}>
                          {getFieldDecorator('groupId', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                              // style={{ width: '295px' }}
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.ClientId}>
                          {getFieldDecorator('clientId', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Input
                              // style={{ width: '295px' }}
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.username}>
                          {getFieldDecorator('username', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                            
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.Pwd}>
                          {getFieldDecorator('pwd', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                        
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.userAlias}>
                          {getFieldDecorator('userAlias', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Input
                          
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.effectiveAlias}>
                          {getFieldDecorator('effectiveAlias', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                    
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.processMode}>
                          {getFieldDecorator('processMode', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                        
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {processModeDropdown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.ServerURL}>
                          {getFieldDecorator('serverURL', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Input
                          
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.enableCVM}>
                          {getFieldDecorator('enableCVM ', {
                            initialValue: data.InvoiceType,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                  
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {enableCVMDropdown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                  </Card>
                </TabPane>
                <TabPane
                  onChange={this.callback}
                  tab="Update Payment Gateway Config Authorize Dot Net"
                  key="4"
                  disabled={this.state.disabled1}
                >
                  <Card>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.TransactionURL}>
                          {getFieldDecorator('transactionUrl', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                            
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.CertificateAlias}>
                          {getFieldDecorator('certificateAlias', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                    
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.AuthorizeDotNetAPIVersion}>
                          {getFieldDecorator('apiVersion', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Input
                  
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.DelimitedData}>
                          {getFieldDecorator('delimitedData', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                          
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {TFdropDown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.DelimitedChar}>
                          {getFieldDecorator('delimiterChar', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                    
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.CardPresentAPIVersion}>
                          {getFieldDecorator('cpVersion', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Input
                        
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.CardPresentMarketType}>
                          {getFieldDecorator('cpMarketType', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.CardPresentDeviceType}>
                          {getFieldDecorator('cpDeviceType', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                  
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.MethodonlyCCsupported}>
                          {getFieldDecorator('method', {
                            initialValue: 'CC',
                            enableReinitialize: true,
                          })(
                            <Input
                      
                              disabled
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.EmailtoCustomer}>
                          {getFieldDecorator('emailCustomer', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                  
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {TFdropDown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.EmailtoMerchant}>
                          {getFieldDecorator('emailMerchant', {
                            initialValue: data.InvoiceType,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                              
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {TFdropDown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.TestMode}>
                          {getFieldDecorator('testMode', {
                            initialValue: data.InvoiceType,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                      
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {TFdropDown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.RelayResponse}>
                          {getFieldDecorator('relayResponse', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                  
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {TFdropDown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.TransactionKey}>
                          {getFieldDecorator('tranKey', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                  
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.UserId}>
                          {getFieldDecorator('userId', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Input
  
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.Pwd}>
                          {getFieldDecorator('pwd', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                  
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.TransDescription}>
                          {getFieldDecorator('transDescription', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                        
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.DuplicateWindow}>
                          {getFieldDecorator('duplicateWindow', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Input
                       
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                  </Card>
                </TabPane>
                <TabPane
                  onChange={this.callback}
                  tab="Update Payment Gateway Config CyberSource"
                  key="5"
                  disabled={this.state.disabled1}
                >
                  <Card>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.MerchantId}>
                          {getFieldDecorator('merchantId', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.CyberSourceAPIVersion}>
                          {getFieldDecorator('apiVersion', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.EnableProductionMode}>
                          {getFieldDecorator('production', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                            
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {TFdropDown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.Directory}>
                          {getFieldDecorator('keysDir', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                            
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.keystore}>
                          {getFieldDecorator('keysFile', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={7}>
                        <FormItem label={localConsts.Logtransactioninformation}>
                          {getFieldDecorator('logEnabled', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                             
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {TFdropDown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.Logdirectory}>
                          {getFieldDecorator('logDir', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.LogFileName}>
                          {getFieldDecorator('logFile', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                             
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={7}>
                        <FormItem label={localConsts.Maxlogsize}>
                          {getFieldDecorator('logSize', {
                            initialValue: 'CC',
                            enableReinitialize: true,
                          })(
                            <Input
                            
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.MerchantDescription}>
                          {getFieldDecorator('merchantDescr', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Input
                            
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.MerchantContact}>
                          {getFieldDecorator('merchantContact ', {
                            initialValue: data.InvoiceType,
                            enableReinitialize: true,
                          })(
                            <Input
                            
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={7}>
                        <FormItem label={localConsts.AutoBillInAuthorization}>
                          {getFieldDecorator('autoBill ', {
                            initialValue: data.InvoiceType,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                              
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {TFdropDown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.UseDAVInAuthorization}>
                          {getFieldDecorator('enableDav', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                            
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {enableCVMDropdown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={7}>
                        <FormItem
                          label={localConsts.UseFraudScoringInAuthorization}
                        >
                          {getFieldDecorator('fraudScore', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                             
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {enableCVMDropdown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={7}>
                        <FormItem label={localConsts.IgnoreAVSResults}>
                          {getFieldDecorator('ignoreAvs', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                              
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {TFdropDown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.Pwd}>
                          {getFieldDecorator('username', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={7}>
                        <FormItem label={localConsts.DisableAVSforCapture}>
                          {getFieldDecorator('disableBillAvs', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                             
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {enableCVMDropdown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={7}>
                        <FormItem label={localConsts.AvsDeclineCodes}>
                          {getFieldDecorator('avsDeclineCodes', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Input
                             
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                  </Card>
                </TabPane>
                <TabPane
                  onChange={this.callback}
                  tab="Update Payment Gateway Config iDEAL"
                  key="6"
                  disabled={this.state.disabled1}
                >
                  <Card>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.MerchantId}>
                          {getFieldDecorator('merchantId', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                           
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.MerchantSubId}>
                          {getFieldDecorator('merchantSubId', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                          
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.MerchantReturnURL}>
                          {getFieldDecorator('merchantReturnURL', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Input
                            
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.AcquirerURL}>
                          {getFieldDecorator('acquirerURL', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                              
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.PrivateCert}>
                          {getFieldDecorator('privateCert', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                            
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.AcquirerKeyStoreFilename}>
                          {getFieldDecorator('acquirerKeyStoreFilename', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Input
                            
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.AcquirerKeyStorePassword}>
                          {getFieldDecorator('acquirerKeyStorePassword', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.MerchantKeyStoreFilename}>
                          {getFieldDecorator('merchantKeyStoreFilename', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                            
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.MerchantKeyStorePassword}>
                          {getFieldDecorator('merchantKeyStorePassword', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Input
                             
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.expirationPeriod}>
                          {getFieldDecorator('expirationPeriod', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Input
                            
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                  </Card>
                </TabPane>
                <TabPane
                  onChange={this.callback}
                  tab="Update Payment Gateway Config eWay"
                  key="7"
                  disabled={this.state.disabled1}
                >
                  <Card>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.CustomerId}>
                          {getFieldDecorator('customerId', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.RefundPwd}>
                          {getFieldDecorator('refundPwd', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                            
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.TestMode}>
                          {getFieldDecorator('testMode', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                              
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {enableCVMDropdown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.EnableCvn}>
                          {getFieldDecorator('enableCvn', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                             
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {enableCVMDropdown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.EnableBeagle}>
                          {getFieldDecorator('enableBeagle', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                            
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {enableCVMDropdown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                  </Card>
                </TabPane>
                <TabPane
                  onChange={this.callback}
                  tab="Update Payment Gateway Config SecurePay"
                  key="8"
                  disabled={this.state.disabled1}
                >
                  <Card>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.MerchantId}>
                          {getFieldDecorator('merchantId', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                            
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.Pwd}>
                          {getFieldDecorator('pwd', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                           
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.ServerURL}>
                          {getFieldDecorator('serverURL', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.ProcessTimeout}>
                          {getFieldDecorator('processTimeout', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.EnableAmountRound}>
                          {getFieldDecorator('enableAmountRound', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                             
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {enableCVMDropdown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                  </Card>
                </TabPane>
                <TabPane
                  onChange={this.callback}
                  tab="Update Payment Gateway Config SagePay"
                  key="9"
                  disabled={this.state.disabled1}
                >
                  <Card>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.VendorName}>
                          {getFieldDecorator('vendor', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                            
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.ProductionHost}>
                          {getFieldDecorator('productionHost', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                              
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.TestingHost}>
                          {getFieldDecorator('testingHost', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.Mode}>
                          {getFieldDecorator('sagePayMode', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                             
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {ModeTypeConst}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.ProtocolVersion}>
                          {getFieldDecorator('protocolVersion', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                           
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.AuthenticationType}>
                          {getFieldDecorator('authenticationTransType', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                             
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {AuthenticationTypeConst}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.AuthenticationUrl}>
                          {getFieldDecorator('authenticationUrl', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.AuthorisationType}>
                          {getFieldDecorator('authoriseTransType', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                            
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {AuthorisationTypeConst}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.AuthorisationUrl}>
                          {getFieldDecorator('authoriseUrl', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                            
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.ReleaseType}>
                          {getFieldDecorator('releaseTransType', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                             
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {ReleaseTypeConst}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.ReleaseUrl}>
                          {getFieldDecorator('releaseUrl', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                           
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.VoidUrl}>
                          {getFieldDecorator('voidUrl', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                          
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.RefundUrl}>
                          {getFieldDecorator('refundUrl', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                  </Card>
                </TabPane>
                <TabPane
                  onChange={this.callback}
                  tab="Update Payment Gateway Config PayPal"
                  key="10"
                  disabled={this.state.disabled1}
                >
                  <Card>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.BusinessEmail}>
                          {getFieldDecorator('businessEmail', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                            
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.ApiUserName}>
                          {getFieldDecorator('apiUserName', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                           
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.ApiPassword}>
                          {getFieldDecorator('apiPassword', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                              
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.ApiSignature}>
                          {getFieldDecorator('apiSignature', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.ApiEnvironment}>
                          {getFieldDecorator('apiEnvironment', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.NotifyUrl}>
                          {getFieldDecorator('notifyUrl', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.returnUrl}>
                          {getFieldDecorator('Pwd', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                           
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.CancelReturnURL}>
                          {getFieldDecorator('cancelReturnUrl', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.ImageUrl}>
                          {getFieldDecorator('imageUrl', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.ConfirmTemplate}>
                          {getFieldDecorator('confirmTemplate', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.RedirectUrl}>
                          {getFieldDecorator('redirectUrl', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                            
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.ConfirmUrl}>
                          {getFieldDecorator('confirmUrl', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.ShippingCallbackUrl}>
                          {getFieldDecorator('shippingCallbackUrl', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.RequireConfirmedShipping}>
                          {getFieldDecorator('requireConfirmedShipping', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                            
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {enableCVMDropdown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                  </Card>
                </TabPane>
                <TabPane
                  onChange={this.callback}
                  tab="Update Payment Gateway Config Payflow Pro"
                  key="11"
                  disabled={this.state.disabled1}
                >
                  <Card>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.CertsPath}>
                          {getFieldDecorator('certsPath', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                            
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.HostAddress}>
                          {getFieldDecorator('hostAddress', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.HostPort}>
                          {getFieldDecorator('hostPort', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.Timeout}>
                          {getFieldDecorator('timeout', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.ProxyAddress}>
                          {getFieldDecorator('proxyAddress', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.ProxyPort}>
                          {getFieldDecorator('proxyPort', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                            
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.ProxyLogon}>
                          {getFieldDecorator('proxyLogon', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                            
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.ProxyPassword}>
                          {getFieldDecorator('proxyPassword', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                            
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.Vendor}>
                          {getFieldDecorator('vendor', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.UserId}>
                          {getFieldDecorator('userId', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                            
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.Pwd}>
                          {getFieldDecorator('pwd', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                            
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.Partner}>
                          {getFieldDecorator('partner', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.CheckAvs}>
                          {getFieldDecorator('checkAvs', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                             
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {enableCVMDropdown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.CheckCvv2}>
                          {getFieldDecorator('checkCvv2', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                             
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {enableCVMDropdown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.PreAuth}>
                          {getFieldDecorator('preAuth', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                             
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {enableCVMDropdown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.EnableTransmit}>
                          {getFieldDecorator('enableTransmit', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                             
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {TFdropDown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.LogFileName}>
                          {getFieldDecorator('logFileName', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                            
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.LoggingLevel}>
                          {getFieldDecorator('loggingLevel', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                            
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {LoggingLevelDropdown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.MaxLogFileSize}>
                          {getFieldDecorator('maxLogFileSize', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                        
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.StackTraceOn}>
                          {getFieldDecorator('stackTraceOn', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                             
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {enableCVMDropdown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.RedirectUrl}>
                          {getFieldDecorator('redirectUrl', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                              
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.ReturnUrl}>
                          {getFieldDecorator('returnUrl', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                            
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.CancelReturnURL}>
                          {getFieldDecorator('cancelReturnUrl', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                            
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                  </Card>
                </TabPane>
                <TabPane
                  onChange={this.callback}
                  tab="Update Payment Gateway Config RBS WorldPay"
                  key="12"
                  disabled={this.state.disabled1}
                >
                  <Card>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.RedirectUrl}>
                          {getFieldDecorator('redirectUrl', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.WorldPayinstanceId}>
                          {getFieldDecorator('instId', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                            
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.AuthorizationMode}>
                          {getFieldDecorator('authMode', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                             
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {AuthorizationModeDropdown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.Contactdetailsnoneditable}>
                          {getFieldDecorator('fixContact', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                            
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {enableCVMDropdown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.Contactdetailstobehidden}>
                          {getFieldDecorator('hideContact', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                            
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {enableCVMDropdown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem
                          label={localConsts.Currencydropdowntobehidden}
                        >
                          {getFieldDecorator('hideCurrency', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                            
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {enableCVMDropdown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.ShopperlanguageId}>
                          {getFieldDecorator('langId', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                             
                              onBlur={this.enableSaveButton}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.SuppressLanguageMenu}>
                          {getFieldDecorator('noLanguageMenu', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                              
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {enableCVMDropdown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={7}>
                        <FormItem label={localConsts.DeliveryAddressEditable}>
                          {getFieldDecorator('withDelivery', {
                            initialValue: data.partyIdTo,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                             
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {enableCVMDropdown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: '15px' }} gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.TestMode}>
                          {getFieldDecorator('testMode', {
                            initialValue: data.partyIdFrom,
                            enableReinitialize: true,
                          })(
                            <Select
                              showSearch
                              onBlur={this.enableSaveButton}
                           
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {testModeDropdown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                  </Card>
                </TabPane>
                <TabPane
                  tab="Update Payment Gateway Config Type"
                  key="13"
                  disabled={this.state.disabled}
                >
                  <Row gutter={20}>
                    <Col span={7}>
                      <FormItem
                        label={localConsts.PaymentGatewayConfigTypeDescription}
                      >
                        {getFieldDecorator('description', {
                          initialValue: '',
                          enableReinitialize: true,
                        })(
                          <Input
                           
                            onBlur={this.enableSaveButton}
                          />,
                        )}
                      </FormItem>
                    </Col>
                    <Col span={7}>
                      <FormItem label={localConsts.ParentTypeId}>
                        {getFieldDecorator('parentTypeId', {
                          initialValue: data.InvoiceType,
                          enableReinitialize: true,
                        })(
                          <Select
                            showSearch
                            onBlur={this.enableSaveButton}
                           
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
                    <Col span={7}>
                      <FormItem label={localConsts.HasTable}>
                        {getFieldDecorator('hasTable ', {
                          initialValue: data.InvoiceType,
                          enableReinitialize: true,
                        })(
                          <Select
                            showSearch
                            onBlur={this.enableSaveButton}
                          
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                              option.props.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            {enableCVMDropdown}
                          </Select>,
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                </TabPane>
              </Tabs>
              <div />
            </TabPane>
          </Tabs>
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
  connect(({ Payment_Accounting }) => ({
    dataById: [],
    Payment: Payment_Accounting.reducerSave,
    paymentApp: Payment_Accounting.reducerApplication,
  }))(PaymentForm),
);
