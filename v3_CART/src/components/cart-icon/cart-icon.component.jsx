import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

// After doing the mapDispatchToProps, we are able to access toggleCartHidden and bind it onClick
// After doing the mapStateToProps, we are able to access the itemCount inside the span
const CartIcon = ({ toggleCartHidden, itemCount }) => (
	// Binding toggleCartHidden onClick
	<div className='cart-icon' onClick={toggleCartHidden}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>{itemCount}</span>
	</div>
);

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

// Getting state by destructuring of cart and pull of cartItems
const mapStateToProps = ({ cart: { cartItems } }) => ({
	// The below is a selector!
	// Passing in itemCount, which is equal to accumalating the quantity on each of our cart items
	// To get quantity to one final value, we call the native array method cartItems.reduce() and pass in
	// 0 as the initial accumalator value, where we have the accumulatedQuantity as the first argument and
	// cartItem as the second. This accumalates all the quantities on all the cart items
	itemCount: cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);