import axios from 'axios';
import { baseURL } from '../../../common/rest_urls';
const FA_saveURL = `${baseURL}/createFinAccount`;
const BillingAccount_updateURL = `${baseURL}/updateBillingAccount`;
const saveFAauth_URL = `${baseURL}/createFinAccountAuth`;
const BillingTerm_removeURL = `${baseURL}/removeBillingAccountTerm`;
const Roles_updateURL = `${baseURL}/updateFinAccountRole`;
const FAT_removeURL = `${baseURL}/removeFinAccountTransFromReconciliation`;
const updateReco_URL = `${baseURL}/updateGlReconciliation`;
const FA_UPDATE_saveURL = `${baseURL}/updateFinAccount`;
const FA_delURL = `${baseURL}/deleteFinAccount`;
const Roles_saveURL = `${baseURL}/createFinAccountRole`;
const Roles_delURL = `${baseURL}/deleteFinAccountRole`;
const delReco_URL = `${baseURL}/cancelBankReconciliation`;
const AgreementCancel_saveURL = `${baseURL}/cancelAgreement`;
const delFAauth_saveURL = `${baseURL}/expireFinAccountAuth`;
const SaveFinTrans_saveURL = `${baseURL}/createFinAccountTrans`;
const BillingAccountRoles_deleteURL = `${baseURL}/removeBillingAccountRole`;
const AgreementItem_deleteURL = `${baseURL}/removeAgreementItem`;
const reco_saveURL = `${baseURL}/createGlReconciliation`;
const saveDepWithPay_saveURL = `${baseURL}/depositWithdrawPayments`;

export const serviceSaveBillingAccount = values =>
  axios.post(`${BillingAccount_saveURL}`, values);
export const serviceUpdateBillingAccount = values =>
  axios.post(`${BillingAccount_updateURL}`, values);
export const servicedelFAauth = values =>
  axios.post(`${delFAauth_saveURL}`, values);
export const serviceRemoveBillingAccountTerms = values =>
  axios.post(`${BillingTerm_removeURL}`, values);
export const serviceUpdateRoles = values =>
  axios.post(`${Roles_updateURL}`, values);
export const SaveFinTrans = values =>
  axios.post(`${SaveFinTrans_saveURL}`, values);
export const servicesaveDepWithPay = values =>
  axios.post(`${saveDepWithPay_saveURL}`, values);
export const serviceSaveFA = values =>
  axios.post(`${FA_saveURL}`, values);
export const serviceUpdateFinancialAccount = values =>
  axios.post(`${FA_UPDATE_saveURL}`, values);
export const servicedeleteFA = values =>
  axios.post(`${FA_delURL}`, values);
export const serviceDelFAroles = values =>
  axios.post(`${Roles_delURL}`, values);
export const serviceDelReco = values =>
  axios.post(`${delReco_URL}`, values);
export const serviceRemoveFAT = values =>
  axios.post(`${FAT_removeURL}`, values);
export const serviceSaveRoles = values =>
  axios.post(`${Roles_saveURL}`, values);
export const servicesaveFAauth = values =>
  axios.post(`${saveFAauth_URL}`, values);
export const serviceUpdateRec = values =>
  axios.post(`${updateReco_URL}`, values);
export const serviceDeleteAgreementItem = values =>
  axios.post(`${AgreementItem_deleteURL}`, values);
export const servicesaveReco = values =>
  axios.post(`${reco_saveURL}`, values);
export const serviceDeleteAgreementWorkEffort = values =>
  axios.post(`${AgreementWorkEffort_DeleteURL}`, values);
