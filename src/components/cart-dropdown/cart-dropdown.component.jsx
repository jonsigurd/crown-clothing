import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import { CartDropdownContainer, CartDropdownButton, EmptyMessageContainer, CartItemsContainer } from './cart-dropdown.styles';

// Destructuring cartItems and history
// As mentioned above the mconnect function, we can just pass in dispatch here, without writing a
// mapDispatchToProps
const CartDropdown = ({ cartItems, history, dispatch }) => (
	// Mapping out the cartItems inside the cart-item div
	// We will conditionally render a span or our cartItems, depending on whether or not the cartItems
	// array has a length that's greater than 0. So we say: if there are items, we'll render cartItems,
	// and if not, we'll render a span with className='empty-message' that prompts the user
	<CartDropdownContainer>
		<CartItemsContainer>
			{cartItems.length ? (
				cartItems.map(cartItem => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			) : (
				<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
			)}
		</CartItemsContainer>
		<CartDropdownButton onClick={() => {
			history.push('/checkout');
			dispatch(toggleCartHidden());
		}}>GO TO CHECKOUT</CartDropdownButton>
	</CartDropdownContainer>
);

// Here the createStructuredSelector call will automatically pass our top level state that we get as
// our mapStateToProps into each subsequent selector
const mapStateToProps = createStructuredSelector({
	// The props we want point to the correct selector now
	cartItems: selectCartItems
});

// Getting acces to cartItems using connect
// We wrap our connect function inside of our withRouter. This is because withRouter can take
// components as its arguments (in this case: the component that is returned from our connect call).
// The order in which it's wrapped matters, because withRouter will pass the match, history and
// location objects into the component that's being wrapped. We first get the connect component and
// then withRouter recieves those props
// connect automatically passes dispatch into our components as a prop, if it's not specified as a
// second argument.
export default withRouter(connect(mapStateToProps)(CartDropdown));