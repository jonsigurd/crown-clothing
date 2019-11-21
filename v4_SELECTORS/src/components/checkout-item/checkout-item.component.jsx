import React from 'react';

import './checkout-item.styles.scss';

// Here we pass the whole item as a prop, because we want to be able to increase and decrease the
// quantity and also remove the item inside our CheckoutItem component
// In order to apply the other values to our component, we need to destructure them of cartItem
const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
	<div className='checkout-item'>
		<div className='image-container'>
			<img src={imageUrl} alt='item' />
		</div>
		<span className='name'>{name}</span>
		<span className='quantity'>{quantity}</span>
		<span className='price'>{price}</span>
		<div className='remove'>&#10005;</div>
	</div>
);

export default CheckoutItem;