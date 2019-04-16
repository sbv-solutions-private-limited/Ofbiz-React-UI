import axios from 'axios';
import { baseURL } from '../../../common/rest_urls';
const saveURL = `${baseURL}/createBudget`;
const updateURL = `${baseURL}/updateBudget`;
const statusURL = `${baseURL}/updateBudgetStatus`;
const serviceSaveItemURL = `${baseURL}/createBudgetItem`;
const serviceRemoveItemURL = `${baseURL}/removeBudgetItem`;
const saveInvoiceItemURL = `${baseURL}/createInvoiceItem`;
const RemoveReviewsURL = `${baseURL}/removeBudgetReview`;
const saveInvoiceROleURL = `${baseURL}/createInvoiceRole`;
const SaveReviewsURL = `${baseURL}/createBudgetReview`;
const saveRoleURL = `${baseURL}/createBudgetRole`;
const serviceRemoveRoleURL = `${baseURL}/removeBudgetRole`;
console.log(saveURL);
export const serviceSave = values => axios.post(`${saveURL}`, values);
export const serviceUpdateInvoice = values =>
  axios.post(`${updateURL}`, values);
export const serviceBudgetStatus = values => axios.post(`${statusURL}`, values);
export const serviceSaveItem = values =>
  axios.post(`${serviceSaveItemURL}`, values);
export const serviceRemoveItem = values =>
  axios.post(`${serviceRemoveItemURL}`, values);
export const serviceCreateInvoiceItem = values =>
  axios.post(`${saveInvoiceItemURL}`, values);
export const serviceRemoveReviews = values =>
  axios.post(`${RemoveReviewsURL}`, values);
export const serviceCreateInvoiceRole = values =>
  axios.post(`${saveInvoiceROleURL}`, values);
export const serviceUpdate = values =>
  axios.post(`${updateURL}`, values);
export const serviceSaveReviews = values =>
  axios.post(`${SaveReviewsURL}`, values);
export const serviceSaveRole = values =>
  axios.post(`${saveRoleURL}`, values);
export const serviceRemoveRole = values =>
  axios.post(`${serviceRemoveRoleURL}`, values);
  