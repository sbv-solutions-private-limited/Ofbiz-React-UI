import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Col, Form, Input, Tabs,AutoComplete,Checkbox ,DatePicker,Row,Table ,Divider,Select, Badge, Button,Icon,Drawer,Card,Popover } from 'antd';
import { formItemLayout } from '../../../common/Layout/FormItemLayout';
import * as actionConsts from '../../../common/TitlePane/ActionConsts';
import * as commonConsts from '../../../common/commonConsts';
import * as localConsts from './PaymentGroupsConsts';
import Comments from '../../../common/Comments/comments';
import styles from '../../../common/Styles.less';
import imgUnderCon from '../../../images/underConstruction.png';
import {Link} from 'react-router-dom';
const FormItem = Form.Item;
const InputGroup = Input.Group;
const { TabPane } = Tabs;
const content = (
  <div>
      <Link to={`/`} ><p>Status To Confirmed</p></Link>
      <Link to={`/`} ><p>Status To Void</p></Link>
  </div>
);

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
};
class PaymentGroupsForm extends Component {
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
      visible2: false,
      visible0: false,
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
    const PaymentTypeConst = localConsts.PaymentTypeConst.map(k => <Option key={k.label} value={k.value}>{k.label}</Option>)
    const InvoiceTypeConst = localConsts.InvoiceTypeConst.map(k => <Option key={k.label} value={k.value}>{k.label}</Option>)
    const InvoiceIdType = localConsts.InvoiceIdType.map(k => <Option key={k.label} value={k.value}>{k.label}</Option>)
    const from_Date_Const = localConsts.from_Date.map(k => <Option key={k.label} value={k.value}>{k.label}</Option>)
    const To_Date_Const = localConsts.To_Date.map(k => <Option key={k.label} value={k.value}>{k.label}</Option>)

    const {
      data,
      isExistMessage,
      commentsData,
    } = this.state;
    const tableColumns1 = [
      {
          title:`${localConsts.COLUMN_BillingAcctID}`,
          width:300,
          dataIndex: 'Billing_Acct_ID',
          id: 'Billing_Acct_ID',
      },
      {
          title:`${localConsts.COLUMN_Description}`,
          width:500,
          dataIndex: 'Description',
          id: 'Description',
      },
      {
          title:`${localConsts.COLUMN_AccountingExternalAccountId}`,
          width:600,
          dataIndex: 'ext_acc_id',
          id: 'ext_acc_id',
      },]
      const tableColumns2 = [
        {
            title:`${localConsts.COLUMN_PartyID}`,
            width:300,
            dataIndex: 'Billing_Acct_ID',
            id: 'Billing_Acct_ID',
        },
        {
            title:`${localConsts.COLUMN_PartyTypeId}`,
            width:500,
            dataIndex: 'Description',
            id: 'Description',
        },
        {
            title:`${localConsts.COLUMN_FirstName}`,
            width:600,
            dataIndex: 'ext_acc_id',
            id: 'ext_acc_id',
        },
        {
          title:`${localConsts.COLUMN_LastName}`,
          width:600,
          dataIndex: 'ext_acc_id',
          id: 'ext_acc_id',
      },
      {
        title:`${localConsts.COLUMN_GroupName}`,
        width:600,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
    },
      ]
      const tableColumns0 = [
        {
            title:`${localConsts.COLUMN_PaymentId}`,
            width:300,
            dataIndex: 'Billing_Acct_ID',
            id: 'Billing_Acct_ID',
        },
        {
            title:`${localConsts.COLUMN_ReferenceNumber}`,
            width:500,
            dataIndex: 'Description',
            id: 'Description',
        },
        {
            title:`${localConsts.COLUMN_FromParty}`,
            width:600,
            dataIndex: 'ext_acc_id',
            id: 'ext_acc_id',
        },
        {
          title:`${localConsts.COLUMN_ToParty}`,
          width:600,
          dataIndex: 'ext_acc_id',
          id: 'ext_acc_id',
      },
      {
        title:`${localConsts.COLUMN_PaymentType}`,
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
      const tableColumns3 = [
        {
            title:`${localConsts.COLUMN_GLAccountID}`,
            width:300,
            dataIndex: 'Billing_Acct_ID',
            id: 'Billing_Acct_ID',
        },
        {
            title:`${localConsts.COLUMN_Name}`,
            width:500,
            dataIndex: 'Description',
            id: 'Description',
        },
        {
            title:`${localConsts.Column_Type}`,
            width:600,
            dataIndex: 'ext_acc_id',
            id: 'ext_acc_id',
        },
        {
          title:`${localConsts.COLUMN_GLAccountClass}`,
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
        title: `${localConsts.COLUMN_PaymentID}`,
        width:500,
        dataIndex: 'InvoiceID',
        id: 'InvoiceID',
        render: text => <Link to={`InvoiceById`} >{text}</Link>, // backend send by id
      },
      {
        title: `${localConsts.COLUMN_FromParty}`,
        width:500,
        dataIndex: 'Item_No',
        id: 'Item_No',
        render: text => <Link to={`InvoiceById`} >{text}</Link>, // backend send by id
      },
      {
        title: `${localConsts.COLUMN_ToParty}`,
        dataIndex: 'BillingAccountID',
        width: 750,
      }, 
      {
        title: `${localConsts.COLUMN_PaymentType}`,
          dataIndex: 'Total',
          width: 750,
      },
  
      {  title: `${localConsts.COLUMN_PaymentStatus}`,
          width: 300,
          dataIndex: 'Payment_Id',
      },  
      {  title: `${localConsts.COLUMN_Amount}`,
          width: 350,
          dataIndex: 'Amount_Applied',
      },
      {  title: `${localConsts.COLUMN_FromDate}`,
         width: 350,
         dataIndex: 'Amount_Applied',
      },
      {  title: `${localConsts.COLUMN_ThroughDate}`,
         width: 350,
         dataIndex: 'Amount_Applied',
      },
     {
        title: 'Actions',
        width: 300,
        render: text => <Link to={`/update`}><Button shape="omitted" type="primary" style={{background:'#337AB7',borderRadius:'13px'}} >Update</Button></Link>

      },

    ];
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
              <Row style={{marginTop:'15px'}} >
                  <Col span={6}>
                    <FormItem label={localConsts.Type_LABEL}>
                      {getFieldDecorator('Type', {
                        initialValue: data.InvoiceType,
                        enableReinitialize: true,
                      })(
                        <Select
                        showSearch
                        onBlur={this.enableSaveButton}
                        style={{width:'300px'}}
                        placeholder={localConsts.PaymentType_PLACEHOLDER}
                        optionFilterProp="children"
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                     >{PaymentTypeConst}</Select>
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6} offset={3}>
                  <FormItem label={localConsts.PaymentGroupName_LABEL}>
                        {getFieldDecorator('PaymentGroupName', {
                          initialValue: data.InvoiceType,
                          enableReinitialize: true,
                        })(
                         <Input placeholder={localConsts.ReferenceNumber_PLACEHOLDER}  onBlur={this.enableSaveButton}/>
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
            >
              <Tabs tabPosition="left">
                <TabPane tab="Overview" key="Overview">
                <div>
                <Card title={<div>Payment Group Overview For [10002]</div>}  bordered={true} >
                    <Row gutter={16}>
                        <Col span={6}> 
                            <div>{localConsts.PaymentGroupID_LABEL}</div>
                            <p style={{color:'#3E3E3E'}}>Reference Number</p>
                        </Col>
                        <Col span={6}>
                            <div>Type</div>
                            <p style={{color:'#3E3E3E'}}>In-Process</p>
                        </Col>
                        <Col span={6}>
                           <div>Payment Group Name</div>
                           <p style={{color:'#3E3E3E'}}>Your Company Name Here</p>
                        </Col>
                     </Row>
            </Card>
            <Card >
               <Table
                  bordered
                       rowSelection={this.rowSelection} 
                       columns={tableColumns}
                      //  dataSource={sampleData}
                       style={{color:'#A0A0A0'}}
                      />
            </Card>
            </div>

                </TabPane>
                <TabPane tab="Group" key="Group">
                  <Row style={{marginTop:'15px'}}>
                  <Col span={6} >
                    <FormItem label={localConsts.PaymentGroupID_LABEL }>
                          {getFieldDecorator('PaymentGroupId', {
                            initialValue: data.InvoiceType,
                            enableReinitialize: true,
                          })(
                          <Input placeholder={localConsts.PaymentGroupID_PLACEHOLDER}/>
                          )}
                        </FormItem>
                    </Col>  
                    <Col span={6} offset = {2} >
                    <FormItem label={localConsts.PaymentGroupTypeId_LABEL}>
                          {getFieldDecorator('PaymentGroupTypeId', {
                            initialValue: data.InvoiceType,
                            enableReinitialize: true,
                          })(
                          <Input placeholder={localConsts.PaymentGroupTypeId_PLACEHOLDER}/>
                          )}
                        </FormItem>
                    </Col>  
                    <Col span={6} offset= {3}>
                    <FormItem label={localConsts.PaymentGroupName_LABEL}>
                          {getFieldDecorator('PaymentGroupName', {
                            initialValue: data.InvoiceType,
                            enableReinitialize: true,
                          })(
                          <Input placeholder={localConsts.PaymentGroupName_PLACEHOLDER}/>
                          )}
                        </FormItem>
                    </Col>  
                  </Row>     
                </TabPane>
                <TabPane tab="Group Members" key="Group Members">
                <Row  gutter={20} style= {{marginTop:'15px'}}>
                  <Col span={7}>
                    <FormItem label={localConsts.PaymentId_LABEL}>
                      {getFieldDecorator('PaymentId', {
                        initialValue: data.FromPartyID,
                        enableReinitialize: true,
                      })(
                        <Input style={{width:'240px'}}  name="PaymentId" addonAfter={<Icon  type="idcard" onClick={this.showDrawer0} />} />

                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={1} >
                    <FormItem label={localConsts.FromDate_LABEL}>
                      {getFieldDecorator('FromDate', {
                        initialValue: data.InvoiceDate,
                        enableReinitialize: true,
                      })(
                        <DatePicker style={{width:'260px'}} onChange={this.onChange} />
                      )}
                    </FormItem>
                  </Col>
                  <Col span={7} offset={1}>
                    <FormItem label={localConsts.ThroughDate_LABEL}>
                      {getFieldDecorator('ThroughDate', {
                        initialValue: data.InvoiceDate,
                        enableReinitialize: true,
                      })(
                        <DatePicker style={{width:'260px'}} onChange={this.onChange} />
                      )}
                    </FormItem>
                  </Col>
                  </Row> 
                  <Row>
                  <Col span={7}>
                    <FormItem label={localConsts.SequenceNum_LABEL}>
                      {getFieldDecorator('SequenceNum', {
                        initialValue: data.FromPartyID,
                        enableReinitialize: true,
                      })(
                       
                          <Input
                            type="text"
                            name="FromPartyID"
                            style={{width:'240px'}}
                            placeholder={localConsts.PaymentId_PLACEHOLDER}
                            // hidden={currentAction !== actionConsts.ACTION_TYPE_NEW}
                            onBlur={this.checkIsExists}
                          />
                      
                      )}
                    </FormItem>
                  </Col>
                  </Row>
              
                  <Row style= {{marginTop:'14px'}}>    
                    <div className={styles.tableContainerParent}>
                      <Table
                        className={styles.tableContainer}
                        // rowKey="id"
                        // title={this.tableHeader}
                        columns={tableColumns0}
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
            title={localConsts.LookupPayment_title}
            width ="709px"	
            // placement="right"
            closable={true}
            onClose={this.onClose0}
            visible={this.state.visible0}
            >
             <Row gutter={20}>
                <Col span={11}>  
                    <FormItem   label={localConsts.PaymentId_LABEL}>
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
                <Col span={11} offset={1}>  
                    <FormItem   label={localConsts.PaymentTypeID_LABEL}>
                        {getFieldDecorator('Party_Type_ID', { 
                        })(
                          <Select
                          showSearch
                          style={{width:'300px'}}
                          placeholder={localConsts.InvoiceType_PLACEHOLDER}
                          optionFilterProp="children"
                          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                       >{InvoiceTypeConst}</Select>
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
                        <Input style={{width:'302px'}}  name="FromPartyID" addonAfter={<Icon onClick={this.showDrawer}  type="idcard"/>} />
                      )}
                    </FormItem>
                </Col>
                <Col span={11} offset={1}>  
                <FormItem label={localConsts.ToPartyID_LABEL}>
                      {getFieldDecorator('ToPartyID', {
                        initialValue: data.FromPartyID,
                        enableReinitialize: true,
                      })(
                        <Input style={{width:'302px'}}  name="FromPartyID" addonAfter={<Icon onClick={this.showDrawer}  type="idcard"/>} />
                      )}
                    </FormItem>
                </Col>
            </Row>
            <Row gutter={20}>
            <Col span = {11}> 
                <FormItem   label={localConsts.AmountApplied_LABEL}>
                    {getFieldDecorator('Group_Name', { 
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
        <Row  style={{borderTop:'1px dashed #E3E7F1',height:'62px',borderBottom:'1px dashed #E3E7F1'}}>
            <Col  span={2}offset={21} ><Button className = "button" style={{marginTop:'14px'}} type="primary">Search</Button></Col>
        </Row>
        <Row style= {{marginTop:'14px'}}>    
        <div className={styles.tableContainerParent}>
          <Table
            className={styles.tableContainer}
            // rowKey="id"
            // title={this.tableHeader}
            columns={tableColumns0}
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
            title={localConsts.PartybyName_title}
            width ="709px"	
            // placement="right"
            closable={true}
            onClose={this.onClose}
            visible={this.state.visible}
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
    </Drawer>
    <Drawer
            title={localConsts.BillingAccountbyName_title}
            width ="709px"	
            // placement="right"
            closable={true}
            onClose={this.onClose1}
            visible={this.state.visible1}
            >
             <Row gutter={20}>
                <Col span={12}>  
                    <FormItem   label={localConsts.BillingAccountID_LABEL}>
                        {getFieldDecorator('BillingAccountID_LABEL', {                     
                            })(
                            <InputGroup >
                                <Select defaultValue="Contains">
                                    {InvoiceIdType}
                                </Select>
                                <AutoComplete
                            //   dataSource={this.state.dataSource}
                                //  style={{ width: 280 }}
                                //   onChange={this.handleChange}
                                    
                                 />
                                <Checkbox style={{marginLeft:'193px'}} onChange={this.onChange}>Ignore Case</Checkbox>
                            
                            </InputGroup>
                                )}
                    </FormItem>  
                </Col>
                <Col span={12}>  
                    <FormItem   label={localConsts.Description_LABEL}>
                        {getFieldDecorator('Description', { 
                                               
                        })(
                        <InputGroup >
                            <Select defaultValue="Contains">
                                {InvoiceIdType}
                            </Select>
                            <AutoComplete
                        //   dataSource={this.state.dataSource}
                            
                        //   onChange={this.handleChange}
                                    
                            />
                            <Checkbox style={{marginLeft:'193px'}} >Ignore Case</Checkbox>
                            
                        </InputGroup>
                                )}
                    </FormItem>  
                </Col>
                </Row>
                <Row>
                <Col span={12}>  
                    <FormItem   label={localConsts.AccountingExternalAccountId_LABEL}>
                        {getFieldDecorator('AccountingExternalAccountId_LABEL ', {                   
                        })(
                        <InputGroup >
                            <Select defaultValue="Contains">
                                {InvoiceIdType}
                            </Select>
                            <AutoComplete
                        //  dataSource={this.state.dataSource}
                          
                    //    onChange={this.handleChange}
                                        
                        />
                        <Checkbox style={{marginLeft:'193px'}} onChange={this.onChange}>Ignore Case</Checkbox>
                       </InputGroup>
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
    <Drawer
            title={localConsts.LookupGLAccount_title}
            width ="709px"	
            // placement="right"
            closable={true}
            onClose={this.onClose2}
            visible={this.state.visible2}
            >
             <Row gutter={20}>
                <Col span={12}>  
                    <FormItem   label={localConsts.GLAccountID_LABEL}>
                        {getFieldDecorator('GLAccountID', {                     
                            })(
                            <InputGroup >
                                <Select defaultValue="Contains">
                                    {InvoiceIdType}
                                </Select>
                                <AutoComplete
                            //   dataSource={this.state.dataSource}
                                //  style={{ width: 280 }}
                                //   onChange={this.handleChange}
                                    
                                 />
                                <Checkbox style={{marginLeft:'193px'}} onChange={this.onChange}>Ignore Case</Checkbox>
                            
                            </InputGroup>
                                )}
                    </FormItem>  
                </Col>
                <Col span={12}>  
                    <FormItem   label={localConsts.NAME_LABEL}>
                        {getFieldDecorator('name', { 
                                               
                        })(
                        <InputGroup >
                            <Select defaultValue="Contains">
                                {InvoiceIdType}
                            </Select>
                            <AutoComplete
                        //   dataSource={this.state.dataSource}
                            
                        //   onChange={this.handleChange}
                                    
                            />
                            <Checkbox style={{marginLeft:'193px'}} >Ignore Case</Checkbox>
                            
                        </InputGroup>
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
                        style={{width:'300px'}}
                        // placeholder={localConsts.PaymentType_PLACEHOLDER}
                        optionFilterProp="children"
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                     >{PaymentTypeConst}</Select>
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
                        style={{width:'300px'}}
                        // placeholder={localConsts.PaymentType_PLACEHOLDER}
                        optionFilterProp="children"
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                     >{PaymentTypeConst}</Select>
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
    </Drawer>
        </Form>
      </Fragment>
    );
  }
}

PaymentGroupsForm.propTypes = {
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
  connect(({ Payment_AR }) => ({
    dataById: Payment_AR.reducerById,
  }))(PaymentGroupsForm),
);
