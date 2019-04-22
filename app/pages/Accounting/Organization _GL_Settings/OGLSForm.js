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
  Popconfirm,
  DatePicker,
  Row,
  Table,
  Upload,
  Select,
  Button,
  Icon,
  Drawer,
  Card, Tag,
  Popover,
} from 'antd';
import * as actionConsts from '../../../common/TitlePane/ActionConsts';
import { Link } from 'react-router-dom'
import * as localConsts from './OGLSConsts';
import styles from '../../../common/Styles.less';
const FormItem = Form.Item;
const { TabPane } = Tabs;
const InputGroup = Input.Group;
const CheckboxGroup = Checkbox.Group;
const newObject = {};
const CheckableTag = Tag.CheckableTag;
class OGLSForm extends Component {
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
      JOU: [],
      Description: '',
      paymentTypeId: 'NA',
      FAGL: [{ fixedAssetId: 'NA', }],
      TP: [{ customTimePeriodId: 'NA', }],
      PTGL: [{ paymentTypeId: 'NA', }],
      TGL: [{ taxAuthGeoId: 'NA', }],
      SI: [{ Description: 'NA' }],
      VGL: [{ varianceReasonId: 'NA' }],
      glJournalId: '', productCategoryId: '',
      PGA: [{ productCategoryId: 'NA' }],
      GLAT: [{ glAccountTypeId: 'NA' }],
      CCGL: [{ cardType: 'NA' }],
      PGA: [{ productId: 'NA' }],
      PGAC: [{ productCategoryId: 'NA' }],
      paymentMethodTypeId: '',
      PMGL: [{ paymentMethodTypeId: 'NA' }],
      FAGL: [{ finAccountTypeId: 'NA' }],
      CCGL: [{ cardType: 'NA' }],
      glAccountTypeId: [],
      agreementText: '',
      down: true,
      sequenceNum: '',
      fromDate: moment(),
      thruDate: moment(),
      tagsFromServer: [
        'Duplicate Accounting Transaction', 'Revert Accounting Transaction', ' PDF', 'Complete transaction fields', 'Verify Transaction', 'Post Transaction'


      ],
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
      invoiceId: 'Your Company Name Here [Company]',
      partyId: '',
      geoId: 'CH-AG',
      facilityId: 'MyRetailStore',
      workEffortId: '9002',
      agreementItemSeqId: '',
      contentTypeId: '',
      statusId: '',
      agreementContentTypeId: '',
      uploadedFile: '',
      key: this.props.key,
      activeKey: '2',
      copyAgreementTerms: 'Y',
      copyAgreementProducts: 'Y',
      copyAgreementParties: 'Y',
      copyAgreementFacilities: 'Y',
      checked: true,
      agreementTerm: [],
      Update: false,
      agreementItem: [],
      agreementItemUpdate: false,
      agreementWorkEffort: [],
      visible14: false,
      disabled: false,
      disabled1: false,
      role: [{ pmt: 'NA' }],
      visible13: false,
      visible43: false,
      visible15: false,
      visible16: false,
      visible17: false,
      visible18: false,
      visible19: false,
      visible20: false,
      visible21: false,
      visible22: false,
      visible23: false,
      visible24: false,
      visible25: false,
      visible26: false,
      visible27: false,
      visible29: false,
      visible30: false,
      visible31: false,
      visible32: false,
      visible33: false,
      visible34: false,
      visible35: false,
      showUpdate: true,
      productId: 'FORKLIFT_BATTERY'
    };
  }
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
  iconChange = () => {
    if (!this.state.down) this.setState({ down: true });
    if (this.state.down) this.setState({ down: false });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  showDrawer30 = () => {
    this.setState({
      visible30: true,
    });
  };
  onClose30 = () => {
    this.setState({
      visible30: false,
    });
  };
  showDrawer31 = () => {
    this.setState({
      visible31: true,
    });
  };
  onClose31 = () => {
    this.setState({
      visible31: false,
    });
  };
  showDrawer32 = () => {
    this.setState({
      visible32: true,
    });
  };
  onClose32 = () => {
    this.setState({
      visible32: false,
    });
  };
  showDrawer33 = () => {
    this.setState({
      visible33: true,
    });
  };
  onClose33 = () => {
    this.setState({
      visible33: false,
    });
  };
  showDrawer34 = () => {
    this.setState({
      visible34: true,
    });
  };
  onClose34 = () => {
    this.setState({
      visible34: false,
    });
  };
  showDrawer35 = () => {
    this.setState({
      visible35: true,
    });
  };
  onClose35 = () => {
    this.setState({
      visible35: false,
    });
  };
  showDrawer31 = () => {
    this.setState({
      visible31: true,
    });
  };
  onClose31 = () => {
    this.setState({
      visible31: false,
    });
  };
  showDrawer17 = () => {
    this.setState({
      visible17: true,
    });
  };
  onClose17 = () => {
    this.setState({
      visible17: false,
    });
  };
  showDrawer18 = () => {
    this.setState({
      visible18: true,
    });
  };
  onClose18 = () => {
    this.setState({
      visible18: false,
    });
  };
  showDrawer19 = () => {
    this.setState({
      visible19: true,
    });
  };
  onClose19 = () => {
    this.setState({
      visible19: false,
    });
  };
  showDrawer20 = () => {
    this.setState({
      visible20: true,
    });
  };
  onClose20 = () => {
    this.setState({
      visible20: false,
    });
  };
  showDrawer21 = () => {
    this.setState({
      visible21: true,
    });
  };
  onClose21 = () => {
    this.setState({
      visible21: false,
    });
  };
  showDrawer22 = () => {
    this.setState({
      visible22: true,
    });
  };
  onClose22 = () => {
    this.setState({
      visible22: false,
    });
  };
  showDrawer23 = () => {
    this.setState({
      visible23: true,
    });
  };
  onClose23 = () => {
    this.setState({
      visible23: false,
    });
  };
  showDrawer43 = () => {
    this.setState({
      visible43: true,
    });
  };
  onClose43 = () => {
    this.setState({
      visible43: false,
    });
  };
  showDrawer24 = () => {
    this.setState({
      visible24: true,
    });
  };
  onClose24 = () => {
    this.setState({
      visible24: false,
    });
  };
  showDrawer25 = () => {
    this.setState({
      visible25: true,
    });
  };
  onClose25 = () => {
    this.setState({
      visible25: false,
    });
  };
  showDrawer26 = () => {
    this.setState({
      visible26: true,
    });
  };
  onClose26 = () => {
    this.setState({
      visible26: false,
    });
  };
  showDrawer27 = () => {
    this.setState({
      visible27: true,
    });
  };
  onClose27 = () => {
    this.setState({
      visible27: false,
    });
  };
  showDrawer29 = () => {
    this.setState({
      visible29: true,
    });
  };
  onClose29 = () => {
    this.setState({
      visible29: false,
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
  showDrawer14 = () => {
    this.setState({
      visible14: true,
    });
  };
  onClose14 = () => {
    this.setState({
      visible14: false, actionDeleteVGL
    });
  };
  showDrawer15 = () => {
    this.setState({
      visible15: true,
    });
  };
  onClose15 = () => {
    this.setState({
      visible15: false,
    });
  };
  showDrawer16 = () => {
    this.setState({
      visible16: true,
    });
  };
  onClose16 = () => {
    this.setState({
      visible16: false,
    });
  };
  onChange(date, dateString) {
    console.log(date, dateString);
  }

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
    }); actionDeleteVGL
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
    if (nextProps.currentAction === 'new') {
      this.setState({ disabled: true, disabled1: false, activeKey: '2' });
    }
    if (nextProps.currentAction == 'view' && this.state.activeKey != '1') {
      this.setState({ disabled: false, disabled1: true, activeKey: '1', key: 'Accounting Preferenceses' });
    }
    if (nextProps.AgreementTerm != undefined) {
      var tmp = [];
      tmp.push({ agreementTermId: nextProps.AgreementTerm.agreementTermId });
      this.setState({ agreementTerm: tmp });
    }
    if (nextProps.JOU != undefined) {
      var tmp = [];
      tmp.push({
        glJournalId: nextProps.JOU.glJournalId,
      });
      this.setState({ JOU: tmp, glJournalId: tmp.glJournalId });
    }
    if (nextProps.GLAT != undefined) {
      var tmp = [];
      tmp.push({
        glJournalId: nextProps.GLAT.glJournalId,
      });
      this.setState({ GLAT: tmp, glJournalId: tmp.glJournalId });
    }
    if (nextProps.PGA != undefined) {
      var tmp = [];
      tmp.push({
        productId: this.state.productId,
      });
      this.setState({ PGA: tmp, glJournalId: this.state.productId });
    }
    if (nextProps.PMGL != undefined) {
      var tmp = [];
      tmp.push({
        paymentMethodTypeId: this.state.paymentMethodTypeId,
      });
      this.setState({ PMGL: tmp, paymentMethodTypeId: this.state.paymentMethodTypeId });
    }
    if (nextProps.CCGL != undefined) {
      var tmp = [];
      tmp.push({
        cardType: this.state.cardType,
      });
      this.setState({ CCGL: tmp, cardType: this.state.cardType });
    }
    if (nextProps.PTGL != undefined) {
      var tmp = [];
      tmp.push({
        paymentTypeId: this.state.paymentTypeId,
      });
      this.setState({ PTGL: tmp, paymentTypeId: this.state.paymentTypeId });
    }
    if (nextProps.SI != undefined) {
      var tmp = [];
      tmp.push({
        Description: this.state.Description,
      });
      this.setState({ SI: tmp, Description: this.state.Description });
    }
    if (nextProps.PGAC != undefined) {
      var tmp = [];
      tmp.push({
        productCategoryId: this.state.productCategoryId,
      });
      this.setState({ PGAC: tmp, glJournalId: this.state.productCategoryId });
    }
    if (nextProps.AgreementWorkEffort != undefined) {
      this.setState({ agreementWorkEffort: [] });
    }
    if (nextProps.Data.agreementId != 'undefined')
      this.setState({ agreementId: nextProps.Data.agreementId });
    if (
      currentAction === actionConsts.ACTION_TYPE_EDIT ||
      currentAction === actionConsts.ACTION_TYPE_VIEW
    ) {
      if (nextProps.data) {
        if (nextProps.data.contactAddresses !== null) {
          nextProps.data.contactAddresses.forEach(
            (value, index) => (value.id = index + 1),
          );
        } else {
          nextProps.data.contactAddresses = [];
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
  }
  componentDidMount() {
    this.props.setClick(() => {
      // this.clearFormFieds();
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
    console.log('hi');
    this.props.form.validateFields((errors, fieldsValue) => {
      console.log(errors)
      if (!errors) {
        this.setState({ currentKey: this.state.key });
        const activeKey = this.state.activeKey;
        const key = this.state.key;
        console.log(key, activeKey);
        const agreementTermUpdate = this.state.agreementTermUpdate;
        const agreementItemUpdate = this.state.agreementItemUpdate;
        if (!key) this.setState({ key: 'Accounting Preferenceses' });
        if (activeKey === '2') {
          // const values = {
          //   ...fieldsValue,
          //   fromDate: fieldsValue['fromDate'].format('YYYY-MM-DD'),
          //   agreementDate: fieldsValue['agreementDate'].format('YYYY-MM-DD'),
          //   thruDate: fieldsValue['thruDate'].format('YYYY-MM-DD'),
          // };
          var obj = {
            organizationPartyId: 'selected',

          };
          this.props.handleSubmitAction(
            actionConsts.ACTION_TYPE_SAVE,
            obj,
          );
        }
        if (activeKey === '1') {
          console.log(activeKey, key)
          if (key === 'Accounting Preferenceses') {
            console.log(activeKey, key)
            // const values = {
            //   ...fieldsValue,
            //   fromDate: fieldsValue['fromDate'].format('YYYY-MM-DD'),
            //   agreementDate: fieldsValue['agreementDate'].format('YYYY-MM-DD'),
            //   thruDate: fieldsValue['thruDate'].format('YYYY-MM-DD'),
            // };
            var obj = {
              partyId: 'Company',
              errorGlJournalId: 'ERROR_JOURNAL',
              refundPaymentMethodId: 'PETTY_CASH',

            };
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE,
              obj,
            );
          }
          if (
            activeKey === '1' &&
            key === 'Chart of Accounts'

          )
          // console.log(fieldsValue);
          {
            const values = {
              ...fieldsValue,
              fromDate: fieldsValue['fromDate'].format('YYYY-MM-DD'),
              // thruDate: fieldsValue['thruDate'].format('YYYY-MM-DD'),actionDeleteVGL
            };
            var obj = {
              glAccountId: '121800',
              organizationPartyId: 'Company',

              fromDate: values.fromDate,
              // thruDate: values.thruDate,

              // description: values.description,
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_ORG,
              obj,
            );
          }
          if (
            activeKey === '1' &&
            key === 'Journals' &&
            this.state.Update === false
          ) {
            const values = {
              ...fieldsValue,
              // fromDate: fieldsValue['fromDate'].format('YYYY-MM-DD'),
              // thruDate: fieldsValue['thruDate'].format('YYYY-MM-DD'),
            };
            var obj = {
              glJournalName: values.glJournalName,
              organizationPartyId: 'Company',

            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_JOU,
              obj,
            );
            console.log(obj);
            this.setState({ Update: false });
          }
          if (
            activeKey === '1' &&
            key === 'Journals' &&
            this.state.Update === true
          ) {

            console.log('hi');
            const values = {
              ...fieldsValue,
              // fromDate: fieldsValue['fromDate'].format('YYYY-MM-DD'),
              // thruDate: fieldsValue['thruDate'].format('YYYY-MM-DD'),
            };
            var obj = {
              glJournalId: this.state.JOU[0].glJournalId,
              glJournalName: values.glJournalName,
              organizationPartyId: 'Company',

            };


            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_JOU,
              obj,
            );
            this.setState({ Update: false });
          }


          if (key === 'GL Account defaults') {
            var obj = {
              glAccountTypeId: 'ACCOUNTS_PAYABLE',
              organizationPartyId: 'Company',

              glAccountId: '210000',

            };
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_GLAT,
              obj,
            );
          }
          if (key === 'Product GL Accounts' && this.state.Update === false) {
            var obj = {
              productId: this.state.productId,
              organizationPartyId: 'Company',
              glAccountId: '100000',
              glAccountTypeId: 'ACCOUNTS_PAYABLE',

            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_PGA,
              obj,
            );
          }
          if (key === 'Product Category Gl Account' && this.state.Update === false) {
            var obj = {
              productCategoryId: '200',
              organizationPartyId: 'Company',
              glAccountId: '100000',
              glAccountTypeId: 'ACCOUNTS_PAYABLE',

            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_PGAC,
              obj,
            );
            this.setState({ productCategoryId: obj.productCategoryId })
          }
          if (key === 'Product Category Gl Account' && this.state.Update === true) {
            var obj = {
              productCategoryId: this.state.productCategoryId,
              organizationPartyId: 'Company',
              glAccountId: '100000',
              glAccountTypeId: 'ACCOUNTS_PAYABLE',

            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_PGAC,
              obj,
            );
          }

          if (key === 'Variance Reason Gl Accounts' && this.state.Update === false) {
            var obj = {
              varianceReasonId: 'VAR_DAMAGED',
              organizationPartyId: 'Company',
              glAccountId: '100000',
              // glAccountTypeId: 'ACCOUNTS_PAYABLE',

            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_VGL,
              obj,
            );
            this.setState({ varianceReasonId: obj.varianceReasonId })
          }

          if (key === 'Time Period' && this.state.Update === true) {
            var obj = {
              customTimePeriodId: this.state.customTimePeriodId,
              parentPeriodId: '6011',
              periodTypeId: 'FISCAL_BIWEEK',
              // periodNum: values.periodNum,
              // periodName: values.periodName,
              // periodNum: values.periodNum,
              isClosed: 'N',

            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_TP,
              obj,
            );
          }

          if (key === 'Time Period' && this.state.Update === false) {
            var obj = {
              // customTimePeriodId: this.state.customTimePeriodId,
              parentPeriodId: '6011',
              periodTypeId: 'FISCAL_BIWEEK',
              // periodNum: values.periodNum,
              // periodName: values.periodName,
              // periodNum: values.periodNum,
              isClosed: 'N',
            };
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_TP,
              obj,
            );

          }

          if (key === 'Variance Reason Gl Accounts' && this.state.Update === true) {
            var obj = {
              varianceReasonId: 'VAR_DAMAGED',
              organizationPartyId: 'Company',
              glAccountId: '100000',
              // glAccountTypeId: 'ACCOUNTS_PAYABLE',


            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_VGL,
              obj,
            );
          }
          if (key === 'GL Account defaults') {
            var obj = {
              glAccountTypeId: 'ACCOUNTS_PAYABLE',
              organizationPartyId: 'Company',

              glAccountId: '210000',

            };
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_GLAT,
              obj,
            );
          }
          if (key === 'Product GL Accounts' && this.state.Update === true) {
            var obj = {
              productId: this.state.productId,
              organizationPartyId: 'Company',
              glAccountId: '100000',
              glAccountTypeId: 'ACCOUNTS_PAYABLE',

            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_PGA,
              obj,
            );
            this.setState({ Update: false });
          }
          if (key === 'FinAccount Type Gl Account' && this.state.Update === false) {
            var obj = {
              finAccountTypeId: 'BANK_ACCOUNT',
              organizationPartyId: 'Company',
              glAccountId: '100000',

            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_FAGL,
              obj,
            );
          }
          if (key === 'FinAccount Type Gl Account' && this.state.Update === true) {
            var obj = {
              finAccountTypeId: 'BANK_ACCOUNT',
              organizationPartyId: 'Company',
              glAccountId: '100000',

            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_FAGL,
              obj,
            );
            this.setState({ Update: false, finAccountTypeId: 'BANK_ACCOUNT' })
          }



          if (key === 'Sales Invoice') {
            var obj = {
              invoiceItemTypeId: 'INV_ADD_FEATURE',
              organizationPartyId: 'Company',
              glAccountId: '400000',

            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_SI,
              obj,
            );
          }
          if (key === 'Purchase Invoice') {
            var obj = {
              invoiceItemTypeId: 'INV_ADD_FEATURE',
              organizationPartyId: 'Company',
              glAccountId: '400000',

            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_SI,
              obj,
            );
          }
          if (key === 'Products') {
            var obj = {
              agreementId: this.state.agreementId,
              productId: 'SV-1000',
              glAccountTypeId: 'ACCOUNTS_PAYABLE',

            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_AGREEMENT_PRODUCTS,
              obj,
            );
          }
          if (key === 'Payment Type/Gl Account Type Id') {
            var obj = {
              organizationPartyId: 'Company',
              paymentTypeId: 'CUSTOMER_DEPOSIT',
              glAccountTypeId: 'ACCOUNTS_PAYABLE',
            };
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_PTGL,
              obj,
            );
            this.setState({ paymentTypeId: obj.paymentTypeId });
          }
          if (key === 'Payment Method Id/GL Account ID') {
            var obj = {
              organizationPartyId: 'Company',
              paymentMethodTypeId: 'EXT_BILLACT',
              glAccountId: '100000',
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_PMGL,
              obj,
            );
            this.setState({ paymentTypeId: obj.paymentTypeId });
          }
          if (key === 'Variance Reason Gl Accounts' && this.state.Update === false) {
            var obj = {
              varianceReasonId: 'VAR_DAMAGED',
              organizationPartyId: 'Company',
              glAccountId: '100000',
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_VGL,
              obj,
            );
            this.setState({ varianceReasonId: obj.varianceReasonId });
          }
          if (key === 'Variance Reason Gl Accounts' && this.state.Update === true) {
            var obj = {
              varianceReasonId: 'VAR_DAMAGED',
              organizationPartyId: 'Company',
              glAccountId: '100000',
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_VGL,
              obj,
            );
            this.setState({ varianceReasonId: obj.varianceReasonId });
          }
          if (key === 'TaxAuthority GL Accounts' && this.state.Update === false) {
            var obj = {
              taxAuthGeoId: '',
              taxAuthPartyId: 'BGR_TA',
              organizationPartyId: 'Company',
              glAccountId: '100000',
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_TGL,
              obj,
            );
            this.setState({ taxAuthGeoId: obj.taxAuthGeoId });
          }
          if (key === 'TaxAuthority GL Accounts' && this.state.Update === true) {
            var obj = {
              taxAuthGeoId: '',
              taxAuthPartyId: 'BGR_TA',
              organizationPartyId: 'Company',
              glAccountId: '100000',
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_TGL,
              obj,
            );
            this.setState({ taxAuthGeoId: obj.taxAuthGeoId });
          }

          if (key === 'Credit Card Type GlAccount' && this.state.Update === false) {
            var obj = {
              cardType: 'CCT_AMERICANEXPRESS',
              glAccountId: '100000',
              organizationPartyId: 'Company',
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_CCGL,
              obj,
            );
          }
          if (key === 'Credit Card Type GlAccount' && this.state.Update === true) {
            var obj = {
              cardType: 'CCT_AMERICANEXPRESS',
              glAccountId: '100000',
              organizationPartyId: 'Company',
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_CCGL,
              obj,
            );
          }

          if (key === 'Party Gl Accounts' && this.state.Update === false) {
            var obj = {
              roleTypeId: 'ACCOUNT',
              glAccountTypeId: 'ACCOUNTS_PAYABLE',
              glAccountId: '100000',
              organizationPartyId: 'Company',
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_PGL,
              obj,
            );
          }
          if (key === 'Party Gl Accounts' && this.state.Update === true) {
            var obj = {
              roleTypeId: 'ACCOUNT',
              glAccountTypeId: 'ACCOUNTS_PAYABLE',
              glAccountId: '100000',
              organizationPartyId: 'Company',

            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_PGL,
              obj,
            );
          }
          if (activeKey === '3' && key === '3') {
            var obj = {
              glReconciliationId: '10003',
              glReconciliationName: values.description,
              description: values.description,
              createdDate: values.createdDate.format('YYYY-MM-DD'),
              lastModifiedDate: values.lastModifiedDate.format('YYYY-MM-DD'),
              glAccountId: '',
              statusId: 'GLREC_CREATED',
              organizationPartyId: 'Company',
              reconciledBalance: values.reconciledBalance,
              reconciledBalance: values.reconciledBalance,
              openingBalance: values.openingBalance,
              reconciledDate: values.reconciledDate.format('YYYY-MM-DD'),
            };
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_AR,
              obj,
            );
          }
          if (key === 'Agreement Roles') {
            var obj = {
              agreementId: this.state.agreementId,
              partyId: this.state.partyId,
              roleTypeId: 'Person',
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_AGREEMENT_ROLES,
              obj,
            );
          }
          if (key === 'Fixed Asset Type Gl Mappings') {
            var obj = {
              assetGlAccountId: '',
              profitGlAccountId: '',
              lossGlAccountId: '',
              fixedAssetTypeId: '_NA_',
              fixedAssetId: '_NA_',

              organizationPartyId: 'Company',
            };
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_FATGL,
              obj,
            );
          }
        } if (activeKey === '3' && key === 'Account Reconciliation') {
          var obj = {
            glReconciliationId: '10003',
            glReconciliationName: values.description,
            description: values.description,
            createdDate: values.createdDate.format('YYYY-MM-DD'),
            lastModifiedDate: values.lastModifiedDate.format('YYYY-MM-DD'),
            glAccountId: '',
            statusId: 'GLREC_CREATED',
            organizationPartyId: 'Company',
            reconciledBalance: values.reconciledBalance,
            reconciledBalance: values.reconciledBalance,
            openingBalance: values.openingBalance,
            reconciledDate: values.reconciledDate.format('YYYY-MM-DD'),
          };
          console.log(obj);
          this.props.handleSubmitAction(
            actionConsts.ACTION_TYPE_UPDATE_AR,
            obj,
          );
        }
        if (activeKey === '3' && key === 'Accounting Transactions' && this.state.Update === false && this.state.msg === AR) {
          var obj = {
            acctgTransTypeId: this.state.acctgTransTypeId,
            description: values.description,
            transactionDate: values.transactionDate.format('YYYY-MM-DD'),
            scheduledPostingDate: values.scheduledPostingDate.format('YYYY-MM-DD'),
            glJournalId: values.glJournalId,
            glFiscalTypeId: values.glFiscalTypeId,
            groupStatusId: varlues.groupStatusId,
            fixedAssetId: varlues.fixedAssetId,
            inventoryItemId: varlues.inventoryItemId,
            physicalInventoryId: values.physicalInventoryId,
            partyId: values.partyId,
            roleTypeId: values.roleTypeId,
            invoiceId: values.invoiceId,
            paymentId: values.paymentId,
            finAccountTransId: values.finAccountTransId,
            shipmentId: values.shipmentId,
            receiptId: values.receiptId, workEffortId: values.workEffortId,
            theirAcctgTransId: values.theirAcctgTransId,
            voucherDate: values.voucherDate.format('YYYY-MM-DD'),
            createdDate: values.createdDate.format('YYYY-MM-DD'),

            lastModifiedDate: values.lastModifiedDate.format('YYYY-MM-DD'),


          };
          this.props.handleSubmitAction(
            actionConsts.ACTION_TYPE_SAVE_AT,
            obj,
          );
        }
        if (activeKey === '3' && key === 'Accounting Transactions' && this.state.Update === true && this.state.msg === AR) {
          var obj = {
            acctgTransTypeId: this.state.acctgTransTypeId,
            description: values.description,
            transactionDate: values.transactionDate.format('YYYY-MM-DD'),
            scheduledPostingDate: values.scheduledPostingDate.format('YYYY-MM-DD'),
            glJournalId: values.glJournalId,
            glFiscalTypeId: values.glFiscalTypeId,
            groupStatusId: varlues.groupStatusId,
            fixedAssetId: varlues.fixedAssetId,
            inventoryItemId: varlues.inventoryItemId,
            physicalInventoryId: values.physicalInventoryId,
            partyId: values.partyId,
            roleTypeId: values.roleTypeId,
            invoiceId: values.invoiceId,
            paymentId: values.paymentId,
            finAccountTransId: values.finAccountTransId,
            shipmentId: values.shipmentId,
            receiptId: values.receiptId, workEffortId: values.workEffortId,
            theirAcctgTransId: values.theirAcctgTransId,
            voucherDate: values.voucherDate.format('YYYY-MM-DD'),
            createdDate: values.createdDate.format('YYYY-MM-DD'),

            lastModifiedDate: values.lastModifiedDate.format('YYYY-MM-DD'),


          };
          this.props.handleSubmitAction(
            actionConsts.ACTION_TYPE_SAVE_QAT,
            obj,
          );
          this.setState({ Update: false });
        }

        if (activeKey === '3' && key === 'Accounting Transactions' && this.state.Update === false && this.state.msg === QAR) {
          var obj = {
            acctgTransTypeId: this.state.acctgTransTypeId,
            description: values.description,
            transactionDate: values.transactionDate.format('YYYY-MM-DD'),
            scheduledPostingDate: values.scheduledPostingDate.format('YYYY-MM-DD'),
            glJournalId: values.glJournalId,
            glFiscalTypeId: values.glFiscalTypeId,
            groupStatusId: varlues.groupStatusId,
            fixedAssetId: varlues.fixedAssetId,
            inventoryItemId: varlues.inventoryItemId,
            physicalInventoryId: values.physicalInventoryId,
            partyId: values.partyId,
            roleTypeId: values.roleTypeId,
            invoiceId: values.invoiceId,
            paymentId: values.paymentId,
            finAccountTransId: values.finAccountTransId,
            shipmentId: values.shipmentId,
            receiptId: values.receiptId, workEffortId: values.workEffortId,
            theirAcctgTransId: values.theirAcctgTransId,
            voucherDate: values.voucherDate.format('YYYY-MM-DD'),
            createdDate: values.createdDate.format('YYYY-MM-DD'),

            lastModifiedDate: values.lastModifiedDate.format('YYYY-MM-DD'),


          };
          this.props.handleSubmitAction(
            actionConsts.ACTION_TYPE_SAVE_QAT,
            obj,
          );
        }
        if (activeKey === '3' && key === 'Accounting Transactions' && this.state.Update === true && this.state.msg === QAR) {
          var obj = {
            acctgTransTypeId: this.state.acctgTransTypeId,
            description: values.description,
            transactionDate: values.transactionDate.format('YYYY-MM-DD'),
            scheduledPostingDate: values.scheduledPostingDate.format('YYYY-MM-DD'),
            glJournalId: values.glJournalId,
            glFiscalTypeId: values.glFiscalTypeId,
            groupStatusId: varlues.groupStatusId,
            fixedAssetId: varlues.fixedAssetId,
            inventoryItemId: varlues.inventoryItemId,
            physicalInventoryId: values.physicalInventoryId,
            partyId: values.partyId,
            roleTypeId: values.roleTypeId,
            invoiceId: values.invoiceId,
            paymentId: values.paymentId,
            finAccountTransId: values.finAccountTransId,
            shipmentId: values.shipmentId,
            receiptId: values.receiptId, workEffortId: values.workEffortId,
            theirAcctgTransId: values.theirAcctgTransId,
            voucherDate: values.voucherDate.format('YYYY-MM-DD'),
            createdDate: values.createdDate.format('YYYY-MM-DD'),

            lastModifiedDate: values.lastModifiedDate.format('YYYY-MM-DD'),


          };
          this.props.handleSubmitAction(
            actionConsts.ACTION_TYPE_SAVE_AT,
            obj,
          );
          this.setState({ Update: false });
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
  callback = (key) => {
    this.setState({ key: key, });
    if (key === '3' || key === '1')
      this.setState({ activeKey: key, });
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
    const { getFieldDecorator } = this.props.form;
    const { currentAction } = this.props;
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
    const { selectedTags } = this.state;
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
    const tableColumns15 = [
      {
        title: 'Product Category Id	',
        dataIndex: 'productCategoryId',
        id: 'productCategoryId',
        render: text => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({ Update: true });
                this.showDrawer15();
                // this.props.toggleView();
              }}
            >
              {text}
            </Button>
          );
        },
      },
      {
        title: 'Gl Account Type Id	 ',
        dataIndex: 'Description',
      },
      {
        title: 'GL Account	 ',
        dataIndex: 'Total',
      },

      {
        title: ' Marketing Campaign Id ',
        dataIndex: 'Amount_Applied',
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
                  organizationPartyId: 'Company',
                  productCategoryId: this.state.productCategoryId,
                  glAccountTypeId: '100000'
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_PGAC_DELETE,
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
    const tableColumns16 = [
      {
        title: 'Fin Account Type Id	',
        dataIndex: 'finAccountTypeId',
        id: 'finAccountTypeId',
        render: text => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({ Update: true });
                this.showDrawer16();
                // this.props.toggleView();
              }}
            >
              {text}
            </Button>
          );
        },
      },
      {
        title: 'GL Account ID		 ',
        dataIndex: 'Description',
      },
      {
        title: 'GL Account	 ',
        dataIndex: 'Total',
      },

      {
        title: ' Marketing Campaign Id ',
        dataIndex: 'Amount_Applied',
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
                  organizationPartyId: '',
                  finAccountTypeId: this.state.finAccountTypeId,
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_FAGL_DELETE,
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
    const tableColumns17 = [
      {
        title: 'Description',
        dataIndex: 'tableColumns17',
        id: 'tableColumns17',
        render: text => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                // this.setState({ Update: true });
                // this.showDrawer16();
                // this.props.toggleView();
              }}
            >
              {text}
            </Button>
          );
        },

      },
      {
        title: 'Default Gl Account Id	 ',
        dataIndex: 'Description',
      },
      {
        title: 'Override Gl Account Id	',
        dataIndex: 'Total',
      },

      {
        title: ' Active Gl Description	',
        dataIndex: 'Amount_Applied',
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
                  organizationPartyId: 'Company',
                  invoiceItemTypeId: this.state.invoiceItemTypeId,
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_SI_DELETE,
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
    const tableColumns19 = [
      {
        title: 'Payment Type	',
        dataIndex: 'paymentTypeId',
        id: 'paymentTypeId',
        render: text => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                // this.setState({ Update: true });
                // this.showDrawer16();
                // this.props.toggleView();
              }}
            >
              {text}
            </Button>
          );
        },


      },
      {
        title: 'Gl Account Type	',
        dataIndex: 'glAccountTypeId',
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
                  paymentTypeId: this.state.paymentTypeId,
                  organizationPartyId: 'Company',
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_PTGL_DELETE,
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
    const tableColumns30 = [
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
    const tableColumns37 = [
      {
        title: 'Payment Id	',
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: 'Party To	',
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: 'Amount',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Effective Date	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Reference No	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
    ];
    const tableColumns36 = [
      {
        title: 'Payment Id	',
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: 'Party To	',
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: 'Amount',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Effective Date	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },

    ];
    const tableColumns39 = [
      {
        title: 'Account Code	',
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: 'Account Name	',
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: 'Opening D	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Opening C	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Dr',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Cr',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Closing D	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Closing C	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },


    ];
    const tableColumns40 = [
      {
        title: 'Account Code	',
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: 'Account Name	',
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: 'Balance',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },


    ];
    const tableColumns44 = [
      {
        title: 'Account Code	',
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: 'Account Name	',
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: 'Balance1',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Balance1',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },


    ];
    const tableColumns45 = [
      {
        title: 'Total Name	',
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: 'Period1',
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: 'Period2',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },

    ];
    const tableColumns42 = [
      {
        title: 'Account Code	',
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: 'Account Name	',
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: 'Total Debit (Receipts)	',
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: 'Total Credit (Disbursement)	',
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: 'Balance',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },


    ];
    const tableColumns43 = [
      {
        title: 'Product Id		',
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: 'Unit Cost		',
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: 'Accounting Quantity Sum	',
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: 'Value',
        dataIndex: 'Description',
        id: 'Description',
      },



    ];
    const tableColumns47 = [



    ];
    const tableColumns46 = [
      {
        title: 'Account Code	',
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: 'Account Name	',
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: 'Period 1 Debit (Receipts)		',
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: 'Period 1 Credit (Disbursement)	',
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: 'Balance1',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Period 2 Debit (Receipts)	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Period 2 Credit (Disbursement)	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Balance1',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },


    ];
    const tableColumns41 = [
      {
        title: 'Total',
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },

      {
        title: 'Balance',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },


    ];
    const tableColumns35 = [
      {
        title: 'Acctg Trans Entry Seq Id	',
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: 'Gl Account Id	',
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: 'Gl Account Type	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Party Id	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Product Id	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Reconcile Status	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Debit Credit Flag ',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Description',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Voucher Ref	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Summary ?	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Orig Amount	',
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
    const tableColumns34 = [
      {
        title: 'Acctg Trans Id	',
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: 'Transaction Date		',
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: 'Acctg Trans Type	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Fiscal Gl Type	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Invoice ID	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Payment Id	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Party Id	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Work Effort Id	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Shipment Id	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },

      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        dataIndex: 'agreementItemSeqId',
        id: 'agreementItemSeqId',

      },
    ];
    const tableColumns31 = [
      {
        title: 'Invoice ID	',
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: 'Invoice Type	',
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: 'Status',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Description	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Party Id From	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Party Id To	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Amount		',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Currency',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
    ];
    const tableColumns20 = [
      {
        title: 'Payment Method Type	',
        dataIndex: 'paymentMethodTypeId',
        id: 'paymentMethodTypeId',
        render: text => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                // this.setState({ Update: true });
                // this.showDrawer16();
                // this.props.toggleView();
              }}
            >
              {text}
            </Button>
          );
        },

      },
      {
        title: 'Gl Account Type	',
        dataIndex: 'Description',
      },
      {
        title: 'Default Gl Account Id	',
        dataIndex: 'Description',
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
                  organizationPartyId: 'Company',
                  paymentMethodTypeId: this.state.paymentMethodTypeId,
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_PMGL_DELETE,
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
    const tableColumns21 = [
      {
        title: 'Variance Reason Id		',
        dataIndex: 'varianceReasonId',
        id: 'varianceReasonId',
        render: text => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({ Update: true });
                this.showDrawer21();
                // this.props.toggleView();
              }}
            >
              {text}
            </Button>
          );
        },

      },
      {
        title: 'Gl Account Type Id	',
        dataIndex: 'Description',
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
                  organizationPartyId: 'Company',
                  varianceReasonId: this.state.varianceReasonId,
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_VGL_DELETE,
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
    const tableColumns22 = [
      {
        title: 'Card Type	',
        dataIndex: 'cardType',
        id: 'cardType',
        render: text => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({ Update: true });
                this.showDrawer22();
                // this.props.toggleView();
              }}
            >
              {text}
            </Button>
          );
        },

      },
      {
        title: 'GL Account ID		',
        dataIndex: 'Description',
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
                  cardType: 'CCT_AMERICANEXPRESS',
                  organizationPartyId: 'Company',
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_CCGL_DELETE,
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

    const tableColumns23 = [
      {
        title: 'Tax Authority Geo		',
        dataIndex: 'taxAuthGeoId',
        id: 'taxAuthGeoId',
        render: text => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({ Update: true });
                this.showDrawer43();
                // this.props.toggleView();
              }}
            >
              {text}
            </Button>
          );
        },

      }, {
        title: 'Tax Authority Party	',
        dataIndex: 'Description',
      },
      {
        title: 'GL Account ID		',
        dataIndex: 'Description',
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
                  taxAuthPartyId: 'BGR_TA',
                  taxAuthGeoId: this.state.taxAuthGeoId,
                  organizationPartyId: 'Company'
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_TGL_DELETE,
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
    const tableColumns24 = [
      {
        title: 'Party Id	',
        dataIndex: 'partyId',
        id: 'partyId',
        render: text => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({ Update: true });
                this.showDrawer24();
                // this.props.toggleView();
              }}
            >
              {text}
            </Button>
          );
        },

      }, {
        title: 'Role Type Id	',
        dataIndex: 'Description',
      },
      {
        title: 'GL Account ID		',
        dataIndex: 'Description',
      },
      {
        title: 'Gl Account Type Id		',
        dataIndex: 'Description',
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
                  organizationPartyId: 'Company',
                  partyId: this.state.partyId,
                  roleTypeId: 'ACCOUNT',
                  glAccountTypeId: 'ACCOUNTS_PAYABLE',
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_PGL_DELETE,
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
    const tableColumns25 = [
      {
        title: 'Fixed Asset Type Id		',
        dataIndex: 'fixedAssetTypeId',
        id: 'fixedAssetTypeId',
        render: text => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({ Update: true });
                this.showDrawer25();
                // this.props.toggleView();
              }}
            >
              {text}
            </Button>
          );
        },

      }, {
        title: 'Fixed Asset Id		',
        dataIndex: 'Description',
      },
      {
        title: 'Asset GL account		',
        dataIndex: 'Description',
      },
      {
        title: 'Accumulated depreciation GL account	',
        dataIndex: 'Description',
      }, {
        title: 'Depreciation GL account		',
        dataIndex: 'Description',
      },
      {
        title: 'Profit GL account		',
        dataIndex: 'Description',
      }, {
        title: 'Loss GL account		',
        dataIndex: 'Description',
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
                  fixedAssetId: '_NA_',
                  fixedAssetTypeId: this.state.fixedAssetTypeId,
                  organizationPartyId: 'Company',
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_FATGL_DELETE,
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
    const tableColumns26 = [
      {
        title: 'Acctg Trans Id	',
        dataIndex: 'Item_No',
        id: 'Item_No',


      }, {
        title: 'Acctg Trans Entry Seq Id		',
        dataIndex: 'Description',
      },
      {
        title: 'Gl Account Id	',
        dataIndex: 'Description',
      },
      {
        title: 'Party Id	',
        dataIndex: 'Description',
      }, {
        title: 'Depreciation GL account		',
        dataIndex: 'Description',
      },
      {
        title: 'Product Id	',
        dataIndex: 'Description',
      }, {
        title: 'Organization Party Id	',
        dataIndex: 'Description',
      },

      {
        title: 'Amount	',
        dataIndex: 'agreementItemSeqId',
        id: 'agreementItemSeqId',

      },
    ];
    const tableColumns28 = [
      {
        title: 'Acctg Trans Id	',
        dataIndex: 'Item_No',
        id: 'Item_No',


      }, {
        title: 'Transaction Date	',
        dataIndex: 'Description',
      },
      {
        title: 'Acctg Trans Type	',
        dataIndex: 'Description',
      },
      {
        title: 'Description	',
        dataIndex: 'Description',
      }, {
        title: 'Fiscal Gl Type	',
        dataIndex: 'Description',
      },
      {
        title: 'Invoice ID	',
        dataIndex: 'Description',
      }, {
        title: 'Payment Id	',
        dataIndex: 'Description',
      },

      {
        title: 'Work Effort Id	',
        dataIndex: 'agreementItemSeqId',
        id: 'agreementItemSeqId',

      },
      {
        title: 'Shipment Id	',
        dataIndex: 'agreementItemSeqId',
        id: 'agreementItemSeqId',

      },
      {
        title: 'Is Posted	',
        dataIndex: 'agreementItemSeqId',
        id: 'agreementItemSeqId',

      },
      {
        title: 'Posted Date	',
        dataIndex: 'agreementItemSeqId',
        id: 'agreementItemSeqId',

      },

    ];
    const tableColumns27 = [
      {
        title: 'Gl Reconciliation Id	',
        dataIndex: 'Item_No',
        id: 'Item_No',


      }, {
        title: 'Gl Reconciliation Name	',
        dataIndex: 'Description',
      },
      {
        title: 'Gl Account Id	',
        dataIndex: 'Description',
      },
      {
        title: 'Description	',
        dataIndex: 'Description',
      }, {
        title: 'Created By User	',
        dataIndex: 'Description',
      },
      {
        title: 'Last Modified By User	',
        dataIndex: 'Description',
      }, {
        title: 'Gl Account Id	',
        dataIndex: 'Description',
      },

      {
        title: 'Organization Party Id	',
        dataIndex: 'agreementItemSeqId',
        id: 'agreementItemSeqId',

      },
      {
        title: 'Reconciled Balance',
        dataIndex: 'agreementItemSeqId',
        id: 'agreementItemSeqId',

      },
    ];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };
    const tableColumns2 = [
      {
        title: 'Gl Account Type Id',
        dataIndex: 'glAccountTypeId',
        id: 'glAccountTypeId',
        render: text => {
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
        title: 'Gl Account Id	',
        dataIndex: 'Description',
        id: 'Description',
      },

      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        dataIndex: 'glAccountTypeId',
        id: 'glAccountTypeId',
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
                  organizationPartyId: 'Company',
                  glAccountTypeId: this.state.glAccountTypeId,
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_GLAT_DELETE,
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
        title: 'Gl Journal Id',
        dataIndex: 'glJournalId',
        id: 'glJournalId',
        render: text => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({ Update: true });
                this.showDrawer3();
                // this.props.toggleView();
              }}
            >
              {text}
            </Button>
          );
        },
      },
      {
        title: 'Gl Journal Name	',
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: 'Is Posted	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Posted Date	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },

      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        dataIndex: 'glJournalId',
        id: 'ext_acc_id',
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
                  // glJournalId: data,
                  glJournalId: this.state.JOU[0].glJournalId,
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_JOU_DELETE,
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
    const tableColumns13 = [
      {
        title: 'Product Id	',
        dataIndex: 'productId',
        id: 'productId',
        render: text => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({ Update: true });
                this.showDrawer13();
                // this.props.toggleView();
              }}
            >
              {text}
            </Button>
          );
        },
      },
      {
        title: 'Gl Account Type Id	',
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: 'GL Account	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },


      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
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
                  productId: this.state.productId,
                  organizationPartyId: 'Company',
                  glAccountTypeId: 'ACCOUNTS_PAYABLE',
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_PGA_DELETE,
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
        title: 'Shipment Id	',
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: 'Shipment Type Id	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Status ID	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Party From	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Party To ',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },

    ];
    const tableColumns10 = [
      {
        title: 'Custom Time Period Id	',
        dataIndex: 'customTimePeriodId',
        id: 'customTimePeriodId',
        render: text => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({ Update: true });
                this.showDrawer10();
                // this.props.toggleView();
              }}
            >
              {text}
            </Button>
          );
        },
      },
      {
        title: 'Parent Period Id	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Period Type Id		',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Period Num	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Period Name	',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'From Date		',
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: 'Through Date',
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
                  customTimePeriodId: this.state.customTimePeriodId,

                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_TP_DELETE,
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
    const tableColumns29 = [
      {
        title: 'Payment Id	',
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
        title: 'Effective Date	',
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
    const tableColumns4 = [
      {
        title: `${localConsts.Code}`,
        dataIndex: 'Invoice Type',
        sorter: (a, b) => a.shortName.length - b.shortName.length,
      },
      {
        title: `${localConsts.AccountName}`,
        dataIndex: 'Invoice Type',
        sorter: (a, b) => a.shortName.length - b.shortName.length,
      },
      {
        title: `${localConsts.ParentGlAccountId}`,
        dataIndex: 'Invoice Date',
      },
      {
        title: `${localConsts.GlAccountTypeId}`,
        dataIndex: 'ToParty',
      },
      {
        title: `${localConsts.GlAccountClassId}`,
        dataIndex: 'FromParty',
      },
      {
        title: `${localConsts.GlResourceTypeId}`,
        dataIndex: 'status',
      },
      {
        title: `${localConsts.GlXbrlClassId}`,
        dataIndex: 'status',
      },
      {
        title: `${localConsts.description_LABEL}`,
        dataIndex: 'status',
      },
      {
        title: `${localConsts.COLUMN_ProductId}`,
        dataIndex: 'status',
      },
      {
        title: `${localConsts.ExternalId}`,
        dataIndex: 'status',
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

                <Row>
                  <Col span={12}>
                    <FormItem label={localConsts.OrganizationPartyId}>
                      {getFieldDecorator('organizationPartyId', {
                        initialValue: data.roleTypeIdTo,
                        enableReinitialize: true,
                      })(
                        <Select
                          onBlur={this.enableSaveButton}
                          showSearchDetails
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

              </div>
            </TabPane>
            <TabPane
              tab={localConsts.TAB1_CAPTION}
              key="1"
              className={styles.tabPaneCustom}
              disabled={this.state.disabled}
            >
              <Tabs tabPosition="left" onChange={this.callback}>
                <TabPane tab="Accounting Preferences" key="Accounting Preferenceses">
                  <Row gutter={20} style={{ marginTop: '15px' }}>
                    <Col span={7}>
                      <FormItem label={localConsts.OrganizationPartyId}>
                        {getFieldDecorator('partyId', {
                          initialValue: data.partyIdFrom,
                          enableReinitialize: true,
                        })(
                          <Input
                            style={{ width: '295px' }}
                            onBlur={this.enableSaveButton}
                            disabled
                          />,
                        )}
                      </FormItem>
                    </Col>
                    <Col span={7} offset={3}>
                      <FormItem label={localConsts.FiscalYearStartDay}>
                        {getFieldDecorator('fiscalYearStartDay', {
                          initialValue: data.partyIdTo,
                          enableReinitialize: true,
                        })(
                          <Input
                            style={{ width: '295px' }}
                            disabled
                          />,
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col span={7}>
                      <FormItem label={localConsts.TaxFormforOrganization}>
                        {getFieldDecorator('taxFormId', {
                          initialValue: data.roleTypeIdTo,
                          enableReinitialize: true,
                        })(
                          <Input
                            style={{ width: '295px' }}
                            disabled
                          />,
                        )}
                      </FormItem>
                    </Col>
                    <Col span={7} offset={3}>
                      <FormItem label="Cost Of Goods Sold (COGS) Method	">
                        {getFieldDecorator('cogsMethodId', {
                          initialValue: data.roleTypeIdFrom,
                          enableReinitialize: true,
                        })(
                          <Input
                            style={{ width: '295px' }}
                            disabled
                          />,
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col span={7}>
                      <FormItem label='Base Currency'>
                        {getFieldDecorator('baseCurrencyUomId', {
                          initialValue: data.productId,
                          enableReinitialize: true,
                        })(
                          <Input
                            style={{ width: '295px' }}

                          />,
                        )}
                      </FormItem>
                    </Col>
                    <Col span={7} offset={3}>
                      <FormItem label='Invoice Seq Cust Meth Id	'>
                        {getFieldDecorator('invoiceSeqCustMethId', {
                          initialValue: '',
                          enableReinitialize: true,
                        })(
                          <Input
                            style={{ width: '295px' }}

                          />,
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col span={7}>
                      <FormItem label='Invoice Id Prefix'>
                        {getFieldDecorator('invoiceSeqCustMethId', {
                          initialValue: data.agreementTypeId,
                          enableReinitialize: true,
                        })(
                          <Input
                            style={{ width: '295px' }}

                          />,
                        )}
                      </FormItem>
                    </Col>
                    <Col span={7} offset={3}>
                      <FormItem label='Last Invoice Restart Date	'>
                        {getFieldDecorator('lastInvoiceRestartDate', {
                          initialValue: '',
                          enableReinitialize: true,
                        })(
                          <Input
                            style={{ width: '295px' }}
                            disabled
                          />,
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col span={7}>
                      <FormItem label='Use Invoice Id For Returns'>
                        {getFieldDecorator('useInvoiceIdForReturns', {
                          initialValue: '',
                          enableReinitialize: true,
                        })(
                          <Input
                            style={{ width: '295px' }}
                            disabled
                          />,
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col span={9}>
                      <FormItem label='Quote Seq Cust Meth Id	'>
                        {getFieldDecorator('quoteSeqCustMethId', {
                          initialValue: data.description,
                          enableReinitialize: true,
                        })(
                          <Input
                            type="text"

                            style={{ width: '295px' }}
                          />,
                        )}
                      </FormItem>
                    </Col>
                    <Col span={9} offset={1}>
                      <FormItem label='Quote Id Prefix'>
                        {getFieldDecorator('quoteIdPrefix', {
                          initialValue: data.textData,
                          enableReinitialize: true,
                        })(
                          <Input
                            style={{ width: '295px' }}
                            disabled
                          />,
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col span={9}>
                      <FormItem label='Last Quote Number	'>
                        {getFieldDecorator('lastQuoteNumber', {
                          initialValue: data.description,
                          enableReinitialize: true,
                        })(
                          <Input
                            type="text"

                            style={{ width: '295px' }}
                          />,
                        )}
                      </FormItem>
                    </Col>
                    <Col span={9} offset={1}>
                      <FormItem label='Order Seq Cust Meth Id	'>
                        {getFieldDecorator('orderSeqCustMethId', {
                          initialValue: data.textData,
                          enableReinitialize: true,
                        })(
                          <Input
                            style={{ width: '295px' }}

                          />,
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col span={9}>
                      <FormItem label='Order Id Prefix		'>
                        {getFieldDecorator('orderIdPrefix', {
                          initialValue: data.description,
                          enableReinitialize: true,
                        })(
                          <Input
                            type="text"
                            disabled
                            style={{ width: '295px' }}
                          />,
                        )}
                      </FormItem>
                    </Col>
                    <Col span={9} offset={1}>
                      <FormItem label='Last Order Number	'>
                        {getFieldDecorator('lastOrderNumber', {
                          initialValue: data.textData,
                          enableReinitialize: true,
                        })(
                          <Input
                            style={{ width: '295px' }}
                            disabled
                          />,
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col span={9}>
                      <FormItem label='Order Id Prefix		'>
                        {getFieldDecorator('orderIdPrefix', {
                          initialValue: data.description,
                          enableReinitialize: true,
                        })(
                          <Input
                            type="text"
                            disabled
                            style={{ width: '295px' }}
                          />,
                        )}
                      </FormItem>
                    </Col>
                    <Col span={9} offset={1}>
                      <FormItem label='Refund Payment Method Id	'>
                        {getFieldDecorator('refundPaymentMethodId', {
                          initialValue: data.textData,
                          enableReinitialize: true,
                        })(
                          <Select
                            onBlur={this.enableSaveButton}
                            showSearchDetails
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
                    <Col span={9}>
                      <FormItem label='Error Gl Journal Id		'>
                        {getFieldDecorator('errorGlJournalId', {
                          initialValue: data.description,
                          enableReinitialize: true,
                        })(
                          <Input
                            type="text"
                            disabled
                            style={{ width: '295px' }}
                          />,
                        )}
                      </FormItem>
                    </Col>
                    <Col span={9} offset={1}>
                      <FormItem label='Old Invoice Sequence Enum Id		'>
                        {getFieldDecorator('oldInvoiceSequenceEnumId', {
                          initialValue: data.textData,
                          enableReinitialize: true,
                        })(
                          <Input
                            type="text"
                            disabled
                            style={{ width: '295px' }}
                          />,
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col span={9}>
                      <FormItem label='Old Order Sequence Enum Id		'>
                        {getFieldDecorator('oldOrderSequenceEnumId', {
                          initialValue: data.description,
                          enableReinitialize: true,
                        })(
                          <Input
                            type="text"
                            disabled
                            style={{ width: '295px' }}
                          />,
                        )}
                      </FormItem>
                    </Col>
                    <Col span={9} offset={1}>
                      <FormItem label='Old Quote Sequence Enum Id	'>
                        {getFieldDecorator('oldQuoteSequenceEnumId', {
                          initialValue: data.textData,
                          enableReinitialize: true,
                        })(
                          <Input
                            type="text"
                            disabled
                            style={{ width: '295px' }}
                          />,
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tab="Chart of Accounts" key="Chart of Accounts">
                  <Row style={{ marginTop: '14px' }}>

                    <Col span={6} offset={18}>
                      <span
                        style={{ color: '#337AB7' }}
                        onClick={this.showDrawer4}
                      >
                        Chart of Accounts
 
                      </span>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        className={styles.tableContainer}
                        rowKey="id"
                        title={this.tableHeader}
                        columns={tableColumns4}
                        scroll={{ x: 1300 }}
                        loading={this.state.loading}
                        dataSource={this.state.agreementTerm}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
                <TabPane tab="Journals" key="Journals">
                  <Row style={{ marginTop: '14px' }}>

                    <Col span={6} offset={18}>
                      <span
                        style={{ color: '#337AB7' }}
                        onClick={this.showDrawer3}
                      >
                        Journals
 
 
                      </span>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        className={styles.tableContainer}
                        rowKey="id"
                        title={this.tableHeader}
                        columns={tableColumns3}
                        scroll={{ x: 1300 }}
                        loading={this.state.loading}
                        dataSource={this.state.JOU}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
                <TabPane tab="GL Account defaults" key="GL Account defaults">
                  <Tabs
                    defaultActiveKey="GL Account Type Defaults"
                    onChange={this.callback}
                  >
                    <TabPane tab="GL Account Type Defaults" key="GL Account Type Defaults">
                      <Row style={{ marginTop: '14px' }}>

                        <Col span={3} offset={19}>
                          <span
                            style={{ color: '#337AB7' }}
                            onClick={this.showDrawer}
                          >
                            Add

                          </span>
                        </Col>
                      </Row>
                      <Row style={{ marginTop: '14px' }}>
                        <div className={styles.tableContainerParent}>
                          <Table
                            className={styles.tableContainer}
                            rowKey="id"
                            title={this.tableHeader}
                            columns={tableColumns2}
                            loading={this.state.loading}
                            dataSource={this.state.GLAT}
                            size="small"
                            onChange={this.handleStandardTableChange}
                          />
                        </div>
                      </Row>
                    </TabPane>
                    <TabPane tab="Product GL Accounts" key="Product GL Accounts">
                      <Row style={{ marginTop: '14px' }}>

                        <Col span={5} offset={16}>
                          <span
                            style={{ color: '#337AB7' }}
                            onClick={this.showDrawer13}
                          >

                            Add GL Account
                            
                          </span>
                        </Col>
                      </Row>
                      <Row style={{ marginTop: '14px' }}>
                        <div className={styles.tableContainerParent}>
                          <Table
                            className={styles.tableContainer}
                            rowKey="id"
                            title={this.tableHeader}
                            columns={tableColumns13}
                            dataSource={this.state.PGA}
                            loading={this.state.loading}
                            size="small"
                            onChange={this.handleStandardTableChange}
                          />
                        </div>
                      </Row>
                    </TabPane>
                    <TabPane tab="Product Category Gl Account" key="Product Category Gl Account">
                      <Row style={{ marginTop: '14px' }}>

                        <Col span={3} offset={18}>
                          <span
                            style={{ color: '#337AB7' }}
                            onClick={this.showDrawer15}
                          >
                            Add Category GL Account

                          </span>
                        </Col>
                      </Row>
                      <Row style={{ marginTop: '14px' }}>
                        <div className={styles.tableContainerParent}>
                          <Table
                            className={styles.tableContainer}
                            rowKey="id"
                            title={this.tableHeader}
                            columns={tableColumns15}
                            loading={this.state.loading}
                            dataSource={this.state.PGAC}
                            size="small"
                            scroll={{ x: 1300 }}
                            onChange={this.handleStandardTableChange}
                          />
                        </div>
                      </Row>
                    </TabPane>
                    <TabPane tab="FinAccount Type Gl Account" key="FinAccount Type Gl Account">
                      <Row style={{ marginTop: '14px' }}>

                        <Col span={6} offset={16}>
                          <div>

                            <span
                              style={{ color: '#337AB7', marginLeft: '24px' }}
                              onClick={this.showDrawer16}
                            >
                              Add FinAccount Type Gl Account

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
                            columns={tableColumns16}
                            dataSource={this.state.FAGL}
                            loading={this.state.loading}
                            size="small"
                            onChange={this.handleStandardTableChange}
                          />
                        </div>
                      </Row>
                    </TabPane>
                    <TabPane tab="Sales Invoice" key="Sales Invoice">
                      <Row style={{ marginTop: '14px' }}>

                        <Col span={4} offset={16}>
                          <div>
                            <span
                              style={{ color: '#337AB7' }}
                              onClick={this.showDrawer17}
                            >
                              Assign Sales Invoice type to Revenue GL Account Number

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
                            columns={tableColumns17}
                            dataSource={this.state.SI}
                            loading={this.state.loading}
                            size="small"
                            onChange={this.handleStandardTableChange}
                          />
                        </div>
                      </Row>
                    </TabPane>
                    <TabPane tab="Purchase Invoice" key="Purchase Invoice">
                      <Row style={{ marginTop: '14px' }}>

                        <Col span={4} offset={16}>
                          <div>
                            <span
                              style={{ color: '#337AB7' }}
                              onClick={this.showDrawer18}
                            >
                              Assign Purchase Invoice type to Revenue GL Account Number

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
                            columns={tableColumns17}
                            dataSource={this.state.SI}
                            loading={this.state.loading}
                            size="small"
                            onChange={this.handleStandardTableChange}
                          />
                        </div>
                      </Row>
                    </TabPane>
                    <TabPane tab="Payment Type/Gl Account Type Id" key="Payment Type/Gl Account Type Id">
                      <Row style={{ marginTop: '14px' }}>

                        <Col span={6} offset={15}>
                          <div>

                            <span
                              style={{ color: '#337AB7', marginLeft: '24px' }}
                              onClick={this.showDrawer19}
                            >
                              Payment Type Assign Account Type

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
                            columns={tableColumns19}
                            dataSource={this.state.PTGL}
                            loading={this.state.loading}
                            size="small"
                            onChange={this.handleStandardTableChange}
                          />
                        </div>
                      </Row>
                    </TabPane>
                    <TabPane tab="Payment Method Id/GL Account ID" key="Payment Method Id/GL Account ID">
                      <Row style={{ marginTop: '14px' }}>

                        <Col span={8} offset={12}>
                          <div>

                            <span
                              style={{ color: '#337AB7', marginLeft: '24px' }}
                              onClick={this.showDrawer20}
                            >
                              Payment Method Assign Account Type
 
 
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
                            columns={tableColumns20}
                            dataSource={this.state.PMGL}
                            loading={this.state.loading}
                            size="small"
                            onChange={this.handleStandardTableChange}
                          />
                        </div>
                      </Row>
                    </TabPane>
                    <TabPane tab="Variance Reason Gl Accounts" key="Variance Reason Gl Accounts">
                      <Row style={{ marginTop: '14px' }}>

                        <Col span={6} offset={12}>
                          <div>

                            <span
                              style={{ color: '#337AB7', marginLeft: '24px' }}
                              onClick={this.showDrawer21}
                            >
                              Payment Type Assign Account Type

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
                            columns={tableColumns21}
                            dataSource={this.state.VGL}
                            loading={this.state.loading}
                            size="small"
                            onChange={this.handleStandardTableChange}
                          />
                        </div>
                      </Row>
                    </TabPane>
                    <TabPane tab="Credit Card Type GlAccount" key="Credit Card Type GlAccount">
                      <Row style={{ marginTop: '14px' }}>

                        <Col span={6} offset={12}>
                          <div>

                            <span
                              style={{ color: '#337AB7', marginLeft: '24px' }}
                              onClick={this.showDrawer22}
                            >
                              Credit Card Type GlAccount


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
                            columns={tableColumns22}
                            dataSource={this.state.CCGL}
                            loading={this.state.loading}
                            size="small"
                            onChange={this.handleStandardTableChange}
                          />
                        </div>
                      </Row>
                    </TabPane>
                    <TabPane tab="TaxAuthority GL Accounts" key="TaxAuthority GL Accounts">
                      <Row style={{ marginTop: '14px' }}>

                        <Col span={6} offset={12}>
                          <div>

                            <span
                              style={{ color: '#337AB7', marginLeft: '24px' }}
                              onClick={this.showDrawer43}
                            >
                              Add TaxAuthority GL Account



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
                            columns={tableColumns23}
                            dataSource={this.state.TGL}
                            loading={this.state.loading}
                            size="small" InvoiceId
                            onChange={this.handleStandardTableChange}
                          />
                        </div>
                      </Row>
                    </TabPane>
                    <TabPane tab="Party Gl Accounts" key="Party Gl Accounts">
                      <Row style={{ marginTop: '14px' }}>

                        <Col span={6} offset={12}>
                          <div>

                            <span
                              style={{ color: '#337AB7', marginLeft: '24px' }}
                              onClick={this.showDrawer24}
                            >
                              Add Party Gl Account
  
  
  
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
                            columns={tableColumns24}
                            loading={this.state.loading}
                            size="small"
                            onChange={this.handleStandardTableChange}
                          />
                        </div>
                      </Row>
                    </TabPane>
                    <TabPane tab="Fixed Asset Type Gl Mappings" key="Fixed Asset Type Gl Mappings">
                      <Row style={{ marginTop: '14px' }}>

                        <Col span={6} offset={15}>
                          <div>

                            <span
                              style={{ color: '#337AB7', marginLeft: '24px' }}
                              onClick={this.showDrawer25}
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
                            columns={tableColumns25}
                            dataSource={this.state.FATGL}
                            loading={this.state.loading}
                            size="small"
                            onChange={this.handleStandardTableChange}
                          />
                        </div>
                      </Row>
                    </TabPane>
                  </Tabs>
                </TabPane>
                <TabPane
                  tab="Time Period"
                  key="Time Period"
                >
                  <Row style={{ marginTop: '14px' }}>
                    showDrawer1
                    <Col span={3} offset={18}>
                      <div>
                        <span
                          style={{ color: '#337AB7', marginLeft: '24px' }}
                          onClick={this.showDrawer10}
                        >
                          New
                        </span>
                      </div>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        className={styles.tableContainer}
                        rowKey="id"
                        title={() => <div style={{ marginBottom: '20px', marginTop: '10px' }}>Open Time Periods</div>}

                        // title={()=>'Open Time Periods'}  title={()=>'Open Time Periods'}
                        columns={tableColumns10}
                        dataSource={this.state.TP}
                        loading={this.state.loading}
                        dataSource={this.state.agreementWorkEffort}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        className={styles.tableContainer}
                        rowKey="id"
                        // title={()=>'Open Time Periods'}  title={()=>'Closed Time Periods'}
                        title={() => <div style={{ marginBottom: '20px', marginTop: '10px' }}>Closed  Time Periods</div>}

                        columns={tableColumns10}
                        loading={this.state.loading}
                        dataSource={this.state.agreementWorkEffort}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>

              </Tabs>
            </TabPane>
            <TabPane
              tab={localConsts.TAB3_CAPTION}
              key="3"
              className={styles.tabPaneCustom}
              disabled={this.state.disabled}
            >
              <Tabs defaultActiveKey="Account Reconciliation" tabPosition="left" onChange={this.callback}>
                {/* <TabPane tab="Summary" key="Summary">
            
                </TabPane> */}
                <TabPane tab="Account Reconciliation" key="Account Reconciliation">
                  <Row gutter={20} style={{ marginTop: '35px' }}>
                    <Col span={14}>
                      <FormItem label='Gl Account Id	'>
                        {getFieldDecorator('workEffortId', {
                          initialValue: '',
                          enableReinitialize: true,
                        })(
                          <Select
                            showSearch
                            // value={this.state.agreementItemSeqId}
                            // onChange={this.handleChange}
                            style={{ width: '595px' }}
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
                        Search
                </Button>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '14px' }}>

                    <Col span={7} offset={15}>
                      <div>

                        <span
                          style={{ color: '#337AB7', marginLeft: '24px' }}
                          onClick={this.showDrawer26}
                        >
                          Create Account Reconciliation


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
                        columns={tableColumns26}
                        // dataSource = {this.state.AC}
                        loading={this.state.loading}
                        rowSelection={rowSelection}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
                <TabPane tab="Account Reconciliations" key="Account Reconciliations">
                  <Row gutter={20} style={{ marginTop: '35px' }}>
                    <Col span={14}>
                      <FormItem label='Gl Account Id	'>
                        {getFieldDecorator('workEffortId', {
                          initialValue: '',
                          enableReinitialize: true,
                        })(
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
                            {}
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
                    <Col span={6} offset={4}>
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
                        columns={tableColumns27}
                        loading={this.state.loading}
                        rowSelection={rowSelection}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
                <TabPane tab="Accounting Transactions" key="Accounting Transactions">
                  <Row style={{ marginTop: '24px' }}>

                    <Col span={6} offset={1}>
                      <div>

                        <span
                          style={{ color: '#337AB7', marginLeft: '24px' }}
                          onClick={this.showDrawer32}
                        >
                          Create an Accounting Transaction


                           </span>
                      </div>
                    </Col>
                    <Col span={6} offset={1}>
                      <div>

                        <span
                          style={{ color: '#337AB7', marginLeft: '24px' }}
                          onClick={this.showDrawer33}
                        >
                          Quick Create an Accounting Transaction



                           </span>
                      </div>
                    </Col>
                    <Col span={6} offset={1}>
                      <div>

                        <span
                          style={{ color: '#337AB7', marginLeft: '24px' }}
                          onClick={this.showDrawer34}
                        >
                          Un-posted Accounting Transactions


                           </span>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={20} style={{ marginTop: '35px' }}>
                    <Col span={6}>
                      <FormItem label='Acctg Trans Id	'>
                        {getFieldDecorator('id', {
                          initialValue: '',
                          enableReinitialize: true,
                        })(
                          <Input style={{ width: '295px' }} />
                        )}
                      </FormItem>
                    </Col>
                    <Col span={6} offset={4}>
                      <FormItem label='Transaction Type	'>
                        {getFieldDecorator('aa', {
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
                  <Row gutter={20}>
                    <Col span={6}>
                      <FormItem label="Fiscal Gl Type	">
                        {getFieldDecorator('id', {
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
                    <Col span={6} offset={4}>
                      <FormItem label='Gl Journal Id	'>
                        {getFieldDecorator('aa', {
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
                  <Row gutter={20}>
                    <Col span={6}>
                      <FormItem label="Is Posted	">
                        {getFieldDecorator('id', {
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
                    <Col span={6} offset={4}>
                      <FormItem label='Invoice ID	'>
                        {getFieldDecorator('aa', {
                          initialValue: '',
                          enableReinitialize: true,
                        })(
                          <Input style={{ width: '295px' }} addonAfter={
                            <Icon onClick={this.showDrawer31} type="idcard" />
                          } />
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col span={6}>
                      <FormItem label="Payment Id	">
                        {getFieldDecorator('id', {
                          initialValue: '',
                          enableReinitialize: true,
                        })(
                          <Input style={{ width: '295px' }} addonAfter={
                            <Icon onClick={this.showDrawer29} type="idcard" />
                          } />
                        )}
                      </FormItem>
                    </Col>
                    <Col span={6} offset={4}>
                      <FormItem label='Product Id	'>
                        {getFieldDecorator('aa', {
                          initialValue: '',
                          enableReinitialize: true,
                        })(
                          <Input style={{ width: '295px' }} addonAfter={
                            <Icon onClick={this.showDrawer1} type="idcard" />
                          } />
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col span={6}>
                      <FormItem label="Work Effort Id	">
                        {getFieldDecorator('id', {
                          initialValue: '',
                          enableReinitialize: true,
                        })(
                          <Input style={{ width: '295px' }} addonAfter={
                            <Icon onClick={this.showDrawer14} type="idcard" />
                          } />
                        )}
                      </FormItem>
                    </Col>
                    <Col span={6} offset={4}>
                      <FormItem label='Shipment Id	'>
                        {getFieldDecorator('aa', {
                          initialValue: '',
                          enableReinitialize: true,
                        })(
                          <Input style={{ width: '295px' }} addonAfter={
                            <Icon onClick={this.showDrawer9} type="idcard" />
                          } />
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

                            style={{ width: '295px' }}

                          />,
                        )}
                      </FormItem>
                    </Col>
                    <Col span={6} offset={4}>
                      <FormItem label={localConsts.ThroughDate_LABEL}>
                        {getFieldDecorator('thruDate', {
                          initialValue: moment(),
                          enableReinitialize: true,
                        })(
                          <DatePicker

                            style={{ width: '295px' }}

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
                        columns={tableColumns28}
                        loading={this.state.loading}
                        rowSelection={rowSelection}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
                <TabPane tab="Accounting Transactions Entries" key="Accounting Transactions Entries">

                  <Row gutter={20} style={{ marginTop: '35px' }}>
                    <Col span={6}>
                      <FormItem label='Acctg Trans Id	'>
                        {getFieldDecorator('id', {
                          initialValue: '',
                          enableReinitialize: true,
                        })(
                          <Input style={{ width: '295px' }} />
                        )}
                      </FormItem>
                    </Col>
                    <Col span={6} offset={4}>
                      <FormItem label='Transaction Type	'>
                        {getFieldDecorator('aa', {
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
                  <Row gutter={20}>
                    <Col span={6}>
                      <FormItem label="Fiscal Gl Type	">
                        {getFieldDecorator('id', {
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
                    <Col span={6} offset={4}>
                      <FormItem label='Gl Journal Id	'>
                        {getFieldDecorator('aa', {
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
                  <Row gutter={20}>
                    <Col span={6}>
                      <FormItem label="Is Posted	">
                        {getFieldDecorator('id', {
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
                    <Col span={6} offset={4}>
                      <FormItem label='Invoice ID	'>
                        {getFieldDecorator('aa', {
                          initialValue: '',
                          enableReinitialize: true,
                        })(
                          <Input style={{ width: '295px' }} addonAfter={
                            <Icon onClick={this.showDrawer31} type="idcard" />
                          } />
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col span={6}>
                      <FormItem label="Payment Id	">
                        {getFieldDecorator('id', {
                          initialValue: '',
                          enableReinitialize: true,
                        })(
                          <Input style={{ width: '295px' }} addonAfter={
                            <Icon onClick={this.showDrawer29} type="idcard" />
                          } />
                        )}
                      </FormItem>
                    </Col>
                    <Col span={6} offset={4}>
                      <FormItem label='Product Id	'>
                        {getFieldDecorator('aa', {
                          initialValue: '',
                          enableReinitialize: true,
                        })(
                          <Input style={{ width: '295px' }} addonAfter={
                            <Icon onClick={this.showDrawer1} type="idcard" />
                          } />
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col span={6}>
                      <FormItem label="Work Effort Id	">
                        {getFieldDecorator('id', {
                          initialValue: '',
                          enableReinitialize: true,
                        })(
                          <Input style={{ width: '295px' }} addonAfter={
                            <Icon onClick={this.showDrawer14} type="idcard" />
                          } />
                        )}
                      </FormItem>
                    </Col>
                    <Col span={6} offset={4}>
                      <FormItem label='Shipment Id	'>
                        {getFieldDecorator('aa', {
                          initialValue: '',
                          enableReinitialize: true,
                        })(
                          <Input style={{ width: '295px' }} addonAfter={
                            <Icon onClick={this.showDrawer9} type="idcard" />
                          } />
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col span={6}>
                      <FormItem label="Gl Account Id	">
                        {getFieldDecorator('id', {
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
                    <Col span={6} offset={4}>
                      <FormItem label='Report Type		'>
                        {getFieldDecorator('aa', {
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
                  <Row gutter={20}>
                    <Col span={6}>
                      <FormItem label={localConsts.FromDate_LABEL}>
                        {getFieldDecorator('fromDate', {
                          initialValue: moment(),
                          enableReinitialize: true,
                        })(
                          <DatePicker

                            style={{ width: '295px' }}

                          />,
                        )}
                      </FormItem>
                    </Col>
                    <Col span={6} offset={4}>
                      <FormItem label={localConsts.ThroughDate_LABEL}>
                        {getFieldDecorator('thruDate', {
                          initialValue: moment(),
                          enableReinitialize: true,
                        })(
                          <DatePicker

                            style={{ width: '295px' }}

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
                        columns={tableColumns28}
                        loading={this.state.loading}
                        rowSelection={rowSelection}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>

                <TabPane tab="Reports" key="Reports">
                  <Tabs defaultActiveKey="a" >
                    <TabPane tab="Trial Balance" key="a">
                      <Row>
                        <Col span={8} >
                          <FormItem label='Custom Time Period Id	'>
                            {getFieldDecorator('aa', {
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
                            Submit
                </Button>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tab="Transaction Totals" key="b">
                      <Row GUTTER={20}>
                        <Col span={6} >
                          <FormItem label='Month'>
                            {getFieldDecorator('aa', {
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
                        <Col span={6} offset={4}>
                          <FormItem label='Fiscal Gl Type	'>
                            {getFieldDecorator('aa', {
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
                      <Row gutter={20}>
                        <Col span={6}>
                          <FormItem label={localConsts.FromDate_LABEL}>
                            {getFieldDecorator('fromDate', {
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
                        <Col span={6} offset={4}>
                          <FormItem label={localConsts.ThroughDate_LABEL}>
                            {getFieldDecorator('thruDate', {
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
                            Submit
                </Button>
                        </Col>
                      </Row>
                      <Tabs defaultActiveKey="pt" >
                        <TabPane tab="Posted Totals" key="pt"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns39}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>
                        <TabPane tab="UnPosted Totals" key="upt"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns39}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>
                        <TabPane tab="Posted And Unposted Totals" key="put"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns39}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>

                      </Tabs>
                    </TabPane>
                    <TabPane tab="Income Statement" key="c">
                      <Row GUTTER={20}>
                        <Col span={6} >
                          <FormItem label='Month'>
                            {getFieldDecorator('aa', {
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
                        <Col span={6} offset={4}>
                          <FormItem label='Fiscal Gl Type	'>
                            {getFieldDecorator('aa', {
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
                      <Row gutter={20}>
                        <Col span={6}>
                          <FormItem label={localConsts.FromDate_LABEL}>
                            {getFieldDecorator('fromDate', {
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
                        <Col span={6} offset={4}>
                          <FormItem label={localConsts.ThroughDate_LABEL}>
                            {getFieldDecorator('thruDate', {
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
                            Submit
                </Button>
                        </Col>
                      </Row>
                      <Tabs defaultActiveKey="ar" >
                        <TabPane tab="AccountingRevenues" key="ar"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns40}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>
                        <TabPane tab="Expenses" key="exp"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns40}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>
                        <TabPane tab="Income" key="inc"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns40}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>
                        <TabPane tab="Total" key="Total"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns41}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>

                      </Tabs>
                    </TabPane>
                    <TabPane tab="Cash Flow Statement" key="d">
                      <Row GUTTER={20}>
                        <Col span={6} >
                          <FormItem label='Month'>
                            {getFieldDecorator('aa', {
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
                        <Col span={6} offset={4}>
                          <FormItem label='Fiscal Gl Type	'>
                            {getFieldDecorator('aa', {
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
                      <Row gutter={20}>
                        <Col span={6}>
                          <FormItem label={localConsts.FromDate_LABEL}>
                            {getFieldDecorator('fromDate', {
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
                        <Col span={6} offset={4}>
                          <FormItem label={localConsts.ThroughDate_LABEL}>
                            {getFieldDecorator('thruDate', {
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
                            Submit
                </Button>
                        </Col>
                      </Row>
                      <Tabs defaultActiveKey="ocb" >
                        <TabPane tab="Opening Cash Balance" key="ocb"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns40}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>
                        <TabPane tab="Period Cash Balance" key="pcb"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns42}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>
                        <TabPane tab="Closing Cash Balance" key="ccb"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns40}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>
                        <TabPane tab="Total" key="Total"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns41}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>

                      </Tabs>
                    </TabPane>
                    <TabPane tab="Balance Sheet" key="e">
                      <Row GUTTER={20}>

                        <Col span={6} >
                          <FormItem label='Fiscal Gl Type	'>
                            {getFieldDecorator('aa', {
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

                        <Col span={6} offset={4}>
                          <FormItem label={localConsts.ThroughDate_LABEL}>
                            {getFieldDecorator('thruDate', {
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
                            Submit
                </Button>
                        </Col>
                      </Row>
                      <Tabs defaultActiveKey="Assets" >
                        <TabPane tab="Assets" key="Assets"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns40}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>
                        <TabPane tab="Liabilities" key="Liabilities"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns42}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>
                        <TabPane tab="Equities" key="Equities"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns40}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>
                        <TabPane tab="Total" key="Total"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns41}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>

                      </Tabs>
                    </TabPane>
                    <TabPane tab="Comparative Income Statement" key="f">
                      <Row GUTTER={20}>

                        <Col span={6} >
                          <FormItem label='Period1 Gl Fiscal Type Id	'>
                            {getFieldDecorator('aa', {
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
                        <Col span={6} offset={4} >
                          <FormItem label='Period2 Gl Fiscal Type Id	'>
                            {getFieldDecorator('aa', {
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
                      <Row gutter={20}>
                        <Col span={6} >
                          <FormItem label='Period1 From Date	'>
                            {getFieldDecorator('thruDate', {
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
                        <Col span={6} offset={4}>
                          <FormItem label='Period2 From Date	'>
                            {getFieldDecorator('thruDate', {
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
                        <Col span={6} >
                          <FormItem label='Period1 Through Date		'>
                            {getFieldDecorator('thruDate', {
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
                        <Col span={6} offset={4}>
                          <FormItem label='Period2 Through Date	'>
                            {getFieldDecorator('thruDate', {
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
                            Submit
                </Button>
                        </Col>
                      </Row>
                      <Tabs defaultActiveKey="AccountingRevenues" >
                        <TabPane tab="AccountingRevenues" key="AccountingRevenues"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns44}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>
                        <TabPane tab="Expenses" key="Liabilities"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns44}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>
                        <TabPane tab="Income" key="Income"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns44}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>
                        <TabPane tab="Total" key="Total"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns45}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>

                      </Tabs>
                    </TabPane>
                    <TabPane tab="Comparative Cash Flow Statement" key="g">
                      <Row GUTTER={20}>

                        <Col span={6} >
                          <FormItem label='Period1 Gl Fiscal Type Id	'>
                            {getFieldDecorator('aa', {
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
                        <Col span={6} offset={4} >
                          <FormItem label='Period2 Gl Fiscal Type Id	'>
                            {getFieldDecorator('aa', {
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
                      <Row gutter={20}>
                        <Col span={6} >
                          <FormItem label='Period1 From Date	'>
                            {getFieldDecorator('thruDate', {
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
                        <Col span={6} offset={4}>
                          <FormItem label='Period2 From Date	'>
                            {getFieldDecorator('thruDate', {
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
                        <Col span={6} >
                          <FormItem label='Period1 Through Date		'>
                            {getFieldDecorator('thruDate', {
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
                        <Col span={6} offset={4}>
                          <FormItem label='Period2 Through Date	'>
                            {getFieldDecorator('thruDate', {
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
                            Submit
                </Button>
                        </Col>
                      </Row>
                      <Tabs defaultActiveKey="op" >
                        <TabPane tab="Opening Cash Balance" key="op"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns44}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>
                        <TabPane tab="Period Cash Balance" key="pcb"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns46}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>
                        <TabPane tab="Closing Cash Balance" key="ccb"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns44}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>
                        <TabPane tab="Total" key="Total"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns45}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>

                      </Tabs>
                    </TabPane>
                    <TabPane tab="Comparative Balance Sheet" key="h">
                      <Row GUTTER={20}>

                        <Col span={6} >
                          <FormItem label='Period1 Gl Fiscal Type Id	'>
                            {getFieldDecorator('aa', {
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
                        <Col span={6} offset={4} >
                          <FormItem label='Period2 Gl Fiscal Type Id	'>
                            {getFieldDecorator('aa', {
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

                      <Row gutter={20}>
                        <Col span={6} >
                          <FormItem label='Period1 Through Date		'>
                            {getFieldDecorator('thruDate', {
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
                        <Col span={6} offset={4}>
                          <FormItem label='Period2 Through Date	'>
                            {getFieldDecorator('thruDate', {
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
                            Submit
                </Button>
                        </Col>
                      </Row>
                      <Tabs defaultActiveKey="Assets" >
                        <TabPane tab="Assets" key="Assets"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns44}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>
                        <TabPane tab="Liabilities" key="Liabilities"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns44}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>
                        <TabPane tab="Equities" key="Equities"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns44}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>
                        <TabPane tab="Total" key="Total"> <Row style={{ marginTop: '14px' }}>
                          <div className={styles.tableContainerParent}>
                            <Table
                              className={styles.tableContainer}
                              rowKey="id"
                              title={this.tableHeader}
                              columns={tableColumns45}
                              loading={this.state.loading}
                              // rowSelection = {rowSelection}
                              size="small"
                              onChange={this.handleStandardTableChange}
                            />
                          </div>
                        </Row> </TabPane>

                      </Tabs>
                    </TabPane>
                    <TabPane tab="GL Account Trial Balance" key="i">
                      <Row GUTTER={20}>

                        <Col span={6} >
                          <FormItem label='GL Account ID	'>
                            {getFieldDecorator('aa', {
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
                        <Col span={6} offset={4} >
                          <FormItem label='Time Period	'>
                            {getFieldDecorator('aa', {
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
                      <Row GUTTER={20}>

                        <Col span={6} >
                          <FormItem label='Is Posted	'>
                            {getFieldDecorator('aa', {
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
                            Submit
                </Button>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tab="Inventory Valuation" key="j">
                      <Row GUTTER={20}>

                        <Col span={6} >
                          <FormItem label='Facility Id	'>
                            {getFieldDecorator('aa', {
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
                        <Col span={6} offset={4} >
                          <FormItem label='Product Id	'>
                            {getFieldDecorator('aa', {
                              initialValue: '',
                              enableReinitialize: true,
                            })(
                              <Input style={{ width: '295px' }} addonAfter={
                                <Icon onClick={this.showDrawer1} type="idcard" />
                              } />
                            )}
                          </FormItem>
                        </Col>
                      </Row>
                      <Row GUTTER={20}>

                        <Col span={6} >
                          <FormItem label='Through Date	'>
                            {getFieldDecorator('thruDate', {
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
                            Submit
                </Button>
                        </Col>
                      </Row>
                      <Row style={{ marginTop: '14px' }}>
                        <div className={styles.tableContainerParent}>
                          <Table
                            className={styles.tableContainer}
                            rowKey="id"
                            title={this.tableHeader}
                            columns={tableColumns43}
                            loading={this.state.loading}
                            // rowSelection = {rowSelection}
                            size="small"
                            onChange={this.handleStandardTableChange}
                          />
                        </div>
                      </Row>
                    </TabPane>
                    <TabPane tab="Cost Centers" key="k">
                      <Row GUTTER={20}>

                        <Col span={6} >
                          <FormItem label='Fiscal Gl Type	'>
                            {getFieldDecorator('aa', {
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
                      <Row GUTTER={20}>

                        <Col span={6} >
                          <FormItem label='From Date	'>
                            {getFieldDecorator('thruDate', {
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

                      <Row GUTTER={20}>

                        <Col span={6} >
                          <FormItem label='Through Date	'>
                            {getFieldDecorator('thruDate', {
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
                            Submit
                </Button>
                        </Col>
                      </Row>
                      <Row style={{ marginTop: '14px' }}>
                        <div className={styles.tableContainerParent}>
                          <Table
                            className={styles.tableContainer}
                            rowKey="id"
                            title={this.tableHeader}
                            columns={tableColumns47}
                            loading={this.state.loading}
                            // rowSelection = {rowSelection}
                            size="small"
                            onChange={this.handleStandardTableChange}
                          />
                        </div>
                      </Row>
                    </TabPane>

                  </Tabs>
                </TabPane>


                <TabPane tab="Checks" key="Checks">
                  <Tabs defaultActiveKey="1" >
                    <TabPane tab="Checks to Print" key="1">
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
                            Print
                </Button>
                        </Col>
                      </Row>
                      <Row style={{ marginTop: '14px' }}>
                        <div className={styles.tableContainerParent}>
                          <Table
                            className={styles.tableContainer}
                            rowKey="id"
                            title={this.tableHeader}
                            columns={tableColumns36}
                            loading={this.state.loading}
                            rowSelection={rowSelection}
                            size="small"
                            onChange={this.handleStandardTableChange}
                          />
                        </div>
                      </Row>
                    </TabPane>
                    <TabPane tab="Mark Checks Sent" key="2">
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
                            Send
                </Button>
                        </Col>
                      </Row>
                      <Row style={{ marginTop: '14px' }}>
                        <div className={styles.tableContainerParent}>
                          <Table
                            className={styles.tableContainer}
                            rowKey="id"
                            title={this.tableHeader}
                            columns={tableColumns37}
                            loading={this.state.loading}
                            rowSelection={rowSelection}
                            size="small"
                            onChange={this.handleStandardTableChange}
                          />
                        </div>
                      </Row>
                    </TabPane>
                  </Tabs>
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
            title='Lookup Shipment(s)'
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose9}
            visible={this.state.visible9}
          >
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label='Shipment Id'>
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
                <FormItem label='Shipment Type Id	'>
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
                <FormItem label='Status ID	'>
                  {getFieldDecorator('First_Name', {})(
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
              <Col span={11} offset={2}>
                <FormItem label='Party From	'>
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
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label='Party To	'>
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
              <Col span={6} offset={4}>
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
            title='Lookup Invoices'
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose31}
            visible={this.state.visible31}
          >
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label='Invoice ID	'>
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
                <FormItem label='Invoice Type	'>
                  {getFieldDecorator('Name', {})(
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
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label='Status'>
                  {getFieldDecorator('First_Name', {})(
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
              <Col span={11} offset={2}>
                <FormItem label='Party Id From	'>
                  {getFieldDecorator('Group_Name', {})(
                    <Input
                      name="FromPartyID"
                      addonAfter={
                        <Icon onClick={this.showDrawer30} type="idcard" />
                      }
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label='Party Id To	'>
                  {getFieldDecorator('First_Name', {})(
                    <Input
                      name="FromPartyID"
                      addonAfter={
                        <Icon onClick={this.showDrawer30} type="idcard" />
                      }
                    />,
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
                  columns={tableColumns31}
                  loading={this.state.loading}
                  size="small"
                  onChange={this.handleStandardTableChange}
                />
              </div>
            </Row>
          </Drawer>
          <Drawer
            // title={localConsts.NewAgreementWorkEffort_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose10}
            visible={this.state.visible10}
          >
            <Row gutter={20} style={{ marginTop: '35px' }}>
              <Col span={22}>
                <FormItem label='Parent Period Id	'>
                  {getFieldDecorator('parentPeriodId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Select
                      showSearch
                      // value={this.state.agreementItemSeqId}
                      // onChange={this.handleChange}
                      style={{ width: '595px' }}
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
                <FormItem label='Period Type Id	'>
                  {getFieldDecorator('periodTypeId', {})(
                    <Select
                      showSearch
                      // value={this.state.agreementItemSeqId}
                      // onChange={this.handleChange}
                      style={{ width: '595px' }}
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
                <FormItem label='Period Num	'>
                  {getFieldDecorator('periodNum', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input />
                  )}
                </FormItem>
              </Col>
              <Col span={6} offset={1}>
                <FormItem label='Period Name	'>
                  {getFieldDecorator('periodName', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label='Is Closed	'>
                  {getFieldDecorator('isClosed', {})(
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
              <Col span={6} offset={4}>
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
            // title={localConsts.NewAgreementWorkEffort_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose15}
            visible={this.state.visible15}
          >
            <Row gutter={20} style={{ marginTop: '35px' }}>
              <Col span={22}>
                <FormItem label='Account Type	'>
                  {getFieldDecorator('glAccountTypeId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
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
                      {}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label='GL Account		'>
                  {getFieldDecorator('glAccountId', {})(
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
                      {}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label='Product Category ID	'>
                  {getFieldDecorator('productCategoryId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input addonAfter={
                      <Icon type="idcard" />
                    } />
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
            // title={localConsts.NewAgreementWorkEffort_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose16}
            visible={this.state.visible16}
          >
            <Row gutter={20} style={{ marginTop: '35px' }}>
              <Col span={22}>
                <FormItem label='Fin Account Type Id	'>
                  {getFieldDecorator('finAccountTypeId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
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
                      {}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label='GL Account ID	'>
                  {getFieldDecorator('glAccountId', {})(
                    <Select
                      showSearch

                      onChange={this.handleChange}
                      style={{ width: '595px' }}
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
            // title={localConsts.NewAgreementWorkEffort_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose17}
            visible={this.state.visible17}
          >
            <Row gutter={20} style={{ marginTop: '35px' }}>
              <Col span={22}>
                <FormItem label='Invoice Item Type'>
                  {getFieldDecorator('invoiceItemTypeId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Select
                      showSearch
                      // value={this.state.agreementItemSeqId}
                      onChange={this.handleChange}
                      style={{ width: '595px' }}
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
                <FormItem label='Override Revenue Gl Account Id		'>
                  {getFieldDecorator('glAccountId', {})(
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
                      {}
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
            // title={localConsts.NewAgreementWorkEffort_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose21}
            visible={this.state.visible21}
          >
            <Row gutter={20} style={{ marginTop: '35px' }}>
              <Col span={22}>
                <FormItem label='Variance Reason Id	'>
                  {getFieldDecorator('varianceReasonId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Select
                      showSearch
                      // value={this.state.agreementItemSeqId}
                      // onChange={this.handleChange}
                      style={{ width: '595px' }}
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
                <FormItem label='GL Account ID	'>
                  {getFieldDecorator('glAccountId', {})(
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
                      {}
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
            // title={localConsts.NewAgreementWorkEffort_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose22}
            visible={this.state.visible22}
          >
            <Row gutter={20} style={{ marginTop: '35px' }}>
              <Col span={22}>
                <FormItem label='Card Type'>
                  {getFieldDecorator('cardType', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Select
                      showSearch
                      // value={this.state.agreementItemSeqId}
                      // onChange={this.handleChange}
                      style={{ width: '595px' }}
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
                <FormItem label='GL Account ID	'>
                  {getFieldDecorator('glAccountId', {})(
                    <Select
                      showSearch
                      // value={this.state.agreementItemSeqId}
                      // onChange={this.handleChange}
                      style={{ width: '595px' }}
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
          </Drawer> <Drawer
            // title={localConsts.NewAgreementWorkEffort_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose23}
            visible={this.state.visible23}
          >
            <Row gutter={20} style={{ marginTop: '35px' }}>
              <Col span={22}>
                <FormItem label='Party ID'>
                  {getFieldDecorator('workEffortId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
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
                      {}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20} >
              <Col span={22}>
                <FormItem label='Role Type Id	'>
                  {getFieldDecorator('workEffortId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
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
                      {}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20} >
              <Col span={22}>
                <FormItem label='Gl Account Type Id		'>
                  {getFieldDecorator('workEffortId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
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
                      {}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label='GL Account ID	'>
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
                      {}
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
            // title={localConsts.NewAgreementWorkEffort_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose43}
            visible={this.state.visible43}
          >
            <Row gutter={20} style={{ marginTop: '35px' }}>

              <Col span={22}>
                <FormItem label='Tax Authority Geo	'>
                  {getFieldDecorator('taxAuthGeoId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Select
                      showSearch
                      // value={this.state.agreementItemSeqId}
                      // onChange={this.handleChange}
                      style={{ width: '595px' }}
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
            <Row gutter={20} >
              <Col span={22}>
                <FormItem label='Tax Authority Party'>
                  {getFieldDecorator('taxAuthPartyId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
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
                      {}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label='GL Account ID	'>
                  {getFieldDecorator('glAccountId', {})(
                    <Select
                      showSearch
                      // value={this.state.agreementItemSeqId}
                      // onChange={this.handleChange}
                      style={{ width: '595px' }}
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
            // title={localConsts.NewAgreementWorkEffort_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose24}
            visible={this.state.visible24}
          >
            <Row gutter={20} style={{ marginTop: '35px' }}>
              <Col span={22}>
                <FormItem label='Party ID'>
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
                    />, // check drawer
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20} >
              <Col span={22}>
                <FormItem label='Role Type Id	'>
                  {getFieldDecorator('roleTypeId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Select
                      showSearch
                      // value={this.state.agreementItemSeqId}
                      // onChange={this.handleChange}
                      style={{ width: '595px' }}
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
            <Row gutter={20} >
              <Col span={22}>
                <FormItem label='Gl Account Type Id		'>
                  {getFieldDecorator('glAccountTypeId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
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
                      {}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label='GL Account ID	'>
                  {getFieldDecorator('glAccountTypeId', {})(
                    <Select
                      showSearch
                      // value={this.state.agreementItemSeqId}
                      // onChange={this.handleChange}
                      style={{ width: '595px' }}
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
            // title={localConsts.NewAgreementWorkEffort_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose26}
            visible={this.state.visible26}
          >
            <Row gutter={20} style={{ marginTop: '35px' }}>
              <Col span={22}>
                <FormItem label='Gl Reconciliation Id	'>
                  {getFieldDecorator('glReconciliationId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input disabled />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20} >
              <Col span={22}>
                <FormItem label='Gl Reconciliation Name	'>
                  {getFieldDecorator('glReconciliationName', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20} >
              <Col span={22}>
                <FormItem label='Description'>
                  {getFieldDecorator('description', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={6}>
                <FormItem label='Created Date	'>
                  {getFieldDecorator('createdDate', {
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
              <Col span={6} offset={6}>
                <FormItem label='Last Modified Date	'>
                  {getFieldDecorator('lastModifiedDate', {
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
              <Col span={11}>
                <FormItem label='Gl Account Id	'>
                  {getFieldDecorator('glAccountId', {})(
                    <Input disabled />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label='Status'>
                  {getFieldDecorator('statusId', {})(
                    <Select
                      showSearch
                      // value={this.state.agreementItemSeqId}
                      // onChange={this.handleChange}
                      style={{ width: '595px' }}
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
                <FormItem label='Organization Party Id	'>
                  {getFieldDecorator('organizationPartyId', {})(
                    <Select
                      showSearch
                      // value={this.state.agreementItemSeqId}
                      // onChange={this.handleChange}
                      style={{ width: '595px' }}
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
                <FormItem label='Reconciled Balance	'>
                  {getFieldDecorator('reconciledBalance', {})(
                    <Input />
                  )}
                </FormItem>
              </Col>
              <Col span={6} offset={2}>
                <FormItem label='Opening Balance	'>
                  {getFieldDecorator('openingBalance', {})(
                    <Input />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={6}>
                <FormItem label='Reconciled Date	'>
                  {getFieldDecorator('reconciledDate', {
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
            // title={localConsts.NewAgreementWorkEffort_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose25}
            visible={this.state.visible25}
          >
            <Row gutter={20} style={{ marginTop: '35px' }}>
              <Col span={22}>
                <FormItem label='Asset GL account	'>
                  {getFieldDecorator('workEffortId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
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
                      {}
                    </Select>, // check drawer
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20} >
              <Col span={22}>
                <FormItem label='Accumulated depreciation GL account		'>
                  {getFieldDecorator('workEffortId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
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
                      {}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20} >
              <Col span={22}>
                <FormItem label='Gl Account Type Id		'>
                  {getFieldDecorator('workEffortId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
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
                      {}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label='Depreciation GL account		'>
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
                      {}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label='Profit GL account		'>
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
                      {}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label='Loss GL account	'>
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
                      {}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label='Fixed Asset Type Id	'>
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
                      {}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label='Fixed Asset Id		'>
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
                      {}
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
            title={localConsts.PartybyName_title}
            width="709px"
            closable={true}
            onClose={this.onClose30}
            visible={this.state.visible30}
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
                  columns={tableColumns30}
                  size="small"
                  onChange={this.handleStandardTableChange}
                />
              </div>
            </Row>
          </Drawer>
          <Drawer
            // title={localConsts.LookupPayment_title}
            width="709px"
            closable={true}
            onClose={this.onClose29}
            visible={this.state.visible29}
          >
            <Row gutter={20} style={{ marginTop: '35px' }} >
              <Col span={12}>
                <FormItem label='PaymentID	'>
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

            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label={localConsts.FromPartyID_LABEL}>
                  {getFieldDecorator('FromPartyID', {})(
                    <Input
                      name="FromPartyID"
                      addonAfter={
                        <Icon onClick={this.showDrawer30} type="idcard" />
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
                        <Icon onClick={this.showDrawer30} type="idcard" />
                      }
                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label='Amount Applied	'>
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
                  columns={tableColumns29}
                  size="small"
                  onChange={this.handleStandardTableChange}
                />
              </div>
            </Row>
          </Drawer>
          <Drawer
            // title={localConsts.NewAgreementWorkEffort_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose20}
            visible={this.state.visible20}
          >
            <Row gutter={20} style={{ marginTop: '35px' }}>
              <Col span={22}>
                <FormItem label='Payment Method Type	'>
                  {getFieldDecorator('paymentMethodTypeId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Select
                      showSearch
                      // value={this.state.agreementItemSeqId}
                      // onChange={this.handleChange}
                      style={{ width: '595px' }}
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
                <FormItem label='Gl Account Id		'>
                  {getFieldDecorator('glAccountId', {})(
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
                      {}
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
            // title={localConsts.NewAgreementWorkEffort_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose19}
            visible={this.state.visible19}
          >
            <Row gutter={20} style={{ marginTop: '35px' }}>
              <Col span={22}>
                <FormItem label='Payment Type	'>
                  {getFieldDecorator('workEffortId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
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
                      {}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label='Gl Account Type	'>
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
                      {}
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
            // title={localConsts.NewAgreementWorkEffort_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose18}
            visible={this.state.visible18}
          >
            <Row gutter={20} style={{ marginTop: '35px' }}>
              <Col span={22}>
                <FormItem label='Invoice Purchase Item Type	'>
                  {getFieldDecorator('invoiceItemTypeId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Select
                      showSearch
                      // value={this.state.agreementItemSeqId}
                      onChange={this.handleChange}
                      style={{ width: '595px' }}
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
                <FormItem label='Invoice Override Expense Gl Account Id		'>
                  {getFieldDecorator('glAccountId', {})(
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
                      {}
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
            // title={localConsts.NewAgreementWorkEffort_title}
            width="709px"
            placement="right"
            closable={true}
          // onClose={this.onClose10}
          // visible={this.statvisible10visible10e.visible10}
          >
            <Row gutter={20}>
              <Col span={22}>
                <FormItem label='Parent Period Id	'>
                  {getFieldDecorator('workEffortId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
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
                      {}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label='Period Type Id	'>
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
                      {}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={6}>
                <FormItem label='Period Num	'>
                  {getFieldDecorator('workEffortId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input />
                  )}
                </FormItem>
              </Col>
              <Col span={6} offset={1}>
                <FormItem label='Period Name	'>
                  {getFieldDecorator('workEffortId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label='Is Closed	'>
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
                      {}
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
              <Col span={6} offset={4}>
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
            placement="right"
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
            placement="right"
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
            // title={localConsts.NewProduct_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose13}
            visible={this.state.visible13}
          >
            <Row gutter={20} style={{ marginTop: '35px' }}>
              <Col span={11}>
                <FormItem label='Account Type	'>
                  {getFieldDecorator('productId', {
                    initialValue: data.InvoiceDate,
                    enableReinitialize: true,
                  })(
                    <Select
                      showSearch
                      value={this.state.roleTypeId}
                      onChange={this.roleTypeIdChange}
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
                <FormItem label='GL Account	'>
                  {getFieldDecorator('price', {})(
                    <Select
                      showSearch
                      value={this.state.roleTypeId}
                      onChange={this.roleTypeIdChange}
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
            <Row gutter={20} >
              <Col span={11}>
                <FormItem label='Product Id'>
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
              </Col></Row>
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
            placement="right"
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
            placement="right"
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
            // title={localConsts.NewAgreementItem_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <Row gutter={20} style={{ marginTop: '35px' }}>
              <Col span={11}>
                <FormItem label='Gl Account Type	'>
                  {getFieldDecorator('glAccountTypeId', {})(
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
              <Col span={8} offset={2}>
                <FormItem label='Gl Account Id'>
                  {getFieldDecorator('glAccountId', {})(
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
            placement="right"
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
            // title={localConsts.NewTerms_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose4}
            visible={this.state.visible4}
          >
            <Row gutter={20} style={{ marginTop: '35PX' }}>
              <Col span={11}>
                <FormItem label='Gl Account Id	'>
                  {getFieldDecorator('glAccountId', {})(
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
              <Col span={8} offset={2}>
                <FormItem label='From Date'>
                  {getFieldDecorator('fromDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker
                      // onChange={this.onChange}
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
            // title={localConsts.NewPromotion_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose3}
            visible={this.state.visible3}
          >
            <Row gutter={20} style={{ marginTop: '35px' }}>
              <Col span={8}>
                <FormItem label='Gl Journal Name	'>
                  {getFieldDecorator('glJournalName', {})(
                    <Input />
                  )}
                </FormItem>
              </Col>
            </Row>

            <Row gutter={20}>
              <Col span={6}>
                <FormItem label='Gl Journal Id'>
                  {getFieldDecorator('glJournalId', {
                    initialValue: this.state.glJournalId,
                    enableReinitialize: true,
                  })(
                    <Input
                      type="text"
                      disabled
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
            // title={localConsts.LookupProduct_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose33}
            visible={this.state.visible33}
          >
            {this.state.showUpdate && <div>
              {this.state.down && (
                <div style={{ marginTop: '30px' }}>
                  <h6 style={{ marginRight: 8, display: 'inline', marginTop: '30px' }} />
                  {this.state.tagsFromServer.map(tag => (
                    <CheckableTag
                      key={tag}
                      // checked={this.state.selectedTags.indexOf(tag) > -1}
                      onChange={checked =>
                        this.handleChange(tag, checked)
                      }
                    >
                      {tag}
                    </CheckableTag>
                  ))}
                </div>
              )}</div>}
            <Row gutter={20} style={{ marginTop: '35px' }}>

              <Col span={11} >
                <FormItem label='Acctg Trans Type	'>
                  {getFieldDecorator('acctgTransTypeId', {
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
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label="Fiscal Gl Type	">
                  {getFieldDecorator('glFiscalTypeId', {
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
            <Row gutter={20}>

              <Col span={6} >
                <FormItem label='Invoice ID	'>
                  {getFieldDecorator('invoiceId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input style={{ width: '295px' }} addonAfter={
                      <Icon onClick={this.showDrawer31} type="idcard" />
                    } />
                  )}
                </FormItem>
              </Col>

              <Col span={6} offset={6}>
                <FormItem label="Payment Id	">
                  {getFieldDecorator('paymentId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input style={{ width: '295px' }} addonAfter={
                      <Icon onClick={this.showDrawer29} type="idcard" />
                    } />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={6} >
                <FormItem label='Product Id	'>
                  {getFieldDecorator('productId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input style={{ width: '295px' }} addonAfter={
                      <Icon onClick={this.showDrawer1} type="idcard" />
                    } />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={6}>
                <FormItem label="Work Effort Id	">
                  {getFieldDecorator('workEffortId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input style={{ width: '295px' }} addonAfter={
                      <Icon onClick={this.showDrawer14} type="idcard" />
                    } />
                  )}
                </FormItem>
              </Col>
              <Col span={6} offset={6}>
                <FormItem label='Shipment Id	'>
                  {getFieldDecorator('shipmentId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input style={{ width: '295px' }} addonAfter={
                      <Icon onClick={this.showDrawer9} type="idcard" />
                    } />
                  )}
                </FormItem>
              </Col>
            </Row>

            <Row gutter={20}>
              <Col span={6}>
                <FormItem label='Description	'>
                  {getFieldDecorator('description', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input

                      style={{ width: '295px' }}

                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={6} offset={6}>
                <FormItem label='Transaction Date	'>
                  {getFieldDecorator('transactionDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker

                      style={{ width: '295px' }}

                    />,
                  )}
                </FormItem>
              </Col>
            </Row>


            <Row gutter={20}>
              <Col span={6}>
                <FormItem label="Fixed Asset Id	">
                  {getFieldDecorator('fixedAssetId', {
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
              <Col span={6} offset={6}>
                <FormItem label='Debit Gl Account Id	'>
                  {getFieldDecorator('debitGlAccountId', {
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
            <Row gutter={20}>
              <Col span={6}>
                <FormItem label="Credit Gl Account Id	">
                  {getFieldDecorator('creditGlAccountId', {
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
              <Col span={6} offset={6}>
                <FormItem label='Amount'>
                  {getFieldDecorator('aa', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input />
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
                  Save
                </Button>
              </Col>
            </Row>
            {this.state.showUpdate && <div> <Row style={{ marginTop: '24px' }}>

              <Col span={6} offset={18}>
                <div>

                  <span
                    style={{ color: '#337AB7', marginLeft: '24px' }}
                    onClick={this.showDrawer35}
                  >
                    Add Transaction Entry


                           </span>
                </div>
              </Col></Row></div>}
          </Drawer>
          <Drawer
            // title={localConsts.LookupProduct_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose32}
            visible={this.state.visible32}
          >
            {this.state.showUpdate && <div>
              {this.state.down && (
                <div style={{ marginTop: '30px' }}>
                  <h6 style={{ marginRight: 8, display: 'inline', marginTop: '30px' }} />
                  {this.state.tagsFromServer.map(tag => (
                    <CheckableTag
                      key={tag}
                      // checked={this.state.selectedTags.indexOf(tag) > -1}
                      onChange={checked =>
                        this.handleChange(tag, checked)
                      }
                    >
                      {tag}
                    </CheckableTag>
                  ))}
                </div>
              )}</div>}
            <Row gutter={20} style={{ marginTop: '35px' }}>
              <Col span={6}>
                <FormItem label='Acctg Trans Id	'>
                  {getFieldDecorator('acctgTransTypeId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input disabled style={{ width: '295px' }} />
                  )}
                </FormItem>
              </Col>
              <Col span={6} offset={6}>
                <FormItem label='Transaction Type	'>
                  {getFieldDecorator('acctgTransTypeId', {
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
            <Row gutter={20}>
              <Col span={6}>
                <FormItem label="Fiscal Gl Type	">
                  {getFieldDecorator('glFiscalTypeId', {
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
              <Col span={6} offset={6}>
                <FormItem label='Gl Journal Id	'>
                  {getFieldDecorator('glJournalId', {
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
            <Row gutter={20}>
              <Col span={6}>
                <FormItem label="Is Posted	">
                  {getFieldDecorator('isPosted', {
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
              <Col span={6} offset={6}>
                <FormItem label='Invoice ID	'>
                  {getFieldDecorator('invoiceId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input style={{ width: '295px' }} addonAfter={
                      <Icon onClick={this.showDrawer31} type="idcard" />
                    } />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={6}>
                <FormItem label="Payment Id	">
                  {getFieldDecorator('paymentId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input style={{ width: '295px' }} addonAfter={
                      <Icon onClick={this.showDrawer29} type="idcard" />
                    } />
                  )}
                </FormItem>
              </Col>
              <Col span={6} offset={6}>
                <FormItem label='Product Id	'>
                  {getFieldDecorator('productId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input style={{ width: '295px' }} addonAfter={
                      <Icon onClick={this.showDrawer1} type="idcard" />
                    } />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={6}>
                <FormItem label="Work Effort Id	">
                  {getFieldDecorator('workEffortId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input style={{ width: '295px' }} addonAfter={
                      <Icon onClick={this.showDrawer14} type="idcard" />
                    } />
                  )}
                </FormItem>
              </Col>
              <Col span={6} offset={6}>
                <FormItem label='Shipment Id	'>
                  {getFieldDecorator('shipmentId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input style={{ width: '295px' }} addonAfter={
                      <Icon onClick={this.showDrawer9} type="idcard" />
                    } />
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

                      style={{ width: '295px' }}

                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={6} offset={6}>
                <FormItem label={localConsts.ThroughDate_LABEL}>
                  {getFieldDecorator('thruDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker

                      style={{ width: '295px' }}

                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={6}>
                <FormItem label='Description	'>
                  {getFieldDecorator('description', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input

                      style={{ width: '295px' }}

                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={6} offset={6}>
                <FormItem label='Transaction Date	'>
                  {getFieldDecorator('transactionDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker

                      style={{ width: '295px' }}

                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={6}>
                <FormItem label='Posted Date	'>
                  {getFieldDecorator('postedDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker

                      style={{ width: '295px' }}

                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={6} offset={6}>
                <FormItem label='Scheduled Posting Date	'>
                  {getFieldDecorator('scheduledPostingDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker

                      style={{ width: '295px' }}

                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={6}>
                <FormItem label='Voucher Ref	'>
                  {getFieldDecorator('voucherRef', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input

                      style={{ width: '295px' }}

                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={6} offset={6}>
                <FormItem label='Voucher Date	'>
                  {getFieldDecorator('voucherDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker

                      style={{ width: '295px' }}

                    />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={6}>
                <FormItem label="Group Status	">
                  {getFieldDecorator('groupStatusId', {
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
              <Col span={6} offset={6}>
                <FormItem label='Fixed Asset Id	'>
                  {getFieldDecorator('fixedAssetId', {
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
            <Row gutter={20}>
              <Col span={6}>
                <FormItem label="Inventory Item Id	">
                  {getFieldDecorator('inventoryItemId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input />
                  )}
                </FormItem>
              </Col>
              <Col span={6} offset={6}>
                <FormItem label='Physical Inventory Id	'>
                  {getFieldDecorator('physicalInventoryId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={6}>
                <FormItem label="Party ID	">
                  {getFieldDecorator('partyId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input style={{ width: '295px' }} addonAfter={
                      <Icon onClick={this.showDrawer30} type="idcard" />
                    } />
                  )}
                </FormItem>
              </Col>
              <Col span={6} offset={6}>
                <FormItem label='Role Type Id	'>
                  {getFieldDecorator('roleTypeId', {
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
            <Row gutter={20}>
              <Col span={6}>
                <FormItem label="Fin Account Trans Id	">
                  {getFieldDecorator('finAccountTransId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input style={{ width: '295px' }} />
                  )}
                </FormItem>
              </Col>
              <Col span={6} offset={6}>
                <FormItem label='Receipt Id	'>
                  {getFieldDecorator('receiptId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={6}>
                <FormItem label="Their Acctg Trans Id	">
                  {getFieldDecorator('theirAcctgTransId', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input style={{ width: '295px' }} />
                  )}
                </FormItem>
              </Col>

            </Row>
            <Row gutter={20}>
              <Col span={6}>
                <FormItem label='Created Date	'>
                  {getFieldDecorator('createdDate', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                    <Input

                      style={{ width: '295px' }}

                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={6} offset={6}>
                <FormItem label='Last Modified Date	'>
                  {getFieldDecorator('lastModifiedDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <DatePicker

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
            {this.state.showUpdate && <div> <Row style={{ marginTop: '24px' }}>

              <Col span={6} offset={18}>
                <div>

                  <span
                    style={{ color: '#337AB7', marginLeft: '24px' }}
                    onClick={this.showDrawer35}
                  >
                    Add Transaction Entry


                           </span>
                </div>
              </Col></Row></div>}
          </Drawer>
          <Drawer
            title='Add Transaction Entry'
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose35}
            visible={this.state.visible35}
          >
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label='Gl Account Type'>
                  {getFieldDecorator('glAccountTypeId', {})(
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
              <Col span={11} offset={2}>
                <FormItem label='Gl Account Id	'>
                  {getFieldDecorator('glAccountId', {})(
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
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label='Debit Credit Flag	'>
                  {getFieldDecorator('debitCreditFlag ', {})(
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
              <Col span={11} offset={2}>
                <FormItem label='Party Id	'>
                  {getFieldDecorator('partyId', {})(
                    <Input />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label='Orig Amount	'>
                  {getFieldDecorator('origAmount', {})(
                    <Input />
                  )}
                </FormItem>
              </Col>
              <Col span={11} offset={2}>
                <FormItem label='Orig Currency Uom Id	'>
                  {getFieldDecorator('origCurrencyUomId', {})(
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
                <FormItem label='Orig Currency Uom Id	'>
                  {getFieldDecorator('origCurrencyUomId', {})(
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
                <FormItem label='Purpose'>
                  {getFieldDecorator('purposeEnumId', {})(
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
                <FormItem label='Voucher Ref	'>
                  {getFieldDecorator('voucherRef', {})(
                    <Input />
                  )}
                </FormItem>
              </Col>
              <Col span={11} offset={2}>
                <FormItem label='Product Id	'>
                  {getFieldDecorator('productId', {})(
                    <Input />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>

            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label='Voucher Ref	'>
                  {getFieldDecorator('voucherRef', {})(
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
                <FormItem label='Reconcile Status		'>
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
                      {}
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>

            <Row gutter={20}>
              <Col span={11}>
                <FormItem label='Settlement'>
                  {getFieldDecorator('settlementTermId', {})(
                    <Input />

                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label='Summary ?	'>
                  {getFieldDecorator('isSummary', {})(
                    <Input />

                  )}
                </FormItem>
              </Col>
              <Col span={11} offset={2}>
                <FormItem label='Description'>
                  {getFieldDecorator('taxId', {})(
                    <Input />

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
                  columns={tableColumns35}
                  loading={this.state.loading}
                  size="small"
                  onChange={this.handleStandardTableChange}
                />
              </div>
            </Row>
          </Drawer>
          <Drawer
            // title={localConsts.LookupProduct_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose34}
            visible={this.state.visible34}
          >
            <Row style={{ marginTop: '34px' }}>
              <div className={styles.tableContainerParent}>
                <Table
                  className={styles.tableContainer}
                  rowKey="id"
                  title={this.tableHeader}
                  columns={tableColumns34}
                  loading={this.state.loading}
                  size="small"
                  onChange={this.handleStandardTableChange}
                />
              </div>
            </Row></Drawer>
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
        </Form>
      </Fragment>
    );
  }
}
OGLSForm.propTypes = {
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
  connect(({ OGLS_Accounting }) => ({
    Data: OGLS_Accounting.reducerSave,
    CCGL: OGLS_Accounting.reducerSaveCCGL,
    FAGL: OGLS_Accounting.reducerSavePMGL,
    PMGL: OGLS_Accounting.reducerSavePMGL,
    PGA: OGLS_Accounting.reducerSavePGA,
    PGAC: OGLS_Accounting.reducerSavePGAC,
    PTGL: OGLS_Accounting.reducerSavePTGL,
    SI: OGLS_Accounting.reducerSaveSI,
    JOU: OGLS_Accounting.reducerSaveJou,
    AgreementItem: OGLS_Accounting.reducerSaveAgreementItem,
    AgreementWorkEffort: OGLS_Accounting.reducerSaveAgreementWorkEffort,
  }))(OGLSForm),
);
