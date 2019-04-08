import {
  serviceSave,
  serviceUpdate,
  serviceSavePaymentGroupMember,
  serviceUpdatePaymentGroup,
  serviceRemovePaymentGroup,
  serviceUpdatePaymentGroupMemeber,
  serviceDeletePaymentGroupMemeber,
} from './VendorsAPService';
import { NAMESPACE } from './VendorsConsts';
import { message } from 'antd';
export default {
  namespace: NAMESPACE,
  state: {
    reducerSave: [],
    reducerSavePaymentGroupMember: [],
    reducerSavePaymentGroup: [],
  },
  effects: {
    *actionsaveVendors({ payload }, { call, put }) {
      const response = yield call(serviceSave, payload);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSave',
        payload: response.data || [],
      });
    },
    *actionUpdateVendors({ payload }, { call, put }) {
      const response = yield call(serviceUpdate, payload);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSave',
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
  },
};
