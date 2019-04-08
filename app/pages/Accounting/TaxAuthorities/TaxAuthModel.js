import {
  serviceSave,
  serviceDelTaxAuthCat,
  serviceSaveTaxAuthCat,
  serviceUpdateTaxAuth,
  servicesAVEgla,
  serviceSaveAsso,
  serviceSavePR,
  serviceDelgla,
  serviceDelPR,
  serviceUpdatePR,
  serviceSaveParties,
  serviceUpdateParties,
  serviceDelParties,
  delAssociations} from './TaxAuthService';
import { NAMESPACE } from './TaxAuthConsts';
import { message } from 'antd';
export default {
  namespace: NAMESPACE,
  state: {
    reducerSave: [],
    reducerSaveTaxAuthCat: [],
    reducerDelTaxAuthCat : [],
    reducerSavePaymentGroup: [],
    reducersAVEgla : [],
    reducerSavePr : [],
    reducerDelPr : [],
    reducerSaveParties : []
    
  },
  effects: {
    *actionSave({ payload }, { call, put }) {
      const response = yield call(serviceSave, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSave',
        payload: response.data || [],
      });
    },
    *actionSaveTaxAuthCat({ payload }, { call, put }) {
      const response = yield call(serviceSaveTaxAuthCat, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveTaxAuthCat',
        payload: response.data || [],
      });
    },
    *actionDelTaxAuthCat({ payload }, { call, put }) {
      const response = yield call(serviceDelTaxAuthCat, payload);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerDelTaxAuthCat',
        payload: response.data || [],
      });
    },
    *actionUpdateTaxAuth({ payload }, { call, put }) {
      const response = yield call(serviceUpdateTaxAuth, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSave',
        payload: response.data || [],
      });
    },
    *actionSaveAssociations({ payload }, { call, put }) {
      const response = yield call(serviceSaveAsso, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveASSO',
        payload: response.data || [],
      });
    },
    *actiondelAssociations({ payload }, { call, put }) {
      const response = yield call(delAssociations, payload);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerDelAssociations',
        payload: response.data || [],
      });
    },
    *actionsAVEgla({ payload }, { call, put }) {
      console.log('gla');
      const response = yield call(servicesAVEgla, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducersAVEgla',
        payload: response.data || [],
      });
    },
    *actionDelgla({ payload }, { call, put }) {
      console.log('gla');
      const response = yield call(serviceDelgla, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerDelgla',
        payload: response.data || [],
      });
    },
    *actionSavePR({ payload }, { call, put }) {
      console.log('gla');
      const response = yield call(serviceSavePR, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSavePr',
        payload: response.data || [],
      });
    },
    *actionDelPR({ payload }, { call, put }) {
      console.log('gla');
      const response = yield call(serviceDelPR, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSavePr',
        payload: response.data || [],
      });
    },
    *actionUpdatePR({ payload }, { call, put }) {
      console.log('gla');
      const response = yield call(serviceUpdatePR, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerUpdatePr',
        payload: response.data || [],
      });
    },
    *actionSaveParties({ payload }, { call, put }) {
      console.log('gla');
      const response = yield call(serviceSaveParties, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessageList, 4);
      yield put({
        type: 'reducerSaveParties',
        payload: response.data || [],
      });
    },
    *actionUpdateParties({ payload }, { call, put }) {
      console.log('gla');
      const response = yield call(serviceUpdateParties, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveParties',
        payload: response.data || [],
      });
    },
    *actionDelParties({ payload }, { call, put }) {
      console.log('gla');
      const response = yield call(serviceDelParties, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveParties',
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
    reducerSaveTaxAuthCat(state, action) {
      return {
        ...state,
        reducerSaveTaxAuthCat: action.payload,
      };
    },
    reducersAVEgla(state, action) {
      return {
        ...state,
        reducersAVEgla: action.payload,
      };
    },
    reducerDelgla(state, action) {
      return {
        ...state,
        reducerDelgla: action.payload,
      };
    },
    reducerSavePr(state, action) {
      return {
        ...state,
        reducerSavePr: action.payload,
      };
    },
    reducerDelPr(state, action) {
      return {
        ...state,
        reducerDelPr: action.payload,
      };
    },
    reducerSaveParties(state, action) {
      return {
        ...state,
        reducerSaveParties: action.payload,
      };
    },
  },
};
