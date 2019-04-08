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
import * as actionConsts from '../../../common/TitlePane/ActionConsts';
import * as localConsts from './TaxAuthConsts';
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
  paymentGroup: [],
  more : false,
};
class TaxAuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: newObject,
      isExistMessage: '',
      commentsData: [],
      GLA : [],
      enableSaveButtonValue: false,
      visibleAddress: false,
      visibleContactPerson: false,
      visible: false,
      visible1: false,
      visible2: false,
      visible0: false,
      currentKey: '2',
      key: 'Edit',
      activeKey: '2',
      paymentGroupId: '',
      visible4: false,
      payment: [],
      paymentMsg: [],
      PR:[],
      visGLA : false,
      Id : '',
      visiblePRo : false,
      taxAuthPartyId : '10000',
      Tax : [],
      Cat : [],
      taxAuthGeoId : '',
      paymentId: '',
      paymentGroupMemberUpdate: false,
      disabled: false,
      disabled1: false,
      vis: false,
      visibleStore : false,
      visParties : false,
      ASSO : [],
      Assoid:'',
      taxAuthorityRateSeqId : '',
      update : false,
      partyId : '',
      Parties : []
    };
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  showDrawer4 = () => {
    this.setState({
      visible4: true,
    });
  };

  showDrawer_PR = () => {
    this.setState({
      visiblePRo: true,
    });
  };
  onClosePR = () => {
    this.setState({
      visiblePRo: false,
    });
  };
  showDrawer_store = () => {
    this.setState({
      visibleStore: true,
    });
  };
  onClose_stroe = () => {
    this.setState({
      visibleStore: false,
    });
  };
  onClose4 = () => {
    this.setState({
      visible4: false,
    });
  };
  showDrawer_GLA = () => {
    this.setState({
      visGLA: true,
    });
  };
  onClose_GLA = () => {
    this.setState({
      visGLA: false,
    });
  };
  showDrawer_Parties = () => {
    this.setState({
      visParties: true,
    });
  };
  onClose_Parties = () => {
    this.setState({
      visParties: false,
    });
  };
  showDrawer_ass = () => {
    this.setState({
      vis: true,
    });
  };
  onClose_ass = () => {
    this.setState({
      vis: false,
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
    if (nextProps.Tax != undefined) {
      var tmp = [];
      tmp.push({taxAuthGeoId : this.state.taxAuthGeoId});
      this.setState({ Tax: tmp });
    }
      if (nextProps.ASSO != undefined) {
      var tmp = [];
      tmp.push({Assoid : this.state.Assoid});
      this.setState({ ASSO: tmp });
    }
   
    if (nextProps.Cat != undefined) {
      var tmp = [];
      tmp.push({productCategoryId : this.state.productCategoryId});
      this.setState({ Cat: tmp });
    }

    if (nextProps.CatDel != undefined) {
      var tmp = [];
      // tmp.push({productCategoryId : this.state.productCategoryId});
      this.setState({ Cat: tmp });
    }
    if (nextProps.GLA != undefined) {
      var tmp = [];
      tmp.push({GlaId : this.state.Id});
      this.setState({ GLA: tmp });
    }
    
    if (nextProps.GlaDel != undefined) {
      var tmp = [];
      // tmp.push({productCategoryId : this.state.productCategoryId});
      this.setState({ GLA: tmp });
    }
    if (nextProps.PR != undefined) {
      var tmp = [];
      tmp.push({taxAuthorityRateSeqId : nextProps.PR.taxAuthorityRateSeqId});
      this.setState({PR: tmp ,taxAuthorityRateSeqId : nextProps.PR.taxAuthorityRateSeqId});
    } 
    if (nextProps.Parties != undefined) {
      var tmp = [];
      tmp.push({id : this.state.partyId});
      this.setState({Parties: tmp ,taxAuthorityRateSeqId : nextProps.Parties.taxAuthorityRateSeqId});
    }
    
    if (nextProps.PRDel != undefined) {
      var tmp = [];
      // tmp.push({productCategoryId : this.state.productCategoryId});
      this.setState({ PR: tmp });
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
    console.log(key);
    this.setState({ key: key });
  };
  handleSubmit = e => {
    e.preventDefault();
    const activeKey = this.state.activeKey;
    const key = this.state.key;
    console.log(key,activeKey);
    this.props.form.validateFields((errors, values) => {
      if (!errors) {
        if (activeKey === '2') {
          var obj = {
            taxAuthGeoId: values.taxAuthGeoId,
            taxAuthPartyId: values.taxAuthPartyId,
            requireTaxIdForExemption : values.requireTaxIdForExemption,
            taxIdFormatPattern : values.taxIdFormatPattern,
            includeTaxInPrice : values.includeTaxInPrice

          };
          this.setState({taxAuthGeoId : obj.taxAuthGeoId});
          this.props.handleSubmitAction(actionConsts.ACTION_TYPE_SAVE, obj);
        }
        if (activeKey === '1') {
          if (key === 'Categories') {
            var obj = {
              taxAuthGeoId: this.state.taxAuthGeoId,
              taxAuthPartyId: this.state.taxAuthPartyId,
              productCategoryId: values.productCategoryId,
            };

            this.setState({productCategoryId : obj.productCategoryId});
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_ADD_TAX_AUTH_CAT,
              obj,
            );
          }
          if (key === 'Edit') {
            console.log('edit');
            var obj = {
              taxAuthGeoId: values.taxAuthGeoId,
              taxAuthPartyId: values.taxAuthPartyId,
              requireTaxIdForExemption : values.requireTaxIdForExemption,
              taxIdFormatPattern : values.taxIdFormatPattern,
              includeTaxInPrice : values.includeTaxInPrice
  
            };
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_TAXAuth,
              obj,
            );
          }
          if (key === 'Associations') {
      
            var obj = {
              taxAuthGeoId: this.state.paymentGroupId,
              taxAuthPartyId: values.taxAuthPartyId,
              toTaxAuthGeoId: values.toTaxAuthGeoId,
              toTaxAuthPartyId: values.toTaxAuthPartyId,
              // fromDate: values.paymentId,
              // thruDate: values.paymentId,
              taxAuthorityAssocTypeId: values.taxAuthorityAssocTypeId,
              
            };
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_ASSO,
              obj,
            );
          }
          if (key === 'GLA') {
            var obj = {
              taxAuthGeoId: this.state.taxAuthGeoId,
              taxAuthPartyId: this.state.taxAuthPartyId,
              organizationPartyId: values.organizationPartyId,
              glAccountId : values.glAccountId
            };
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_GLA,
              obj,
            );
          }
          if (key === 'ProductRates' && this.state.update === false) {
            var obj = {
              taxAuthGeoId: this.state.taxAuthGeoId,
              taxAuthPartyId: this.state.taxAuthPartyId,
              taxAuthorityRateTypeId : values.taxAuthorityRateTypeId,
              organizationPartyId: values.organizationPartyId,
              productStoreId : values.productStoreId,
              productCategoryId : values.productCategoryId,
              titleTransferEnumId : values.titleTransferEnumId,
              minItemPrice : values.minItemPrice,
              minPurchase : values.minPurchase,
              taxShipping : values.taxShipping,
              taxPercentage : values.taxPercentage,
              taxPromotions : values.taxPromotions,
              description : values.description,
              isTaxInShippingPrice : values.isTaxInShippingPrice
            };
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_PR,
              obj,
            );
          }
          if (key === 'ProductRates' && this.state.update === true) {
            var obj = {
              taxAuthorityRateSeqId : this.state.taxAuthorityRateSeqId,
              taxAuthGeoId: this.state.taxAuthGeoId,
              taxAuthPartyId: this.state.taxAuthPartyId,
              taxAuthorityRateTypeId : values.taxAuthorityRateTypeId,
              organizationPartyId: values.organizationPartyId,
              productStoreId : values.productStoreId,
              productCategoryId : values.productCategoryId,
              titleTransferEnumId : values.titleTransferEnumId,
              minItemPrice : values.minItemPrice,
              minPurchase : values.minPurchase,
              taxShipping : values.taxShipping,
              taxPercentage : values.taxPercentage,
              taxPromotions : values.taxPromotions,
              description : values.description,
              isTaxInShippingPrice : values.isTaxInShippingPrice
            };
            this.setState({update:false});
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_PR,
              obj,
            );
          }
          if (key === 'Parties' && this.state.update === false) {
            var obj = {
              taxAuthGeoId: this.state.taxAuthGeoId,
              taxAuthPartyId: this.state.taxAuthPartyId,
              taxAuthorityRateTypeId : values.taxAuthorityRateTypeId,
              partyId: values.partyId,
              partyTaxId : values.partyTaxId,
              isExempt : values.isExempt,
              isNexus : values.isNexus,
            };
            this.setState({partyId : obj.partyId});
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_PARTIES,
              obj,
            );
          }
          if (key === 'Parties' && this.state.update === true) {
            var obj = {
              taxAuthGeoId: this.state.taxAuthGeoId,
              taxAuthPartyId: this.state.taxAuthPartyId,
              taxAuthorityRateTypeId : values.taxAuthorityRateTypeId,
              partyId: values.partyId,
              partyTaxId : values.partyTaxId,
              isExempt : values.isExempt,
              isNexus : values.isNexus,
            };
            this.setState({update:false});
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_PARTIES,
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
    console.log(this.state.Cat);
    const { getFieldDecorator } = this.props.form;
    const { currentAction } = this.props;
    const PaymentTypeConst = localConsts.PaymentTypeConst.map(k => (
      <Option key={k.label} value={k.value}>
        {k.label}
      </Option>
    ));
    const To_Date = localConsts.To_Date.map(k => (
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
        title: `${localConsts.ProductCategoryTypeId}`,
        dataIndex: 'ProductCategoryTypeId',
        id: 'ProductCategoryTypeId',
      },
      {
        title: `${localConsts.PrimaryParentCategoryId}`,
        dataIndex: 'PrimaryParentCategoryId',
        id: 'PrimaryParentCategoryId',
      },
      {
        title: `${localConsts.CategoryName}`,
        dataIndex: 'CategoryName',
        id: 'CategoryName',
      },
      {
        title: `${localConsts.Description}`,
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: `${localConsts.ShowInSelect}`,
        dataIndex: 'ShowInSelect',
        id: 'ShowInSelect',
      },
    ];
    const tableColumns_store = [
      {
        title: `${localConsts.ProductStoreId}`,
        dataIndex: 'ProductCategoryTypeId',
        id: 'ProductCategoryTypeId',
      },
      {
        title: `${localConsts.PrimaryStoreGroupId}`,
        dataIndex: 'PrimaryParentCategoryId',
        id: 'PrimaryParentCategoryId',
      },
      {
        title: `${localConsts.StoreName}`,
        dataIndex: 'CategoryName',
        id: 'CategoryName',
      },
     
    ];
    const tableColumns_reports = [
      {
        title:'Invoice ID	',
        dataIndex: 'ProductCategoryTypeId',
        id: 'ProductCategoryTypeId',
      },
      {
        title:'Item No',
        dataIndex: 'ProductCategoryTypeId',
        id: 'ProductCategoryTypeId',
      }, {
        title:'Invoice Item Type	',
        dataIndex: 'ProductCategoryTypeId',
        id: 'ProductCategoryTypeId',
      }, {
        title:'Override Gl Account Id	',
        dataIndex: 'ProductCategoryTypeId',
        id: 'ProductCategoryTypeId',
      }, {
        title:'Override Org Party Id	',
        dataIndex: 'ProductCategoryTypeId',
        id: 'ProductCategoryTypeId',
      }, {
        title:'Inventory Item Id	',
        dataIndex: 'ProductCategoryTypeId',
        id: 'ProductCategoryTypeId',
      }, {
        title:'Product Id	',
        dataIndex: 'ProductCategoryTypeId',
        id: 'ProductCategoryTypeId',
      }, {
        title:'Product Feature Id	',
        dataIndex: 'ProductCategoryTypeId',
        id: 'ProductCategoryTypeId',
      }, {
        title:'Parent Invoice Id	',
        dataIndex: 'ProductCategoryTypeId',
        id: 'ProductCategoryTypeId',
      }, {
        title:'Parent Invoice Item Seq Id	',
        dataIndex: 'ProductCategoryTypeId',
        id: 'ProductCategoryTypeId',
      }, {
        title:'UOM',
        dataIndex: 'ProductCategoryTypeId',
        id: 'ProductCategoryTypeId',
      }, {
        title:'Taxable Flag	',
        dataIndex: 'ProductCategoryTypeId',
        id: 'ProductCategoryTypeId',
      },{
        title:'Quantity	',
        dataIndex: 'ProductCategoryTypeId',
        id: 'ProductCategoryTypeId',
      },{
        title:'Amount',
        dataIndex: 'ProductCategoryTypeId',
        id: 'ProductCategoryTypeId',
      },{
        title:'Description',
        dataIndex: 'ProductCategoryTypeId',
        id: 'ProductCategoryTypeId',
      },{
        title:'Tax Authority Party	',
        dataIndex: 'ProductCategoryTypeId',
        id: 'ProductCategoryTypeId',
      },{
        title:'Tax Auth Geo ID	',
        dataIndex: 'ProductCategoryTypeId',
        id: 'ProductCategoryTypeId',
      },{
        title:'Tax Authority Rate Seq Id	',
        dataIndex: 'ProductCategoryTypeId',
        id: 'ProductCategoryTypeId',
      },{
        title:'Sales Opportunity Id',
        dataIndex: 'ProductCategoryTypeId',
        id: 'ProductCategoryTypeId',
      },
     
     
    ];
    const tableColumns_PR = [
      {
        title: `${localConsts.taxAuthorityRateSeqId}`,
        dataIndex: 'taxAuthorityRateSeqId',
        id: 'taxAuthorityRateSeqId',
        render: (text, data) => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({update:true})
                this.showDrawer_PR();
              }}
            >
              {text}
            </Button>
          );
        },
      },
      {
        title: `${localConsts.Type_LABEL}`,
        dataIndex: 'Type',
        id: 'Type',
      },
      {
        title: `${localConsts.StoreID}`,
        dataIndex: 'StoreID',
        id: 'StoreID',
      },
      {
        title: `${localConsts.Category}`,
        dataIndex: 'CategoryName',
        id: 'CategoryName',
      },
      {
        title: `${localConsts.TitleTransfer}`,
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: `${localConsts.MinItemPrice}`,
        dataIndex: 'MinItemPrice',
        id: 'ShowInSelect',
      },
      {
        title: `${localConsts.MinPurchase}`,
        dataIndex: 'MinPurchase',
        id: 'MinPurchase',
      },
      {
        title: `${localConsts.TaxShipping}`,
        dataIndex: 'TaxShipping',
        id: 'ShowInSelect',
      },
      {
        title: `${localConsts.TaxPercentage}`,
        dataIndex: 'TaxShipping',
        id: 'ShowInSelect',
      },
      {
        title: `${localConsts.TaxShipping}`,
        dataIndex: 'TaxShipping',
        id: 'ShowInSelect',
      },
      {
        title: `${localConsts.TaxPromotions}`,
        dataIndex: 'TaxShipping',
        id: 'ShowInSelect',
      },
      {
        title: `${localConsts.FromDate_LABEL}`,
        dataIndex: 'TaxShipping',
        id: 'ShowInSelect',
      },
      {
        title: `${localConsts.ThroughDate_LABEL}`,
        dataIndex: 'TaxShipping',
        id: 'ShowInSelect',
      },
      {
        title: `${localConsts.FromDate_LABEL}`,
        dataIndex: 'TaxShipping',
        id: 'ShowInSelect',
      },
      {
        title: `${localConsts.IsTaxInShippingPrice}`,
        dataIndex: 'TaxShipping',
        id: 'ShowInSelect',
      },
      {
        title: `${localConsts.COLUMN_Actions}`,
        dataIndex: 'TaxShipping',
        id: 'ShowInSelect',
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
                  taxAuthorityRateSeqId: this.state.taxAuthorityRateSeqId,
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_DEL_PR,
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
        title: `${localConsts.GeoID}`,
        dataIndex: 'GeoID',
        id: 'GeoID',
      },
      {
        title: `${localConsts.GeoTypeID}`,
        dataIndex: 'GeoTypeID',
        id: 'Description',
      },
      {
        title: `${localConsts.Name}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.Code}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.SecondaryCode}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.Abbreviation}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.WellKnownText}`,
        dataIndex: 'WellKnownText',
        id: 'ext_acc_id',
      },
    ];
    const tableColumns_GLA = [
      {
        title: `${localConsts.GLAccount}`,
        dataIndex: 'GlaId',
        id: 'GlaId',
      },
      {
        title: `${localConsts.OrganizationParty}`,
        dataIndex: 'GeoTypeID',
        id: 'Description',
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
                  taxAuthGeoId: this.state.paymentGroupId,
              taxAuthPartyId: this.state.taxAuthPartyId,
              organizationPartyId: this.state.organizationPartyId,
        
              // fromDate: values.paymentId,
              // thruDate: values.paymentId,
              // taxAuthorityAssocTypeId: valuks.taxAuthorityAssocTypeId,
              
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_DEL_GLA,
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
    const tableColumns_Parties = [
      {
        title: `${localConsts.PartyID_LABEL}`,
        dataIndex: 'id',
        id: 'id',
        render: (text, data) => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({update:true})
                this.showDrawer_Parties();
              }}
            >
              {text}
            </Button>
          );
        },
      },
      {
        title: `${localConsts.FromDate_LABEL}`,
        dataIndex: 'GeoTypeID',
        id: 'Description',
      },
      {
        title: `${localConsts.ThroughDate_LABEL}`,
        dataIndex: 'GeoTypeID',
        id: 'Description',
      },
      {
        title: `${localConsts.PartyTaxId}`,
        dataIndex: 'GeoTypeID',
        id: 'Description',
      },
      {
        title: `${localConsts.IsExempt}`,
        dataIndex: 'GeoTypeID',
        id: 'Description',
      },
      {
        title: `${localConsts.IsNexus}`,
        dataIndex: 'GeoTypeID',
        id: 'Description',
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
                  taxAuthGeoId: this.state.taxAuthGeoId,
              taxAuthPartyId: this.state.taxAuthPartyId,
              partyId: this.state.partyId,
        
              // fromDate: values.paymentId,
              // thruDate: values.paymentId,
              // taxAuthorityAssocTypeId: valuks.taxAuthorityAssocTypeId,
              
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_DEL_PARTIES,
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
        title: `${localConsts.PartyID_LABEL}`,
        dataIndex: 'GeoID',
        id: 'GeoID',
      },
      {
        title: `${localConsts.partyTypeID_LABEL}`,
        dataIndex: 'GeoTypeID',
        id: 'Description',
      },
      {
        title: `${localConsts.FirstName_LABEL}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_LastName}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.Group_Name_LABEL}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
     
    ];
    const tableColumns4 = [
      {
        title: `${localConsts.ToTaxAuthGeoId}`,
        dataIndex: 'Assoid',
        id: 'ToTaxAuthGeoId',
      },
      {
        title: `${localConsts.ToTaxAuthPartyId}`,
        dataIndex: 'ToTaxAuthPartyId',
        id: 'ToTaxAuthPartyId',
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
        title: `${localConsts.Type}`,
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
                  taxAuthGeoId: this.state.paymentGroupId,
              taxAuthPartyId: values.taxAuthPartyId,
              toTaxAuthGeoId: values.toTaxAuthGeoId,
              toTaxAuthPartyId: values.toTaxAuthPartyId,
              // fromDate: values.paymentId,
              // thruDate: values.paymentId,
              taxAuthorityAssocTypeId: values.taxAuthorityAssocTypeId,
              
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_DEL_ASSO,
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
        title: `${localConsts.Category}`,
        dataIndex: 'productCategoryId',
        id: 'productCategoryId',
        render: (text, data) => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.showDrawer3();
              }}
            >
              {text}
            </Button>
          );
        },
      },
      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        dataIndex: 'productCategoryId',
        id: 'productCategoryId',
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
                  taxAuthGeoId: this.state.taxAuthGeoId,
                  taxAuthPartyId: this.state.taxAuthPartyId,
                  productCategoryId : this.state.productCategoryId
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_TAX_AUTH_CAT_DELETE,
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
                    <FormItem label={localConsts.Geo}>
                      {getFieldDecorator('taxAuthGeoId', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Input
                        onBlur={this.enableSaveButton}
                        style={{ width: '302px' }}
                        name="FromPartyID"
                        addonAfter={
                          <Icon onClick={this.showDrawer4} type="idcard" />
                        }
                      />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={3}>
                    <FormItem label={localConsts.Party}>
                      {getFieldDecorator('taxAuthPartyId', {
                        initialValue: data.InvoiceType,
                        enableReinitialize: true,
                      })(<Input
                        style={{ width: '302px' }}
                        name="FromPartyID"
                        addonAfter={
                          <Icon onClick={this.showDrawer} type="idcard" />
                        }
                      />,)}
                    </FormItem>
                  </Col>
                </Row>
                <Row >
                  <Col span={6}>
                    <FormItem label={localConsts.RequireTaxIdForExemption}>
                      {getFieldDecorator('requireTaxIdForExemption', {
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
                          {}
                        </Select>,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={3}>
                    <FormItem label={localConsts.TaxIdFormatPattern}>
                      {getFieldDecorator('taxIdFormatPattern', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Input />
                      )}
                    </FormItem>
                  </Col>
                  </Row>
                  <Row >
                  <Col span={6}>
                    <FormItem label={localConsts.IncludeTaxInPrice}>
                      {getFieldDecorator('includeTaxInPrice', {
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
                <TabPane tab="Edit Tax Authority" key="Edit">
                <div className={styles.tabPaneCard}>
                <Row style={{ marginTop: '15px' }}>
                  <Col span={6}>
                    <FormItem label={localConsts.Geo}>
                      {getFieldDecorator('taxAuthGeoId', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Input
                        onBlur={this.enableSaveButton}
                        style={{ width: '302px' }}
                        name="FromPartyID"
                        addonAfter={
                          <Icon onClick={this.showDrawer4} type="idcard" />
                        }
                      />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={3}>
                    <FormItem label={localConsts.Party}>
                      {getFieldDecorator('taxAuthPartyId', {
                        initialValue: data.InvoiceType,
                        enableReinitialize: true,
                      })(<Input
                        style={{ width: '302px' }}
                        name="FromPartyID"
                        addonAfter={
                          <Icon onClick={this.showDrawer} type="idcard" />
                        }
                      />,)}
                    </FormItem>
                  </Col>
                </Row>
                <Row >
                  <Col span={6}>
                    <FormItem label={localConsts.RequireTaxIdForExemption}>
                      {getFieldDecorator('requireTaxIdForExemption', {
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
                          {}
                        </Select>,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={3}>
                    <FormItem label={localConsts.TaxIdFormatPattern}>
                      {getFieldDecorator('taxIdFormatPattern', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Input />
                      )}
                    </FormItem>
                  </Col>
                  </Row>
                  <Row >
                  <Col span={6}>
                    <FormItem label={localConsts.IncludeTaxInPrice}>
                      {getFieldDecorator('includeTaxInPrice', {
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
                          {}
                        </Select>,
                      )}
                    </FormItem>
                  </Col>
                  </Row>
              </div>
                </TabPane>
                <TabPane tab="Categories" key="Categories">
                <Row style={{ marginTop: '14px' }}>
                    <Col span={4} className={styles.copy}>
                      {localConsts.ListAgreementItems}
                    </Col>
                    <Col span={5} offset={15}>
                      <span
                        style={{ color: '#337AB7' }}
                        onClick={this.showDrawer3}
                      >
                        Add Tax Authority Product Category
 
                      </span>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        className={styles.tableContainer}
                        columns={tableColumns0}
                        dataSource={this.state.Cat}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
                <TabPane tab="Associations" key="Associations">
                <Row style={{ marginTop: '14px' }}>
                   
                    <Col span={5} offset={19}>
                      <span
                        style={{ color: '#337AB7' }}
                        onClick={this.showDrawer_ass}
                      >
                        Add Tax Authority Association
 
 
                      </span>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        className={styles.tableContainer}
                        columns={tableColumns4}
                        dataSource={this.state.ASSO}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
                <TabPane tab="GL Accounts" key="GLA">
                 <Row style={{ marginTop: '14px' }}>
                   
                    <Col span={5} offset={19}>
                      <span
                        style={{ color: '#337AB7' }}
                        onClick={this.showDrawer_GLA}
                      >
                       Add Tax Authority GL Account
                      </span>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        className={styles.tableContainer}
                        columns={tableColumns_GLA}
                        dataSource={this.state.GLA}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
                <TabPane tab="Product Rates" key="ProductRates">
                <Row style={{ marginTop: '14px' }}>
                   
                   <Col span={5} offset={19}>
                     <span
                       style={{ color: '#337AB7' }}
                       onClick={this.showDrawer_PR}
                     >
                      Add Tax Authority Product Rates
                     </span>
                   </Col>
                 </Row>
                 <Row style={{ marginTop: '14px' }}>
                   <div className={styles.tableContainerParent}>
                     <Table
                       className={styles.tableContainer}
                       columns={tableColumns_PR}
                       dataSource={this.state.PR}
                       scroll={{ x: 1500}}
                       size="small"
                       onChange={this.handleStandardTableChange}
                     />
                   </div>
                 </Row>
                </TabPane>
                <TabPane tab="Parties" key="Parties">
                <Row style={{ marginTop: '14px' }}>
                <Tabs>
                <TabPane tab=" Find Tax Authority Party Info" key="FindParties">
                <Row gutter={20} style={{marginTop:'20px'}}>
              <Col span={11}>
                <FormItem label={localConsts.PartyID_LABEL}>
                  {getFieldDecorator('Party_ID', {})(
                    <Input
                   
                   
                    addonAfter={
                      <Icon type="idcard" onClick={this.showDrawer} />
                    }
                  />,
                  )}
                </FormItem>
              </Col>
              </Row>
             
              <Row gutter={20}>
              <Col span={8} >
                <FormItem label={localConsts.FromDate_LABEL}>
                {getFieldDecorator('fromDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <InputGroup compact style={{ display: 'flex' }}>
                    <DatePicker
                      onChange={this.onChange}
                      style={{ width: '450px' }}
                    />
                    <Select defaultValue="Equals">{from_Date_Const}</Select>
                  </InputGroup>,
                  )}
                </FormItem>
              </Col>
              </Row>
              <Row gutter={20}>
              <Col span={8} >
                <FormItem >
                {getFieldDecorator('fromDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <InputGroup compact style={{ display: 'flex' }}>
                    <DatePicker
                      onChange={this.onChange}
                      style={{ width: '450px' }}
                    />
                    <Select defaultValue="Equals">{from_Date_Const}</Select>
                  </InputGroup>,
                  )}
                </FormItem>
              </Col>
              </Row>
              <Row gutter={20}>
              <Col span={8} >
                <FormItem label={localConsts.ThroughDate_LABEL}>
                {getFieldDecorator('fromDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <InputGroup compact style={{ display: 'flex' }}>
                    <DatePicker
                      onChange={this.onChange}
                      style={{ width: '450px' }}
                    />
                    <Select defaultValue="Equals">{from_Date_Const}</Select>
                  </InputGroup>,
                  )}
                </FormItem>
              </Col>
              </Row>
              <Row gutter={20}>
              <Col span={8} >
                <FormItem >
                {getFieldDecorator('fromDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <InputGroup compact style={{ display: 'flex' }}>
                    <DatePicker
                      onChange={this.onChange}
                      style={{ width: '450px' }}
                    />
                    <Select defaultValue="Equals">{from_Date_Const}</Select>
                  </InputGroup>,
                  )}
                </FormItem>
              </Col>
              </Row>
              <Row gutter={20}>
              <Col span={8} >
                <FormItem label={localConsts.PartyTaxId}>
                {getFieldDecorator('fromDate', {
                    initialValue: '',
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
            <Row gutter={20} >
              <Col span={11}>
              <FormItem label={localConsts.IsExempt}>
                {getFieldDecorator('thdate', {
                    initialValue: '',
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
              <Col span={8} offset={1}>
                <FormItem label={localConsts.IsNexus}>
                {getFieldDecorator('fromDate', {
                    initialValue: '',
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
                </TabPane>
                </Tabs>
                   <Col span={5} offset={19}>
                     <span
                       style={{ color: '#337AB7' }}
                       onClick={this.showDrawer_Parties}
                     >
                      New Tax Authority Party Info
                     </span>
                   </Col>
                 </Row>
                 <Row style={{ marginTop: '14px' }}>
                   <div className={styles.tableContainerParent}>
                     <Table
                       className={styles.tableContainer}
                       columns={tableColumns_Parties}
                       dataSource={this.state.Parties}
                       size="small"
                       onChange={this.handleStandardTableChange}
                     />
                   </div>
                 </Row>
                 
                </TabPane>
                <TabPane tab="Report" key="Report">
                  <Row style={{ marginTop: '14px' }}>
                  <Row gutter={20}>
              <Col span={8} >
                <FormItem label={localConsts.InvoiceDate_LABEL}>
                {getFieldDecorator('fromDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <InputGroup compact style={{ display: 'flex' }}>
                    <DatePicker
                      onChange={this.onChange}
                      style={{ width: '450px' }}
                    />
                    <Select defaultValue="Equals">{from_Date_Const}</Select>
                  </InputGroup>,
                  )}
                </FormItem>
              </Col>
              </Row>
              <Row gutter={20}>
              <Col span={8} >
                <FormItem >
                {getFieldDecorator('fromDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <InputGroup compact style={{ display: 'flex' }}>
                    <DatePicker
                      onChange={this.onChange}
                      style={{ width: '450px' }}
                    />
                    <Select defaultValue="Up TO Day">{To_Date_Const}</Select>
                  </InputGroup>,
                  )}
                </FormItem>
              </Col>
              </Row> 
                   
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
                        columns={tableColumns_reports}
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
            title="Lookup Product Category"
            width="709px"
            closable={true}
            onClose={this.onClose0}
            visible={this.state.visible0}
          >
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.ProductCategoryId}>
                  {getFieldDecorator('ProductCategoryId', {})(
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
                <FormItem label={localConsts.CategoryName}>
                  {getFieldDecorator('CategoryName', {})(
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
            <Row><div onClick = {() =>this.setState({more : !this.state.more})}><span >Advanced Search</span></div></Row>
            {this.state.more && 
            <div>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.ProductCategoryTypeId}>
                  {getFieldDecorator('ProductCategoryTypeId', {
                    initialValue: data.FromPartyID,
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
              <Col span={11} offset={1}>
                <FormItem label={localConsts.PrimaryParentCategoryId}>
                  {getFieldDecorator('PrimaryParentCategoryId', {
                    initialValue: data.FromPartyID,
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
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.description_LABEL}>
                  {getFieldDecorator('description', {})(
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
                <FormItem label={localConsts.LongDescription}>
                  {getFieldDecorator('LongDescription', {
                    initialValue: data.FromPartyID,
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
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.ShowInSelect}>
                  {getFieldDecorator('ShowInSelect', {})(
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
                <FormItem label={localConsts.CategoryImageUrl}>
                  {getFieldDecorator('CategoryImageUrl', {
                    initialValue: data.FromPartyID,
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
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.LinkTwoImageUrl}>
                  {getFieldDecorator('LinkTwoImageUrl', {})(
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
                <FormItem label={localConsts.DetailScreen}>
                  {getFieldDecorator('DetailScreen', {
                    initialValue: data.FromPartyID,
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
          </div>}
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
                  columns={tableColumns5}
                  size="small"
                  onChange={this.handleStandardTableChange}
                />
              </div>
            </Row>
          </Drawer>
          <Drawer
            // title={localConsts.LookupGLAccount_title}
            width="709px"
            closable={true}
            onClose={this.onClose_GLA}
            visible={this.state.visGLA}
          >
            <Row gutter={20} style={{marginTop:'20px'}}>
              <Col span={11}>
                <FormItem label={localConsts.OrganizationPartyID}>
                  {getFieldDecorator('organizationPartyId', {})(
                    <Input
                   
                    onBlur={this.enableSaveButton}
                    addonAfter={
                      <Icon type="idcard" onClick={this.showDrawer} />
                    }
                  />,
                  )}
                </FormItem>
              </Col>
              <Col span={8} offset={1}>
                <FormItem label={localConsts.GLAccount}>
                  {getFieldDecorator('glAccountId', {})(
                     <Input
                   
                     onBlur={this.enableSaveButton}
                     addonAfter={
                       <Icon type="idcard" onClick={this.showDrawer2} />
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
                onClick = {this.handleSubmit}
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
            // title={localConsts.PartybyName_title}
            width="709px"
            closable={true}
            onClose={this.onClose4}
            visible={this.state.visible4}
          >
            <Row gutter={20} style={{marginTop:'20px'}}>
              <Col span={11}>
                <FormItem label={localConsts.GeoID}>
                  {getFieldDecorator('Geo', {})(
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
                <FormItem label={localConsts.GeoTypeID}>
                  {getFieldDecorator('GeoTypeID', {})(
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
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.Name}>
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
                <FormItem label={localConsts.Code}>
                  {getFieldDecorator('SecondaryCode', {})(
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
                <FormItem label={localConsts.SecondaryCode}>
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
                <FormItem label={localConsts.Abbreviation}>
                  {getFieldDecorator('Abbreviation', {})(
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
              <Col span={12}>
                <FormItem label={localConsts.NAME_LABEL}>
                  {getFieldDecorator('name', {})(
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
            // title={localConsts.LookupGLAccount_title}
            width="709px"
            closable={true}
            onClose={this.onClose_ass}
            visible={this.state.vis}
          >
            <Row gutter={20} style = {{marginTop:'20px'}}>
              <Col span={11}>
                <FormItem label={localConsts.ToTaxAuthGeoId}>
                  {getFieldDecorator('toTaxAuthGeoId', {})(
                    <Input
                   
                    onBlur={this.enableSaveButton}
                    addonAfter={
                      <Icon type="idcard" onClick={this.showDrawer4} />
                    }
                  />,
                  )}
                </FormItem>
              </Col>
              <Col span={11} offset={2}>
                <FormItem label={localConsts.ToTaxAuthPartyId}>
                  {getFieldDecorator('toTaxAuthPartyId', {})(
                     <Input
                    
                     onBlur={this.enableSaveButton}
                     addonAfter={
                       <Icon type="idcard" onClick={this.showDrawer} />
                     }
                   />,
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
                      style={{ width: '295px' }}
                      onChange={this.onChange}
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={11} offset={2}> 
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
            <Row gutter={20} >
              <Col span={7}>
                <FormItem label={localConsts.Type}>
                  {getFieldDecorator('taxAuthorityAssocTypeId', {
                    initialValue: this.state.paymentId,
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
                  onClick= {this.handleSubmit}
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
            // title={localConsts.LookupGLAccount_title}
            width="709px"
            closable={true}
            onClose={this.onClose_stroe}
            visible={this.state.visibleStore}
          >
          <Row gutter={20} style = {{marginTop:'20px'}}>
           <Col span={11}>
                <FormItem label={localConsts.ProductStoreId}>
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
              <Col span={11} offset={1}>
                <FormItem label={localConsts.StoreName}>
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
              <Row gutter={20}>
           <Col span={11}>
                <FormItem label={localConsts.CompanyName}>
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
              <Col span={11} offset={1}>
                <FormItem label={localConsts.PayToPartyId}>
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
                  columns={tableColumns_store}
                  size="small"
                  onChange={this.handleStandardTableChange}
                />
              </div>
            </Row>
          </Drawer>
          
          <Drawer
            // title={localConsts.LookupGLAccount_title}
            width="709px"
            closable={true}
            onClose={this.onClosePR}
            visible={this.state.visiblePRo}
          >
            <Row gutter={20} style = {{marginTop:'20px'}}>
              <Col span={11}>
                <FormItem label={localConsts.Type}>
                  {getFieldDecorator('GLAccountID', {})(
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
              <Col span={11} offset={2}>
                <FormItem label={localConsts.StoreID}>
                  {getFieldDecorator('name', {})(
                     <Input
                    
                     onBlur={this.enableSaveButton}
                     addonAfter={
                       <Icon type="idcard" onClick={this.showDrawer_store} />
                     }
                   />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
              <FormItem label={localConsts.Category}>
                  {getFieldDecorator('fromDate', {
                    initialValue: '',
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
              <Col span={11} offset={2}> 
              <FormItem label={localConsts.TitleTransfer}>
                  {getFieldDecorator('fromDate', {
                    initialValue: '',
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
            <Row gutter={20} >
              <Col span={11}>
                <FormItem label={localConsts.MinItemPrice}>
                  {getFieldDecorator('Type', {
                    initialValue: '',
                    enableReinitialize: true,
                  })(
                   <Input />
                  )}
                </FormItem>
              </Col>
              <Col span={11} offset={2}>
                <FormItem label={localConsts.MinPurchase}>
                  {getFieldDecorator('Type', {
                    initialValue: this.state.paymentId,
                    enableReinitialize: true,
                  })(
                  <Input />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20} >
              <Col span={11}>
                <FormItem label={localConsts.TaxShipping}>
                  {getFieldDecorator('Type', {
                    initialValue: this.state.paymentId,
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
              <Col span={11} offset={2}>
                <FormItem label={localConsts.TaxPercentage}>
                  {getFieldDecorator('Type', {
                    initialValue: this.state.paymentId,
                    enableReinitialize: true,
                  })(
                   <Input />
                  )}
                </FormItem>
              </Col>
              </Row>
              <Row gutter={20} >
              <Col span={11}>
                <FormItem label={localConsts.TaxPromotions}>
                  {getFieldDecorator('Type', {
                    initialValue: this.state.paymentId,
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
              <Col span={11} offset={2}>
                <FormItem label={localConsts.FromDate_LABEL}>
                  {getFieldDecorator('Type', {
                    initialValue: this.state.paymentId,
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
            <Row gutter={20} >
              <Col span={11}>
                <FormItem label={localConsts.ThroughDate_LABEL}>
                  {getFieldDecorator('Type', {
                    initialValue: this.state.paymentId,
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
              <Col span={11} offset={2}>
                <FormItem label={localConsts.description_LABEL}>
                  {getFieldDecorator('Type', {
                    initialValue: this.state.paymentId,
                    enableReinitialize: true,
                  })(
                   <Input />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
            <Col span={11} >
                <FormItem label={localConsts.IsTaxInShippingPrice}>
                  {getFieldDecorator('Type', {
                    initialValue: this.state.paymentId,
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
                onClick = {this.handleSubmit}
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
            width="709px"
            closable={true}
            onClose={this.onClose3}
            visible={this.state.visible3}
          >
            <Row gutter={20} style={{ marginTop: '24px' }}>
              <Col span={7}>
                <FormItem label={localConsts.CategoryID}>
                  {getFieldDecorator('productCategoryId', {
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
          <Drawer
            // title={localConsts.LookupGLAccount_title}
            width="709px"
            closable={true}
            onClose={this.onClose_Parties}
            visible={this.state.visParties}
          >
            <Row gutter={20} style={{marginTop:'20px'}}>
              <Col span={11}>
                <FormItem label={localConsts.PartyID_LABEL}>
                  {getFieldDecorator('partyId', {})(
                    <Input
                    onBlur={this.enableSaveButton}
                    addonAfter={
                      <Icon type="idcard" onClick={this.showDrawer} />
                    }
                  />,
                  )}
                </FormItem>
              </Col>
              </Row>
              <Row gutter={20}>
              <Col span={8} >
                <FormItem label={localConsts.FromDate_LABEL}>
                {getFieldDecorator('fromDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <InputGroup compact style={{ display: 'flex' }}>
                    <DatePicker
                      onChange={this.onChange}
                      style={{ width: '450px' }}
                    />
                    <Select defaultValue="Equals">{from_Date_Const}</Select>
                  </InputGroup>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20} offset={1} >
              <Col span={8} >
                <FormItem >
                {getFieldDecorator('fromDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <InputGroup compact style={{ display: 'flex' }}>
                    <DatePicker
                      onChange={this.onChange}
                      style={{ width: '250px' }}
                    />
                    <Select defaultValue="Less Than">{To_Date}</Select>
                  </InputGroup>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={8} >
                <FormItem label={localConsts.ThroughDate_LABEL}>
                {getFieldDecorator('thruDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <InputGroup compact style={{ display: 'flex' }}>
                    <DatePicker
                      onChange={this.onChange}
                      style={{ width: '450px' }}
                    />
                    <Select defaultValue="Equals">{from_Date_Const}</Select>
                  </InputGroup>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20} offset={1} >
              <Col span={8} >
                <FormItem >
                {getFieldDecorator('thruDate', {
                    initialValue: moment(),
                    enableReinitialize: true,
                  })(
                    <InputGroup compact style={{ display: 'flex' }}>
                    <DatePicker
                      onChange={this.onChange}
                      style={{ width: '250px' }}
                    />
                    <Select defaultValue="Less Than">{To_Date}</Select>
                  </InputGroup>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20} style={{marginTop:'20px'}}>
              <Col span={11}>
                <FormItem label={localConsts.PartyTaxId}>
                  {getFieldDecorator('partyTaxId', {})(
                    <Input
                    onBlur={this.enableSaveButton}
                   
                  />,
                  )}
                </FormItem>
              </Col></Row>
            <Row gutter={20} >
              <Col span={11}>
              <FormItem label={localConsts.IsExempt}>
                {getFieldDecorator('isExempt', {
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
                    {}
                  </Select>,
                  )}
                </FormItem>
              </Col>
              <Col span={8} offset={1}>
                <FormItem label={localConsts.IsNexus}>
                {getFieldDecorator('isNexus', {
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
                 onClick = {this.handleSubmit}
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
TaxAuthForm.propTypes = {
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
  connect(({ Tax_Auth_Accounting }) => ({
    dataById: [],
    Cat : Tax_Auth_Accounting.reducerSaveTaxAuthCat,
    Tax: Tax_Auth_Accounting.reducerSave,
    CatDel : Tax_Auth_Accounting.reducerDelTaxAuthCat,
    ASSO : Tax_Auth_Accounting.reducerSaveASSO,
    GLA : Tax_Auth_Accounting.reducersAVEgla,
    GlaDel : Tax_Auth_Accounting.reducerDelgla,
    PR :Tax_Auth_Accounting.reducerSavePr,
    Parties : Tax_Auth_Accounting.reducerSaveParties,
    paymentMsg: Tax_Auth_Accounting.reducerSavePaymentGroupMember,
  }))(TaxAuthForm),
);
