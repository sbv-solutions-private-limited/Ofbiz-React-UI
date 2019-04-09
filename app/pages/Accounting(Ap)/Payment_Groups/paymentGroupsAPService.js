import axios from 'axios';
import { addPaginationURLParams } from '../../../common/Utils/common';
import { baseURL } from '../../../common/rest_urls';
import { NAMESPACE } from './PaymentGroupsConsts';
const saveURL = `${baseURL}/createPaymentGroup`;
const savePaymentGroupMemberURL = `${baseURL}/createPaymentGroupMember`;
const RemovePaymentGroupURL = `${baseURL}/deletePaymentGroup`;
const UpdatePaymentGroupMemberURL = `${baseURL}/updatePaymentGroupMember`;
const DeletePaymentGroupMemberURL = `${baseURL}/expirePaymentGroupMember`;
export const UpdatePaymentGroupURL = `${baseURL}/updatePaymentGroup`;
export const serviceSave = values => axios.post(`${saveURL}`, values);
export const serviceSavePaymentGroupMember = values =>
  axios.post(`${savePaymentGroupMemberURL}`, values);
export const serviceUpdatePaymentGroup = values =>
  axios.post(`${UpdatePaymentGroupURL}`, values);
export const serviceRemovePaymentGroup = values =>
  axios.post(`${RemovePaymentGroupURL}`, values);
export const serviceUpdatePaymentGroupMemeber = values =>
  axios.post(`${UpdatePaymentGroupMemberURL}`, values);
export const serviceDeletePaymentGroupMemeber = values =>
  axios.post(`${DeletePaymentGroupMemberURL}`, values);
