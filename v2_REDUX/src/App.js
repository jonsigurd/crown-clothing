import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './pages/homepage/homepage.styles.scss';

class App extends React.Component {
	constructor() {
		super();
		
		this.state = {
			currentUser: null
		};
	}
	
	unsubscribeFromAuth = null;
	
	componentDidMount() {
		// Making this async, because we make a potential api request to firestore
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			// Fire userAuth object that we get back from our auth library
			if(userAuth) {
				// Getting userRef from firebase snapShot, to check if our database
				// has updated at that reference with new data
				const userRef = await createUserProfileDocument(userAuth);
				
				// Sending snapShot object representing that data currently stored in our database
				userRef.onSnapshot(snapShot => {
					// Getting props of data in our database - using snapSHot to get id and .data
					// to get all the props of the snapShot we want
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					});
				});
			}
			// If userAuth object comes back as null (that's maybe if the current user signs out)
			this.setState({ currentUser: userAuth });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	
	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/signin' component={SignInAndSignUpPage} />
				</Switch>
			</div>
		);	
	}
}

export default App;
