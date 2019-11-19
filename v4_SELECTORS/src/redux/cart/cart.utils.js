// Utility functions allow us to keep our files clean and organize functions that we may need in
// multiple files in one location

// Function that takes two arguments, 1. all the existing items that are in our cartItems array
// right now, 2. the cart item that we want to add
export const addItemToCart = (cartItems, cartItemToAdd) => {
	// First we look inside cartItems to see if the cart item already exists in the array
	// If the id is matching an existing id, it will set that cart item to our constant, if not, it will
	// be undefined
	const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
	
	// If it matches cartItem.map wil return us a new array, because we need to return new versions of
	// our state so that our components know to rerender properly.
	// This if statement won't run when there is a new item
	if (existingCartItem) {
		// We want to pass each cart item inside our map and create a new object if the id's match, where
		// we have the cartItem and increase the quantity by one, and if they don't match, we just return
		// the original cart item
		return cartItems.map(cartItem => 
			cartItem.id === cartItemToAdd.id 
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		)
	}
	
	// If the cart item is not found in the array, we want to return a new array with all the existing
	// cart items and add an object which is equal to our cartItemToAdd and give it a base quantity of 1
	return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
};