import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import { CollectionsOverviewContainer } from './collections-overview.styles';

// Now we just render a regular functional component, because we don't need access to state, and thus
// there is no need to use a class component
const CollectionsOverview = ({ collections }) => (
	// Local state inside constructor is moved to shop.reducer.js (now we don't use class here)
	
	// Here we just pull collections off of our props that we get in here
	<CollectionsOverviewContainer>
		{collections.map(({ id, ...otherCollectionProps }) => (
			<CollectionPreview key={id} {...otherCollectionProps} />
		))}
	</CollectionsOverviewContainer>
);

// Here the createStructuredSelector call will automatically pass our top level state that we get as
// our mapStateToProps into each subsequent selector
const mapStateToProps = createStructuredSelector({
	// The props we want point to the correct selector now
	collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);