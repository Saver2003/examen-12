import thunkMiddleware from "redux-thunk";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {routerMiddleware, routerReducer} from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import createSagaMiddleware from 'redux-saga';

import usersReducer from "./reducers/users";
import {saveState, loadState} from "./localStorage";
// import {watchRegisterUser} from "./sagas";

const rootReducer = combineReducers({
  users: usersReducer,
  routing: routerReducer
});

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  thunkMiddleware,
  routerMiddleware(history),
  // sagaMiddleware
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, enhancers);

// sagaMiddleware.run(watchRegisterUser);

store.subscribe(() => {
  saveState({
    users: store.getState().users
  });
});

export default store;