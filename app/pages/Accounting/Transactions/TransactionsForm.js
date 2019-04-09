import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';
import {
  Col,
  Form,
  Input,
  Tabs,
  Checkbox,
  Popconfirm,
  message,
  DatePicker,
  Row,
  Table,
  Upload,
  Select,
  Badge,
  Button,
  Icon,
  Drawer,
  Card,
  Popover,
} from 'antd';
import * as actionConsts from '../../../common/TitlePane/ActionConsts';
import * as commonConsts from '../../../common/commonConsts';
import * as localConsts from './TransactionsConsts';
import styles from '../../../common/Styles.less';
const FormItem = Form.Item;
const { TabPane } = Tabs;
const InputGroup = Input.Group;
const newObject = {
  productId: '',
  partyIdFrom: '',
  partyIdTo: '',
  roleTypeIdFrom: '',
  roleTypeIdTo: '',
  agreementTypeId: '',
  agreementDate: '',
  fromDate: '',
  thruDate: '',
  description: '',
  textData: '',
};
class TransactionsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agreementId: '',
      data: newObject,
      isExistMessage: '',
      commentsData: [],
      enableSaveButtonValue: false,
      currentKey: '2',
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
      visible10: false,
      visible11: false,
      visible12: false,
      visible13: false,
      visible14: false,
      agreementText: '',
      sequenceNum: '',
      fromDate: moment(),
      thruDate: moment(),
      termTypeId: '',
      invoiceItemTypeId: '',
      termValue: '',
      termDays: '',
      textValue: '',
      minQuantity: '',
      maxQuantity: '',
      description: '',
      productId: '',
      price: '',
      partyId: '',
      geoId: 'CH-AG',
      facilityId: 'MyRetailStore',
      workEffortId: '9002',
      agreementItemSeqId: '',
      contentTypeId: '',
      statusId: '',
      agreementContentTypeId: '',
      uploadedFile: '',
      defaultActiveKey: '2',
      key: '2',
      activeKey: '2',
      copyAgreementTerms: 'Y',
      copyAgreementProducts: 'Y',
      copyAgreementParties: 'Y',
      copyAgreementFacilities: 'Y',
      checked: true,
      agreementTerm: [],
      agreementTermUpdate: false,
      agreementItem: [],
      agreementItemUpdate: false,
      agreementWorkEffort: [],
      PRDS_PAY_AUTH: false,
      PRDS_PAY_REAUTH: false,
      PRDS_PAY_RELEASE: false,
      PRDS_PAY_CAPTURE: false,
      disabled: false,
      disabled1: false,
      disabled2: false,
    };
  }
  CopyAgreements = () => {
    var obj = {
      agreementId: this.state.agreementId,
      copyAgreementTerms: this.state.copyAgreementTerms,
      copyAgreementProducts: this.state.copyAgreementProducts,
      copyAgreementParties: this.state.copyAgreementParties,
      copyAgreementFacilities: this.state.copyAgreementFacilities,
    };
    console.log(obj);
    this.props.handleSubmitAction(actionConsts.ACTION_TYPE_COPY_AGREEMENT, obj);
  };
  CheckonChange = checkedValues => {
    console.log('checked = ', checkedValues);
    const len = checkedValues.length;
    console.log(checkedValues[len - 1]);
    // if(checkedValues[len-1] === "Agreement Terms");
    //   this.setState({copyAgreementTerms : 'Y'});
    // if(checkedValues[len-1] === "Products");
    //   this.setState({copyAgreementProducts : 'Y'});
    // if(checkedValues[len-1] === "Party");
    //   this.setState({copyAgreementParties : 'Y'});
    // if(checkedValues[len-1] === "Facilities");
    //   this.setState({copyAgreementFacilities : 'Y'});
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
  handleChange = event => {
    this.setState({
      agreementItemSeqId: event.target.value,
      facilityId: event.target.value,
      geoId: event.target.value,
      partyId: event.target.value,
      agreementText: event.target.value,
      sequenceNum: event.target.value,
      productId: event.target.value,
    });
  };
  roleTypeIdChange = event => {
    this.setState({ roleTypeId: event.target.value });
  };
  handlePrice = event => {
    this.setState({ price: event.target.value });
  };
  handleChange1 = event => {
    this.setState({ termTypeId: event.target.value });
  };
  handleChange2 = event => {
    this.setState({
      invoiceItemTypeId: event.target.value,
    });
  };
  handleChange3 = event => {
    this.setState({
      termValue: event.target.value,
    });
  };
  handleChange4 = event => {
    this.setState({
      termDays: event.target.value,
    });
  };
  handleChange5 = event => {
    this.setState({
      minQuantity: event.target.value,
    });
  };
  handleChange6 = event => {
    this.setState({
      maxQuantity: event.target.value,
    });
  };
  handleChange7 = event => {
    this.setState({
      textValue: event.target.value,
    });
  };
  handleChange8 = event => {
    this.setState({
      description: event.target.value,
    });
  };
  handleWorkEfid = event => {
    this.setState({
      workEffortId: event.target.value,
    });
  };
  handleContentTypeId = event => {
    this.setState({ contentTypeId: event.target.value });
  };
  handleStatusId = event => {
    this.setState({ statusId: event.target.value });
  };
  handleAgreementContentTypeId = event => {
    this.setState({ agreementContentTypeId: event.target.value });
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
  showDrawer14 = () => {
    this.setState({
      visible14: true,
    });
  };
  onClose14 = () => {
    this.setState({
      visible14: false,
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
  showDrawer10 = () => {
    this.setState({
      visible10: true,
    });
  };
  onClose10 = () => {
    this.setState({
      visible10: false,
    });
  };
  showDrawer11 = () => {
    this.setState({
      visible11: true,
    });
  };
  onClose11 = () => {
    this.setState({
      visible11: false,
    });
  };
  showDrawer12 = () => {
    this.setState({
      visible12: true,
    });
  };
  onClose12 = () => {
    this.setState({
      visible12: false,
    });
  };
  showDrawer13 = () => {
    this.setState({
      visible13: true,
    });
  };
  onClose13 = () => {
    this.setState({
      visible13: false,
    });
  };
  componentWillReceiveProps(nextProps) {
    const { currentAction } = this.props;
    console.log(nextProps);
    if (nextProps.currentAction === 'new') {
      this.setState({ disabled: true, disabled1: false });
    }
    if (nextProps.currentAction == 'view') {
      this.setState({ disabled: false, disabled1: true, activeKey: '1' });
    }
    if (nextProps.currentAction === 'close') {
      this.setState({ disabled: true, disabled1: false, activeKey: '2' });
    }
    if (
      currentAction === actionConsts.ACTION_TYPE_EDIT ||
      currentAction === actionConsts.ACTION_TYPE_VIEW
    ) {
      if (nextProps.data) {
        if (nextProps.data.contactAddresses !== null) {
          // eslint-disable-next-line no-return-assign
          nextProps.data.contactAddresses.forEach(
            // eslint-disable-next-line no-param-reassign
            (value, index) => (value.id = index + 1),
          );
        } else {
          // eslint-disable-next-line no-param-reassign
          nextProps.data.contactAddresses = [];
        }
        if (nextProps.dataById.data.contactPersons !== null) {
          nextProps.dataById.data.contactPersons.forEach(
            // eslint-disable-next-line no-param-reassign
            (value, index) => (value.id = index + 1),
          );
        } else {
          // eslint-disable-next-line no-param-reassign
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
    console.log(this.props.currentAction);
    if (nextProps.data !== undefined && nextProps.data !== null) {
      this.setState({
        commentsData: nextProps.data || [],
      });
    }
  }
  componentDidMount() {
    console.log(this.props.currentAction);
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
  handleTransactionType = value => {
    console.log(`selected ${value}`);
    if (value === 'PRDS_PAY_AUTH' || value === 'PRDS_PAY_CREDIT')
      this.setState({ PRDS_PAY_AUTH: true, disabled2: true });
    if (
      value === 'PRDS_PAY_REAUTH' ||
      value === 'PRDS_PAY_AUTH_VERIFY' ||
      value === 'PRDS_PAY_EXTERNAL'
    )
      this.setState({ PRDS_PAY_REAUTH: true, disabled2: true });
    if (
      value === 'PRDS_PAY_RELEASE' ||
      value === 'PRDS_PAY_CAPTURE' ||
      value === 'PRDS_PAY_REFUND'
    )
      this.setState({ PRDS_PAY_RELEASE: true, disabled2: true });
  };
  handleDelete = key => {
    console.log(key.agreementTermId);
    key = key.agreementTermId;
    const dataSource = [...this.state.agreementTerm];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };
  handleSubmit = e => {
    e.preventDefault();
    // e.target.reset();
    this.props.form.validateFields((errors, values) => {
      if (!errors) {
        // console.log('data',values);
        // this.setState({currentKey : this.props.key});
        const key = this.state.key;
        console.log(key);
        console.log(values);
        if (key === '2') {
          var obj = {
            orderPaymentPreferenceId: values.OrderPaymentPreferenceId,
            PaymentMethodType: values.PaymentMethodType,
            ProductStore: values.ProductStore,
            OrderId: values.OrderId,
            // overrideAmount : values.Amount
          };
          this.props.handleSubmitAction(
            actionConsts.ACTION_TYPE_SAVE_AUTH_TRANS,
            obj,
          );
        }
        if (key === '3') {
          var obj = {
            captureAmount: values.Amount,
            orderId: values.OrderId,
          };
          this.props.handleSubmitAction(
            actionConsts.ACTION_TYPE_SAVE_CAP_TRANS,
            obj,
          );
        }
        if (key === '4') {
          var obj = {
            // referenceCode :'',
            orderPaymentPreferenceId: values.orderPaymentPreferenceId,
            // paymentMethodTypeId : values.paymentMethodTypeId,
            // productStoreId : values.productStoreId,
            // transactionType : values.transactionType,
            // companyNameOnCard : values.companyNameOnCard,
            // titleOnCard : values.titleOnCard,
            // firstNameOnCard : values.firstNameOnCard,
            // middleNameOnCard : values.middleNameOnCard,
            // lastNameOnCard : values.lastNameOnCard,
            // suffixOnCard : values.suffixOnCard,
            // cardType : values.cardType,
            // cardNumber : values.cardNumber,
            // cardSecurityCode : '',
            // expMonth : values.expMonth,
            // expYear : values.expYear,
            // infoString : values.infoString,
            // address1 : values.address1,
            // address2 : values.address2,
            // city : values.city,
            // stateProvinceGeoId : values.stateProvinceGeoId,
            // postalCode : values.postalCode,
            // countryGeoId : values.countryGeoId,
            // amount : values.amount,
          };
          console.log(obj);
          this.props.handleSubmitAction(
            actionConsts.ACTION_TYPE_SAVE_CAP_TRANS,
            obj,
          );
        }
        if (key === '1') {
          var obj = {
            orderPaymentPreferenceId: values.OrderPaymentPreferenceId,
            PaymentMethodType: values.PaymentMethodType,
            ProductStore: values.ProductStore,
            OrderId: values.OrderId,
          };
          this.props.handleSubmitAction(
            actionConsts.ACTION_TYPE_SAVE_AUTH_TRANS,
            obj,
          );
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
  FilehandleChange = info => {
    let fileList = info.fileList;
    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);
    // 2. Read from response and show file link
    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });
    // 3. Filter successfully uploaded files according to response from server
    fileList = fileList.filter(file => {
      if (file.response) {
        console.log('true');
        return file.response.status === 'success';
      }
      console.log('false');
      return false;
    });
    this.setState({ fileList });
  };
  callback = key => {
    console.log(key);
    this.setState({ key: key, activeKey: key });
  };
  onChange1 = (date, dateString) => {
    console.log(dateString);
    this.setState({ thruDate: dateString });
  };
  onChange = (date, dateString) => {
    console.log(dateString);
    this.setState({ fromDate: dateString });
  };
  // componentDidMount(){
  //   console.log(this.props.activeKey);
  //   this.setState({activeKey:this.props.activeKey});
  // }
  render() {
    console.log(this.state.agreementTermId);
    const { getFieldDecorator } = this.props.form;
    const { currentAction } = this.props;
    console.log(currentAction);
    const roleTypeIdDropDown = localConsts.roleTypeIdDropDown.map(k => (
      <Option key={k.label} value={k.value}>
        {k.label}
      </Option>
    ));
    const AgreementTypeIdDropDown = localConsts.AgreementTypeIdDropDown.map(
      k => (
        <Option key={k.label} value={k.value}>
          {k.label}
        </Option>
      ),
    );
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
    const props = {
      action: '//jsonplaceholder.typicode.com/posts/',
      onChange: this.FilehandleChange,
      multiple: true,
    };
    const PaymentMethodTypeIdDropDown = localConsts.PaymentMethodTypeIdDropDown.map(
      k => (
        <Option key={k.label} value={k.value}>
          {k.label}
        </Option>
      ),
    );
    const ProductStoreDropDown = localConsts.ProductStoreDropDown.map(k => (
      <Option key={k.label} value={k.value}>
        {k.label}
      </Option>
    ));
    const TransactionTypeDropDown = localConsts.TransactionTypeDropDown.map(
      k => (
        <Option key={k.label} value={k.value}>
          {k.label}
        </Option>
      ),
    );
    const PrefixCardDropDown = localConsts.PrefixCardDropDown.map(k => (
      <Option key={k.label} value={k.value}>
        {k.label}
      </Option>
    ));
    const SuffixonCardDropDown = localConsts.SuffixonCardDropDown.map(k => (
      <Option key={k.label} value={k.value}>
        {k.label}
      </Option>
    ));
    const CardTypeDropDown = localConsts.CardTypeDropDown.map(k => (
      <Option key={k.label} value={k.value}>
        {k.label}
      </Option>
    ));
    const monthDropDown = localConsts.monthDropDown.map(k => (
      <Option key={k.label} value={k.value}>
        {k.label}
      </Option>
    ));
    const yearDropDown = localConsts.yearDropDown.map(k => (
      <Option key={k.label} value={k.value}>
        {k.label}
      </Option>
    ));
    const PaymentMethodTypeDropDown = localConsts.PaymentMethodTypeDropDown.map(
      k => (
        <Option key={k.label} value={k.value}>
          {k.label}
        </Option>
      ),
    );
    const { data, isExistMessage, commentsData } = this.state;
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
        dataIndex: 'Last_naagreementItemUpdateme',
        id: 'Last_name',
      },
      {
        title: `${localConsts.COLUMN_GroupName}`,
        dataIndex: 'Group_Name',
        id: 'Group_Name',
      },
    ];
    const tableColumns1 = [
      {
        title: `${localConsts.COLUMN_ProductID}`,
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.COLUMN_BrandName}`,
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: `${localConsts.COLUMN_InternalName}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_ProductType}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
    ];
    const tableColumns14 = [
      {
        title: 'WorkEffort Id ',
        dataIndex: 'Item_No',
        id: 'Item_No',
      },
      {
        title: 'Work Effort Name ',
        dataIndex: 'Description',
        // width: 750,
      },
      {
        title: 'Work Effort Type Id ',
        dataIndex: 'Total',
        // width: 750,
      },
      {
        title: 'Contact Mech Type Id ',
        // width: 300,
        dataIndex: 'Payment_Id',
      },
      {
        title: ' Marketing Campaign Id ',
        // width: 350,
        dataIndex: 'Amount_Applied',
      },
    ];
    const tableColumns2 = [
      {
        title: `${localConsts.COLUMN_Edit}`,
        width: 300,
        dataIndex: 'agreementItemSeqId',
        id: 'agreementItemSeqId',
        render: (text, data) => {
          console.log(text);
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({ agreementItemUpdate: true });
                this.showDrawer();
                // this.props.toggleView();
              }}
            >
              {text}
            </Button>
          );
        },
      },
      {
        title: `${localConsts.COLUMN_AgreementItemTypeId}`,
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: `${localConsts.COLUMN_Currency}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_AgreementText}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_AgreementImage}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        dataIndex: 'agreementItemSeqId',
        id: 'agreementItemSeqId',
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
                  agreementItemSeqId: data,
                  agreementId: this.state.agreementId,
                };
                console.log(obj);
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_AGREEMENT_ITEM_DELETE,
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
        title: `${localConsts.COLUMN_Edit}`,
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.COLUMN_FromDate}`,
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: `${localConsts.COLUMN_ThroughDate}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_SequenceNum}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_ProductPromoName}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
    ];
    const tableColumns5 = [
      {
        title: `${localConsts.COLUMN_Release}`,
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.COLUMN_price}`,
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: `${localConsts.COLUMN_Theinternalname}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
    ];
    const tableColumns8 = [
      {
        title: `${localConsts.COLUMN_Release}`,
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.COLUMN_Theinternalname}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
    ];
    const tableColumns9 = [
      {
        title: `${localConsts.COLUMN_FacilityName}`,
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.COLUMN_FacilityTypeId}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
    ];
    const tableColumns10 = [
      {
        title: `${localConsts.COLUMN_AgreementItemSeqId}`,
        dataIndex: 'agreementItemSeqId',
        id: 'agreementItemSeqId',
      },
      {
        title: `${localConsts.COLUMN_WorkEffortId}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        dataIndex: 'agreementItemSeqId',
        id: 'agreementItemSeqId',
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
                  agreementId: this.state.agreementId,
                  agreementItemSeqId: this.state.agreementWorkEffort[0]
                    .agreementItemSeqId,
                  workEffortId: this.state.workEffortId,
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_AGREEMENT_WORKEFFORT_DELETE,
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
        title: `${localConsts.COLUMN_PartyID}`,
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.COLUMN_RoleTypeID}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
    ];
    const tableColumns12 = [
      {
        title: `${localConsts.COLUMN_AgreementItemSeqId}`,
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.COLUMN_ContentName}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_AgreementContentTypeId}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_StatusID}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_ContentTypeId}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_FromDate}`,
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
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
    ];
    const tableColumns6 = [
      {
        title: `${localConsts.COLUMN_Edit}`,
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.COLUMN_Name}`,
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
    ];
    const tableColumns7 = [
      {
        title: `${localConsts.COLUMN_Description}`,
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
    ];
    const tableColumns4 = [
      {
        title: `${localConsts.COLUMN_Edit}`,
        dataIndex: 'agreementTermId',
        key: 'agreementTermId',
        width: 100,
        fixed: 'left',
        render: (text, data) => {
          console.log(text);
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({ agreementTermUpdate: true });
                this.showDrawer4();
                // this.props.toggleView();
              }}
            >
              {text}
            </Button>
          );
        },
      },
      {
        title: `${localConsts.COLUMN_TermTypeId}`,
        // width:700,
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: `${localConsts.COLUMN_AgreementItemSeqId}`,
        // width:300,
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.COLUMN_InvoiceItemType}`,
        // width:600,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_FromDate}`,
        // width:600,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_ThroughDate}`,
        // width:600,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_TermValue}`,
        // width:600,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_TermDays}`,
        // width:600,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_TextValue}`,
        // width:600,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_MinQuantity}`,
        // width:600,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_MaxQuantity}`,
        // width:600,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_Description}`,
        // width:600,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        // title:`${localConsts.COLUMN_ACTIONS}`,
        // width:600,
        width: 50,
        fixed: 'right',
        dataIndex: 'agreementTermId',
        id: 'agreementTermId',
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
                  agreementTermId: data,
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_AGREEMENT_DELETE,
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
    console.log(this.props);
    console.log(this.state.agreementItem);
    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit} id={localConsts.FORM_ID}>
          <Tabs
            onChange={this.callback}
            activeKey={this.state.activeKey}
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
              // hidden={currentAction === actionConsts.ACTION_TYPE_VIEW}
              >
                <Row gutter={20} style={{ marginTop: '15px' }}>
                  <Col span={7}>
                    <FormItem label={localConsts.OrderId}>
                      {getFieldDecorator('OrderId', {
                        initialValue: data.partyIdFrom,
                        enableReinitialize: true,
                      })(
                        <Input
                          style={{ width: '295px' }}
                          onBlur={this.enableSaveButton}
                        />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7}>
                    <FormItem label={localConsts.OrderPaymentPreferenceId}>
                      {getFieldDecorator('OrderPaymentPreferenceId', {
                        initialValue: data.partyIdTo,
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
                <Row gutter={20}>
                  <Col span={7}>
                    <FormItem label={localConsts.PaymentMethodType}>
                      {getFieldDecorator('PaymentMethodType', {
                        initialValue: data.roleTypeIdTo,
                        enableReinitialize: true,
                      })(
                        <Select
                          onBlur={this.enableSaveButton}
                          showSearch
                          style={{ width: '295px' }}
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.props.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          {PaymentMethodTypeDropDown}
                        </Select>,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6}>
                    <FormItem label={localConsts.Amount}>
                      {getFieldDecorator('Amount', {
                        initialValue: data.InvoiceDate,
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
              </div>
            </TabPane>
            <TabPane
              tab={localConsts.TAB3_CAPTION}
              key="3"
              className={styles.tabPaneCustom}
              // disabled={this.props.disabled}
              disabled={this.state.disabled1}
            >
              <div
                className={styles.tabPaneCard}
                // hidden={currentAction === actionConsts.ACTION_TYPE_VIEW}
                disabled={this.state.disabled1}
              >
                <Row gutter={20} style={{ marginTop: '15px' }}>
                  <Col span={7}>
                    <FormItem label={localConsts.OrderId}>
                      {getFieldDecorator('OrderId', {
                        initialValue: data.partyIdFrom,
                        enableReinitialize: true,
                      })(
                        <Input
                          style={{ width: '295px' }}
                          onBlur={this.enableSaveButton}
                        />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7}>
                    <FormItem label={localConsts.OrderPaymentPreferenceId}>
                      {getFieldDecorator('OrderPaymentPreferenceId', {
                        initialValue: data.partyIdTo,
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
                <Row gutter={20}>
                  <Col span={7}>
                    <FormItem label={localConsts.PaymentMethodType}>
                      {getFieldDecorator('PaymentMethodType', {
                        initialValue: data.roleTypeIdTo,
                        enableReinitialize: true,
                      })(
                        <Select
                          onBlur={this.enableSaveButton}
                          showSearch
                          style={{ width: '295px' }}
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.props.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          {roleTypeIdDropDown}
                        </Select>,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6}>
                    <FormItem label={localConsts.PaymentType}>
                      {getFieldDecorator('PaymentType', {
                        initialValue: data.roleTypeIdTo,
                        enableReinitialize: true,
                      })(
                        <Select
                          onBlur={this.enableSaveButton}
                          showSearch
                          style={{ width: '295px' }}
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.props.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          {roleTypeIdDropDown}
                        </Select>,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={1}>
                    <FormItem label={localConsts.Amount}>
                      {getFieldDecorator('Amount', {
                        initialValue: data.InvoiceDate,
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
              </div>
            </TabPane>
            <TabPane
              tab={localConsts.TAB4_CAPTION}
              key="4"
              className={styles.tabPaneCustom}
              // disabled={this.props.disabled}
              disabled={this.state.disabled1}
            >
              <div
                className={styles.tabPaneCard}
              // hidden={currentAction === actionConsts.ACTION_TYPE_VIEW}
              >
                <Row gutter={20}>
                  <Col span={7} style={{ marginTop: '15' }}>
                    <FormItem label={localConsts.PaymentMethodType}>
                      {getFieldDecorator('paymentMethodTypeId', {
                        initialValue:
                          localConsts.PaymentMethodTypeIdDropDown[0].label,
                        enableReinitialize: true,
                      })(
                        <Select
                          onBlur={this.enableSaveButton}
                          showSearch
                          disabled={this.state.disabled2}
                          style={{ width: '295px' }}
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.props.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          {PaymentMethodTypeIdDropDown}
                        </Select>,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6}>
                    <FormItem label={localConsts.ProductStore}>
                      {getFieldDecorator('productStoreId', {
                        initialValue: localConsts.ProductStoreDropDown[0].label,
                        enableReinitialize: true,
                      })(
                        <Select
                          onBlur={this.enableSaveButton}
                          showSearch
                          disabled={this.state.disabled2}
                          style={{ width: '295px' }}
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.props.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          {ProductStoreDropDown}
                        </Select>,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={1}>
                    <FormItem label={localConsts.TransactionType}>
                      {getFieldDecorator('transactionType', {
                        initialValue:
                          localConsts.TransactionTypeDropDown[0].label,
                        enableReinitialize: true,
                      })(
                        <Select
                          onBlur={this.enableSaveButton}
                          showSearch
                          disabled={this.state.disabled2}
                          onChange={this.handleTransactionType}
                          style={{ width: '295px' }}
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.props.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          {TransactionTypeDropDown}
                        </Select>,
                      )}
                    </FormItem>
                  </Col>
                </Row>
                {this.state.PRDS_PAY_AUTH && (
                  <div>
                    <Row gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.FirstName_LABEL}>
                          {getFieldDecorator('FirstName', {
                            initialValue: 'THE',
                            enableReinitialize: true,
                          })(<Input style={{ width: '295px' }} />)}
                        </FormItem>
                      </Col>
                      <Col span={6}>
                        <FormItem label={localConsts.COLUMN_LastName}>
                          {getFieldDecorator('LastName', {
                            initialValue: 'ADMINISTRATOR',
                            enableReinitialize: true,
                          })(<Input style={{ width: '295px' }} />)}
                        </FormItem>
                      </Col>
                      <Col span={6}>
                        <FormItem label={localConsts.EMailAddress}>
                          {getFieldDecorator('EMailAddress', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(<Input style={{ width: '295px' }} />)}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.CompanyNameCard}>
                          {getFieldDecorator('companyNameOnCard', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(<Input style={{ width: '295px' }} />)}
                        </FormItem>
                      </Col>
                      <Col span={6}>
                        <FormItem label={localConsts.PrefixCard}>
                          {getFieldDecorator('titleOnCard', {
                            initialValue: 'Select One',
                            enableReinitialize: true,
                          })(
                            <Select
                              onBlur={this.enableSaveButton}
                              showSearch
                              onChange={this.handleTransactionType}
                              style={{ width: '295px' }}
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {PrefixCardDropDown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={6}>
                        <FormItem label={localConsts.FirstNameCard}>
                          {getFieldDecorator('firstNameOnCard', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(<Input style={{ width: '295px' }} />)}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.MiddleNameCard}>
                          {getFieldDecorator('middleNameOnCard', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(<Input style={{ width: '295px' }} />)}
                        </FormItem>
                      </Col>
                      <Col span={6}>
                        <FormItem label={localConsts.LastNameCard}>
                          {getFieldDecorator('lastNameOnCard', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(<Input style={{ width: '295px' }} />)}
                        </FormItem>
                      </Col>
                      <Col span={6}>
                        <FormItem label={localConsts.SuffixonCard}>
                          {getFieldDecorator('suffixOnCard', {
                            initialValue: 'Select One',
                            enableReinitialize: true,
                          })(
                            <Select
                              onBlur={this.enableSaveButton}
                              showSearch
                              onChange={this.handleTransactionType}
                              style={{ width: '295px' }}
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {SuffixonCardDropDown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.CardType}>
                          {getFieldDecorator('cardType', {
                            initialValue: localConsts.CardTypeDropDown[0].label,
                            enableReinitialize: true,
                          })(
                            <Select
                              onBlur={this.enableSaveButton}
                              showSearch
                              onChange={this.handleTransactionType}
                              style={{ width: '295px' }}
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {CardTypeDropDown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={6}>
                        <FormItem label={localConsts.CardNumber}>
                          {getFieldDecorator('cardNumber', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(<Input style={{ width: '295px' }} />)}
                        </FormItem>
                      </Col>
                      <Col span={6}>
                        <FormItem label={localConsts.ExpirationDate}>
                          {getFieldDecorator('expMonth', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <InputGroup compact>
                              <Select
                                style={{ width: '147px' }}
                                defaultValue="12"
                              >
                                {monthDropDown}
                              </Select>
                              <Select
                                style={{ width: '147px' }}
                                defaultValue="2020"
                              >
                                {yearDropDown}
                              </Select>
                            </InputGroup>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.Description_LABEL}>
                          {getFieldDecorator('infoString', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(<Input style={{ width: '295px' }} />)}
                        </FormItem>
                      </Col>
                      <Col span={6}>
                        <FormItem label={localConsts.FirstName_LABEL}>
                          {getFieldDecorator('FirstName', {
                            initialValue: 'THE',
                            enableReinitialize: true,
                          })(<Input style={{ width: '295px' }} />)}
                        </FormItem>
                      </Col>
                      <Col span={6}>
                        <FormItem label={localConsts.COLUMN_LastName}>
                          {getFieldDecorator('ProductStore', {
                            initialValue: 'ADMINISTRATOR',
                            enableReinitialize: true,
                          })(<Input style={{ width: '295px' }} />)}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.BillToAddress1}>
                          {getFieldDecorator('address1', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(<Input style={{ width: '295px' }} />)}
                        </FormItem>
                      </Col>
                      <Col span={6}>
                        <FormItem label={localConsts.BillToAddress2}>
                          {getFieldDecorator('address2', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(<Input style={{ width: '295px' }} />)}
                        </FormItem>
                      </Col>
                      <Col span={6}>
                        <FormItem label={localConsts.City}>
                          {getFieldDecorator('city', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(<Input style={{ width: '295px' }} />)}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.State_Province}>
                          {getFieldDecorator('stateProvinceGeoId', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Select
                              onBlur={this.enableSaveButton}
                              showSearch
                              onChange={this.handleTransactionType}
                              style={{ width: '295px' }}
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {CardTypeDropDown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={6}>
                        <FormItem label={localConsts.Zip_PostalCode}>
                          {getFieldDecorator('postalCode', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(<Input style={{ width: '295px' }} />)}
                        </FormItem>
                      </Col>
                      <Col span={6}>
                        <FormItem label={localConsts.Country}>
                          {getFieldDecorator('countryGeoId', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Select
                              onBlur={this.enableSaveButton}
                              showSearch
                              onChange={this.handleTransactionType}
                              style={{ width: '295px' }}
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.props.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {CardTypeDropDown}
                            </Select>,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                    <Row gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.COLUMN_Amount}>
                          {getFieldDecorator('amount', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(<Input style={{ width: '295px' }} />)}
                        </FormItem>
                      </Col>
                    </Row>
                  </div>
                )}
                {this.state.PRDS_PAY_REAUTH && (
                  <div style={{ textAlign: 'center' }}>
                    This transaction type is not yet supported
                  </div>
                )}
                {this.state.PRDS_PAY_RELEASE && (
                  <div>
                    <Row gutter={20}>
                      <Col span={7}>
                        <FormItem label={localConsts.ReferenceNumber_LABEL}>
                          {getFieldDecorator('ReferenceNumber', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                              style={{ width: '295px' }}
                            />,
                          )}
                        </FormItem>
                      </Col>
                      <Col span={6}>
                        <FormItem label={localConsts.OrderPaymentPreferenceId}>
                          {getFieldDecorator('orderPaymentPreferenceId', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(<Input style={{ width: '295px' }} />)}
                        </FormItem>
                      </Col>
                      <Col span={6}>
                        <FormItem label={localConsts.COLUMN_Amount}>
                          {getFieldDecorator('amount', {
                            initialValue: '',
                            enableReinitialize: true,
                          })(
                            <Input
                              onBlur={this.enableSaveButton}
                              style={{ width: '295px' }}
                            />,
                          )}
                        </FormItem>
                      </Col>
                    </Row>
                  </div>
                )}
              </div>
            </TabPane>
            <TabPane
              tab={localConsts.TAB1_CAPTION}
              key="1"
              className={styles.tabPaneCustom}
              disabled={this.state.disabled}
            >
              <Card>
                <Row gutter={16}>
                  <Col span={6}>
                    <div>{localConsts.OrderId}</div>
                    <p style={{ color: '#3E3E3E' }} />
                  </Col>
                  <Col span={6}>
                    <div>{localConsts.OrderPaymentPreferenceId}</div>
                    <p style={{ color: '#3E3E3E' }}>9001</p>
                  </Col>
                  <Col span={6}>
                    <div>{localConsts.PaymentGatewayResponseId}</div>
                    <p style={{ color: '#3E3E3E' }}>9001</p>
                  </Col>
                  <Col span={6}>
                    <div>{localConsts.PaymenServiceTypeEnumId}</div>
                    <p style={{ color: '#3E3E3E' }} />
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={6}>
                    <div>{localConsts.PaymentMethodType}</div>
                    <p style={{ color: '#3E3E3E' }} />
                  </Col>
                  <Col span={6}>
                    <div>{localConsts.PaymentMethodId}</div>
                    <p style={{ color: '#3E3E3E' }} />
                  </Col>
                  <Col span={6}>
                    <div>{localConsts.TransCodeEnumId}</div>
                    <p style={{ color: '#3E3E3E' }} />
                  </Col>
                  <Col span={6}>
                    <div>{localConsts.Amount}</div>
                    <p style={{ color: '#3E3E3E' }} />
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={6}>
                    <div>{localConsts.Currency_LABEL}</div>
                    <p style={{ color: '#3E3E3E' }} />
                  </Col>
                  <Col span={6}>
                    <div>{localConsts.ReferenceNum}</div>
                    <p style={{ color: '#3E3E3E' }} />
                  </Col>
                  <Col span={6}>
                    <div>{localConsts.AltReference}</div>
                    <p style={{ color: '#3E3E3E' }} />
                  </Col>
                  <Col span={6}>
                    <div>{localConsts.SubReference}</div>
                    <p style={{ color: '#3E3E3E' }} />
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={6}>
                    <div>{localConsts.GatewayCode}</div>
                    <p style={{ color: '#3E3E3E' }} />
                  </Col>
                  <Col span={6}>
                    <div>{localConsts.GatewayFlag}</div>
                    <p style={{ color: '#3E3E3E' }} />
                  </Col>
                  <Col span={6}>
                    <div>{localConsts.GatewayAvsResult}</div>
                    <p style={{ color: '#3E3E3E' }} />
                  </Col>
                  <Col span={6}>
                    <div>{localConsts.GatewayCvResult}</div>
                    <p style={{ color: '#3E3E3E' }} />
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={6}>
                    <div>{localConsts.GatewayMessage}</div>
                    <p style={{ color: '#3E3E3E' }} />
                  </Col>
                  <Col span={6}>
                    <div>{localConsts.TransactionDate}</div>
                    <p style={{ color: '#3E3E3E' }} />
                  </Col>
                  <Col span={6}>
                    <div>{localConsts.ResultDeclined}</div>
                    <p style={{ color: '#3E3E3E' }} />
                  </Col>
                  <Col span={6}>
                    <div>{localConsts.ResultNsf}</div>
                    <p style={{ color: '#3E3E3E' }} />
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={6}>
                    <div>{localConsts.ResultBadExpire}</div>
                    <p style={{ color: '#3E3E3E' }} />
                  </Col>
                  <Col span={6}>
                    <div>{localConsts.ResultBadCardNumber}</div>
                    <p style={{ color: '#3E3E3E' }} />
                  </Col>
                </Row>
              </Card>
            </TabPane>
          </Tabs>
          <Drawer
            title={localConsts.PartybyName_title}
            width="709px"
            // placement="right"
            closable={true}
            onClose={this.onClose2}
            visible={this.state.visible2}
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
                  columns={tableColumns0}
                  loading={this.state.loading}
                  // dataSource={this.state.data}
                  size="small"
                  // bordered={borderedValue}
                  // showHeader={showHeaderValue}
                  // scroll={scrollValue}
                  // expandedRowRender={expandableValue}
                  // pagination={paginationProps}
                  onChange={this.handleStandardTableChange}
                />
              </div>
            </Row>
          </Drawer>
          <Drawer // work here
            title={localConsts.PartybyName_title}
            width="709px"
            // placement="right"
            closable={true}
            onClose={this.onClose13}
            visible={this.state.visible13}
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
                  columns={tableColumns0}
                  loading={this.state.loading}
                  // dataSource={this.state.data}
                  size="small"
                  // bordered={borderedValue}
                  // showHeader={showHeaderValue}
                  // scroll={scrollValue}
                  // expandedRowRender={expandableValue}
                  // pagination={paginationProps}
                  onChange={this.handleStandardTableChange}
                />
              </div>
            </Row>
          </Drawer>
          <Drawer
            title={localConsts.LookupFacility_title}
            width="709px"
            // placement="right"
            closable={true}
            onClose={this.onClose9}
            visible={this.state.visible9}
          >
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.FacilityId_LABEL}>
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
              <Col span={11} offset={2}>
                <FormItem label={localConsts.FacilityName_LABEL}>
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
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.ParentFacilityId_LABEL}>
                  {getFieldDecorator('First_Name', {})(
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
                <FormItem label={localConsts.FacilityTypeId_LABEL}>
                  {getFieldDecorator('Group_Name', {})(
                    <Select
                      showSearch
                      style={{ width: '295px' }}
                      placeholder={localConsts.InvoiceType_PLACEHOLDER}
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
                marginTop: '14px',
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
                  columns={tableColumns9}
                  loading={this.state.loading}
                  // dataSource={this.state.data}
                  size="small"
                  // bordered={borderedValue}
                  // showHeader={showHeaderValue}
                  // scroll={scrollValue}
                  // expandedRowRender={expandableValue}
                  // pagination={paginationProps}
                  onChange={this.handleStandardTableChange}
                />
              </div>
            </Row>
          </Drawer>
          <Drawer
            title={localConsts.NewAgreementWorkEffort_title}
            width="709px"
            // placement="right"
            closable={true}
            onClose={this.onClose10}
            visible={this.state.visible10}
          >
            <Row gutter={20}>
              <Col span={22}>
                <FormItem label={localConsts.WorkEffortId_LABEL}>
                  {getFieldDecorator('workEffortId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                      style={{ width: '595px' }}
                      value={this.state.workEffortId}
                      onChange={this.handleWorkEfid}
                      addonAfter={
                        <Icon onClick={this.showDrawer14} type="idcard" />
                      }
                    />, // check drawer
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.AgreementItemSeqId_LABEL}>
                  {getFieldDecorator('agreementItemSeqId', {})(
                    <Select
                      showSearch
                      value={this.state.agreementItemSeqId}
                      onChange={this.handleChange}
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
            <Row
              style={{
                marginTop: '24px',
                borderTop: '1px dashed #E3E7F1',
                height: '62px',
                borderBottom: '1px dashed #E3E7F1',
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
            title={localConsts.AgreementRoles_title}
            width="709px"
            // placement="right"
            closable={true}
            onClose={this.onClose11}
            visible={this.state.visible11}
          >
            <Row gutter={20}>
              <Col span={22}>
                <FormItem label={localConsts.PartyID_LABEL}>
                  {getFieldDecorator('partyId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                      style={{ width: '595px' }}
                      value={this.state.partyId}
                      onChange={this.handleChange}
                      addonAfter={
                        <Icon onClick={this.showDrawer13} type="idcard" />
                      }
                    />, // check drawer
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.RoleTypeID_LABEL}>
                  {getFieldDecorator('roleTypeId', {})(
                    <Select
                      showSearch
                      value={this.state.roleTypeId}
                      onChange={this.roleTypeIdChange}
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
            <Row
              style={{
                marginTop: '24px',
                borderTop: '1px dashed #E3E7F1',
                height: '62px',
                borderBottom: '1px dashed #E3E7F1',
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
            title={localConsts.NewProduct_title}
            width="709px"
            // placement="right"
            closable={true}
            onClose={this.onClose5}
            visible={this.state.visible5}
          >
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.ProductId_LABEL}>
                  {getFieldDecorator('productId', {
                    initialValue: data.InvoiceDate,
                    enableReinitialize: true,
                  })(
                    <Input
                      style={{ width: '295px' }}
                      value={this.state.productId}
                      onChange={this.handleChange}
                      name="BillingAccountID"
                      addonAfter={
                        <Icon onClick={this.showDrawer1} type="idcard" />
                      }
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={8} offset={2}>
                <FormItem label={localConsts.Price_LABEL}>
                  {getFieldDecorator('price', {})(
                    <Input
                      value={this.state.price}
                      onChange={this.handlePrice}
                      style={{ width: '300px' }}
                      type="text"
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row
              style={{
                borderTop: '1px dashed #E3E7F1',
                height: '62px',
                marginTop: '14px',
              }}
            >
              <Col span={2} offset={21}>
                <Button
                  className="button"
                  onClick={this.handleSubmit}
                  style={{ marginTop: '14px' }}
                  type="primary"
                >
                  Save
                </Button>
              </Col>
            </Row>
          </Drawer>
          <Drawer
            title={localConsts.AmendmentofthePartytotheAgreement_title}
            width="709px"
            // placement="right"
            closable={true}
            onClose={this.onClose6}
            visible={this.state.visible6}
          >
            <Row gutter={20}>
              <Col span={22}>
                <FormItem label={localConsts.PartyID_LABEL}>
                  {getFieldDecorator('partyId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                      style={{ width: '595px' }}
                      value={this.state.partyId}
                      onChange={this.handleChange}
                      addonAfter={
                        <Icon onClick={this.showDrawer2} type="idcard" />
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
            title={localConsts.NewAgreementItemFacility_title}
            width="709px"
            // placement="right"
            closable={true}
            onClose={this.onClose8}
            visible={this.state.visible8}
          >
            <Row gutter={20}>
              <Col span={22}>
                <FormItem label={localConsts.FacilityId_LABEL}>
                  {getFieldDecorator('facilityId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                      style={{ width: '595px' }}
                      value={this.state.facilityId}
                      onChange={this.handleChange}
                      addonAfter={
                        <Icon onClick={this.showDrawer9} type="idcard" />
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
            title={localConsts.AgreementGeographicalApplic_title}
            width="709px"
            // placement="right"
            closable={true}
            onClose={this.onClose7}
            visible={this.state.visible7}
          >
            <Row gutter={20}>
              <Col span={22}>
                <FormItem label={localConsts.GeoId_LABEL}>
                  {getFieldDecorator('geoId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Select
                      showSearch
                      style={{ width: '595px' }}
                      value={this.state.geoId}
                      onChange={this.handleChange}
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
            title={localConsts.NewAgreementItem_title}
            width="709px"
            // placement="right"
            closable={true}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.AgreementItemTypeId_LABEL}>
                  {getFieldDecorator('agreementItemTypeId', {})(
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
                <FormItem label={localConsts.Currency_LABEL}>
                  {getFieldDecorator('currencyUomId', {})(
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
              <Col span={24}>
                <FormItem label={localConsts.AgreementText_LABEL}>
                  {getFieldDecorator('agreementText', {})(
                    <Input.TextArea
                      type="text"
                      value={this.state.agreementText}
                      onChange={this.handleChange}
                      rows={4}
                      style={{ width: '795px' }}
                    // placeholder={localConsts.RecurrenceInfoId_PLACEHOLDER}
                    // hidden={currentAction !== actionConsts.ACTION_TYPE_NEW}
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={24}>
                <FormItem label={localConsts.AgreementImage_LABEL}>
                  {getFieldDecorator('agreementImage', {})(
                    <Upload {...props}>
                      <Button>
                        <Icon type="upload" /> Upload
                      </Button>
                    </Upload>,
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
            title={localConsts.AddAgreementContent_LABEL}
            width="709px"
            // placement="right"
            closable={true}
            onClose={this.onClose12}
            visible={this.state.visible12}
          >
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.AgreementItemSeqId_LABEL}>
                  {getFieldDecorator('agreementItemSeqId', {})(
                    <Select
                      showSearch
                      value={this.state.agreementItemSeqId}
                      onChange={this.handleChange}
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
                <FormItem label={localConsts.AgreementContentTypeId_LABEL}>
                  {getFieldDecorator('agreementContentTypeId', {})(
                    <Select
                      showSearch
                      value={this.state.agreementContentTypeId}
                      onChange={this.handleAgreementContentTypeId}
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
                <FormItem label={localConsts.StatusID_LABEL}>
                  {getFieldDecorator('statusId', {})(
                    <Select
                      showSearch
                      value={this.state.statusId}
                      onchange={this.handleStatusId}
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
                <FormItem label={localConsts.ContentTypeId_LABEL}>
                  {getFieldDecorator('contentTypeId', {})(
                    <Select
                      showSearch
                      value={this.state.contentTypeId}
                      onchange={this.handleContentTypeId}
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
              <Col span={6}>
                <FormItem label={localConsts.FromDate_LABEL}>
                  {getFieldDecorator('fromDate', {
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
              <Col span={6} offset={7}>
                <FormItem label={localConsts.ThroughDate_LABEL}>
                  {getFieldDecorator('thruDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                      onBlur={this.enableSaveButton}
                      style={{ width: '295px' }}
                      onChange={this.onChange1}
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={24}>
                <FormItem label={localConsts.File_LABEL}>
                  {getFieldDecorator('uploadedFile', {})(
                    <Upload {...props}>
                      <Button>
                        <Icon type="upload" /> Upload
                      </Button>
                    </Upload>,
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
            title={localConsts.NewTerms_title}
            width="709px"
            // placement="right"
            closable={true}
            onClose={this.onClose4}
            visible={this.state.visible4}
          >
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.TermTypeId_LABEL}>
                  {getFieldDecorator('termTypeId', {})(
                    <Select
                      showSearch
                      style={{ width: '295px' }}
                      value={this.state.termTypeId}
                      onChange={this.handleChange1}
                      // placeholder={localConsts.InvoiceType_PLACEHOLDER}
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
                <FormItem label={localConsts.InvoiceItemType_LABEL}>
                  {getFieldDecorator('invoiceItemTypeId', {})(
                    <Select
                      showSearch
                      style={{ width: '295px' }}
                      value={this.state.invoiceItemTypeId}
                      onChange={this.handleChange2}
                      // placeholder={localConsts.InvoiceType_PLACEHOLDER}
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
              <Col span={6}>
                <FormItem label={localConsts.FromDate_LABEL}>
                  {getFieldDecorator('fromDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                      onChange={this.onChange}
                      style={{ width: '295px' }}
                      onChange={this.onChange}
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={6} offset={7}>
                <FormItem label={localConsts.ThroughDate_LABEL}>
                  {getFieldDecorator('thruDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                      onChange={this.onChange1}
                      style={{ width: '295px' }}
                      onChange={this.onChange}
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.TermValue_LABEL}>
                  {getFieldDecorator('termValue', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                      type="text"
                      rows={4}
                      style={{ width: '295px' }}
                      value={this.state.termValue}
                      onChange={this.handleChange3}
                    // placeholder={localConsts.RecurrenceInfoId_PLACEHOLDER}
                    // hidden={currentAction !== actionConsts.ACTION_TYPE_NEW}
                    // onBlur={this.checkIsExists}
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={6} offset={2}>
                <FormItem label={localConsts.TermDays_LABEL}>
                  {getFieldDecorator('termDays', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                      type="text"
                      value={this.state.termDays}
                      onChange={this.handleChange4}
                      rows={4}
                      style={{ width: '295px' }}
                    // placeholder={localConsts.RecurrenceInfoId_PLACEHOLDER}
                    // hidden={currentAction !== actionConsts.ACTION_TYPE_NEW}
                    // onBlur={this.checkIsExists}
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.MinQuantity_LABEL}>
                  {getFieldDecorator('minQuantity', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                      value={this.state.minQuantity}
                      onChange={this.handleChange5}
                      style={{ width: '295px' }}
                      min={1}
                      max={10}
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={6} offset={2}>
                <FormItem label={localConsts.MaxQuantity_LABEL}>
                  {getFieldDecorator('maxQuantity', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                      value={this.state.maxQuantity}
                      onChange={this.handleChange6}
                      style={{ width: '295px' }}
                      min={1}
                      max={10}
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={24}>
                <FormItem label={localConsts.TextValue_LABEL}>
                  {getFieldDecorator('textValue', {})(
                    <Input.TextArea
                      type="text"
                      value={this.state.textValue}
                      onChange={this.handleChange7}
                      rows={4}
                      style={{ width: '795px' }}
                    // placeholder={localConsts.RecurrenceInfoId_PLACEHOLDER}
                    // hidden={currentAction !== actionConsts.ACTION_TYPE_NEW}
                    // onBlur={this.checkIsExists}
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={24}>
                <FormItem label={localConsts.Description_LABEL}>
                  {getFieldDecorator('description', {})(
                    <Input.TextArea
                      type="text"
                      value={this.state.description}
                      onChange={this.handleChange8}
                      rows={4}
                      style={{ width: '795px' }}
                    // placeholder={localConsts.RecurrenceInfoId_PLACEHOLDER}
                    // hidden={currentAction !== actionConsts.ACTION_TYPE_NEW}
                    // onBlur={this.checkIsExists}
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
            title={localConsts.NewPromotion_title}
            width="709px"
            // placement="right"
            closable={true}
            onClose={this.onClose3}
            visible={this.state.visible3}
          >
            <Row gutter={20}>
              <Col span={21}>
                <FormItem label={localConsts.ProductPromoId_LABEL}>
                  {getFieldDecorator('productPromoId', {})(
                    <Select
                      showSearch
                      style={{ width: '665px' }}
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
            <Row>
              <Col span={6}>
                <FormItem label={localConsts.FromDate_LABEL}>
                  {getFieldDecorator('fromDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                      onChange={this.onChange}
                      style={{ width: '295px' }}
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={6} offset={7}>
                <FormItem label={localConsts.ThroughDate_LABEL}>
                  {getFieldDecorator('thruDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                      onChange={this.onChange1}
                      style={{ width: '295px' }}
                      style={{ width: '295px' }}
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={6}>
                <FormItem label={localConsts.SequenceNum_LABEL}>
                  {getFieldDecorator('sequenceNum', {})(
                    <Input
                      type="text"
                      value={this.state.sequenceNum}
                      onChange={this.handleChange}
                      style={{ width: '295px' }}
                    // placeholder={localConsts.RecurrenceInfoId_PLACEHOLDER}
                    // hidden={currentAction !== actionConsts.ACTION_TYPE_NEW}
                    // onBlur={this.checkIsExists}
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
            title={localConsts.LookupProduct_title}
            width="709px"
            // placement="right"
            closable={true}
            onClose={this.onClose1}
            visible={this.state.visible1}
          >
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.ProductId_LABEL}>
                  {getFieldDecorator('ProductId', {})(
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
                      {InvoiceTypeConst}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <FormItem label={localConsts.PrimaryCategory_LABEL}>
                  {getFieldDecorator('PrimaryCategory', {})(
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
                  // rowKey="id"
                  // title={this.tableHeader}
                  columns={tableColumns1}
                  // loading={this.state.loading}
                  // dataSource={this.state.data}
                  size="small"
                  // bordered={borderedValue}
                  // showHeader={showHeaderValue}
                  // scroll={scrollValue}
                  // expandedRowRender={expandableValue}
                  // pagination={paginationProps}
                  onChange={this.handleStandardTableChange}
                />
              </div>
            </Row>
          </Drawer>
          <Drawer
            title={localConsts.LookupWorkEffortbyName_title}
            width="709px"
            // placement="right"
            closable={true}
            onClose={this.onClose14}
            visible={this.state.visible14}
          >
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.WorkEffortId_LABEL}>
                  {getFieldDecorator('WorkEffortId', {})(
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
                <FormItem label={localConsts.WorkEffortTypeId}>
                  {getFieldDecorator('WorkEffortTypeId', {})(
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
                      {InvoiceTypeConst}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.Status_LABEL}>
                  {getFieldDecorator('Status', {})(
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
                      {InvoiceTypeConst}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.LastStatusUpdateFrom_LABEL}>
                  {getFieldDecorator('To_Date', {})(
                    <InputGroup compact style={{ display: 'flex' }}>
                      <DatePicker
                        onChange={this.onChange}
                        style={{ width: '250px' }}
                      />
                      <Select defaultValue="Less Than">{To_Date_Const}</Select>
                    </InputGroup>,
                  )}
                </FormItem>
              </Col>
              <Col span={11} offset={2}>
                <FormItem label={localConsts.LastStatusUpdateTo_LABEL}>
                  {getFieldDecorator('To_Date', {})(
                    <InputGroup compact style={{ display: 'flex' }}>
                      <DatePicker
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
                <FormItem label={localConsts.WorkEffortPurposeTypeId}>
                  {getFieldDecorator('WorkEffortId', {})(
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
                      {InvoiceTypeConst}
                    </Select>,
                  )}
                </FormItem>
              </Col>
              <Col span={11} offset={2}>
                <FormItem label={localConsts.WorkEffortParentId}>
                  {getFieldDecorator('WorkEffortTypeId', {})(
                    <Input
                      style={{ width: '295px' }}
                      onBlur={this.enableSaveButton}
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.Scope_LABEL}>
                  {getFieldDecorator('Scope', {})(
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
                      {InvoiceTypeConst}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.PriorityFrom_LABEL}>
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
                <FormItem label={localConsts.PriorityTo_LABEL}>
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
                <FormItem label={localConsts.PercentCompleteFrom_LABEL}>
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
                <FormItem label={localConsts.PercentCompleteTo_LABEL}>
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
                <FormItem label={localConsts.WorkEffortName_LABEL}>
                  {getFieldDecorator('WorkEffortId', {})(
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
                <FormItem label={localConsts.ShowAsEnumId}>
                  {getFieldDecorator('ShowAsEnumId', {})(
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
                <FormItem label={localConsts.SendNotificationEmail_LABEL}>
                  {getFieldDecorator('WorkEffortId', {})(
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
              <Col span={24}>
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
              <Col span={24}>
                <FormItem label={localConsts.LocationDesc_LABEL}>
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
                <FormItem label={localConsts.EstimatedStartDateFrom}>
                  {getFieldDecorator('To_Date', {})(
                    <InputGroup compact style={{ display: 'flex' }}>
                      <DatePicker
                        onChange={this.onChange}
                        style={{ width: '250px' }}
                      />
                      <Select defaultValue="Less Than">{To_Date_Const}</Select>
                    </InputGroup>,
                  )}
                </FormItem>
              </Col>
              <Col span={11} offset={2}>
                <FormItem label={localConsts.EstimatedStartDateTo}>
                  {getFieldDecorator('To_Date', {})(
                    <InputGroup compact style={{ display: 'flex' }}>
                      <DatePicker
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
                <FormItem label={localConsts.EstimatedCompletionDateFrom}>
                  {getFieldDecorator('To_Date', {})(
                    <InputGroup compact style={{ display: 'flex' }}>
                      <DatePicker
                        onChange={this.onChange}
                        style={{ width: '250px' }}
                      />
                      <Select defaultValue="Less Than">{To_Date_Const}</Select>
                    </InputGroup>,
                  )}
                </FormItem>
              </Col>
              <Col span={11} offset={2}>
                <FormItem label={localConsts.EstimatedCompletionDateTo}>
                  {getFieldDecorator('To_Date', {})(
                    <InputGroup compact style={{ display: 'flex' }}>
                      <DatePicker
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
                <FormItem label={localConsts.ActualStartDateFrom}>
                  {getFieldDecorator('To_Date', {})(
                    <InputGroup compact style={{ display: 'flex' }}>
                      <DatePicker
                        onChange={this.onChange}
                        style={{ width: '250px' }}
                      />
                      <Select defaultValue="Less Than">{To_Date_Const}</Select>
                    </InputGroup>,
                  )}
                </FormItem>
              </Col>
              <Col span={11} offset={2}>
                <FormItem label={localConsts.ActualStartDateTo}>
                  {getFieldDecorator('To_Date', {})(
                    <InputGroup compact style={{ display: 'flex' }}>
                      <DatePicker
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
                <FormItem label={localConsts.ActualCompletionDateFrom}>
                  {getFieldDecorator('To_Date', {})(
                    <InputGroup compact style={{ display: 'flex' }}>
                      <DatePicker
                        onChange={this.onChange}
                        style={{ width: '250px' }}
                      />
                      <Select defaultValue="Less Than">{To_Date_Const}</Select>
                    </InputGroup>,
                  )}
                </FormItem>
              </Col>
              <Col span={11} offset={2}>
                <FormItem label={localConsts.ActualCompletionDateTo}>
                  {getFieldDecorator('To_Date', {})(
                    <InputGroup compact style={{ display: 'flex' }}>
                      <DatePicker
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
                <FormItem label={localConsts.EstimatedMilliSecondsFrom_LABEL}>
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
                <FormItem label={localConsts.EstimatedMilliSecondsTo_LABEL}>
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
                <FormItem label={localConsts.EstimatedSetupMillisFrom_LABEL}>
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
                <FormItem label={localConsts.EstimatedSetupMillisTo_LABEL}>
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
              <Col span={24}>
                <FormItem label={localConsts.EstimateCalcMethod_LABEL}>
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
                <FormItem label={localConsts.ActualSetupMillisFrom_LABEL}>
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
                <FormItem label={localConsts.ActualSetupMillisTo_LABEL}>
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
                <FormItem
                  label={localConsts.TotalMilliSecondsAllowedFrom_LABEL}
                >
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
                <FormItem label={localConsts.TotalMilliSecondsAllowedTo_LABEL}>
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
                <FormItem label={localConsts.TotalMoneyAllowedFrom_LABEL}>
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
                <FormItem label={localConsts.TotalMoneyAllowedTo_LABEL}>
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
                <FormItem label={localConsts.Currency_LABEL}>
                  {getFieldDecorator('Scope', {})(
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
                      {InvoiceTypeConst}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={24}>
                <FormItem label={localConsts.SpecialTerms_LABEL}>
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
                <FormItem label={localConsts.TimeTransparencyFrom_LABEL}>
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
              <Col span={11}>
                <FormItem label={localConsts.TimeTransparencyTo_LABEL}>
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
                <FormItem label={localConsts.UniversalId}>
                  {getFieldDecorator('UniversalId', {})(
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
              <Col span={24}>
                <FormItem label={localConsts.SpecialTerms_LABEL}>
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
              <Col span={24}>
                <FormItem label={localConsts.SourceReferenceId}>
                  {getFieldDecorator('SourceReferenceId', {})(
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
                <FormItem label={localConsts.FixedAssetId}>
                  {getFieldDecorator('FixedAssetId', {})(
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
                <FormItem label={localConsts.FacilityId}>
                  {getFieldDecorator('FacilityId', {})(
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
              <Col span={24}>
                <FormItem label={localConsts.InfoUrl}>
                  {getFieldDecorator('InfoUrl', {})(
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
                <FormItem label={localConsts.TemporalExpression}>
                  {getFieldDecorator('TemporalExpression', {})(
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
              <Col span={24}>
                <FormItem label={localConsts.ServiceLoaderName}>
                  {getFieldDecorator('ServiceLoaderName', {})(
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
                <FormItem label={localConsts.QuantityToProduceFrom_LABEL}>
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
                <FormItem label={localConsts.QuantityToProduceTo_LABEL}>
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
                <FormItem label={localConsts.QuantityToProducedFrom_LABEL}>
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
                <FormItem label={localConsts.QuantityToProducedTo_LABEL}>
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
                <FormItem label={localConsts.QuantityToRejectedFrom_LABEL}>
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
                <FormItem label={localConsts.QuantityToRejectedTo_LABEL}>
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
                <FormItem label={localConsts.ReservPersonsFrom_LABEL}>
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
                <FormItem label={localConsts.ReservPersonsFrom_LABEL}>
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
                <FormItem label={localConsts.Reserv2ndPPPercFrom_LABEL}>
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
                <FormItem label={localConsts.Reserv2ndPPPercTo_LABEL}>
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
                <FormItem label={localConsts.ReservNthPPPercFrom_LABEL}>
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
                <FormItem label={localConsts.ReservNthPPPercTo_LABEL}>
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
                <FormItem label={localConsts.AccommodationMapId}>
                  {getFieldDecorator('AccommodationMapId', {})(
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
              <Col span={11}>
                <FormItem label={localConsts.AccommodationspotId}>
                  {getFieldDecorator('AccommodationspotId', {})(
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
                <FormItem label={localConsts.RevisionNumberFrom_LABEL}>
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
                <FormItem label={localConsts.RevisionNumberTo_LABEL}>
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
                <FormItem label={localConsts.CreatedDateFrom_LABEL}>
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
                <FormItem label={localConsts.CreatedDateTo_LABEL}>
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
              <Col span={24}>
                <FormItem label={localConsts.CreatedByUser}>
                  {getFieldDecorator('AccommodationMapId', {})(
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
                <FormItem label={localConsts.LastModifiedDateFrom_LABEL}>
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
                <FormItem label={localConsts.LastModifiedDateTo_LABEL}>
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
              <Col span={24}>
                <FormItem label={localConsts.LastModifiedByUser}>
                  {getFieldDecorator('LastModifiedByUser', {})(
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
                <FormItem label={localConsts.SequenceNumFrom_LABEL}>
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
                <FormItem label={localConsts.SequenceNumTo_LABEL}>
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
                  // rowKey="id"
                  // title={this.tableHeader}
                  columns={tableColumns14}
                  // loading={this.state.loading}
                  // dataSource={this.state.data}
                  size="small"
                  // bordered={borderedValue}
                  // showHeader={showHeaderValue}
                  // scroll={scrollValue}
                  // expandedRowRender={expandableValue}
                  // pagination={paginationProps}
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
TransactionsForm.propTypes = {
  // dispatch: PropTypes.func,
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
  connect(({ Transactions }) => ({
    // Data: Transactions.reducerSaveAuthTransaction,
  }))(TransactionsForm),
);
