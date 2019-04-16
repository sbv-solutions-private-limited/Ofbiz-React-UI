export const NAMESPACE = 'FixedAssets_Accounting';
export const PAGE_TITLE = 'Fixed Assets';
export const PAGE_TITLE_TAGLINE = 'Fixed Assets Accounting details - for OFBiz';
export const FORM_ID = 'FixedAssetsForm'; 
export const NOTIFICATION_TITLE = 'Fixed Assets (List)';
export const LABEL_NOTAVAILABLE = '-NA-';
export const LEGEND_ACTIVE = 'Active';
export const LEGEND_INACTIVE = 'Inactive';
export const LEGEND_BLOCKED = 'Blocked';
export const LEGEND_BLOCKED_YES = 'Yes';
export const LEGEND_BLOCKED_NO = 'No';
export const STATUS_LABEL = 'Status';
export const BLOCK_LABEL = 'Blocked';
export const COLUMN_PaymentGroupId = 'Payment Group Id';
export const COLUMN_PaymentGroupType = 'Payment Group Type';
export const COLUMN_PaymentGroupName = 'Payment Group Name';
export const COLUMN_Actions = 'Actions';
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
  { value: 'BATCH_PAYMENT', label: 'Batch of Payments' },
  { value: 'CHECK_RUN', label: 'Check Run' },
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
export const PaymentGatewayResponseId_LABEL = 'Payment Gateway Response Id';
export const PaymentGatewayResponseId_PLACEHOLDER =
  'Enter Payment Gateway Response Id';
export const Comments_LABEL = 'Comments: ';
export const Comments_PLACEHOLDER = 'Enter Comments';
export const ReferenceNumber_LABEL = 'Reference Number: ';
export const ReferenceNumber_PLACEHOLDER = 'Enter Reference Number';
export const SequenceNum_LABEL = 'Sequence Num';
export const PaymentGroupID_LABEL = 'Payment Group Id';
export const PaymentGroupID_PLACEHOLDER = 'Enter Payment Group ID';
export const PaymentGroupTypeId_LABEL = 'Payment Group Type Id';
export const PaymentGroupTypeId_PLACEHOLDER = 'Enter Payment Group Type Id';
export const PaymentId_LABEL = 'Payment Id';
export const PaymentTypeID_LABEL = 'Payment Type ID';
export const LookupPayment_LABEL = 'Lookup Payment';
export const PaymentGroupName_LABEL = 'Payment Group Name';
export const PaymentGroupName_PLACEHOLDER = 'Enter Payment Group Name';
export const FromPartyID_LABEL = 'Party Id From';
export const AmountApplied_LABEL = 'Amount Applied';
export const BillingAccountID_PLACEHOLDER = 'Enter Billing Account ID';
export const InvoiceFromDate_LABEL = 'Invoice From Date ';
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
export const FromDate_LABEL = 'From Date';
export const ThroughDate_LABEL = 'Through Date';
export const COLUMN_PaymentId = 'Payment Id';
export const COLUMN_ReferenceNumber = 'Reference Number';
export const Amount_LABEL = 'Amount';
export const Amount_PLACEHOLDER = 'Enter Amount';
export const PaymentType_LABEL = 'Payment Type';
export const PaymentType_PLACEHOLDER = 'Enter Payment Type';
export const PartybyName_title = 'Lookup Party by Name';
export const LookupPayment_title = 'Lookup Payment';
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
export const COLUMN_PaymentStatus = 'Payment Status';
export const COLUMN_EffectiveDate = 'Effective Date';
export const COLUMN_ToParty = 'To Party';
export const COLUMN_FromParty = 'From Party';
export const COLUMN_Status = 'Status';
export const COLUMN_Amount = 'Amount';
export const COLUMN_FromDate = 'From Date';
export const COLUMN_ThroughDate = 'Through Date';
export const COLUMN_DueAmount = 'Due Amount';
export const COLUMN_ACTIONS = 'Actions';
export const COLUMN_NAME_PLACEHOLDER = 'Name or Code';
export const COLUMN_GLAccountID = 'GL Account ID';
export const COLUMN_Name = 'Name';
export const Column_Type = 'Type';
export const COLUMN_GLAccountClass = 'GL Account Class';
export const COLUMN_BillingAcctID = 'Billing Acct ID';
export const COLUMN_Description = 'Description';
export const COLUMN_AccountingExternalAccountId =
  'Accounting External Account Id';
export const COLUMN_PartyID = 'Party ID';
export const COLUMN_PartyTypeId = 'Party Type Id';
export const COLUMN_FirstName = 'First name';
export const COLUMN_LastName = 'Last name';
export const COLUMN_GroupName = 'Group Name';
export const Status_Invoice_tags = [
  'Cancelled',
  'Confirmed',
  'Not Paid',
  'Received',
  'Sent',
  'Voided',
];
export const TAB1_CAPTION = 'Overview';
export const TAB2_CAPTION = 'Info';
export const TAB3_CAPTION = 'Details';
export const TAB4_CAPTION = 'Contact Persons';
export const TAB5_CAPTION = 'Comments';
export const DIVIDER1_CAPTION = 'Info';
export const DIVIDER2_CAPTION = 'Addresses';
export const DIVIDER3_CAPTION = 'Phone Numbers';

export const FixedAssetId	 = 'Fixed Asset Id';
export const AssetType	 = 'Asset Type';
export const FixedAssetName	= 'Fixed Asset Name	';
export const FixedAssetParentId = 'Fixed Asset Parent Id';
export const DateAcquired = 'Date Acquired';
export const SalvageValue	 = 'Salvage Value	';
export const Depreciation = 'Depreciation';
export const PlannedPastDepreciationTotal = 'Planned Past Depreciation Total';
export const  InstanceOfProductId  = ' Instance Of Product Id ';
export const  ClassEnumId  = ' Class Enum Id ';
export const  AcquireOrderId  = 'Acquire Order Id ';
export const  AcquireOrderItemSeqId  = ' Acquire Order Item Seq Id ';
export const  DateLastServiced  = ' Date Last Serviced ';
export const  DateNextService  = ' Date Next Service ';
export const  ExpectedEndOfLife  = ' Expected End Of Life ';
export const  ActualEndOfLife  = 'Actual End Of Life ';
export const  ProductionCapacity  =' Production Capacity ';
export const UOM = 'UOM';
export const Calendar = 'Calendar';
export const  SerialNumber  = ' Serial Number ';
export const  LocatedAtFacilityId  = ' Located At Facility Id ';
export const  LocatedAtLocationSeqId  = ' Located At Location Seq Id';
export const  PurchaseCost  = 'Purchase Cost ';
export const  PurchaseCostUomId  = ' Purchase Cost Uom Id ';
export const LookupProduct_title = 'Lookup Product';
export const BrandName_LABEL = 'Brand Name';
export const InternalName_LABEL = 'Internal Name';
export const ProductType_LABEL = 'Product Type';
export const PrimaryCategory_LABEL = 'Primary Category';
export const COLUMN_ProductId = 'Product Id';
export const FacilityId = 'Facility Id';
export const FacilityId_LABEL = 'Facility Id';
export const LookupFacility_title = 'Lookup Facility';
export const FacilityName_LABEL = 'Facility Name';
export const ParentFacilityId_LABEL = 'Parent Facility Id';
export const FacilityTypeId_LABEL = 'Facility Type Id';
export const  LocationSeqId  = ' Location Seq Id ';
export const LocationTypeEnumId = 'Location Type Enum Id';
export const  AreaId  = ' Area Id ';
export const  AisleId  = ' Aisle Id ';
export const  SectionId  = ' Section Id ';
export const  LevelId  = ' Level Id ';
export const  PositionId  = ' Position Id ';
export const  GeoPointId  =' Geo Point Id ';
export const  Product  = ' Product ';
export const  FixedAssetProductType  = ' Fixed Asset Product Type ';
export const  ProductID  = ' Product ID ';
export const  Typeofusage  = ' Type of usage ';
export const Quantity = 'Quantity';
export const  QuantityUomId  = ' Quantity Uom Id ';
export const  StandardCostType  = ' Standard Cost Type ';
export const  AmountUomId  = ' Amount Uom Id ';
export const Amount = 'Amount';
export const  IdentificationType = ' Identification Type ';
export const Value = 'Value';
export const  RegistrationDate  = ' Registration Date ';
export const  GovernmentAgency  = ' Government Agency ';
export const  RegistrationNumber  = ' Registration Number ';
export const  LicenseNumber  = ' License Number ';
export const  ProductMeterTypeId  = ' Product Meter Type Id ';
export const  ReadingDate  = ' Reading Date ';
export const  MeterValue  = ' Meter Value ';
export const  ReadingReasonEnumId  = ' Reading Reason Enum Id ';
export const  MeterValueUpdate = ' 	Meter Value - Update';
export const  Maintenance  = ' Maintenance';
export const  MaintHistSeqId  =' Maint Hist Seq Id ';
export const  ProductMaintTypeId = ' Product Maint Type Id ';
export const  IntervalQuantity  = ' Interval Quantity';
export const  IntervalUom = ' Interval Uom ';
export const  AllocatedDate  = ' Allocated Date ';
export const statusID = 'status Id';
export const  WorkEffortId  = 'Work Effort Id ';
export const Maintenancetype = ' Maintenance Type ';
export const  ProductMaintenance  = ' Product Maintenance ';
export const  MaintenanceTemplate  = ' Maintenance Template ';
export const  IntervalMeterType  = ' Interval Meter Type ';
export const  PurchaseOrderId  = 'Purchase Order Id ';
export const ScheduleWorkEffortId 	= 'Schedule Work Effort Id ';
export const Nextdepreciationamount  = 'Next depreciation amount:';
export const  Depreciationcustommethod  = ' Depreciation custom method ';
export const  FixedAssetTypeId  = ' Fixed Asset Type Id ';
export const  AssetGLaccount  = ' Asset GL account ';
export const  AccumulateddepreciationGLaccount  = ' Accumulated depreciation GL account ';
export const  DepreciationGLaccount  = ' Depreciation GL account ';
export const  ProfitGLaccount  = ' Profit GL account ';
export const  LossGLaccount  = ' Loss GL account ';
export const  AcctgTransId  = ' Acctg Trans Id ';
export const  TransTypeDescription  = ' Trans Type Description ';
export const  TransactionDate  = ' Transaction Date ';
export const  AccountCode  = ' Account Code ';
export const  AccountName  = ' Account Name ';
export const  DebitCreditFlag  = ' Debit Credit Flag ';
export const  IsPosted  = ' Is Posted ';

export const SequenceNum	 = 'Sequence Num	';
export const  EventName = ' Event Name ';
export const  EventType  = ' Event Type ';
export const  Scope  = ' Scope ';
export const  EstimatedStartDate  = ' Estimated Start Date ';
export const  EstimatedCompletionDate  = ' Estimated Completion Date ';
export const orderId = 'order Id';
export const OrderItemSeqId	 = 'Order Item Seq Id	';