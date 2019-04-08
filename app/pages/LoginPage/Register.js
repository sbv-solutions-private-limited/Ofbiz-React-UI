import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Select, Alert } from 'antd';

import { connect } from 'react-redux';

import login from '../../images/login.png';

const FormItem = Form.Item;

class RegisterForm extends React.Component {
  handleSubmit = e => {
    const { dispatch } = this.props;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'user/registration',
          payload: values,
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div style={{ height: '100vh', display: 'flex' }}>
        <div style={{ width: '55%', height: '100%', background: '#90AEFF' }}>
          <img src={login} alt="logo" style={{ margin: 'auto' }} />
        </div>
        <div style={{ margin: 'auto' }}>
          <h1>Register</h1>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('Name', {
                rules: [
                  { required: true, message: 'Please input your username!' },
                ],
              })(
                <Input
                  placeholder="Name"
                  style={{ width: '240px', borderBottom: '1px solid #d9d9d9' }}
                />,
              )}
            </FormItem>

            <FormItem>
              {getFieldDecorator('userId', {
                rules: [
                  { required: true, message: 'Please input your username!' },
                ],
              })(<Input placeholder="User Id" style={{ width: '240px' }} />)}
            </FormItem>
            <FormItem>
              {getFieldDecorator('email', {
                rules: [
                  { required: true, message: 'Please input your Password!' },
                ],
              })(
                <Input
                  type="password"
                  placeholder="Password"
                  style={{ width: '240px' }}
                />,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('telephone', {
                rules: [
                  { required: true, message: 'Please input your username!' },
                ],
              })(
                <Input
                  type="email"
                  placeholder="Email"
                  style={{ width: '240px' }}
                />,
              )}
            </FormItem>
            <Select style={{ width: 240 }} placeholder="Permission">
              <Select.Option value="jack">Jack</Select.Option>
              <Select.Option value="lucy">Lucy</Select.Option>
              <Select.Option value="disabled" disabled>
                Disabled
              </Select.Option>
              <Select.Option value="Yiminghe">yiminghe</Select.Option>
            </Select>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ width: '240px' }}
              >
                Register
              </Button>
              <br />
            </FormItem>
          </Form>
          <Alert message="Informational Notes" type="info" showIcon />
        </div>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  dispatch: PropTypes.func,
  form: PropTypes.any,
  getFieldDecorator: PropTypes.any,
};

const mapStateToProps = ({ user }) => ({
  user,
});

const WrappedRegisterForm = Form.create()(
  connect(mapStateToProps)(RegisterForm),
);
export default WrappedRegisterForm;
