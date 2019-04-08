import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Row, Col, Button, Form,Collapse, Input, Icon, Radio,Select,Tag ,Table ,Checkbox, DatePicker,Drawer,Popover } from 'antd';
import styles from '../../../common/Styles.less';
import * as actionConsts from '../../../common/TitlePane/ActionConsts';
import * as localConsts from './PartyConsts';
const InputGroup = Input.Group;
const FormItem = Form.Item;
const CheckableTag = Tag.CheckableTag;
const RadioGroup =  Radio.Group;
const Panel = Collapse.Panel;
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

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class InvoiceSearchForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { ReceivedValues: [],visible: false,status:[],data:[], visible1:false,value:0 };
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


  onChange = (e) => {
    console.log('radio1 checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  callback =(key) =>{
    console.log('hii');
    console.log(key);
    this.setState({
      value: key,
    });
  }
  
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
          title:`${localConsts.COLUMN_UserLoginID}`,
          width:200,
          dataIndex: 'Party_ID',
          id: 'Party_ID',
      },
      {
          title:`${localConsts.COLUMN_PartyID}`,
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

    const InvoiceTypeConst = localConsts.InvoiceTypeConst.map(k => <Option key={k.label} value={k.value}>{k.label}</Option>)
    const InvoiceIdType = localConsts.InvoiceIdType.map(k => <Option key={k.label} value={k.value}>{k.label}</Option>)
    const from_Date_Const = localConsts.from_Date.map(k => <Option key={k.label} value={k.value}>{k.label}</Option>)
    const To_Date_Const = localConsts.To_Date.map(k => <Option key={k.label} value={k.value}>{k.label}</Option>)
    return (
      <Fragment>
        <Row gutter={20} style={{marginTop:'15px'}}>
          <Col span={7}>
            <FormItem label={localConsts.PartyId_LABEL}>
              {getFieldDecorator('FromPartyID', {
              })(
                <Input   name="FromPartyID"/>
              )}
            </FormItem>
          </Col>
          <Col span={7}>
            <FormItem label={localConsts.UserLoginID_LABEL}>
              {getFieldDecorator('ToPartyID')(
                <Input  name="ToPartyID" addonAfter={<Icon  onClick={this.showDrawer}  type="idcard"/>}   />
              )}
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label={localConsts.ExternalId_LABEL}>
              {getFieldDecorator('InvoiceType', {
              })(
                <Input   />
                // <Select
                //     showSearch
                //     style={{width:'290px'}}
                //     placeholder={localConsts.InvoiceType_PLACEHOLDER}
                //     optionFilterProp="children"
                //     filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                //  >{InvoiceTypeConst}</Select>
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
            <FormItem label={localConsts.LastName_LABEL}>
              {getFieldDecorator('BillingAccountID', {
               
              })(
                <Input />
              )}
            </FormItem>
          </Col>
          <Col span={7}>
            <FormItem label={localConsts.FirstName_LABEL}>
              {getFieldDecorator('from_Date', {
               
              })(
                
                <Input   />
              )}
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label={localConsts.GroupName_LABEL}>
                {getFieldDecorator('To_Date', {
                
                })(
                  <Input   />
                )}
                </FormItem>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={7}>
            <FormItem label={localConsts.RoleTypeId_LABEL}>
              {getFieldDecorator('InvoiceID', {
               
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
            <FormItem label={localConsts.Type_LABEL}>
              {getFieldDecorator('Description', {
               
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
        </Row>
        <Row style={{marginTop:'20px',marginBottom:'10px',}}> 
          <Col span={12} style={{display:'flex'}}><h4>Contact Information : </h4><RadioGroup onChange={this.onChange} defaultValue="0" style={{marginLeft:'2%'}} >
            <Radio value="0">None</Radio>
            <Radio value="2">Postal</Radio>
            <Radio value="3">Telecom</Radio>
            <Radio value="4">Other</Radio>
          </RadioGroup>
          </Col>
       </Row>
       <Row>
       <Collapse  activeKey={this.state.value}  onChange={this.callback}>
        <Panel  header="Identification Number"  key="1">
          <Row> 
             <Col span={6}>
                <FormItem label={localConsts.IdValue_LABEL}>
                    {getFieldDecorator('To_Date', {
                    
                    })(
                      <Input   />
                    )}
                    </FormItem>
              </Col>
              <Col span={7} offset={1}>
                <FormItem label={localConsts.IdentificationType_LABEL}>
                  {getFieldDecorator('IdentificationType', {
                  
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
          </Row>
        </Panel>
        <Panel  header="Postal" key="2">
        <Row> 
             <Col span={6}>
                <FormItem label={localConsts.Address1_LABEL}>
                    {getFieldDecorator('Address1', {
                    
                    })(
                      <Input   />
                    )}
                    </FormItem>
              </Col>
              <Col span={6} offset={1}>
                <FormItem label={localConsts.Address2_LABEL}>
                    {getFieldDecorator('Address1', {
                    
                    })(
                      <Input   />
                    )}
                    </FormItem>
              </Col>
              <Col span={6} offset={1}>
                <FormItem label={localConsts.City_LABEL}>
                    {getFieldDecorator('City', {
                    
                    })(
                      <Input   />
                    )}
                    </FormItem>
              </Col>
              </Row>
              <Row>
                <Col span={7} >
                  <FormItem label={localConsts.StateProvinceGeoId_LABEL}>
                    {getFieldDecorator('StateProvinceGeoId', {
                    
                    })(
                      <Select
                          showSearch
                          style={{width:'255px'}}
                        
                          optionFilterProp="children"
                          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                      >{InvoiceTypeConst}</Select> 
                
                    )}
                  </FormItem>
              </Col>
              <Col span={6} >
                <FormItem label={localConsts.PostalCode_LABEL}>
                    {getFieldDecorator('PostalCode', {
                    
                    })(
                      <Input   />
                    )}
                    </FormItem>
              </Col>
          </Row>
        </Panel>
        <Panel header="Telecom" key="3" >
        <Row> 
             <Col span={6}>
                <FormItem label={localConsts.CountryCode_LABEL}>
                    {getFieldDecorator('CountryCode', {
                    
                    })(
                      <Input   />
                    )}
                    </FormItem>
              </Col>
              <Col span={6} offset={1}>
                <FormItem label={localConsts.AreaCode_LABEL}>
                    {getFieldDecorator('AreaCode', {
                    
                    })(
                      <Input   />
                    )}
                    </FormItem>
              </Col>
              <Col span={6} offset={1}>
                <FormItem label={localConsts.ContactNumber_LABEL}>
                    {getFieldDecorator('ContactNumber', {
                    
                    })(
                      <Input   />
                    )}
                    </FormItem>
              </Col>
              </Row>
            
        </Panel>
        <Panel header="Other Contact Information" key="4">
        <Row> 
             <Col span={6}>
                <FormItem label={localConsts.ContactInformation_LABEL}>
                    {getFieldDecorator('ContactInformation', {
                    
                    })(
                      <Input   />
                    )}
                    </FormItem>
              </Col>
              </Row>
        </Panel>
        <Panel header="Product" key="5">
        <Row> 
             <Col span={6}>
                <FormItem label={localConsts.InventoryItemId_LABEL}>
                    {getFieldDecorator('InventoryItemId', {
                    
                    })(
                      <Input   />
                    )}
                    </FormItem>
              </Col>
              <Col span={6} offset={1}>
                <FormItem label={localConsts.SerialNumber_LABEL}>
                    {getFieldDecorator('SerialNumber', {
                    
                    })(
                      <Input   />
                    )}
                    </FormItem>
              </Col>
              <Col span={6} offset={1}>
                <FormItem label={localConsts.SoftIdentifier_LABEL}>
                    {getFieldDecorator('SoftIdentifier', {
                    
                    })(
                      <Input   />
                    )}
                    </FormItem>
              </Col>
              </Row>
        </Panel>
  </Collapse>
       </Row>
        <Drawer
            title={localConsts.LookupUserLoginAndPartyDetails_title}
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
                              <Input  p
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
                    <FormItem   label={localConsts.UserLoginID_LABEL}>
                        {getFieldDecorator('Party_Type_ID', { 
                        })(
                          <Input  p
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
                    <FormItem   label={localConsts.LastName_LABEL}>
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
              <FormItem   label={localConsts.MiddleName_LABEL}>
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
            <Col span = {11} offset={2}> 
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
        <Row gutter={20}>
            <Col span = {11} > 
                <FormItem   label={localConsts.PartyCreatedFromDate_LABEL}>
                    {getFieldDecorator('Group_Name', { 
                    })(
                      <InputGroup compact style={{display:'flex',width:'295px'}}>
                      <DatePicker onChange={this.onChange} style={{width:'250px'}}/>
                      <Select defaultValue="Equals">
                          {from_Date_Const}
                      </Select>
                  </InputGroup>

                    )}
                </FormItem>  
            </Col>
            <Col span = {11} offset={2} > 
                <FormItem   label={localConsts.PartyCreatedToDate_LABEL}>
                    {getFieldDecorator('Group_Name', { 
                    })(
                      <InputGroup compact style={{display:'flex',width:'295px'}}>
                      <DatePicker onChange={this.onChange} style={{width:'250px'}}/>
                      <Select defaultValue="Equals">
                          {from_Date_Const}
                      </Select>
                  </InputGroup>

                    )}
                </FormItem>  
            </Col>
        </Row>
        <Row  style={{borderTop:'1px dashed #E3E7F1',height:'62px',borderBottom:'1px dashed #E3E7F1',marginTop:'14px'}}>
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
            onChange={this.handleStandardTableChange}
          />
            </div>
        </Row>       
    </Drawer>
    <Drawer
            title={localConsts.BillingAccountbyName_title}
            width ="709px"	
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
            rowKey="id"
            title={this.tableHeader}
            columns={tableColumns1}
            loading={this.state.loading}
            dataSource={this.state.data}
            size="small"
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
