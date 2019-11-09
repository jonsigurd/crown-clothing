// middlewares catch actions happening between the action taking and the root reducer
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; // console.log the actions

import rootReducer from './root-reducer';

// The store expects the middlewares as arrays
const middlewares = [logger];

// Spreading in all of the methods or values in the logger array in the function call as individual arguments
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;