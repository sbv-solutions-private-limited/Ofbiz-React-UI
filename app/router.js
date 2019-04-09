import React, { Fragment } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import NotFoundPage from 'pages/NotFoundPage';
// import store from './store';
// import RequestionList from 'pages/Masters/requestionListCard';

import BasicLayout from './layouts/BasicLayout';
import LoginForm from './pages/LoginPage/Login';
import AskPermissionForm from './pages/LoginPage/AskPermission';
import ForgotPasswordForm from './pages/LoginPage/ForgotPassword';

function RouterConfig({ history }) {
  return (
    <Fragment>
      <ConnectedRouter history={history}>
        <Switch>
          {/* <Route exact path="/" component={LoginLayout} /> */}
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/askPermission" component={AskPermissionForm} />
          <Route exact path="/forgotPassword" component={ForgotPasswordForm} />
          <Route path="/gui" component={BasicLayout} />
          <Route component={NotFoundPage} />
        </Switch>
      </ConnectedRouter>
    </Fragment>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.any,
};
export default RouterConfig;
