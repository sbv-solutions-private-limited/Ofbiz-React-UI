import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';
import {
  Row,
  Col,
  Button,
  Form,
  Input,
  Icon,
  Tabs,
  Select,
  AutoComplete,
  Table,
  Checkbox,
  Popover,
  DatePicker,
  Drawer,
} from 'antd';
import styles from '../../../common/Styles.less';
import * as actionConsts from '../../../common/TitlePane/ActionConsts';
import * as localConsts from './PaymentGatewayConfigConsts';
const InputGroup = Input.Group;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
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
class PaymentGatewayConfigSearchForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ReceivedValues: [],
      visible: false,
      status: [],
      data: [],
      visible1: false,
    };
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
    this.setState({ status: nextSelectedTags });
  }
  callback = key => {};
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
    const tableColumns1 = [
      {
        title: `${localConsts.COLUMN_BillingAcctID}`,
        dataIndex: 'Billing_Acct_ID',
        id: 'Billing_Acct_ID',
      },
      {
        title: `${localConsts.COLUMN_Description}`,
        dataIndex: 'Description',
        id: 'Description',
      },
      {
        title: `${localConsts.COLUMN_AccountingExternalAccountId}`,
        dataIndex: 'ext_acc_id',
        id: 'ext_acc_id',
      },
    ];
    const InvoiceIdType = localConsts.InvoiceIdType.map(k => (
      <Option key={k.label} value={k.value}>
        {k.label}
      </Option>
    ));
    return (
      <Fragment>
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="Find Payment Gateway Config" key="1">
            <Row gutter={20}>
              <Col span={7}>
                <FormItem label={localConsts.PaymentGatewayConfigId}>
                  {getFieldDecorator('PaymentGatewayConfigId', {})(
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
              <Col span={7}>
                <FormItem label={localConsts.PaymentGatewayConfigDescription}>
                  {getFieldDecorator('PaymentGatewayConfigDescription', {})(
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
              <Col span={7}>
                <FormItem label={localConsts.PaymentGatewayConfigTypeId}>
                  {getFieldDecorator('PaymentGatewayConfigTypeId', {})(
                    <Select
                      showSearch
                      style={{ width: '295px' }}
                      // placeholder={localConsts.PaymentType_PLACEHOLDER}
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
          </TabPane>
          <TabPane tab="Find Payment Gateway Config Types" key="2">
            <Row gutter={20}>
              <Col span={7}>
                <FormItem label={localConsts.PaymentGatewayConfigTypeId}>
                  {getFieldDecorator('PaymentGatewayConfigTypeId', {})(
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
              <Col span={7}>
                <FormItem label={localConsts.PaymentGatewayConfigDescription}>
                  {getFieldDecorator('PaymentGatewayConfigDescription', {})(
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
          </TabPane>
        </Tabs>
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
PaymentGatewayConfigSearchForm.propTypes = {
  form: PropTypes.any,
  handleSubmitAction: PropTypes.func,
  handleSearchFilters: PropTypes.func,
};
export default Form.create()(connect()(PaymentGatewayConfigSearchForm));
