import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { CartIconContainer, ShoppingIcon, ItemCountContainer } from './cart-icon.styles';

// After doing the mapDispatchToProps, we are able to access toggleCartHidden and bind it onClick
// After doing the mapStateToProps, we are able to access the itemCount inside the span
const CartIcon = ({ toggleCartHidden, itemCount }) => (
	// Binding toggleCartHidden onClick
	<CartIconContainer onClick={toggleCartHidden}>
		<ShoppingIcon />
		<ItemCountContainer>{itemCount}</ItemCountContainer>
	</CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

// Here the createStructuredSelector call will automatically pass our top level state that we get as
// our mapStateToProps into each subsequent selector
const mapStateToProps = createStructuredSelector({
	// The props we want point to the correct selector now
	itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);