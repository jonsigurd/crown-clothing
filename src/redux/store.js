// middlewares catch actions happening between the action taking and the root reducer
import { createStore, applyMiddleware } from 'redux';
// Persist allows the browser to cache our store depending on certain configuration options that we
// are going to set
import { persistStore } from 'redux-persist';
import logger from 'redux-logger'; // console.log the actions

import rootReducer from './root-reducer';

// The store expects the middlewares as arrays
const middlewares = [];

// If the node environment is development, then we want to push the logger into our middleware array
// above, but if it's production, we don't want the logger (in the heroku deployed app)
if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
};

// Spreading in all of the methods or values in the logger array in the function call as individual
// arguments
// After including persist, we now export the store out
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Here we export the persistor that calls the persistStore passing in our store
export const persistor = persistStore(store);

// Exporting the store and the persistor object
export default { store, persistor };