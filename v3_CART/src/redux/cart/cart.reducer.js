import CartActionTypes from './cart.types'

const INITIAL_STATE = {
	// Hiding the dropdown by default
	hidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		// Toggling the hidden state on and off based of if it's true or false
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			}
		default:
			return state;
	}
};

export default cartReducer;