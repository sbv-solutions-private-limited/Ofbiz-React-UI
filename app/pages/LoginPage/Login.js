import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Checkbox } from 'antd';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Login.less';

// import images
import loginIon from '../../images/login.png';
import askPermissionLinkIcon from '../../images/permission.png';
import { setLoggedInUser } from '../../common/commonConsts';

const FormItem = Form.Item;

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loginResponseData.message !== undefined) {
      const data = nextProps.loginResponseData;
      if (data.message.status === 'error') {
        this.setState({
          errorMessage: data.message.message,
        });
      } else {
        const userInfo = data.data;
        setLoggedInUser(userInfo);
        this.setState({ errorMessage: '' });
      }
    }
  }

  handleSubmit = e => {
    const { dispatch, form } = this.props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'login/login',
          payload: values,
        });
      }
    });
  };

  emptyErrorMessage = () => {
    this.setState({ errorMessage: '' });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div style={{ height: '100vh', display: 'flex' }}>
        <div
          style={{
            width: '50%',
            display: 'flex',
            height: '100%',
            background: '#90AEFF',
          }}
        >
          <img src={loginIon} alt="logo" style={{ margin: 'auto' }} />
        </div>
        <div style={{ margin: 'auto' }}>
          <h1 className={styles.title}>Login</h1>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please enter Name!' }],
              })(
                <Input
                  type="text"
                  placeholder="Name"
                  style={{ width: '240px' }}
                />,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please enter Password!' }],
              })(
                <Input
                  type="password"
                  placeholder="Password"
                  style={{ width: '240px' }}
                />,
              )}
            </FormItem>
            <div style={{ color: 'red' }}>{this.state.errorMessage}</div>
            {/* <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: false,
              })(<Checkbox>Remember me</Checkbox>)}
              <Link to="/forgotPassword">Forgot password</Link> <br />
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ width: '240px' }}
              >
                Log in
              </Button>
              <br />
              <div>
                <img src={askPermissionLinkIcon} alt="logo" />
                <Link to="/askPermission"> Ask for permission ? </Link>
              </div>
            </FormItem> */}
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ width: '240px' }}
              >
                Log in
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  dispatch: PropTypes.func,
  form: PropTypes.any,
  getFieldDecorator: PropTypes.any,
  loginResponseData: PropTypes.any,
};

export default Form.create()(
  connect(({ login }) => ({ loginResponseData: login.reducerLogin }))(
    LoginForm,
  ),
);
