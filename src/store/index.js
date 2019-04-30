import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { createEpicMiddleware } from 'redux-observable';

import epics from './epics';
import createRootReducer from './reducers';

export const history = createBrowserHistory();

const initialState = {};
const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  createRootReducer(history),
  initialState,
  composeEnhancers(
    applyMiddleware(
      epicMiddleware,
      routerMiddleware(history),
    ),
  ),
);

epicMiddleware.run(epics);

export default store;