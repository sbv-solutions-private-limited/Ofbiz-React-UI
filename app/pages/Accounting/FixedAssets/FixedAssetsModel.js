import {
  serviceSave,
  serviceRemoveFASC,
  serviceUpdateFASC,
  serviceSaveFAprod,
  serviceUpdateFAprod,
  serviceRemoveFAprod,
  serviceUpdateFA,
  serviceSaveFASC,
  serviceAddIden,
  serviceUpdateIden,
  serviceRemoveIden,
  serviceAddReg,
  serviceUpdateReg,
  serviceRemoveReg,
  serviceAddMR,
  serviceUpdateMR,
  serviceRemoveMR,
  serviceAddMAINT,
  serviceRemoveMAINT,
  serviceAddAssign,
  serviceUpdateAssign,
  serviceRemoveAssign,
  serviceSaveDep,
  serviceRemoveDep,
  serviceSaveGLMAP,
  serviceRemoveGL,
  serviceUpdateMaint,
  serviceSaveMO,
  serviceRemoveMO
} from './FixedAssetsService';
import { NAMESPACE } from './FixedAssetsConsts';
import { message } from 'antd';
export default {
  namespace: NAMESPACE,
  state: {
    reducerSave: [],
    reducerSaveReg : [],
    reducerSaveMR:[], 
    reducerSaveMAINT:[],
    reducerSaveFASC : [],
    reducerSaveFAprod: [],
    reducerSavePaymentGroup: [],
    reducerSaveIden:[],
    reducerSaveMAINT : [],
    reducerSaveAssign:[],
    reducerSaveDep : [],
    reducerSaveGL:[],
    reducerSaveMO : []
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
    *actionUpdateFA({ payload }, { call, put }) {
      const response = yield call(serviceUpdateFA, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessageList, 4);
      yield put({
        type: 'reducerUpdate',
        payload: response.data || [],
      });
    },
    *actionSaveFAprod({ payload }, { call, put }) {
      const response = yield call(serviceSaveFAprod, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveFAprod',
        payload: response.data || [],
      });
    },
    *actionUpdateFAprod({ payload }, { call, put }) {
      const response = yield call(serviceUpdateFAprod, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveFAprod',
        payload: respoACTION_TYPE_ADD_FA_SCnse.data || [],
      });
    },
    *actionRemoveFAprod({ payload }, { call, put }) {
      const response = yield call(serviceRemoveFAprod, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveFAprod',
        payload: response.data || [],
      });
    },
    *actionSaveFASC({ payload }, { call, put }) {
      const response = yield call(serviceSaveFASC, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveFASC',
        payload: response.data || [],
      });
    },
    *actionRemoveFASC({ payload }, { call, put }) {
      const response = yield call(serviceRemoveFASC, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveFASC',
        payload: response.data || [],
      });
    },
    *actionUpdateFASC({ payload }, { call, put }) {
      const response = yield call(serviceUpdateFASC, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveFASC',
        payload: response.data || [],
      });
    },
    *actionAddIDEN({ payload }, { call, put }) {
      const response = yield call(serviceAddIden, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveIden',
        payload: response.data || [],
      });
    },
    *actionUpdateIDEN({ payload }, { call, put }) {
      const response = yield call(serviceUpdateIden, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveIden',
        payload: response.data || [],
      });
    },
    *actionRemoveIDEN({ payload }, { call, put }) {
      const response = yield call(serviceRemoveIden, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveIden',
        payload: response.data || [],
      });
    },
    *actionAddReg({ payload }, { call, put }) {
      const response = yield call(serviceAddReg, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveReg',
        payload: response.data || [],
      });
    },
    *actionUpdateReg({ payload }, { call, put }) {
      const response = yield call(serviceUpdateReg, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveReg',
        payload: response.data || [],
      });
    },
    *actionRemoveReg({ payload }, { call, put }) {
      const response = yield call(serviceRemoveReg, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveReg',
        payload: response.data || [],
      });
    },
    *actionAddMR({ payload }, { call, put }) {
      const response = yield call(serviceAddMR, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveMR',
        payload: response.data || [],
      });
    },
    *actionUpdateMR({ payload }, { call, put }) {
      const response = yield call(serviceUpdateMR, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveMR',
        payload: response.data || [],
      });
    },
    *actionRemoveMR({ payload }, { call, put }) {
      const response = yield call(serviceRemoveMR, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveMR',
        payload: response.data || [],
      });
    },
    *actionAddMaint({ payload }, { call, put }) {
      const response = yield call(serviceAddMAINT, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveMAINT',
        payload: response.data || [],
      });
    },
    *actionRemoveMaint({ payload }, { call, put }) {
      const response = yield call(serviceRemoveMAINT, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveMAINT',
        payload: response.data || [],
      });
    },
    
    *actionAddAssign({ payload }, { call, put }) {
      const response = yield call(serviceAddAssign, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveAssign',
        payload: response.data || [],
      });
    },
    *actionUpdateAssign({ payload }, { call, put }) {
      const response = yield call(serviceUpdateAssign, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveAssign',
        payload: response.data || [],
      });
    },
    *actionRemoveAssign({ payload }, { call, put }) {
      const response = yield call(serviceRemoveAssign, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveAssign',
        payload: response.data || [],
      });
    },
    *actionSaveDep({ payload }, { call, put }) {
      const response = yield call(serviceSaveDep, payload);
      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveDep',
        payload: response.data || [],
      });
    },
    *actionRemoveDep({ payload }, { call, put }) {
      const response = yield call(serviceRemoveDep, payload);

      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveDep',
        payload: response.data || [],
      });
    },
    *actionSaveGLMAP({ payload }, { call, put }) {
      const response = yield call(serviceSaveGLMAP, payload);

      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveGL',
        payload: response.data || [],
      });
    },
    *actionRemoveGL({ payload }, { call, put }) {
      const response = yield call(serviceRemoveGL, payload);

      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveGL',
        payload: response.data || [],
      });
    },
    *actionUpdateMAINT({ payload }, { call, put }) {
      const response = yield call(serviceUpdateMaint, payload);

      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMes, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveGL',
        payload: response.data || [],
      });
    },
    *actionSaveMO({ payload }, { call, put }) {
      const response = yield call(serviceSaveMO, payload);

      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMes, 4);
      else message.error(response.data.errorMessageList, 4);
      yield put({
        type: 'reducerSaveMO',
        payload: response.data || [],
      });
    },
    *actionRemoveMO({ payload }, { call, put }) {
      const response = yield call(serviceRemoveMO, payload);

      console.log(response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMes, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveMO',
        payload: response.data || [],
      });
    }
  },
  reducers: {
    reducerSave(state, action) {
      return {
        ...state,
        reducerSave: action.payload,
      };
    },
    reducerSaveFAprod(state, action) {
      return {
        ...state,
        reducerSaveFAprod: action.payload,
      };
    },
    reducerSaveFASC(state, action) {
      return {
        ...state,
        reducerSaveFAprod: action.payload,
      };
    },
    reducerSaveIden(state, action) {
      return {
        ...state,
        reducerSaveIden: action.payload,
      };
    },
    reducerSaveReg(state, action) {
      return {
        ...state,
        reducerSaveReg: action.payload,
      };
    },
    reducerSaveMR(state, action) {
      return {
        ...state,
        reducerSaveMR: action.payload,
      };
    },
    reducerSaveMAINT(state, action) {
      return {
        ...state,
        reducerSaveMAINT: action.payload,
      };
    },
    reducerSaveAssign(state, action) {
      return {
        ...state,
        reducerSaveAssign: action.payload,
      };
    },
    reducerSaveDep(state, action) {
      return {
        ...state,
        reducerSaveDep: action.payload,
      };
    },
    reducerSaveGL(state, action) {
      return {
        ...state,
        reducerSaveGL: action.payload,
      };
    },
    reducerSaveMO(state, action) {
      return {
        ...state,
        reducerSaveMO: action.payload,
      };
    },
  },
};
