import SHOP_DATA from './shop.data';

// Moving our state outside of our component into their own reducers, makes it easier to test later on
// Our INITIAL_STATE will point to the shop data information inside shop.data.js
const INITIAL_STATE = {
	collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
	// Making switch statement on action.type and returning state by default
	switch (action.type) {
		default:
			return state;
	}
};

export default shopReducer;