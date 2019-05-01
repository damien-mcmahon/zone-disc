import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import {createBrowserHistory} from 'history';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

import createRootReducer from './reducers';

export const history = createBrowserHistory();

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  createRootReducer(history),
  initialState,
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
    ),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;