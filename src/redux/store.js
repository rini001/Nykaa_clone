// import {createStore} from 'redux'
import { reducer } from './reducer';

import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

// export const store = createStore(reducer);

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const middleware = [thunk]
const enhancer = composeEnhancers(applyMiddleware(...middleware));
export const store = createStore(
  reducer,
  enhancer
);