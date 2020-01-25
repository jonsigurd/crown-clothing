import React from 'react';
import { connect } from 'react-redux'

import { addItem } from '../../redux/cart/cart.actions';

import { CollectionItemContainer, CollectionFooterContainer, AddButton, BackgroundImage, NameContainer, PriceContainer } from './collection-item.styles';

// Because of the changes in 'collection-previews.component.jsx', we now have access to our item
// object and instead of 'id, name, price, imageUrl', we just pass in item
// We now do an explicit return of our function by making brackets{}
const CollectionItem = ({ item, addItem }) => {
	// Here we destructure the props we cutted out above of the item (except from id), because we still 
	// want these values as we use them inside of our component definition below, but need to access
	// the item itself
	const { name, price, imageUrl } = item;
	
	return (
	// Now on CustomButton we say onClick is the function that will fire calling the addItem and pass
	//item in
	<CollectionItemContainer>
		<BackgroundImage className='image' imageUrl={imageUrl} />
		<CollectionFooterContainer>
			<NameContainer>{name}</NameContainer>
			<PriceContainer className='price'>{price}</PriceContainer>
		</CollectionFooterContainer>
		<AddButton onClick={() => addItem(item)} inverted>ADD TO CART</AddButton>
	</CollectionItemContainer>
)}

// Making our mapDispatchToProps with our addItem
const mapDispatchToProps = dispatch => ({
	// Whnever there is addItem it will get an item in as prop, and then
	// dispatch the addItem action creater and passing the item in
	addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);