import {
  serviceSave,
  serviceUpdate,
  serviceSaveApplication,
  serviceRemovePaymentApp,
  serviceSetPaymentStatus,
} from './paymentService';
import { NAMESPACE } from './PaymentConsts';
import { message } from 'antd';
export default {
  namespace: NAMESPACE,
  state: {
    reducerSave: [],
    reducerApplication: [],
  },
  effects: {
    *actionSave({ payload }, { call, put }) {
      const response = yield call(serviceSave, payload);
      yield put({
        type: 'reducerSave',
        payload: response.data || [],
      });
    },
    *actionUpdatePayment({ payload }, { call, put }) {
      const response = yield call(serviceUpdate, payload);
      yield put({
        type: 'reducerSave',
        payload: response.data || [],
      });
    },
    *actionCreatePaymentAndApplication({ payload }, { call, put }) {
      const response = yield call(serviceSaveApplication, payload);
      yield put({
        type: 'reducerApplication',
        payload: response.data || [],
      });
      if (response.data.responseMessage === 'success') {
        message.success('Created Payment Application');
      } else message.error(response.data.errorMessage, 4);
    },
    *actionRemovePaymentApp({ payload }, { call, put }) {
      const response = yield call(serviceRemovePaymentApp, payload);
      yield put({
        type: 'reducerApplication',
        payload: response.data || [],
      });
      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage);
      } else message.error(response.data.errorMessage, 4);
    },
    *actionSetPaymentStatus({ payload }, { call, put }) {
      const response = yield call(serviceSetPaymentStatus, payload);
      yield put({
        type: 'reducerPaymentStatus',
        payload: response.data || [],
      });
      if (response.data.responseMessage === 'success') {
        message.success('Payment Status Changed');
      } else message.error(response.data.errorMessageList, 4);
    },
  },
  reducers: {
    reducerSave(state, action) {
      return {
        ...state,
        reducerSave: action.payload,
      };
    },
    reducerApplication(state, action) {
      return {
        ...state,
        reducerApplication: action.payload,
      };
    },
  },
};
