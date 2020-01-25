import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

// Our two Route components will need to know, when it's loading or not, and thus we declare this component
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageSpinner = WithSpinner(CollectionPage);

// We have now converted the functional componenent into a class component, by now destructuring match off
// of the props inside our class component
class ShopPage extends React.Component {
	state = {
		loading: true
	};
	// This is the snapshot representation of our collections array that we get from firestore
	unsubscribeFromSnapshot = null;
	
	// We now fetch the snapshot inside our componentDidMount method
	componentDidMount() {
		// Destructuring off our updateCollections from this.props
		const { updateCollections } = this.props;
		// 'collections' is the name of our collections collection inside of firestore
		const collectionRef = firestore.collection('collections');
		
		// We want to get this data in form of a snapshot, which means that whenever the collectionRef updates
		// or whenever this code gets run for the first time, this collectionRef will send us the snapshot
		// representing the code of our collections objects array at the time, when this code renders
		// Because this data is on the actual objects inside of this query snapshot, we will make an
		// asynchronous request
		// NOW instead of returning this observable object, we return Promises and use .get instead of
		// .onSnapshot. .get makes a api call to fetch back the data associated to this collectionRef, which
		// will be the same as the snapshot object that we're getting back from our backend, but call .then (
		// because it's now a Promise) and pass our snapshot transformation into this .then
		// Now we only do one api call inside our componentDidMount leveraging the the Promise 'chains' style of
		// doing asynchronous event handling
		collectionRef.get().then(snapshot => {
			// Passing the new method from firebase into the snapshot
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			// Passing our collectionsMap in
			updateCollections(collectionsMap);
			this.setState({ loading: false });
		});
	}
	
	render() {
		// We destructure the match object. Our shop page is being nested inside a route in App.js, and Route
		// automatically passes those three objects into our component as props (we get match, location and
		// history)
		// We want match, because we want to display the current path '/shop'
		const { match } = this.props;
		// Destructuring the loading value off of our state, and pass it in to the render function in the Route
		const { loading } = this.state;
		return (
			// Instead of using the component value in the Routes, we can now use the render value, in order
			// to render the match, history and location props
			<div className='shop-page'>
				<Route
					exact path={`${match.path}`}
					render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => <CollectionPageSpinner isLoading={loading} {...props} />}
				/>
			</div>
		);		
	}
}

const mapDispatchToProps = dispatch => ({
	// updateCollections goes to something that gets a collectionsMap and calls dispatch on
	// updateCollections, passing in our collectionsMap
	updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);