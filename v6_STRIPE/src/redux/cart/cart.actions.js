import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN
	// Payload not needed here (payload is optional)
});

// A function that gets the item that we want to the array cart.reducer.js
export const addItem = item => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item
});

// This action is for removing one item at a time from our checkout page
export const removeItem = item => ({
	type: CartActionTypes.REMOVE_ITEM,
	payload: item
});

// This action dispatches the new CLEAR_ITEM_FROM_CART type
export const clearItemFromCart = item => ({
	type: CartActionTypes.CLEAR_ITEM_FROM_CART,
	payload: item
});