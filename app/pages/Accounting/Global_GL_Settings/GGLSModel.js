import { serviceSaveAuthTransaction } from './GGLSService';
import { NAMESPACE } from './GGLSConsts';
import { message } from 'antd';
export default {
  namespace: NAMESPACE,
  state: {
    reducerSaveAuthTransaction: [],
    message: '',
  },
  effects: {
    *actionAuthTransaction({ payload }, { call, put }) {
      const response = yield call(serviceSaveAuthTransaction, payload);
      console.log('res', response);
      yield put({
        type: 'reducerSaveAuthTransaction',
        payload: response.data || [],
      });
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
    },
    *actionCaptureOrderPayments({ payload }, { call, put }) {
      console.log('yomo');
      const response = yield call(serviceCaptureOrderPayments, payload);
      console.log('res', response);
      yield put({
        type: 'reducerCaptureOrderPayments',
        payload: response.data || [],
      });
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
    },
    *actionManualForcedCcTransaction({ payload }, { call, put }) {
      console.log('yomo');
      const response = yield call(serviceManualForcedCcTransaction, payload);
      console.log('res', response);
      yield put({
        type: 'reducerManualForcedCcTransaction',
        payload: response.data || [],
      });
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
    },
  },
  reducers: {
    reducerSaveAuthTransaction(state, action) {
      return {
        ...state,
        reducerSaveAuthTransaction: action.payload,
      };
    },
    reducerCaptureOrderPayments(state, action) {
      return {
        ...state,
        reducerCaptureOrderPayments: action.payload,
      };
    },
    reducerManualForcedCcTransaction(state, action) {
      return {
        ...state,
        reducerManualForcedCcTransaction: action.payload,
      };
    },
  },
};
