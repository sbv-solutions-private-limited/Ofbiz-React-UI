import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Row, Col, Button, Form, Input, Icon, Select,Tag ,Popover,AutoComplete,Table ,Checkbox, DatePicker,Drawer } from 'antd';

import styles from '../../../common/Styles.less';
import * as actionConsts from '../../../common/TitlePane/ActionConsts';
import * as localConsts from './PaymentGroupsConsts';
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

class PaymentGroupsSearchForm extends React.PureComponent {
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

    const PaymentTypeConst = localConsts.PaymentTypeConst.map(k => <Option key={k.label} value={k.value}>{k.label}</Option>)
    const InvoiceIdType = localConsts.InvoiceIdType.map(k => <Option key={k.label} value={k.value}>{k.label}</Option>)
    const from_Date_Const = localConsts.from_Date.map(k => <Option key={k.label} value={k.value}>{k.label}</Option>)
    const To_Date_Const = localConsts.To_Date.map(k => <Option key={k.label} value={k.value}>{k.label}</Option>)
    return (
      <Fragment>
        <Row style={{marginTop:'15px'}}>
          <Col span={7}>
              <FormItem label={localConsts.PaymentGroupID_LABEL}>
                  {getFieldDecorator('id', {
                  
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
          <Col span={7} offset={1}>
            <FormItem label={localConsts.PaymentGroupName_LABEL}>
                {getFieldDecorator('name', {
                
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
        <Drawer
            title={localConsts.PartybyName_title}
            width ="709px"	
            // placement="right"
            closable={true}
            onClose={this.onClose}
            visible={this.state.visible}
            >
             <Row gutter={20}>
                <Col span={12}>  
                    <FormItem   label={localConsts.PartyID_LABEL}>
                        {getFieldDecorator('Party_ID', {                     
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
                <Col span={10}>  
                    <FormItem   label={localConsts.partyTypeID_LABEL}>
                        {getFieldDecorator('Party_Type_ID', { 
                        })(
                            <Input type="text" /> 
                        )}
                    </FormItem>  
                </Col>
            </Row>
            <Row>
                <Col span={12}>  
                    <FormItem   label={localConsts.FirstName_LABEL}>
                        {getFieldDecorator('First_Name', { 
                                               
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
                <Col span={12}>  
                    <FormItem   label="Last Name">
                        {getFieldDecorator('Last_Name', {                   
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
            <Row>
            <Col span = {12}> 
                <FormItem   label={localConsts.Group_Name_LABEL}>
                    {getFieldDecorator('Group_Name', { 
                    })(
                    <InputGroup >
                        <Select defaultValue="Contains">
                            {InvoiceIdType}
                        </Select>
                        <AutoComplete
                    //   dataSource={this.state.dataSource}
                    //   onChange={this.handleChange}
                                    
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

PaymentGroupsSearchForm.propTypes = {
  form: PropTypes.any,
  handleSubmitAction: PropTypes.func,
  handleSearchFilters: PropTypes.func,
};

export default Form.create()(connect()(PaymentGroupsSearchForm));
