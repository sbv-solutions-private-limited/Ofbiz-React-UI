
import {
  SaveFinTrans,
  servicedeleteFA,
  servicesaveFAauth,
  serviceDelReco,
  serviceSaveFA,
  serviceRemoveFAT,
  serviceSaveRoles,
  serviceUpdateRoles,
  serviceUpdateFinancialAccount,
  serviceSaveAgreementPromotions,
  serviceSaveAgreementProducts,
  serviceSaveAgreementParty,
  serviceSaveAgreementGeo,
  serviceSaveAgreementFacilities,
  serviceSaveAgreementWorkEffort,
  SaveBillingAccountRoles,
  serviceSaveAgreementContents,
  serviceCancelAgreement,
  servicesaveReco,
  servicesaveDepWithPay,
  serviceDelFAroles,
  servicedelFAauth,
  serviceUpdateRec,
  serviceUpdateBillingAccountRoles,
  serviceDeleteAgreementWorkEffort,
} from './FinancialAccountService';
import { NAMESPACE } from './FinancialAccountConsts';
import { message } from 'antd';
export default {
  namespace: NAMESPACE,
  state: {
    reducerSave : [],
    reducerSaveFinTrans: [],
    reducerUpdateBillingAccount: [],
    reducerUpdateBillingAccountRoles: [],
    reducerSaveBillingAccountTerms: [],
    reducersaveReco: [],
    reducerSaveFAauth: [],
    reducerSaveAgreementParty: [],
    reducerSaveAgreementGeo: [],
    reducerSaveAgreementFacilities: [],
    reducerSaveAgreementWorkEffort: [],
    reducerSaveBillingAccountRoles: [],
    reducerSaveAgreementContents: [],
    reducerCancelAgreement: [],
    reducerCopyAgreement: [],
    reducerSaveRoles: [],
    reducerRemoveBillingAccountRoles: [],
    message: '',
  },
  effects: {
    *actionCreateFinancialAccount({ payload }, { call, put }) {
      const response = yield call(serviceSaveFA, payload);
      console.log(response);
      yield put({
        type: 'reducerSave',
        payload: response.data || [],
      });
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessageList, 4);
    },
    *actionUpdateFinancialAccount({ payload }, { call, put }) {
      const response = yield call(serviceUpdateFinancialAccount, payload);
      console.log('res', response);
      yield put({
        type: 'reducerSave',
        payload: response.data || [],
      });
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
    },
    *actionRemoveFinancialAccount({ payload }, { call, put }) {
      const response = yield call(servicedeleteFA, payload);
      console.log('res', response);
      yield put({
        type: 'reducerSave',
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
    *actiondelFAauth({ payload }, { call, put }) {
      const response = yield call(servicedelFAauth, payload);
      console.log('res', response);
      yield put({
        type: 'reducerSaveFAauth',
        payload: response.data || [],
      });
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
    },
    *actionSaveFinTrans({ payload }, { call, put }) {
      const response = yield call(SaveFinTrans, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveFinTrans',
        payload: response.data || [],
      });
    },
    *actionremoveFAtrans({ payload }, { call, put }) {
      const response = yield call(serviceRemoveFAT, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessageList, 4);
      yield put({
        type: 'reducerSaveFinTrans',
        payload: response.data || [],
      });
    },
    *actionsaveDepWithPay({ payload }, { call, put }) {
      
      const response = yield call(servicesaveDepWithPay, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success') {
        yield put({
          type: 'reducersaveDepWithPay',
          payload: response.data || [],
        });
        message.success(response.data.successMessage, 4);
      } else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveBillingAccountRoles',
        payload: response.data || [],
      });
    },
    *actionsaveFAauth({ payload }, { call, put }) {
      const response = yield call(servicesaveFAauth, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveFAauth',
        payload: response.data || [],
      });
    },
    *actionSaveFARoles({ payload }, { call, put }) {
      const response = yield call(serviceSaveRoles, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessageList[0], 4);
      yield put({
        type: 'reducerSaveRoles',
        payload: response.data || [],
      });
    },
    *actionUpdateFARoles({ payload }, { call, put }) {
      const response = yield call(serviceUpdateRoles, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessageList, 4);
      yield put({
        type: 'reducerSaveRoles',
        payload: response.data || [],
      });
    },
    *actionDelFARoles({ payload }, { call, put }) {
      const response = yield call(serviceDelFAroles, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage, 4);
        yield put({
          type: 'reducerSaveRoles',
          payload: [],
        });
      } else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerDeleteAgreementItem',
        payload: response.data || [],
      });
    },
    *actionUpdateRec({ payload }, { call, put }) {
      const response = yield call(serviceUpdateRec, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage, 4);
        yield put({
          type: 'reducerupdateReco',
          payload: [],
        });
      } else message.error(response.data.errorMessageList, 4);
      yield put({
        type: 'reducerupdateReco',
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
    *actionsaveReco({ payload }, { call, put }) {
      const response = yield call(servicesaveReco, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessageList, 4);
      yield put({
        type: 'reducersaveReco',
        payload: response.data || [],
      });
    },
    *actionDelReco({ payload }, { call, put }) {
      const response = yield call(serviceDelReco, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducersaveReco',
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
    reducerSave(state, action) {
      return {
        ...state,
        reducerSave: action.payload,
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
    reducerSaveFAauth(state, action) {
      return {
        ...state,
        reducerSaveFAauth: action.payload,
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
    reducerSaveFinTrans(state, action) {
      return {
        ...state,
        reducerSaveFinTrans: action.payload,
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
    reducerSaveRoles(state, action) {
      return {
        ...state,
        reducerSaveRoles: action.payload,
      };
    },
    reducerSaveAgreementWorkEffort(state, action) {
      return {
        ...state,
        reducerSaveAgreementWorkEffort: action.payload,
      };
    },
    reducersaveReco(state, action) {
      return {
        ...state,
        reducersaveReco: action.payload,
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
