import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Row, Col, Button, Form, Input, Icon, Select,Tag ,AutoComplete,Table ,Checkbox, DatePicker,Drawer,Popover } from 'antd';

import styles from '../../../common/Styles.less';
import * as actionConsts from '../../../common/TitlePane/ActionConsts';
import * as localConsts from './AgreementsConsts';
const InputGroup = Input.Group;
const FormItem = Form.Item;
const CheckableTag = Tag.CheckableTag;
export const alphabetNumberLayout = {
  labelCol: {
    xs: { span: 2 },
    sm: { span: 2 },
  },
  wrapperCol: {
    xs: { span: 22 },
    sm: { span: 22 },
  },
};

class InvoiceSearchForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { ReceivedValues: [],visible: false,status:[],data:[], visible1:false };
  }
  handleReset = () => {
    const { form } = this.props;
    form.resetFields();
    this.props.handleSubmitAction(actionConsts.ACTION_TYPE_LIST, {});
    this.props.handleSearchFilters({});
  };

  handleSearch = () => {
    this.props.form.validateFields((errors, values) => {
      if (!errors) {
        const dataForSearch = _.pickBy(values, _.identity);
        this.props.handleSubmitAction(
          actionConsts.ACTION_TYPE_LIST,
          dataForSearch,
        );
        this.setState({ ReceivedValues: dataForSearch }, () =>
          this.props.handleSearchFilters(this.state.ReceivedValues),
        );
      }
    });
  };

  handleChange(tag, checked) {
    const { status } = this.state;
    const nextSelectedTags = checked
      ? [...status, tag]
      : status.filter(t => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    this.setState({ status: nextSelectedTags });
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


  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const tableColumns = [
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
        title:`${localConsts.COLUMN_ProductID	}`,
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
        title:`${localConsts.COLUMN_InternalName	}`,
        width:600,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
    },
    {
      title:`${localConsts.COLUMN_ProductType	}`,
      width:600,
      dataIndex: 'ext_acc_id',
      id: 'ext_acc_id',
    },]

    const InvoiceTypeConst = localConsts.InvoiceTypeConst.map(k => <Option key={k.label} value={k.value}>{k.label}</Option>)
    const InvoiceIdType = localConsts.InvoiceIdType.map(k => <Option key={k.label} value={k.value}>{k.label}</Option>)
    const from_Date_Const = localConsts.from_Date.map(k => <Option key={k.label} value={k.value}>{k.label}</Option>)
    const To_Date_Const = localConsts.To_Date.map(k => <Option key={k.label} value={k.value}>{k.label}</Option>)
    return (
      <Fragment>
        <Row gutter={20} style={{marginTop:'15px'}}>
          <Col span={7}>
            <FormItem label={localConsts.FromPartyID_LABEL}>
              {getFieldDecorator('FromPartyID', {
              })(
                <Input  placeholder={localConsts.FromPartyID_PLACEHOLDER} name="FromPartyID" addonAfter={<Icon onClick={this.showDrawer}  type="idcard"/>} />
              )}
            </FormItem>
          </Col>
          <Col span={7}>
            <FormItem label={localConsts.ToPartyID_LABEL}>
              {getFieldDecorator('ToPartyID')(
                <Input  placeholder={localConsts.ToPartyID_PLACEHOLDER} name="ToPartyID" addonAfter={<Icon  onClick={this.showDrawer}  type="idcard"/>} />
              )}
            </FormItem>
          </Col>
          <Col span={4} className={styles.submitColumn}>
            <Button
              type="default"
              icon="search"
              htmlType="submit"
              onClick={() => this.handleSearch()}
            />
            <Button
              type="danger"
              icon="rollback"
              className={styles.submitButton}
              onClick={() => {
                this.handleReset();
              }}
            />
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={7}>
              <FormItem label={localConsts.AgreementTypeId_LABEL}>
                {getFieldDecorator('AgreementTypeId', {
                })(
                  <Select
                      showSearch
                      style={{width:'290px'}}
                      optionFilterProp="children"
                      filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >{InvoiceTypeConst}</Select>
                )}
              </FormItem>
            </Col>
          
            <Col span={7}>
            <FormItem label={localConsts.ProductId_LABEL}>
              {getFieldDecorator('ToPartyID')(
                <Input  placeholder={localConsts.ToPartyID_PLACEHOLDER} name="ToPartyID" addonAfter={<Icon  onClick={this.showDrawer1}  type="idcard"/>} />
              )}
            </FormItem>
          </Col>
          <Col span={7}>
            <FormItem label={localConsts.AgreementId_LABEL}>
              {getFieldDecorator('AgreementId', {
               
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
         <Col span={7}>
            <FormItem label={localConsts.FromDate_LABEL}>
              {getFieldDecorator('from_Date', {
               
              })(
                
                <InputGroup compact style={{display:'flex'}}>
                    <DatePicker onChange={this.onChange} style={{width:'250px'}}/>
                    <Select defaultValue="Equals">
                        {from_Date_Const}
                    </Select>
                </InputGroup>
              )}
            </FormItem>
          </Col>
          <Col span={7}>
            <FormItem label={localConsts.ToDate_LABEL}>
                {getFieldDecorator('To_Date', {
                
                })(
                    <InputGroup compact style={{display:'flex'}}>
                        <DatePicker onChange={this.onChange} style={{width:'250px'}}/>
                        <Select defaultValue="Less Than">
                            {To_Date_Const}
                        </Select>
                    </InputGroup>
                )}
                </FormItem>
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
            rowKey="id"
            title={this.tableHeader}
            columns={tableColumns}
            loading={this.state.loading}
            dataSource={this.state.data}
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
            title={localConsts.LookupProduct_title}
            width ="709px"	
            // placement="right"
            closable={true}
            onClose={this.onClose1}
            visible={this.state.visible1}
            >
             <Row gutter={20}>
                <Col span={11}>  
                    <FormItem   label={localConsts.ProductId_LABEL	}>
                        {getFieldDecorator('BillingAccountID_LABEL', {                     
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
                    <FormItem   label={localConsts.InternalName_LABEL}>
                        {getFieldDecorator('AccountingExternalAccountId_LABEL ', {                   
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
        <Row  style={{borderTop:'1px dashed #E3E7F1',height:'62px',borderBottom:'1px dashed #E3E7F1'}}>
            <Col  span={2}offset={21} ><Button className = "button" style={{marginTop:'14px'}} type="primary">Search</Button></Col>
        </Row>
        <Row style= {{marginTop:'14px'}}>    
        <div className={styles.tableContainerParent}>
          <Table
            className={styles.tableContainer}
            rowKey="id"
            title={this.tableHeader}
            columns={tableColumns1}
            loading={this.state.loading}
            dataSource={this.state.data}
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
      </Fragment>
    );
  }
}

InvoiceSearchForm.propTypes = {
  form: PropTypes.any,
  handleSubmitAction: PropTypes.func,
  handleSearchFilters: PropTypes.func,
};

export default Form.create()(connect()(InvoiceSearchForm));
