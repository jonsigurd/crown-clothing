// This reducer is the base reducer object that represents all of the state of the app
// This reducer is the actual code that binds all of the other states together
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// Here we get the actual localStorage object on our window browser
// storage(localStorage) maintains states accross sessions (different tabs and after reloading)
// sessionStorage maintains states for one tab only
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

// Defining a new persist config
// This is the JSON object that represents the possible configurations that we want for redux-persist
// use
const persistConfig = {
	// Our key is root, meaning at what point inside of our reducer object do we want to store
	// everything
	// We pass in storage that is the storage we use (localStorage)
	// And we pass in the whitelist prop, which is the array containing the string names of any of the
	// reducers that we wanna store (user is handled by firebase authentication, so no need to persist
	// it)
	key: 'root',
	storage,
	whitelist: ['cart']
}

// One big json object of our app state
// What we were exporting before, we now set to our rootReducer
const rootReducer = combineReducers({
	// prop user that represents the slice of state for user (the props point to the reducers)
	user: userReducer,
	// prop cart that represents the slice of state for cart
	cart: cartReducer,
	// prop directory that represents the slice of state for directory
	directory: directoryReducer,
	// prop shop that represents the slice of state for shop
	shop: shopReducer
});

// Now we export the persistReducer as a function passing our persistConfig as well as our
// rootReducer
// This is a modified version of our rootReducer with peristConfig on top of it
// (It now has persist capabilities)
export default persistReducer(persistConfig, rootReducer);