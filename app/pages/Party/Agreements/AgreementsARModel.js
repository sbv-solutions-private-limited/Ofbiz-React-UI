import {
  serviceSave,
  serviceDelete,
  serviceDeleteAll,
  serviceBlock,
  serviceBlockAll,
  serviceUnblock,
  serviceUnblockAll,
  serviceActivate,
  serviceActivateAll,
  serviceDeactivate,
  serviceDeactivateAll,
  serviceList,
  serviceById,
  serviceExists,
} from './AgreementsARService';
import { NAMESPACE } from './AgreementsConsts';

export default {
  namespace: NAMESPACE,

  state: {
    reducerSave: [],
    reducerDelete: [],
    reducerDeleteAll: [],
    reducerBlock: [],
    reducerBlockAll: [],
    reducerUnblock: [],
    reducerUnblockAll: [],
    reducerActivate: [],
    reducerActivateAll: [],
    reducerDeactivate: [],
    reducerDeactivateAll: [],
    reducerList: [],
    reducerById: [],
    reducerExists: [],
  },

  effects: {
    *actionSave({ payload }, { call, put }) {
      const response = yield call(serviceSave, payload);
      yield put({
        type: 'reducerSave',
        payload: response.data || [],
      });
      const respo = yield call(serviceList, {});
      yield put({
        type: 'reducerList',
        payload: respo.data || [],
      });
      return response.data.message || [];
    },

    *actionDelete({ payload }, { call, put }) {
      const response = yield call(serviceDelete, payload);
      yield put({
        type: 'reducerDelete',
        payload: response.data || [],
      });
      const respo = yield call(serviceList, {});
      yield put({
        type: 'reducerList',
        payload: respo.data || [],
      });
      return response.data.message || [];
    },

    *actionDeleteAll({ payload }, { call, put }) {
      const response = yield call(serviceDeleteAll, payload);
      yield put({
        type: 'reducerDeleteAll',
        payload: response.data || [],
      });
      const respo = yield call(serviceList, {});
      yield put({
        type: 'reducerList',
        payload: respo.data || [],
      });
      return response.data.message || [];
    },

    *actionBlock({ payload }, { call, put }) {
      const response = yield call(serviceBlock, payload);
      yield put({
        type: 'reducerBlock',
        payload: response.data || [],
      });
      const respo = yield call(serviceList, {});
      yield put({
        type: 'reducerList',
        payload: respo.data || [],
      });
      return response.data.message || [];
    },

    *actionBlockAll({ payload }, { call, put }) {
      const response = yield call(serviceBlockAll, payload);
      yield put({
        type: 'reducerBlockAll',
        payload: response.data || [],
      });
      const respo = yield call(serviceList, {});
      yield put({
        type: 'reducerList',
        payload: respo.data || [],
      });
      return response.data.message || [];
    },

    *actionUnblock({ payload }, { call, put }) {
      const response = yield call(serviceUnblock, payload);
      yield put({
        type: 'reducerUnblock',
        payload: response.data || [],
      });
      const respo = yield call(serviceList, {});
      yield put({
        type: 'reducerList',
        payload: respo.data || [],
      });
      return response.data.message || [];
    },

    *actionUnblockAll({ payload }, { call, put }) {
      const response = yield call(serviceUnblockAll, payload);
      yield put({
        type: 'reducerUnblockAll',
        payload: response.data || [],
      });
      const respo = yield call(serviceList, {});
      yield put({
        type: 'reducerList',
        payload: respo.data || [],
      });
      return response.data.message || [];
    },

    *actionActivate({ payload }, { call, put }) {
      const response = yield call(serviceActivate, payload);
      yield put({
        type: 'reducerActivate',
        payload: response.data || [],
      });
      const respo = yield call(serviceList, {});
      yield put({
        type: 'reducerList',
        payload: respo.data || [],
      });
      return response.data.message || [];
    },

    *actionActivateAll({ payload }, { call, put }) {
      const response = yield call(serviceActivateAll, payload);
      yield put({
        type: 'reducerActivateAll',
        payload: response.data || [],
      });
      const respo = yield call(serviceList, {});
      yield put({
        type: 'reducerList',
        payload: respo.data || [],
      });
      return response.data.message || [];
    },

    *actionDeactivate({ payload }, { call, put }) {
      const response = yield call(serviceDeactivate, payload);
      yield put({
        type: 'reducerDeactivate',
        payload: response.data || [],
      });
      const respo = yield call(serviceList, {});
      yield put({
        type: 'reducerList',
        payload: respo.data || [],
      });
      return response.data.message || [];
    },

    *actionDeactivateAll({ payload }, { call, put }) {
      const response = yield call(serviceDeactivateAll, payload);
      yield put({
        type: 'reducerDeactivateAll',
        payload: response.data || [],
      });
      const respo = yield call(serviceList, {});
      yield put({
        type: 'reducerList',
        payload: respo.data || [],
      });
      return response.data.message || [];
    },

    *actionList({ payload }, { call, put }) {
      const response = yield call(serviceList, payload);
      yield put({
        type: 'reducerList',
        payload: response.data || [],
      });
    },

    *actionById({ payload }, { call, put }) {
      const response = yield call(serviceById, payload);
      yield put({
        type: 'reducerById',
        payload: response.data || [],
      });
      return response.data || [];
    },

    *actionExists({ payload }, { call, put }) {
      const response = yield call(serviceExists, payload);
      yield put({
        type: 'reducerExists',
        payload: response.data || [],
      });
      return response.data.message || [];
    },
  },

  reducers: {
    reducerSave(state, action) {
      return {
        ...state,
        reducerSave: action.payload,
      };
    },
    reducerDelete(state, action) {
      return {
        ...state,
        reducerDelete: action.payload,
      };
    },
    reducerDeleteAll(state, action) {
      return {
        ...state,
        reducerDeleteAll: action.payload,
      };
    },
    reducerBlock(state, action) {
      return {
        ...state,
        reducerBlock: action.payload,
      };
    },
    reducerBlockAll(state, action) {
      return {
        ...state,
        reducerBlockAll: action.payload,
      };
    },
    reducerUnblock(state, action) {
      return {
        ...state,
        reducerUnblock: action.payload,
      };
    },
    reducerUnblockAll(state, action) {
      return {
        ...state,
        reducerUnblockAll: action.payload,
      };
    },
    reducerActivate(state, action) {
      return {
        ...state,
        reducerActivate: action.payload,
      };
    },
    reducerActivateAll(state, action) {
      return {
        ...state,
        reducerActivateAll: action.payload,
      };
    },
    reducerDeactivate(state, action) {
      return {
        ...state,
        reducerDeactivate: action.payload,
      };
    },
    reducerDeactivateAll(state, action) {
      return {
        ...state,
        reducerDeactivateAll: action.payload,
      };
    },
    reducerList(state, action) {
      return {
        ...state,
        reducerList: action.payload,
      };
    },
    reducerById(state, action) {
      return {
        ...state,
        reducerById: action.payload,
      };
    },
    reducerExists(state, action) {
      return {
        ...state,
        reducerExists: action.payload,
      };
    },
  },
};
