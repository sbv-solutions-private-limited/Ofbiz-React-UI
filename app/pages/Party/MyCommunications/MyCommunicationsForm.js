import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Col, Form, Input, Tabs,Checkbox,DatePicker,Row,Table ,Divider,Select, Cascader,Badge, Button,Icon,Drawer,Card,Popover } from 'antd';
import { formItemLayout } from '../../../common/Layout/FormItemLayout';
import * as actionConsts from '../../../common/TitlePane/ActionConsts';
import * as commonConsts from '../../../common/commonConsts';
import * as localConsts from './MyCommunicationsConsts';
import styles from '../../../common/Styles.less';
import {Link} from 'react-router-dom';
const FormItem = Form.Item;
const { TabPane } = Tabs;
const InputGroup = Input.Group;
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
};
class InvoiceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: newObject,
      isExistMessage: '',
      commentsData: [],
      enableSaveButtonValue: false,
      visible:false,
      visible1:false
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
    const allowType = localConsts.allowType.map(k => <Option key={k.label} value={k.value}>{k.label}</Option>)

    const {
      data
    } = this.state;
    const tableColumns1 = [
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
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tableColumns3 = [
      {
          title:`${localConsts.COLUMN_ContentName}`,
          width:300,
          dataIndex: 'Billing_Acct_ID',
          id: 'Billing_Acct_ID',
      },
      {
          title:`${localConsts.COLUMN_ACTIONS}`,
          width:500,
          dataIndex: 'Description',
          id: 'Description',
      },
    ];
    const tableColumns2 = [
      {
          title:`${localConsts.COLUMN_PartyID}`,
          width:300,
          dataIndex: 'Billing_Acct_ID',
          id: 'Billing_Acct_ID',
      },
      {
          title:`${localConsts.COLUMN_ContactMechId}`,
          width:500,
          dataIndex: 'Description',
          id: 'Description',
      },
      {
          title:`${localConsts.COLUMN_RoleTypeId}`,
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
      title:`${localConsts.COLUMN_ACTIONS}`,
      width:600,
      dataIndex: 'ext_acc_id',
      id: 'ext_acc_id',
  },
    ]
    const selectBefore = (
      <Select defaultValue="+91" style={{ width: 90 }}>
        <Option value="+92">+92</Option>
        <Option value="+97">+97</Option>
      </Select>
    );
    const selectAfter = (
      <Select defaultValue="40" style={{ width: 80 }}>
        <Option value="40">40</Option>
        <Option value="44">44</Option>
        <Option value="040">040</Option>
        <Option value="55">55</Option>
      </Select>
    );
    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit} id={localConsts.FORM_ID}>
          <Tabs defaultActiveKey="2" size="small" className={styles.tab}>
            <TabPane
              tab={localConsts.TAB2_CAPTION}
              key="2"
              className={styles.tabPaneCustom}
            >
                   <div>
               <Card className={styles.copy} title="Edit Communication Event From admin" bordered={false} >
                  <Row gutter={20}>
                    <Col span={7} offset={5} >
                      <FormItem label={localConsts.PartyTo_LABEL} {...formItemLayout}>
                        {getFieldDecorator('PartyId', {
                          initialValue: data.RoleTypeId,
                          enableReinitialize: true,
                        })(
                          <Input
                            type="text"
                            style={{width:'352px'}}
                          />
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col span={7} offset={5} >
                      <FormItem label={localConsts.Subject_LABEL} {...formItemLayout}>
                        {getFieldDecorator('Subject', {
                          initialValue: data.RoleTypeId,
                          enableReinitialize: true,
                        })(
                          <Input
                            type="text"
                            style={{width:'352px'}}
                          />
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col span={13} offset={3} >
                      <FormItem label={localConsts.Content_LABEL} {...formItemLayout}>
                        {getFieldDecorator('Content', {
                          initialValue: data.RoleTypeId,
                          enableReinitialize: true,
                        })(
                          <Input.TextArea
                            rows={8}
                            type="text"
                            style={{width:'352px'}}
                          />
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                </Card>
            </div>
            <Tabs defaultActiveKey="1" >
            <TabPane tab="Communication Event Roles" key="1">
              <Row gutter={20} >
                    <Col span={7} offset={1}>
                      <FormItem label={localConsts.PartyId_LABEL} >
                        {getFieldDecorator('PartyId', {
                          initialValue: data.RoleTypeId,
                          enableReinitialize: true,
                        })(
                          <Input
                            type="text"
                            style={{width:'352px'}}
                            addonAfter={<Icon onClick={this.showDrawer}  type="idcard"/>}
                          />
                        )}
                      </FormItem>
                    </Col>
                    <Col span = {7} offset={2}> 
                    <FormItem   label={localConsts.RoleTypeId_LABEL}>
                        {getFieldDecorator('Group_Name', { 
                        })(
                        
                            <Select defaultValue="Contains">
                              {InvoiceIdType}
                            </Select>
                        )}
                    </FormItem>
                </Col>
                <Col span={7}> <Button  style={{marginTop:'20px'}} type="primary">Add</Button></Col>
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
              <TabPane tab="Communication Content" key="2">
              <Row gutter={20} >
                    <Col span={4} offset={1}>
                      <FormItem label={localConsts.ExistingContentId_LABEL} >
                        {getFieldDecorator('PartyId', {
                          initialValue: data.RoleTypeId,
                          enableReinitialize: true,
                        })(
                          <Input
                            type="text"
                            style={{width:'252px'}}
                            addonAfter={<Icon onClick={this.showDrawer}  type="idcard"/>}
                          />
                        )}
                      </FormItem>
                    </Col>
                    <Col span = {4} offset={2}> 
                    <FormItem   label={localConsts.ParentContentID_LABEL}>
                        {getFieldDecorator('Group_Name', { 
                        })(
                          <Input
                          type="text"
                          style={{width:'252px'}}
                          addonAfter={<Icon onClick={this.showDrawer}  type="idcard"/>}
                        />
                        )}
                    </FormItem>
                </Col>
                <Col span={2} offset={2}> <Button style={{marginTop:'20px'}}>
                        <Icon type="upload" /> Upload
                      </Button>
                </Col>
                <Col span={2} offset={1}> <Button  style={{marginTop:'20px'}} type="primary">Upload</Button></Col>
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
            </Tabs>
            </TabPane>
            <TabPane
              tab={localConsts.TAB1_CAPTION}
              key="1"
              className={styles.tabPaneCustom}
              
            >
            <div>
               <Card className={styles.copy} title="From: admin, CommunicationEventId: 10003" bordered={false} >
               <Row >
                    <Col span={7} offset={5} >
                      <FormItem label={localConsts.FromEmailAddr_LABEL} {...formItemLayout}>
                        {getFieldDecorator('PartyId', {
                          initialValue: data.RoleTypeId,
                          enableReinitialize: true,
                        })(
                          <Input
                            type="text"
                            style={{width:'352px'}}
                          />
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col span={7} offset={5} >
                      <FormItem label={localConsts.ToPartyID_LABEL} {...formItemLayout}>
                        {getFieldDecorator('PartyId', {
                          initialValue: data.RoleTypeId,
                          enableReinitialize: true,
                        })(
                          <Input
                            type="text"
                            style={{width:'352px'}}
                          />
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row >
                    <Col span={7} offset={5} >
                      <FormItem label={localConsts.SendDate_LABEL} {...formItemLayout}>
                        {getFieldDecorator('PartyId', {
                          initialValue: data.RoleTypeId,
                          enableReinitialize: true,
                        })(
                          <DatePicker />
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col span={7} offset={5} >
                      <FormItem label={localConsts.Subject_LABEL} {...formItemLayout}>
                        {getFieldDecorator('Subject', {
                          initialValue: data.RoleTypeId,
                          enableReinitialize: true,
                        })(
                          <Input
                            type="text"
                            style={{width:'352px'}}
                          />
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col span={13} offset={3} >
                      <FormItem label={localConsts.Content_LABEL} {...formItemLayout}>
                        {getFieldDecorator('Content', {
                          initialValue: data.RoleTypeId,
                          enableReinitialize: true,
                        })(
                          <Input.TextArea
                            rows={8}
                            type="text"
                            style={{width:'352px'}}
                          />
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                </Card>
                
            </div>
            <Tabs defaultActiveKey="1" >
              <TabPane tab="Communication Event Roles" key="1">
              <Row gutter={20} >
                    <Col span={7} offset={1}>
                      <FormItem label={localConsts.PartyId_LABEL} >
                        {getFieldDecorator('PartyId', {
                          initialValue: data.RoleTypeId,
                          enableReinitialize: true,
                        })(
                          <Input
                            type="text"
                            style={{width:'352px'}}
                            addonAfter={<Icon onClick={this.showDrawer}  type="idcard"/>}
                          />
                        )}
                      </FormItem>
                    </Col>
                    <Col span = {7} offset={2}> 
                    <FormItem   label={localConsts.RoleTypeId_LABEL}>
                        {getFieldDecorator('Group_Name', { 
                        })(
                        
                            <Select defaultValue="Contains">
                              {InvoiceIdType}
                            </Select>
                        )}
                    </FormItem>
                </Col>
                <Col span={7}> <Button  style={{marginTop:'20px'}} type="primary">Add</Button></Col>
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
             
              <TabPane tab="Communication Content" key="2">
              <Row gutter={20} >
                    <Col span={4} offset={1}>
                      <FormItem label={localConsts.ExistingContentId_LABEL} >
                        {getFieldDecorator('PartyId', {
                          initialValue: data.RoleTypeId,
                          enableReinitialize: true,
                        })(
                          <Input
                            type="text"
                            style={{width:'252px'}}
                            addonAfter={<Icon onClick={this.showDrawer}  type="idcard"/>}
                          />
                        )}
                      </FormItem>
                    </Col>
                    <Col span = {4} offset={2}> 
                    <FormItem   label={localConsts.ParentContentID_LABEL}>
                        {getFieldDecorator('Group_Name', { 
                        })(
                          <Input
                          type="text"
                          style={{width:'252px'}}
                          addonAfter={<Icon onClick={this.showDrawer}  type="idcard"/>}
                        />
                        )}
                    </FormItem>
                </Col>
                <Col span={2} offset={2}> <Button style={{marginTop:'20px'}}>
                        <Icon type="upload" /> Upload
                      </Button>
                </Col>
                <Col span={2} offset={1}> <Button  style={{marginTop:'20px'}} type="primary">Upload</Button></Col>
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
            title={localConsts.BillingAccountbyName_title}
            width ="709px"	
            // placement="right"
            closable={true}
            onClose={this.onClose1}
            visible={this.state.visible1}
            >
         <Row gutter={20}>
                <Col span={11}>  
                    <FormItem   label={localConsts.BillingAccountID_LABEL}>
                        {getFieldDecorator('BillingAccountID_LABEL', {                     
                            })(
                              <Input  placeholder={localConsts.BillingAccountID_PLACEHOLDER}
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
                    <FormItem   label={localConsts.Description_LABEL}>
                        {getFieldDecorator('Description', { 
                                               
                        })(
                          <Input  placeholder={localConsts.Description_PLACEHOLDER}
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
                    <FormItem   label={localConsts.AccountingExternalAccountId_LABEL}>
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
            </Row>

               
        <Row  style={{borderTop:'1px dashed #E3E7F1',height:'62px',borderBottom:'1px dashed #E3E7F1'}}>
            <Col  span={2}offset={21} ><Button className = "button" style={{marginTop:'14px'}} type="primary">Search</Button></Col>
        </Row>
        <Row style= {{marginTop:'14px'}}>    
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
  connect(({ Invoice_AR }) => ({
    dataById: Invoice_AR.reducerById,
  }))(InvoiceForm),
);
