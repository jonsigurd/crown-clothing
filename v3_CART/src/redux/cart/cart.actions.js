import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN
	// Payload not needed here (payload is optional)
});

// A function that gets the item that we want to the array cart.reducer.js
export const addItem = item => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item
})