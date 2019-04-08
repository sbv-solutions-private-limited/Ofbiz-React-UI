import {
  serviceSaveAgreement,
  serviceUpdateAgreement,
  serviceSaveAgreementTerm,
  serviceSaveAgreementItem,
  serviceSaveAgreementPromotions,
  serviceSaveAgreementProducts,
  serviceSaveAgreementParty,
  serviceSaveAgreementGeo,
  serviceSaveAgreementFacilities,
  serviceSaveAgreementWorkEffort,
  serviceSaveAgreementRoles,
  serviceSaveAgreementContents,
  serviceCancelAgreement,
  serviceCopyAgreement,
  serviceUpdateAgreementTerm,
  serviceDeleteAgreementTerm,
  serviceDeleteAgreementItem,
  serviceUpdateAgreementItem,
  serviceDeleteAgreementWorkEffort,
} from './AgreementsService';
import { NAMESPACE } from './AgreementsConsts';
import { message } from 'antd';
export default {
  namespace: NAMESPACE,
  state: {
    reducerSaveAgreement: [],
    reducerUpdateAgreement: [],
    reducerSaveAgreementTerm: [],
    reducerSaveAgreementItem: [],
    reducerSaveAgreementPromotions: [],
    reducerSaveAgreementProducts: [],
    reducerSaveAgreementParty: [],
    reducerSaveAgreementGeo: [],
    reducerSaveAgreementFacilities: [],
    reducerSaveAgreementWorkEffort: [],
    reducerSaveAgreementRoles: [],
    reducerSaveAgreementContents: [],
    reducerCancelAgreement: [],
    reducerCopyAgreement: [],
    reducerUpdateAgreementTerm: [],
    reducerDeleteAgreementTerm: [],
    message: '',
  },

  effects: {
    *actionSaveAgreement({ payload }, { call, put }) {
      const response = yield call(serviceSaveAgreement, payload);
      console.log('res', response);
      yield put({
        type: 'reducerSaveAgreement',
        payload: response.data || [],
      });
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
    },

    *actionUpdateAgreement({ payload }, { call, put }) {
      const response = yield call(serviceUpdateAgreement, payload);
      console.log('res', response);
      yield put({
        type: 'reducerUpdateAgreement',
        payload: response.data || [],
      });
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
    },
    *actionDelete({ payload }, { call, put }) {
      const response = yield call(serviceCancelAgreement, payload);
      console.log('res', response);
      yield put({
        type: 'reducerCancelAgreement',
        payload: response.data || [],
      });
      if (response.data.responseMessage === 'success')
        message.success('agreement canceled successfully', 4);
      else message.error(response.data.errorMessage, 4);
    },
    *actionCopyAgreement({ payload }, { call, put }) {
      const response = yield call(serviceCopyAgreement, payload);
      console.log('res', response);
      yield put({
        type: 'reducerCopyAgreement',
        payload: response.data || [],
      });
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
    },
    *actionSaveAgreementTerm({ payload }, { call, put }) {
      const response = yield call(serviceSaveAgreementTerm, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveAgreementTerm',
        payload: response.data || [],
      });
    },
    *actionUpdateAgreementTerm({ payload }, { call, put }) {
      const response = yield call(serviceUpdateAgreementTerm, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerUpdateAgreementTerm',
        payload: response.data || [],
      });
    },
    *actionDeleteAgreementTerm({ payload }, { call, put }) {
      console.log('delete');
      const response = yield call(serviceDeleteAgreementTerm, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success') {
        yield put({
          type: 'reducerSaveAgreementTerm',
          payload: response.data || [],
        });
        message.success(response.data.successMessage, 4);
      } else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerDeleteAgreementTerm',
        payload: response.data || [],
      });
    },
    *actionSaveAgreementItem({ payload }, { call, put }) {
      const response = yield call(serviceSaveAgreementItem, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveAgreementItem',
        payload: response.data || [],
      });
    },
    *actionUpdateAgreementItem({ payload }, { call, put }) {
      const response = yield call(serviceUpdateAgreementItem, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerUpdateAgreementItem',
        payload: response.data || [],
      });
    },
    *actionDeleteAgreementItem({ payload }, { call, put }) {
      const response = yield call(serviceDeleteAgreementItem, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage, 4);
        yield put({
          type: 'reducerSaveAgreementItem',
          payload: [],
        });
      } else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerDeleteAgreementItem',
        payload: response.data || [],
      });
    },
    *actionDeleteAgreementWorkEffort({ payload }, { call, put }) {
      const response = yield call(serviceDeleteAgreementWorkEffort, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage, 4);
        yield put({
          type: 'reducerSaveAgreementWorkEffort',
          payload: [],
        });
      } else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerDeleteAgreementItem',
        payload: response.data || [],
      });
    },
    *actionSaveAgreementPromotions({ payload }, { call, put }) {
      console.log('promo');
      const response = yield call(serviceSaveAgreementPromotions, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveAgreementPromotions',
        payload: response.data || [],
      });
    },
    *actionSaveAgreementProducts({ payload }, { call, put }) {
      const response = yield call(serviceSaveAgreementProducts, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveAgreementProducts',
        payload: response.data || [],
      });
    },
    *actionSaveAgreementParty({ payload }, { call, put }) {
      const response = yield call(serviceSaveAgreementParty, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveAgreementParty',
        payload: response.data || [],
      });
    },
    *actionSaveAgreementGeo({ payload }, { call, put }) {
      const response = yield call(serviceSaveAgreementGeo, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveAgreementGeo',
        payload: response.data || [],
      });
    },
    *actionSaveAgreementFacilities({ payload }, { call, put }) {
      const response = yield call(serviceSaveAgreementFacilities, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveAgreementFacilities',
        payload: response.data || [],
      });
    },
    *actionSaveAgreementWorkEffort({ payload }, { call, put }) {
      const response = yield call(serviceSaveAgreementWorkEffort, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveAgreementEffort',
        payload: response.data || [],
      });
    },
    *actionSaveAgreementRoles({ payload }, { call, put }) {
      const response = yield call(serviceSaveAgreementRoles, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveAgreementRoles',
        payload: response.data || [],
      });
    },
    *actionSaveAgreementContents({ payload }, { call, put }) {
      const response = yield call(serviceSaveAgreementContents, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveAgreementContents',
        payload: response.data || [],
      });
    },
  },

  reducers: {
    reducerSaveAgreement(state, action) {
      return {
        ...state,
        reducerSaveAgreement: action.payload,
      };
    },
    reducerUpdateAgreement(state, action) {
      return {
        ...state,
        reducerUpdateAgreement: action.payload,
      };
    },
    reducerCancelAgreement(state, action) {
      return {
        ...state,
        reducerSaveAgreement: action.payload,
      };
    },
    reducerSaveAgreementTerm(state, action) {
      return {
        ...state,
        reducerSaveAgreementTerm: action.payload,
      };
    },
    reducerSaveAgreementItem(state, action) {
      return {
        ...state,
        reducerSaveAgreementItem: action.payload,
      };
    },
    reducerUpdateAgreementTerm(state, action) {
      return {
        ...state,
        reducerUpdateAgreementTerm: action.payload,
      };
    },
    reducerDeleteAgreementTerm(state, action) {
      return {
        ...state,
        reducerDeleteAgreementTerm: action.payload,
      };
    },
    reducerSaveAgreementPromotions(state, action) {
      return {
        ...state,
        reducerSaveAgreementPromotions: action.payload,
      };
    },
    reducerSaveAgreementProducts(state, action) {
      return {
        ...state,
        reducerSaveAgreementProducts: action.payload,
      };
    },
    reducerSaveAgreementParty(state, action) {
      return {
        ...state,
        reducerSaveAgreementParty: action.payload,
      };
    },
    reducerSaveAgreementGeo(state, action) {
      return {
        ...state,
        reducerSaveAgreementGeo: action.payload,
      };
    },
    reducerSaveAgreementFacilities(state, action) {
      return {
        ...state,
        reducerSaveAgreementFacilities: action.payload,
      };
    },
    reducerSaveAgreementWorkEffort(state, action) {
      return {
        ...state,
        reducerSaveAgreementWorkEffort: action.payload,
      };
    },
    reducerSaveAgreementRoles(state, action) {
      return {
        ...state,
        reducerSaveAgreementRoles: action.payload,
      };
    },
    reducerSaveAgreementContents(state, action) {
      return {
        ...state,
        reducerSaveAgreementContents: action.payload,
      };
    },
  },
};
