import axios from 'axios';
import { baseURL } from '../../../common/rest_urls';
const Agreement_saveURL = `${baseURL}/createAgreement`;
const AgreementTerm_saveURL = `${baseURL}/createAgreementTerm`;
const AgreementItem_saveURL = `${baseURL}/createAgreementItem`;
const AgreementPromotions_saveURL = `${baseURL}/createAgreementPromoAppl`;
const AgreementProduct_saveURL = `${baseURL}/createAgreementProductAppl`;
const AgreementParty_saveURL = `${baseURL}/createAgreementPartyApplic`;
const AgreementGeo_saveURL = `${baseURL}/createAgreementFacilityAppl`;
const AgreementWorkEffort_saveURL = `${baseURL}/createAgreementWorkEffortApplic`;
const AgreementRoles_saveURL = `${baseURL}/createAgreementRole`;
const AgreementContents_saveURL = `${baseURL}/uploadAgreementContentFile`;
const Agreement_updateURL = `${baseURL}/updateAgreement`;
const AgreementCancel_saveURL = `${baseURL}/cancelAgreement`;
const AgreementCopy_saveURL = `${baseURL}/copyAgreement`;
const AgreementTerm_updateURL = `${baseURL}/updateAgreementTerm`;
const AgreementTerm_deleteURL = `${baseURL}/deleteAgreementTerm`;
const AgreementItem_deleteURL = `${baseURL}/removeAgreementItem`;
const AgreementItem_UpdateURL = `${baseURL}/updateAgreementItem`;
const AgreementWorkEffort_DeleteURL = `${baseURL}/deleteAgreementWorkEffortApplic`;

export const serviceSaveAgreement = values =>
  axios.post(`${Agreement_saveURL}`, values);
export const serviceUpdateAgreement = values =>
  axios.post(`${Agreement_updateURL}`, values);
export const serviceSaveAgreementTerm = values =>
  axios.post(`${AgreementTerm_saveURL}`, values);
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
export const serviceSaveAgreementGeo = values =>
  axios.post(`${AgreementCopy_saveURL}`, values);
export const serviceUpdateAgreementTerm = values =>
  axios.post(`${AgreementTerm_updateURL}`, values);
export const serviceDeleteAgreementTerm = values =>
  axios.post(`${AgreementTerm_deleteURL}`, values);
export const serviceDeleteAgreementItem = values =>
  axios.post(`${AgreementItem_deleteURL}`, values);
export const serviceUpdateAgreementItem = values =>
  axios.post(`${AgreementItem_UpdateURL}`, values);
export const serviceDeleteAgreementWorkEffort = values =>
  axios.post(`${AgreementWorkEffort_DeleteURL}`, values);
