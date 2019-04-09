import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Select } from 'antd';
import { routerRedux } from 'dva/router';
import { connect } from 'react-redux';

// import images
import askPermission from '../../images/askPermissiom.png';
import success from '../../images/success.png';
import tickMark from '../../images/tickMark.png';
import backArrow from '../../images/backArrow.png';

const FormItem = Form.Item;

class AskPermissionForm extends React.Component {
  handleSubmit = e => {
    const { dispatch } = this.props;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'user/permission',
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
    const { user } = this.props;

    const PermissionForm = (
      <div style={{ height: '100vh', display: 'flex' }}>
        <div style={{ width: '55%', height: '100%', background: '#FE7680' }}>
          <img src={askPermission} alt="logo" style={{ margin: 'auto' }} />
        </div>
        <div style={{ margin: 'auto' }}>
          <h1>Ask Permission !</h1>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('email', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your Email Address!',
                  },
                ],
              })(
                <Input
                  placeholder="Email Address"
                  style={{ width: '240px' }}
                />,
              )}
            </FormItem>
            <Select style={{ width: 240 }} placeholder="Select Application">
              <Select.Option value="jack">Jack</Select.Option>
              <Select.Option value="lucy">Lucy</Select.Option>
              <Select.Option value="disabled" disabled>
                Disabled
              </Select.Option>
              <Select.Option value="Yiminghe">yiminghe</Select.Option>
            </Select>
            <br />
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
                Submit
              </Button>
            </FormItem>
            {/* alert message on login fail */}
            {/* {user.fail ? (
              <Alert
                message="Entered email already exist"
                type="error"
                showIcon
              />
            ) : null} */}
          </Form>
          {/* <Alert message="Informational Notes" type="info" showIcon /> */}
        </div>
      </div>
    );

    const PermissionSuccess = (
      <div style={{ height: '100vh', display: 'flex' }}>
        <div style={{ width: '55%', height: '100%', background: '#5EE3C6' }}>
          <img src={success} alt="logo" style={{ margin: 'auto' }} />
        </div>
        <div style={{ margin: 'auto' }}>
          <h1>Ask Permission</h1>
          <span style={{ color: '#0DA584' }}>
            <img src={tickMark} alt="logo" style={{ margin: 'auto' }} />You
            permission request have been submitted successfully. You will
            receive when it get approved.{' '}
          </span>
          <Button onClick={this.backToLogin}>
            <img src={backArrow} alt="logo" style={{ margin: 'auto' }} /> Login
          </Button>
        </div>
      </div>
    );
    return (
      // <Fragment>{!user.success ? PermissionForm : PermissionSuccess}</Fragment>
      <Fragment>{PermissionForm}</Fragment>
    );
  }
}

AskPermissionForm.propTypes = {
  dispatch: PropTypes.func,
  form: PropTypes.any,
  getFieldDecorator: PropTypes.any,
  user: PropTypes.object,
};

export default Form.create()(
  connect(({ user }) => ({ user }))(AskPermissionForm),
);
