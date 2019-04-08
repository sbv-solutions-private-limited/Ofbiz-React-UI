import axios from 'axios';
import { addPaginationURLParams } from '../../../common/Utils/common';
import { baseURL } from '../../../common/rest_urls';
import { NAMESPACE } from './InvoiceConsts';

const saveURL = `${baseURL}/createInvoice`;
const updateURL = `${baseURL}/updateInvoice`;
const copyURL = `${baseURL}/copyInvoice`;
const SetInvoiceStatusURL = `${baseURL}/setInvoiceStatus`;
const MassChangeInvoiceStatusURL = `${baseURL}/massChangeInvoiceStatus`;
const saveInvoiceItemURL = `${baseURL}/createInvoiceItem`;
const removeInvoiceItemURL = `${baseURL}/removeInvoiceItem`;
const saveInvoiceROleURL = `${baseURL}/createInvoiceRole`;
const updateInvoiceROleURL = `${baseURL}/createInvoiceRole`;
const removeInvoiceROleURL = `${baseURL}/removeInvoiceRole`;
const saveInvoiceTermURL = `${baseURL}/createInvoiceTerm`;
const saveSendInvoicePerEmail = `${baseURL}/sendInvoicePerEmail`;

console.log(saveURL);
export const serviceSave = values => axios.post(`${saveURL}`, values);
export const serviceUpdateInvoice = values =>
  axios.post(`${updateURL}`, values);
export const serviceCopyInvoice = values => axios.post(`${copyURL}`, values);
export const servieSetInvoiceStatus = values =>
  axios.post(`${SetInvoiceStatusURL}`, values);
export const serviceMassChangeInvoiceStatus = values =>
  axios.post(`${MassChangeInvoiceStatusURL}`, values);
export const serviceCreateInvoiceItem = values =>
  axios.post(`${saveInvoiceItemURL}`, values);
export const serviceRemoveInvoiceItem = values =>
  axios.post(`${removeInvoiceItemURL}`, values);
export const serviceCreateInvoiceRole = values =>
  axios.post(`${saveInvoiceROleURL}`, values);
export const serviceUpdateInvoiceRole = values =>
  axios.post(`${updateInvoiceROleURL}`, values);
export const serviceRemoveInvoiceRole = values =>
  axios.post(`${removeInvoiceROleURL}`, values);
export const serviceCreateInvoiceTerm = values =>
  axios.post(`${saveInvoiceTermURL}`, values);
export const serviceSendInvoicePerEmail = values =>
  axios.post(`${saveSendInvoicePerEmail}`, values);
