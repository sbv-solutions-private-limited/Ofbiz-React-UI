// defined all local constants
export const NAMESPACE = 'Agreements_Accounting';

export const PAGE_TITLE = 'Agreements';
export const PAGE_TITLE_TAGLINE = 'Agreements Accounting details - for OFBiz';
export const FORM_ID = 'AgreementsForm';
export const NOTIFICATION_TITLE = 'Agreements (List)';

// defined to show Form Field Labels, Placeholders, Error Messages constants
export const AgreementGeographicalApplic_title =
  'New Agreement Geographical Applic';
export const FromPartyID_LABEL = 'From Party ID';
export const FromPartyID_PLACEHOLDER = 'Enter From Party ID';
export const ToPartyID_LABEL = 'To Party ID';
export const ToPartyID_PLACEHOLDER = 'Enter To Party ID';
export const InvoiceType_LABEL = 'Invoice Type';
export const InvoiceType_PLACEHOLDER = 'select Invoice Type';
export const InvoiceTypeConst = [{ value: '', label: '' }];
export const InvoiceID_LABEL = 'Invoice ID';
export const InvoiceID_PLACEHOLDER = 'Enter Invoice ID';
export const InvoiceIdType = [
  { value: 'Contains', label: 'Contains' },
  { value: 'Equals', label: 'Equals' },
  { value: 'Begins With', label: 'Begins With' },
  { value: 'Is Empty', label: 'Is Empty' },
  { value: 'Not Equal', label: 'Not Equal' },
];
export const LookupWorkEffortbyName_title = 'Lookup Work Effort by Name';
export const AgreementDate_LABEL = 'Agreement Date';
export const RoleTypeIdFrom_LABEL = 'Role Type Id From';
export const RoleTypeIdTo_LABEL = 'Role Type Id To';
export const Description_LABEL = 'Description: ';
export const Description_PLACEHOLDER = 'Enter Description';
export const ReferenceNumber_LABEL = 'Reference Number: ';
export const ReferenceNumber_PLACEHOLDER = 'Enter Reference Number';
export const BillingAccountID_LABEL = 'Billing Account ID';
export const BillingAccountID_PLACEHOLDER = 'Enter Billing Account ID';
export const InvoiceFromDate_LABEL = 'Invoice From Date ';
export const TextData_LABEL = 'Text Data';
export const ThroughDate_LABEL = 'Through Date';
export const InvoiceFromDate_PLACEHOLDER = 'Enter Invoice From Date ';
export const from_Date = [
  { value: 'Same Day', label: 'Same Day' },
  { value: 'Equals', label: 'Equals' },
  {
    value: 'Greater Than From Day Start',
    label: 'Greater Than From Day Start',
  },
  { value: 'Greater Than ', label: 'Greater Than From Day Start' },
];
export const InvoiceToDate_LABEL = 'Invoice TO Date ';
export const AgreementItemSeqId_LABEL = 'Agreement Item Seq Id';
export const WorkEffortId_LABEL = 'Work Effort Id';
export const InvoiceToDate_PLACEHOLDER = 'Enter Invoice To Date ';
export const To_Date = [
  { value: 'Less Than', label: 'Less Than' },
  { value: 'Up TO Day', label: 'Up To Day' },
  { value: 'Up Through Day', label: 'Up Through Day' },
  { value: 'Is Empty', label: 'Is Empty' },
];
export const File_LABEL = 'File';
export const StatusID_LABEL = 'Status ID';
export const AgreementContentTypeId_LABEL = 'Agreement Content Type Id';
export const ContentTypeId_LABEL = 'Content Type Id';
export const AddAgreementContent_LABEL = 'Add Agreement Content';
export const COLUMN_ContentName = 'Content Name';
export const COLUMN_AgreementContentTypeId = 'Agreement Content Type Id';
export const COLUMN_StatusID = 'Status ID';
export const COLUMN_ContentTypeId = 'Content Type Id';
export const AgreementRoles_title = 'Agreement Roles';
export const RoleTypeID_LABEL = 'Role Type ID';
export const COLUMN_RoleTypeID = 'Role Type ID';
export const AgreementRolesList = 'Agreement Roles List';
export const Options = ['Agreement Terms', 'Products', 'Party', 'Facilities'];
export const InvoiceItemType_LABEL = 'Invoice Item Type';
export const TermTypeId_LABEL = 'Term Type Id';
export const TermValue_LABEL = 'Term Value';
export const TermDays_LABEL = 'Term Days';
export const TextValue_LABEL = 'Text Value';
export const MinQuantity_LABEL = 'Min Quantity';
export const MaxQuantity_LABEL = 'Max Quantity';
export const LookupProduct_title = 'Lookup Product';
export const BrandName_LABEL = 'Brand Name';
export const InternalName_LABEL = 'Internal Name';
export const ProductType_LABEL = 'Product Type';
export const PrimaryCategory_LABEL = 'Primary Category';
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
export const NewPromotion_title = 'New Promotion';
export const ProductPromoId_LABEL = 'Product Promo Id';
export const description_LABEL = 'Description';
export const AccountingExternalAccountId_LABEL =
  'Accounting External Account Id';
export const InvoiceDate_LABEL = 'Invoice Date';
export const DueDate_LABEL = 'Due Date';
export const DueDate_PLACEHOLDER = 'Enter Due Date';
export const RoleTypeId_LABEL = 'Role Type Id';
export const Price_LABEL = 'Price';
export const ListAgreementItemParties = 'List Agreement Item Parties';
export const ListAgreementItemFacilities = 'List Agreement Item Facilities';
export const NewAgreementItemFacility_title = 'New Agreement Item Facility';
export const FacilityId_LABEL = 'Facility Id';
export const LookupFacility_title = 'Lookup Facility';
export const FacilityName_LABEL = 'Facility Name';
export const ParentFacilityId_LABEL = 'Parent Facility Id';
export const FacilityTypeId_LABEL = 'Facility Type Id';

export const Currency_LABEL = 'Currency';
export const Currency_PLACHOLDER = 'Enter Currency';
export const RecurrenceInfoId_LABEL = 'Recurrence Info Id';
export const RecurrenceInfoId_PLACEHOLDER = 'Enter Recurrence Info Id';
export const InvoiceMessage_LABEL = 'Invoice Message';
export const InvoiceMessage_PLACEHOLDER = 'Enter Invoice Message';
export const SequenceNum_LABEL = 'Sequence Num';
export const ListAgreementItemTerms = 'List Agreement Item Terms';
export const NewTerms_title = 'New Terms';
export const AgreementTypeId_LABEL = 'Agreement Type Id';
export const NewAgreementItem_title = 'New Agreement Item';
export const REMARKS_ROWS = 3;
export const REMARKS_MAXSIZE = 500;
export const REMARKS_ERROR_MSG_MAXSIZE = 'Maximum 500 characters only allowed.';
export const REMARKS_ERROR_PATTERN = /^[a-zA-Z0-9 -,._&()*%/?^~\\[\]:@#$']+$/;
export const REMARKS_ERROR_MSG_PATTERN =
  'Accepts only alphabets, numbers and following Symbols: ,._&():%*/@#$^~?';

// SearchForm Code, Select status
export const CODE_PLACEHOLDER = 'Enter Code';
export const SELECT_PLACEHOLDER = 'Select status';
export const SELECT_BLOCKED = 'Select---';
export const LEGEND_UNBLOCKED = 'UnBlocked';
export const LEGEND_NONE = 'None';
export const LEGEND_NAME_STARTBY = 'Name starts by';

// Table Popconfirm configs
export const POPCONFIRM_TITLE = 'Are you sure ?';
export const POPCONFIRM_OK_TEXT = 'Delete';
export const POPCONFIRM_CANCEL_TEXT = 'Cancel';
export const POPCONFIRM_PLACEMENT = 'topRight';

export const POPCONFIRM_TITLE_APPROVE =
  'Are you sure to Approve this Department ?';
export const POPCONFIRM_OK_TEXT_APPROVE = 'Approve';

export const GeoId_LABEL = 'Geo Id';

// Table Column Captions

export const COLUMN_Edit = 'Edit';
export const COLUMN_ProductId = 'Product Id';
export const COLUMN_FromPartyId = 'From Party Id';
export const COLUMN_ToPartyId = 'To Party Id';
export const COLUMN_RoleTypeId = 'Role Type Id';
export const COLUMN_AgreementTypeId = 'Agreement Type Id';
export const ProductId_LABEL = 'Product Id';
export const AgreementId_LABEL = 'Agreement Id';
export const FromDate_LABEL = 'From Date';
export const ToDate_LABEL = 'To Date';
export const COLUMN_ProductID = 'Product ID';
export const COLUMN_BrandName = 'Brand Name';
export const COLUMN_InternalName = 'Internal Name';
export const COLUMN_ProductType = 'Product Type';
export const COLUMN_AgreementItemTypeId = 'Agreement Item Type Id';
export const COLUMN_Currency = 'Currency';
export const COLUMN_AgreementText = 'Agreement Text';
export const COLUMN_AgreementImage = 'Agreement Image';
export const AgreementItemTypeId_LABEL = 'Agreement Item Type Id';
export const AgreementText_LABEL = 'Agreement Text';
export const COLUMN_InvoiceID = 'Invoice ID';
export const COLUMN_InvoiceType = 'Invoice Type';
export const COLUMN_InvoiceDate = 'Invoice Date';
export const COLUMN_ToParty = 'To Party';
export const COLUMN_FromParty = 'From Party';
export const COLUMN_Status = 'Status';
export const COLUMN_Amount = 'Amount';
export const COLUMN_DueAmount = 'Due Amount';
export const COLUMN_ACTIONS = 'Actions';
export const COLUMN_NAME_PLACEHOLDER = 'Name or Code';
export const COLUMN_ProductPromoName = 'Product Promo Name';
export const COLUMN_SequenceNum = 'Sequence Num';
export const COLUMN_ThroughDate = 'Through Date';
export const COLUMN_FromDate = 'From Date';
export const COLUMN_TermTypeId = 'Term Type Id';
export const COLUMN_InvoiceItemType = 'Invoice Item Type';
export const COLUMN_TermValue = 'Term Value';
export const COLUMN_TermDays = 'Term Days';
export const COLUMN_TextValue = 'Text Value';
export const COLUMN_MinQuantity = 'Min Quantity';
export const COLUMN_MaxQuantity = 'Max Quantity';
export const AgreementImage_LABEL = 'Agreement Image';
export const ListAgreementItems = 'List Agreement Items';
export const ListAgreementPromoAppls = 'List Agreement Promo Appls';
export const ListAgreementItemProducts = 'List Agreement Item Products';
export const NewProduct_title = 'New Product';
export const COLUMN_Name = 'Name';
export const COLUMN_BillingAcctID = 'Billing Acct ID';
export const COLUMN_Description = 'Description';
export const COLUMN_AccountingExternalAccountId =
  'Accounting External Account Id';
export const AmendmentofthePartytotheAgreement_title =
  'Amendment of the Party to the Agreement';
export const COLUMN_PartyID = 'Party ID';
export const COLUMN_PartyTypeId = 'Party Type Id';
export const COLUMN_FirstName = 'First name';
export const COLUMN_LastName = 'Last name';
export const COLUMN_GroupName = 'Group Name';
export const ListAgreementGeographicalApplic =
  'List Agreement Geographical Applic';
export const COLUMN_Theinternalname = 'The internal name';
export const COLUMN_price = 'price';
export const COLUMN_Release = 'Release';
export const COLUMN_FacilityName = 'Facility Name';
export const COLUMN_FacilityTypeId = 'Facility Type Id';
export const ContentList = 'Content List';
export const AddAgreementWorkEffortApplicList =
  'Add Agreement Work Effort Applic List';
export const COLUMN_AgreementItemSeqId = 'Agreement Item Seq Id';
export const COLUMN_WorkEffortId = 'Work Effort Id';
export const NewAgreementWorkEffort_title = 'New Agreement Work Effort';
// Tag
export const Status_Invoice_tags = [
  'In-Process',
  'Approved',
  'Sent',
  'Received',
  'Ready for Posting',
  'Paid',
  'Write Off',
  'Cancelled',
];

// Tab Captions at Tabbed pane
export const TAB1_CAPTION = 'Overview';
export const TAB2_CAPTION = 'Create Agreement';
export const TAB3_CAPTION = 'Details';
export const TAB4_CAPTION = 'Contact Persons';
export const TAB5_CAPTION = 'Comments';

export const roleTypeIdDropDown = [
  { value: 'MAIN_ROLE', label: 'MAIN ROLE' },
  { value: 'ACCOUNT_LEAD', label: 'ACCOUNT LEAD' },
  { value: 'ADMIN', label: 'ADMIN' },
  { value: 'AGENT', label: 'AGENT' },
  { value: 'AUTOMATED_AGENT_ROLE', label: 'AUTOMATED AGENT ROLE' },
  { value: 'CALENDAR_ROLE', label: 'CALENDAR ROLE' },
  { value: 'CLIENT', label: 'CLIENT' },
  { value: 'COMMEVENT_ROLE', label: 'COMMEVENT ROLE' },
  { value: 'CONSUMER', label: 'CONSUMER' },
  { value: 'CONTRACTOR', label: 'CONTRACTOR' },
  { value: 'CUSTOMER', label: 'CUSTOMER' },
  { value: 'DISTRIBUTION_CHANNEL', label: 'DISTRIBUTION CHANNEL' },
  { value: 'ISP', label: 'ISP' },
  { value: 'HOSTING_SERVER', label: 'HOSTING SERVER' },
  { value: 'MANUFACTURER', label: 'MANUFACTURER' },
  { value: 'ORGANIZATION_ROLE', label: 'ORGANIZATION ROLE' },
  { value: 'OWNER', label: 'OWNER' },
  { value: 'PROSPECT', label: 'PROSPECT' },
  { value: 'PERSON_ROLE', label: 'PERSON ROLE' },
  { value: 'REFERRER', label: 'REFERRER' },
  { value: 'REQUEST_ROLE', label: 'REQUEST ROLE' },
  { value: 'REQ_MANAGER', label: 'REQ MANAGER' },
  { value: 'REQ_REQUESTER', label: 'REQ REQUESTER' },
  { value: 'REQ_TAKER', label: 'REQ TAKER' },
  { value: 'REQ_RESPOND', label: 'REQ RESPOND' },
  { value: 'SFA_ROLE', label: 'SFA ROLE' },
  { value: 'SHAREHOLDER', label: 'SHAREHOLDER' },
  { value: 'SUBSCRIBER', label: 'SUBSCRIBER' },
  { value: 'VENDOR', label: 'VENDOR' },
  { value: 'VISITOR', label: 'VISITOR' },
  { value: 'WEB_MASTER', label: 'WEB MASTER' },
  { value: 'WORKFLOW_ROLE', label: 'WORKFLOW ROLE' },
  { value: 'ACCOUNTANT', label: 'ACCOUNTANT' },
  { value: 'ADDRESSEE', label: 'ADDRESSEE' },
  { value: 'ACCOUNT', label: 'ACCOUNT' },
  { value: 'ASSOCIATION', label: 'ASSOCIATION' },
  { value: 'BILL_FROM_VENDOR', label: 'BILL FROM VENDOR' },
  { value: 'BILL_TO_CUSTOMER', label: 'BILL TO CUSTOMER' },
  { value: 'BCC', label: 'BCC' },
  { value: 'BULK_CUSTOMER', label: 'BULK CUSTOMER' },
  { value: 'CAL_ATTENDEE', label: 'CAL ATTENDEE' },
  { value: 'CAL_DELEGATE', label: 'CAL DELEGATE' },
  { value: 'CAL_HOST', label: 'CAL HOST' },
  { value: 'CAL_ORGANIZER', label: 'CAL ORGANIZER' },
  { value: 'CAL_OWNER', label: 'CAL OWNER' },
  { value: 'CARRIER', label: 'CARRIER' },
  { value: 'COMPETITOR', label: 'COMPETITOR' },
  { value: 'CONTACT', label: 'CONTACT' },
  { value: 'CC', label: 'CC' },
  { value: 'ORIGINATOR', label: 'ORIGINATOR' },
  { value: 'DISTRIBUTOR', label: 'DISTRIBUTOR' },
  { value: 'END_USER_CUSTOMER', label: 'END USER CUSTOMER' },
  { value: 'HOUSEHOLD', label: 'HOUSEHOLD' },
  { value: 'INTERNAL_ORGANIZATIO', label: 'INTERNAL ORGANIZATIO' },
  { value: 'LEAD', label: 'LEAD' },
  { value: 'LTD_ADMIN', label: 'LTD ADMIN' },
  { value: 'ORGANIZATION_UNIT', label: 'ORGANIZATION UNIT' },
  { value: 'PARTNER', label: 'PARTNER' },
  { value: 'PLACING_CUSTOMER', label: 'PLACING CUSTOMER' },
  { value: 'REGULATORY_AGENCY', label: 'REGULATORY AGENCY' },
  { value: 'SALES_REP', label: 'SALES REP' },
  { value: 'SHIP_FROM_VENDOR', label: 'SHIP FROM VENDOR' },
  { value: 'SHIP_TO_CUSTOMER', label: 'SHIP TO CUSTOMER' },
  { value: 'SPONSOR', label: 'SPONSOR' },
  { value: 'SPOUSE', label: 'SPOUSE' },
  { value: 'SUPPLIER_AGENT', label: 'SUPPLIER AGENT' },
  { value: 'SUPPLIER', label: 'SUPPLIER' },
  { value: 'TAX_AUTHORITY', label: 'TAX_AUTHORITY' },
  { value: 'UNION', label: 'UNION' },
  { value: 'WF_OWNER', label: 'WF_OWNER' },
  { value: 'AFFILIATE', label: 'AFFILIATE' },
  { value: 'BUYER', label: 'BUYER' },
  { value: 'CASHIER', label: 'CASHIER' },
  { value: 'DIVISION', label: 'DIVISION' },
  { value: 'FAMILY_MEMBER', label: ' ' },
  { value: 'FAMILY_MEMBER', label: '' },
  { value: 'DIVISION', label: 'DIVISION' },
  { value: 'FAMILY_MEMBER', label: 'FAMILY_MEMBER' },
  { value: 'DEPARTMENT', label: 'DEPARTMENT' },
  { value: 'MANAGER', label: 'MANAGER' },
  { value: 'ORDER_CLERK', label: 'ORDER_CLERK' },
  { value: 'OTHER_INTERNAL_ORGAN', label: 'OTHER INTERNAL ORGAN' },
  { value: 'OTHER_ORGANIZATION_U', label: 'OTHER ORGANIZATION_U' },
  { value: 'PARENT_ORGANIZATION', label: 'PARENT ORGANIZATION' },
  { value: 'PACKER', label: 'PACKER' },
  { value: 'PICKER', label: 'PICKER' },
  { value: 'RECEIVER', label: 'RECEIVER' },
  { value: 'SHIPMENT_CLERK', label: 'SHIPMENT CLERK' },
  { value: 'STOCKER', label: 'STOCKER' },
  { value: 'SUBSIDIARY', label: 'SUBSIDIARY' },
  { value: 'WORKER', label: 'WORKER' },
  { value: 'EMAIL_ADMIN', label: 'EMAIL_ADMIN' },
  { value: 'LOGGEDIN', label: 'LOGGEDIN' },
  { value: 'CONTENT', label: 'CONTENT' },
  { value: 'CONTENT_ADMIN', label: 'CONTENT ADMIN' },
  { value: 'CONTENT_PUBLISHER', label: 'CONTENT PUBLISHER' },
  { value: 'CONTENT_EDITOR', label: 'CONTENT EDITOR' },
  { value: 'CONTENT_AUTHOR', label: 'CONTENT AUTHOR' },
  { value: 'CONTENT_USER', label: 'CONTENT USER' },
  { value: 'CONTENT_GUEST', label: 'CONTENT GUEST' },
  { value: 'ICAL_MEMBER', label: 'ICAL MEMBER' },
  { value: 'IMAGEAPPROVER', label: 'IMAGEAPPROVER' },
  { value: 'FAM_ASSIGNEE', label: 'FAM ASSIGNEE' },
  { value: 'FAM_SUPPLIER', label: 'FAM SUPPLIER' },
  { value: 'FAM_MANAGER', label: 'FAM MANAGER' },
  { value: 'FAM_WORKER', label: 'FAM WORKER' },
  { value: 'PROJECT_TEAM', label: 'PROJECT TEAM' },
  { value: 'CLIENT_MANAGER', label: 'CLIENT MANAGER' },
  { value: 'CLIENT_ANALYST', label: 'CLIENT ANALYST' },
  { value: 'CLIENT_BILLING', label: 'CLIENT BILLING' },
  { value: 'PROVIDER_MANAGER', label: 'PROVIDER MANAGER' },
  { value: 'PROVIDER_ACCOUNTING', label: 'PROVIDER ACCOUNTING' },
  { value: 'PROVIDER_ANALYST', label: 'PROVIDER ANALYST' },
  { value: 'PROVIDER_VALIDATOR', label: 'PROVIDER VALIDATOR' },
  { value: 'PROVIDER_FUNCTIONAL', label: 'PROVIDER TESTER' },
  { value: 'PROVIDER_TESTER', label: ' ' },
  { value: 'SCRUM_MEMBER', label: 'SCRUM MEMBER' },
  { value: 'PRODUCT_OWNER', label: 'PRODUCT OWNER' },
  { value: 'SCRUM_MASTER', label: 'SCRUM MASTER' },
  { value: 'SCRUM_TEAM', label: 'SCRUM TEAM' },
  { value: 'PRODUCT_OWNER_COMP', label: 'PRODUCT OWNER COMP' },
  { value: 'STAKEHOLDER', label: 'STAKEHOLDER' },
  { value: 'APPROVER', label: 'APPROVER' },
  { value: 'REVIEWER', label: 'REVIEWER' },
];

export const AgreementTypeIdDropDown = [
  { value: 'PRODUCT_AGREEMENT', label: 'PRODUCT AGREEMENT' },
  { value: 'PURCHASE_AGREEMENT', label: 'PURCHASE AGREEMENT' },
  { value: 'SALES_AGREEMENT', label: 'SALES AGREEMENT' },
  { value: 'EMPLOYMENT_AGREEMENT', label: 'EMPLOYMENT AGREEMENT' },
  { value: 'OTHER_AGREEMENT', label: 'OTHER AGREEMENT' },
  { value: 'COMMISSION_AGREEMENT', label: 'COMMISSION AGREEMENT' },
  { value: 'EULA', label: 'EULA' },
];

//work effort
export const WorkEffortTypeId = ' Work Effort Type Id';
export const Status_LABEL = 'Status';
export const LastStatusUpdateFrom_LABEL = 'LastStatus Update From';
export const LastStatusUpdateTo_LABEL = 'Last Status Update To';
export const WorkEffortPurposeTypeId = 'Work Effort Purpose Type Id';
export const WorkEffortParentId = 'Work Effort Parent Id';
export const Scope_LABEL = 'Scope';
export const PriorityFrom_LABEL = 'Priority From';
export const PriorityTo_LABEL = 'Priority To';
export const PercentCompleteFrom_LABEL = 'Percent Complete From';
export const PercentCompleteTo_LABEL = 'Percent Complete To';
export const WorkEffortName_LABEL = 'Work Effort Name';
export const ShowAsEnumId = 'Show As Enum Id';
export const SendNotificationEmail_LABEL = 'Send Notification Email';
export const LocationDesc_LABEL = 'Location Desc';
export const EstimatedStartDateFrom = 'Estimated Start Date From';
export const EstimatedStartDateTo = 'Estimated Start Date To';
export const EstimatedCompletionDateFrom = 'Estimated Completion Date From';
export const EstimatedCompletionDateTo = 'Estimated Completion Date To';
export const ActualStartDateFrom = 'Actual Start Date From';
export const ActualStartDateTo = 'Actual Start Date To';
export const ActualCompletionDateFrom = 'Actual Completion Date From';
export const ActualCompletionDateTo = 'Actual Completion Date To';
export const EstimatedMilliSecondsFrom_LABEL = 'Estimated Milli Seconds From';
export const EstimatedMilliSecondsTo_LABEL = 'Estimated Milli Seconds To';
export const EstimatedSetupMillisFrom_LABEL = 'Estimated Setup Millis From';
export const EstimatedSetupMillisTo_LABEL = 'Estimated Setup Millis To';
export const EstimateCalcMethod_LABEL = 'Estimate Calc Method';
export const ActualMilliSecondsFrom_LABEL = 'Actual Milli Seconds From';
export const ActualMilliSecondsTo_LABEL = 'Actual Milli Seconds To';
export const ActualSetupMillisFrom_LABEL = 'Actual Setup Millis From';
export const ActualSetupMillisTo_LABEL = 'Actual Setup Millis To';
export const TotalMilliSecondsAllowedFrom_LABEL =
  'Total Milli Seconds Allowed From';
export const TotalMilliSecondsAllowedToLABEL = 'Total Milli Seconds Allowed To';
export const TotalMoneyAllowedFrom_LABEL = 'Total Money Allowed From';
export const TotalMoneyAllowedTo_LABEL = 'Total Money Allowed To';
export const SpecialTerms_LABEL = 'Special Terms';
export const TimeTransparencyFrom_LABEL = 'Time Transparency From';
export const TimeTransparencyTo_LABEL = 'Time Transparency To';
export const UniversalId = 'Universal Id';
export const SourceReferenceId = 'Source Reference Id';
export const InfoUrl = 'Info Url';
export const TemporalExpression = 'Temporal Expression';
export const TotalMilliSecondsAllowedTo_LABEL = -'Total Milli Seconds Allowed To';
export const FixedAssetId = 'Fixed Asset Id';
export const FacilityId = 'Facility Id';
export const ServiceLoaderName = 'Service Loader Name';
export const QuantityToProduceFrom_LABEL = 'Quantity To Produce From';
export const QuantityToProduceTo_LABEL = 'Quantity To Produce To';
export const QuantityToProducedFrom_LABEL = 'Quantity To Produced From';
export const QuantityToProducedTo_LABEL = 'Quantity To Produced To';
export const QuantityToRejectedFrom_LABEL = 'Quantity To Rejected From';
export const QuantityToRejectedTo_LABEL = 'Quantity To Rejected To';
export const ReservPersonsFrom_LABEL = 'Reserv Persons From';
export const ReservPersonsTo_LABEL = 'Reserv Persons To';
export const Reserv2ndPPPercFrom_LABEL = 'Reserv2nd P P Perc From';
export const Reserv2ndPPPercTo_LABEL = 'Reserv2nd P P Perc To';
export const ReservNthPPPercFrom_LABEL = 'ReservNth PP Perc From';
export const ReservNthPPPercTo_LABEL = 'ReservNth PP Perc To';
export const AccommodationspotId = 'Accommodation spot Id';
export const RevisionNumberFrom_LABEL = 'Revision Number From';
export const RevisionNumberTo_LABEL = 'Revision Number To';
export const CreatedDateFrom_LABEL = 'Created Date From';
export const CreatedDateTo_LABEL = 'Created Date To';
export const CreatedByUser = 'Created By User';
export const LastModifiedDateFrom_LABEL = 'Last Modified Date From';
export const LastModifiedDateTo_LABEL = 'Last Modified Date To';
export const LastModifiedByUser = 'Last Modified By User';
export const SequenceNumFrom_LABEL = 'Sequence Num From';
export const SequenceNumTo_LABEL = 'Sequence Num To';
export const AccommodationMapId = 'Accommodation Map Id';
