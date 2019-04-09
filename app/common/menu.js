// image imports
import payments from '../images/payments.png';
import AR from '../images/AR.png';
import AP from '../images/AP.png';
import accounting from '../images/accounting.png';
//Accounting
import Main from '../pages/Accounting/Main/MainView';
import InvoiceView from '../pages/Accounting/Invoice';
import PaymentView from '../pages/Accounting/Payment';
import PaymentGroupsView from '../pages/Accounting/Payment_Groups';
import AgreementsView from '../pages/Accounting/Agreements';
import TransactionsView from '../pages/Accounting/Transactions';
import BillingAccountsView from '../pages/Accounting/BillingAccount';
import FinancialAccountView from '../pages/Accounting/FinancialAccount';
import TaxAuthView from '../pages/Accounting/TaxAuthorities'
import BudgetsView from '../pages/Accounting/Budgets';
// Accounting-AR
import InvoiceViewAR from '../pages/Accounting(AR)/Invoice';
import PaymentViewAR from '../pages/Accounting(AR)/Payment';
import PaymentGroupsViewAR from '../pages/Accounting(AR)/Payment_Groups';
import ReportsViewAR from '../pages/Accounting(AR)/Reports';
import AgreementsViewAR from '../pages/Accounting(AR)/Agreements/AgreementsView';
import MainAR from '../pages/Accounting(AR)/Main/MainView';
// Accounting-AP
import InvoiceViewAP from '../pages/Accounting(Ap)/Invoice';
import PaymentViewAP from '../pages/Accounting(Ap)/Payment';
import PaymentGroupsViewAP from '../pages/Accounting(Ap)/Payment_Groups';
import ReportsViewAP from '../pages/Accounting(Ap)/Reports';
import AgreementsViewAP from '../pages/Accounting(Ap)/Agreements/AgreementsView';
import MainAP from '../pages/Accounting(Ap)/Main/MainView';
import VendorsViewAP from '../pages/Accounting(Ap)/Find Vendors/VendorsView';
// party
import PartyView from '../pages/Party/Parties';
import MyCommunicationsView from '../pages/Party/MyCommunications/MyCommunicationsView';

//Not available module
import NA from '../pages/NotFoundPage/index';

//PaymentGatewayConfig
import PaymentGatewayConfigView from '../pages/Accounting/PaymentGatewayConfig/PaymentGatewayConfigView';

const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export function isUrl(path) {
  return reg.test(path);
}

const menuData = [
  {
    name: 'Accounting',
    icon: accounting,
    path: 'accounting',
    children: [
      { name: 'Main', path: 'Main', component: Main },
      { name: 'Invoices', path: 'Invoices', component: InvoiceView },
      { name: 'Payments', path: 'Payments', component: PaymentView },
      {
        name: 'Payments Groups',
        path: 'PaymentsGroups',
        component: PaymentGroupsView,
      },
      {
        name: 'Transactions',
        path: 'Transactions',
        component: TransactionsView,
      },
      {
        name: 'Payment Gateway Config',
        path: ' PaymentGatewayConfig',
        component: PaymentGatewayConfigView,
      },
      { name: 'Billing Accounts', path: 'BillingAccounts', component: BillingAccountsView },
      { name: 'Financial Account', path: 'FinancialAccount', component: FinancialAccountView },
      { name: 'Tax Authorities', path: 'TaxAuthorities', component: TaxAuthView },
      { name: 'Agreements', path: 'Agreements', component: AgreementsView },
      { name: 'Fixed Assets', path: 'FixedAssets', component: NA },
      { name: 'Budgets', path: 'Budgets', component: BudgetsView },
      { name: 'Global GL Settings', path: 'Global_GL', component: NA },
      {
        name: 'Organization GL Settings',
        path: 'Organization_GL',
        component: NA,
      },
    ],
  },

  {
    name: 'Accounting - AP',
    icon: AP,
    path: 'accounting_payable',
    children: [
      { name: 'Main', path: 'Main', component: MainAP },
      { name: 'Agreements', path: 'Agreements', component: AgreementsViewAP },
      { name: 'Invoices', path: 'Invoices', component: InvoiceViewAP },
      { name: 'Payments', path: 'Payments', component: PaymentViewAP },
      {
        name: 'Payments Groups',
        path: 'PaymentsGroups',
        component: PaymentGroupsViewAP,
      },
      { name: 'Find Vendors', path: 'Vendors', component: VendorsViewAP },
      { name: 'Reports', path: 'ListReports', component: ReportsViewAP },
    ],
  },
  {
    name: 'Accounting - AR',
    icon: AR,
    path: 'accounting_receivable',
    children: [
      { name: 'Main', path: 'Main', component: MainAR },
      { name: 'Agreements', path: 'Agreements', component: AgreementsViewAR },
      { name: 'Invoices', path: 'Invoices', component: InvoiceViewAR },
      { name: 'Payments', path: 'Payments', component: PaymentViewAR },
      {
        name: 'Payments Groups',
        path: 'PaymentsGroups',
        component: PaymentGroupsViewAR,
      },
      { name: 'Reports', path: 'ListReports', component: ReportsViewAR },
    ],
  },
  {
    name: 'Asset Maint',
    icon: payments,
    path: 'assetmaint',
    children: [
      { name: 'Main', path: '/Main', component: NA },
      { name: 'Agreements', path: 'Agreements', component: NA },
      { name: 'Invoices', path: 'FindInvoices', component: NA },
      { name: 'Payments', path: 'FindPayments', component: NA },
      { name: 'Payments Groups', path: 'FindArPaymentsGroups', component: NA },
      { name: 'Reports', path: 'ListReports', component: NA },
    ],
  },
  {
    name: 'Catalog',
    icon: payments,
    path: 'catalog',
    children: [
      { name: 'Main', path: '/Main', component: NA },
      { name: 'Agreements', path: 'Agreements', component: NA },
      { name: 'Invoices', path: 'FindInvoices', component: NA },
      { name: 'Payments', path: 'FindPayments', component: NA },
      { name: 'Payments Groups', path: 'FindArPaymentsGroups', component: NA },
      { name: 'Reports', path: 'ListReports', component: NA },
    ],
  },
  {
    name: 'Content',
    icon: payments,
    path: 'content',
    children: [
      { name: 'Main', path: '/Main', component: NA },
      { name: 'Agreements', path: 'Agreements', component: NA },
      { name: 'Invoices', path: 'FindInvoices', component: NA },
      { name: 'Payments', path: 'FindPayments', component: NA },
      { name: 'Payments Groups', path: 'FindArPaymentsGroups', component: NA },
      { name: 'Reports', path: 'ListReports', component: NA },
    ],
  },
  {
    name: 'Facility',
    icon: payments,
    path: 'facility',
    children: [
      { name: 'Main', path: '/Main', component: NA },
      { name: 'Agreements', path: 'Agreements', component: NA },
      { name: 'Invoices', path: 'FindInvoices', component: NA },
      { name: 'Payments', path: 'FindPayments', component: NA },
      { name: 'Payments Groups', path: 'FindArPaymentsGroups', component: NA },
      { name: 'Reports', path: 'ListReports', component: NA },
    ],
  },
  {
    name: 'HR',
    icon: payments,
    path: 'hr',
    children: [
      { name: 'Main', path: '/Main', component: NA },
      { name: 'Agreements', path: 'Agreements', component: NA },
      { name: 'Invoices', path: 'FindInvoices', component: NA },
      { name: 'Payments', path: 'FindPayments', component: NA },
      { name: 'Payments Groups', path: 'FindArPaymentsGroups', component: NA },
      { name: 'Reports', path: 'ListReports', component: NA },
    ],
  },
  {
    name: 'Manufacturing',
    icon: payments,
    path: 'manufacturing',
    children: [
      { name: 'Main', path: '/Main', component: NA },
      { name: 'Agreements', path: 'Agreements', component: NA },
      { name: 'Invoices', path: 'FindInvoices', component: NA },
      { name: 'Payments', path: 'FindPayments', component: NA },
      { name: 'Payments Groups', path: 'FindArPaymentsGroups', component: NA },
      { name: 'Reports', path: 'ListReports', component: NA },
    ],
  },
  {
    name: 'Marketing',
    icon: payments,
    path: 'marketing',
    children: [
      { name: 'Main', path: '/Main', component: NA },
      { name: 'Agreements', path: 'Agreements', component: NA },
      { name: 'Invoices', path: 'FindInvoices', component: NA },
      { name: 'Payments', path: 'FindPayments', component: NA },
      { name: 'Payments Groups', path: 'FindArPaymentsGroups', component: NA },
      { name: 'Reports', path: 'ListReports', component: NA },
    ],
  },
  {
    name: 'My Portal',
    icon: payments,
    path: 'myportal',
    children: [
      { name: 'Main', path: '/Main', component: NA },
      { name: 'Agreements', path: 'Agreements', component: NA },
      { name: 'Invoices', path: 'FindInvoices', component: NA },
      { name: 'Payments', path: 'FindPayments', component: NA },
      { name: 'Payments Groups', path: 'FindArPaymentsGroups', component: NA },
      { name: 'Reports', path: 'ListReports', component: NA },
    ],
  },
  {
    name: 'Order',
    icon: payments,
    path: 'order',
    children: [
      { name: 'Main', path: '/Main', component: NA },
      { name: 'Agreements', path: 'Agreements', component: NA },
      { name: 'Invoices', path: 'FindInvoices', component: NA },
      { name: 'Payments', path: 'FindPayments', component: NA },
      { name: 'Payments Groups', path: 'FindArPaymentsGroups', component: NA },
      { name: 'Reports', path: 'ListReports', component: NA },
    ],
  },
  {
    name: 'Party',
    icon: payments,
    path: 'party',
    children: [
      { name: 'Main', path: 'Main', component: '' },
      { name: 'Parties', path: 'Parties', component: PartyView },
      {
        name: 'My Communications',
        path: 'MyCommunications',
        component: MyCommunicationsView,
      },
      { name: 'Communications', path: 'Communications', component: NA },
      { name: 'Visits', path: 'Visits', component: NA },
      { name: 'Logged-in Users', path: 'Logged-inUsers', component: NA },
      { name: 'Classifications', path: 'Classifications', component: NA },
      { name: 'Security', path: 'Security', component: NA },
      { name: 'Address Match Map', path: 'AddressMatchMap', component: NA },
      { name: 'Invitations', path: 'Invitations', component: NA },
      { name: 'Import/Export ID', path: 'Import_ExportID', component: NA },
    ],
  },
  {
    name: 'Project',
    icon: payments,
    path: 'project',
    children: [
      { name: 'Main', path: '/Main', component: NA },
      { name: 'Agreements', path: '/Agreements', component: NA },
      { name: 'Invoices', path: '/FindInvoices', component: NA },
      { name: 'Payments', path: '/FindPayments', component: NA },
      { name: 'Payments Groups', path: '/FindArPaymentsGroups', component: NA },
      { name: 'Reports', path: '/ListReports', component: NA },
    ],
  },
  {
    name: 'SFA',
    icon: payments,
    path: 'Sfa',
    children: [
      { name: 'Main', path: '/Main', component: NA },
      { name: 'Agreements', path: '/Agreements', component: NA },
      { name: 'Invoices', path: '/FindInvoices', component: NA },
      { name: 'Payments', path: '/FindPayments', component: NA },
      { name: 'Payments Groups', path: '/FindArPaymentsGroups', component: NA },
      { name: 'Reports', path: '/ListReports', component: NA },
    ],
  },
  {
    name: 'Scrum',
    icon: payments,
    path: 'scrum',
    children: [
      { name: 'Main', path: '/Main', component: NA },
      { name: 'Agreements', path: '/Agreements', component: NA },
      { name: 'Invoices', path: '/FindInvoices', component: NA },
      { name: 'Payments', path: '/FindPayments', component: NA },
      { name: 'Payments Groups', path: '/FindArPaymentsGroups', component: NA },
      { name: 'Reports', path: '/ListReports', component: NA },
    ],
  },
  {
    name: 'Work Effort',
    icon: payments,
    path: 'WorkEffort',
    children: [
      { name: 'Main', path: '/Main', component: NA },
      { name: 'Agreements', path: '/Agreements', component: NA },
      { name: 'Invoices', path: '/FindInvoices', component: NA },
      { name: 'Payments', path: '/FindPayments', component: NA },
      { name: 'Payments Groups', path: '/FindArPaymentsGroups', component: NA },
      { name: 'Reports', path: '/ListReports', component: NA },
    ],
  },
  {
    name: 'Extra',
    icon: payments,
    path: 'extra',
    children: [
      { name: 'Main', path: '/Main', component: NA },
      { name: 'Agreements', path: '/Agreements', component: NA },
      { name: 'Invoices', path: '/FindInvoices', component: NA },
      { name: 'Payments', path: '/FindPayments', component: NA },
      { name: 'Payments Groups', path: '/FindArPaymentsGroups', component: NA },
      { name: 'Reports', path: '/ListReports', component: NA },
    ],
  },
];

function formatter(data, parentPath = '/gui/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(
        item.children,
        `${parentPath}${item.path}/`,
        item.authority,
      );
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
