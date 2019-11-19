import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

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

// Getting state
const mapStateToProps = state => ({
	// Returning the selector call that takes the whole reducer state
	itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);