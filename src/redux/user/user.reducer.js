import { UserActionTypes } from './user.types';

// Initial state when this component mounts for the first time
const INITIAL_STATE = {
	currentUser: null
};

// Function takes the state (passed from the store (is initial state as default)) and some action
const userReducer = (state = INITIAL_STATE, action) =>{
	// Switch statement (if-else statement) that takes action.type as string
	switch (action.type) {
		// If we want that action
		case UserActionTypes.SET_CURRENT_USER:
			// Returning a new object which represents the new state that
			// our userReducer is going to transform into
			return {
				...state,
				currentUser: action.payload // Setting currentUser value with payload
			}
		// Otherwise
		default:
			return state;
	}
};

export default userReducer; // The header component needs to pull this