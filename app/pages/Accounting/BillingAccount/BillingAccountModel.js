
import {
  serviceSaveBillingAccount,
  serviceUpdateBillingAccount,
  serviceSaveBillingtTerm,
  serviceUpdateBillingtTerm,
  serviceSave,
  serviceSaveAgreementPromotions,
  serviceSaveAgreementProducts,
  serviceSaveAgreementParty,
  serviceSaveAgreementGeo,
  serviceSaveAgreementFacilities,
  serviceSaveAgreementWorkEffort,
  SaveBillingAccountRoles,
  serviceSaveAgreementContents,
  serviceCancelAgreement,
  serviceRemoveBillingAccountTerms,
  serviceRemoveBillingAccountRoles,
  serviceDeleteAgreementItem,
  serviceUpdateBillingAccountRoles,
  serviceDeleteAgreementWorkEffort,
} from './BillingAccountService';
import { NAMESPACE } from './BillingAccountConsts';
import { message } from 'antd';
export default {
  namespace: NAMESPACE,
  state: {
    reducerSaveBillingAccount: [],
    reducerUpdateBillingAccount: [],
    reducerUpdateBillingAccountRoles: [],
    reducerSaveBillingAccountTerms: [],
    reducerSaveAgreementPromotions: [],
    reducerSaveAgreementProducts: [],
    reducerSaveAgreementParty: [],
    reducerSaveAgreementGeo: [],
    reducerSaveAgreementFacilities: [],
    reducerSaveAgreementWorkEffort: [],
    reducerSaveBillingAccountRoles: [],
    reducerSaveAgreementContents: [],
    reducerCancelAgreement: [],
    reducerCopyAgreement: [],
    reducerUpdateAgreementTerm: [],
    reducerRemoveBillingAccountRoles: [],
    message: '',
  },
  effects: {
    *actionSave({ payload }, { call, put }) {
      const response = yield call(serviceSave, payload);
      console.log(response);
      yield put({
        type: 'reducerSave',
        payload: response.data || [],
      });
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessageList, 4);
    },
    *actionSaveBillingAccount({ payload }, { call, put }) {
      const response = yield call(serviceSaveBillingAccount, payload);
      console.log('res', response);
      yield put({
        type: 'reducerSaveBillingAccount',
        payload: response.data || [],
      });
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
    },
    *actionUpdateBillingAccount({ payload }, { call, put }) {
      const response = yield call(serviceUpdateBillingAccount, payload);
      console.log('res', response);
      yield put({
        type: 'reducerSaveBillingAccount',
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
    *actionSaveBillingAccountTerms({ payload }, { call, put }) {
      const response = yield call(serviceSaveBillingtTerm, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveBillingAccountTerms',
        payload: response.data || [],
      });
    },
    *actionUpdateBillingAccountTerms({ payload }, { call, put }) {
      const response = yield call(serviceUpdateBillingtTerm, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerUpdateBillingAccountTerms',
        payload: response.data || [],
      });
    },
    *actionRemoveBillingAccountRoles({ payload }, { call, put }) {
      console.log('delete');
      const response = yield call(serviceRemoveBillingAccountRoles, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success') {
        yield put({
          type: 'reducerSaveBillingAccountRoles',
          payload: response.data || [],
        });
        message.success(response.data.successMessage, 4);
      } else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveBillingAccountRoles',
        payload: response.data || [],
      });
    },
    *actionRemoveBillingAccountTerms({ payload }, { call, put }) {
      const response = yield call(serviceRemoveBillingAccountTerms, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveBillingAccountTerms',
        payload: response.data || [],
      });
    },
    *actionUpdateBillingAccountRoles({ payload }, { call, put }) {
      const response = yield call(serviceUpdateBillingAccountRoles, payload);
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
    *actionSaveBillingAccountRoles({ payload }, { call, put }) {
      const response = yield call(SaveBillingAccountRoles, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveBillingAccountRoles',
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
    reducerSaveBillingAccount(state, action) {
      return {
        ...state,
        reducerSaveBillingAccount: action.payload,
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
    reducerSaveBillingAccountTerms(state, action) {
      return {
        ...state,
        reducerSaveBillingAccountTerms: action.payload,
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
    reducerRemoveBillingAccountRoles(state, action) {
      return {
        ...state,
        reducerRemoveBillingAccountRoles: action.payload,
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
    reducerSaveBillingAccountRoles(state, action) {
      return {
        ...state,
        reducerSaveBillingAccountRoles: action.payload,
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
