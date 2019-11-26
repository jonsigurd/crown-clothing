import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

// We destructure the collection object off of the state that we get from the mapStateToProps below
const CollectionPage = ({ collection }) => {
	// Destructuring the title and items props off of our collection
	const { title, items } = collection;
	
	return (
		// Where className='items' we map over our items array and render out the CollectionItem giving it
		// a key of item.id aa well as passing the item prop our item element
		<div className='collection-page'>
			<h2 className='title'>{ title }</h2>
			<div className='items'>
				{
					items.map(item => <CollectionItem key={item.id} item={item}/>)
				}
			</div>
		</div>
	);
};

// Our first argument is state, which is the overall reducer state
// The second argument is ownProps, which is the props of the component that we're wrapping in our
// connect, including our match object that we get from the Route component that is passing our
// collection on our shop page
const mapStateToProps = (state, ownProps) => ({
	// Returning an object, where the collection will go to our selectCollection and pass it
	// ownProps.match.params.collectionId, and after that we pass in the state, because unlike other
	// selectors, this selector needs a part of the state depending on the URL parameter
	collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);