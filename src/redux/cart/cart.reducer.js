import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';
import { removeItemFromCart } from './cart.utils'; 

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
				// Spreading the existing items to the cartItems array and then add the payload from the
				// action at the end
				cartItems: addItemToCart(state.cartItems, action.payload)
			};
		// We now make a new case that will listen to the action of removing item from cart one at a time
		case CartActionTypes.REMOVE_ITEM:
			return {
				...state,
				// Here we write a new utility function that will return us the array with the modyfied
				// cart item with the decreased quantity or the removed item from our existing cart items, if
				// it was the last one
				cartItems: removeItemFromCart(state.cartItems, action.payload)
			};
		// We now make a new case that will listen to the action of clearing item from cart
		case CartActionTypes.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				// We make a new array without any instance of the item that we are trying to clear away
				// We filter the array such that, if the cart item id does not match the action payload
				// (which is the item we are trying to remove), then keep it, but if it does match, then
				// filter it out
				cartItems: state.cartItems.filter(
					cartItem => cartItem.id !== action.payload.id
				)
			};
		default:
			return state;
	}
};

export default cartReducer;