import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Col, Form, Input, Tabs,Checkbox,DatePicker,Row,Table ,Upload,InputNumber,Divider,Select, Badge, Button,Icon,Drawer,Card,Popover } from 'antd';
import { formItemLayout } from '../../../common/Layout/FormItemLayout';
import * as actionConsts from '../../../common/TitlePane/ActionConsts';
import * as commonConsts from '../../../common/commonConsts';
import * as localConsts from './AgreementsConsts';
import styles from '../../../common/Styles.less';
import {Link} from 'react-router-dom';
import { REMARKS_ROWS } from '../Payment_Groups/PaymentGroupsConsts';
const FormItem = Form.Item;
const { TabPane } = Tabs;
const content = (
  <div>
      <Link to={`/`} ><p>Copy</p></Link>
      <Link to={`/`} ><p>PDF</p></Link>
      <Link to={`/`} ><p>Email</p></Link>
      <Link to={`/`} ><p>Issue Check</p></Link>
      <Link to={`/`} ><p>Status To Approved</p></Link>
      <Link to={`/`} ><p>Status To Sent</p></Link>
      <Link to={`/`} ><p>Status To Ready</p></Link>
      <Link to={`/`} ><p>Status To Cancelled</p></Link>
  </div>
);

const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const CheckboxGroup = Checkbox.Group;
const newObject = {
  productId : '',
  partyIdFrom : '',
  partyIdTo : '',
  roleTypeIdFrom : '',
  roleTypeIdTo : '',
  agreementTypeId : '',
  agreementDate :'',
  fromDate :'',
  thruDate : '',
  description :'',
  textData : '',
};
class InvoiceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: newObject,
      isExistMessage: '',
      commentsData: [],
      enableSaveButtonValue: false,

      // Contact Address
      visibleAddress: false,
      // Contact Person
      visibleContactPerson: false,
      visible:false,
      visible1:false,
      visible2:false,
      visible3: false,
      visible4: false,
      visible5:false,
      visible6 : false,
      visible7 : false,
      visible8:false,
      visible9:false,
      visible10: false,
      visible11 : false,
      visible12 : false,
      visible13: false
    };
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
    if (
      currentAction === actionConsts.ACTION_TYPE_EDIT ||
      currentAction === actionConsts.ACTION_TYPE_VIEW
    ) {
      if (nextProps.dataById.data) {
        if (nextProps.dataById.data.contactAddresses !== null) {
          // eslint-disable-next-line no-return-assign
          nextProps.dataById.data.contactAddresses.forEach(
            // eslint-disable-next-line no-param-reassign
            (value, index) => (value.id = index + 1),
          );
        } else {
          // eslint-disable-next-line no-param-reassign
          nextProps.dataById.data.contactAddresses = [];
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

  handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    this.props.form.validateFields((errors, values) => {
      if (!errors) {
        const dataForSave = values;
        dataForSave.id = this.state.data.id;
        dataForSave.comments = this.state.commentsData;
        dataForSave.contactAddresses = this.state.data.contactAddresses;
        dataForSave.contactPersons = this.state.data.contactPersons;
        this.props.handleSubmitAction(
          actionConsts.ACTION_TYPE_SAVE,
          dataForSave,
        );
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
    const InvoiceTypeConst = localConsts.InvoiceTypeConst.map(k => <Option key={k.label} value={k.value}>{k.label}</Option>)
    const InvoiceIdType = localConsts.InvoiceIdType.map(k => <Option key={k.label} value={k.value}>{k.label}</Option>)
    const from_Date_Const = localConsts.from_Date.map(k => <Option key={k.label} value={k.value}>{k.label}</Option>)
    const To_Date_Const = localConsts.To_Date.map(k => <Option key={k.label} value={k.value}>{k.label}</Option>)

    const {
      data,
      isExistMessage,
      commentsData,
    } = this.state;
    const tableColumns0 = [
      {
          title:`${localConsts.COLUMN_PartyID}`,
          width:200,
          dataIndex: 'Party_ID',
          id: 'Party_ID',
      },
      {
          title:`${localConsts.COLUMN_PartyTypeId}`,
          width:200,
          dataIndex: 'Party_Type_Id',
          id: 'Party_Type_Id',
      },
      {
          title:`${localConsts.COLUMN_FirstName}`,
          width:200,
          dataIndex: 'First_name',
          id: 'First_name',
      },
      {
          title:`${localConsts.COLUMN_LastName}`,
          width:200,
          dataIndex: 'Last_name',
          id: 'Last_name',
      },
      {
          title:`${localConsts.COLUMN_GroupName}`,
          width:200,
          dataIndex: 'Group_Name',
          id: 'Group_Name',
        },
          
        
  ];
    const tableColumns1 = [
      {
          title:`${localConsts.COLUMN_ProductID}`,
          width:300,
          dataIndex: 'Billing_Acct_ID',
          id: 'Billing_Acct_ID',
      },
      {
          title:`${localConsts.COLUMN_BrandName}`,
          width:500,
          dataIndex: 'Description',
          id: 'Description',
      },
      {
          title:`${localConsts.COLUMN_InternalName}`,
          width:600,
          dataIndex: 'ext_acc_id',
          id: 'ext_acc_id',
      },
      {
        title:`${localConsts.COLUMN_ProductType}`,
        width:600,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
    },
    ]

  
    const dataViewMode = (
      <div className={styles.dataViewMode1}>
        <div className={styles.tabPaneCard2}>
          <Divider orientation="left" style={{ marginBottom: '0px' }}>
            {localConsts.DIVIDER1_CAPTION}
          </Divider>
          <div className={styles.viewLabelContainer}>
            <div className={styles.viewLabel}>{localConsts.CODE_LABEL}</div>
            <div className={styles.viewLabelSeparator}>:</div>
            <div className={styles.viewText}>{data.code}</div>
          </div>
          <div className={styles.viewLabelContainer}>
            <div className={styles.viewLabel}>{localConsts.STATUS_LABEL}</div>
            <div className={styles.viewLabelSeparator}>:</div>
            <div className={styles.viewText}>
              <Badge
                size="large"
                status={data.status === true ? 'success' : 'default'}
              />
              <span className={styles.viewText}>
                {data.status === true
                  ? localConsts.LEGEND_ACTIVE
                  : localConsts.LEGEND_INACTIVE}
              </span>
            </div>
          </div>
          <div className={styles.viewLabelContainer}>
            <div className={styles.viewLabel}>{localConsts.BLOCK_LABEL}</div>
            <div className={styles.viewLabelSeparator}>:</div>
            <div className={styles.viewText}>
              <Badge
                size="large"
                status={data.blocked === true ? 'error' : 'success'}
              />
              <span className={styles.viewText}>
                {data.blocked === true
                  ? localConsts.LEGEND_BLOCKED_YES
                  : localConsts.LEGEND_BLOCKED_NO}
              </span>
            </div>
          </div>
          <div className={styles.viewLabelContainer}>
            <div className={styles.viewLabel}>{localConsts.NAME_LABEL}</div>
            <div className={styles.viewLabelSeparator}>:</div>
            <div className={styles.viewText}>{data.name}</div>
          </div>
          <div className={styles.viewLabelContainer}>
            <div className={styles.viewLabel}>
              {localConsts.SHORT_NAME_LABEL}
            </div>
            <div className={styles.viewLabelSeparator}>:</div>
            <div className={styles.viewText}>{data.shortName}</div>
          </div>
          <div className={styles.viewLabelContainer}>
            <div className={styles.viewLabel}>{localConsts.REMARKS_LABEL}</div>
            <div className={styles.viewLabelSeparator}>:</div>
            <div className={styles.viewText}>{data.remarks}</div>
          </div>
        </div>
        <div className={styles.tabPaneCard2}>
          <Divider orientation="left">{localConsts.DIVIDER2_CAPTION}</Divider>
          <div className={styles.viewTextMarginLeft}>{data.addresses}</div>
          <br />
          <Divider orientation="left">{localConsts.DIVIDER3_CAPTION}</Divider>
          <div className={styles.viewTextMarginLeft}>{data.phoneNumbers}</div>
        </div>
      </div>
    );
    const tableColumns = [
      {
        title: 'Item No',
        width:500,
        dataIndex: 'Item_No',
        id: 'Item_No',
        render: text => <Link to={`InvoiceById`} >{text}</Link>, // backend send by id
      },
      {
        title: 'Description',
        dataIndex: 'Description',
        width: 750,
      }, 
      {
          title: 'Total',
          dataIndex: 'Total',
          width: 750,
      },
  
      {   title: 'Payment Id',
          width: 300,
          dataIndex: 'Payment_Id',
      },
      
      {   title: 'Amount Applied',
          width: 350,
          dataIndex: 'Amount_Applied',
      },
  
      {
        title: 'Actions',
        width: 300,
        render: text => <Link to={`/update`}><Button shape="omitted" type="primary" style={{background:'#337AB7',borderRadius:'13px'}} >Update</Button></Link>

      },

    ];
    const tableColumns2 = [
      {
          title:`${localConsts.COLUMN_Edit}`,
          width:300,
          dataIndex: 'Billing_Acct_ID',
          id: 'Billing_Acct_ID',
      },
      {
          title:`${localConsts.COLUMN_AgreementItemTypeId}`,
          width:700,
          dataIndex: 'Description',
          id: 'Description',
      },
      {
          title:`${localConsts.COLUMN_Currency}`,
          width:600,
          dataIndex: 'ext_acc_id',
          id: 'ext_acc_id',
      },
      {
        title:`${localConsts.COLUMN_AgreementText}`,
        width:600,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
    },
    {
      title:`${localConsts.COLUMN_AgreementImage}`,
      width:600,
      dataIndex: 'ext_acc_id',
      id: 'ext_acc_id',
  },
  {
    title:`${localConsts.COLUMN_ACTIONS}`,
    width:600,
    dataIndex: 'ext_acc_id',
    id: 'ext_acc_id',
},
    ]
    const tableColumns3 = [
      {
          title:`${localConsts.COLUMN_Edit}`,
          width:300,
          dataIndex: 'Billing_Acct_ID',
          id: 'Billing_Acct_ID',
      },
      {
          title:`${localConsts.COLUMN_FromDate}`,
          width:700,
          dataIndex: 'Description',
          id: 'Description',
      },
      {
          title:`${localConsts.COLUMN_ThroughDate}`,
          width:600,
          dataIndex: 'ext_acc_id',
          id: 'ext_acc_id',
      },
      {
        title:`${localConsts.COLUMN_SequenceNum}`,
        width:600,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
    },
    {
      title:`${localConsts.COLUMN_ProductPromoName}`,
      width:600,
      dataIndex: 'ext_acc_id',
      id: 'ext_acc_id',
  },
  {
    title:`${localConsts.COLUMN_ACTIONS}`,
    width:600,
    dataIndex: 'ext_acc_id',
    id: 'ext_acc_id',
},
    ]
    const tableColumns5 = [
      {
          title:`${localConsts.COLUMN_Release}`,
          width:300,
          dataIndex: 'Billing_Acct_ID',
          id: 'Billing_Acct_ID',
      },
      {
          title:`${localConsts.COLUMN_price}`,
          width:700,
          dataIndex: 'Description',
          id: 'Description',
      },
      {
          title:`${localConsts.COLUMN_Theinternalname}`,
          width:600,
          dataIndex: 'ext_acc_id',
          id: 'ext_acc_id',
      },
    {
    title:`${localConsts.COLUMN_ACTIONS}`,
    width:600,
    dataIndex: 'ext_acc_id',
    id: 'ext_acc_id',
},
    ]
    const tableColumns8 = [
      {
          title:`${localConsts.COLUMN_Release}`,
          width:300,
          dataIndex: 'Billing_Acct_ID',
          id: 'Billing_Acct_ID',
      },
      {
          title:`${localConsts.COLUMN_Theinternalname}`,
          width:600,
          dataIndex: 'ext_acc_id',
          id: 'ext_acc_id',
      },
    {
    title:`${localConsts.COLUMN_ACTIONS}`,
    width:600,
    dataIndex: 'ext_acc_id',
    id: 'ext_acc_id',
},
    ]
    const tableColumns9 = [
      {
          title:`${localConsts.COLUMN_FacilityName}`,
          width:300,
          dataIndex: 'Billing_Acct_ID',
          id: 'Billing_Acct_ID',
      },
      {
          title:`${localConsts.COLUMN_FacilityTypeId}`,
          width:600,
          dataIndex: 'ext_acc_id',
          id: 'ext_acc_id',
      },
   
    ]
    const tableColumns10 = [
      {
          title:`${localConsts.COLUMN_AgreementItemSeqId}`,
          width:300,
          dataIndex: 'Billing_Acct_ID',
          id: 'Billing_Acct_ID',
      },
      {
          title:`${localConsts.COLUMN_WorkEffortId}`,
          width:600,
          dataIndex: 'ext_acc_id',
          id: 'ext_acc_id',
      },
      {
        title:`${localConsts.COLUMN_ACTIONS}`,
        width:600,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
    },
   
    ]
    const tableColumns11 = [
      {
          title:`${localConsts.COLUMN_PartyID}`,
          width:300,
          dataIndex: 'Billing_Acct_ID',
          id: 'Billing_Acct_ID',
      },
      {
          title:`${localConsts.COLUMN_RoleTypeID}`,
          width:600,
          dataIndex: 'ext_acc_id',
          id: 'ext_acc_id',
      },
      {
        title:`${localConsts.COLUMN_ACTIONS}`,
        width:600,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
    },
   
    ]
    const tableColumns12 = [
      {
          title:`${localConsts.COLUMN_AgreementItemSeqId}`,
          width:300,
          dataIndex: 'Billing_Acct_ID',
          id: 'Billing_Acct_ID',
      },
      {
          title:`${localConsts.COLUMN_ContentName}`,
          width:600,
          dataIndex: 'ext_acc_id',
          id: 'ext_acc_id',
      },
      {
        title:`${localConsts.COLUMN_AgreementContentTypeId}`,
        width:600,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
    },
    {
      title:`${localConsts.COLUMN_StatusID}`,
      width:600,
      dataIndex: 'ext_acc_id',
      id: 'ext_acc_id',
  },
  {
    title:`${localConsts.COLUMN_ContentTypeId}`,
    width:600,
    dataIndex: 'ext_acc_id',
    id: 'ext_acc_id',
},
{
  title:`${localConsts.COLUMN_FromDate}`,
  width:600,
  dataIndex: 'ext_acc_id',
  id: 'ext_acc_id',
},
{
title:`${localConsts.COLUMN_ThroughDate}`,
width:600,
dataIndex: 'ext_acc_id',
id: 'ext_acc_id',
},
{
  title:`${localConsts.COLUMN_ACTIONS}`,
  width:600,
  dataIndex: 'ext_acc_id',
  id: 'ext_acc_id',
  },
   
    ]
    const tableColumns6 = [
      {
          title:`${localConsts.COLUMN_Edit}`,
          width:300,
          dataIndex: 'Billing_Acct_ID',
          id: 'Billing_Acct_ID',
      },
      {
          title:`${localConsts.COLUMN_Name}`,
          width:700,
          dataIndex: 'Description',
          id: 'Description',
      },
    {
    title:`${localConsts.COLUMN_ACTIONS}`,
    width:600,
    dataIndex: 'ext_acc_id',
    id: 'ext_acc_id',
},
    ]
    const tableColumns7 = [
      {
          title:`${localConsts.COLUMN_Description}`,
          width:300,
          dataIndex: 'Billing_Acct_ID',
          id: 'Billing_Acct_ID',
      },
    {
    title:`${localConsts.COLUMN_ACTIONS}`,
    width:600,
    dataIndex: 'ext_acc_id',
    id: 'ext_acc_id',
},
    ]
    const tableColumns4 = [
      {
          title:`${localConsts.COLUMN_Edit}`,
          width:300,
          dataIndex: 'Billing_Acct_ID',
          id: 'Billing_Acct_ID',
      },
      {
          title:`${localConsts.COLUMN_TermTypeId}`,
          width:700,
          dataIndex: 'Description',
          id: 'Description',
      },
      {
          title:`${localConsts.COLUMN_InvoiceItemType}`,
          width:600,
          dataIndex: 'ext_acc_id',
          id: 'ext_acc_id',
      },
      {
        title:`${localConsts.COLUMN_FromDate}`,
        width:600,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
    },
    {
      title:`${localConsts.COLUMN_ThroughDate}`,
      width:600,
      dataIndex: 'ext_acc_id',
      id: 'ext_acc_id',
  },
  {
    title:`${localConsts.COLUMN_TermValue}`,
    width:600,
    dataIndex: 'ext_acc_id',
    id: 'ext_acc_id',
},
{
  title:`${localConsts.COLUMN_TermDays}`,
  width:600,
  dataIndex: 'ext_acc_id',
  id: 'ext_acc_id',
},
{
  title:`${localConsts.COLUMN_TextValue}`,
  width:600,
  dataIndex: 'ext_acc_id',
  id: 'ext_acc_id',
},
{
  title:`${localConsts.COLUMN_MinQuantity}`,
  width:600,
  dataIndex: 'ext_acc_id',
  id: 'ext_acc_id',
},
{
  title:`${localConsts.COLUMN_MaxQuantity}`,
  width:600,
  dataIndex: 'ext_acc_id',
  id: 'ext_acc_id',
},
{
  title:`${localConsts.COLUMN_Description}`,
  width:600,
  dataIndex: 'ext_acc_id',
  id: 'ext_acc_id',
},
  {
    title:`${localConsts.COLUMN_ACTIONS}`,
    width:600,
    dataIndex: 'ext_acc_id',
    id: 'ext_acc_id',
},
    ]

    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit} id={localConsts.FORM_ID}>
          <Tabs defaultActiveKey="2" size="small" className={styles.tab}>
            <TabPane
              tab={localConsts.TAB2_CAPTION}
              key="2"
              className={styles.tabPaneCustom}
            >
              <div hidden={currentAction !== actionConsts.ACTION_TYPE_VIEW}>
                {dataViewMode}
              </div>
              <div
                className={styles.tabPaneCard}
                hidden={currentAction === actionConsts.ACTION_TYPE_VIEW}
              >
                <span hidden={currentAction === actionConsts.ACTION_TYPE_NEW}>
                  <FormItem {...formItemLayout} label={localConsts.BLOCK_LABEL}>
                    {getFieldDecorator('blocked', {
                      initialValue: data.blocked,
                      enableReinitialize: true,
                    })(
                      <div>
                        <Input type="hidden" name="blocked" />
                        <Badge
                          size="large"
                          status={data.blocked === true ? 'error' : 'success'}
                        />
                        <span className={styles.viewText}>
                          {data.blocked === true
                            ? localConsts.LEGEND_BLOCKED_YES
                            : localConsts.LEGEND_BLOCKED_NO}
                        </span> <FormItem label={localConsts.STATUS_LABEL}>
                  {getFieldDecorator('status', {
                    initialValue: data.status,
                    enableReinitialize: true,
                  })(
                    <div> <FormItem label={localConsts.STATUS_LABEL}>
                  {getFieldDecorator('status', {
                    initialValue: data.status,
                    enableReinitialize: true,
                  })(
                    <div> <FormItem label={localConsts.STATUS_LABEL}>
                    {getFieldDecorator('status', {
                      initialValue: data.status,
                      enableReinitialize: true,
                    })(
                      <div> <FormItem label={localConsts.STATUS_LABEL}>
                      {getFieldDecorator('status', {
                        initialValue: data.status,
                        enableReinitialize: true,
                      })(
                        <div>
                          <Input type="hidden" name="status" />
                          <Badge
                            size="large"
                            status={data.status === true ? 'success' : 'default'}
                          />
                          <span className={styles.viewText}>
                            {data.status === true
                              ? localConsts.LEGEND_ACTIVE
                              : localConsts.LEGEND_INACTIVE}
                          </span>
                        </div>,
                      )}
                    </FormItem>
                        <Input type="hidden" name="status" />
                        <Badge
                          size="large"
                          status={data.status === true ? 'success' : 'default'}
                        />
                        <span className={styles.viewText}>
                          {data.status === true
                            ? localConsts.LEGEND_ACTIVE
                            : localConsts.LEGEND_INACTIVE}
                        </span>
                      </div>,
                    )}
                  </FormItem>
                      <Input type="hidden" name="status" />
                      <Badge
                        size="large"
                        status={data.status === true ? 'success' : 'default'}
                      />
                      <span className={styles.viewText}>
                        {data.status === true
                          ? localConsts.LEGEND_ACTIVE
                          : localConsts.LEGEND_INACTIVE}
                      </span>
                    </div>,
                  )}
                </FormItem>
                      <Input type="hidden" name="status" />
                      <Badge
                        size="large"
                        status={data.status === true ? 'success' : 'default'}
                      />
                      <span className={styles.viewText}>
                        {data.status === true
                          ? localConsts.LEGEND_ACTIVE
                          : localConsts.LEGEND_INACTIVE}
                      </span>
                    </div>,
                  )}
                </FormItem>
                      </div>,
                    )}
                  </FormItem>
                </span>
                <Row style={{marginTop:'15px'}}>
                  <Col span={7}>
                    <FormItem label={localConsts.FromPartyID_LABEL}>
                      {getFieldDecorator('partyIdFrom', {
                        initialValue: data.partyIdFrom,
                        enableReinitialize: true,
                      })(
                        <Input style={{width:'295px'}}  name="FromPartyID" addonAfter={<Icon onClick={this.showDrawer2}  type="idcard"/>} />
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={1}>
                    <FormItem label={localConsts.ToPartyID_LABEL}>
                      {getFieldDecorator('partyIdTo', {
                        initialValue: data.partyIdTo,
                        enableReinitialize: true,
                      })(
                        <Input style={{width:'295px'}}  name="ToPartyID" addonAfter={<Icon  onClick={this.showDrawer2}  type="idcard"/>} />
                      )}
                    </FormItem>
                  </Col>
              </Row>
              <Row >
                  <Col span={6}>
                    <FormItem label={localConsts.RoleTypeIdTo_LABEL}>
                      {getFieldDecorator('roleTypeIdTo', {
                        initialValue: data.roleTypeIdTo,
                        enableReinitialize: true,
                      })(
                        <Select
                        showSearch
                        onBlur={this.enableSaveButton}
                        style={{width:'295px'}}
                        placeholder={localConsts.InvoiceType_PLACEHOLDER}
                        optionFilterProp="children"
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                     >{InvoiceTypeConst}</Select>
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={2}>
                    <FormItem label={localConsts.RoleTypeIdFrom_LABEL}>
                      {getFieldDecorator('roleTypeIdFrom', {
                        initialValue: data.roleTypeIdFrom,
                        enableReinitialize: true,
                      })(
                        <Select
                        showSearch
                        onBlur={this.enableSaveButton}
                        style={{width:'295px'}}
                        placeholder={localConsts.InvoiceType_PLACEHOLDER}
                        optionFilterProp="children"
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                     >{InvoiceTypeConst}</Select>
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={2}>
                    <FormItem label={localConsts.ProductId_LABEL}>
                      {getFieldDecorator('productId', {
                        initialValue: data.productId,
                        enableReinitialize: true,
                      })(
                        <Input style={{width:'295px'}}  name addonAfter={<Icon  onClick={this.showDrawer1}  type="idcard"/>} />
                      )}
                    </FormItem>
                  </Col>
              </Row>
              <Row >
              <Col span={6} >
                    <FormItem label={localConsts.AgreementDate_LABEL}>
                      {getFieldDecorator('agreementDate', {
                        initialValue: data.agreementDate,
                        enableReinitialize: true,
                      })(
                        <DatePicker style={{width:'295px'}} onBlur={this.enableSaveButton} onChange={this.onChange} />
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={2}>
                    <FormItem label={localConsts.AgreementTypeId_LABEL}>
                      {getFieldDecorator('agreementTypeId', {
                        initialValue: data.agreementTypeId,
                        enableReinitialize: true,
                      })(
                        <Select
                        showSearch
                        style={{width:'295px'}}
                        placeholder={localConsts.InvoiceType_PLACEHOLDER}
                        optionFilterProp="children"
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                     >{InvoiceTypeConst}</Select>
                       
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={2}>
                    <FormItem label={localConsts.FromDate_LABEL}>
                      {getFieldDecorator('fromDate', {
                        initialValue: data.fromDate,
                        enableReinitialize: true,
                      })(
                        <DatePicker onBlur={this.enableSaveButton} style={{width:'295px'}} onChange={this.onChange} />
                      )}
                    </FormItem>
                  </Col>
              </Row>
              <Row >
              <Col span={6}>
                    <FormItem label={localConsts.ThroughDate_LABEL}>
                      {getFieldDecorator('thruDate', {
                        initialValue: data.thruDate,
                        enableReinitialize: true,
                      })(
                        <DatePicker style={{width:'295px'}} onBlur={this.enableSaveButton} onChange={this.onChange} />
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={2}>
                    <FormItem label={localConsts.Description_LABEL}>
                      {getFieldDecorator('description', {
                        initialValue: data.description,
                        enableReinitialize: true,
                      })(
                        <Input.TextArea
                          type="text"
                          name="description"
                          rows={4}
                          style={{width:'295px'}}
                          // placeholder={localConsts.RecurrenceInfoId_PLACEHOLDER}
                          // hidden={currentAction !== actionConsts.ACTION_TYPE_NEW}
                          onBlur={this.checkIsExists}
                        />
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={1}>
                    <FormItem label={localConsts.TextData_LABEL}>
                      {getFieldDecorator('textData', {
                        initialValue: data.InvoiceDate,
                        enableReinitialize: true,
                      })(
                        <Input.TextArea
                          type="text"
                          name="textData"
                          style={{width:'295px'}} 
                          rows={4}
                          style={{width:'295px'}}
                          // placeholder={localConsts.InvoiceMessage_PLACEHOLDER}
                          // hidden={currentAction !== actionConsts.ACTION_TYPE_NEW}
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
            >
              <Tabs tabPosition="left">
                <TabPane tab="Agreement (Edit)" key="Agreement (Edit)">
                <Row gutter={20} style={{marginTop:'15px'}}>
                  <Col span={7}>
                    <FormItem label={localConsts.FromPartyID_LABEL}>
                      {getFieldDecorator('FromPartyID', {
                        initialValue: data.FromPartyID,
                        enableReinitialize: true,
                      })(
                        <Input style={{width:'295px'}} placeholder={localConsts.FromPartyID_PLACEHOLDER} name="FromPartyID" addonAfter={<Icon onClick={this.showDrawer2}  type="idcard"/>} />
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={3}>
                    <FormItem label={localConsts.ToPartyID_LABEL}>
                      {getFieldDecorator('ToPartyID', {
                        initialValue: data.ToPartyID,
                        enableReinitialize: true,
                      })(
                        <Input style={{width:'295px'}} placeholder={localConsts.ToPartyID_PLACEHOLDER} name="ToPartyID" addonAfter={<Icon  onClick={this.showDrawer2}  type="idcard"/>} />
                      )}
                    </FormItem>
                  </Col>
              </Row>
              <Row gutter={20}>
                  <Col span={7}>
                    <FormItem label={localConsts.RoleTypeIdTo_LABEL}>
                      {getFieldDecorator('ProductId', {
                        initialValue: data.InvoiceType,
                        enableReinitialize: true,
                      })(
                        <Select
                        showSearch
                        onBlur={this.enableSaveButton}
                        style={{width:'295px'}}
                        placeholder={localConsts.InvoiceType_PLACEHOLDER}
                        optionFilterProp="children"
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                     >{InvoiceTypeConst}</Select>
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={3}>
                    <FormItem label={localConsts.RoleTypeIdFrom_LABEL}>
                      {getFieldDecorator('RoleTypeIdFrom', {
                        initialValue: data.InvoiceType,
                        enableReinitialize: true,
                      })(
                        <Select
                        showSearch
                        onBlur={this.enableSaveButton}
                        style={{width:'295px'}}
                        placeholder={localConsts.InvoiceType_PLACEHOLDER}
                        optionFilterProp="children"
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                     >{InvoiceTypeConst}</Select>
                      )}
                    </FormItem>
                  </Col>
              </Row>
              <Row gutter={20}>
              <Col span={7}>
                    <FormItem label={localConsts.ProductId_LABEL}>
                      {getFieldDecorator('BillingAccountID', {
                        initialValue: data.InvoiceDate,
                        enableReinitialize: true,
                      })(
                        <Input style={{width:'295px'}}  name="BillingAccountID" addonAfter={<Icon  onClick={this.showDrawer1}  type="idcard"/>} />
                      )}
                    </FormItem>
                  </Col>
              <Col span={7} offset={3} >
                    <FormItem label={localConsts.AgreementDate_LABEL}>
                      {getFieldDecorator('AgreementDate', {
                        initialValue: data.InvoiceDate,
                        enableReinitialize: true,
                      })(
                        <DatePicker style={{width:'295px'}} onBlur={this.enableSaveButton} onChange={this.onChange} />
                      )}
                    </FormItem>
                  </Col>
              </Row>
              <Row gutter={20}>
              <Col span={7} >
                    <FormItem label={localConsts.AgreementTypeId_LABEL}>
                      {getFieldDecorator('RoleTypeId', {
                        initialValue: data.RoleTypeId,
                        enableReinitialize: true,
                      })(
                        <Select
                        showSearch
                        style={{width:'295px'}}
                        placeholder={localConsts.InvoiceType_PLACEHOLDER}
                        optionFilterProp="children"
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                     >{InvoiceTypeConst}</Select>
                       
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={3}>
                    <FormItem label={localConsts.FromDate_LABEL}>
                      {getFieldDecorator('DueDate', {
                        initialValue: data.InvoiceDate,
                        enableReinitialize: true,
                      })(
                        <DatePicker onBlur={this.enableSaveButton} style={{width:'295px'}} onChange={this.onChange} />
                      )}
                    </FormItem>
                  </Col>
              </Row>
              <Row gutter={20}>
              <Col span={7}>
                    <FormItem label={localConsts.ThroughDate_LABEL}>
                      {getFieldDecorator('ThroughDate', {
                        initialValue: data.InvoiceDate,
                        enableReinitialize: true,
                      })(
                        <DatePicker style={{width:'295px'}} onBlur={this.enableSaveButton} onChange={this.onChange} />
                      )}
                    </FormItem>
                  </Col>
              </Row>
              <Row gutter={20}>
              <Col span={9} >
                    <FormItem label={localConsts.Description_LABEL}>
                      {getFieldDecorator('Description', {
                        initialValue: data.RoleTypeId,
                        enableReinitialize: true,
                      })(
                        <Input.TextArea
                          type="text"
                          name="RecurrenceInfoId"
                          rows={4}
                          style={{width:'295px'}}
                          // placeholder={localConsts.RecurrenceInfoId_PLACEHOLDER}
                          // hidden={currentAction !== actionConsts.ACTION_TYPE_NEW}
                          onBlur={this.checkIsExists}
                        />,
                      )}
                    </FormItem>
                  </Col>
              <Col span={9} offset={1}>
                    <FormItem label={localConsts.TextData_LABEL}>
                      {getFieldDecorator('InvoiceMessage', {
                        initialValue: data.InvoiceDate,
                        enableReinitialize: true,
                      })(
                        <Input.TextArea
                          type="text"
                          name="Invoice Message"
                          style={{width:'295px'}} 
                          rows={4}
                          style={{width:'295px'}}
                          // placeholder={localConsts.InvoiceMessage_PLACEHOLDER}
                          // hidden={currentAction !== actionConsts.ACTION_TYPE_NEW}
                          onBlur={this.checkIsExists}
                        />,
                      )}
                    </FormItem>
                  </Col>
              </Row>
              <Row className={styles.copy}>
                <Col>Copy Agreement <Icon style={{marginLeft:'20px'}} type="copy" /></Col>
                <Col style={{marginTop:'15px'}}> 
                  <CheckboxGroup options={localConsts.Options} defaultValue={['Agreement Terms']}  />
                </Col>
              </Row>
                </TabPane>
                <TabPane tab="Agreement Terms" key="Agreement Terms">
                 
                  <Row gutter={20} style={{marginTop:'15px'}}>
                  <Col span={7}>
                    <FormItem label={localConsts.TermTypeId_LABEL}>
                      {getFieldDecorator('TermTypeId', {
                        initialValue: data.FromPartyID,
                        enableReinitialize: true,
                      })(
                        <Select
                        showSearch
                        style={{width:'295px'}}
                        placeholder={localConsts.InvoiceType_PLACEHOLDER}
                        optionFilterProp="children"
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                     >{InvoiceTypeConst}</Select>
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={3}>
                    <FormItem label={localConsts.InvoiceItemType_LABEL}>
                      {getFieldDecorator('InvoiceItemType', {
                        initialValue: data.ToPartyID,
                        enableReinitialize: true,
                      })(
                        <Select
                        showSearch
                        style={{width:'295px'}}
                        placeholder={localConsts.InvoiceType_PLACEHOLDER}
                        optionFilterProp="children"
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                     >{InvoiceTypeConst}</Select>                      )}
                    </FormItem>
                  </Col>
              </Row>
              <Row gutter={20}>
              <Col span={7}>
                    <FormItem label={localConsts.ThroughDate_LABEL}>
                      {getFieldDecorator('ThroughDate', {
                        initialValue: data.InvoiceDate,
                        enableReinitialize: true,
                      })(
                        <DatePicker style={{width:'295px'}} onBlur={this.enableSaveButton} onChange={this.onChange} />
                      )}
                    </FormItem>
                  </Col>
              <Col span={7} offset={3}>
                    <FormItem label={localConsts.FromDate_LABEL}>
                      {getFieldDecorator('FromDate', {
                        initialValue: data.InvoiceDate,
                        enableReinitialize: true,
                      })(
                        <DatePicker style={{width:'295px'}} onBlur={this.enableSaveButton} onChange={this.onChange} />
                      )}
                    </FormItem>
                  </Col>
              </Row>
              <Row gutter={20}>
              <Col span={9} >
                    <FormItem label={localConsts.TermValue_LABEL}>
                      {getFieldDecorator('TermValue', {
                        initialValue: data.RoleTypeId,
                        enableReinitialize: true,
                      })(
                        <Input
                          type="text"
                          name="RecurrenceInfoId"
                          rows={4}
                          style={{width:'295px'}}
                          // placeholder={localConsts.RecurrenceInfoId_PLACEHOLDER}
                          // hidden={currentAction !== actionConsts.ACTION_TYPE_NEW}
                          onBlur={this.checkIsExists}
                        />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={9} offset={1}>
                    <FormItem label={localConsts.TermDays_LABEL}>
                      {getFieldDecorator('TermValue', {
                        initialValue: data.RoleTypeId,
                        enableReinitialize: true,
                      })(
                        <Input
                          type="text"
                          name="RecurrenceInfoId"
                          rows={4}
                          style={{width:'295px'}}
                          // placeholder={localConsts.RecurrenceInfoId_PLACEHOLDER}
                          // hidden={currentAction !== actionConsts.ACTION_TYPE_NEW}
                          onBlur={this.checkIsExists}
                        />,
                      )}
                    </FormItem>
                  </Col>
              </Row>
              <Row gutter={20}>
              <Col span={9} >
                    <FormItem label={localConsts.TextValue_LABEL}>
                      {getFieldDecorator('TextValue', {
                        initialValue: data.RoleTypeId,
                        enableReinitialize: true,
                      })(
                        <Input
                          type="text"
                          name="RecurrenceInfoId"
                          rows={4}
                          style={{width:'295px'}}
                          // placeholder={localConsts.RecurrenceInfoId_PLACEHOLDER}
                          // hidden={currentAction !== actionConsts.ACTION_TYPE_NEW}
                          onBlur={this.checkIsExists}
                        />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={3} offset={1}>
                    <FormItem label={localConsts.MinQuantity_LABEL}>
                      {getFieldDecorator('min', {
                        initialValue: data.RoleTypeId,
                        enableReinitialize: true,
                      })(
                        <InputNumber style={{width:'119px'}} min={1} max={10}   />,

                      )}
                    </FormItem>
                  </Col>
                  <Col span={3} offset={2}>
                    <FormItem label={localConsts.MaxQuantity_LABEL}>
                      {getFieldDecorator('max', {
                        initialValue: data.RoleTypeId,
                        enableReinitialize: true,
                      })(
                        <InputNumber style={{width:'119px'}}  min={1} max={10}   />,

                      )}
                    </FormItem>
                  </Col>
              </Row>
              <Row gutter={20}>
              <Col span={19} >
                    <FormItem label={localConsts.Description_LABEL}>
                      {getFieldDecorator('Description', {
                        initialValue: data.RoleTypeId,
                        enableReinitialize: true,
                      })(
                        <Input.TextArea
                          type="text"
                          name="RecurrenceInfoId"
                          rows={4}
                          style={{width:'795px'}}
                          // placeholder={localConsts.RecurrenceInfoId_PLACEHOLDER}
                          // hidden={currentAction !== actionConsts.ACTION_TYPE_NEW}
                          onBlur={this.checkIsExists}
                        />,
                      )}
                    </FormItem>
                  </Col>
            
              </Row>
            
                </TabPane>
                <TabPane tab="Agreement Item" key="Agreement Items">
                <Tabs defaultActiveKey="Agreement Item" >
                  <TabPane tab="Agreement Item" key="Agreement Item">
                    <Row style= {{marginTop:'14px'}}>
                          <Col span={4} className={styles.copy}>{localConsts.ListAgreementItems}</Col>
                          <Col span={5} offset={15} ><span style={{color: '#337AB7'}} onClick={this.showDrawer}>Create Agreement Item</span></Col>
                    </Row>
                    <Row style= {{marginTop:'14px'}}>    
                      <div className={styles.tableContainerParent}>
                        <Table
                          className={styles.tableContainer}
                          // rowKey="id"
                          // title={this.tableHeader}
                          columns={tableColumns2}
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
                  </TabPane>
                  <TabPane tab="Promotions" key="Promotions">
                  <Row style= {{marginTop:'14px'}}>
                          <Col span={6} className={styles.copy}>{localConsts.ListAgreementPromoAppls}</Col>
                          <Col span={5} offset={13} ><span style={{color: '#337AB7'}} onClick={this.showDrawer3}>Add New Promotion</span></Col>
                    </Row>
                    <Row style= {{marginTop:'14px'}}>    
                      <div className={styles.tableContainerParent}>
                        <Table
                          className={styles.tableContainer}
                          // rowKey="id"
                          // title={this.tableHeader}
                          columns={tableColumns3}
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
                  </TabPane>
                  <TabPane tab="Terms" key="Terms">
                  <Row style= {{marginTop:'14px'}}>
                          <Col span={6} className={styles.copy}>{localConsts.ListAgreementItemTerms}</Col>
                          <Col span={3} offset={15} ><span style={{color: '#337AB7'}} onClick={this.showDrawer4}>Add New Terms</span></Col>
                    </Row>
                    <Row style= {{marginTop:'14px'}}>    
                      <div className={styles.tableContainerParent}>
                        <Table
                          className={styles.tableContainer}
                          // rowKey="id"
                          // title={this.tableHeader}
                          columns={tableColumns4}
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
                  </TabPane>
                  <TabPane tab="Products" key="Products">
                  <Row style= {{marginTop:'14px'}}>
                          <Col span={6} className={styles.copy}>{localConsts.ListAgreementItemProducts}</Col>
                          <Col span={6} offset={12} ><div><Icon type="printer" /><span style={{color: '#337AB7',marginLeft:'24px'}} onClick={this.showDrawer5}>Add New Products</span></div></Col>
                    </Row>
                    <Row style= {{marginTop:'14px'}}>    
                      <div className={styles.tableContainerParent}>
                        <Table
                          className={styles.tableContainer}
                          // rowKey="id"
                          // title={this.tableHeader}
                          columns={tableColumns5}
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
                  </TabPane>
                  <TabPane tab="Party" key="Party">
                  <Row style= {{marginTop:'14px'}}>
                          <Col span={6} className={styles.copy}>{localConsts.ListAgreementItemParties}</Col>
                          <Col span={4} offset={14} ><div><span style={{color: '#337AB7'}} onClick={this.showDrawer6}>Add New Party</span></div></Col>
                    </Row>
                    <Row style= {{marginTop:'14px'}}>    
                      <div className={styles.tableContainerParent}>
                        <Table
                          className={styles.tableContainer}
                          // rowKey="id"
                          // title={this.tableHeader}
                          columns={tableColumns6}
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
                  </TabPane>
                  <TabPane tab="Geo" key="Geo">
                  <Row style= {{marginTop:'14px'}}>
                          <Col span={8} className={styles.copy}>{localConsts.ListAgreementGeographicalApplic}</Col>
                          <Col span={4} offset={12} ><div><span style={{color: '#337AB7'}} onClick={this.showDrawer7}>Add New Geo</span></div></Col>
                    </Row>
                    <Row style= {{marginTop:'14px'}}>    
                      <div className={styles.tableContainerParent}>
                        <Table
                          className={styles.tableContainer}
                          // rowKey="id"
                          // title={this.tableHeader}
                          columns={tableColumns7}
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
                  </TabPane>
                  <TabPane tab="Facilities" key="Facilities">
                  <Row style= {{marginTop:'14px'}}>
                          <Col span={6} className={styles.copy}>{localConsts.ListAgreementItemFacilities}</Col>
                          <Col span={6} offset={12} ><div><Icon type="printer" /><span style={{color: '#337AB7',marginLeft:'24px'}} onClick={this.showDrawer8}>Add New Facility</span></div></Col>
                    </Row>
                    <Row style= {{marginTop:'14px'}}>    
                      <div className={styles.tableContainerParent}>
                        <Table
                          className={styles.tableContainer}
                          // rowKey="id"
                          // title={this.tableHeader}
                          columns={tableColumns8}
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
                  </TabPane>
                </Tabs>
                </TabPane>
                <TabPane tab="Agreement Work Effort Applics" key="Agreement Work Effort Applics">
                  <Row style= {{marginTop:'14px'}}>
                            <Col span={8} className={styles.copy}>{localConsts.AddAgreementWorkEffortApplicList}</Col>
                            <Col span={6} offset={10} ><div><span style={{color: '#337AB7',marginLeft:'24px'}} onClick={this.showDrawer10}>Add Agreement Work Effort</span></div></Col>
                      </Row>
                      <Row style= {{marginTop:'14px'}}>    
                        <div className={styles.tableContainerParent}>
                          <Table
                            className={styles.tableContainer}
                            // rowKey="id"
                            // title={this.tableHeader}
                            columns={tableColumns10}
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
                </TabPane>
                <TabPane tab="Agreement Roles" key="Agreement Roles">
                <Row style= {{marginTop:'14px'}}>
                            <Col span={6} className={styles.copy}>{localConsts.AgreementRolesList}</Col>
                            <Col span={6} offset={12} ><div><span style={{color: '#337AB7',marginLeft:'24px'}} onClick={this.showDrawer11}>Add Agreement Roles</span></div></Col>
                      </Row>
                      <Row style= {{marginTop:'14px'}}>    
                        <div className={styles.tableContainerParent}>
                          <Table
                            className={styles.tableContainer}
                            // rowKey="id"
                            // title={this.tableHeader}
                            columns={tableColumns11}
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
                </TabPane>
                <TabPane tab="Agreement Contents" key="Agreement Contents">
                <Row style= {{marginTop:'14px'}}>
                            <Col span={6} className={styles.copy}>{localConsts.ContentList}</Col>
                            <Col span={6} offset={12} ><div><span style={{color: '#337AB7',marginLeft:'24px'}} onClick={this.showDrawer12}>Add Agreement Content</span></div></Col>
                      </Row>
                      <Row style= {{marginTop:'14px'}}>    
                        <div className={styles.tableContainerParent}>
                          <Table
                            className={styles.tableContainer}
                            // rowKey="id"
                            // title={this.tableHeader}
                            columns={tableColumns12}
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
                </TabPane>
              </Tabs>
               
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
            width ="709px"	
            // placement="right"
            closable={true}
            onClose={this.onClose2}
            visible={this.state.visible2}
            >
             <Row gutter={20}>
                <Col span={11}>  
                    <FormItem   label={localConsts.PartyID_LABEL}>
                        {getFieldDecorator('Party_ID', {                     
                            })(
                              <Input  placeholder={localConsts.PartyID_PLACEHOLDER}
                                addonBefore={(
                                  <Select defaultValue="Contains">
                                    {InvoiceIdType}
                                  </Select>
                                  )}
                                addonAfter={<Popover content="ignore case"><Checkbox /></Popover> }
                              />
                                )}
                    </FormItem>  
                </Col>
                <Col span={8} offset={2}>  
                    <FormItem   label={localConsts.partyTypeID_LABEL}>
                        {getFieldDecorator('Party_Type_ID', { 
                        })(
                            <Input style= {{width:'300px'}} type="text" /> 
                        )}
                    </FormItem>  
                </Col>
            </Row>
            <Row gutter={20}>
                <Col span={11}>  
                    <FormItem   label={localConsts.FirstName_LABEL}>
                        {getFieldDecorator('First_Name', { 
                                               
                        })(
                          <Input  placeholder={localConsts.FirstName_PLACEHOLDER}
                          addonBefore={(
                            <Select defaultValue="Contains">
                              {InvoiceIdType}
                            </Select>
                            )}
                          addonAfter={<Popover content="ignore case"><Checkbox /></Popover> }
                        />
                                )}
                    </FormItem>  
                </Col>
                <Col span={11} offset={2}>  
                    <FormItem   label="Last Name">
                        {getFieldDecorator('Last_Name', {                   
                        })(
                          <Input  placeholder={localConsts.LastName_PLACEHOLDER}
                          addonBefore={(
                            <Select defaultValue="Contains">
                              {InvoiceIdType}
                            </Select>
                            )}
                          addonAfter={<Popover content="ignore case"><Checkbox /></Popover> }
                        />
                        )}
                    </FormItem>  
                </Col>
            </Row>
            <Row gutter={20}>
            <Col span = {11}> 
                <FormItem   label={localConsts.Group_Name_LABEL}>
                    {getFieldDecorator('Group_Name', { 
                    })(
                      <Input  placeholder={localConsts.Group_Name_PLACEHOLDER}
                      addonBefore={(
                        <Select defaultValue="Contains">
                          {InvoiceIdType}
                        </Select>
                        )}
                      addonAfter={<Popover content="ignore case"><Checkbox /></Popover> }
                    />
                    )}
                </FormItem>  
            </Col>
        </Row>
        <Row  style={{borderTop:'1px dashed #E3E7F1',height:'62px',borderBottom:'1px dashed #E3E7F1'}}>
            <Col  span={2}offset={21} ><Button className = "button" style={{marginTop:'14px'}} type="primary">Search</Button></Col>
        </Row>
        <Row style= {{marginTop:'14px'}}>    
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
    <Drawer               // work here 
            title={localConsts.PartybyName_title}
            width ="709px"	
            // placement="right"
            closable={true}
            onClose={this.onClose13}
            visible={this.state.visible13}
            >
             <Row gutter={20}>
                <Col span={11}>  
                    <FormItem   label={localConsts.PartyID_LABEL}>
                        {getFieldDecorator('Party_ID', {                     
                            })(
                              <Input  placeholder={localConsts.PartyID_PLACEHOLDER}
                                addonBefore={(
                                  <Select defaultValue="Contains">
                                    {InvoiceIdType}
                                  </Select>
                                  )}
                                addonAfter={<Popover content="ignore case"><Checkbox /></Popover> }
                              />
                                )}
                    </FormItem>  
                </Col>
                <Col span={8} offset={2}>  
                    <FormItem   label={localConsts.partyTypeID_LABEL}>
                        {getFieldDecorator('Party_Type_ID', { 
                        })(
                            <Input style= {{width:'300px'}} type="text" /> 
                        )}
                    </FormItem>  
                </Col>
            </Row>
            <Row gutter={20}>
                <Col span={11}>  
                    <FormItem   label={localConsts.FirstName_LABEL}>
                        {getFieldDecorator('First_Name', { 
                                               
                        })(
                          <Input  placeholder={localConsts.FirstName_PLACEHOLDER}
                          addonBefore={(
                            <Select defaultValue="Contains">
                              {InvoiceIdType}
                            </Select>
                            )}
                          addonAfter={<Popover content="ignore case"><Checkbox /></Popover> }
                        />
                                )}
                    </FormItem>  
                </Col>
                <Col span={11} offset={2}>  
                    <FormItem   label="Last Name">
                        {getFieldDecorator('Last_Name', {                   
                        })(
                          <Input  placeholder={localConsts.LastName_PLACEHOLDER}
                          addonBefore={(
                            <Select defaultValue="Contains">
                              {InvoiceIdType}
                            </Select>
                            )}
                          addonAfter={<Popover content="ignore case"><Checkbox /></Popover> }
                        />
                        )}
                    </FormItem>  
                </Col>
            </Row>
            <Row gutter={20}>
            <Col span = {11}> 
                <FormItem   label={localConsts.Group_Name_LABEL}>
                    {getFieldDecorator('Group_Name', { 
                    })(
                      <Input  placeholder={localConsts.Group_Name_PLACEHOLDER}
                      addonBefore={(
                        <Select defaultValue="Contains">
                          {InvoiceIdType}
                        </Select>
                        )}
                      addonAfter={<Popover content="ignore case"><Checkbox /></Popover> }
                    />
                    )}
                </FormItem>  
            </Col>
        </Row>
        <Row  style={{borderTop:'1px dashed #E3E7F1',height:'62px',borderBottom:'1px dashed #E3E7F1'}}>
            <Col  span={2}offset={21} ><Button className = "button" style={{marginTop:'14px'}} type="primary">Search</Button></Col>
        </Row>
        <Row style= {{marginTop:'14px'}}>    
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
            width ="709px"	
            // placement="right"
            closable={true}
            onClose={this.onClose9}
            visible={this.state.visible9}
            >
             <Row gutter={20}>
                <Col span={11}>  
                    <FormItem   label={localConsts.FacilityId_LABEL}>
                        {getFieldDecorator('Party_ID', {                     
                            })(
                              <Input  
                                addonBefore={(
                                  <Select defaultValue="Contains">
                                    {InvoiceIdType}
                                  </Select>
                                  )}
                                addonAfter={<Popover content="ignore case"><Checkbox /></Popover> }
                              />
                                )}
                    </FormItem>  
                </Col>
                <Col span={11} offset={2}>  
                <FormItem   label={localConsts.FacilityName_LABEL}>
                        {getFieldDecorator('Name', {                     
                            })(
                              <Input  
                                addonBefore={(
                                  <Select defaultValue="Contains">
                                    {InvoiceIdType}
                                  </Select>
                                  )}
                                addonAfter={<Popover content="ignore case"><Checkbox /></Popover> }
                              />
                                )}
                    </FormItem>   
                </Col>
            </Row>
            <Row gutter={20}>
                <Col span={11}>  
                    <FormItem   label={localConsts.ParentFacilityId_LABEL}>
                        {getFieldDecorator('First_Name', { 
                                               
                        })(
                          <Input  
                          addonBefore={(
                            <Select defaultValue="Contains">
                              {InvoiceIdType}
                            </Select>
                            )}
                          addonAfter={<Popover content="ignore case"><Checkbox /></Popover> }
                        />
                                )}
                    </FormItem>  
                </Col>
            <Col span = {11} offset={2}> 
                <FormItem   label={localConsts.FacilityTypeId_LABEL}>
                    {getFieldDecorator('Group_Name', { 
                    })(
                      <Select
                      showSearch
                      style={{width:'295px'}}
                      placeholder={localConsts.InvoiceType_PLACEHOLDER}
                      optionFilterProp="children"
                      filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                   >{InvoiceTypeConst}</Select>
                    )}
                </FormItem>  
            </Col>
        </Row>
        <Row  style={{marginTop:'14px',borderTop:'1px dashed #E3E7F1',height:'62px',borderBottom:'1px dashed #E3E7F1'}}>
            <Col  span={2}offset={21} ><Button className = "button" style={{marginTop:'14px'}} type="primary">Search</Button></Col>
        </Row>
        <Row style= {{marginTop:'14px'}}>    
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
            width ="709px"	
            // placement="right"
            closable={true}
            onClose={this.onClose10}
            visible={this.state.visible10}
            >
             <Row gutter={20}>
                <Col span={22}>  
                    <FormItem label={localConsts.WorkEffortId_LABEL}>
                      {getFieldDecorator('FromPartyID', {
                        initialValue: data.FromPartyID,
                        enableReinitialize: true,
                      })(
                        <Input style={{width:'595px'}}  name="FromPartyID" addonAfter={<Icon onClick={this.showDrawer2}  type="idcard"/>} />  // check drawer
                      )}
                    </FormItem> 
                </Col>
              </Row>
            <Row gutter={20}>
            <Col span = {11} > 
                <FormItem   label={localConsts.AgreementItemSeqId_LABEL}>
                    {getFieldDecorator('Group_Name', { 
                    })(
                      <Select
                      showSearch
                      style={{width:'595px'}}
                      optionFilterProp="children"
                      filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                   >{InvoiceTypeConst}</Select>
                    )}
                </FormItem>  
            </Col>
        </Row>
        <Row  style={{marginTop:'24px',borderTop:'1px dashed #E3E7F1',height:'62px',borderBottom:'1px dashed #E3E7F1'}}>
            <Col  span={2}offset={21} ><Button className = "button" style={{marginTop:'14px'}} type="primary">Save</Button></Col>
        </Row>
       
    </Drawer>
    <Drawer
            title={localConsts.AgreementRoles_title}
            width ="709px"	
            // placement="right"
            closable={true}
            onClose={this.onClose11}
            visible={this.state.visible11}
            >
             <Row gutter={20}>
                <Col span={22}>  
                    <FormItem label={localConsts.PartyID_LABEL}>
                      {getFieldDecorator('FromPartyID', {
                        initialValue: data.FromPartyID,
                        enableReinitialize: true,
                      })(
                        <Input style={{width:'595px'}}  name="FromPartyID" addonAfter={<Icon onClick={this.showDrawer13}  type="idcard"/>} />  // check drawer
                      )}
                    </FormItem> 
                </Col>
              </Row>
            <Row gutter={20}>
            <Col span = {11} > 
                <FormItem   label={localConsts.RoleTypeID_LABEL}>
                    {getFieldDecorator('Group_Name', { 
                    })(
                      <Select
                      showSearch
                      style={{width:'595px'}}
                      optionFilterProp="children"
                      filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                   >{InvoiceTypeConst}</Select>
                    )}
                </FormItem>  
            </Col>
        </Row>
        <Row  style={{marginTop:'24px',borderTop:'1px dashed #E3E7F1',height:'62px',borderBottom:'1px dashed #E3E7F1'}}>
            <Col  span={2}offset={21} ><Button className = "button" style={{marginTop:'14px'}} type="primary">Save</Button></Col>
        </Row>
       
    </Drawer>


    <Drawer
            title={localConsts.NewProduct_title}
            width ="709px"	
            // placement="right"
            closable={true}
            onClose={this.onClose5}
            visible={this.state.visible5}
            >
             <Row gutter={20}>
                <Col span={11}>  
                <FormItem label={localConsts.ProductId_LABEL}>
                      {getFieldDecorator('BillingAccountID', {
                        initialValue: data.InvoiceDate,
                        enableReinitialize: true,
                      })(
                        <Input style={{width:'295px'}}  name="BillingAccountID" addonAfter={<Icon  onClick={this.showDrawer1}  type="idcard"/>} />
                      )}
                    </FormItem>
                </Col>
                <Col span={8} offset={2}>  
                    <FormItem   label={localConsts.Price_LABEL}>
                        {getFieldDecorator('Party_Type_ID', { 
                        })(
                            <Input style= {{width:'300px'}} type="text" /> 
                        )}
                    </FormItem>  
                </Col>
            </Row>

        <Row  style={{borderTop:'1px dashed #E3E7F1',height:'62px',marginTop:'14px'}}>
            <Col  span={2}offset={21} ><Button className = "button" style={{marginTop:'14px'}} type="primary">Save</Button></Col>
        </Row>    
    </Drawer>
    <Drawer
            title={localConsts.AmendmentofthePartytotheAgreement_title}
            width ="709px"	
            // placement="right"
            closable={true}
            onClose={this.onClose6}
            visible={this.state.visible6}
            >
              <Row gutter={20}>
                <Col span={22}>  
                    <FormItem label={localConsts.PartyID_LABEL}>
                      {getFieldDecorator('FromPartyID', {
                        initialValue: data.FromPartyID,
                        enableReinitialize: true,
                      })(
                        <Input style={{width:'595px'}} placeholder={localConsts.FromPartyID_PLACEHOLDER} name="FromPartyID" addonAfter={<Icon onClick={this.showDrawer2}  type="idcard"/>} />
                      )}
                    </FormItem> 
                </Col>
              </Row>
              <Row  style={{borderTop:'1px dashed #E3E7F1',height:'62px',marginTop:'100px'}}>
            <Col  span={2}offset={21} ><Button className = "button" style={{marginTop:'14px'}} type="primary">Save</Button></Col>
        </Row>  
      </Drawer>
      <Drawer
            title={localConsts.NewAgreementItemFacility_title}
            width ="709px"	
            // placement="right"
            closable={true}
            onClose={this.onClose8}
            visible={this.state.visible8}
            >
              <Row gutter={20}>
                <Col span={22}>  
                    <FormItem label={localConsts.FacilityId_LABEL}>
                      {getFieldDecorator('FromPartyID', {
                        initialValue: data.FromPartyID,
                        enableReinitialize: true,
                      })(
                        <Input style={{width:'595px'}}  name="FromPartyID" addonAfter={<Icon onClick={this.showDrawer9}  type="idcard"/>} />
                      )}
                    </FormItem> 
                </Col>
              </Row>
              <Row  style={{borderTop:'1px dashed #E3E7F1',height:'62px',marginTop:'100px'}}>
            <Col  span={2}offset={21} ><Button className = "button" style={{marginTop:'14px'}} type="primary">Save</Button></Col>
        </Row>  
      </Drawer>
      <Drawer
            title={localConsts.AmendmentofthePartytotheAgreement_title}
            width ="709px"	
            // placement="right"
            closable={true}
            onClose={this.onClose7}
            visible={this.state.visible7}
            >
              <Row gutter={20}>
                <Col span={22}>  
                    <FormItem label={localConsts.GeoId_LABEL}>
                      {getFieldDecorator('FromPartyID', {
                        initialValue: data.FromPartyID,
                        enableReinitialize: true,
                      })(
                        <Select
                        showSearch
                        style={{width:'595px'}}
                        placeholder={localConsts.InvoiceType_PLACEHOLDER}
                        optionFilterProp="children"
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                     >{InvoiceTypeConst}</Select>
                      )}
                    </FormItem> 
                </Col>
              </Row>
              <Row  style={{borderTop:'1px dashed #E3E7F1',height:'62px',marginTop:'100px'}}>
            <Col  span={2}offset={21} ><Button className = "button" style={{marginTop:'14px'}} type="primary">Save</Button></Col>
        </Row>  
      </Drawer>
          <Drawer
            title={localConsts.NewAgreementItem_title}
            width ="709px"	
            // placement="right"
            closable={true}
            onClose={this.onClose}
            visible={this.state.visible}
            >
                <Row gutter={20}>
                <Col span={11}>  
                    <FormItem   label={localConsts.AgreementItemTypeId_LABEL}>
                        {getFieldDecorator('Party_ID', {                     
                            })(
                              <Select
                              showSearch
                              style={{width:'295px'}}
                              placeholder={localConsts.InvoiceType_PLACEHOLDER}
                              optionFilterProp="children"
                              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                           >{InvoiceTypeConst}</Select>
                                )}
                    </FormItem>  
                </Col>
                <Col span={8} offset={2}>  
                    <FormItem   label={localConsts.Currency_LABEL}>
                        {getFieldDecorator('Currency', { 
                        })(
                          <Select
                          showSearch
                          style={{width:'295px'}}
                          placeholder={localConsts.InvoiceType_PLACEHOLDER}
                          optionFilterProp="children"
                          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                       >{InvoiceTypeConst}</Select>
                        )}
                    </FormItem>  
                </Col>
            </Row>
           
            <Row gutter={20}>
            <Col span = {24}> 
                <FormItem   label={localConsts.AgreementText_LABEL}>
                    {getFieldDecorator('Group_Name', { 
                    })(
                      <Input.TextArea
                          type="text"
                          name="RecurrenceInfoId"
                          rows={4}
                          style={{width:'795px'}}
                          // placeholder={localConsts.RecurrenceInfoId_PLACEHOLDER}
                          // hidden={currentAction !== actionConsts.ACTION_TYPE_NEW}
                          onBlur={this.checkIsExists}
                        />
                    )}
                </FormItem>  
            </Col>
        </Row>
        <Row gutter={20}>
            <Col span = {24}> 
                <FormItem   label={localConsts.AgreementImage_LABEL}>
                    {getFieldDecorator('AgreementImage', { 
                    })(
                      <Upload {...props}>
                        <Button>
                          <Icon type="upload" /> Upload
                        </Button>
                      </Upload>
                    )}
                </FormItem>  
            </Col>
        </Row>
        
        <Row  style={{borderTop:'1px dashed #E3E7F1',height:'62px',marginTop:'100px'}}>
            <Col  span={2}offset={21} ><Button className = "button" style={{marginTop:'14px'}} type="primary">Save</Button></Col>
        </Row>  
    </Drawer>
    <Drawer
            title={localConsts.AddAgreementContent_LABEL}
            width ="709px"	
            // placement="right"
            closable={true}
            onClose={this.onClose12}
            visible={this.state.visible12}
            >
                <Row gutter={20}>
                <Col span={11}>  
                    <FormItem   label={localConsts.AgreementItemSeqId_LABEL}>
                        {getFieldDecorator('Party_ID', {                     
                            })(
                              <Select
                              showSearch
                              style={{width:'295px'}}
                              optionFilterProp="children"
                              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                           >{InvoiceTypeConst}</Select>
                                )}
                    </FormItem>  
                </Col>
                <Col span={8} offset={2}>  
                    <FormItem   label={localConsts.AgreementContentTypeId_LABEL}>
                        {getFieldDecorator('Currency', { 
                        })(
                          <Select
                          showSearch
                          style={{width:'295px'}}
                          optionFilterProp="children"
                          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                       >{InvoiceTypeConst}</Select>
                        )}
                    </FormItem>  
                </Col>
            </Row>
            <Row gutter={20}>
                <Col span={11}>  
                    <FormItem   label={localConsts.StatusID_LABEL}>
                        {getFieldDecorator('Party_ID', {                     
                            })(
                              <Select
                              showSearch
                              style={{width:'295px'}}
                              optionFilterProp="children"
                              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                           >{InvoiceTypeConst}</Select>
                                )}
                    </FormItem>  
                </Col>
                <Col span={8} offset={2}>  
                    <FormItem   label={localConsts.ContentTypeId_LABEL}>
                        {getFieldDecorator('Currency', { 
                        })(
                          <Select
                          showSearch
                          style={{width:'295px'}}
                          optionFilterProp="children"
                          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                       >{InvoiceTypeConst}</Select>
                        )}
                    </FormItem>  
                </Col>
            </Row>
           
            <Row gutter={20}>
            <Col span={6} >
                      <FormItem label={localConsts.FromDate_LABEL}>
                        {getFieldDecorator('DueDate', {
                          initialValue: data.InvoiceDate,
                          enableReinitialize: true,
                        })(
                          <DatePicker onBlur={this.enableSaveButton} style={{width:'295px'}}  onChange={this.onChange} />
                        )}
                      </FormItem>
              </Col>
              <Col span={6} offset={7} >
                      <FormItem label={localConsts.ThroughDate_LABEL}>
                        {getFieldDecorator('ThoughDate', {
                          initialValue: data.InvoiceDate,
                          enableReinitialize: true,
                        })(
                          <DatePicker onBlur={this.enableSaveButton}  style={{width:'295px'}}   onChange={this.onChange} />
                        )}
                      </FormItem>
              </Col>
        </Row>
        <Row gutter={20}>
            <Col span = {24}> 
                <FormItem   label={localConsts.File_LABEL}>
                    {getFieldDecorator('AgreementImage', { 
                    })(
                      <Upload {...props}>
                        <Button>
                          <Icon type="upload" /> Upload
                        </Button>
                      </Upload>
                    )}
                </FormItem>  
            </Col>
        </Row>
        
        <Row  style={{borderTop:'1px dashed #E3E7F1',height:'62px',marginTop:'100px'}}>
            <Col  span={2}offset={21} ><Button className = "button" style={{marginTop:'14px'}} type="primary">Save</Button></Col>
        </Row>  
    </Drawer>
    
    <Drawer
            title={localConsts.NewTerms_title}
            width ="709px"	
            // placement="right"
            closable={true}
            onClose={this.onClose4}
            visible={this.state.visible4}
            >
                <Row gutter={20}>
                <Col span={11}>  
                    <FormItem   label={localConsts.TermTypeId_LABEL}>
                        {getFieldDecorator('Party_ID', {                     
                            })(
                              <Select
                              showSearch
                              style={{width:'295px'}}
                              // placeholder={localConsts.InvoiceType_PLACEHOLDER}
                              optionFilterProp="children"
                              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                           >{InvoiceTypeConst}</Select>
                                )}
                    </FormItem>  
                </Col>
                <Col span={8} offset={2}>  
                    <FormItem   label={localConsts.InvoiceItemType_LABEL}>
                        {getFieldDecorator('Currency', { 
                        })(
                          <Select
                          showSearch
                          style={{width:'295px'}}
                          // placeholder={localConsts.InvoiceType_PLACEHOLDER}
                          optionFilterProp="children"
                          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                       >{InvoiceTypeConst}</Select>
                        )}
                    </FormItem>  
                </Col>
            </Row>
            <Row gutter={20}>
            <Col span={6} >
                      <FormItem label={localConsts.FromDate_LABEL}>
                        {getFieldDecorator('DueDate', {
                          initialValue: data.InvoiceDate,
                          enableReinitialize: true,
                        })(
                          <DatePicker onBlur={this.enableSaveButton} style={{width:'295px'}}  onChange={this.onChange} />
                        )}
                      </FormItem>
              </Col>
              <Col span={6} offset={7} >
                      <FormItem label={localConsts.ThroughDate_LABEL}>
                        {getFieldDecorator('ThoughDate', {
                          initialValue: data.InvoiceDate,
                          enableReinitialize: true,
                        })(
                          <DatePicker onBlur={this.enableSaveButton}  style={{width:'295px'}}   onChange={this.onChange} />
                        )}
                      </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
            <Col span={11} >
                    <FormItem label={localConsts.TermValue_LABEL}>
                      {getFieldDecorator('TermValue', {
                        initialValue: data.RoleTypeId,
                        enableReinitialize: true,
                      })(
                        <Input
                          type="text"
                          name="RecurrenceInfoId"
                          rows={4}
                          style={{width:'295px'}}
                          // placeholder={localConsts.RecurrenceInfoId_PLACEHOLDER}
                          // hidden={currentAction !== actionConsts.ACTION_TYPE_NEW}
                          onBlur={this.checkIsExists}
                        />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={2}>
                    <FormItem label={localConsts.TermDays_LABEL}>
                      {getFieldDecorator('TermDays', {
                        initialValue: data.RoleTypeId,
                        enableReinitialize: true,
                      })(
                        <Input
                          type="text"
                          name="RecurrenceInfoId"
                          rows={4}
                          style={{width:'295px'}}
                          // placeholder={localConsts.RecurrenceInfoId_PLACEHOLDER}
                          // hidden={currentAction !== actionConsts.ACTION_TYPE_NEW}
                          onBlur={this.checkIsExists}
                        />,
                      )}
                    </FormItem>
                  </Col>
            </Row>
            <Row gutter={20}>
            <Col span={11} >
                    <FormItem label={localConsts.MinQuantity_LABEL}>
                      {getFieldDecorator('min', {
                        initialValue: data.RoleTypeId,
                        enableReinitialize: true,
                      })(
                        <InputNumber style={{width:'295px'}} min={1} max={10}   />,

                      )}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={2}>
                    <FormItem label={localConsts.MaxQuantity_LABEL}>
                      {getFieldDecorator('max', {
                        initialValue: data.RoleTypeId,
                        enableReinitialize: true,
                      })(
                        <InputNumber style={{width:'295px'}}  min={1} max={10}   />,

                      )}
                    </FormItem>
                  </Col>
            </Row>
            <Row gutter={20}>
            <Col span = {24}> 
                <FormItem   label={localConsts.Description_LABEL}>
                    {getFieldDecorator('Group_Name', { 
                    })(
                      <Input.TextArea
                          type="text"
                          name="RecurrenceInfoId"
                          rows={4}
                          style={{width:'795px'}}
                          // placeholder={localConsts.RecurrenceInfoId_PLACEHOLDER}
                          // hidden={currentAction !== actionConsts.ACTION_TYPE_NEW}
                          onBlur={this.checkIsExists}
                        />
                    )}
                </FormItem>  
            </Col>
        </Row>    
        <Row  style={{borderTop:'1px dashed #E3E7F1',height:'62px',marginTop:'100px'}}>
            <Col  span={2}offset={21} ><Button className = "button" style={{marginTop:'14px'}} type="primary">Save</Button></Col>
        </Row>  
    </Drawer>

    <Drawer
            title={localConsts.NewPromotion_title}
            width ="709px"	
            // placement="right"
            closable={true}
            onClose={this.onClose3}
            visible={this.state.visible3}
            >
                <Row gutter={20}>
                <Col span={21}>  
                    <FormItem   label={localConsts.ProductPromoId_LABEL}>
                        {getFieldDecorator('Party_ID', {                     
                            })(
                              <Select
                              showSearch
                              style={{width:'665px'}}
                              optionFilterProp="children"
                              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                           >{InvoiceTypeConst}</Select>
                                )}
                    </FormItem>  
                </Col>
                
            </Row>
           
            <Row>
              <Col span={6} >
                      <FormItem label={localConsts.FromDate_LABEL}>
                        {getFieldDecorator('DueDate', {
                          initialValue: data.InvoiceDate,
                          enableReinitialize: true,
                        })(
                          <DatePicker onBlur={this.enableSaveButton} style={{width:'295px'}}  onChange={this.onChange} />
                        )}
                      </FormItem>
              </Col>
              <Col span={6} offset={7} >
                      <FormItem label={localConsts.ThroughDate_LABEL}>
                        {getFieldDecorator('ThoughDate', {
                          initialValue: data.InvoiceDate,
                          enableReinitialize: true,
                        })(
                          <DatePicker onBlur={this.enableSaveButton}  style={{width:'295px'}}   onChange={this.onChange} />
                        )}
                      </FormItem>
              </Col>
        </Row>
        <Row gutter={20}>
            <Col span = {6}> 
                <FormItem   label={localConsts.SequenceNum_LABEL}>
                    {getFieldDecorator('SequenceNum', { 
                    })(
                      <Input
                      type="text"
                      name="RecurrenceInfoId"
                      style={{width:'295px'}}
                      // placeholder={localConsts.RecurrenceInfoId_PLACEHOLDER}
                      // hidden={currentAction !== actionConsts.ACTION_TYPE_NEW}
                      onBlur={this.checkIsExists}
                    />
                    )}
                </FormItem>  
            </Col>
        </Row>
        
        <Row  style={{borderTop:'1px dashed #E3E7F1',height:'62px',marginTop:'100px'}}>
            <Col  span={2}offset={21} ><Button className = "button" style={{marginTop:'14px'}} type="primary">Save</Button></Col>
        </Row>  
    </Drawer>
    <Drawer
            title={localConsts.LookupProduct_title}
            width ="709px"	
            // placement="right"
            closable={true}
            onClose={this.onClose1}
            visible={this.state.visible1}
            >
         <Row gutter={20}>
                <Col span={11}>  
                    <FormItem   label={localConsts.ProductId_LABEL}>
                        {getFieldDecorator('ProductId', {                     
                            })(
                              <Input 
                              addonBefore={(
                                <Select defaultValue="Contains">
                                  {InvoiceIdType}
                                </Select>
                                )}
                              addonAfter={<Popover content="ignore case"><Checkbox /></Popover> }
                            />
                                )}
                    </FormItem>  
                </Col>
                <Col span={11} offset={2}>  
                    <FormItem   label={localConsts.BrandName_LABEL}>
                        {getFieldDecorator('Description', { 
                                               
                        })(
                          <Input  
                          addonBefore={(
                            <Select defaultValue="Contains">
                              {InvoiceIdType}
                            </Select>
                            )}
                          addonAfter={<Popover content="ignore case"><Checkbox /></Popover> }
                        />
                       
                                )}
                    </FormItem>  
                </Col>
                </Row>
                <Row gutter={20}>
                <Col span={11}>  
                    <FormItem   label={localConsts.InternalName_LABEL	}>
                        {getFieldDecorator('AccountingExternalAccountId_LABEL ', {                   
                        })(
                          <Input  placeholder={localConsts.AccountingExternalAccountId_PLACEHOLDER}
                          addonBefore={(
                            <Select defaultValue="Contains">
                              {InvoiceIdType}
                            </Select>
                            )}
                          addonAfter={<Popover content="ignore case"><Checkbox /></Popover> }
                        />
                        )}
                    </FormItem>  
                </Col>
                <Col span={11} offset={2}>
                <FormItem label={localConsts.ProductType_LABEL}>
                  {getFieldDecorator('AgreementTypeId', {
                  })(
                    <Select
                        showSearch
                        style={{width:'302px'}}
                        optionFilterProp="children"
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >{InvoiceTypeConst}</Select>
                  )}
                </FormItem>
            </Col>
            </Row>
            <Row>
            <Col span={11} >
                <FormItem label={localConsts.PrimaryCategory_LABEL}>
                  {getFieldDecorator('PrimaryCategory', {
                  })(
                    <Select
                        showSearch
                        style={{width:'302px'}}
                        optionFilterProp="children"
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >{InvoiceTypeConst}</Select>
                  )}
                </FormItem>
            </Col>
            </Row>

               
        <Row  style={{borderTop:'1px dashed #E3E7F1',height:'62px',borderBottom:'1px dashed #E3E7F1'}}>
            <Col  span={2}offset={21} ><Button className = "button" style={{marginTop:'14px'}} type="primary">Search</Button></Col>
        </Row>
        <Row style= {{marginTop:'14px'}}>    
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
        </Form>
      </Fragment>
    );
  }
}

InvoiceForm.propTypes = {
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
  // connect(({ department, contactPerson }) => ({
  connect(({ Invoice_AR }) => ({
    dataById: Invoice_AR.reducerById,
  }))(InvoiceForm),
);
