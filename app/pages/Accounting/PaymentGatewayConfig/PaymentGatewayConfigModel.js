import {
  serviceSavePaymentGatewayConfig,
  serviceSavePaymentGatewayConfigClearCommerce,
  serviceSavePaymentGatewayConfigType,
  serviceSaveConfigAUTHORIZE_NET_CONFIG,
  serviceSaveConfigCYBERSOURCE_CONFIG,
  serviceSaveIDEAL_CONFIG,
  serviceSaveConfigEWAY_CONFIG,
  serviceSavePAYFLOWPRO_CONFIG,
  serviceSavePAYPAL_CONFIG,
  serviceSaveSAGEPAY_CONFIG,
  serviceSaveSECUREPAY_CONFIG,
  serviceSaveWORLDPAY_CONFIG,
} from './PaymentGatewayConfigService';
import { NAMESPACE } from './PaymentGatewayConfigConsts';
import { message } from 'antd';
export default {
  namespace: NAMESPACE,
  state: {
    reducerSave: [],
  },
  effects: {
    *actionUpdatePaymentGatewayConfig({ payload }, { call, put }) {
      const response = yield call(serviceSavePaymentGatewayConfig, payload);
      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage, 4);
      } else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSave',
        payload: response.data || [],
      });
    },
    *actionUpdatePaymentGatewayConfigClearCommerce({ payload }, { call, put }) {
      const response = yield call(
        serviceSavePaymentGatewayConfigClearCommerce,
        payload,
      );
      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage, 4);
      } else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSave',
        payload: response.data || [],
      });
    },
    *actionUpdateConfigAUTHORIZE_NET_CONFIG({ payload }, { call, put }) {
      const response = yield call(
        serviceSaveConfigAUTHORIZE_NET_CONFIG,
        payload,
      );
      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage, 4);
      } else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSave',
        payload: response.data || [],
      });
    },
    *actionUpdateConfigCYBERSOURCE_CONFIG({ payload }, { call, put }) {
      const response = yield call(serviceSaveConfigCYBERSOURCE_CONFIG, payload);
      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage, 4);
      } else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSave',
        payload: response.data || [],
      });
    },
    *actionUpdateConfigIDEAL_CONFIG({ payload }, { call, put }) {
      const response = yield call(serviceSaveIDEAL_CONFIG, payload);
      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage, 4);
      } else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSave',
        payload: response.data || [],
      });
    },
    *actionUpdateConfigEWAY_CONFIG({ payload }, { call, put }) {
      const response = yield call(serviceSaveConfigEWAY_CONFIG, payload);
      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage, 4);
      } else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSave',
        payload: response.data || [],
      });
    },
    *actionUpdateConfigPAYFLOWPRO_CONFIG({ payload }, { call, put }) {
      const response = yield call(serviceSavePAYFLOWPRO_CONFIG, payload);
      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage, 4);
      } else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSave',
        payload: response.data || [],
      });
    },
    *actionUpdateConfigPAYPAL_CONFIG({ payload }, { call, put }) {
      const response = yield call(serviceSavePAYPAL_CONFIG, payload);
      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage, 4);
      } else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSave',
        payload: response.data || [],
      });
    },
    *actionUpdateConfigSAGEPAY_CONFIG({ payload }, { call, put }) {
      const response = yield call(serviceSaveSAGEPAY_CONFIG, payload);
      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage, 4);
      } else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSave',
        payload: response.data || [],
      });
    },
    *actionUpdateConfigSECUREPAY_CONFIG({ payload }, { call, put }) {
      const response = yield call(serviceSaveSECUREPAY_CONFIG, payload);
      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage, 4);
      } else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSave',
        payload: response.data || [],
      });
    },
    *actionUpdateConfigWORLDPAY_CONFIG({ payload }, { call, put }) {
      const response = yield call(serviceSaveWORLDPAY_CONFIG, payload);
      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage, 4);
      } else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSave',
        payload: response.data || [],
      });
    },
    *actionUpdatePaymentGatewayConfigType({ payload }, { call, put }) {
      const response = yield call(serviceSavePaymentGatewayConfigType, payload);
      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage, 4);
      } else message.error(response.data.errorMessage, 4);
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
