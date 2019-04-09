import React from 'react';
import createHashHistory from 'history/createHashHistory';
import {
  routerMiddleware,
  routerReducer
} from 'react-router-redux';
import document from 'global/document';
import { Provider } from 'react-redux';

import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import invariant from 'invariant';
import checkModel from './checkModel';
import prefixNamespace from './prefixNamespace';
import Plugin, { filterHooks } from './Plugin';
import createStore from './createStore';
import getSaga from './getSaga';
import getReducer from './getReducer';
import createPromiseMiddleware from './createPromiseMiddleware';
import {
  run as runSubscription,
  unlisten as unlistenSubscription,
} from './subscription';
import { noop, isFunction } from './utils';

import { ConnectedLocaleProvider, ConnectedIntlProvider, getLocaleData } from './i18n';

// Internal model to update global state when do unmodel
const globalModel = {
  namespace: '@@global',
  state: 0,
  reducers: {
    UPDATE(state) {
      return state + 1;
    },
  },
};

const i18nModel = {
  namespace: '@@i18n',
  state: getLocaleData('enUS'),
  reducers: {
    UPDATE(_state, { payload: locale }) {
      return getLocaleData(locale) || getLocaleData('enUS');
    }
  }
};

/**
 *
 * @param hooksAndOpts
 * @param createOpts
 */
export default function create(hooksAndOpts = {}) {
  const history = hooksAndOpts.history || createHashHistory();
  const createOpts = {
    initialReducer: {
      routerReducer,
    },
    setupMiddlewares(middlewares) {
      return [
        routerMiddleware(history),
        ...middlewares,
      ];
    },
    setupApp(app) {
      app._history = patchHistory(history);
    },
  };

  const { initialReducer, setupApp = noop } = createOpts;

  const plugin = new Plugin();
  plugin.use(filterHooks(hooksAndOpts));

  const app = {
    _models: [prefixNamespace({ ...globalModel }), prefixNamespace({...i18nModel})],
    _store: null,
    _plugin: plugin,
    use: plugin.use.bind(plugin),
    model,
    start,
    router
  };
  return app;

  /**
   * Register model before app is started.
   *
   * @param m {Object} model to register
   */
  function model(m) {
    if (process.env.NODE_ENV !== 'production') {
      checkModel(m, app._models);
    }
    const prefixedModel = prefixNamespace({ ...m });
    app._models.push(prefixedModel);
    return prefixedModel;
  }

  /**
   * Inject model after app is started.
   *
   * @param createReducer
   * @param onError
   * @param unlisteners
   * @param m
   */
  function injectModel(createReducer, onError, unlisteners, m) {
    m = model(m);

    const store = app._store;
    store.asyncReducers[m.namespace] = getReducer(
      m.reducers,
      m.state,
      plugin._handleActions
    );
    store.replaceReducer(createReducer(store.asyncReducers));
    if (m.effects) {
      store.runSaga(
        app._getSaga(m.effects, m, onError, plugin.get('onEffect'))
      );
    }
    if (m.subscriptions) {
      unlisteners[m.namespace] = runSubscription(
        m.subscriptions,
        m,
        app,
        onError
      );
    }
  }

  /**
   * Unregister model.
   *
   * @param createReducer
   * @param reducers
   * @param unlisteners
   * @param namespace
   *
   * Unexpected key warn problem:
   * https://github.com/reactjs/redux/issues/1636
   */
  function unmodel(createReducer, reducers, unlisteners, namespace) {
    const store = app._store;

    // Delete reducers
    delete store.asyncReducers[namespace];
    delete reducers[namespace];
    store.replaceReducer(createReducer());
    store.dispatch({ type: '@@global/UPDATE' });

    // Cancel effects
    store.dispatch({ type: `${namespace}/@@CANCEL_EFFECTS` });

    // Unlisten subscriptions
    unlistenSubscription(unlisteners, namespace);

    // Delete model from app._models
    app._models = app._models.filter(model => model.namespace !== namespace);
  }

  function basicStart() {
    // Global error handler
    const onError = (err, extension) => {
      if (err) {
        if (typeof err === 'string') err = new Error(err);
        err.preventDefault = () => {
          err._dontReject = true;
        };
        plugin.apply('onError', err => {
          throw new Error(err.stack || err);
        })(err, app._store.dispatch, extension);
      }
    };

    const sagaMiddleware = createSagaMiddleware();
    const promiseMiddleware = createPromiseMiddleware(app);
    app._getSaga = getSaga.bind(null);

    const sagas = [];
    const reducers = { ...initialReducer };
    for (const m of app._models) {
      reducers[m.namespace] = getReducer(
        m.reducers,
        m.state,
        plugin._handleActions
      );
      if (m.effects)
        sagas.push(app._getSaga(m.effects, m, onError, plugin.get('onEffect')));
    }
    const reducerEnhancer = plugin.get('onReducer');
    const extraReducers = plugin.get('extraReducers');
    invariant(
      Object.keys(extraReducers).every(key => !(key in reducers)),
      `[app.start] extraReducers is conflict with other reducers, reducers list: ${Object.keys(
        reducers
      ).join(', ')}`
    );

    // Create store
    const store = (app._store = createStore({
      // eslint-disable-line
      reducers: createReducer(),
      initialState: hooksAndOpts.initialState || {},
      plugin,
      createOpts,
      sagaMiddleware,
      promiseMiddleware,
    }));

    // Extend store
    store.runSaga = sagaMiddleware.run;
    store.asyncReducers = {};

    // Execute listeners when state is changed
    const listeners = plugin.get('onStateChange');
    for (const listener of listeners) {
      store.subscribe(() => {
        listener(store.getState());
      });
    }

    // Run sagas
    sagas.forEach(sagaMiddleware.run);

    // Setup app
    setupApp(app);

    // Run subscriptions
    const unlisteners = {};
    for (const model of app._models) {
      if (model.subscriptions) {
        unlisteners[model.namespace] = runSubscription(
          model.subscriptions,
          model,
          app,
          onError
        );
      }
    }

    // Setup app.model and app.unmodel
    app.model = injectModel.bind(app, createReducer, onError, unlisteners);
    app.unmodel = unmodel.bind(app, createReducer, reducers, unlisteners);

    /**
     * Create global reducer for redux.
     *
     * @returns {Object}
     */
    function createReducer() {
      return reducerEnhancer(
        combineReducers({
          ...reducers,
          ...extraReducers,
          ...(app._store ? app._store.asyncReducers : {}),
        })
      );
    }
  }

  /**
   * Start the app.
   *
   * @returns void
   */  
  function start(container) {
    if (isString(container)) {
      container = document.querySelector(container);
      invariant(
        container,
        `[app.start] container ${container} not found`,
      );
    }

    invariant(
      !container || isHTMLElement(container),
      `[app.start] container should be HTMLElement`,
    );

    invariant(
      app._router,
      `[app.start] router must be registered before app.start()`,
    );

    if (!app._store) {
      basicStart(app);
    }
    const store = app._store;

    // export _getProvider for HMR
    // ref: https://github.com/dvajs/dva/issues/469
    app._getProvider = getProvider.bind(null, store, app);

    // If has container, render; else, return react component
    if (container) {
      render(container, store, app, app._router);
      app._plugin.apply('onHmr')(render.bind(null, container, store, app));
    } else {
      return getProvider(store, app, app._router);
    }
  }

  function router(router) {
    invariant(
      isFunction(router),
      `[app.router] router should be function, but got ${typeof router}`,
    );
    app._router = router;
  }  
}

function isHTMLElement(node) {
  return typeof node === 'object' && node !== null && node.nodeType && node.nodeName;
}

function isString(str) {
  return typeof str === 'string';
}

import { LocaleProvider } from 'antd';

function getProvider(store, app, router) {
  const root = extraProps => (
    <Provider store={store}>
      <ConnectedLocaleProvider>
        <ConnectedIntlProvider>    
        { router({ app, history: app._history, ...extraProps }) }
        </ConnectedIntlProvider>
      </ConnectedLocaleProvider>
    </Provider>
  );
  return root;
}

function render(container, store, app, router) {
  const ReactDOM = require('react-dom');  // eslint-disable-line
  ReactDOM.render(React.createElement(getProvider(store, app, router)), container);
}

function patchHistory(history) {
  const oldListen = history.listen;
  history.listen = (callback) => {
    callback(history.location);
    return oldListen.call(history, callback);
  };
  return history;
}

export function changeLocaleAction(locale) {
  return {
    type: '@@i18n/UPDATE',
    payload: locale
  };
}
