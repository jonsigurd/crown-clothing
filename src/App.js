import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './views/homepage/homepage.component';
import ShopPage from './views/shop/shop.component';
import SignInAndSignUpPage from './views/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './views/homepage/homepage.styles.scss';

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
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
			// Fire user object that we get back from our auth library
			createUserProfileDocument(user);
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
