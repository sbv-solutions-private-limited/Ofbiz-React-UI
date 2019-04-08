/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';
import 'sanitize.css/sanitize.css';

import dva from 'dva';

// import createLoading from 'dva-loading';
// Import all the third party stuff
import createHistory from 'history/createBrowserHistory';

// Load the favicon and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=[name].[ext]!./.htaccess';
/* eslint-enable import/no-unresolved, import/extensions */
// Import CSS reset and Global Styles
import './global-styles';

const app = dva({
  history: createHistory(),
});
// app.use(createLoading()); 
app.router(require('./router').default);

app.model(require('./pages/LoginPage/LoginPageModel').default);
app.model(require('./pages/Accounting(AR)/Invoice/invoiceARModel').default);
app.model(require('./pages/Accounting(AR)/Payment/paymentARModel').default);
app.model(require('./pages/Accounting(AR)/Payment_Groups/paymentGroupsARModel').default);
app.model(require('./pages/Accounting(AR)/Agreements/AgreementsARModel').default);

app.model(require('./pages/Accounting(Ap)/Agreements/AgreementsAPModel').default);
// app.model(require('./pages/Accounting(Ap)/Main/MainAPModel').default);
app.model(require('./pages/Accounting(Ap)/Payment/paymentAPModel').default);
app.model(require('./pages/Accounting(Ap)/Payment_Groups/paymentGroupsAPModel').default);
app.model(require('./pages/Accounting(Ap)/Find Vendors/VendorsAPModel').default);
app.model(require('./pages/Accounting(Ap)/Invoice/invoiceAPModel').default);

app.model(require('./pages/Accounting/Invoice/invoiceModel').default);
app.model(require('./pages/Accounting/Payment/paymentModel').default);
app.model(require('./pages/Accounting/Payment_Groups/paymentGroupsModel').default);
app.model(require('./pages/Accounting/Agreements/AgreementsModel').default);
app.model(require('./pages/Accounting/Transactions/TransactionsModel').default);
app.model(require('./pages/Accounting/PaymentGatewayConfig/PaymentGatewayConfigModel').default);
app.model(require('./pages/Accounting/BillingAccount/BillingAccountModel').default);
app.model(require('./pages/Accounting/FinancialAccount/FinancialAccountModel').default);
app.model(require('./pages/Accounting/TaxAuthorities/TaxAuthModel').default);
app.model(require('./pages/Accounting/Budgets/BudgetsModel').default);
app.start('#app');

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
