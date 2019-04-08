import { routerRedux } from 'dva/router';
import {
  serviceLogin,
  servicegetValues,
  serviceExists,
} from './LoginPageService';

export default {
  namespace: 'login',

  state: {
    reducerLogin: [],
    loginStatus: false,
    logedUserDetails: {},
    success: false,
    fail: false,
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(serviceLogin, payload);
      if (response.data.message.status === 'success') {
        yield put({
          type: 'reducerLogin',
          payload: response.data || [],
        });
        yield put(
          routerRedux.push({
            pathname: '/gui',
          }),
        );
      }
      yield put({
        type: 'reducerLogin',
        payload: response.data || [],
      });
    },

    *forgot({ payload }, { call, put }) {
      const response = yield call(servicegetValues, payload);

      if (response.statusText === 'OK') {
        yield put({
          type: 'success',
          payload: true,
        });
      } else {
        yield put({
          type: 'fail',
          payload: true,
        });
      }
    },

    *permission({ payload }, { call, put }) {
      const response = yield call(serviceExists, payload);

      if (response.statusText === 'OK') {
        yield put({
          type: 'success',
          payload: true,
        });
      } else {
        yield put({
          type: 'fail',
          payload: true,
        });
      }
    },

    *clear(_, { put }) {
      yield put({
        type: 'clearState',
      });
    },
  },

  reducers: {
    reducerLogin(state, action) {
      return {
        ...state,
        reducerLogin: action.payload,
      };
    },

    registrationStatus(state,{}){
      return {
        ...state,
      };
    },
    success(state, { payload }) {
      return {
        ...state,
        success: payload,
      };
    },

    fail(state, { payload }) {
      return {
        ...state,
        fail: payload,
      };
    },

    clearState(state, {}) {
      return {
        ...state,
        success: false,
        fail: false,
      };
    },
  },
};
