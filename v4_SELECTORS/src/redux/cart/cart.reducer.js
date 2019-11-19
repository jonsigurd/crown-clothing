import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
	// Hiding the dropdown by default
	hidden: true,
	// Setting cartItems to an empty array, so that we can add items to this cartItems array
	cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		// Toggling the hidden state on and off based on if it's true or false
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			};
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				// Spreading the existing items to the cartItems array and then add the payload from the action at the end
				cartItems: addItemToCart(state.cartItems, action.payload)
			}
		default:
			return state;
	}
};

export default cartReducer;