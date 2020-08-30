import React from 'react';

import { CartItemContainer, ItemDetailsContainer, CartItemImage } from './cart-item.styles';

// Setting funtional component where we destructure of those props that we need from our item
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	// Returning layout of the items on the cart-dropdown
	<CartItemContainer>
		<CartItemImage src={imageUrl} alt='item' />
		<ItemDetailsContainer>
			<span className='name'>{name}</span>
			<span className='price'>{quantity} x ${price}</span>
		</ItemDetailsContainer>
	</CartItemContainer>
);

export default CartItem;
