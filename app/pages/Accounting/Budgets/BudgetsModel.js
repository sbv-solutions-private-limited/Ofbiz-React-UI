import {
  serviceSave,
  serviceUpdate,
  serviceBudgetStatus,
  serviceSaveItem,
  serviceRemoveItem,
  serviceRemoveRole,
  serviceSaveRole,
  serviceSaveReviews,
  serviceRemoveReviews,
  serviceRemoveInvoiceItem,
  serviceCreateInvoiceRole,
  serviceRemoveInvoiceRole,
  serviceCreateInvoiceTerm,
  serviceSendInvoicePerEmail,
} from './BudgetsService';
import { NAMESPACE } from './BudgetsConsts';
import { message } from 'antd';
export default {
  namespace: NAMESPACE,

  state: {
    reducerSave: [],
    reducerSaveReviews:[],
    reducerSaveItem:[],
    reducerUpdateInvoice: [],
    reducerSaveSetInvoiceStatus: [],
    reducerSaveInvoiceItem: [],
    reducerSaveRole: [],
    reducerRemoveRole: [],
  },

  effects: {
    *actionSave({ payload }, { call, put }) {
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
    *actionUpdate({ payload }, { call, put }) {
      const response = yield call(serviceUpdate, payload);
      yield put({
        type: 'reducerUpdate',
        payload: response.data || [],
      });

      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage, 4);
      } else message.error(response.data.errorMessage, 4);
    },
    *actionBudgetStatus({ payload }, { call, put }) {
      const response = yield call(serviceBudgetStatus, payload);
     console.log(response);
      yield put({
        type: 'reducerBudgetStatus',
        payload: response.data || [],
      });

      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage, 4);
      } else message.error(response.data.errorMessage, 4);
    },
    *actionSaveItem({ payload }, { call, put }) {
      const response = yield call(serviceSaveItem, payload);
     console.log(response);
      yield put({
        type: 'reducerSaveItem',
        payload: response.data || [],
      });

      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage);
      } else message.error(response.data.errorMessage, 4);
    },
    *actionRemoveItem({ payload }, { call, put }) {
      const response = yield call(serviceRemoveItem, payload);
      yield put({
        type: 'reducerSaveItem',
        payload: response.data || [],
      });

      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage);
      } else message.error(response.data.errorMessage, 4);
    },
    *actionSaveRole({ payload }, { call, put }) {
      const response = yield call(serviceSaveRole, payload);
      console.log(response);
      yield put({
        type: 'reducerSaveRole',
        payload: response.data || [],
      });

      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage);
      } else message.error(response.data.errorMessageList, 4);
    },
    *actionRemoveRole({ payload }, { call, put }) {
      const response = yield call(serviceRemoveRole, payload);
      yield put({
        type: 'reducerRemoveRole',
        payload: response.data || [],
      });

      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage);
      } else message.error(response.data.errorMessageList, 4);
    },
    *actionRemoveInvoiceItem({ payload }, { call, put }) {
      const response = yield call(serviceRemoveInvoiceItem, payload);
      yield put({
        type: 'reducerSaveInvoiceItem',
        payload: response.data || [],
      });

      if (response.data.responseMessage === 'success') {
        message.success('Invoice Item deleted');
      } else message.error(response.data.errorMessageList, 4);
    },
    *actionSaveReviews({ payload }, { call, put }) {
      const response = yield call(serviceSaveReviews, payload);
      console.log(response);
      yield put({
        type: 'reducerSaveReviews',
        payload: response.data || [],
      });

      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage);
      } else message.error(response.data.errorMessage, 4);
    },
    *actionUpdateInvoiceRole({ payload }, { call, put }) {
      const response = yield call(serviceUpdateInvoiceRole, payload);
      yield put({
        type: 'reducerSaveInvoiceRole',
        payload: response.data || [],
      });

      if (response.data.responseMessage === 'success') {
        message.success('role');
      } else message.error(response.data.errorMessageList, 4);
    },
    *actionRemoveReviews({ payload }, { call, put }) {
      const response = yield call(serviceRemoveReviews, payload);
      console.log(response);
      yield put({
        type: 'reducerSaveReviews',
        payload: response.data || [],
      });

      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage);
      } else message.error(response.data.errorMessageList, 4);
    },
    *actionCreateInvoiceTerm({ payload }, { call, put }) {
      const response = yield call(serviceCreateInvoiceTerm, payload);
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
      return {
        ...state,
        reducerSave: action.payload,
      };
    },
    reducerUpdateInvoice(state, action) {
      return {
        ...state,
        reducerUpdateInvoice: action.payload,
      };
    },
    reducerSaveSetInvoiceStatus(state, action) {
      return {
        ...state,
        reducerSaveSetInvoiceStatus: action.payload,
      };
    },
    reducerSaveItem(state, action) {
      return {
        ...state,
        reducerSaveItem: action.payload,
      };
    },
     reducerSaveReviews(state, action) {
      return {
        ...state,
        reducerSaveReviews: action.payload,
      };
    },
    reducerSaveRole(state, action) {
      return {
        ...state,
        reducerSaveRole: action.payload,
      };
    },
    reducerRemoveRole(state, action) {
      return {
        ...state,
        reducerRemoveRole: action.payload,
      };
    },
  },
};
