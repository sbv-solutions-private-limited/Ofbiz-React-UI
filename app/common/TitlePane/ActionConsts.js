export const ACTION_TYPE_LIST = 'list';
export const ACTION_TYPE_SINGLE_SELECTION = 'singleSelection';
export const ACTION_TYPE_MULTIPLE_SELECTION = 'multiSelection';
export const ACTION_TYPE_DELETE_FROM_TABLE = 'deleteFromTable';
export const ACTION_TYPE_BYID = 'byId';
export const ACTION_TYPE_DELETE = 'delete';
export const ACTION_TYPE_NEW = 'new';
export const ACTION_TYPE_EDIT = 'edit';
export const ACTION_TYPE_VIEW = 'view';
export const ACTION_TYPE_CLOSE = 'close';
export const ACTION_TYPE_SAVE = 'save';
export const ACTION_TYPE_SAVEALL = 'saveall';
export const ACTION_TYPE_UPDATE = 'update';
export const ACTION_TYPE_ISEXISTS = 'isExists';
export const ACTION_TYPE_LINE_ITEMS = 'lineItems';


// SearchForm Code, Select status
export const CODE_PLACEHOLDER = 'Enter Code';
export const SELECT_PLACEHOLDER = 'Select status';
export const SELECT_BLOCKED = 'Select---';
export const LEGEND_UNBLOCKED = 'UnBlocked';
export const LEGEND_NONE = 'None';


//Agreements actions
export const ACTION_TYPE_SAVE_AGREEMENT = 'saveAgreement';
export const ACTION_TYPE_SAVE_AGREEMENT_TERM = 'saveAgreementTerm';
export const ACTION_TYPE_SAVE_AGREEMENT_ITEM = 'saveAgreementItem';
export const ACTION_TYPE_SAVE_AGREEMENT_PROMOTIONS ='saveAgreementPromotions';
export const ACTION_TYPE_SAVE_AGREEMENT_PRODUCTS ='saveAgreementProducts';
export const ACTION_TYPE_SAVE_AGREEMENT_PARTY = 'saveAgreementParty';
export const ACTION_TYPE_SAVE_AGREEMENT_GEO = 'saveAgreementGeo';
export const ACTION_TYPE_SAVE_AGREEMENT_FACILITIES = 'saveAgreementFacilities';
export const ACTION_TYPE_SAVE_AGREEMENT_WORKEFFORT = 'saveAgreementWorkEffort';
export const ACTION_TYPE_SAVE_AGREEMENT_ROLES = 'saveAgreementRoles';
export const ACTION_TYPE_SAVE_AGREEMENT_CONTENTS = 'saveAgreementContents';
export const ACTION_TYPE_UPDATE_AGREEMENT = 'updateAgreement';
export const ACTION_TYPE_COPY_AGREEMENT = 'copyAgreement';
export const ACTION_TYPE_UPDATE_AGREEMENT_TERM = 'updateAgreementTerm';
export const ACTION_TYPE_AGREEMENT_DELETE = 'deleteAgreementTerm';
export const ACTION_TYPE_AGREEMENT_ITEM_DELETE = 'deleteAgreementItem';
export const ACTION_TYPE_UPDATE_AGREEMENT_ITEM = 'updateAgreementItem';
export const ACTION_TYPE_AGREEMENT_WORKEFFORT_DELETE = 'deleteAgreementWorkEffort';

//invoice 
export const ACTION_TYPE_UPDATE_INVOICE = 'updateInvoice';
export const ACTION_TYPE_SAVE_SET_INVOICE_STATUS = 'setInvoiceStatus';
export const ACTION_TYPE_SAVE_COPY_INVOICE = 'copyInvoice';
export const ACTION_TYPE_SAVE_MASSCHANGE_INVOICE_STATUS ='massChangeInvoiceStatus';
export const ACTION_TYPE_SAVE_INVOICE_ITEM ='saveInvoiceItem'
export const ACTION_TYPE_INVOICE_ITEM_DELETE = 'removeInvoiceItem'
export const ACTION_TYPE_SAVE_INVOICE_ROLES= 'saveInvoiceRoles';
export const ACTION_TYPE_UPDATE_INVOICE_ROLES = 'updateInvoiceRole';
export const ACTION_TYPE_INVOICE_ROLE_DELETE = 'removeInvoiceRole';
export const ACTION_TYPE_SAVE_INVOICE_TERMS = 'saveInvoiceTerm';
export const ACTION_TYPE_SAVE_INVOICE_SEND_EMAIL = 'sendInvoicePerEmail';

//Payment   
export const ACTION_TYPE_UPDATE_PAYMENT = 'updatePayment';      //NW
export const ACTION_TYPE_PAYMENT_APPLICATION_ITEM_DELETE = 'removePaymentApp'; //NW
export const ACTION_TYPE_SET_PAYMENT_STATUS = 'setPaymentStatus';

// payment groups
export const ACTION_TYPE_SAVE_PAYMENT_GROUP_MEMBERS = 'savePaymentGroupMember';
export const ACTION_TYPE_UPDATE_PAYMENT_GROUP = 'updatePaymentGroup';
export const ACTION_TYPE_PAYMENT_GROUP_DELETE = 'removePaymentGroup';
export const ACTION_TYPE_UPDATE_PAYMENT_GROUP_MEMBERS = 'updatePaymentGroupMember';
export const ACTION_TYPE_PAYMENT_GROUP_MEMBER_DELETE = 'removePaymentGroupMember';
export const ACTION_TYPE_SAVE_PAYMENT_APPLICATIONS = 'createPaymentAndApplication';

//FIND VENDORS
export const ACTION_TYPE_SAVE_VENDORS = 'saveVendors'
export const ACTION_TYPE_UPDATE_VENDORS ='updateVendors';

// Transaction
export const ACTION_TYPE_SAVE_AUTH_TRANS = 'authTransaction';    // nw
export const ACTION_TYPE_SAVE_CAP_TRANS = 'manualForcedCcTransaction';

// Payment Gateway COnfig
export const ACTION_TYPE_UPDATE_PAYMENT_GATEWAY_CONFIG   = 'updatePaymentGatewayConfig';
export const ACTION_TYPE_UPDATE_PAYMENT_GATEWAY_CONFIG_CLEARCOMMERCE_CONFIG = 'updatePaymentGatewayConfigClearCommerce';
export const ACTION_TYPE_UPDATE_PAYMENT_GATEWAY_CONFIG_TYPE = 'updatePaymentGatewayConfigType';
export const ACTION_TYPE_UPDATE_PAYMENT_GATEWAY_AUTHORIZE_NET_CONFIG = 'updateConfigAUTHORIZE_NET_CONFIG';
export const ACTION_TYPE_UPDATE_PAYMENT_GATEWAY_CONFIG_CYBERSOURCE_CONFIG = 'updateConfigCYBERSOURCE_CONFIG';
export const ACTION_TYPE_UPDATE_PAYMENT_GATEWAY_CONFIG_IDEAL_CONFIG = 'updateConfigIDEAL_CONFIG';
export const ACTION_TYPE_UPDATE_PAYMENT_GATEWAY_CONFIG_EWAY_CONFIG = 'updateConfigEWAY_CONFIG';
export const ACTION_TYPE_UPDATE_PAYMENT_GATEWAY_CONFIG_PAYFLOWPRO_CONFIG = 'updateConfigPAYFLOWPRO_CONFIG';
export const ACTION_TYPE_UPDATE_PAYMENT_GATEWAY_CONFIG_PAYPAL_CONFIG = 'updateConfigPAYPAL_CONFIG';
export const ACTION_TYPE_UPDATE_PAYMENT_GATEWAY_CONFIG_SAGEPAY_CONFIG = 'updateConfigSAGEPAY_CONFIG';
export const ACTION_TYPE_UPDATE_PAYMENT_GATEWAY_CONFIG_SECUREPAY_CONFIG = 'updateConfigSECUREPAY_CONFIG';
export const ACTION_TYPE_UPDATE_PAYMENT_GATEWAY_WORLDPAY_CONFIG = 'updateConfigWORLDPAY_CONFIG';

//Billing Account

export const ACTION_TYPE_SAVE_BILLINGACCOUNT = 'saveBillingAccount';
export const ACTION_TYPE_UPDATE_BILLINGACCOUNT  = 'updateBillingAccount';
export const ACTION_TYPE_SAVE_BILLING_ACCOUNT_ROLES = 'saveBillingAccountRoles';
export const ACTION_TYPE_UPDATE_BILLING_ACCOUNT_ROLES = 'updateBillingAccountRoles';
export const ACTION_TYPE_BILLINGACCOUNT_DELETE = 'removeBillingAccountRoles';
export const ACTION_TYPE_SAVE_BILLING_TERM = 'saveBillingAccountTerms';
export const ACTION_TYPE_UPDATE_BILLING_TERM = 'updateBillingAccountTerms';
export const ACTION_TYPE_BILLING_DELETE = 'removeBillingAccountTerms';

//FA
export const ACTION_TYPE_SAVE_FA = 'createFinancialAccount';
export const ACTION_TYPE_UPDATE_FA = 'updateFinancialAccount';
export const ACTION_TYPE_REMOVE_FA = 'deleteFinancialAccount';
export const ACTION_TYPE_SAVE_FINANCIAL_ACCOUNT_ROLES  = 'saveFARoles';
export const ACTION_TYPE_UPDATE_FINANCIAL_ACCOUNT_ROLES = 'updateFARoles'
export const ACTION_TYPE_FINACCOUNT_DELETE = 'delFARoles';
export const ACTION_TYPE_SAVE_FIN_TRANS = 'saveFinTrans'
export const ACTION_TYPE_REMOVE_FAT = 'removeFAtrans';
export const ACTION_TYPE_SAVE__DEP_WITH_PAY = 'saveDepWithPay';
export const ACTION_TYPE_SAVE_AUTH = 'saveFAauth';
export const ACTION_TYPE_EXPIRE_FA_AUTH = 'delFAauth';
export const ACTION_TYPE_SAVE_RECO = 'saveReco';
export const ACTION_TYPE_REC_DELETE= 'delRec';
export const ACTION_TYPE_UPDATE_RECO = 'updateRec';
export const ACTION_TYPE_UPDATE_TAXAuth = 'updateTaxAuth';
export const ACTION_TYPE_ADD_TAX_AUTH_CAT = 'saveTaxAuthCat';
export const ACTION_TYPE_TAX_AUTH_CAT_DELETE = 'delTaxAuthCat';
export const ACTION_TYPE_SAVE_ASSO = 'saveAssociations';
export const ACTION_TYPE_DEL_ASSO = 'delAssociations';
export const ACTION_TYPE_SAVE_GLA = 'saveGla';
export const ACTION_TYPE_DEL_GLA = 'delGLA';
export const ACTION_TYPE_SAVE_PR = 'savePR';
export const ACTION_TYPE_DEL_PR = 'delPR';
export const ACTION_TYPE_UPDATE_PR = 'updatePR';
export const ACTION_TYPE_SAVE_PARTIES = 'saveParties';
export const ACTION_TYPE_UPDATE_PARTIES = 'updateParties';
export const ACTION_TYPE_DEL_PARTIES = 'delPaties';