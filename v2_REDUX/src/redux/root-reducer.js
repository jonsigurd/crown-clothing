// This reducer is the base reducer object that represents all of the state of the app
// This reducer is the actual code that binds all of the other states together
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

// One big json object of our app state
export default combineReducers({
	// prop user that represents the slice of state for user
	user: userReducer
});