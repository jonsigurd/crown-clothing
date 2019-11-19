// Two types of selectors
// 1. input selector - doesn't use createSelector
// 2. output selector - does use input selectors and createSelector
import { createSelector } from 'reselect';

// Input selector that is a function that gets the whole state and returns just a slice of it
// We just want the cart here
const selectCart = state => state.cart;

// Output selector that selects cartItems, which is a prop on our cart
// Because we use createSelector to make this selectCartItem selector, it's now a memoized selector
export const selectCartItems = createSelector(
	// Takes a collection (array) of input selectors as first argument
	// Takes a function that returns the value that we want out of the selector as second argument
	[selectCart],
	(cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
);