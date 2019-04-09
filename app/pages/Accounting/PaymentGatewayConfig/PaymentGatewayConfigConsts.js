export const NAMESPACE = 'PaymentGatewayConfig_Accounting';
export const PAGE_TITLE = 'Payment Gateway Config';
export const PAGE_TITLE_TAGLINE =
  'Payment Gateway Config Accounting details - for OFBiz';
export const FORM_ID = 'PaymentForm';
export const NOTIFICATION_TITLE = 'Payment (List)';
export const PaymentGatewayConfigId = 'Payment Gateway Config Id';
export const PaymentGatewayConfigTypeId = 'Payment  Gateway Config Type Id';
export const PaymentGatewayConfigDescription =
  'Payment Gateway Config Description';
export const ParentTypeId = 'Parent Type Id';
export const PaymentGatewayConfigTypeDescription =
  'PGC Type Description';
export const HasTable = 'Has Table';
export const SourceId = 'Source Id';
export const GroupId = 'Group Id';
export const ClientId = 'Client Id';
export const username = 'username';
export const Pwd = 'Pwd';
export const userAlias = 'userAlias';
export const effectiveAlias = 'effective Alias';
export const processMode = 'processMode';
export const ServerURL = 'Server URL';
export const enableCVM = 'enable CVM';
export const TransactionURL = 'Transaction URL';
export const CertificateAlias = 'Certificate Alias';
export const AuthorizeDotNetAPIVersion = 'Authorize Dot Net API Version ';
export const DelimitedData = 'Delimited Data';
export const DelimitedChar = ' Delimited Char ';
export const CardPresentAPIVersion = ' Card Present API Version';
export const CardPresentMarketType = ' Card Present Market Type ';
export const CardPresentDeviceType = 'Card Present Device Type ';
export const MethodonlyCCsupported = 'Method (only CC supported) ';
export const EmailtoCustomer = 'Email to Customer ';
export const EmailtoMerchant = 'Email to Merchant ';
export const RelayResponse = 'Relay Response ';
export const TransactionKey = 'Transaction Key ';
export const TransDescription = 'Trans Description';
export const DuplicateWindow = 'Duplicate Window ';
export const MerchantId = 'Merchant Id';
export const CyberSourceAPIVersion = 'CyberSource API Version ';
export const EnableProductionMode = 'Enable Production Mode';
export const Directory =
  'Directory of the keys from CyberSource (Generate using online tools)';
export const keystore =
  ' Name of the keystore (if different then "merchantID.p12") ';
export const Logtransactioninformation = 'Log transaction information';
export const Logdirectory = 'Log directory ';
export const Maxlogsize = 'Max log size (megabytes) ';
export const MerchantDescription = ' Merchant Description ';
export const MerchantContact = 'Merchant Contact ';
export const AutoBillInAuthorization = ' Auto-Bill In Authorization (Capture) ';
export const UseDAVInAuthorization =
  ' Use DAV In Authorization -- May not be supported any longer ';
export const UseFraudScoringInAuthorization =
  ' Use Fraud Scoring In Authorization -- May not be supported any longer ';
export const IgnoreAVSResults = ' Ignore AVS Results ';
export const DisableAVSforCapture =
  ' Disable AVS for Capture -- May not be supported any longer ';
export const AvsDeclineCodes =
  ' Avs Decline Codes -- May not be supported any longer ';
export const MerchantSubId = 'Merchant Sub Id';
export const MerchantReturnURL = 'Merchant Return U R L';
export const AcquirerURL = 'Acquirer U R L';
export const AcquirerTimeout = 'Acquirer Timeout';
export const PrivateCert = 'Private Cert';
export const AcquirerKeyStoreFilename = 'Acquirer Key Store Filename ';
export const AcquirerKeyStorePassword = 'Acquirer Key Store Password ';
export const MerchantKeyStoreFilename = 'Merchant Key Store Filename ';
export const ExpirationPeriod = 'Expiration Period ';
export const MerchantKeyStorePassword = 'Merchant Key Store Password ';
export const CustomerId = 'Customer Id ';
export const RefundPwd = ' Refund Pwd ';
export const TestMode = 'Test Mode';
export const EnableCvn = 'Enable Cvn';
export const EnableBeagle = 'Enable Beagle';
export const ProcessTimeout = 'Process Timeout';
export const EnableAmountRound = 'Enable Amount Round ';
export const VendorName = 'Vendor Name';
export const ProductionHost = ' Production Host ';
export const TestingHost = 'Testing Host';
export const Mode = ' Mode ';
export const ProtocolVersion = 'Protocol Version ';
export const AuthenticationType = 'Authentication Type ';
export const AuthenticationUrl = 'Authentication Url ';
export const AuthorisationType = 'Authorisation Type ';
export const AuthorisationUrl = ' Authorisation Url ';
export const ReleaseType = ' Release Type ';
export const ReleaseUrl = ' Release Url ';
export const VoidUrl = ' Void Url ';
export const RefundUrl = 'Refund Url';
export const ReleaseTypeConst = [
  { value: 'CANCEL', label: 'Cancel' },
  { value: 'ABORT', label: 'Abort' },
];
export const AuthorisationTypeConst = [
  { value: 'AUTHORISE', label: 'Authorise' },
  { value: 'RELEASE', label: 'Release' },
];
export const AuthenticationTypeConst = [
  { value: 'PAYMENT', label: 'Payment' },
  { value: 'AUTHENTICATE', label: 'Authenticate' },
  { value: 'DEFERRED', label: 'Deferred' },
];
export const ModeTypeConst = [
  { value: 'TEST', label: 'Test' },
  { value: 'PRODUCTION', label: 'Production' },
];
export const BusinessEmail = 'Business Email';
export const ApiUserName = 'Api User Name';
export const ApiPassword = 'Api Password ';
export const ApiSignature = ' Api Signature ';
export const ApiEnvironment = 'Api Environment ';
export const NotifyUrl = 'Notify Url ';
export const ImageUrl = 'Image Url ';
export const ConfirmTemplate = 'Confirm Template ';
export const ConfirmUrl = 'Confirm Url';
export const ShippingCallbackUrl = 'Shipping Callback Url ';
export const RequireConfirmedShipping = 'Require Confirmed Shipping ';
export const CertsPath = 'Certs Path';
export const HostAddress = ' Host Address ';
export const HostPort = ' Host Port ';
export const Timeout = ' Timeout ';
export const ProxyAddress = ' Proxy Address ';
export const ProxyPort = ' Proxy Port ';
export const ProxyLogon = ' Proxy Logon ';
export const ProxyPassword = 'Proxy Password ';
export const Vendor = ' Vendor ';
export const UserId = ' User Id ';
export const Partner = 'Partner';
export const CheckAvs = 'Check Avs';
export const CheckCvv2 = 'Check Cvv2 ';
export const PreAuth = ' Pre Auth ';
export const EnableTransmit = 'EnableTransmit';
export const LogFileName = 'Log File Name';
export const LoggingLevel = 'Logging Level ';
export const StackTraceOn = 'Stack Trace On ';
export const RedirectUrl = 'Redirect Url';
export const ReturnUrl = 'Return Url ';
export const CancelReturnURL = ' Cancel Return URL ';
export const MaxLogFileSize = 'MaxLog File Size';
export const WorldPayinstanceId = 'WorldPay instance Id';
export const expirationPeriod = 'expiration Period';
export const LoggingLevelDropdown = [
  { value: '6', label: 'Logging Off' },
  { value: '5', label: 'Logging Severity Fatal' },
  { value: '4', label: 'Logging Severity Error' },
  { value: '3', label: 'Logging Severity Warn' },
  { value: '2', label: 'Logging Severity Info' },
  { value: '1', label: 'Logging Severity Debug' },
];
export const returnUrl = 'return Url';
export const LABEL_NOTAVAILABLE = '-NA-';
export const LEGEND_ACTIVE = 'Active';
export const LEGEND_INACTIVE = 'Inactive';
export const LEGEND_BLOCKED = 'Blocked';
export const LEGEND_BLOCKED_YES = 'Yes';
export const LEGEND_BLOCKED_NO = 'No';
export const STATUS_LABEL = 'Status';
export const BLOCK_LABEL = 'Blocked';
export const FromPartyID_LABEL = 'From Party ID';
export const FromPartyID_PLACEHOLDER = 'Enter From Party ID';
export const ToPartyID_LABEL = 'To Party ID';
export const ToPartyID_PLACEHOLDER = 'Enter To Party ID';
export const InvoiceType_LABEL = 'Invoice Type';
export const PaymentMethodType_LABEL = 'Payment Method Type';
export const PaymentMethodId_LABEL = 'Payment Method Id';
export const ReferenceNo = 'Reference No';
export const PaymentPreferenceID = 'Payment Preference ID';
export const InvoiceType_PLACEHOLDER = 'select Invoice Type';
export const PaymentTypeConst = [
  { value: 'Customer Payment', label: 'Customer Payment' },
  { value: 'Customer Deposit', label: 'Customer Deposit' },
  { value: 'Interest Receipt', label: 'Interest Receipt' },
  { value: 'Gift Certificate Deposit', label: 'Gift Certificate Deposit' },
];
export const LookupGLAccount_title = 'Lookup GL Account';
export const paymentType_LABEL = 'Payment Type';
export const InvoiceID_LABEL = 'Invoice ID';
export const InvoiceID_PLACEHOLDER = 'Enter Invoice ID';
export const InvoiceIdType = [
  { value: 'Contains', label: 'Contains' },
  { value: 'Equals', label: 'Equals' },
  { value: 'Begins With', label: 'Begins With' },
  { value: 'Is Empty', label: 'Is Empty' },
  { value: 'Not Equal', label: 'Not Equal' },
];
export const InvoiceTypeConst = [
  { value: 'Sales Invoice', label: 'Sales Invoice' },
  { value: 'Purchase Return', label: 'Purchase Return' },
  { value: 'Interest', label: 'Interest' },
];
export const TFdropDown = [
  { value: 'TRUE', label: 'True' },
  { value: 'FALSE', label: 'False' },
];
export const PaymentGatewayResponseId_LABEL = 'Payment Gateway Response Id';
export const PaymentGatewayResponseId_PLACEHOLDER =
  'Enter Payment Gateway Response Id';
export const Comments_LABEL = 'Comments: ';
export const Comments_PLACEHOLDER = 'Enter Comments';
export const ReferenceNumber_LABEL = 'Reference Number: ';
export const ReferenceNumber_PLACEHOLDER = 'Enter Reference Number';
export const PaymentID_LABEL = 'Payment ID';
export const PaymentID_PLACEHOLDER = 'Enter Payment ID';
export const BillingAccountID_PLACEHOLDER = 'Enter Billing Account ID';
export const InvoiceFromDate_LABEL = 'Invoice From Date ';
export const InvoiceFromDate_PLACEHOLDER = 'Enter Invoice From Date ';
export const OrganizationPartyId = 'Organization Party Id';
export const DaysOffset = ' Days Offset';
export const enableCVMDropdown = [
  { value: 'Y', label: 'Yes' },
  { value: 'N', label: 'No' },
];
export const processModeDropdown = [
  { value: 'Y', label: 'Approve' },
  { value: 'N', label: 'Decline' },
  { value: 'R', label: 'Random' },
  { value: 'P', label: 'Production' },
];
export const AuthorizationModeDropdown = [
  { value: 'A', label: 'Full-authorize' },
  { value: 'E', label: 'Pre-Auth' },
];
export const testModeDropdown = [
  { value: '100', label: 'Approve' },
  { value: '101', label: 'Cancelled' },
  { value: '0', label: 'Live' },
];
export const AuthorizationMode = 'Authorization Mode';
export const DeliveryAddressEditable = ' Delivery Address Editable ';
export const SuppressLanguageMenu = ' Suppress Language Menu ';
export const ShopperlanguageId = 'Shopper language Id';
export const Currencydropdowntobehidden = 'Currency drop-down to be hidden ';
export const Contactdetailstobehidden = ' Contact details to be hidden ';
export const Contactdetailsnoneditable = ' Contact details non-editable ';
export const OverrideGlAccountId_LABEL = 'Override Gl Account Id';
export const GLAccountID_LABEL = 'GL Account ID';
export const OverrideGlAccountId_PLACEHOLDER = 'Enter Override Gl Account Id';
export const NAME_LABEL = 'Name';
export const Type_LABEL = 'Type';
export const GLAccountClass_LABEL = 'GL Account Class';
export const InvoiceToDate_LABEL = 'Invoice TO Date ';
export const InvoiceToDate_PLACEHOLDER = 'Enter Invoice To Date ';
export const To_Date = [
  { value: 'Less Than', label: 'Less Than' },
  { value: 'Up TO Day', label: 'Up To Day' },
  { value: 'Up Through Day', label: 'Up Through Day' },
  { value: 'Is Empty', label: 'Is Empty' },
];
export const taxAuthGeoId = 'tax Auth Geo Id';
export const WellKnownText_LABEL = 'Well Known Text';
export const Abbreviation_LABEL = 'Abbreviation';
export const SecondaryCode_LABEL = 'Secondary Code';
export const Code_LABEL = 'Code';
export const Amount_LABEL = 'Amount';
export const Amount_PLACEHOLDER = 'Enter Amount';
export const PaymentType_LABEL = 'Payment Type';
export const PaymentType_PLACEHOLDER = 'Enter Payment Type';
export const PartybyName_title = 'Lookup Party by Name';
export const PartyID_LABEL = 'Party ID';
export const PartyID_PLACEHOLDER = 'Enter Party ID';
export const partyTypeID_LABEL = 'Party Type ID';
export const PartyTypeID_PLACEHOLDER = 'Enter party Type ID';
4;
export const FirstName_LABEL = 'First Name';
export const Group_Name_LABEL = 'Group Name';
export const BillingAccountbyName_title = 'Lookup Billing Account by Name';
export const BillingAcctID_LABEL = 'Billing Acct ID';
export const description_LABEL = 'Description';
export const AccountingExternalAccountId_LABEL =
  'Accounting External Account Id';
export const InvoiceDate_LABEL = 'Invoice Date';
export const DueDate_LABEL = 'Due Date';
export const DueDate_PLACEHOLDER = 'Enter Due Date';
export const RoleTypeId_LABEL = 'Role Type Id';
export const Currency_LABEL = 'Currency';
export const Currency_PLACHOLDER = 'Enter Currency';
export const RecurrenceInfoId_LABEL = 'Recurrence Info Id';
export const RecurrenceInfoId_PLACEHOLDER = 'Enter Recurrence Info Id';
export const InvoiceMessage_LABEL = 'Invoice Message';
export const InvoiceMessage_PLACEHOLDER = 'Enter Invoice Message';
export const FinAccountId_LABEL = 'Fin Account Id';
export const FinAccountId_PLACEHOLDER = 'Enter Fin Account Id';
export const REMARKS_ROWS = 3;
export const REMARKS_MAXSIZE = 500;
export const REMARKS_ERROR_MSG_MAXSIZE = 'Maximum 500 characters only allowed.';
export const REMARKS_ERROR_PATTERN = /^[a-zA-Z0-9 -,._&()*%/?^~\\[\]:@#$']+$/;
export const REMARKS_ERROR_MSG_PATTERN =
  'Accepts only alphabets, numbers and following Symbols: ,._&():%*/@#$^~?';
export const CODE_PLACEHOLDER = 'Enter Code';
export const SELECT_PLACEHOLDER = 'Select status';
export const SELECT_BLOCKED = 'Select---';
export const LEGEND_UNBLOCKED = 'UnBlocked';
export const LEGEND_NONE = 'None';
export const LEGEND_NAME_STARTBY = 'Name starts by';
export const POPCONFIRM_TITLE = 'Are you sure to delete ?';
export const POPCONFIRM_OK_TEXT = 'Delete';
export const POPCONFIRM_CANCEL_TEXT = 'Cancel';
export const POPCONFIRM_PLACEMENT = 'topRight';
export const POPCONFIRM_TITLE_APPROVE =
  'Are you sure to Approve this Department ?';
export const POPCONFIRM_OK_TEXT_APPROVE = 'Approve';
export const COLUMN_PaymentID = 'Payment ID';
export const COLUMN_PaymentType = 'Payment Type';
export const COLUMN_EffectiveDate = 'Effective Date';
export const COLUMN_ToParty = 'To Party';
export const COLUMN_FromParty = 'From Party';
export const COLUMN_Status = 'Status';
export const COLUMN_Amount = 'Amount';
export const COLUMN_DueAmount = 'Due Amount';
export const COLUMN_ACTIONS = 'Actions';
export const COLUMN_NAME_PLACEHOLDER = 'Name or Code';
export const COLUMN_Comments = 'Comments';
export const COLUMN_GLAccountID = 'GL Account ID';
export const COLUMN_Name = 'Name';
export const Column_Type = 'Type';
export const COLUMN_GLAccountClass = 'GL Account Class';
export const PaymentMethod_LABEL = 'Payment Method Type	';
export const COLUMN_BillingAcctID = 'Billing Acct ID';
export const COLUMN_Description = 'Description';
export const COLUMN_AccountingExternalAccountId =
  'Accounting External Account Id';
export const CardType_LABEL = 'Card Type';
export const COLUMN_PartyID = 'Party ID';
export const COLUMN_PartyTypeId = 'Party Type Id';
export const COLUMN_FirstName = 'First name';
export const COLUMN_LastName = 'Last name';
export const COLUMN_GroupName = 'Group Name';
export const FromDate_LABEL = 'From Date';
export const ThroughDate_LABEL = 'Through Date';
export const ToPartyID_Organization_LABEL = 'Organization Party ID';
export const ToPartyID = 'To Party ID';
export const StatusID_LABEL = 'Status ID';
export const ActualCurrencyAmount_LABEL = 'Actual Currency Amount';
export const ActualCurrencyUomId_LABEL = 'Actual Currency Uom Id';
export const finAccountTransId_LABEL = 'fin Account Trans Id';
export const EffectiveDate_LABEL = 'Effective Date';
export const COLUMN_InvoiceID = 'Invoice ID';
export const COLUMN_ItemNo = 'Item No';
export const COLUMN_AmountApplied = 'Amount Applied';
export const NOTE = 'Leave empty for maximum amount';
export const Outstandingamount = 'Outstanding amount';
export const TaxAuthGeoID = 'Tax Auth Geo ID';
export const GeoID_LABEL = 'GeoID';
export const GeoTypeID_LABEL = 'Geo Type ID';
export const BillingAccountID = 'Billing Account ID';
export const TopaymentID = 'To payment ID';
export const InvoiceID = 'InvoiceID';
export const Status_LABEL = 'Status';
export const LookupInvoices_title = 'Lookup Invoices';
export const from_Date_LABEL = 'From Date';
export const COLUMN_InvoiceType = 'Invoice Type';
export const Description_LABEL = 'Description';
export const LookupPayment_title = 'Lookup Payment';
export const PaymentTypeID_LABEL = 'Payment Type ID';
export const AmountApplied_LABEL = 'Amount Applied';
export const BillingAccountID_LABEL = 'Billing Account ID';
export const Status_Invoice_tags = [
  'Cancelled',
  'Confirmed',
  'Not Paid',
  'Received',
  'Sent',
  'Voided',
];
export const TAB1_CAPTION = 'Overview';
