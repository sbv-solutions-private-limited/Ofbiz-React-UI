import {
  serviceSave,
  serviceUpdate,
  serviceSaveGLAT,
  serviceDeleteGLAT,
  serviceSaveAgreementPromotions,
  serviceSaveAgreementProducts,
  serviceSaveAgreementParty,
  serviceSaveAgreementGeo,
  serviceSaveAgreementFacilities,
  serviceSaveAgreementWorkEffort,
  serviceSaveAgreementRoles,
  serviceSaveAgreementContents,
  serviceSaveOrg,
  serviceDeleteJOU,
  serviceUpdateJOU,
  serviceSaveJOU,
  serviceSavePGAC,
  serviceDeletePGA,
  serviceUpdatePGA,
  serviceSavePGA,
  serviceDeleteFAGL,
  serviceUpdateFAGL,
  serviceSaveFAGL,
  serviceUpdatePGAC,
  serviceDeletePGAC,
  serviceSaveSI,
  serviceDeleteSI,
  serviceSavePTGL,
  serviceDeletePTGL,
  serviceDeletePMGL,
  serviceSavePMGL,
  serviceDeleteVGL,
  
  serviceSaveVGL,
  serviceUpdateVGL,
  serviceDeleteCCGL,
  serviceSaveCCGL,
  serviceUpdateCCGL,
  serviceDeleteTGL,
  serviceSaveTGL,
  serviceUpdateTGL,
  serviceDeletePGL,
  serviceSavePGL,
  serviceUpdatePGL,
  serviceSaveFATGL,
  serviceDeleteFATGL,
  serviceUpdatePT,
  serviceSavePT,
  serviceDeletePT,
  serviceUpdateAR,
  serviceUpdateAT,
  serviceSaveAT,

  serviceSaveQAR,
  serviceUpdateQAR,
  serviceDeleteQAR,
  serviceSaveTP,
  serviceUpdateTP,
  serviceDeleteTP



} from './OGLSService';
import { NAMESPACE } from './OGLSConsts';
import { message } from 'antd';
export default {
  namespace: NAMESPACE,
  state: {
    reducerSave: [],
    reducerSaveAR: [],
    reducerSaveAT:[],
    reducerSavePGL : [],
    reducerSavePT : [],
    reducerUpdateAgreement: [],
    reducerSavePTGL: [],
    reducerSaveVGL: [],
    reducerSaveFAGL : [],
    reducerSavePMGL : [],
    reducerSaveOrg: [],
    reducerSaveSI : [],
    reducerSaveTP : [],
    reducerSaveJou: [],
    reducerSaveTGL: [],
    reducerSaveGLAT: [],
    reducerSaveFATGL: [],

    reducerSavePGA: [],
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
    *actionSave({ payload }, { call, put }) {
      const response = yield call(serviceSave, payload);
      console.log('res', response);
      yield put({
        type: 'reducerSave',
        payload: response.data || [],
      });
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
    },
    *actionSaveTP({ payload }, { call, put }) {
      const response = yield call(serviceSaveTP, payload);
      console.log('res', response);
      yield put({
        type: 'reducerSaveTP',
        payload: response.data || [],
      });
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
    },

    *actionUpdateTP({ payload }, { call, put }) {
      const response = yield call(serviceUpdateTP, payload);
      console.log('res', response);
      yield put({
        type: 'reducerSaveTP',
        payload: response.data || [],
      });
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
    },

    *actionDeleteTP({ payload }, { call, put }) {
      const response = yield call(serviceDeleteTP, payload);
      console.log('res', response);
      yield put({
        type: 'reducerSaveTP',
        payload: response.data || [],
      });
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
    },

    *actionUpdate({ payload }, { call, put }) {
      const response = yield call(serviceUpdate, payload);
      console.log('res', response);
      yield put({
        type: 'reducerUpdate',
        payload: response.data || [],
      });
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
    },
    *actionSaveSI({ payload }, { call, put }) {
      const response = yield call(serviceSaveSI, payload);
      console.log('res', response);
      yield put({
        type: 'reducerSaveSI',
        payload: response.data || [],
      });
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
    },

    *actionDeleteSI({ payload }, { call, put }) {
      const response = yield call(serviceDeleteSI, payload);
      console.log('res', response);
      yield put({
        type: 'reducerSaveSI',
        payload: response.data || [],
      });
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
    },
    *actionSaveOrg({ payload }, { call, put }) {
      const response = yield call(serviceSaveOrg, payload);
      console.log('res', response);
      yield put({
        type: 'reducerSaveOrg',
        payload: response.data || [],
      });
      if (response.data.responseMessage === 'success')
        message.success('agreement canceled successfully', 4);
      else message.error(response.data.errorMessage, 4);
    },
    *actionSaveJOU({ payload }, { call, put }) {
      const response = yield call(serviceSaveJOU, payload);
      console.log('res', response);
      yield put({
        type: 'reducerSaveJou',
        payload: response.data || [],
      });
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
    },
    *actionUpdateJOU({ payload }, { call, put }) {
      const response = yield call(serviceUpdateJOU, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerUpdateJou',
        payload: response.data || [], serviceDeletePMGL,
      
      });
    },
    *actionDeleteJOU({ payload }, { call, put }) {
      const response = yield call(serviceDeleteJOU, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveJou',
        payload: response.data || [],
      });
    },
    *actionSaveGLAT({ payload }, { call, put }) {
      console.log('delete');
      const response = yield call(serviceSaveGLAT, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success') {
        yield put({
          type: 'reducerSaveGLAT',
          payload: response.data || [],
        });
        message.success(response.data.successMessage, 4);
      } else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerDeleteAgreementTerm',
        payload: response.data || [],
      });
    },
    *actionDeleteGLAT({ payload }, { call, put }) {
      const response = yield call(serviceDeleteGLAT, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveGLAT',
        payload: response.data || [],
      });
    },
    *actionSavePGA({ payload }, { call, put }) {
      const response = yield call(serviceSavePGA, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSavePGA',
        payload: response.data || [],
      });
    },
    *actionUpdatePGA({ payload }, { call, put }) {
      const response = yield call(serviceUpdatePGA, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage, 4);
        yield put({
          type: 'reducerUpdatePGA',
          payload: [],
        });
      } else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerDeleteAgreementItem',
        payload: response.data || [],
      });
    },
    *actionDeletePGA({ payload }, { call, put }) {
      const response = yield call(serviceDeletePGA, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage, 4);
        yield put({
          type: 'reducerSavePGA',
          payload: [],
        });
      } else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerDeleteAgreementItem',
        payload: response.data || [],
      });
    },

    *actionSavePGAC({ payload }, { call, put }) {
      const response = yield call(serviceSavePGAC, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessageList, 4);
      yield put({
        type: 'reducerSavePGAC',
        payload: response.data || [],
      });
    },
    *actionUpdatePGAC({ payload }, { call, put }) {
      const response = yield call(serviceUpdatePGAC, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage, 4);
        yield put({
          type: 'reducerUpdatePGAC',
          payload: [],
        });
      } else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerDeleteAgreementItem',
        payload: response.data || [],
      });
    },
    *actionDeletePGAC({ payload }, { call, put }) {
      const response = yield call(serviceDeletePGAC, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage, 4);
        yield put({
          type: 'reducerSavePGAC',
          payload: [],
        });
      } else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerDeleteAgreementItem',
        payload: response.data || [],
      });
    },


    *actionSaveFAGL({ payload }, { call, put }) {
      const response = yield call(serviceSaveFAGL, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveFAGL',
        payload: response.data || [],
      });
    },
    *actionUpdateFAGL({ payload }, { call, put }) {
      const response = yield call(serviceUpdateFAGL, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage, 4);
        yield put({
          type: 'reducerUpdateFAGL',
          payload: [],
        });
      } else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerDeleteAgreementItem',
        payload: response.data || [],
      });
    },
    *actionDeleteFAGL({ payload }, { call, put }) {
      const response = yield call(serviceDeleteFAGL, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success') {
        message.success(response.data.successMessage, 4);reducerSaveFAGL
        yield put({
          type: 'reducerSaveFAGL',
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
    *actionSavePTGL({ payload }, { call, put }) {
      const response = yield call(serviceSavePTGL, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveAgreementRoles',
        payload: response.data || [],
      });
    },
    *actionDeletePTGL({ payload }, { call, put }) {
      const response = yield call(serviceDeletePTGL, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSavePTGL',
        payload: response.data || [],
      });
    },
    *actionSavePMGL({ payload }, { call, put }) {
      const response = yield call(serviceSavePMGL, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSavePMGL',
        payload: response.data || [],
      });
    },
    *actionDeletePMGL({ payload }, { call, put }) {
      const response = yield call(serviceDeletePMGL, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSavePMGL',
        payload: response.data || [],
      });
    },
    *actionSaveVGL({ payload }, { call, put }) {
      const response = yield call(serviceSaveVGL, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveVGL',
        payload: response.data || [],
      });
    },
    *actionDeleteVGL({ payload }, { call, put }) {
      const response = yield call(serviceDeleteVGL, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveVGL',
        payload: response.data || [],
      });
    },
    *actionUpdateVGL({ payload }, { call, put }) {
      const response = yield call(serviceUpdateVGL, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveVGL',
        payload: response.data || [],
      });
    },


    *actionSaveCCGL({ payload }, { call, put }) {
      const response = yield call(serviceSaveCCGL, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveCCGL',
        payload: response.data || [],
      });
    },
    *actionDeleteCCGL({ payload }, { call, put }) {
      const response = yield call(serviceDeleteCCGL, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveCCGL',
        payload: response.data || [],
      });
    },
    *actionUpdateCCGL({ payload }, { call, put }) {
      const response = yield call(serviceUpdateCCGL, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveCCGL',
        payload: response.data || [],
      });
    },

    *actionSaveTGL({ payload }, { call, put }) {
      const response = yield call(serviceSaveTGL, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveTGL',
        payload: response.data || [],
      });
    },
    *actionDeleteTGL({ payload }, { call, put }) {
      const response = yield call(serviceDeleteTGL, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveTGL',
        payload: response.data || [],
      });
    },
    *actionSaveFATGL({ payload }, { call, put }) {
      const response = yield call(serviceSaveFATGL, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveFATGL',
        payload: response.data || [],
      });
    },
    *actionDeleteFATGL({ payload }, { call, put }) {
      const response = yield call(serviceDeleteFATGL, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveFATGL',
        payload: response.data || [],
      });
    },
    *actionUpdateTGL({ payload }, { call, put }) {
      const response = yield call(serviceUpdateTGL, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveTGL',
        payload: response.data || [],
      });
    },

    *actionSavePGL({ payload }, { call, put }) {
      const response = yield call(serviceSavePGL, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSavePGL',
        payload: response.data || [],
      });
    },
    *actionDeletePGL({ payload }, { call, put }) {
      const response = yield call(serviceDeletePGL, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSavePGL',
        payload: response.data || [],
      });
    },
    *actionUpdatePGL({ payload }, { call, put }) {
      const response = yield call(serviceUpdatePGL, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSavePGL',
        payload: response.data || [],
      });
    },

    *actionSavePT({ payload }, { call, put }) {
      const response = yield call(serviceSavePT, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSavePT',
        payload: response.data || [],
      });
    },
    *actionDeletePT({ payload }, { call, put }) {
      const response = yield call(serviceDeletePT, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSavePT',
        payload: response.data || [],
      });
    },
    *actionUpdatePT({ payload }, { call, put }) {
      const response = yield call(serviceUpdatePT, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSavePT',
        payload: response.data || [],
      });
    },
    *actionUpdateAR({ payload }, { call, put }) {
      const response = yield call(serviceUpdateAR, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveAR',
        payload: response.data || [],
      });
    },

    *actionUpdateAT({ payload }, { call, put }) {
      const response = yield call(serviceUpdateAT, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveAR',
        payload: response.data || [],
      });
    },

    *actionSaveAT({ payload }, { call, put }) {
      const response = yield call(serviceSaveAT, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveAR',
        payload: response.data || [],
      });
    },
    *actionSaveQAR({ payload }, { call, put }) {
      const response = yield call(serviceSaveQAR, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveQAR',
        payload: response.data || [],
      });
    },
    *actionUpdateQAR({ payload }, { call, put }) {
      const response = yield call(serviceUpdateQAR, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveAR',
        payload: response.data || [],
      });
    },
    *actionDeleteQAR({ payload }, { call, put }) {
      const response = yield call(serviceDeleteQAR, payload);
      console.log('res', response);
      if (response.data.responseMessage === 'success')
        message.success(response.data.successMessage, 4);
      else message.error(response.data.errorMessage, 4);
      yield put({
        type: 'reducerSaveQAR',
        payload: response.data || [],
      });
    },
  },

  reducers: {
    reducerSave(state, action) {
      return {
        ...state,
        reducerSave: action.payload,
      };reducerSaveAgreementItem
    },
    reducerSavePTGL(state, action) {
      return {
        ...state,
        reducerSavePTGL: action.payload,
      };
    },
    reducerSaveGLAT(state, action) {
      return {
        ...state,
        reducerSaveGLAT: action.payload,
      };
    },
    reducerSaveFATGL(state, action) {
      return {
        ...state,
        reducerSaveFATGL: action.payload,
      };
    },
    reducerSaveFAGL(state, action) {
      return {
        ...state,
        reducerSaveFAGL: action.payload,
      };
    },
    reducerSavePGL(state, action) {
      return {
        ...state,
        reducerSavePGL: action.payload,
      };
    },
    reducerSaveAR(state, action) {
      return {
        ...state,
        reducerSaveAR: action.payload,
      };
    },
    reducerSaveTGL(state, action) {
      return {
        ...state,
        reducerSaveTGL: action.payload,
      };
    },
    reducerSaveCCGL(state, action) {
      return {
        ...state,
        reducerSaveCCGL: action.payload,
      };
    },
    reducerSaveOrg(state, action) {
      return {
        ...state,
        reducerSaveOrg: action.payload,
      };
    },
    reducerSavePMGL(state, action) {
      return {
        ...state,
        reducerSavePMGL: action.payload,
      };
    },
    reducerSavePT(state, action) {
      return {
        ...state,
        reducerSavePT: action.payload,
      };
    },
    reducerSaveJou(state, action) {
      return {
        ...state,
        reducerSaveJou: action.payload,
      };
    },
    reducerSaveAT(state, action) {
      return {
        ...state,
        reducerSaveAT: action.payload,
      };
    },
    reducerSaveSI(state, action) {
      return {
        ...state,
        reducerSaveSI: action.payload,
      };
    },
    reducerSaveQAR(state, action) {
      return {
        ...state,
        reducerSaveQAR: action.payload,
      };
    },
  },
};
