import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { routerRedux } from 'dva/router';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';

// import images
import forgotPassword from '../../images/forgotPassword.png';
import success from '../../images/success.png';
import tickMark from '../../images/tickMark.png';
import backArrow from '../../images/backArrow.png';

const FormItem = Form.Item;

class ForgotPasswordForm extends React.Component {
  handleSubmit = e => {
    const { dispatch } = this.props;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'user/forgot',
          payload: values,
        });
      }
    });
  };

  backToLogin = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'user/clear',
    });
    dispatch(routerRedux.push({ pathname: '/' }));
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    // const { user } = this.props;

    const ForgotForm = (
      <div style={{ height: '100vh', display: 'flex' }}>
        <div style={{ width: '55%', height: '100%', background: '#FA8F4D' }}>
          <img src={forgotPassword} alt="logo" style={{ margin: 'auto' }} />
        </div>
        <div style={{ margin: 'auto' }}>
          <h1>Forgot Password ?</h1>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('email', {
                rules: [
                  { required: true, message: 'Please enter Email Address!' },
                ],
              })(
                <Input
                  placeholder="Email Address"
                  style={{ width: '240px' }}
                />,
              )}
            </FormItem>

            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ width: '240px' }}
              >
                Submit
              </Button>
            </FormItem>
            {/* alert message on login fail */}
            {/* {user.fail ? (
              <Alert
                message="Entered email is not existed "
                type="error"
                showIcon
              />
            ) : null} */}
          </Form>
          {/* <Alert message="Your password will get reset by administrator and will receive new password in your email" type="info" showIcon /> */}
        </div>
      </div>
    );
    const ForgotSuccess = (
      <div style={{ height: '100vh', display: 'flex' }}>
        <div style={{ width: '55%', height: '100%', background: '#5EE3C6' }}>
          <img src={success} alt="logo" style={{ margin: 'auto' }} />
        </div>
        <div style={{ margin: 'auto' }}>
          <h1>Forgot Password ?</h1>
          <div style={{ color: '#0DA584' }}>
            <img src={tickMark} alt="logo" style={{ margin: 'auto' }} />Password
            reset request submitted successfully{' '}
          </div>
          <Button onClick={this.backToLogin}>
            <img src={backArrow} alt="logo" style={{ margin: 'auto' }} /> Login
          </Button>
        </div>
      </div>
    );
    return <Fragment>{ForgotForm}</Fragment>;
    // <Fragment>{!user.success ? ForgotForm : ForgotSuccess}</Fragment>;
  }
}

ForgotPasswordForm.propTypes = {
  dispatch: PropTypes.func,
  form: PropTypes.any,
  getFieldDecorator: PropTypes.any,
  user: PropTypes.object,
};

export default Form.create()(
  connect(({ user }) => ({ user }))(ForgotPasswordForm),
);
