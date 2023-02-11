import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import * as modules from './modules';
import createSagaMiddleware, {END} from 'redux-saga';
import rootSaga from './modules/rootSaga';

const reducers = combineReducers(modules);
const rootReducer = (state, action) => {
  if (action.type === 'user/USER_LOGOUT') {
    state = undefined;
  }
  return reducers(state, action);
};
// const middlewares = [];

const sagaMiddleware = createSagaMiddleware();
// middlewares.push(sagaMiddleware);

// 개발 모드일 때만 Redux Devtools 적용
const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev; // && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

const configure = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
    // preloadedState,
    // composeEnhancers(applyMiddleware(...middlewares)),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configure;
