// Page Configs
export const NAMESPACE = 'Agreements_AR';

export const PAGE_TITLE = 'Agreements';
export const PAGE_TITLE_TAGLINE = 'Agreements AR details - for OFBiz';
export const FORM_ID = 'InvoiceForm';
export const NOTIFICATION_TITLE = 'Invoice (List)';
export const LABEL_NOTAVAILABLE = '-NA-';

// Legend for Status in Table
export const LEGEND_ACTIVE = 'Active';
export const LEGEND_INACTIVE = 'Inactive';
export const LEGEND_BLOCKED = 'Blocked';
export const LEGEND_BLOCKED_YES = 'Yes';
export const LEGEND_BLOCKED_NO = 'No';

// Form Field Labels, Placeholders, Error Messages
export const STATUS_LABEL = 'Status';
export const BLOCK_LABEL = 'Blocked';

export const FromPartyID_LABEL = 'From Party ID';
export const FromPartyID_PLACEHOLDER = 'Enter From Party ID';
export const ToPartyID_LABEL = 'To Party ID';
export const ToPartyID_PLACEHOLDER ='Enter To Party ID';
export const InvoiceType_LABEL ='Invoice Type';
export const InvoiceType_PLACEHOLDER ='select Invoice Type';
export const InvoiceTypeConst =  [
    {value: 'Sales Invoice',label: 'Sales Invoice'},
    {value: 'Purchase Return',label: 'Purchase Return'},
    {value: 'Interest',label: 'Interest'}
]
export const InvoiceID_LABEL = 'Invoice ID';
export const InvoiceID_PLACEHOLDER = 'Enter Invoice ID';
export const InvoiceIdType = [
    {value: 'Contains',label: 'Contains'},
    {value: 'Equals',label: 'Equals'},
    {value: 'Begins With',label: 'Begins With'},
    {value: 'Is Empty',label: 'Is Empty'},
    {value: 'Not Equal',label: 'Not Equal'}
]
export const AgreementDate_LABEL  = 'Agreement Date';
export const RoleTypeIdFrom_LABEL = 'Role Type Id From';
export const RoleTypeIdTo_LABEL = 'Role Type Id To';
export const Description_LABEL = 'Description: ';
export const Description_PLACEHOLDER = 'Enter Description';
export const ReferenceNumber_LABEL = 'Reference Number: ';
export const ReferenceNumber_PLACEHOLDER = 'Enter Reference Number';
export const BillingAccountID_LABEL ="Billing Account ID";
export const BillingAccountID_PLACEHOLDER = "Enter Billing Account ID";
export const InvoiceFromDate_LABEL = "Invoice From Date "; 
export const TextData_LABEL = 'Text Data';
export const ThroughDate_LABEL = 'Through Date';
export const InvoiceFromDate_PLACEHOLDER = "Enter Invoice From Date ";  
export const from_Date=  [
    {value: 'Same Day',label: 'Same Day'},
    {value: 'Equals',label: 'Equals'},
    {value: 'Greater Than From Day Start',label: 'Greater Than From Day Start'},
    {value: 'Greater Than ',label: 'Greater Than From Day Start'},
]
export const InvoiceToDate_LABEL = "Invoice TO Date ";  
export const AgreementItemSeqId_LABEL = 'Agreement Item Seq Id';
export const WorkEffortId_LABEL = 'Work Effort Id';
export const InvoiceToDate_PLACEHOLDER = "Enter Invoice To Date ";  
export const To_Date=  [
    {value: 'Less Than',label: 'Less Than'},
    {value: 'Up TO Day',label: 'Up To Day'},
    {value: 'Up Through Day',label: 'Up Through Day'},
    {value: 'Is Empty',label: 'Is Empty'},
]
export const File_LABEL ='File';
export const StatusID_LABEL = 'Status ID';
export const AgreementContentTypeId_LABEL = 'Agreement Content Type Id';
export const ContentTypeId_LABEL = 'Content Type Id'
export const AddAgreementContent_LABEL = 'Add Agreement Content';
export const COLUMN_ContentName = 'Content Name';
export const COLUMN_AgreementContentTypeId = 'Agreement Content Type Id';
export const COLUMN_StatusID = 'Status ID';
export const COLUMN_ContentTypeId = 'Content Type Id';
export const AgreementRoles_title = 'Agreement Roles';
export const RoleTypeID_LABEL = 'Role Type ID';
export const COLUMN_RoleTypeID = 'Role Type ID';
export const AgreementRolesList = 'Agreement Roles List';
export const Options = ['Agreement Terms', 'Products', 'Party','Facilities'];
export const InvoiceItemType_LABEL = 'Invoice Item Type';
export const TermTypeId_LABEL = 'Term Type Id';
export const TermValue_LABEL = 'Term Value';
export const TermDays_LABEL = 'Term Days';
export const TextValue_LABEL = 'Text Value';
export const MinQuantity_LABEL = 'Min Quantity';
export const MaxQuantity_LABEL = 'Max Quantity';

export const LookupProduct_title ='Lookup Product';
export const BrandName_LABEL = 'Brand Name';
export const InternalName_LABEL = 'Internal Name';
export const ProductType_LABEL= 'Product Type';
export const PrimaryCategory_LABEL ='Primary Category';	
export const PartybyName_title = "Lookup Party by Name";
export const PartyID_LABEL = "Party ID";
export const PartyID_PLACEHOLDER = "Enter Party ID";
export const partyTypeID_LABEL = "Party Type ID";
export const PartyTypeID_PLACEHOLDER = "Enter party Type ID";4
export const FirstName_LABEL = "First Name";
export const Group_Name_LABEL = "Group Name";
export const BillingAccountbyName_title = "Lookup Billing Account by Name";
export const BillingAcctID_LABEL = "Billing Acct ID";
export const NewPromotion_title  = 'New Promotion';
export const ProductPromoId_LABEL  = 'Product Promo Id';
export const description_LABEL = "Description";
export const AccountingExternalAccountId_LABEL = "Accounting External Account Id";
export const InvoiceDate_LABEL = "Invoice Date";
export const DueDate_LABEL = "Due Date";
export const DueDate_PLACEHOLDER = "Enter Due Date";
export const RoleTypeId_LABEL ="Role Type Id";
export const Price_LABEL = 'Price';
export const ListAgreementItemParties = 'List Agreement Item Parties';
export const ListAgreementItemFacilities ='List Agreement Item Facilities';
export const NewAgreementItemFacility_title = 'New Agreement Item Facility';
export const FacilityId_LABEL = 'Facility Id';
export const LookupFacility_title = 'Lookup Facility';
export const FacilityName_LABEL = 'Facility Name';
export const ParentFacilityId_LABEL = 'Parent Facility Id';
export const FacilityTypeId_LABEL = 'Facility Type Id';

export const Currency_LABEL = "Currency";
export const Currency_PLACHOLDER ="Enter Currency";
export const RecurrenceInfoId_LABEL ="Recurrence Info Id";
export const RecurrenceInfoId_PLACEHOLDER ="Enter Recurrence Info Id";
export const InvoiceMessage_LABEL="Invoice Message";
export const InvoiceMessage_PLACEHOLDER = "Enter Invoice Message";
export const SequenceNum_LABEL  ='Sequence Num';
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
export const POPCONFIRM_TITLE = 'Are you sure to delete this Department ?';
export const POPCONFIRM_OK_TEXT = 'Delete';
export const POPCONFIRM_CANCEL_TEXT = 'Cancel';
export const POPCONFIRM_PLACEMENT = 'topRight';

export const POPCONFIRM_TITLE_APPROVE =
  'Are you sure to Approve this Department ?';
export const POPCONFIRM_OK_TEXT_APPROVE = 'Approve';

export const GeoId_LABEL= 'Geo Id';

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
export const COLUMN_ProductID ='Product ID';
export const COLUMN_BrandName = 'Brand Name';
export const COLUMN_InternalName = 'Internal Name';
export const COLUMN_ProductType = 'Product Type';
export const COLUMN_AgreementItemTypeId = 'Agreement Item Type Id';
export const COLUMN_Currency = 'Currency';
export const COLUMN_AgreementText = 'Agreement Text';
export const COLUMN_AgreementImage = 'Agreement Image';
export const AgreementItemTypeId_LABEL = 'Agreement Item Type Id';
export const AgreementText_LABEL = 'Agreement Text';
export const COLUMN_InvoiceID= 'Invoice ID';
export const COLUMN_InvoiceType = 'Invoice Type';
export const COLUMN_InvoiceDate  = 'Invoice Date';
export const COLUMN_ToParty = 'To Party';
export const COLUMN_FromParty = 'From Party';
export const COLUMN_Status = 'Status';
export const COLUMN_Amount = 'Amount';
export const COLUMN_DueAmount = 'Due Amount';
export const COLUMN_ACTIONS = 'Actions';
export const COLUMN_NAME_PLACEHOLDER = 'Name or Code';
export const COLUMN_ProductPromoName = 'Product Promo Name';
export const COLUMN_SequenceNum  = 'Sequence Num';
export const COLUMN_ThroughDate  = 'Through Date';
export const COLUMN_FromDate = 'From Date';
export const COLUMN_TermTypeId = 'Term Type Id';
export const COLUMN_InvoiceItemType  = 'Invoice Item Type';
export const COLUMN_TermValue  = 'Term Value';
export const COLUMN_TermDays  = 'Term Days';
export const COLUMN_TextValue = 'Text Value';
export const COLUMN_MinQuantity = 'Min Quantity';
export const COLUMN_MaxQuantity = 'Max Quantity';
export const AgreementImage_LABEL = 'Agreement Image';
export const ListAgreementItems = 'List Agreement Items';
export const ListAgreementPromoAppls ='List Agreement Promo Appls';
export const ListAgreementItemProducts = 'List Agreement Item Products';
export const NewProduct_title = 'New Product';
export const COLUMN_Name = 'Name';
export const COLUMN_BillingAcctID = "Billing Acct ID";
export const COLUMN_Description = "Description";
export const COLUMN_AccountingExternalAccountId = "Accounting External Account Id";	
export const AmendmentofthePartytotheAgreement_title = 'Amendment of the Party to the Agreement';
export const COLUMN_PartyID = "Party ID";	
export const COLUMN_PartyTypeId = "Party Type Id";	
export const COLUMN_FirstName = "First name";	
export const COLUMN_LastName = "Last name";
export const COLUMN_GroupName = "Group Name";
export const ListAgreementGeographicalApplic = 'List Agreement Geographical Applic';
export const COLUMN_Theinternalname ='The internal name';
export const COLUMN_price = 'price';
export const COLUMN_Release = 'Release';
export const COLUMN_FacilityName ='Facility Name';
export const COLUMN_FacilityTypeId = 'Facility Type Id';
export const ContentList = 'Content List';
export const AddAgreementWorkEffortApplicList = 'Add Agreement Work Effort Applic List';
export const COLUMN_AgreementItemSeqId ='Agreement Item Seq Id';
export const COLUMN_WorkEffortId = 'Work Effort Id';
export const NewAgreementWorkEffort_title = 'New Agreement Work Effort';
// Tag

export const Status_Invoice_tags = ['In-Process', 'Approved', 'Sent', 'Received','Ready for Posting','Paid','Write Off','Cancelled'];

// Tab Captions at Tabbed pane
export const TAB1_CAPTION = 'Overview';
export const TAB2_CAPTION = 'Info';
export const TAB3_CAPTION = 'Details';
export const TAB4_CAPTION = 'Contact Persons';
export const TAB5_CAPTION = 'Comments';

// Divider  Captions at View Mode
export const DIVIDER1_CAPTION = 'Info';
export const DIVIDER2_CAPTION = 'Addresses';
export const DIVIDER3_CAPTION = 'Phone Numbers';
