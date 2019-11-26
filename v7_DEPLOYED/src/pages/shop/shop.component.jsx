import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

// We destructure the match object. Our shop page is being nested inside a route in App.js, and Route
// automatically passes those three objects into our component as props (we get match, location and
// history)
// We want match, because we want to display the current path '/shop'
const ShopPage = ({ match }) => (
	// match.path is the current path '/shop' and '/:collectionId' will be the path that follows, which
	// will match either '/hats', '/sneakers', '/jackets', '/womens' or '/mens'
	// /:collectionId allows us to access the category id as parameter on the match object, when we're
	// inside of our collection page
	<div className='shop-page'>
		<Route exact path={`${match.path}`} component={CollectionsOverview} />
		<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
	</div>
);

export default ShopPage;