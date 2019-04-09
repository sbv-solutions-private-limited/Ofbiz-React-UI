import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';
import {
  Col,
  Form,
  Input,
  Tabs,
  Checkbox,
  Tag,
  Popconfirm,
  DatePicker,
  Row,
  Table,
  Upload,
  Select,
  Button,
  Icon,
  Drawer,
  Popover,
} from 'antd';
import * as actionConsts from '../../../common/TitlePane/ActionConsts';
import * as localConsts from './FinancialAccountConsts';
import styles from '../../../common/Styles.less';
const FormItem = Form.Item;
const { TabPane } = Tabs;
const InputGroup = Input.Group;
const CheckboxGroup = Checkbox.Group;
const CheckableTag = Tag.CheckableTag;
const newObject = {};
class FinancialAccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agreementId: '',
      data: newObject,
      isExistMessage: '',
      enableSaveButtonValue: false,
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
      agreementText: '',
      sequenceNum: '',
      status: [],
      Reco: [],
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
      key: '1',
      activeKey: '2',
      copyAgreementTerms: 'Y',
      copyAgreementProducts: 'Y',
      copyAgreementParties: 'Y',
      copyAgreementFacilities: 'Y',
      checked: true,
      agreementTerm: [],
      roleUpdate: false,
      agreementItem: [],
      agreementItemUpdate: false,
      agreementWorkEffort: [],
      visible14: false,
      disabled: false,
      disabled1: false,
      Data: [],
      Auth:[],
      role: [],
      TERM: [],
      disabbled1: false,
      roleTypeId: 'BILL_TO_CUSTOMER',
      billingTermUpdate: false,
      finAccountId : '',
      Trans:[],
      groupInOneTransaction : 'N',
      paymentGroupName : '',
      Reco : [],
      recUpdate: false,
    };
  }
  start = () => {
    this.setState({ loading: true });
    // var id = this.state.Trans[0].invoiceId;
    var id = '8001';
    var temp = [];
    temp.push(id);
    var obj = {
      paymentIds: temp,
      finAccountId : this.state.finAccountId,
      groupInOneTransaction : this.state.groupInOneTransaction,
      paymentGroupName : this.state.paymentGroupName,
      // paymentGroupTypeId: this.state.paymentGroupTypeId,
    };
    this.props.handleSubmitAction(
      actionConsts.ACTION_TYPE_SAVE__DEP_WITH_PAY,
      obj,
    );
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };
  CopyAgreements = () => {
    var obj = {
      agreementId: this.state.agreementId,
      copyAgreementTerms: this.state.copyAgreementTerms,
      copyAgreementProducts: this.state.copyAgreementProducts,
      copyAgreementParties: this.state.copyAgreementParties,
      copyAgreementFacilities: this.state.copyAgreementFacilities,
    };
    this.props.handleSubmitAction(actionConsts.ACTION_TYPE_COPY_AGREEMENT, obj);
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
 
  // handleChange = event => {
  //   this.setState({
  //     agreementItemSeqId: event.target.value,
  //     facilityId: event.target.value,
  //     geoId: event.target.value,
  //     // partyId: event.target.value,
  //     agreementText: event.target.value,
  //     sequenceNum: event.target.value,
  //     productId: event.target.value,
  //   });
  // };
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
    console.log(nextProps.Auth);
    if (nextProps.Trans != undefined) {
      var tmp = [];
      tmp.push({ finAccountTransId: nextProps.Trans.finAccountTransId })
      this.setState({ Trans: tmp });
    }
    if (nextProps.Auth != undefined) {
      var tmp = [];
      tmp.push({ finAccountAuthId: nextProps.Auth.finAccountAuthId})
      this.setState({ Auth: tmp });
    }
    if (nextProps.Reco != undefined) {
      var tmp = [];
      tmp.push({ glReconciliationId: nextProps.Reco.glReconciliationId })
      this.setState({ Reco: tmp });
    }
    if (nextProps.Data != undefined) {
      this.setState({ finAccountId: nextProps.Data.finAccountId });
      console.log(this.state.finAccountId);
    }
    if (nextProps.Role != undefined) {
      var tmp = [];
      tmp.push({ partyId: this.state.partyId })
      this.setState({ role: tmp });
    }
    if (nextProps.currentAction === 'new') {
      this.setState({ disabled: true, disabled1: false, activeKey: '2' });
    }
    if (nextProps.currentAction == 'view') {
      console.log(this.state.BillingAcctID);
      this.setState({ disabled: false, disabled1: true, activeKey: '1' });
    }
    if (nextProps.AgreementTerm != undefined) {
      var tmp = [];
      tmp.push({ agreementTermId: nextProps.AgreementTerm.agreementTermId });
      this.setState({ agreementTerm: tmp });
    }
    if (nextProps.AgreementItem != undefined) {
      var tmp = [];
      tmp.push({
        agreementItemSeqId: nextProps.AgreementItem.agreementItemSeqId,
      });
      this.setState({ agreementItem: tmp });
    }
    if (nextProps.AgreementWorkEffort != undefined) {
      this.setState({ agreementWorkEffort: [] });
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
  handleDelete = key => {
    key = key.agreementTermId;
    const dataSource = [...this.state.agreementTerm];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((errors, fieldsValue) => {
      if (!errors) {
        this.setState({ currentKey: this.state.key });
        const activeKey = this.state.activeKey;
        const key = this.state.key;
        console.log(activeKey, key, this.state.recUpdate);
        if (activeKey === '2') {
          const values = {
            ...fieldsValue,
            fromDate: fieldsValue['fromDate'].format('YYYY-MM-DD'),
            thruDate: fieldsValue['thruDate'].format('YYYY-MM-DD'),
          };
          var obj = {
            finAccountTypeId: 'DEPOSIT_ACCOUNT',
            statusId: 'FNACT_ACTIVE',
            finAccountName: values.finAccountName,
            finAccountCode: values.finAccountCode,
            finAccountPin: values.finAccountPin,
            currencyUomId: values.currencyUomId,
            organizationPartyId: values.organizationPartyId,
            ownerPartyId : values.ownerPartyId,
            postToGlAccountId : values.postToGlAccountId,
            // fromDate : values.fromDate,
            // thruDate : values.thruDate,
            isRefundable : values.isRefundable,
            replenishPaymentId : values.replenishPaymentId,
            // replenishLevel : '',
          };
          console.log(obj);
          this.props.handleSubmitAction(
            actionConsts.ACTION_TYPE_SAVE_FA,
            obj,
          );
        }
        if (activeKey === '1') {
          if (this.state.key === '1') {
            const values = {
              ...fieldsValue,
              fromDate: fieldsValue['fromDate'].format('YYYY-MM-DD'),
              thruDate: fieldsValue['thruDate'].format('YYYY-MM-DD'),
            };
            var obj = {
              finAccountId : this.state.finAccountId,
              finAccountTypeId: 'DEPOSIT_ACCOUNT',
            statusId: 'FNACT_ACTIVE',
            finAccountName: values.finAccountName,
            finAccountCode: values.finAccountCode,
            finAccountPin: values.finAccountPin,
            currencyUomId: values.currencyUomId,
            organizationPartyId: values.organizationPartyId,
            ownerPartyId : values.ownerPartyId,
            postToGlAccountId : values.postToGlAccountId,
            // fromDate : values.fromDate,
            // thruDate : values.thruDate,
            isRefundable : values.isRefundable,
            replenishPaymentId : values.replenishPaymentId,
            // replenishLevel : '',
            };
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_FA,
              obj,
            );
          }
          if (
            activeKey === '1' &&
            key === '3'
          ) {
            const values = {
              ...fieldsValue,
            };
            var obj = {
              finAccountId: this.state.finAccountId,
              // finAccountTransTypeId: 'ADJUSTMENT',
              // partyId: values.partyId,
              // glReconciliationId: '',
              // // transactionDate: values.transactionDate,
              // // entryDate: values.entryDate,
              // amount: values.amount,
              // paymentId: values.paymentId,
              // orderId: values.orderId,
              // orderItemSeqId: values.orderItemSeqId,
              // reasonEnumId: values.reasonEnumId,
              // comments: values.comments,
              // statusId: 'FINACT_TRNS_CREATED',
              // glAccountId : '100000'
              // // termDays: values.termDays,
              // // uomId: values.uomId,
            };
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_FIN_TRANS,
              obj,
            );
          }
          if (
            activeKey === '1' &&
            key === 'b' && this.state.recUpdate === false
          ) {
            const values = {
              ...fieldsValue,
              createdDate: fieldsValue['createdDate'].format('YYYY-MM-DD'),
              reconciledDate: fieldsValue['reconciledDate'].format('YYYY-MM-DD'),
              lastModifiedDate: fieldsValue['lastModifiedDate'].format('YYYY-MM-DD'),
            };
            var obj = {
              glReconciliationName:values.glReconciliationName,
              description: values.description,
              createdDate: values.createdDate,
              lastModifiedDate: values.lastModifiedDate,
              // transactionDate: values.transactionDate,              // entryDate: values.entryDate,
              glAccountId: values.glAccountId,
              statusId: values.statusId,
              organizationPartyId: values.organizationPartyId,
              reconciledBalance: values.reconciledBalance,
              openingBalance: values.openingBalance,
              reconciledDate: values.reconciledDate,
            };
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_RECO,
              obj,
            );
          }
          if (
            activeKey === '1' &&
            key === 'b' && this.state.recUpdate === true
          ) {
            const values = {
              ...fieldsValue,
              createdDate: fieldsValue['createdDate'].format('YYYY-MM-DD'),
              reconciledDate: fieldsValue['reconciledDate'].format('YYYY-MM-DD'),
              lastModifiedDate: fieldsValue['lastModifiedDate'].format('YYYY-MM-DD'),
            };
            var obj = {
              glReconciliationId : this.state.Reco[0].glReconciliationId,
              glReconciliationName:values.glReconciliationName,
              description: values.description,
              createdDate: values.createdDate,
              lastModifiedDate: values.lastModifiedDate,
              // transactionDate: values.transactionDate,              // entryDate: values.entryDate,
              glAccountId: values.glAccountId,
              statusId: values.statusId,
              organizationPartyId: values.organizationPartyId,
              reconciledBalance: values.reconciledBalance,
              openingBalance: values.openingBalance,
              reconciledDate: values.reconciledDate,
            };
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_RECO,
              obj,
            );
            this.setState({recUpdate : false});
          }
          if (
            activeKey === '1' &&
            key === 'Authorizations'
          ) {
            const values = {
              ...fieldsValue,

              fromDate: fieldsValue['fromDate'].format('YYYY-MM-DD'),
              authorizationDate: fieldsValue['authorizationDate'].format('YYYY-MM-DD'),
            };
            var obj = {
              finAccountId: this.state.finAccountId,
              // // amount: '',
              // currencyUomId: '',
              // // authorizationDate: values.authorizationDate,
              // fromDate: values.fromDate,
              // // thruDate : values.thruDate
            };
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_AUTH,
              obj,
            );
          }
          if (key === 'Agreement Items' && agreementItemUpdate === true) {
            var obj = {
              agreementId: this.state.agreementId,
              agreementItemSeqId: this.state.agreementItem[0]
                .agreementItemSeqId,
              agreementItemTypeId: '',
              currencyUomId: '',
              agreementText: '',
              agreementImage: '',
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_AGREEMENT_ITEM,
              obj,
            );
            this.setState({ agreementItemUpdate: false });
          }
          if (key === 'Payments') {
            const values = {
              ...fieldsValue,
            };
            var obj = {
              paymentId: '',
              toPaymentId: '',
              invoiceId: '',
              billingAccountId: this.state.BillingAcctID,
              taxAuthGeoId: '',
              amountApplied: values.amountApplied
            };
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE,
              obj,
            );
          }
          if (key === 'Promotions') {
            var obj = {
              agreementId: this.state.agreementId,
              productPromoId: '9000',
              agreementItemSeqId: '00001',
              sequenceNum: this.state.sequenceNum,
              fromDate: moment(this.state.fromDate).format('YYYY-MM-DD'),
              thruDate: moment(this.state.thruDate).format('YYYY-MM-DD'),
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_AGREEMENT_PROMOTIONS,
              obj,
            );
          }
          if (key === 'Terms') {
            var obj = {
              termTypeId: this.state.termTypeId,
              agreementId: this.state.agreementId,
              agreementItemSeqId: values.agreementItemSeqId,
              invoiceItemTypeId: this.state.invoiceItemTypeId,
              fromDate: moment(this.state.fromDate).format('YYYY-MM-DD'),
              thruDate: moment(this.state.thruDate).format('YYYY-MM-DD'),
              termValue: this.state.termValue,
              termDays: this.state.termDays,
              textValue: this.state.textValue,
              minQuantity: this.state.minQuantity,
              maxQuantity: this.state.maxQuantity,
              description: this.state.description,
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_AGREEMENT_TERM,
              obj,
            );
          }
          if (key === 'Products') {
            var obj = {
              agreementId: this.state.agreementId,
              productId: 'SV-1000',
              agreementItemSeqId: '00001',
              price: this.state.price,
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_AGREEMENT_PRODUCTS,
              obj,
            );
          }
          if (key === 'Party') {
            var obj = {
              agreementId: this.state.agreementId,
              partyId: this.state.partyId,
              agreementItemSeqId: '00001',
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_AGREEMENT_PARTY,
              obj,
            );
          }
          if (key === 'Geo') {
            var obj = {
              agreementId: this.state.agreementId,
              geoId: this.state.geoId,
              agreementItemSeqId: '00001',
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_AGREEMENT_GEO,
              obj,
            );
          }
          if (key === 'Facilities') {
            var obj = {
              agreementId: this.state.agreementId,
              facilityId: this.state.facilityId,
              agreementItemSeqId: '00001',
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_AGREEMENT_FACILITIES,
              obj,
            );
          }
          if (key === 'Agreement Work Effort Applics') {
            var obj = {
              agreementId: this.state.agreementId,
              workEffortId: this.state.workEffortId,
              agreementItemSeqId: this.state.agreementItem[0]
                .agreementItemSeqId,
            };
            this.setState({ agreementWorkEffort: this.state.agreementItem });
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_AGREEMENT_WORKEFFORT,
              obj,
            );
          }
          if (key === 'Financial Account Role' && this.state.roleUpdate === false) {
            const values = {
              ...fieldsValue,
              fromDate: fieldsValue['fromDate'].format('YYYY-MM-DD'),
              thruDate: fieldsValue['thruDate'].format('YYYY-MM-DD'),
            };
            this.setState({ partyId: values.partyId });
            var obj = {
              finAccountId: this.state.finAccountId,
              partyId: values.partyId,
              roleTypeId: 'BILL_TO_CUSTOMER',
              // fromDate: values.fromDate,
              // thruDate: values.thruDate,
            }
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_FINANCIAL_ACCOUNT_ROLES,
              obj,
            );
          }
          if (key === 'Financial Account Role' && this.state.roleUpdate === true) {
            const values = {
              ...fieldsValue,
              fromDate: fieldsValue['fromDate'].format('YYYY-MM-DD'),
              thruDate: fieldsValue['thruDate'].format('YYYY-MM-DD'),
            };
            var obj = {
              finAccountId: this.state.finAccountId,
              partyId: this.state.partyId,
              roleTypeId: 'BILL_TO_CUSTOMER',
              fromDate: values.fromDate,
              thruDate: values.thruDate,
            };
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_FINANCIAL_ACCOUNT_ROLES,
              obj,
            );
            this.setState({ roleUpdate: false, disabbled1: false });
          }
          if (key === 'Agreement Contents') {
            var obj = {
              agreementId: this.state.agreementId,
              agreementItemSeqId: this.state.agreementItem[0]
                .agreementItemSeqId,
              agreementContentTypeId: 'CONTRACT',
              contentId: 'DOCUMENT',
              statusId: 'CTNT_AVAILABLE',
              fromDate: moment(this.state.fromDate).format('YYYY-MM-DD'),
              thruDate: moment(this.state.thruDate).format('YYYY-MM-DD'),
              uploadedFile: this.state.uploadedFile,
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_AGREEMENT_CONTENTS,
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
  FilehandleChange = info => {
    let fileList = info.fileList;
    fileList = fileList.slice(-2);
    fileList = fileList.map(file => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });
    fileList = fileList.filter(file => {
      if (file.response) {
        return file.response.status === 'success';
      }
      return false;
    });
    this.setState({ fileList });
  };
  callback = key => {
    this.setState({ key: key });
  };
  onChange1 = (_date, dateString) => {
    this.setState({ thruDate: dateString });
  };
  onChange = (_date, dateString) => {
    this.setState({ fromDate: dateString });
  };
  componentDidMount() {
    this.setState({ activeKey: this.props.activeKey });
  }
  render() {
    console.log(this.state.Auth);
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };
    const { getFieldDecorator } = this.props.form;
    const { currentAction } = this.props;
    const PaymentTypeConst = localConsts.PaymentTypeConst.map(k => (
      <Option key={k.label} value={k.value}>
        {k.label}
      </Option>
    ));
    const TermTypeDropDown = localConsts.TermTypeDropDown.map(k => (
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
    const { data } = this.state;
    const tableColumns14 = [
      {
        title: 'WorkEffort Id ',
        dataIndex: 'Item_No',
        id: 'Item_No',
      },
      {
        title: 'Work Effort Name ',
        dataIndex: 'Description',
      },
      {
        title: 'Work Effort Type Id ',
        dataIndex: 'Total',
      },
      {
        title: 'Contact Mech Type Id ',
        dataIndex: 'Payment_Id',
      },
      {
        title: ' Marketing Campaign Id ',
        dataIndex: 'Amount_Applied',
      },
    ];
    const tableColumns_gl = [
      {
        title: 'GLAccountID',
        dataIndex: 'GLAccountID',
        id: 'Item_No',
      },
      {
        title: 'Name',
        dataIndex: 'Name',
      },
      {
        title: 'Type',
        dataIndex: 'Total',
      },
      {
        title: 'GLAccountClass',
        dataIndex: 'GLAccountClass',
      },
    ];
    const tableColumns20 = [
      {
        title: `${localConsts.FinAccountTransId}`,
        dataIndex: 'finAccountTransId',
        key: 'finAccountTransId',
      },
      {
        title: `${localConsts.FinAccountTransTypeId}`,
        dataIndex: 'FinAccountTransTypeId',
        sorter: (a, b) => a.shortName.length - b.shortName.length,
      },
      {
        title: `${localConsts.Party}`,
        dataIndex: 'Invoice Date',
      },
      {
        title: `${localConsts.COLUMN_ToParty}`,
        dataIndex: 'ToParty',
      },
      {
        title: `${localConsts.GlReconciliationName}`,
        dataIndex: 'FromParty',
      },
      {
        title: `${localConsts.TransactionDate}`,
        dataIndex: 'status',
      },
      {
        title: `${localConsts.EntryDate}`,
        dataIndex: 'amount',
      },
      {
        title: `${localConsts.Amount}`,
        dataIndex: 'DueAmount',
      },
      {
        title: `${localConsts.PaymentId}`,
        dataIndex: 'DueAmount',
      },
      {
        title: `${localConsts.PaymentType}`,
        dataIndex: 'DueAmount',
      },
      {
        title: `${localConsts.PaymentMethodType}`,
        dataIndex: 'DueAmount',
      },
      {
        title: `${localConsts.Status}`,
        dataIndex: 'DueAmount',
      },
      {
        title: `${localConsts.Comments	}`,
        dataIndex: 'DueAmount',
      },
      {
        title: `${localConsts.Cancel	}`,
        dataIndex: 'DueAmount',
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
              onConfirm={() =>
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_REMOVE_FAT,
                  {finAccountTransId : this.state.Trans[0].finAccountTransId},
                )
              }
            >
              <Icon type="delete" className={styles.icon} />
            </Popconfirm>&emsp;
          </div>
        ),
      },
      {
        title: `${localConsts.TransactionStatus	}`,
        dataIndex: 'DueAmount',
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
    const tableColumns2 = [
      {
        title: `${localConsts.COLUMN_Edit}`,
        dataIndex: 'agreementItemSeqId',
        id: 'agreementItemSeqId',
        render: text => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({ agreementItemUpdate: true });
                this.showDrawer();
                this.props.toggleView();
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
        render: () => (
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
    const tableColumns11 = [
      {
        title: `${localConsts.COLUMN_PartyID}`,
        dataIndex: 'partyId',
        id: 'partyId',
      },
      {
        title: `${localConsts.COLUMN_RoleTypeID}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.FromDate_LABEL}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.ThroughDate_LABEL}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
        render: data => (
          <div>
            <Icon
              type="edit"
              className={styles.icon}
              onClick={() => {
                this.setState({ roleUpdate: true, disabbled1: true });
                this.showDrawer11();
              }}
            />{' '}

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
                  finAccountId: this.state.finAccountId,
                  partyId: this.state.partyId,
                  roleTypeId: 'BILL_TO_CUSTOMER',
                  fromDate: moment().format('YYYY-MM-DD'),
                  thruDate:  moment().format('YYYY-MM-DD'),
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_FINACCOUNT_DELETE,
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
        title: `${localConsts.FinAccountAuthId}`,
        dataIndex: 'finAccountAuthId',
        id: 'finAccountAuthId',
      },
      {
        title: `${localConsts.Amount	}`,
        dataIndex: 'Amount',
        id: 'Amount	',
      },
      {
        title: `${localConsts.Currency}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.AuthorizationDate}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.FromDate}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.ThroughDate}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        width: 50,
        dataIndex: 'billingAccountTermId',
        id: 'billingAccountTermId',
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
                  finAccountAuthId: this.state.Auth[0].finAccountAuthId,
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_EXPIRE_FA_AUTH,
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
    const tableColumns15 = [
      {
        title: `${localConsts.OrderId}`,
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.OrderDate}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.PaymentMethodType}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.Status}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.MaxAmount}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
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
    const tableColumns26 = [
      {
        title: `${localConsts.GlReconciliationId}`,
        dataIndex: 'glReconciliationId',
        key: 'glReconciliationId',
        width: 130,
        fixed: 'left',
        sorter: (a, b) => a.name.length - b.name.length,
        render: text => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({ recUpdate: true });
                // this.showDrawer();
                // this.props.toggleView();
              }}
            >
              {text}
            </Button>
          );
            }
      },
      {
        title: `${localConsts.GlReconciliationName}`,
        dataIndex: 'FromParty',
      },
      {
        title: `${localConsts.Description_LABEL}`,
        dataIndex: 'ToParty',
      },
      {
        title: `${localConsts.CreatedDate}`,
        dataIndex: 'status',
      },
      {
        title: `${localConsts.GLAccountID}`,
        dataIndex: 'amount',
      },
      {
        title: `${localConsts.Party}`,
        dataIndex: 'Currency',
      },
      {
        title: `${localConsts.ReconciledBalance}`,
        dataIndex: 'Currency',
      },
      {
        title: `${localConsts.OpeningBalance}`,
        dataIndex: 'Currency',
      },
      {
        title: `${localConsts.ReconciledDate}`,
        dataIndex: 'Currency',
      },
      {
        title: `${localConsts.CancelBankReconciliation
        }`,
        dataIndex: 'Currency',
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
                  glReconciliationId: this.state.Reco[0].glReconciliationId,
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_REC_DELETE,
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
    
    const tableColumns4 = [
      {
        title: `${localConsts.TermTypeId_LABEL}`,
        dataIndex: 'billingAccountTermId',
        key: 'billingAccountTermId',
        render: text => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({ billingTermUpdate: true });
                this.showDrawer4();
              }}
            >
              {text}
            </Button>
          );
        },
      },
      {
        title: `${localConsts.value}`,
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: `${localConsts.UOM}`,
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        width: 50,
        dataIndex: 'billingAccountTermId',
        id: 'billingAccountTermId',
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
                  billingAccountTermId: data,
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_BILLING_DELETE,
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
                    <FormItem label={localConsts.FinAccountName}>
                      {getFieldDecorator('finAccountName', {
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
                  <Col span={7} offset={1}>
                    <FormItem label={localConsts.Status}>
                      {getFieldDecorator('statusId', {
                        initialValue: data.partyIdTo,
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
                        {}
                      </Select>,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={1}>
                    <FormItem label={localConsts.FinAccountType}>
                      {getFieldDecorator('finAccountTypeId', {
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
                          {}
                        </Select>,
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <Row >
                  <Col span={7}>
                    <FormItem label={localConsts.FinAccountCode}>
                      {getFieldDecorator('finAccountCode', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Input
                          style={{ width: '295px' }}
                          onBlur={this.enableSaveButton}
                        />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={1}>
                    <FormItem label={localConsts.FinAccountPin}>
                      {getFieldDecorator('finAccountPin', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Input
                          style={{ width: '295px' }}
                          onBlur={this.enableSaveButton}
                        />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={1}>
                    <FormItem label={localConsts.Currency}>
                      {getFieldDecorator('currencyUomId', {
                        initialValue: data.description,
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
                          {}
                        </Select>,
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <Row >
                  <Col span={7}>
                    <FormItem label={localConsts.OrganizationPartyId}>
                      {getFieldDecorator('organizationPartyId', {
                        initialValue: data.partyIdFrom,
                        enableReinitialize: true,
                      })(
                        <Input
                          value={this.state.partyId}
                          onBlur={this.enableSaveButton}
                          // onChange={this.handleChange}
                          addonAfter={
                            <Icon onClick={this.showDrawer2} type="idcard" />
                          }
                        />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={1}>
                    <FormItem label={localConsts.OwnerPartyId
                    }>
                      {getFieldDecorator('ownerPartyId', {
                        initialValue: data.partyIdTo,
                        enableReinitialize: true,
                      })(
                        <Input
                          value={this.state.partyId}
                          onBlur={this.enableSaveButton}
                          // onChange={this.handleChange}
                          addonAfter={
                            <Icon onClick={this.showDrawer2} type="idcard" />
                          }
                        />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={1}>
                    <FormItem label={localConsts.PostToGlAccountId}>
                      {getFieldDecorator('postToGlAccountId', {
                        initialValue: data.description,
                        enableReinitialize: true,
                      })(
                        <Input
                        value={this.state.partyId}
                        onBlur={this.enableSaveButton}
                        // onChange={this.handleChange}
                        addonAfter={
                          <Icon onClick={this.showDrawer5} type="idcard" />
                        }
                      />,
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <Row >
                  <Col span={7}>
                  <FormItem label={localConsts.FromDate}>
                  {getFieldDecorator('fromDate', {})(
                    <DatePicker
                      onChange={this.onChange}
                      style={{ width: '250px' }}
                    />,
                  )}
                </FormItem>
                  </Col>
                  <Col span={7} offset={1}>
                  <FormItem label={localConsts.ThroughDate}>
                  {getFieldDecorator('thruDate', {})(
                    <DatePicker
                      onChange={this.onChange}
                      style={{ width: '250px' }}
                    />,
                  )}
                </FormItem>
                  </Col>
                  <Col span={7} offset={1}>
                    <FormItem label={localConsts.IsRefundable}>
                      {getFieldDecorator('isRefundable', {
                        initialValue: data.description,
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
                        {}
                      </Select>,
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <Row >
                  <Col span={7}>
                    <FormItem label={localConsts.ReplenishPaymentId}>
                      {getFieldDecorator('replenishPaymentId', {
                        initialValue:'',
                        enableReinitialize: true,
                      })(
                        <Input
                          style={{ width: '295px' }}
                          onBlur={this.enableSaveButton}
                        />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={1}>
                    <FormItem label={localConsts.ReplenishLevel}>
                      {getFieldDecorator('replenishLevel', {
                        initialValue: '',
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
              tab={localConsts.TAB1_CAPTION}
              key="1"
              className={styles.tabPaneCustom}
              disabled={this.state.disabled}
            >
              <Tabs tabPosition="left" onChange={this.callback}>
                <TabPane tab="Edit Financial Account" key="Edit Financial Account ">
                <Row  style={{ marginTop: '15px' }}>
                <Col span={7}>
                    <FormItem label={localConsts.FinAccountId}>
                      {getFieldDecorator('finAccountId', {
                        initialValue: this.state.finAccountId,
                        enableReinitialize: true,
                      })(
                        <Input
                          disabled
                          style={{ width: '295px' }}
                          onBlur={this.enableSaveButton}
                        />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={2}>
                    <FormItem label={localConsts.FinAccountName}>
                      {getFieldDecorator('finAccountName', {
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
                </Row>
                <Row >
                
                  <Col span={7} >
                    <FormItem label={localConsts.Status}>
                      {getFieldDecorator('statusId', {
                        initialValue: data.partyIdTo,
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
                        {}
                      </Select>,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={2}>
                    <FormItem label={localConsts.FinAccountType}>
                      {getFieldDecorator('finAccountTypeId', {
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
                          {}
                        </Select>,
                      )}
                    </FormItem>
                  </Col>
                 
                </Row>
                <Row >
                <Col span={7} >
                    <FormItem label={localConsts.FinAccountCode}>
                      {getFieldDecorator('finAccountCode', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Input
                          style={{ width: '295px' }}
                          onBlur={this.enableSaveButton}
                        />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={2} >
                    <FormItem label={localConsts.FinAccountPin}>
                      {getFieldDecorator('finAccountPin', {
                        initialValue: '',
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
                <Row >
                <Col span={7} >
                    <FormItem label={localConsts.Currency}>
                      {getFieldDecorator('currencyUomId', {
                        initialValue: data.description,
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
                          {}
                        </Select>,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={2}>
                    <FormItem label={localConsts.OrganizationPartyId}>
                      {getFieldDecorator('organizationPartyId', {
                        initialValue: data.partyIdFrom,
                        enableReinitialize: true,
                      })(
                        <Input
                          value={this.state.partyId}
                          onBlur={this.enableSaveButton}
                          // onChange={this.handleChange}
                          addonAfter={
                            <Icon onClick={this.showDrawer2} type="idcard" />
                          }
                        />,
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <Row >
                  
                <Col span={7} >
                    <FormItem label={localConsts.OwnerPartyId
                    }>
                      {getFieldDecorator('ownerPartyId', {
                        initialValue: data.partyIdTo,
                        enableReinitialize: true,
                      })(
                        <Input
                          value={this.state.partyId}
                          onBlur={this.enableSaveButton}
                          // onChange={this.handleChange}
                          addonAfter={
                            <Icon onClick={this.showDrawer2} type="idcard" />
                          }
                        />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={2}>
                    <FormItem label={localConsts.PostToGlAccountId}>
                      {getFieldDecorator('postToGlAccountId', {
                        initialValue: data.description,
                        enableReinitialize: true,
                      })(
                        <Input
                        value={this.state.partyId}
                        onBlur={this.enableSaveButton}
                        // onChange={this.handleChange}
                        addonAfter={
                          <Icon onClick={this.showDrawer5} type="idcard" />
                        }
                      />,
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <Row>
                <Col span={7}>
                  <FormItem label={localConsts.FromDate}>
                  {getFieldDecorator('fromDate', {})(
                    <DatePicker
                      onChange={this.onChange}
                      style={{ width: '250px' }}
                    />,
                  )}
                </FormItem>
                  </Col>
                  <Col span={7} offset={2}>
                  <FormItem label={localConsts.ThroughDate}>
                  {getFieldDecorator('thruDate', {})(
                    <DatePicker
                      onChange={this.onChange}
                      style={{ width: '250px' }}
                    />,
                  )}
                </FormItem>
                  </Col>
                </Row>
                <Row>
                <Col span={7} >
                    <FormItem label={localConsts.IsRefundable}>
                      {getFieldDecorator('isRefundable', {
                        initialValue: data.description,
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
                        {}
                      </Select>,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={2}>
                    <FormItem label={localConsts.ReplenishLevel}>
                      {getFieldDecorator('replenishLevel', {
                        initialValue: '',
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

                <Row >
                  <Col span={7}>
                    <FormItem label={localConsts.ReplenishPaymentId}>
                      {getFieldDecorator('replenishPaymentId', {
                        initialValue:'',
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
                </TabPane>
                <TabPane
                  tab="Deposit/Withdraw"
                  key="DW"
                >
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                  <TabPane tab={<p>Deposit Or Withdraw Payments for Financial Account:{this.state.fin}</p>} key="1">
                  <Row style={{ marginTop: '15px' }}>
                  <Col span={7} >
                    <FormItem label={localConsts.PaymentMethodId_LABEL}>
                      {getFieldDecorator('PaymentMethodId', {
                        initialValue: data.partyIdTo,
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
                        {}
                      </Select>,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={2}>
                    <FormItem label={localConsts.CardType}>
                      {getFieldDecorator('CardType', {
                        initialValue: data.partyIdTo,
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
                        {}
                      </Select>,
                      )}
                    </FormItem>
                  </Col>
                   </Row>
                   <Row >
                  <Col span={7} >
                    <FormItem label={localConsts.FromPartyID_LABEL}>
                      {getFieldDecorator('PartyId', {
                        initialValue: data.partyIdTo,
                        enableReinitialize: true,
                      })(
                        <Input
                        addonAfter={
                          <Icon onClick={this.showDrawer2} type="idcard" />
                        }
                      />,
                      )}
                    </FormItem>
                  </Col>
                
                   </Row>
                   <Row >
                   <Col span={7}>
                <FormItem label={localConsts.FromDate}>
                  {getFieldDecorator('FromDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                     
                      disabled={this.state.disabbled1}
                      style={{ width: '295px' }}
                      onChange={this.onChange}
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={7} offset={2}>
                <FormItem label={localConsts.ThroughDate}>
                  {getFieldDecorator('ThroughDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                     
                      disabled={this.state.disabbled1}
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
                   </TabPane>
            <TabPane tab={<p>Create New Deposit Payment For Financial Account :{this.state.finAccountId} </p>} key="2">
                  <Row style={{ marginTop: '15px' }}>
                  <Col span={7} >
                    <FormItem label={localConsts.paymentType_LABEL}>
                      {getFieldDecorator('paymentType', {
                        initialValue: data.partyIdTo,
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
                        {}
                      </Select>,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={2}>
                    <FormItem label={localConsts.Status}>
                      {getFieldDecorator('statusId', {
                        initialValue: 'Received',
                        enableReinitialize: true,
                      })(
                        <Input
                        disabled
                        value="Created"
                      />
                        
                      )}
                    </FormItem>
                  </Col>
                   </Row>
                   <Row >
                  <Col span={7} >
                    <FormItem label={localConsts.PaymentMethodId_LABEL}>
                      {getFieldDecorator('GlReconciliationId', {
                        initialValue: data.partyIdTo,
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
                        {}
                      </Select>,
                      )}
                    </FormItem>
                  </Col>
                
                   </Row>
                   <Row>
                   <Col span={7} >
                    <FormItem label={localConsts.FromPartyID_LABEL}>
                      {getFieldDecorator('PartyId', {
                        initialValue: data.partyIdTo,
                        enableReinitialize: true,
                      })(
                        <Input
                        addonAfter={
                          <Icon onClick={this.showDrawer2} type="idcard" />
                        }
                      />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={2} >
                    <FormItem label={localConsts.ToPartyID_LABEL}>
                      {getFieldDecorator('PartyId', {
                        initialValue: data.partyIdTo,
                        enableReinitialize: true,
                      })(
                        <Input
                        addonAfter={
                          <Icon onClick={this.showDrawer2} type="idcard" />
                        }
                      />,
                      )}
                    </FormItem>
                  </Col>
                   </Row>
                   
                   <Row >
                   <Col span={7}>
                <FormItem label={localConsts.EffectiveDate}>
                  {getFieldDecorator('EffectiveDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                     
                      disabled={this.state.disabbled1}
                      style={{ width: '295px' }}
                      onChange={this.onChange}
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={7} offset={2}>
                <FormItem label={localConsts.Amount}>
                  {getFieldDecorator('ThruTransactionDate', {
                    initialValue:'',
                    enableReinitialize: true,
                  })(
                    <Input
                     
                    />,
                  )}
                </FormItem>
              </Col>
                   </Row>
                   <Row >
                   <Col span={7}>
                <FormItem label={localConsts.ActualCurrencyAmount}>
                  {getFieldDecorator('fromDate', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                  
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={7} offset={2}>
                <FormItem label={localConsts.ActualCurrencyUomId}>
                  {getFieldDecorator('ActualCurrencyUomId', {
                    initialValue:'',
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
                    {}
                  </Select>,
                  )}
                </FormItem>
              </Col>
                   </Row>
                   <Row >
                   <Col span={7}>
                <FormItem label={localConsts.FinAccountTransId}>
                  {getFieldDecorator('fromDate', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                  
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={7} offset={2}>
                <FormItem label={localConsts.OverrideGlAccountId}>
                  {getFieldDecorator('fromDate', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                    addonAfter={
                      <Icon onClick={this.showDrawer5} type="idcard" />
                    }
                  />,
                  )}
                </FormItem>
              </Col>
              
              </Row>
              <Row >
                   <Col span={7}>
                <FormItem label={localConsts.ReferenceNumber_LABEL}>
                  {getFieldDecorator('fromDate', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                  
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={7} offset={2}>
                <FormItem label={localConsts.Comments}>
                  {getFieldDecorator('fromDate', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                  
                    />,
                  )}
                </FormItem>
              </Col>
              
              </Row>
              <Row>
              <Checkbox >Deposit Payment in:</Checkbox>
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
                  Save
                </Button>
              </Col>
            </Row>
                   </TabPane>
                   <TabPane tab={<p>Create New Withdrawal Payment For Financial Account :{this.state.finAccountId} </p>} key="3">
                  <Row style={{ marginTop: '15px' }}>
                  <Col span={7} >
                    <FormItem label={localConsts.paymentType_LABEL}>
                      {getFieldDecorator('paymentType', {
                        initialValue: data.partyIdTo,
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
                        {}
                      </Select>,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={2}>
                    <FormItem label={localConsts.Status}>
                      {getFieldDecorator('statusId', {
                        initialValue: 'Sent',
                        enableReinitialize: true,
                      })(
                        <Input
                        disabled
                        value="Created"
                      />
                        
                      )}
                    </FormItem>
                  </Col>
                   </Row>
                   <Row >
                  <Col span={7} >
                    <FormItem label={localConsts.PaymentMethodId_LABEL}>
                      {getFieldDecorator('GlReconciliationId', {
                        initialValue: data.partyIdTo,
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
                        {}
                      </Select>,
                      )}
                    </FormItem>
                  </Col>
                
                   </Row>
                   <Row>
                   <Col span={7} >
                    <FormItem label={localConsts.FromPartyID_LABEL}>
                      {getFieldDecorator('PartyId', {
                        initialValue: data.partyIdTo,
                        enableReinitialize: true,
                      })(
                        <Input
                        addonAfter={
                          <Icon onClick={this.showDrawer2} type="idcard" />
                        }
                      />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={2} >
                    <FormItem label={localConsts.ToPartyID_LABEL}>
                      {getFieldDecorator('PartyId', {
                        initialValue: data.partyIdTo,
                        enableReinitialize: true,
                      })(
                        <Input
                        addonAfter={
                          <Icon onClick={this.showDrawer2} type="idcard" />
                        }
                      />,
                      )}
                    </FormItem>
                  </Col>
                   </Row>
                   
                   <Row >
                   <Col span={7}>
                <FormItem label={localConsts.EffectiveDate}>
                  {getFieldDecorator('EffectiveDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                     
                      disabled={this.state.disabbled1}
                      style={{ width: '295px' }}
                      onChange={this.onChange}
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={7} offset={2}>
                <FormItem label={localConsts.Amount}>
                  {getFieldDecorator('ThruTransactionDate', {
                    initialValue:'',
                    enableReinitialize: true,
                  })(
                    <Input
                     
                    />,
                  )}
                </FormItem>
              </Col>
                   </Row>
                   <Row >
                   <Col span={7}>
                <FormItem label={localConsts.ActualCurrencyAmount}>
                  {getFieldDecorator('fromDate', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                  
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={7} offset={2}>
                <FormItem label={localConsts.ActualCurrencyUomId}>
                  {getFieldDecorator('ActualCurrencyUomId', {
                    initialValue:'',
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
                    {}
                  </Select>,
                  )}
                </FormItem>
              </Col>
                   </Row>
                   <Row >
                   <Col span={7}>
                <FormItem label={localConsts.FinAccountTransId}>
                  {getFieldDecorator('fromDate', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                  
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={7} offset={2}>
                <FormItem label={localConsts.OverrideGlAccountId}>
                  {getFieldDecorator('fromDate', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                    addonAfter={
                      <Icon onClick={this.showDrawer5} type="idcard" />
                    }
                  />,
                  )}
                </FormItem>
              </Col>
              
              </Row>
              <Row >
                   <Col span={7}>
                <FormItem label={localConsts.ReferenceNumber_LABEL}>
                  {getFieldDecorator('fromDate', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                  
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={7} offset={2}>
                <FormItem label={localConsts.Comments}>
                  {getFieldDecorator('fromDate', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                  
                    />,
                  )}
                </FormItem>
              </Col>
              
              </Row>
              <Row>
              <Checkbox >Withdrawal Payment from:	</Checkbox>
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
                  Save
                </Button>
              </Col>
            </Row>
                   </TabPane>

                </Tabs>
                <div style={{ display: 'flex', marginTop: 10, marginBottom: 10 }}>
            <div style={{ marginLeft: 20 }}>Running Total (Outstanding) : </div>
            <div style={{ marginLeft: 20 }}>
              <Input
                showSearch
                placeholder = "Payment Party Group Name"
                onChange={this.handleChange}
                onBlur={this.enableSaveButton}
                style={{ width: '295px' }}
              
                
              >
               
              </Input>
            </div>
            <div style={{marginLeft:15}}> <Checkbox >Group in one Transaction</Checkbox></div>
            <div style={{ marginLeft: 20 }}>
              <Button
                type="primary"
                value="small"
                onClick={this.start}
                disabled={this.state.disabled}
                loading={this.state.loading}
              >
                Deposit/Withdraw
              </Button>
              {/* <span style={{ marginLeft: 8 }}>
                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
              </span> */}
            </div>
            </div>
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        className={styles.tableContainer}
                        rowKey="id"
                        title={this.tableHeader}
                        columns={tableColumns6}
                        loading={this.state.loading}
                        dataSource={this.state.Trans}
                        size="small"
                        scroll={{ x: 1300 }}
                        rowSelection={rowSelection}
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
               
                <TabPane
                  tab="Transactions"
                  key="Transactions"
                >
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                  <TabPane tab={<p>Find Transactions for Financial Account:{this.state.fin}</p>} key="1">
                  <Row style={{ marginTop: '15px' }}>
                  <Col span={7} >
                    <FormItem label={localConsts.FinAccountTransTypeId}>
                      {getFieldDecorator('FinAccountTransTypeId', {
                        initialValue: data.partyIdTo,
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
                        {}
                      </Select>,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={2}>
                    <FormItem label={localConsts.Status}>
                      {getFieldDecorator('statusId', {
                        initialValue: data.partyIdTo,
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
                        {}
                      </Select>,
                      )}
                    </FormItem>
                  </Col>
                   </Row>
                   <Row style={{ marginTop: '15px' }}>
                  <Col span={7} >
                    <FormItem label={localConsts.GlReconciliationId}>
                      {getFieldDecorator('GlReconciliationId', {
                        initialValue: data.partyIdTo,
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
                        {}
                      </Select>,
                      )}
                    </FormItem>
                  </Col>
                
                   </Row>
                   <Row style={{ marginTop: '15px' }}>
                   <Col span={7}>
                <FormItem label={localConsts.FromTransactionDate}>
                  {getFieldDecorator('FromTransactionDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                     
                      disabled={this.state.disabbled1}
                      style={{ width: '295px' }}
                      onChange={this.onChange}
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={7} offset={2}>
                <FormItem label={localConsts.ThruTransactionDate}>
                  {getFieldDecorator('ThruTransactionDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                     
                      disabled={this.state.disabbled1}
                      style={{ width: '295px' }}
                      onChange={this.onChange}
                    />,
                  )}
                </FormItem>
              </Col>
                   </Row>
                   <Row style={{ marginTop: '15px' }}>
                   <Col span={7}>
                <FormItem label={localConsts.FromEntryDate}>
                  {getFieldDecorator('fromDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                     
                      disabled={this.state.disabbled1}
                      style={{ width: '295px' }}
                      onChange={this.onChange}
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={7} offset={2}>
                <FormItem label={localConsts.FromDate_LABEL}>
                  {getFieldDecorator('ThruEntryDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                     
                      disabled={this.state.disabbled1}
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
                   </TabPane>
            <TabPane tab={<p>Bank Reconciliation</p>} key="2">
                  <Row style={{ marginTop: '15px' }}>
                  <Col span={7} >
                    <FormItem label={localConsts.FinAccountTransTypeId}>
                      {getFieldDecorator('FinAccountTransTypeId', {
                        initialValue: data.partyIdTo,
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
                        {}
                      </Select>,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={2}>
                    <FormItem label={localConsts.Status}>
                      {getFieldDecorator('statusId', {
                        initialValue: 'Created',
                        enableReinitialize: true,
                      })(
                        <Input
                        disabled
                        value="Created"
                      />
                        
                      )}
                    </FormItem>
                  </Col>
                   </Row>
                   <Row style={{ marginTop: '15px' }}>
                  <Col span={7} >
                    <FormItem label={localConsts.GlReconciliationId}>
                      {getFieldDecorator('GlReconciliationId', {
                        initialValue: data.partyIdTo,
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
                        {}
                      </Select>,
                      )}
                    </FormItem>
                  </Col>
                
                   </Row>
                   
                   <Row style={{ marginTop: '15px' }}>
                   <Col span={7}>
                <FormItem label={localConsts.FromTransactionDate}>
                  {getFieldDecorator('FromTransactionDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                     
                      disabled={this.state.disabbled1}
                      style={{ width: '295px' }}
                      onChange={this.onChange}
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={7} offset={2}>
                <FormItem label={localConsts.ThruTransactionDate}>
                  {getFieldDecorator('ThruTransactionDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                     
                      disabled={this.state.disabbled1}
                      style={{ width: '295px' }}
                      onChange={this.onChange}
                    />,
                  )}
                </FormItem>
              </Col>
                   </Row>
                   <Row style={{ marginTop: '15px' }}>
                   <Col span={7}>
                <FormItem label={localConsts.FromEntryDate}>
                  {getFieldDecorator('fromDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                     
                      disabled={this.state.disabbled1}
                      style={{ width: '295px' }}
                      onChange={this.onChange}
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={7} offset={2}>
                <FormItem label={localConsts.FromDate_LABEL}>
                  {getFieldDecorator('ThruEntryDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                     
                      disabled={this.state.disabbled1}
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
                   </TabPane>
                   <TabPane tab={<p>Create New</p>} key="3">
                  <Row style={{ marginTop: '15px' }}>
                  <Col span={7} >
                    <FormItem label={localConsts.FinAccountTransTypeId}>
                      {getFieldDecorator('finAccountTransTypeId', {
                        initialValue: data.partyIdTo,
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
                        {}
                      </Select>,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={2}>
                    <FormItem label={localConsts.PartyId}>
                      {getFieldDecorator('partyId', {
                        initialValue: data.partyIdTo,
                        enableReinitialize: true,
                      })(
                        <Input
                      value={this.state.workEffortId}
                      onChange={this.handleWorkEfid}
                      addonAfter={
                        <Icon onClick={this.showDrawer2} type="idcard" />
                      }
                    />,
                      )}
                    </FormItem>
                  </Col>
                   </Row>
                   <Row >
                  <Col span={7} >
                    <FormItem label={localConsts.GlReconciliationId}>
                      {getFieldDecorator('glReconciliationId', {
                        initialValue: data.partyIdTo,
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
                        {}
                      </Select>,
                      )}
                    </FormItem>
                  </Col>
                
                   </Row>
                   <Row style={{ marginTop: '15px' }}>
                   <Col span={7}>
                <FormItem label={localConsts.TransactionDate}>
                  {getFieldDecorator('transactionDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                     
                      disabled={this.state.disabbled1}
                      style={{ width: '295px' }}
                      onChange={this.onChange}
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={7} offset={2}>
                <FormItem label={localConsts.EntryDate}>
                  {getFieldDecorator('entryDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                     
                      disabled={this.state.disabbled1}
                      style={{ width: '295px' }}
                      onChange={this.onChange}
                    />,
                  )}
                </FormItem>
              </Col>
                   </Row>
                   <Row style={{ marginTop: '15px' }}>
                   <Col span={7}>
                <FormItem label={localConsts.Amount	}>
                  {getFieldDecorator('amount', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                    
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={7} offset={2}>
                <FormItem label={localConsts.PaymentId}>
                  {getFieldDecorator('paymentId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                    
                      addonAfter={
                        <Icon onClick={this.showDrawer6} type="idcard" />
                      }
                    />,
                  )}
                </FormItem>
              </Col>
                   </Row>
                   <Row>
                   <Col span={7} >
                <FormItem label={localConsts.OrderId}>
                  {getFieldDecorator('orderId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                      value={this.state.workEffortId}
                    
                      addonAfter={
                        <Icon onClick={this.showDrawer2} type="idcard" />
                      }
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={7} offset={2} >
                <FormItem label={localConsts.OrderItemSeqId}>
                  {getFieldDecorator('orderItemSeqId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                      value={this.state.workEffortId}
                     
              
                    />,
                  )}
                </FormItem>
              </Col>
                    </Row>
                    <Row>
                   <Col span={7} >
                <FormItem label={localConsts.ReasonEnumId}>
                  {getFieldDecorator('reasonEnumId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                      value={this.state.workEffortId}
                    
                    
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={7} offset={2} >
                <FormItem label={localConsts.Comments}>
                  {getFieldDecorator('comments', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                      value={this.state.workEffortId}
                     
              
                    />,
                  )}
                </FormItem>
              </Col>
                    </Row>
                    <Row>
                   <Col span={7} >
                <FormItem label={localConsts.Status}>
                  {getFieldDecorator('statusId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                      value={this.state.workEffortId}
                    
                    
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={7} offset={2} >
                <FormItem label={localConsts.GLAccount}>
                  {getFieldDecorator('glAccountId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Select
                     
              
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
                  onClick = {this.handleSubmit}
                  style={{ marginTop: '14px' }}
                  type="primary"
                >
                  Save
                </Button>
              </Col>
            </Row>
                   </TabPane>
                </Tabs>
                  
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        className={styles.tableContainer}
                        rowKey="id"
                        title={this.tableHeader}
                        columns={tableColumns20}
                        loading={this.state.loading}
                        dataSource={this.state.Trans}
                        size="small"
                        scroll={{ x: 1300 }}
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
                <TabPane tab="Financial Account Role" key="Financial Account Role">
                  <Row style={{ marginTop: '14px' }}>
                    <Col span={6} offset={18}>
                      <div>
                        <span
                          style={{ color: '#337AB7', marginLeft: '24px' }}
                          onClick={this.showDrawer11}
                        >
                          Add Roles
                        </span>
                      </div>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        className={styles.tableContainer}
                        rowKey="id"
                        title={this.tableHeader}
                        columns={tableColumns11}
                        dataSource={this.state.role}
                        loading={this.state.loading}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
                <TabPane tab="Authorizations" key="Authorizations">
                  <Row style={{ marginTop: '14px' }}>

                    <Col span={4} offset={20}>
                      <div>
                        <span
                          style={{ color: '#337AB7', marginLeft: '24px' }}
                          onClick={this.showDrawer12}
                        >
                          Add
                        </span>
                      </div>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        className={styles.tableContainer}
                        rowKey="id"
                        title={this.tableHeader}
                        columns={tableColumns12}
                        loading={this.state.loading}
                        dataSource = {this.state.Auth}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
                <TabPane
                  tab="Deposit Slips"
                  key="Slips"
                >
                <Tabs defaultActiveKey="a" onChange={this.callback}>
                  <TabPane tab={<p>Find Deposit Slips for Financial Account:{this.state.finAccountId}</p>} key="a">
                  <Row style={{ marginTop: '15px' }}>
                  <Col span={9} >
                    <FormItem label={localConsts.PaymentGroupId}>
                      {getFieldDecorator('PaymentGroupId', {
                        initialValue: data.partyIdTo,
                        enableReinitialize: true,
                      })(
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
                  <Col span={9} offset={2}>
                    <FormItem label={localConsts.PaymentGroupName}>
                      {getFieldDecorator('PaymentGroupName', {
                        initialValue: data.partyIdTo,
                        enableReinitialize: true,
                      })(
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
                   </TabPane>
            <TabPane tab={<p>Create New Deposit Slips For Financial Account :{this.state.finAccountId} </p>} key="b">
                  <Row style={{ marginTop: '15px' }}>
                  <Col span={7} >
                    <FormItem label={localConsts.PaymentMethodId_LABEL}>
                      {getFieldDecorator('paymentType', {
                        initialValue: data.partyIdTo,
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
                        {}
                      </Select>,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={2}>
                    <FormItem label={localConsts.CardType}>
                      {getFieldDecorator('CardType', {
                        initialValue: '',
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
                        {}
                      </Select>,
                        
                      )}
                    </FormItem>
                  </Col>
                   </Row>
                   <Row>
                   <Col span={7} >
                    <FormItem label={localConsts.FromPartyID_LABEL}>
                      {getFieldDecorator('PartyId', {
                        initialValue: data.partyIdTo,
                        enableReinitialize: true,
                      })(
                        <Input
                        addonAfter={
                          <Icon onClick={this.showDrawer2} type="idcard" />
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
                     
                      disabled={this.state.disabbled1}
                      style={{ width: '295px' }}
                      onChange={this.onChange}
                    />,
                  )}
                </FormItem>
              </Col>
                   </Row>
                   
                   <Row >
                   <Col span={7}>
                <FormItem label={localConsts.ThroughDate_LABEL}>
                  {getFieldDecorator('ThroughDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                     
                      disabled={this.state.disabbled1}
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
                   </TabPane>

                </Tabs>
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        className={styles.tableContainer}
                        rowKey="id"
                        title={this.tableHeader}
                        columns={tableColumns6}
                        loading={this.state.loading}
                        dataSource={this.state.Trans}
                        size="small"
                        scroll={{ x: 1300 }}
                        rowSelection={rowSelection}
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
                <TabPane
                  tab="Reconciliation"
                  key="Reconciliation"
                >
                <Tabs defaultActiveKey="recA" onChange={this.callback}>
                  <TabPane tab={<p>Find Financial Account Reconciliations for Financial Account:{this.state.finAccountId}</p>} key="recA">
                  <Row style={{ marginTop: '15px' }}>
                  <Col span={9} >
                    <FormItem label={localConsts.GlReconciliationId}>
                      {getFieldDecorator('GlReconciliationId', {
                        initialValue: data.partyIdTo,
                        enableReinitialize: true,
                      })(
                        <Input
                        addonAfter={
                          <Icon onClick={this.showDrawer2} type="idcard" />
                        }
                      />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={9} offset={2}>
                    <FormItem label={localConsts.GlReconciliationName}>
                      {getFieldDecorator('GlReconciliationName', {
                        initialValue: data.partyIdTo,
                        enableReinitialize: true,
                      })(
                        <Input />
                      )}
                    </FormItem>
                  </Col>
                   </Row>
                   <Row >
                  <Col span={9} >
                    <FormItem label={localConsts.Status}>
                      {getFieldDecorator('Status', {
                        initialValue: data.partyIdTo,
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
                        {}
                      </Select>,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={9} offset={2}>
                    <FormItem label={localConsts.OrganizationPartyId}>
                      {getFieldDecorator('OrganizationPartyId', {
                        initialValue: data.partyIdTo,
                        enableReinitialize: true,
                      })(
                        <Input
                        addonAfter={
                          <Icon onClick={this.showDrawer2} type="idcard" />
                        }
                      />,
                      )}
                    </FormItem>
                  </Col>
                   </Row>
                   <Row>
                   <Col span={9} >
                    <FormItem label={localConsts.GLAccountID}>
                      {getFieldDecorator('GLAccountID', {
                        initialValue: data.partyIdTo,
                        enableReinitialize: true,
                      })(
                        <Input
                        addonAfter={
                          <Icon onClick={this.showDrawer5} type="idcard" />
                        }
                      />,
                      )}
                    </FormItem>
                  </Col></Row>
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
                   </TabPane>
            <TabPane tab={<p>Add Financial Account Reconciliations for Financial Account :{this.state.finAccountId} </p>} key="b">
                  <Row style={{ marginTop: '15px' }}>
                  <Col span={7} >
                    <FormItem label={localConsts.GlReconciliationName}>
                      {getFieldDecorator('glReconciliationName', {
                        initialValue: data.partyIdTo,
                        enableReinitialize: true,
                      })(
                      <Input />
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={2}>
                    <FormItem label={localConsts.Description_LABEL}>
                      {getFieldDecorator('description	', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                     
                      <Input />
                        
                      )}
                    </FormItem>
                  </Col>
                   </Row>
                   <Row>
                   <Col span={7} >
                    <FormItem label={localConsts.OrganizationPartyId}>
                      {getFieldDecorator('organizationPartyId', {
                        initialValue: data.partyIdTo,
                        enableReinitialize: true,
                      })(
                        <Input
                        addonAfter={
                          <Icon onClick={this.showDrawer2} type="idcard" />
                        }
                      />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={2}>
                <FormItem label={localConsts.CreatedDate}>
                  {getFieldDecorator('createdDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                     
                      disabled={this.state.disabbled1}
                      style={{ width: '295px' }}
                      onChange={this.onChange}
                    />,
                  )}
                </FormItem>
              </Col>
                   </Row>
                   
                   <Row >
                   <Col span={7}>
                <FormItem label={localConsts.LastModifiedDate}>
                  {getFieldDecorator('lastModifiedDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                     
                      disabled={this.state.disabbled1}
                      style={{ width: '295px' }}
                      onChange={this.onChange}
                    />,

                  )}
                </FormItem>
              </Col>
              <Col span={7} offset={2}>
                <FormItem label={localConsts.OpeningBalance}>
                  {getFieldDecorator('openingBalance', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                    />,
                    
                  )}
                </FormItem>
              </Col>
                   </Row>
                   <Row >
                   <Col span={7}>
                <FormItem label={localConsts.ReconciliationDate}>
                  {getFieldDecorator('reconciledDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                     
                      disabled={this.state.disabbled1}
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
              }}
            >
              <Col span={2} offset={21}>
                {this.state.recUpdate && <Button
                  className="button"
                  onClick = {this.handleSubmit}
                  style={{ marginTop: '14px' }}
                  type="primary"
                >
                  Update
                </Button>}
                {!this.state.recUpdate && <Button
                  className="button"
                  onClick = {this.handleSubmit}
                  style={{ marginTop: '14px' }}
                  type="primary"
                >
                  Add
                </Button>}
              </Col>
            </Row>
                   </TabPane>

                </Tabs>
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        className={styles.tableContainer}
                        rowKey="id"
                        title={this.tableHeader}
                        columns={tableColumns26}
                        loading={this.state.loading}
                        dataSource={this.state.Reco}
                        size="small"
                        scroll={{ x: 1300 }}
                        rowSelection={rowSelection}
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
              </Tabs>
            </TabPane>
            
              </Tabs>
            
          <Drawer
            title={localConsts.PartybyName_title}
            width="709px"
            placement="right"
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
                  size="small"
                  onChange={this.handleStandardTableChange}
                />
              </div>
            </Row>
          </Drawer>
          <Drawer // work here
            title={localConsts.PartybyName_title}
            width="709px"
            placement="right"
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
                  size="small"
                  onChange={this.handleStandardTableChange}
                />
              </div>
            </Row>
          </Drawer>
          <Drawer
            title={localConsts.LookupFacility_title}
            width="709px"
            placement="right"
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
                  size="small"
                  onChange={this.handleStandardTableChange}
                />
              </div>
            </Row>
          </Drawer>
          <Drawer
            title={localConsts.NewAgreementWorkEffort_title}
            width="709px"
            placement="right"
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
            title={localConsts.Roles_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose11}
            visible={this.state.visible11}
          >
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.PartyID_LABEL}>
                  {getFieldDecorator('partyId', {
                    initialValue: this.state.partyId,
                    enableReinitialize: true,
                  })(
                    <Input
                      disabled={this.state.disabbled1}
                      addonAfter={
                        <Icon onClick={this.showDrawer13} type="idcard" />
                      }
                    />, // check drawer
                  )}
                </FormItem>
              </Col>
              <Col span={11}>
                <FormItem label={localConsts.RoleTypeID_LABEL}>
                  {getFieldDecorator('roleTypeId', {})(
                    <Select
                      showSearch
                      value={this.state.roleTypeId}
                      onChange={this.roleTypeIdChange}
                      disabled={this.state.disabbled1}
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
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.FromDate_LABEL}>
                  {getFieldDecorator('fromDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                      onBlur={this.enableSaveButton}
                      disabled={this.state.disabbled1}
                      style={{ width: '295px' }}
                      onChange={this.onChange}
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={11}>
                <FormItem label={localConsts.ThroughDate_LABEL}>
                  {getFieldDecorator('thruDate', {
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
            placement="right"
            closable={true}
            onClose={this.onClose5}
            visible={this.state.visible5}
          >
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.GLAccountID}>
                  {getFieldDecorator('GLAccountID', {
                    initialValue: data.InvoiceDate,
                    enableReinitialize: true,
                  })(
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
              <Col span={8} offset={2}>
                <FormItem label={localConsts.Type}>
                  {getFieldDecorator('Type', {})(
                    <Select
                    showSearch
                    value={this.state.roleTypeId}
                    onChange={this.roleTypeIdChange}
                    disabled={this.state.disabbled1}
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
            <Row gutter={20}>
              <Col span={11}>
              <FormItem label={localConsts.GLAccountClass}>
                  {getFieldDecorator('GLAccountClass', {})(
                    <Select
                    showSearch
                    value={this.state.roleTypeId}
                    onChange={this.roleTypeIdChange}
                    disabled={this.state.disabbled1}
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
              <Col span={11} offset={2}>
                <FormItem label={localConsts.Name}>
                  {getFieldDecorator('GLAccountClass', {})(
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
                  columns={tableColumns_gl}
                  loading={this.state.loading}
                  size="small"
                  onChange={this.handleStandardTableChange}
                />
              </div>
            </Row>
          </Drawer>
         
          <Drawer
            title={localConsts.AgreementGeographicalApplic_title}
            width="709px"
            placement="right"
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
            placement="right"
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
            title ={<p>Financial Account Authority For {this.state.finAccountId} </p>}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose12}
            visible={this.state.visible12}
          >
            <Row gutter={20} style={{ marginTop: '15px' }}>
              <Col span={11}>
                <FormItem label={localConsts.Amount	}>
                  {getFieldDecorator('amount	', {
                    initialValue: data.partyIdFrom,
                    enableReinitialize: true,
                  })(
                    <Input
                      onBlur={this.enableSaveButton}
                      style={{ width: '295px' }}
                     
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={8} offset={2}>
                <FormItem
                  label={localConsts.Currency}
                >
                  {getFieldDecorator('currencyUomId	', {
                    initialValue: data.partyIdTo,
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
            <Row gutter={20}>
              <Col span={11}>
              <FormItem label={localConsts.AuthorizationDate}>
                  {getFieldDecorator('authorizationDate', {
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
              <Col span={8} offset={2}>
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
            </Row>
            <Row gutter={20}>
              <Col span={6}>
              <FormItem label={localConsts.ThroughDate_LABEL}>
                  {getFieldDecorator('thruDate', {
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
            placement="right"
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


                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {TermTypeDropDown}
                    </Select>,
                  )}
                </FormItem>
              </Col>
              <Col span={8} offset={2}>
                <FormItem label={localConsts.UOM}>
                  {getFieldDecorator('uomId', {})(
                    <Select
                      showSearch
                      style={{ width: '295px' }}
                      value={this.state.invoiceItemTypeId}

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
              <Col span={6}>
                <FormItem label={localConsts.value}>
                  {getFieldDecorator('termValue', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input
                      type="text"
                      value={this.state.sequenceNum}

                      style={{ width: '295px' }}
                      onBlur={this.checkIsExists}
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>


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
            placement="right"
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
                      onBlur={this.checkIsExists}
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
            placement="right"
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
                  rowKey="id"
                  title={this.tableHeader}
                  columns={tableColumns1}
                  loading={this.state.loading}
                  size="small"
                  onChange={this.handleStandardTableChange}
                />
              </div>
            </Row>
          </Drawer>
          <Drawer
            title={localConsts.LookupWorkEffortbyName_title}
            width="709px"
            placement="right"
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
                  rowKey="id"
                  title={this.tableHeader}
                  columns={tableColumns14}
                  loading={this.state.loading}
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
        </Form>
      </Fragment>
    );
  }
}
FinancialAccountForm.propTypes = {
  dispatch: PropTypes.func,
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
  connect(({ FinancialAccount }) => ({
    Trans : FinancialAccount.reducerSaveFinTrans,
    Data: FinancialAccount.reducerSave,
    Role: FinancialAccount.reducerSaveRoles,
    Auth : FinancialAccount.reducerSaveFAauth,
    Reco: FinancialAccount.reducersaveReco,
    AgreementItem: FinancialAccount.reducerSaveAgreementItem,
    AgreementWorkEffort: FinancialAccount.reducerSaveAgreementWorkEffort,
  }))(FinancialAccountForm),
);
