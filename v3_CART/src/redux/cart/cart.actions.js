import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN
	// Payload not needed here (payload is optional)
});