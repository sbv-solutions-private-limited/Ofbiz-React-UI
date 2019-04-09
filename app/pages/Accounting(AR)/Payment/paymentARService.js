import axios from 'axios';
import { baseURL } from '../../../common/rest_urls';
const saveURL = `${baseURL}/createPaymentAndFinAccountTrans`;
const saveUpdate = `${baseURL}/updatePayment`;
const saveApplications = `${baseURL}/createPaymentApplication`;
const removeApplications = `${baseURL}/removePaymentApplication`;
const SetPaymentStatus = `${baseURL}/setPaymentStatus`;
export const serviceSave = values => axios.post(`${saveURL}`, values);
export const serviceUpdate = values => axios.post(`${saveUpdate}`, values);
export const serviceSaveApplication = values =>
  axios.post(`${saveApplications}`, values);
export const serviceRemovePaymentApp = values =>
  axios.post(`${removeApplications}`, values);
export const serviceSetPaymentStatus = values =>
  axios.post(`${SetPaymentStatus}`, values);
