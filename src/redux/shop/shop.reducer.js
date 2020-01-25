import ShopActionTypes from './shop.types';

// Moving our state outside of our component into their own reducers, makes it easier to test later on
// Our INITIAL_STATE will point to the shop data information inside shop.data.js
const INITIAL_STATE = {
	// Setting our initial collections value to null (after removal of SHOP_DATA)
	collections: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
	// Making switch statement on action.type and returning state by default
	switch (action.type) {
		// New case statement, which returns a new object with state spread in, except the collections will go
		// to our new payload
		// This makes the reducer listen for the backend update to store the actual collections value
		case ShopActionTypes.UPDATE_COLLECTIONS:
			return {
				...state,
				collections: action.payload
			}
		default:
			return state;
	}
};

export default shopReducer;