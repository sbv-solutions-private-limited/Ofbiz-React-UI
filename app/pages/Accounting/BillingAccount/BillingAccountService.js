import axios from 'axios';
import { baseURL } from '../../../common/rest_urls';
const BillingAccount_saveURL = `${baseURL}/createBillingAccount`;
const BillingAccount_updateURL = `${baseURL}/updateBillingAccount`;
const BillingTerm_saveURL = `${baseURL}/createBillingAccountTerm`;
const BillingTerm_removeURL = `${baseURL}/removeBillingAccountTerm`;
const AgreementPromotions_saveURL = `${baseURL}/createAgreementPromoAppl`;
const AgreementProduct_saveURL = `${baseURL}/createAgreementProductAppl`;
const AgreementParty_saveURL = `${baseURL}/createAgreementPartyApplic`;
const AgreementGeo_saveURL = `${baseURL}/createAgreementFacilityAppl`;
const AgreementWorkEffort_saveURL = `${baseURL}/createAgreementWorkEffortApplic`;
const BillingAccountRolesRoles_saveURL = `${baseURL}/createBillingAccountRole`;
const BillingAccountRoles_updateURL = `${baseURL}/updateBillingAccountRole`;
const BillingtTerm_updateURL = `${baseURL}/updateBillingAccountTerm`;
const AgreementCancel_saveURL = `${baseURL}/cancelAgreement`;
const AgreementCopy_saveURL = `${baseURL}/copyAgreement`;
const payment_saveURL = `${baseURL}/createPaymentApplication`;
const BillingAccountRoles_deleteURL = `${baseURL}/removeBillingAccountRole`;
const AgreementItem_deleteURL = `${baseURL}/removeAgreementItem`;
const AgreementItem_UpdateURL = `${baseURL}/updateAgreementItem`;
const AgreementWorkEffort_DeleteURL = `${baseURL}/deleteAgreementWorkEffortApplic`;

export const serviceSaveBillingAccount = values =>
  axios.post(`${BillingAccount_saveURL}`, values);
export const serviceUpdateBillingAccount = values =>
  axios.post(`${BillingAccount_updateURL}`, values);
export const serviceSaveBillingtTerm = values =>
  axios.post(`${BillingTerm_saveURL}`, values);
export const serviceRemoveBillingAccountTerms = values =>
  axios.post(`${BillingTerm_removeURL}`, values);
export const serviceSaveAgreementPromotions = values =>
  axios.post(`${AgreementPromotions_saveURL}`, values);
export const serviceSaveAgreementProducts = values =>
  axios.post(`${AgreementProduct_saveURL}`, values);
export const serviceSaveAgreementParty = values =>
  axios.post(`${AgreementParty_saveURL}`, values);
export const serviceSave = values =>
  axios.post(`${payment_saveURL}`, values);
export const serviceSaveAgreementWorkEffort = values =>
  axios.post(`${AgreementWorkEffort_saveURL}`, values);
export const SaveBillingAccountRoles = values =>
  axios.post(`${BillingAccountRolesRoles_saveURL}`, values);
export const serviceUpdateBillingAccountRoles = values =>
  axios.post(`${BillingAccountRoles_updateURL}`, values);
export const serviceCancelAgreement = values =>
  axios.post(`${AgreementCancel_saveURL}`, values);
export const serviceCopyAgreement = values =>
  axios.post(`${AgreementCopy_saveURL}`, values);
export const serviceSaveAgreementGeo = values =>
  axios.post(`${AgreementCopy_saveURL}`, values);
export const serviceUpdateBillingtTerm = values =>
  axios.post(`${BillingtTerm_updateURL}`, values);
export const serviceRemoveBillingAccountRoles = values =>
  axios.post(`${BillingAccountRoles_deleteURL}`, values);
export const serviceDeleteAgreementItem = values =>
  axios.post(`${AgreementItem_deleteURL}`, values);
export const serviceUpdateAgreementItem = values =>
  axios.post(`${AgreementItem_UpdateURL}`, values);
export const serviceDeleteAgreementWorkEffort = values =>
  axios.post(`${AgreementWorkEffort_DeleteURL}`, values);
