import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

// Here we pass the whole item as a prop, because we want to be able to increase and decrease the
// quantity and also remove the item inside our CheckoutItem component
// We additionally destructure addItem and removeItem too, and bind them to onClick
// We now do an explicit return of our function by making brackets{}
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	// Here we destructure the props of the cartItem, because we still want these values as we use them
	// inside of our component definition below, but need to access the item itself
	const { name, imageUrl, price, quantity } = cartItem;
	// On our remove we do a unanymous function on onClick that calls our new clearItem function that
	// we're passing in as a prop, and then we pass cartItem in. Now clearItem works!
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt='item' />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
				<span className='value'>{quantity}</span>
				<div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
			</span>
			<span className='price'>{price}</span>
			<div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
		</div>
	);
};

// Dispatching clearItem, addItem and removeItem (item is the payload for all of them)
const mapDispatchToProps = dispatch => ({
	clearItem: item => dispatch(clearItemFromCart(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);