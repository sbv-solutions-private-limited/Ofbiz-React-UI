import {
  serviceSave,
  serviceUpdateInvoice,
  serviceCopyInvoice,
  servieSetInvoiceStatus,
  serviceMassChangeInvoiceStatus,
  serviceCreateInvoiceItem,
  serviceRemoveInvoiceItem,
  serviceCreateInvoiceRole,
  serviceRemoveInvoiceRole,
  serviceCreateInvoiceTerm,
  serviceSendInvoicePerEmail,
} from './invoiceAPService';
import { NAMESPACE } from './InvoiceConsts';
import { message } from 'antd';
export default {
  namespace: NAMESPACE,

  state: {
    reducerSave: [],
    reducerUpdateInvoice: [],
    reducerSaveSetInvoiceStatus: [],
    reducerSaveInvoiceItem: [],
    reducerSaveInvoiceRole: [],
    reducerSaveInvoiceTerm: [],
  },

  effects: {
    *actionSave({ payload }, { call, put }) {
      console.log('yoyo');
      const response = yield call(serviceSave, payload);
      console.log(response);
      yield put({
        type: 'reducerSave',
        payload: response.data || [],
      });

      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage, 4);
      } else message.error(response.data.errorMessage, 4);
    },
    *actionUpdateInvoice({ payload }, { call, put }) {
      const response = yield call(serviceUpdateInvoice, payload);
      console.log(response);
      yield put({
        type: 'reducerUpdateInvoice',
        payload: response.data || [],
      });

      if (response.data.responseMessage === 'success') {
        message.success('Invoice updated ', 4);
      } else message.error(response.data.errorMessage, 4);
    },
    *actionSaveCopyInvoice({ payload }, { call, put }) {
      const response = yield call(serviceCopyInvoice, payload);
      console.log(response);
      yield put({
        type: 'reducerSave',
        payload: response.data || [],
      });

      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage);
      } else message.error(response.data.errorMessage, 4);
    },
    *actionSetInvoiceStatus({ payload }, { call, put }) {
      const response = yield call(servieSetInvoiceStatus, payload);
      console.log(response);
      yield put({
        type: 'reducerSaveSetInvoiceStatus',
        payload: response.data || [],
      });

      if (response.data.responseMessage === 'success') {
        message.success('InvoiceStatus changed successfully');
      } else message.error(response.data.errorMessage, 4);
    },
    *actionSaveMassChangeInvoiceStatus({ payload }, { call, put }) {
      const response = yield call(serviceMassChangeInvoiceStatus, payload);
      console.log(response);
      yield put({
        type: 'SaveMassChangeInvoiceStatus',
        payload: response.data || [],
      });

      if (response.data.responseMessage === 'success') {
        message.success(response.data.errorMessage);
      } else message.error(response.data.errorMessageList, 4);
    },
    *actionCreateInvoiceItem({ payload }, { call, put }) {
      const response = yield call(serviceCreateInvoiceItem, payload);
      console.log(response);
      yield put({
        type: 'reducerSaveInvoiceItem',
        payload: response.data || [],
      });

      if (response.data.responseMessage === 'success') {
        message.success('Invoice Item Created');
      } else message.error(response.data.errorMessageList, 4);
    },
    *actionRemoveInvoiceItem({ payload }, { call, put }) {
      const response = yield call(serviceRemoveInvoiceItem, payload);
      console.log(response);
      yield put({
        type: 'reducerSaveInvoiceItem',
        payload: response.data || [],
      });

      if (response.data.responseMessage === 'success') {
        message.success('Invoice Item deleted');
      } else message.error(response.data.errorMessageList, 4);
    },
    *actionCreateInvoiceRole({ payload }, { call, put }) {
      const response = yield call(serviceCreateInvoiceRole, payload);
      console.log(response);
      yield put({
        type: 'reducerSaveInvoiceRole',
        payload: response.data || [],
      });

      if (response.data.responseMessage === 'success') {
        message.success('role');
      } else message.error(response.data.errorMessageList, 4);
    },
    *actionUpdateInvoiceRole({ payload }, { call, put }) {
      const response = yield call(serviceUpdateInvoiceRole, payload);
      console.log(response);
      yield put({
        type: 'reducerSaveInvoiceRole',
        payload: response.data || [],
      });

      if (response.data.responseMessage === 'success') {
        message.success('role');
      } else message.error(response.data.errorMessageList, 4);
    },
    *actionRemoveInvoiceRole({ payload }, { call, put }) {
      const response = yield call(serviceRemoveInvoiceRole, payload);
      console.log(response);
      yield put({
        type: 'reducerSaveInvoiceRole',
        payload: response.data || [],
      });

      if (response.data.responseMessage === 'success') {
        message.success('role');
      } else message.error(response.data.errorMessageList, 4);
    },
    *actionCreateInvoiceTerm({ payload }, { call, put }) {
      const response = yield call(serviceCreateInvoiceTerm, payload);
      console.log(response);
      yield put({
        type: 'reducerSaveInvoiceTerm',
        payload: response.data || [],
      });

      if (response.data.responseMessage === 'success') {
        message.success('InvoiceTerm Created');
      } else message.error(response.data.errorMessageList, 4);
    },
    *actionSendInvoicePerEmail({ payload }, { call, put }) {
      const response = yield call(serviceSendInvoicePerEmail, payload);
      console.log(response);
      yield put({
        type: 'reducerSendInvoicePerEmail',
        payload: response.data || [],
      });

      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage);
      } else message.error(response.data.errorMessageList, 4);
    },
  },
  reducers: {
    reducerSave(state, action) {
      console.log(action.payload);
      return {
        ...state,
        reducerSave: action.payload,
      };
    },
    reducerUpdateInvoice(state, action) {
      console.log(action.payload);
      return {
        ...state,
        reducerUpdateInvoice: action.payload,
      };
    },
    reducerSaveSetInvoiceStatus(state, action) {
      console.log(action.payload);
      return {
        ...state,
        reducerSaveSetInvoiceStatus: action.payload,
      };
    },
    reducerSaveInvoiceItem(state, action) {
      console.log(action.payload);
      return {
        ...state,
        reducerSaveInvoiceItem: action.payload,
      };
    },
    reducerSaveInvoiceRole(state, action) {
      console.log(action.payload);
      return {
        ...state,
        reducerSaveInvoiceRole: action.payload,
      };
    },
    reducerSaveInvoiceTerm(state, action) {
      console.log(action.payload);
      return {
        ...state,
        reducerSaveInvoiceTerm: action.payload,
      };
    },
  },
};
