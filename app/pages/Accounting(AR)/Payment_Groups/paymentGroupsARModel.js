import {
  serviceSave,
  serviceSavePaymentGroupMember,
  serviceUpdatePaymentGroup,
  serviceRemovePaymentGroup,
  serviceUpdatePaymentGroupMemeber,
  serviceDeletePaymentGroupMemeber,
} from './paymentGroupsARService';
import { NAMESPACE } from './PaymentGroupsConsts';
import { message } from 'antd';
export default {
  namespace: NAMESPACE,
  state: {
    reducerSave: [],
    reducerSavePaymentGroupMember: [],
    reducerSavePaymentGroup: [],
  },
  effects: {
    *actionSave({ payload }, { call, put }) {
      const response = yield call(serviceSave, payload);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSave',
        payload: response.data || [],
      });
    },
    *actionSavePaymentGroupMember({ payload }, { call, put }) {
      const response = yield call(serviceSavePaymentGroupMember, payload);
      if (response.data.responseMessage === 'success')
        message.success('created Payment GroupMember', 4);
      else message.error(response.data.errorMessageList, 4);
      yield put({
        type: 'reducerSavePaymentGroupMember',
        payload: response.data || [],
      });
    },
    *actionUpdatePaymentGroup({ payload }, { call, put }) {
      const response = yield call(serviceUpdatePaymentGroup, payload);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerUpdatePaymentGroup',
        payload: response.data || [],
      });
    },
    *actionRemovePaymentGroup({ payload }, { call, put }) {
      const response = yield call(serviceRemovePaymentGroup, payload);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSave',
        payload: response.data || [],
      });
    },
    *actionUpdatePaymentGroupMember({ payload }, { call, put }) {
      const response = yield call(serviceUpdatePaymentGroupMemeber, payload);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSavePaymentGroupMember',
        payload: response.data || [],
      });
    },
    *actionDeletePaymentGroupMember({ payload }, { call, put }) {
      const response = yield call(serviceDeletePaymentGroupMemeber, payload);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSavePaymentGroupMember',
        payload: response.data || [],
      });
    },
  },
  reducers: {
    reducerSave(state, action) {
      return {
        ...state,
        reducerSave: action.payload,
      };
    },
    reducerSavePaymentGroupMember(state, action) {
      return {
        ...state,
        reducerSavePaymentGroupMember: action.payload,
      };
    },
  },
};
