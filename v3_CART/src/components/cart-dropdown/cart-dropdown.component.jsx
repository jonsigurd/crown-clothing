import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

// Destructuring cartItems
const CartDropdown = ({ cartItems }) => (
	// Mapping out the cartItems inside the cart-item div
	<div className='cart-dropdown'>
		<div className='cart-items'>
			{cartItems.map(cartItem => (
				<CartItem key={cartItem.id} item={cartItem} />
			))}
		</div>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
)

// Destructuring cartItems of of the state
const mapStateToProps = ({ cart: { cartItems } }) => ({
	// Returning cartItems
	cartItems
})

// Getting acces to cartItems using connect
export default connect(mapStateToProps)(CartDropdown);