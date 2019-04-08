import axios from 'axios';
import { baseURL } from '../../../common/rest_urls';
const SavePaymentGatewayConfigURL = `${baseURL}/updatePaymentGatewayConfig`;
const SavePaymentGatewayConfigClearCommerce = `${baseURL}/updatePaymentGatewayConfigClearCommerce`;
const SavePaymentGatewayConfigType = `${baseURL}/updatePaymentGatewayConfigType`;
const SaveConfigCYBERSOURCE_CONFIG = `${baseURL}/updatePaymentGatewayConfigCyberSource`;
const SaveIDEAL_CONFIG = `${baseURL}/updatePaymentGatewayConfigiDEAL`;
const SaveConfigEWAY_CONFIG = `${baseURL}/updatePaymentGatewayConfigEway`;
const SavePAYFLOWPRO_CONFIG = `${baseURL}/updatePaymentGatewayConfigPayflowPro`;
const SavePAYPAL_CONFIG = `${baseURL}/updatePaymentGatewayConfigPayPal`;
const SaveSAGEPAY_CONFIG = `${baseURL}/updatePaymentGatewayConfigSagePay`;
const SaveSECUREPAY_CONFIG = `${baseURL}/updatePaymentGatewayConfigSecurePay`;
const SaveWORLDPAY_CONFIG = `${baseURL}/updatePaymentGatewayConfigWorldPay`;
const SaveConfigAUTHORIZE_NET_CONFIG = `${baseURL}/updatePaymentGatewayConfigAuthorizeNet`;
export const serviceSavePaymentGatewayConfig = values =>
  axios.post(`${SavePaymentGatewayConfigURL}`, values);
export const serviceSavePaymentGatewayConfigClearCommerce = values =>
  axios.post(`${SavePaymentGatewayConfigClearCommerce}`, values);
export const serviceSavePaymentGatewayConfigType = values =>
  axios.post(`${SavePaymentGatewayConfigType}`, values);
export const serviceSaveConfigCYBERSOURCE_CONFIG = values =>
  axios.post(`${SaveConfigCYBERSOURCE_CONFIG}`, values);
export const serviceSaveIDEAL_CONFIG = values =>
  axios.post(`${SaveIDEAL_CONFIG}`, values);
export const serviceSaveConfigEWAY_CONFIG = values =>
  axios.post(`${SaveConfigEWAY_CONFIG}`, values);
export const serviceSavePAYFLOWPRO_CONFIG = values =>
  axios.post(`${SavePAYFLOWPRO_CONFIG}`, values);
export const serviceSavePAYPAL_CONFIG = values =>
  axios.post(`${SavePAYPAL_CONFIG}`, values);
export const serviceSaveSAGEPAY_CONFIG = values =>
  axios.post(`${SaveSAGEPAY_CONFIG}`, values);
export const serviceSaveSECUREPAY_CONFIG = values =>
  axios.post(`${SaveSECUREPAY_CONFIG}`, values);
export const serviceSaveWORLDPAY_CONFIG = values =>
  axios.post(`${SaveWORLDPAY_CONFIG}`, values);
export const serviceSaveConfigAUTHORIZE_NET_CONFIG = values =>
  axios.post(`${SaveConfigAUTHORIZE_NET_CONFIG}`, values);
