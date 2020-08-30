import { UserActionTypes } from './user.types';

// Functions that return objects
// Making sure that the objects are in the correct format that the actions is expected to be

// Our user action - taking user object as parameter (created inside firebase.utils)
// Fireing of an action that holds the value that we were setting state to before (we call it here: user)
export const setCurrentUser = user => ({
	// Returns an object of type = SET_CURRENT_USER (the same as our reducer expects) - an action object
	type: UserActionTypes.SET_CURRENT_USER,
	payload: user
});
