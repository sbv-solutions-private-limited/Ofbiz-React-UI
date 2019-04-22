import axios from 'axios';
import { baseURL } from '../../../common/rest_urls';
const saveURL = `${baseURL}/setAcctgCompany`;
const AgreementTerm_saveURL = `${baseURL}/createAgreementTerm`;
const AgreementItem_saveURL = `${baseURL}/createAgreementItem`;
const AgreementPromotions_saveURL = `${baseURL}/createAgreementPromoAppl`;
const AgreementProduct_saveURL = `${baseURL}/createAgreementProductAppl`;
const AgreementParty_saveURL = `${baseURL}/createAgreementPartyApplic`;
const AgreementGeo_saveURL = `${baseURL}/createAgreementFacilityAppl`;
const PGA_saveURL = `${baseURL}/createProductGlAccount`;
const PGA_updateURL = `${baseURL}/updateProductGlAccount`;
const PGA_deleteURL = `${baseURL}/deleteProductGlAccount`;
const org_saveURL = `${baseURL}/createGlAccountOrganization`;
const AgreementCancel_saveURL = `${baseURL}/cancelAgreement`;
const AgreementCopy_saveURL = `${baseURL}/copyAgreement`;
const GLAT_deleteURL = `${baseURL}/removeGlAccountTypeDefault`;
const GLAT_saveURL = `${baseURL}/createGlAccountTypeDefault`;
const JOU_updateURL = `${baseURL}/updateGlJournal`;
const updateURL = `${baseURL}/updatePartyAcctgPreference`;
const JOU_saveURL = `${baseURL}/createGlJournal`;
const JOU_deleteURL = `${baseURL}/deleteGlJournal`;

const FATGL_saveURL = `${baseURL}/createFixedAssetTypeGlAccount`;
const FATGL_deleteURL = `${baseURL}/deleteFixedAssetTypeGlAccount`;

const AT_saveURL = `${baseURL}/createAcctgTrans`;
const AT_deleteURL = `${baseURL}/updateAcctgTrans`;

const FAGL_saveURL = `${baseURL}/createFinAccountTypeGlAccount`;
const FAGL_updateURL = `${baseURL}/updateFinAccountTypeGlAccount`;
const FAGL_deleteURL = `${baseURL}/deleteFinAccountTypeGlAccount`;
const PMGL_saveURL = `${baseURL}/addPaymentMethodTypeGlAssignment`;
const PMGL_deleteURL = `${baseURL}/removePaymentMethodTypeGlAssignment`;

const AR_updateURL = `${baseURL}/updateGlReconciliation`;

const CCGL_saveURL = `${baseURL}/createCreditCardTypeGlAccount`;
const CCGL_deleteURL = `${baseURL}/deleteCreditCardTypeGlAccount`;
const CCGL_updateURL = `${baseURL}/updateCreditCardTypeGlAccount`;
const VGL_saveURL = `${baseURL}/createVarianceReasonGlAccount`;
const VGL_deleteURL = `${baseURL}/deleteVarianceReasonGlAccount`;
const VGL_updateURL = `${baseURL}/updateVarianceReasonGlAccount`;
const PTGL_saveURL = `${baseURL}/addPaymentTypeGlAssignment`;
const PTGL_deleteURL = `${baseURL}/removePaymentTypeGlAssignment`;
const SI_saveURL = `${baseURL}/addInvoiceItemTypeGlAssignment`;
const SI_deleteURL = `${baseURL}/removeInvoiceItemTypeGlAssignment`;
const PGAC_saveURL = `${baseURL}/createProductCategoryGlAccount`;
const PGAC_updateURL = `${baseURL}/updateProductCategoryGlAccount`;
const PGAC_deleteURL = `${baseURL}/deleteProductCategoryGlAccount`;

const TGL_saveURL = `${baseURL}/createTaxAuthorityGlAccount`;
const TGL_updateURL = `${baseURL}/updateTaxAuthorityGlAccount`;
const TGL_deleteURL = `${baseURL}/deleteTaxAuthorityGlAccount`;

const PGL_saveURL = `${baseURL}/createPartyGlAccount`;
const PGL_updateURL = `${baseURL}/updatePartyGlAccount`;
const PGL_deleteURL = `${baseURL}/deletePartyGlAccount`;


const PT_saveURL = `${baseURL}/createCustomTimePeriod`;
const PT_updateURL = `${baseURL}/updateCustomTimePeriod`;
const PT_deleteURL = `${baseURL}/deleteCustomTimePeriod`;
const TP_saveURL = `${baseURL}/createCustomTimePeriod`;
const TP_updateURL = `${baseURL}/updateCustomTimePeriod`;
const TP_deleteURL = `${baseURL}/deleteCustomTimePeriod`;

const QAR_saveURL = `${baseURL}/createAcctgTransEntry`;
const QAR_updateURL = `${baseURL}/updateAcctgTransEntry`;
const QAR_deleteURL = `${baseURL}/deleteAcctgTransEntry`;

export const serviceSave = values =>
  axios.post(`${saveURL}`, values);
export const serviceUpdate = values =>
  axios.post(`${updateURL}`, values);
export const serviceSaveOrg = values =>
  axios.post(`${org_saveURL}`, values);
export const serviceSaveAgreementItem = values =>
  axios.post(`${AgreementItem_saveURL}`, values);
export const serviceSaveAgreementPromotions = values =>
  axios.post(`${AgreementPromotions_saveURL}`, values);
export const serviceSaveAgreementProducts = values =>
  axios.post(`${AgreementProduct_saveURL}`, values);
export const serviceSaveAgreementParty = values =>
  axios.post(`${AgreementParty_saveURL}`, values);
export const serviceSaveAgreementFacilities = values =>
  axios.post(`${AgreementGeo_saveURL}`, values);
export const serviceSaveAgreementWorkEffort = values =>
  axios.post(`${AgreementWorkEffort_saveURL}`, values);
export const serviceSaveAgreementRoles = values =>
  axios.post(`${AgreementRoles_saveURL}`, values);
export const serviceSaveAgreementContents = values =>
  axios.post(`${AgreementContents_saveURL}`, values);
export const serviceCancelAgreement = values =>
  axios.post(`${AgreementCancel_saveURL}`, values);
export const serviceCopyAgreement = values =>
  axios.post(`${AgreementCopy_saveURL}`, values);
export const serviceSavePGA = values =>
  axios.post(`${PGA_saveURL}`, values);
export const serviceUpdatePGA = values =>
  axios.post(`${PGA_updateURL}`, values);
export const serviceDeletePGA = values =>
  axios.post(`${PGA_deleteURL}`, values);
export const serviceUpdateJOU = values =>
  axios.post(`${JOU_updateURL}`, values);
export const serviceDeleteJOU = values =>
  axios.post(`${JOU_deleteURL}`, values);
export const serviceSaveJOU = values =>
  axios.post(`${JOU_saveURL}`, values);
export const serviceDeleteGLAT = values =>
  axios.post(`${GLAT_deleteURL}`, values);
export const serviceSaveGLAT = values =>
  axios.post(`${GLAT_saveURL}`, values);

export const serviceSavePGAC = values =>
  axios.post(`${PGAC_saveURL}`, values);
export const serviceUpdatePGAC = values =>
  axios.post(`${PGAC_updateURL}`, values);
export const serviceDeletePGAC = values =>
  axios.post(`${PGAC_deleteURL}`, values);
export const serviceSaveFAGL = values =>
  axios.post(`${FAGL_saveURL}`, values);
export const serviceUpdateFAGL = values =>
  axios.post(`${FAGL_updateURL}`, values);
export const serviceDeleteFAGL = values =>
  axios.post(`${FAGL_deleteURL}`, values);
export const serviceSaveSI = values =>
  axios.post(`${SI_saveURL}`, values);
export const serviceDeleteSI = values =>
  axios.post(`${SI_deleteURL}`, values);
export const serviceSavePTGL = values =>
  axios.post(`${PTGL_saveURL}`, values);
export const serviceDeletePTGL = values =>
  axios.post(`${PTGL_deleteURL}`, values);


export const serviceSavePMGL = values =>
  axios.post(`${PMGL_saveURL}`, values);
export const serviceDeletePMGL = values =>
  axios.post(`${PMGL_deleteURL}`, values);

export const serviceSaveVGL = values =>
  axios.post(`${VGL_saveURL}`, values);
export const serviceDeleteVGL = values =>
  axios.post(`${VGL_deleteURL}`, values);

export const serviceUpdateVGL = values =>
  axios.post(`${VGL_updateURL}`, values);

export const serviceSaveCCGL = values =>
  axios.post(`${CCGL_saveURL}`, values);
export const serviceDeleteCCGL = values =>
  axios.post(`${CCGL_deleteURL}`, values);

export const serviceUpdateCCGL = values =>
  axios.post(`${CCGL_updateURL}`, values);

export const serviceSaveTGL = values =>
  axios.post(`${TGL_saveURL}`, values);
export const serviceDeleteTGL = values =>
  axios.post(`${TGL_deleteURL}`, values);

export const serviceUpdateTGL = values =>
  axios.post(`${TGL_updateURL}`, values);

export const serviceSavePGL = values =>
  axios.post(`${PGL_saveURL}`, values);
export const serviceDeletePGL = values =>
  axios.post(`${PGL_deleteURL}`, values);

export const serviceUpdatePGL = values =>
  axios.post(`${PGL_updateURL}`, values);

export const serviceSaveFATGL = values =>
  axios.post(`${FATGL_saveURL}`, values);
export const serviceDeleteFATGL = values =>
  axios.post(`${FATGL_deleteURL}`, values);


export const serviceUpdatePT = values =>
  axios.post(`${PT_updateURL}`, values);

export const serviceUpdateAR = values =>
  axios.post(`${AR_updateURL}`, values);


export const serviceSavePT = values =>
  axios.post(`${PT_saveURL}`, values);
export const serviceDeletePT = values =>
  axios.post(`${PT_deleteURL}`, values);

export const serviceSaveAT = values =>
  axios.post(`${AT_saveURL}`, values);
export const serviceUpdateAT = values =>
  axios.post(`${AT_deleteURL}`, values);

export const serviceDeleteQAR = values =>
  axios.post(`${QAR_deleteURL}`, values);

export const serviceSaveQAR = values =>
  axios.post(`${QAR_saveURL}`, values);
export const serviceUpdateQAR = values =>
  axios.post(`${QAR_updateURL}`, values);

export const serviceSaveTP = values =>
  axios.post(`${TP_deleteURL}`, values);

export const serviceUpdateTP = values =>
  axios.post(`${TP_saveURL}`, values);
export const serviceDelete = values =>
  axios.post(`${TP_updateURL}`, values);