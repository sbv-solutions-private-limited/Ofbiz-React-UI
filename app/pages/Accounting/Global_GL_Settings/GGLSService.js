import axios from 'axios';
import { baseURL } from '../../../common/rest_urls';
const AuthTransaction_saveURL = `${baseURL}/authOrderPaymentPreference`;
const CaptureOrderPayments_saveURL = `${baseURL}/captureOrderPayments`;
const ManualForcedCcTransaction_saveURL = `${baseURL}/releaseOrderPaymentPreference`;

export const serviceSaveAuthTransaction = values =>
  axios.post(`${AuthTransaction_saveURL}`, values);
export const serviceCaptureOrderPayments = values =>
  axios.post(`${CaptureOrderPayments_saveURL}`, values);
export const serviceManualForcedCcTransaction = values =>
  axios.post(`${ManualForcedCcTransaction_saveURL}`, values);
