import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  Col,
  Form,
  Input,
  Popconfirm,
  Alert,
  Calendar,
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
  Tag,
  Card,
  Popover,
} from 'antd';
import * as actionConsts from '../../../common/TitlePane/ActionConsts';
import * as localConsts from './FixedAssetsConsts';
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
  MAINT : [],
  Dep:[],
  MO :[]

};
class FixedAssetsForm extends Component {
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
      key:'edit' ,
      activeKey: '2',
      paymentGroupId: '',
      visible3: false,
      payment: [],
      paymentMsg: [],
      paymentId: '',
      paymentGroupMemberUpdate: false,
      disabled: false,
      disabled1: false,
      fixedAssetId:'',
      visprod : false,
      visIde : false,
      visReg : false,
      visMR : false,
      visMaintenances : false,
      visAssignments : false,
      visDep : false,
      value: moment('2017-01-25'),
      selectedValue: moment('2017-01-25'),
      show : false,
      visSC : false,
      Update : false,
      productId:'',
      fixedAssetStdCostTypeId:'',
      fixedAssetIdentTypeId :'',
      Iden : [],
      Reg : [],
      MR:[],
      productMeterTypeId : '',
      readingDate:'',
      maintHistSeqId : '',
      MAINT : [],
      Assign :[],
      Id : '',
      depreciationCustomMethodId : '',
      GL:[],
      assetGlAccountId : '',
      visMO : false,
      visMRM : false,
      orderId:''
    };
  }
  onSelect = (value) => {
    this.setState({
      value,
      selectedValue: value,
      show: true
    });
  }

  onPanelChange = (value) => {
    this.setState({ value });
  }
  callback = (key) => {
    console.log(key);
  }
  
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  showDrawerDepreciation= () => {
    this.setState({
      visDep: true,
    });
  };
  onCloseDep = () => {
    this.setState({
      visDep: false,
    });
  };
  showDrawerMaintenances= () => {
    this.setState({
      visMaintenances: true,
    });
  };
  onCloseMaintenances = () => {
    this.setState({
      visMaintenances: false,
    });
  };
  showDrawerAssignment =() => {
    this.setState({
      visAssignments: true,
    });
  };
  onCloseAssignment = () => {
    this.setState({
      visAssignments: false,
    });
  };
  showDrawerMR = () => {
    this.setState({
      visMR: true,
    });
  };
  onCloseMR = () => {
    this.setState({
      visMR: false,
    });
  };
  showDrawerMRM = () => {
    this.setState({
      visMRM: true,
      key:'MR'
    });MRM
  };
  onCloseMRM = () => {
    this.setState({
      visMRM: false,
    });
  };
  showDrawerMO = () => {
    this.setState({
      visMO: true,
      key: 'MO'
    });
  };
  onCloseMO = () => {
    this.setState({
      visMO: false,
    });
  };

  showDrawerRegistration = () => {
    this.setState({
      visReg: true,
    });
  };
  onCloseRegistration = () => {
    this.setState({
      visReg: false,
    });
  };
  onCloseProducts = () => {
    this.setState({
      visprod: false,
    });
  };
   
  showDrawerProducts= () => {
    this.setState({
      visprod: true,
    });
  };
  showDrawerIdentifications= () => {
    this.setState({
      visIde: true,
    });
  };
  
  onCloseIdentifications = () => {
    this.setState({
      visIde: false,
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
  showDrawerStandardCosts= () => {
    this.setState({
      visSC: true,
    });
  };
  onCloseStandardCosts = () => {
    this.setState({
      visSC: false,
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
 
  onCloseshow = () => {
    this.setState({
      show: false,
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
    if (nextProps.FA != undefined) {
      this.setState({ fixedAssetId: nextProps.FA.fixedAssetId });
 

    }
    if (nextProps.GL != undefined) {
      var tmp = [];
      tmp.push({ assetGlAccountId: this.state.assetGlAccountId });
      this.setState({GL:tmp});
 

    }
    if (nextProps.MO != undefined) {
      var tmp = [];
      tmp.push({ orderId: this.state.orderId });
      this.setState({MO:tmp});
 

    }
    if (nextProps.FAP != undefined) {
      var tmp = [];
      tmp.push({ productId: this.state.productId });
      this.setState({FAP:tmp});
    }
    if (nextProps.Dep != undefined) {
      var tmp = [];
      tmp.push({ depreciationCustomMethodId: this.state.depreciationCustomMethodId });
      this.setState({Dep:tmp});
    }
    if (nextProps.Assign != undefined) {
      var tmp = [];
      tmp.push({ Id: this.state.Id });
      this.setState({Assign:tmp});
    }
    if (nextProps.FASC != undefined) {
      var tmp = [];
      tmp.push({ fixedAssetStdCostTypeId: this.state.fixedAssetStdCostTypeId });
      this.setState({FASC:tmp});
    }
    if (nextProps.Iden != undefined) {
      var tmp = [];
      tmp.push({ fixedAssetIdentTypeId: this.state.fixedAssetIdentTypeId });
      this.setState({Iden:tmp});
    }
    if (nextProps.MAINT != undefined) {
      var tmp = [];
      tmp.push({ maintHistSeqId: nextProps.MAINT.maintHistSeqId});
      this.setState({MAINT:tmp});
    }
    if (nextProps.MR != undefined) {
      var tmp = [];
      tmp.push({ productMeterTypeId: this.state.productMeterTypeId });
      this.setState({MR:tmp});
    }
    if (nextProps.Reg != undefined) {
      var tmp = [];
      tmp.push({ fromDate: this.state.fromDate });
      this.setState({Reg:tmp});
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
    this.props.setClick(() => {e
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
    console.log(activeKey);
    const key = this.state.key;
    console.log(key);
    this.props.form.validateFields((errors, values) => {
      if (!errors) {
        if (activeKey === '2') {
          var obj = {
            fixedAssetId: values.fixedAssetId,
            fixedAssetTypeId: 'COMPUTER_HARDWARE',
            parentFixedAssetId: values.parentFixedAssetId,
            instanceOfProductId: values.instanceOfProductId,
            classEnumId: values.classEnumId,
            partyId: values.partyId,
            roleTypeId: values.roleTypeId,
            fixedAssetName: values.fixedAssetName,
            acquireOrderId: values.acquireOrderId,
            acquireOrderItemSeqId: values.acquireOrderItemSeqId,
            // dateAcquired: values.dateAcquired,
            // dateLastServiced: values.dateLastServiced,
            // dateNextService: values.dateNextService,
            // expectedEndOfLife: values.expectedEndOfLife,
            // actualEndOfLife: values.actualEndOfLife, // dateAcquired: values.dateAcquired,
            // dateLastServiced: values.dateLastServiced,
            // dateNextService: values.dateNextService,
            // expectedEndOfLife: values.expectedEndOfLife,
            // actualEndOfLife: values.actualEndOfLife,
            productionCapacity: values.productionCapacity,
            uomId: values.uomId,
            calendarId: values.calendarId,
            serialNumber: values.serialNumber,
            locatedAtFacilityId: values.locatedAtFacilityId,
            locatedAtLocationSeqId: values.locatedAtLocationSeqId,
            salvageValue: values.salvageValue,
            depreciation: values.depreciation,
            purchaseCost: values.purchaseCost,
            purchaseCostUomId: values.purchaseCostUomId,

          };
          console.log(obj);
          this.props.handleSubmitAction(actionConsts.ACTION_TYPE_SAVE, obj);
        }
        if (activeKey === '1') {
          if (key === 'edit') {
            var obj = {
              fixedAssetId: this.state.fixedAssetId,
              fixedAssetTypeId: 'COMPUTER_HARDWARE',
              parentFixedAssetId: values.parentFixedAssetId,
              instanceOfProductId: values.instanceOfProductId,
              classEnumId: values.classEnumId,
              partyId: values.partyId,
              roleTypeId: values.roleTypeId,
              fixedAssetName: values.fixedAssetName,
              acquireOrderId: values.acquireOrderId,
              acquireOrderItemSeqId: values.acquireOrderItemSeqId,
              // dateAcquired: values.dateAcquired,
              // dateLastServiced: values.dateLastServiced,
              // dateNextService: values.dateNextService,
              // expectedEndOfLife: values.expectedEndOfLife,
              // actualEndOfLife: values.actualEndOfLife, // dateAcquired: values.dateAcquired,
              // dateLastServiced: values.dateLastServiced,
              // dateNextService: values.dateNextService,
              // expectedEndOfLife: values.expectedEndOfLife,
              // actualEndOfLife: values.actualEndOfLife,
              productionCapacity: values.productionCapacity,
              uomId: values.uomId,
              calendarId: values.calendarId,
              serialNumber: values.serialNumber,
              locatedAtFacilityId: values.locatedAtFacilityId,
              locatedAtLocationSeqId: values.locatedAtLocationSeqId,
              salvageValue: values.salvageValue,
              depreciation: values.depreciation,
              purchaseCost: values.purchaseCost,
              purchaseCostUomId: values.purchaseCostUomId,
            };
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_FIXEDASSET,
              obj,
            );
          }
          if (key === 'Products' && !this.state.Update) {
            
            var obj = {
              fixedAssetId: this.state.fixedAssetId,
              productId: values.productId,
              fixedAssetProductTypeId: 'FAPT_USE',
              // fromDate: values.fromDate,
              // thruDate: values.thruDate,
              sequenceNum: values.sequenceNum,
              comments: values.comments,
              quantityUomId: values.quantityUomId,
              quantity: values.quantity,

            };
            this.setState({productId : obj.productId});
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_FA_PROD,
              obj,
            );
          
          } if (key === 'Products' && this.state.Update) {
            
            var obj = {
              fixedAssetId: this.state.fixedAssetId,
              productId: values.productId,
              fixedAssetProductTypeId: 'FAPT_USE',
              fromDate: values.fromDate.format('YYYY-MM-DD'),
              // thruDate: values.thruDate,
              sequenceNum: values.sequenceNum,
              comments: values.comments,
              quantityUomId: values.quantityUomId,
              quantity: values.quantity,

            };
            this.setState({productId : obj.productId,Update: false});
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_FA_PROD,
              obj,
            );
          
          }
          if (key === 'Standard Costs' && !this.state.Update) {
            
            var obj = {
              fixedAssetId: this.state.fixedAssetId,
              fixedAssetStdCostTypeId: 'SETUP_COST',
              fromDate: values.fromDate.format('YYYY-MM-DD'),
              thruDate: values.thruDate.format('YYYY-MM-DD'),
              amount: values.amount,
              amountUomId: values.amountUomId,
             

            };
            this.setState({fixedAssetStdCostTypeId : obj.fixedAssetStdCostTypeId,Update: false});
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_ADD_FA_SC,
              obj,
            );
          
          }
          if (key === 'Standard Costs' && this.state.Update) {
            
            var obj = {
              fixedAssetId: this.state.fixedAssetId,
              fixedAssetStdCostTypeId: 'SETUP_COST',
              fromDate: values.fromDate.format('YYYY-MM-DD'),
              thruDate: values.thruDate.format('YYYY-MM-DD'),
              amount: values.amount,
              amountUomId: values.amountUomId,
             

            };
            this.setState({fixedAssetStdCostTypeId : obj.fixedAssetStdCostTypeId,Update: false});
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_FA_SC,
              obj,
            );
        
          }
          if (key === 'Identifications' && !this.state.Update) {
            
            var obj = {
              fixedAssetId: this.state.fixedAssetId,
              fixedAssetIdentTypeId: 'GAS_CARD1',
              idValue: values.idValue,
             

            };
            this.setState({fixedAssetIdentTypeId : obj.fixedAssetIdentTypeId,Update: false});
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_ADD_IDEN,
              obj,
            );
          
          }
          if (key === 'Identifications' && this.state.Update) {
            
            var obj = {
              fixedAssetId: this.state.fixedAssetId,
              fixedAssetIdentTypeId: 'GAS_CARD1',
              idValue: values.idValue,
             

            };
            this.setState({fixedAssetIdentTypeId : obj.fixedAssetIdentTypeId,Update: false});
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_IDEN,
              obj,
            );
        
          }
          if (key === 'Registrations' && !this.state.Update) {
            
            var obj = {
              fixedAssetId: this.state.fixedAssetId,
              fromDate: values.fromDate.format('YYYY-MM-DD'),
              thruDate: values.thruDate.format('YYYY-MM-DD'),
              registrationDate: values.registrationDate.format('YYYY-MM-DD'),
              govAgencyPartyId : values.govAgencyPartyId,
              registrationNumber : values.registrationNumber,
              licenseNumber : values.licenseNumber
            };
            this.setState({fromDate : obj.fromDate,Update: false});
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_ADD_REG,
              obj,
            );
          
          }
          if (key === 'Registrations' && this.state.Update) {
            
            var obj = {
              fixedAssetId: this.state.fixedAssetId,
              fromDate: values.fromDate.format('YYYY-MM-DD'),
              thruDate: values.thruDate.format('YYYY-MM-DD'),
              registrationDate: values.registrationDate.format('YYYY-MM-DD'),
              govAgencyPartyId : values.govAgencyPartyId,
              registrationNumber : values.registrationNumber,
              licenseNumber : values.licenseNumber
             

            };
            this.setState({fromDate : obj.fromDate,Update: false});
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_REG,
              obj,
            );
        
          }
          if (key === 'MR' && !this.state.Update) {
            
            var obj = {
              fixedAssetId: this.state.fixedAssetId,
              readingDate: values.readingDate.format('YYYY-MM-DD'),
              productMeterTypeId : 'MOTOR_TIME',
              meterValue : values.meterValue,
              readingReasonEnumId : values.readingReasonEnumId,
              workEffortId : values.workEffortId
            };
            this.setState({readingDate : obj.readingDate,productMeterTypeId : obj.productMeterTypeId,Update: false});
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_ADD_MR,
              obj,
            );
          
          }
          if (key === 'MR' && this.state.Update) {
            
            var obj = {
              fixedAssetId: this.state.fixedAssetId,
              readingDate: values.readingDate.format('YYYY-MM-DD'),
              productMeterTypeId : 'MOTOR_TIME',
              meterValue : values.meterValue,
              readingReasonEnumId : values.readingReasonEnumId,
              workEffortId : values.workEffortId

            };
            this.setState({readingDate : obj.readingDate,productMeterTypeId:obj.productMeterTypeId,Update: false});
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_MR,
              obj,
            );
        
          }
          if (key === 'Maintenances' && !this.state.Update) {
            
            var obj = {
              fixedAssetId: this.state.fixedAssetId,
              statusId : values.statusId,
              productMaintTypeId : values.productMaintTypeId,
              scheduleWorkEffortId : values.scheduleWorkEffortId,
              intervalQuantity : values.intervalQuantity,
              intervalUomId : values.intervalUomId,
              intervalMeterTypeId : values.intervalMeterTypeId,
              productMaintSeqId : values.productMaintSeqId,
              purchaseOrderId : values.purchaseOrderId,

              // estimatedStartDate : values.estimatedStartDate.format('YYYY-MM-DD'),

              // estimatedCompletionDate : values.estimatedCompletionDate.format('YYYY-MM-DD'),
              maintTemplateWorkEffortId : values.maintTemplateWorkEffortId,
              maintTemplateWorkEffortId : values.maintTemplateWorkEffortId,

            };
            this.setState({readingDate : obj.readingDate,productMeterTypeId : obj.productMeterTypeId,Update: false});
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_ADD_MAIN,
              obj,
            );
          
          }
          if (key === 'Maintenances' && this.state.Update) {
            
            var obj = {
              fixedAssetId: this.state.fixedAssetId,
              maintHistSeqId: this.state.maintHistSeqId,
              statusId : values.statusId,
              productMaintTypeId : values.productMaintTypeId,
              scheduleWorkEffortId : values.scheduleWorkEffortId,
              intervalQuantity : values.intervalQuantity,
              intervalUomId : values.intervalUomId,
              intervalMeterTypeId : values.intervalMeterTypeId,
              productMaintSeqId : values.productMaintSeqId,
              purchaseOrderId : values.purchaseOrderId,

              // estimatedStartDate : values.estimatedStartDate.format('YYYY-MM-DD'),

              // estimatedCompletionDate : values.estimatedCompletionDate.format('YYYY-MM-DD'),
              maintTemplateWorkEffortId : values.maintTemplateWorkEffortId,
              maintTemplateWorkEffortId : values.maintTemplateWorkEffortId,
            };
            this.setState({readingDate : obj.readingDate,productMeterTypeId:obj.productMeterTypeId,Update: false});
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_MAINT,
              obj,
            );
        
          }
          if (key === 'Assignments' && !this.state.Update) {
            
            var obj = {
              fixedAssetId: this.state.fixedAssetId,
              partyId : values.partyId,
              roleTypeId : 'ACCOUNT',
              statusId : values.statusId,
              comments : values.comments,
             

              fromDate : values.fromDate.format('YYYY-MM-DD'),

              thruDate : values.thruDate.format('YYYY-MM-DD'),
              allocatedDate : values.allocatedDate.format('YYYY-MM-DD'),
            
            };
            this.setState({fromDate : obj.fromDate,Id : obj.partyId,Update: false});
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_ADD_ASSIGN,
              obj,
            );
          
          }
          if (key === 'Assignments' && this.state.Update) {
            
            var obj = {
              fixedAssetId: this.state.fixedAssetId,
              partyId : values.partyId,
              roleTypeId : 'ACCOUNT',
              statusId : values.statusId,
              comments : values.comments,
             

              fromDate : values.fromDate.format('YYYY-MM-DD'),

              thruDate : values.thruDate.format('YYYY-MM-DD'),
              allocatedDate : values.allocatedDate.format('YYYY-MM-DD'),
            
            };
            this.setState({fromDate : obj.fromDate,Id:obj.partyId,Update: false});
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_UPDATE_ASSIGN,
              obj,
            );
        
          }
          if (key === 'Depreciation' ) {
            
            var obj = {
              fixedAssetId: this.state.fixedAssetId,
              depreciationCustomMethodId : 'STR_LINE_DEP_FORMULA',
            
              fromDate : values.fromDate.format('YYYY-MM-DD'),

              thruDate : values.thruDate.format('YYYY-MM-DD'),
             
            };
            this.setState({depreciationCustomMethodId:obj.depreciationCustomMethodId,});
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_DEP_METHOD,
              obj,
            );
        
          }
          if (key === '2' ) {
            
            var obj = {
              fixedAssetId: this.state.fixedAssetId,
              assetGlAccountId : '',
              accDepGlAccountId : '',
              depGlAccountId : '',
              profitGlAccountId : '',
              lossGlAccountId : '',
              fixedAssetTypeId : '',
              organizationPartyId:''

            };
            this.setState({assetGlAccountId:obj.assetGlAccountId,});
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_GL_MAP,
              obj,
            );
        
          }
          if (key === 'MO' ) {
            
            var obj = {
              fixedAssetId: this.state.fixedAssetId,
              maintHistSeqId : this.state.maintHistSeqId,
              orderId : 'DEMO10090',
              depGlAccountId : '',
              orderItemSeqId : '',
            };
            this.setState({orderId:obj.orderId,});
            console.log(obj);
            this.props.handleSubmitAction(
              actionConsts.ACTION_TYPE_SAVE_MO,
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
    const { value, selectedValue } = this.state;
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
        title: `${localConsts.COLUMN_ProductId}`,
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
    const Participants = [
      {
        title: `${localConsts.PartyID_LABEL}`,
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.RoleTypeId_LABEL}`,
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: `${localConsts.statusID}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_Actions}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
    ];
    const tableColumnsStandardCosts = [
      {
        title: `${localConsts.StandardCostType}`,
        dataIndex: 'fixedAssetStdCostTypeId',
        id: 'fixedAssetStdCostTypeId',
        render: (text, data) => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({ Update: true });
                this.showDrawerStandardCosts();
             }}
            >
              {text}
            </Button>
          );
        },
      },
      {
        title: `${localConsts.FromDate_LABEL}`,
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: `${localConsts.ThroughDate_LABEL}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.AmountUomId}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.Amount}`,
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
                  fixedAssetId: this.state.fixedAssetId,
                  fixedAssetStdCostTypeId: '',
                  fromDate : moment().format('YYYY-MM-DD')
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_REMOVE_FASC,
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
    const tableColumnsIdentifications = [
      {
        title: `${localConsts.IdentificationType}`,
        dataIndex: 'fixedAssetIdentTypeId',
        id: 'fixedAssetIdentTypeId',
        render: (text, data) => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({ Update: true });
                this.showDrawerIdentifications();
             }}
            >
              {text}
            </Button>
          );
      },
    },
      {
        title: `${localConsts.Value}`,
        dataIndex: 'Description',
        id: 'Description',
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
                  fixedAssetId: this.state.fixedAssetId,
                  fixedAssetIdentTypeId: 'GAS_CARD1',
                 
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_REMOVE_IDEN,
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
    const tableColumnsRegistration= [
      {
        title: `${localConsts.FromDate_LABEL}`,
        dataIndex: 'fromDate',
        id: 'fromDate',
        render: (text, data) => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({ Update: true });
                this.showDrawerRegistration();
             }}
            >
              {text}
            </Button>
          );
      },
      },
      {
        title: `${localConsts.ThroughDate_LABEL}`,
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: `${localConsts.RegistrationDate}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.GovernmentAgency}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.RegistrationNumber}`,
        dataIndex: 'ext_acc_id',
      },
      {
        title: `${localConsts.LicenseNumber}`,
        dataIndex: 'ext_acc_id',
        id:'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        dataIndex: 'ext_acc_id',
        id:'ext_acc_id',
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
                  fixedAssetId: this.state.fixedAssetId,
                  fromDate: this.state.fromDate,
                 
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_REMOVE_REG,
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
    const tableColumnsMR= [
      {
        title: `${localConsts.ProductMeterTypeId}`,
        dataIndex: 'productMeterTypeId',
        id: 'productMeterTypeId',
        render: (text, data) => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({ Update: true,key:'MR' });
                this.showDrawerMR();
             }}
            >
              {text}
            </Button>
          );
            },
      },
      {
        title: `${localConsts.ReadingDate}`,
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: `${localConsts.MeterValueUpdate}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.Maintenance}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },

      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        dataIndex: 'ext_acc_id',
        id:'ext_acc_id',
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
                  fixedAssetId: this.state.fixedAssetId,
                  productMeterTypeId : this.state.productMeterTypeId,
                  readingDate: this.state.readingDate,
                 
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_REMOVE_MR,
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
    const tableColumnsMaintenance= [
      {
        title: `${localConsts.MaintHistSeqId}`,
        dataIndex: 'maintHistSeqId',
        id: 'maintHistSeqId',
        render: (text, data) => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({ Update: true });
                this.showDrawerMaintenances();
             }}
            >
              {text}
            </Button>
          );
      },
      },
      {
        title: `${localConsts.ProductMaintTypeId}`,
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: `${localConsts.STATUS_LABEL}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.IntervalMeterType}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },

      {
        title: `${localConsts.IntervalQuantity}`,
        dataIndex: 'ext_acc_id',
        id:'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        dataIndex: 'ext_acc_id',
        id:'ext_acc_id',
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
                  fixedAssetId: this.state.fixedAssetId,
                  maintHistSeqId : this.state.maintHistSeqId,
                  
                 
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_REMOVE_MAINT,
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
    const tableColumnsAssignment= [
      {
        title: `${localConsts.PartyID_LABEL}`,
        dataIndex: 'Id',
        id: 'Id',
        render: (text, data) => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({ Update: true });
                this.showDrawerAssignment();
             }}
            >
              {text}
            </Button>
          );
      },
      },
      {
        title: `${localConsts.RoleTypeId_LABEL}`,
        dataIndex: 'Description',
        id: 'Description',
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
        title: `${localConsts.AllocatedDate}`,
        dataIndex: 'ext_acc_id',
        id:'ext_acc_id',
      },
      {    
        title: `${localConsts.statusID}`,
        dataIndex: 'ext_acc_id',
        id:'ext_acc_id',
      },
      {    
        title: `${localConsts.Comments_LABEL}`,
        dataIndex: 'ext_acc_id',
        id:'ext_acc_id',
      },
      {    
        title: `${localConsts.COLUMN_ACTIONS}`,
        dataIndex: 'ext_acc_id',
        id:'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        dataIndex: 'ext_acc_id',
        id:'ext_acc_id',
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
                  fixedAssetId: this.state.fixedAssetId,
                  partyId : 'NA',
                  roleTypeId : 'ACCOUNT',
                  fromDate:this.state.fromDate,
                 
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_REMOVE_ASSIGN,
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
    const tableColumns_order = [
      {
        title: `${localConsts.orderId}`,
        dataIndex: 'orderId',
        id: 'orderId',
      },
      {
        title: `${localConsts.OrderItemSeqId}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        dataIndex: 'ext_acc_id',
        id:'ext_acc_id',
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
                  fixedAssetId: this.state.fixedAssetId,
                  maintHistSeqId : '00001',
                  orderId : this.state.orderId,
                  orderItemSeqId:'00001',
                 
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_REMOVE_MO,
                  obj,
                );
              }}
            >
              <Icon type="delete" className={styles.icon} />
            </Popconfirm>&emsp;
          </div>
        ),
      },
     ]
    const tableColumns10 = [
      {
        title: `${localConsts.LocationTypeEnumId}`,
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.AreaId}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.AisleId}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.SectionId}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.LevelId}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.PositionId}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.GeoPointId}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
    ];
    const tableColumns9 = [
      {
        title: `${localConsts.FacilityName_LABEL}`,
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.FacilityTypeId_LABEL}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
    ];
    console.log(this.state.Dep);
    const tableColumns_1 = [
      {
        title: `${localConsts.Depreciationcustommethod}`,
        dataIndex: 'depreciationCustomMethodId',
        id: 'depreciationCustomMethodId',
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
                  fixedAssetId: this.state.fixedAssetId,
                  depreciationCustomMethodId: this.state.depreciationCustomMethodId,
                 
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_REMOVE_DEP_METHOD,
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
    const tableColumns_2 = [
      {
        title: `${localConsts.AssetGLaccount}`,
        dataIndex: 'assetGlAccountId',
        id: 'assetGlAccountId',
      },
      {
        title: `${localConsts.AccumulateddepreciationGLaccount}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.DepreciationGLaccount}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.ProfitGLaccount}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.LossGLaccount}`,
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
                  fixedAssetId: this.state.fixedAssetId,
                  fixedAssetTypeId: '',
                  organizationPartyId : '',
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_REMOVE_REMOVE_GL,
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
    const tableColumns_3 = [
      {
        title: `${localConsts.FixedAssetTypeId}`,
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.AssetGLaccount}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.AccumulateddepreciationGLaccount}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.DepreciationGLaccount}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.ProfitGLaccount}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.LossGLaccount}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
    ];
    const tableColumns_4 = [
      {
        title: `${localConsts.AcctgTransId}`,
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.TransTypeDescription}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.TransactionDate}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.AccountCode}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.AccountName}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.Amount_LABEL}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },   {
        title: `${localConsts.DebitCreditFlag}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.IsPosted}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
    ];
    const tableColumnsProducts = [
      {
        title: `${localConsts.Product}`,
        dataIndex: 'productId',
        id: 'productId',
        render: (text, data) => {
          return (
            <Button
              className={styles.anchorNameStyle}
              onClick={() => {
                this.setState({ Update: true });
                this.showDrawerProducts();
             }}
            >
              {text}
            </Button>
          );
        },
      },
      {
        title: `${localConsts.FixedAssetProductType}`,
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
                  fixedAssetId: this.state.fixedAssetId,
                  productId: this.state.productId,
                  fixedAssetProductTypeId : 'FAPT_USE',
                  fromDate : moment().format('YYYY-MM-DD')
                };
                this.props.handleSubmitAction(
                  actionConsts.ACTION_TYPE_REMOVE_FAprod,
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
        title: `${localConsts.Product}`,
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
        title: `${localConsts.FixedAssetProductType}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
      {
        title: `${localConsts.COLUMN_ACTIONS}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
    ];
    const tableColumns0 = [
      {
        title: `${localConsts.FixedAssetId}`,
        dataIndex: 'paymentId',
        id: 'paymentId',
       
      },
      {
        title: `${localConsts.FixedAssetName}`,
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: `${localConsts.AssetType}`,
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
                    <FormItem label={localConsts.FixedAssetTypeId}>
                      {getFieldDecorator('fixedAssetTypeId', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Select
                          showSearch
                          onBlur={this.enableSaveButton}
                          style={{ width: '240px' }}
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
                    <FormItem label={localConsts.FixedAssetId}>
                      {getFieldDecorator('fixedAssetId', {
                        initialValue: data.InvoiceType,
                        enableReinitialize: true,
                      })(<Input onBlur={this.enableSaveButton} />)}
                    </FormItem>
                  </Col>
                </Row>
                <Row >
                  <Col span={6}>
                    <FormItem label={localConsts.FixedAssetParentId}>
                      {getFieldDecorator('parentFixedAssetId', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(<Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                        addonAfter={
                          <Icon type="idcard" onClick={this.showDrawer0} />
                        }
                      />,
                        
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={3}>
                    <FormItem label={localConsts.InstanceOfProductId}>
                      {getFieldDecorator('instanceOfProductId', {
                        initialValue: data.InvoiceType,
                        enableReinitialize: true,
                      })(<Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                        addonAfter={
                          <Icon type="idcard" onClick={this.showDrawer2} />
                        }
                      />,)}
                    </FormItem>
                  </Col>
                </Row>
                <Row >
                  <Col span={6}>
                    <FormItem label={localConsts.ClassEnumId}>
                      {getFieldDecorator('classEnumId', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Select
                          showSearch
                          onBlur={this.enableSaveButton}
                          style={{ width: '240px' }}
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
                    <FormItem label={localConsts.PartyID_LABEL}>
                      {getFieldDecorator('partyId', {
                        initialValue: data.InvoiceType,
                        enableReinitialize: true,
                      })(<Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                        addonAfter={
                          <Icon type="idcard" onClick={this.showDrawer} />
                        }
                      />,)}
                    </FormItem>
                  </Col>
                </Row>
                <Row >
                  <Col span={6}>
                    <FormItem label={localConsts.RoleTypeId_LABEL}>
                      {getFieldDecorator('roleTypeId', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Select
                        showSearch
                        onBlur={this.enableSaveButton}
                        style={{ width: '240px' }}
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
                    <FormItem label={localConsts.FixedAssetName}>
                      {getFieldDecorator('fixedAssetName', {
                        initialValue: data.InvoiceType,
                        enableReinitialize: true,
                      })(<Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                       
                      />,)}
                    </FormItem>
                  </Col>
                </Row>
                <Row >
                  <Col span={6}>
                    <FormItem label={localConsts.AcquireOrderId}>
                      {getFieldDecorator('acquireOrderId', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                       
                      />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={3}>
                    <FormItem label={localConsts.AcquireOrderItemSeqId}>
                      {getFieldDecorator('acquireOrderItemSeqId', {
                        initialValue: data.InvoiceType,
                        enableReinitialize: true,
                      })(<Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                       
                      />,)}
                    </FormItem>
                  </Col>
                       
                </Row>
                <Row >
                  <Col span={6}>
                    <FormItem label={localConsts.DateAcquired}>
                      {getFieldDecorator('dateAcquired', {
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
                  <Col span={6}  offset={3}>
                    <FormItem label={localConsts.DateLastServiced}>
                      {getFieldDecorator('dateLastServiced', {
                        initialValue: moment(),
                        enableReinitialize: true,
                      })(
                        <DatePicker
                        style={{ width: '260px' }}
                        onChange={this.onChange}
                      />,<DatePicker
                      style={{ width: '260px' }}
                      onChange={this.onChange}
                    />,
                      )}
                    </FormItem>
                  </Col>
                
                </Row>
                <Row >
                <Col span={6} >
                    <FormItem label={localConsts.DateNextService}>
                      {getFieldDecorator('dateNextService', {
                        initialValue:moment(),
                        enableReinitialize: true,
                      })( <DatePicker
                        style={{ width: '260px' }}
                        onChange={this.onChange}
                      />,)}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={3}>
                    <FormItem label={localConsts.ExpectedEndOfLife}>
                      {getFieldDecorator('expectedEndOfLife', {
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
                <Row >
                <Col span={6} >
                    <FormItem label={localConsts.ActualEndOfLife}>
                      {getFieldDecorator('actualEndOfLife', {
                        initialValue: moment(),
                        enableReinitialize: true,
                      })( <DatePicker
                        style={{ width: '260px' }}
                        onChange={this.onChange}
                      />,)}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={3}>
                    <FormItem label={localConsts.ProductionCapacity}>
                      {getFieldDecorator('productionCapacity', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                       
                      />,
                      )}
                    </FormItem>
                  </Col>
                 
                </Row>
                <Row>
                <Col span={6} >
                    <FormItem label={localConsts.UOM}>
                      {getFieldDecorator('uomId', {
                        initialValue: data.InvoiceType,
                        enableReinitialize: true,
                      })( <Select
                        showSearch
                        onBlur={this.enableSaveButton}
                        style={{ width: '240px' }}
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {}
                      </Select>,)}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={3} >
                    <FormItem label={localConsts.Calendar}>
                      {getFieldDecorator('calendarId', {
                        initialValue: data.InvoiceType,
                        enableReinitialize: true,
                      })( <Select
                        showSearch
                        onBlur={this.enableSaveButton}
                        style={{ width: '240px' }}
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {}
                      </Select>,)}
                    </FormItem>
                  </Col>
                </Row>
                <Row >
                  <Col span={6}>
                    <FormItem label={localConsts.SerialNumber}>
                      {getFieldDecorator('serialNumber', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                       
                      />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={3}>
                    <FormItem label={localConsts.LocatedAtFacilityId}>
                      {getFieldDecorator('locatedAtFacilityId', {
                        initialValue: data.InvoiceType,
                        enableReinitialize: true,
                      })(<Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                        addonAfter={
                          <Icon type="idcard" onClick={this.showDrawer1} />
                        }
                      />,)}
                    </FormItem>
                  </Col>
                </Row>
                <Row >
                  <Col span={6}>
                    <FormItem label={localConsts.LocatedAtLocationSeqId}>
                      {getFieldDecorator('locatedAtLocationSeqId', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                        addonAfter={
                          <Icon type="idcard" onClick={this.showDrawer3} />
                        }
                      />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={3}>
                    <FormItem label={localConsts.SalvageValue}>
                      {getFieldDecorator('salvageValue', {
                        initialValue: data.InvoiceType,
                        enableReinitialize: true,
                      })(<Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                      
                      />,)}
                    </FormItem>
                  </Col>
                </Row>
                <Row >
                  <Col span={6}>
                    <FormItem label={localConsts.Depreciation}>
                      {getFieldDecorator('depreciation', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                      
                      />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={3}>
                    <FormItem label={localConsts.PurchaseCost}>
                      {getFieldDecorator('purchaseCost', {
                        initialValue: data.InvoiceType,
                        enableReinitialize: true,
                      })(<Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                       
                      />,)}
                    </FormItem>
                  </Col>
                </Row>
                <Row >
                  <Col span={6}>
                    <FormItem label={localConsts.PurchaseCostUomId}>
                      {getFieldDecorator('purchaseCostUomId', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Input
                        style={{ width: '240px' }}
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
               
                <TabPane tab="Edit Fixed Asset" key="edit">
                <div className={styles.tabPaneCard}>
                <Row style={{ marginTop: '15px' }}>
                  <Col span={6}>
                    <FormItem label={localConsts.FixedAssetId}>
                      {getFieldDecorator('fixedAssetId', {
                        initialValue: this.state.fixedAssetId,
                        enableReinitialize: true,
                      })(
                        <Input disabled onBlur={this.enableSaveButton} />
                      )}
                    </FormItem>
                  </Col></Row>
                <Row >
                  <Col span={6}>
                    <FormItem label={localConsts.FixedAssetTypeId}>
                      {getFieldDecorator('fixedAssetTypeId', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Select
                          showSearch
                          onBlur={this.enableSaveButton}
                          style={{ width: '240px' }}
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
                  <Col span={6}>
                    <FormItem label={localConsts.FixedAssetParentId}>
                      {getFieldDecorator('parentFixedAssetId', {
                        initialValue: '',
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
                  <Col span={6} offset={3}>
                    <FormItem label={localConsts.InstanceOfProductId}>
                      {getFieldDecorator('instanceOfProductId', {
                        initialValue: data.InvoiceType,
                        enableReinitialize: true,
                      })(<Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                        addonAfter={
                          <Icon type="idcard" onClick={this.showDrawer2} />
                        }
                      />,)}
                    </FormItem>
                  </Col>
                </Row>
                <Row >
                  <Col span={6}>
                    <FormItem label={localConsts.ClassEnumId}>
                      {getFieldDecorator('classEnumId', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Select
                          showSearch
                          onBlur={this.enableSaveButton}
                          style={{ width: '240px' }}
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
                    <FormItem label={localConsts.PartyID_LABEL}>
                      {getFieldDecorator('partyId', {
                        initialValue: data.InvoiceType,
                        enableReinitialize: true,
                      })(<Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                        addonAfter={
                          <Icon type="idcard" onClick={this.showDrawer} />
                        }
                      />,)}
                    </FormItem>
                  </Col>
                </Row>
                <Row >
                  <Col span={6}>
                    <FormItem label={localConsts.RoleTypeId_LABEL}>
                      {getFieldDecorator('roleTypeId', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Select
                        showSearch
                        onBlur={this.enableSaveButton}
                        style={{ width: '240px' }}
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
                    <FormItem label={localConsts.FixedAssetName}>
                      {getFieldDecorator('fixedAssetName', {
                        initialValue: data.InvoiceType,
                        enableReinitialize: true,
                      })(<Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                       
                      />,)}
                    </FormItem>
                  </Col>
                </Row>
                <Row >
                  <Col span={6}>
                    <FormItem label={localConsts.AcquireOrderId}>
                      {getFieldDecorator('acquireOrderId', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                       
                      />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={3}>
                    <FormItem label={localConsts.AcquireOrderItemSeqId}>
                      {getFieldDecorator('acquireOrderItemSeqId', {
                        initialValue: data.InvoiceType,
                        enableReinitialize: true,
                      })(<Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                       
                      />,)}
                    </FormItem>
                  </Col>
                </Row>
                <Row >
                  <Col span={6}>
                    <FormItem label={localConsts.DateAcquired}>
                      {getFieldDecorator('dateAcquired', {
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
                  <Col span={6}  offset={3}>
                    <FormItem label={localConsts.DateLastServiced}>
                      {getFieldDecorator('dateLastServiced', {
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
                <Row >
                <Col span={6} >
                    <FormItem label={localConsts.DateNextService}>
                      {getFieldDecorator('dateNextService', {
                        initialValue:moment(),
                        enableReinitialize: true,
                      })( <DatePicker
                        style={{ width: '260px' }}
                        onChange={this.onChange}
                      />,)}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={3}>
                    <FormItem label={localConsts.ExpectedEndOfLife}>
                      {getFieldDecorator('expectedEndOfLife', {
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
                <Row >
                <Col span={6} >
                    <FormItem label={localConsts.ActualEndOfLife}>
                      {getFieldDecorator('actualEndOfLife', {
                        initialValue: moment(),
                        enableReinitialize: true,
                      })( <DatePicker
                        style={{ width: '260px' }}
                        onChange={this.onChange}
                      />,)}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={3}>
                    <FormItem label={localConsts.ProductionCapacity}>
                      {getFieldDecorator('productionCapacity', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                       
                      />,
                      )}
                    </FormItem>
                  </Col>
                 
                </Row>
                <Row>
                <Col span={6} >
                    <FormItem label={localConsts.UOM}>
                      {getFieldDecorator('uomId', {
                        initialValue: data.InvoiceType,
                        enableReinitialize: true,
                      })( <Select
                        showSearch
                        onBlur={this.enableSaveButton}
                        style={{ width: '240px' }}
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {}
                      </Select>,)}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={3} >
                    <FormItem label={localConsts.Calendar}>
                      {getFieldDecorator('calendarId', {
                        initialValue: data.InvoiceType,
                        enableReinitialize: true,
                      })( <Select
                        showSearch
                        onBlur={this.enableSaveButton}
                        style={{ width: '240px' }}
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {}
                      </Select>,)}
                    </FormItem>
                  </Col>
                </Row>
                <Row >
                  <Col span={6}>
                    <FormItem label={localConsts.SerialNumber}>
                      {getFieldDecorator('serialNumber', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                       
                      />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={3}>
                    <FormItem label={localConsts.LocatedAtFacilityId}>
                      {getFieldDecorator('locatedAtFacilityId', {
                        initialValue: data.InvoiceType,
                        enableReinitialize: true,
                      })(<Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                        addonAfter={
                          <Icon type="idcard" onClick={this.showDrawer1} />
                        }
                      />,)}
                    </FormItem>
                  </Col>
                </Row>
                <Row >
                  <Col span={6}>
                    <FormItem label={localConsts.LocatedAtLocationSeqId}>
                      {getFieldDecorator('locatedAtLocationSeqId', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                        addonAfter={
                          <Icon type="idcard" onClick={this.showDrawer3} />
                        }
                      />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={3}>
                    <FormItem label={localConsts.SalvageValue}>
                      {getFieldDecorator('salvageValue', {
                        initialValue: data.InvoiceType,
                        enableReinitialize: true,
                      })(<Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                      
                      />,)}
                    </FormItem>
                  </Col>
                </Row>
                <Row >
                  <Col span={6}>
                    <FormItem label={localConsts.Depreciation}>
                      {getFieldDecorator('depreciation', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                      
                      />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={3}>
                    <FormItem label={localConsts.PurchaseCost}>
                      {getFieldDecorator('purchaseCost', {
                        initialValue: data.InvoiceType,
                        enableReinitialize: true,
                      })(<Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                       
                      />,)}
                    </FormItem>
                  </Col>
                </Row>
                <Row >
                  <Col span={6}>
                    <FormItem label={localConsts.PurchaseCostUomId}>
                      {getFieldDecorator('purchaseCostUomId', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                      
                      />,
                      )}
                    </FormItem>
                  </Col>
                  
                </Row>
              </div>
                </TabPane>
                <TabPane tab="Products" key="Products">
                  <Row style={{ marginTop: '14px' }}>
                   
                    <Col span={5} offset={15}>
                      <span
                        style={{ color: '#337AB7' }}
                        onClick={this.showDrawerProducts}
                      >
                           Link New product to Fixed Asset
                      </span>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        classProductsName={styles.tableContainer}
                        columns={tableColumnsProducts}
                        dataSource={this.state.FAP}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
                <TabPane tab="Calendar" key="Calendar">
                <Row>
        {/* <Alert message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`} /> */}
        <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
      </Row>
                </TabPane>
                <TabPane tab="Standard Costs" key="Standard Costs">
                  <Row style={{ marginTop: '14px' }}>
                   
                    <Col span={5} offset={15}>
                      <span
                        style={{ color: '#337AB7' }}
                        onClick={this.showDrawerStandardCosts}
                      >
                               Add Fixed Asset Standard Cost
                      </span>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        classProductsName={styles.tableContainer}
                        columns={tableColumnsStandardCosts}
                        dataSource={this.state.FASC}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
                <TabPane tab="Identifications" key="Identifications">
                  <Row style={{ marginTop: '14px' }}>
                   
                    <Col span={5} offset={15}>
                      <span
                        style={{ color: '#337AB7' }}
                        onClick={this.showDrawerIdentifications}
                      >
                                  Add Fixed Asset Identification
     
                      </span>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        classProductsName={styles.tableContainer}
                        columns={tableColumnsIdentifications}
                        dataSource={this.state.Iden}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
                <TabPane tab="Registrations" key="Registrations">
                  <Row style={{ marginTop: '14px' }}>
                   
                    <Col span={5} offset={15}>
                      <span
                        style={{ color: '#337AB7' }}
                        onClick={this.showDrawerRegistration}
                      >
                            Add Fixed Asset Registration
     
                      </span>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        classProductsName={styles.tableContainer}
                        columns={tableColumnsRegistration}
                        dataSource={this.state.Reg}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
                <TabPane tab="Meter Reading" key="MR">
                  <Row style={{ marginTop: '14px' }}>
                   
                    <Col span={5} offset={15}>
                      <span
                        style={{ color: '#337AB7' }}
                        onClick={this.showDrawerMR}
                      >
                               Add Fixed Asset Meter Reading
                      </span>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        classProductsName={styles.tableContainer}
                        columns={tableColumnsMR}
                        dataSource={this.state.MR}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
                <TabPane tab="Maintenances" key="Maintenances">
                  <Row style={{ marginTop: '14px' }}>
                   
                    <Col span={5} offset={15}>
                      <span
                        style={{ color: '#337AB7' }}
                        onClick={this.showDrawerMaintenances}
                      >
                            Add Fixed Asset Maintenance
     
                      </span>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        classProductsName={styles.tableContainer}
                        columns={tableColumnsMaintenance}
                        dataSource={this.state.MAINT}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
                <TabPane tab="Assignments" key="Assignments">
                  <Row style={{ marginTop: '14px' }}>
                   
                    <Col span={5} offset={15}>
                      <span
                        style={{ color: '#337AB7' }}
                        onClick={this.showDrawerAssignment}
                      >
                               Add Party Fixed Asset Assignment
                      </span>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        classProductsName={styles.tableContainer}
                        columns={tableColumnsAssignment}
                        dataSource={this.state.Assign}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                </TabPane>
                <TabPane tab="Depreciation" key="Depreciation">
                  <Row style={{ marginTop: '14px' }}>
                   
                    <Col span={5} offset={15}>
                      <span
                        style={{ color: '#337AB7' }}
                        onClick={this.showDrawerDepreciation}
                      >
                              Fixed Asset Depreciation Report
                      </span>
                    </Col>
                  </Row>
                  <Tabs defaultActiveKey="1" onChange={this.callback}>
    <TabPane tab="Fixed Asset Depreciation Method" key="1"> 
<Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.Depreciationcustommethod}>   
               {getFieldDecorator('depreciationCustomMethodId', {})(
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
              <Col span={11} offset={1}>
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
              <Col span={11}>
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
<Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        classProductsName={styles.tableContainer}
                        columns={tableColumns_1}
                        dataSource={this.state.Dep}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row>
                 
                  </TabPane>
    <TabPane tab="GL Mappings
" key="2"> <Row style={{ marginTop: '14px' }}>
<Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.AssetGLaccount}>   
               {getFieldDecorator('assetGlAccountId', {})(
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
              <Col span={11}  offset={1}>
                <FormItem label={localConsts.AccumulateddepreciationGLaccount}>   
               {getFieldDecorator('accDepGlAccountId', {})(
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
                <FormItem label={localConsts.DepreciationGLaccount}>   
               {getFieldDecorator('depGlAccountId', {})(
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
              <Col span={11}  offset={1}>
                <FormItem label={localConsts.ProfitGLaccount}>   
               {getFieldDecorator('profitGlAccountId', {})(
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
                <FormItem label={localConsts.LossGLaccount}>   
               {getFieldDecorator('lossGlAccountId', {})(
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
                    <div className={styles.tableContainerParent}>
                      <Table
                        classProductsName={styles.tableContainer}
                        columns={tableColumns_2}
                        dataSource={this.state.GL}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row></TabPane>
    
                  <TabPane tab="Global Mappings" key="4"> <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        classProductsName={styles.tableContainer}
                        columns={tableColumns_3}
                        dataSource={this.state.Depreciation}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row></TabPane>
                  <TabPane tab="    Fixed Asset Depreciation Report
" key="5"> <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        classProductsName={styles.tableContainer}
                        // columns={tableColumnsDepreciation}
                        dataSource={this.state.Depreciation}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row></TabPane>
                  <TabPane tab="    Transactions
" key="6"> <Row style={{ marginTop: '14px' }}>
                    <div className={styles.tableContainerParent}>
                      <Table
                        classProductsName={styles.tableContainer}
                        columns={tableColumns_4}
                        dataSource={this.state.Depreciation}
                        size="small"
                        onChange={this.handleStandardTableChange}
                      />
                    </div>
                  </Row></TabPane>
  </Tabs>,
                 
                </TabPane>
                <TabPane tab=" Geo Location " key="GL">
                  
                  
                </TabPane>
              </Tabs>
            </TabPane>
          </Tabs>
          <Drawer
           
           width="709px"
           closable={true}
           onClose={this.onCloseStandardCosts}
           visible={this.state.visSC}
         >
           <Row gutter={20} style={{marginTop:'35px'}}>
             <Col span={11}>
               <FormItem label={localConsts.StandardCostType}>
                 {getFieldDecorator('fixedAssetStdCostTypeId', {})(
                    <Select
                    showSearch
                    style={{ width: '260px' }}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children.toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {}
                  </Select>,
                 )}
               </FormItem>
             </Col>
             <Col span={11} >
               <FormItem label={localConsts.AmountUomId}>
                 {getFieldDecorator('amountUomId', {})(
                    <Select
                    showSearch
                    style={{ width: '260px' }}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children.toLowerCase()
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
                        style={{ width: '260px' }}
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
                  style={{ width: '260px' }}
                  onChange={this.onChange}
                />,
                 )}
               </FormItem>
             </Col>
            
           </Row>
           <Row gutter={20}>
             <Col span={11}>
               <FormItem label={localConsts.Amount}>
                 {getFieldDecorator('amount', {
                   initialValue: data.FromPartyID,
                   enableReinitialize: true,
                 })(
                   <Input
                  
                 
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
           
            width="709px"
            closable={true}
            onClose={this.onClose0}
            visible={this.state.visible0}
          >
            <Row gutter={20} style={{marginTop:'35px'}}>
              <Col span={11}>
                <FormItem label={localConsts.FixedAssetId}>
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
                <FormItem label={localConsts.AssetType}>
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
                <FormItem label={localConsts.FixedAssetName}>
                  {getFieldDecorator('FromPartyID', {
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
           
           width="709px"
           closable={true}
           onClose={this.onCloseMO}
           visible={this.state.visMO}
         >
           <Row gutter={20} style={{marginTop:'35px'}}>
             <Col span={11}>
               <FormItem label={localConsts.orderId}>
                 {getFieldDecorator('Party_ID', {})(
                   <Input
                   style={{ width: '240px' }}
                   onBlur={this.enableSaveButton}
                   addonAfter={
                     <Icon type="idcard" onClick={this.showDrawer_order} />
                   }
                 />,
                 )}
               </FormItem>
             </Col>
             <Col span={11} offset={1}>
               <FormItem label={localConsts.OrderItemSeqId}>
                 {getFieldDecorator('Party_Type_ID', {})(
                   <Input
                 
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
           <Row style={{ marginTop: '14px' }}>
             <div className={styles.tableContainerParent}>
               <Table
                 className={styles.tableContainer}
                 columns={tableColumns_order}
                 dataSource = {this.state.MO}
                 size="small"
                 onChange={this.handleStandardTableChange}
               />
             </div>
           </Row>
         </Drawer>
          <Drawer
           
           width="709px"
           closable={true}
           onClose={this.onCloseshow}
           visible={this.state.show}
         >
           <Row gutter={20} style={{marginTop:'35px'}}>
             <Col span={11}>
               <FormItem label={localConsts.EventName}>
                 {getFieldDecorator('Party_ID', {})(
                   <Input
                   
                   />,
                 )}
               </FormItem>
             </Col>
             <Col span={11}>
               <FormItem label={localConsts.description_LABEL}>
                 {getFieldDecorator('Party_ID', {})(
                   <Input
                   
                   />,
                 )}
               </FormItem>
             </Col>
             </Row>
             <Row>
             <Col span={11} >
               <FormItem label={localConsts.EventType}>
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
                     {}
                   </Select>,
                 )}
               </FormItem>
             </Col>
           </Row>
          
           <Row gutter={20}>
             <Col span={11}>
               <FormItem label={localConsts.STATUS_LABEL}>
                 {getFieldDecorator('FromPartyID', {
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
             <Col span={11}>
               <FormItem label={localConsts.Scope}>
                 {getFieldDecorator('FromPartyID', {
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
           </Row>
           <Row gutter={20}>
             <Col span={11}>
               <FormItem label={localConsts.EstimatedStartDate}>
               {getFieldDecorator('FixedAssetTypeId', {
                        initialValue: moment(selectedValue),
                        enableReinitialize: true,
                      })(
                        <DatePicker
                        style={{ width: '260px' }}
                        onChange={this.onChange}
                      />,
                      )}
               </FormItem>
             </Col>
             <Col span={11}>
               <FormItem label={localConsts.EstimatedCompletionDate}>
               {getFieldDecorator('FixedAssetTypeId', {
                        initialValue: moment(selectedValue),
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
             }}
           >
             <Col span={2} offset={21}>
               <Button
                 className="button"
                 style={{ marginTop: '14px' }}
                 type="primary"
               >
                 Add
               </Button>
             </Col>
           </Row>
           <Row style={{ marginTop: '14px' }}>
             <div className={styles.tableContainerParent}>
               <Table
                 className={styles.tableContainer}
                 columns={Participants}
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
            title={localConsts.LookupProduct_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose2}
            visible={this.state.visible2}
          >
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.COLUMN_ProductId}>
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
            title={localConsts.LookupFacility_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose1}
            visible={this.state.visible1}
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
            // title={localConsts.LookupFacility_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onCloseIdentifications}
            visible={this.state.visIde}
          >
            <Row gutter={20} style={{marginTop:'35px'}}>
              <Col span={11}>
                <FormItem label={localConsts.IdentificationType}>
                  {getFieldDecorator('fixedAssetIdentTypeId', {})(
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
                <FormItem label={localConsts.Value}>
                  {getFieldDecorator('idValue', {})(
                    <Input
                     
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
            // title={localConsts.LookupFacility_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onCloseRegistration}
            visible={this.state.visReg}
          >
            <Row gutter={20} style={{marginTop:'35px'}} >
              <Col span={11}>
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
              <Col span={11} offset={2}>
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
            <Row gutter={20} >
              <Col span={11}>
                <FormItem label={localConsts.RegistrationDate}>
                {getFieldDecorator('registrationDate', {
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
              <Col span={11} offset={2}>
                <FormItem label={localConsts.GovernmentAgency}>
                  {getFieldDecorator('govAgencyPartyId', {})(
                   <Input
                   style={{ width: '240px' }}
                   onBlur={this.enableSaveButton}
                   addonAfter={
                     <Icon type="idcard" onClick={this.showDrawer} />
                   }
                 />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20} >
              <Col span={11}>
                <FormItem label={localConsts.RegistrationNumber}>
                  {getFieldDecorator('registrationNumber', {})(
                   
                    <Input
                     
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={11} offset={2}>
                <FormItem label={localConsts.LicenseNumber}>
                  {getFieldDecorator('licenseNumber', {})(
                    <Input
                     
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
            // title={localConsts.LookupFacility_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onCloseMR}
            visible={this.state.visMR}
          >
            <Row gutter={20} style={{marginTop:'35px'}} >
              <Col span={11}>
                <FormItem label={localConsts.ProductMeterTypeId}>
                {getFieldDecorator('productMeterTypeId', {
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
              <Col span={11} offset={2}>
                <FormItem label={localConsts.ReadingDate}>
                {getFieldDecorator('readingDate', {
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
            <Row gutter={20} >
              <Col span={11}>
                <FormItem label={localConsts.MeterValue}>
                {getFieldDecorator('meterValue', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                       <Input />,
                      )}
                </FormItem>
              </Col>
              <Col span={11} offset={2}>
                <FormItem label={localConsts.ReadingReasonEnumId}>
                  {getFieldDecorator('readingReasonEnumId', {})(
                   <Input
                   style={{ width: '240px' }}
                   onBlur={this.enableSaveButton}
                  
                 />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20} >
              <Col span={11}>
                <FormItem label={localConsts.WorkEffortId}>
                  {getFieldDecorator('workEffortId', {})(
                   
                    <Input
                     
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
            // title={localConsts.LookupFacility_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onCloseMRM}
            visible={this.state.visMRM}
          >
            <Row gutter={20} style={{marginTop:'35px'}} >
              <Col span={11}>
                <FormItem label={localConsts.ProductMeterTypeId}>
                {getFieldDecorator('productMeterTypeId', {
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
              <Col span={11} offset={2}>
                <FormItem label={localConsts.ReadingDate}>
                {getFieldDecorator('readingDate', {
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
            <Row gutter={20} >
              <Col span={11}>
                <FormItem label={localConsts.MeterValue}>
                {getFieldDecorator('meterValue', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                       <Input />,
                      )}
                </FormItem>
              </Col>
              <Col span={11} offset={2}>
                <FormItem label={localConsts.ReadingReasonEnumId}>
                  {getFieldDecorator('readingReasonEnumId', {})(
                   <Input
                   style={{ width: '240px' }}
                   onBlur={this.enableSaveButton}
                  
                 />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20} >
              <Col span={11}>
                <FormItem label={localConsts.WorkEffortId}>
                  {getFieldDecorator('workEffortId', {})(
                   
                    <Input
                     
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
                onClick = {this.handleSubmit}
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
                 columns={tableColumnsMR}
                 dataSource={this.state.MR}
                 size="small"
                 onChange={this.handleStandardTableChange}
               />
             </div>
           </Row>
          
          </Drawer>
          <Drawer
            // title={localConsts.LookupFacility_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onCloseMaintenances}
            visible={this.state.visMaintenances}
          >

          <Row offset={2} style={{marginTop:'35px'}} >
         {this.state.Update && <div>
    <Tag   onClick={this.showDrawerMRM}>Meter Readings</Tag>
    <Tag onClick={this.showDrawerMO}>Purchase Orders</Tag>
    </div>}
          </Row>
            <Row gutter={20} style={{marginTop:'35px'}} >
              <Col span={11}>
                <FormItem label={localConsts.STATUS_LABEL}>
                {getFieldDecorator('statusId', {
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
              <Col span={11} offset={1}>
                <FormItem label={localConsts.Maintenancetype}>
                {getFieldDecorator('productMaintTypeId', {
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
            <Row gutter={20} >
              <Col span={11}>
                <FormItem label={localConsts.MaintenanceTemplate}>
                {getFieldDecorator('maintTemplateWorkEffortId', {
                        initialValue: '',
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
              <Col span={11} offset={1}>
                <FormItem label={localConsts.IntervalMeterType}>
                  {getFieldDecorator('intervalMeterTypeId', {})(
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
            <Row gutter={20} >
              <Col span={11}>
                <FormItem label={localConsts.IntervalQuantity}>
                  {getFieldDecorator('intervalQuantity', {})(
                   
                    <Input
                     
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={11} offset={1}>
                <FormItem label={localConsts.IntervalUom}>
                  {getFieldDecorator('intervalUomId', {})(
                   
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
            <Row gutter={20} >
              <Col span={11} >
                <FormItem label={localConsts.PurchaseOrderId}>
                {getFieldDecorator('purchaseOrderId', {
                        initialValue: '',
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
              <Col span={11} offset={1}>
                <FormItem label={localConsts.ScheduleWorkEffortId}>
                {getFieldDecorator('scheduleWorkEffortId', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                       
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
           {/* <Drawer
            // title={localConsts.LookupFacility_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onCloseMaintenances}
            visible={this.state.visMaintenances}
          >
            <Row gutter={20} style={{marginTop:'35px'}} >
              <Col span={11}>
                <FormItem label={localConsts.STATUS_LABEL}>
                {getFieldDecorator('FixedAssetTypeId', {
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
              <Col span={11} offset={1}>
                <FormItem label={localConsts.Maintenancetype}>
                {getFieldDecorator('FixedAssetTypeId', {
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
            <Row gutter={20} >
              <Col span={11}>
                <FormItem label={localConsts.MaintenanceTemplate}>
                {getFieldDecorator('FixedAssetTypeId', {
                        initialValue: '',
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
              <Col span={11} offset={1}>
                <FormItem label={localConsts.IntervalMeterType}>
                  {getFieldDecorator('Name', {})(
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
            <Row gutter={20} >
              <Col span={11}>
                <FormItem label={localConsts.IntervalQuantity}>
                  {getFieldDecorator('Party_ID', {})(
                   
                    <Input
                     
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={11} offset={1}>
                <FormItem label={localConsts.IntervalUom}>
                  {getFieldDecorator('Party_ID', {})(
                   
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
            <Row gutter={20} >
              <Col span={11} >
                <FormItem label={localConsts.PurchaseOrderId}>
                {getFieldDecorator('FixedAssetTypeId', {
                        initialValue: '',
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
              <Col span={11} offset={1}>
                <FormItem label={localConsts.ScheduleWorkEffortId}>
                {getFieldDecorator('FixedAssetTypeId', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                       
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
                  Save
                </Button>
              </Col>
            </Row>
          
          </Drawer> */}
          <Drawer
            // title={localConsts.LookupFacility_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onCloseAssignment}
            visible={this.state.visAssignments}
          >
            <Row gutter={20} style={{marginTop:'35px'}} >
              <Col span={11}>
                <FormItem label={localConsts.PartyID_LABEL}>
                {getFieldDecorator('partyId', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                        addonAfter={
                          <Icon type="idcard" onClick={this.showDrawer} />
                        }
                      />,
                      )}
                </FormItem>
              </Col>
              <Col span={11} offset={1}>
                <FormItem label={localConsts.RoleTypeId_LABEL}>
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
            <Row gutter={20} >
              <Col span={11}>
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
              <Col span={11} offset={1}>
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
            <Row gutter={20} >
              <Col span={11}>
                <FormItem label={localConsts.AllocatedDate}>
                {getFieldDecorator('allocatedDate', {
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
              <Col span={11} offset={1}>
                <FormItem label={localConsts.statusID}>
                  {getFieldDecorator('statusId', {})(
                   
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
            <Row gutter={20} >
              <Col span={11} >
                <FormItem label={localConsts.Comments_LABEL}>
                {getFieldDecorator('comments', {
                        initialValue: '',
                        enableReinitialize: true,
                      })(
                        <Input
                        style={{ width: '240px' }}
                        onBlur={this.enableSaveButton}
                       
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
            // title={localConsts.LookupFacility_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onCloseDep}
            visible={this.state.visDep}
          >
            <Row gutter={20} style={{marginTop:'35px'}}>
              <Col span={6}>
               {localConsts.PurchaseCost}
              </Col>
              <Col span={6} offset={2}>
               {localConsts.Depreciation}
              </Col>
              </Row>
              <Row gutter={20} style={{marginTop:'15px'}} >
              <Col span={6}>
               {localConsts.SalvageValue}
              </Col>
              <Col span={6} offset={2}>
               {localConsts.DateAcquired}
              </Col>
              </Row>
              <Row gutter={20} style={{marginTop:'15px'}} >
              <Col span={6}>
               {localConsts.ExpectedEndOfLife}
              </Col>
              <Col span={6} offset={2}>
               {localConsts.Nextdepreciationamount}
              </Col>
              </Row>
              </Drawer>
          <Drawer
            // title={localConsts.LookupFacility_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onClose3}
            visible={this.state.visible3}
          >
            <Row gutter={20} style={{marginTop:'35px'}}>
              <Col span={11}>
                <FormItem label={localConsts.FacilityId_LABEL}>
                  {getFieldDecorator('Party_ID', {})(
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
                <FormItem label={localConsts.LocationSeqId}>
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
                <FormItem label={localConsts.LocationTypeEnumId}>
                  {getFieldDecorator('First_Name', {})(
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
                <FormItem label={localConsts.AreaId}>
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
                <FormItem label={localConsts.AisleId}>
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
                <FormItem label={localConsts.SectionId}>
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
                <FormItem label={localConsts.LevelId}>
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
                <FormItem label={localConsts.PositionId}>
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
                <FormItem label={localConsts.GeoPointId}>
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
              </Col></Row>
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
                  columns={tableColumns10}
                  loading={this.state.loading}
                  size="small"
                  onChange={this.handleStandardTableChange}
                />
              </div>
            </Row>
          </Drawer>
          <Drawer
            // title={localConsts.LookupFacility_title}
            width="709px"
            placement="right"
            closable={true}
            onClose={this.onCloseProducts}
            visible={this.state.visprod}
          >
            <Row gutter={20} style={{marginTop:'35px'}}>
              <Col span={11}>
                <FormItem label={localConsts.ProductID}>
                  {getFieldDecorator('productId', {})(
                    <Input
                      style={{ width: '240px' }}
                      onBlur={this.enableSaveButton}
                      addonAfter={
                        <Icon type="idcard" onClick={this.showDrawer2} />
                      }
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={11} offset={2}>
                <FormItem label={localConsts.Typeofusage}>
                  {getFieldDecorator('fixedAssetProductTypeId', {})(
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
              <Col span={11} offset={2}>
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
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.Comments_LABEL}>
                  {getFieldDecorator('comments', {})(
                    <Input
                      
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={11} offset={2}>
                <FormItem label={localConsts.SequenceNum}>
                  {getFieldDecorator('sequenceNum', {})(
                     <Input
                    
                   />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11} >
                <FormItem label={localConsts.Quantity}>
                  {getFieldDecorator('quantity', {})(
                    <Input
                   
                  />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={11}>
                <FormItem label={localConsts.QuantityUomId}>
                  {getFieldDecorator('quantityUomId', {})(
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
              </Col></Row>
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
                onClick = {this.handleSubmit}
                  className="button"
                  style={{ marginTop: '14px' }}
                  type="primary"
                >
                  Save
                </Button>
              </Col>
            </Row></Drawer>
        </Form>
      </Fragment>
    );
  }
}
FixedAssetsForm.propTypes = {
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
  connect(({ FixedAssets_Accounting }) => ({
    dataById: [],
    MO:FixedAssets_Accounting.reducerSaveMO,
    GL : FixedAssets_Accounting.reducerSaveGL,
    Dep : FixedAssets_Accounting.reducerSaveDep,
    Assign: FixedAssets_Accounting.reducerSaveAssign,
    MAINT: FixedAssets_Accounting.reducerSaveMAINT,
    MR:FixedAssets_Accounting.reducerSaveMR,
    Iden : FixedAssets_Accounting.reducerSaveIden,
    Reg :  FixedAssets_Accounting.reducerSaveReg,
    FA: FixedAssets_Accounting.reducerSave,
    FASC: FixedAssets_Accounting.reducerSaveFASC,
    FAP : FixedAssets_Accounting.reducerSaveFAprod,
    paymentMsg: FixedAssets_Accounting.reducerSavePaymentGroupMember,
  }))(FixedAssetsForm),
);
