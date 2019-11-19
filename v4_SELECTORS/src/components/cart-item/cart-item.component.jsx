import React from 'react';

import './cart-item.styles.scss';

// Setting funtional component where we destructure of those props that we need from our item
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	// Returning layout of the items on the cart-dropdown
	<div className='cart-item'>
		<img src={imageUrl} alt='item' />
		<div className='item-details'>
			<span className='name'>{name}</span>
			<span className='price'>{quantity} x ${price}</span>
		</div>
	</div>
);

export default CartItem;
