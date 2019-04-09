import axios from 'axios';
import { baseURL } from '../../../common/rest_urls';
const saveURL = `${baseURL}/createTaxAuthority`;
const SaveAsso = `${baseURL}/createTaxAuthorityAssoc`;
const DelTaxAuthCat = `${baseURL}/deleteTaxAuthorityCategory`;
const SaveTaxAuthCatURL = `${baseURL}/createTaxAuthorityCategory`;
const update_TaxAuth_URL = `${baseURL}/updateTaxAuthority`;
const saveGla_URL = `${baseURL}/createTaxAuthorityGlAccount`;
const savePR_URL = `${baseURL}/createTaxAuthorityRateProduct`;
const delGla_URL = `${baseURL}/deleteTaxAuthorityGlAccount`;
const delPR_URL = `${baseURL}/deleteTaxAuthorityRateProduct`;
const updatePR_URL = `${baseURL}/updateTaxAuthorityRateProduct`;
const delAssociations = `${baseURL}/deleteTaxAuthorityAssoc`;
const saveParties_URL = `${baseURL}/createPartyTaxAuthInfo`;
const updateParties_URL = `${baseURL}/updatePartyTaxAuthInfo`;
const delParties_URL = `${baseURL}/deletePartyTaxAuthInfo`;
export const serviceSave = values => axios.post(`${saveURL}`, values);
export const servicedelAssociations = values =>
  axios.post(`${delAssociations}`, values);
export const serviceSaveAsso = values =>
  axios.post(`${SaveAsso}`, values);
export const serviceDelTaxAuthCat = values =>
  axios.post(`${DelTaxAuthCat}`, values);
export const serviceSaveTaxAuthCat = values =>
  axios.post(`${SaveTaxAuthCatURL}`, values);
export const serviceUpdateTaxAuth = values =>
  axios.post(`${update_TaxAuth_URL}`, values);
  
export const servicesAVEgla = values =>
  axios.post(`${saveGla_URL}`, values);

  export const serviceSavePR  = values =>
  axios.post(`${savePR_URL}`, values);
export const serviceDelgla = values =>
axios.post(`${delGla_URL}`, values);
export const serviceDelPR = values =>
axios.post(`${delPR_URL}`, values);
export const serviceUpdatePR = values =>
axios.post(`${updatePR_URL}`, values);

export const serviceSaveParties = values =>
axios.post(`${saveParties_URL}`, values);

export const serviceUpdateParties = values =>
axios.post(`${updateParties_URL}`, values);

export const serviceDelParties = values =>
axios.post(`${delParties_URL}`, values);

