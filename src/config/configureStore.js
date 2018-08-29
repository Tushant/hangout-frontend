/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import appSaga from './saga';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history) {
  // create the store with two middlewares
  // 1. Saga middleware: Makes redux-sagas work
  // 2. Router middleware: Syncs the location/URL path to the state - push, go, replace
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  // eslint-disable-next-line
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false })
      : compose;

  /** holds the whole state tree of our application.
   * @param reducer
   * @param initialState - preloadedState and its optional
   * @param enhancer - store enhancer with middleware, time travel
   */

  const store = createStore(connectRouter(history)(reducers), initialState, composeEnhancers(...enhancers));

  // Extensions
  store.runSaga = sagaMiddleware.run(appSaga);

  return store;
}
