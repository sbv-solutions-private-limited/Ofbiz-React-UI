import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  Row,
  Col,
  Button,
  Form,
  Input,
  Icon,
  Select,
  Table,
  Checkbox,
  DatePicker,
  Drawer,
  Popover,
} from 'antd';
import styles from '../../../common/Styles.less';
import * as actionConsts from '../../../common/TitlePane/ActionConsts';
import * as localConsts from './BillingAccountConsts';
const InputGroup = Input.Group;
const FormItem = Form.Item;
class BillingAccountSearchForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ReceivedValues: [],
      visible: false,
      status: [],
      data: [],
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
    return (
      <Fragment>
        <Row gutter={20} style={{ marginTop: '15px' }}>
          <Col span={7}>
            <FormItem label={localConsts.BillingAccountID_LABEL}>
              {getFieldDecorator('FromPartyID', {})(
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
          <Col span={7} offset={1}>
            <FormItem label={localConsts.description_LABEL}>
              {getFieldDecorator('ToPartyID')(
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
        <Row gutter={20}>
          <Col span={7}>
            <FormItem label={localConsts.AccountLimit}>
              {getFieldDecorator('AgreementTypeId', {})(
                <Input
                />
              )}
            </FormItem>
          </Col>
          <Col span={7} offset={1}>
          <FormItem label={localConsts.FromDate_LABEL}>
              {getFieldDecorator('from_Date', {})(
                  <DatePicker
                    onChange={this.onChange}
                    style={{ width: '250px' }}
                  />
              )}
            </FormItem>
          </Col>
          <Col span={7} offset={1}>
          <FormItem label={localConsts.ThroughDate_LABEL}>
              {getFieldDecorator('from_Date', {})(
                  <DatePicker
                    onChange={this.onChange}
                    style={{ width: '250px' }}
                  />
              )}
            </FormItem>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
BillingAccountSearchForm.propTypes = {
  form: PropTypes.any,
  handleSubmitAction: PropTypes.func,
  handleSearchFilters: PropTypes.func,
};
export default Form.create()(connect()(BillingAccountSearchForm));
