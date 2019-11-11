import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'; // Adding Redirect component to redirect users from the sign in page once they are signed in
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import './pages/homepage/homepage.styles.scss';

class App extends React.Component {
	// We don't need a constructer now that we have made the connection arguments
	
	unsubscribeFromAuth = null;
	
	componentDidMount() {
		// Destructuring setCurrentUser auth of our props
		const {setCurrentUser} = this.props;
		
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
					setCurrentUser({
						// Whenever our user snapShot updates, we are setting the userReducer value with our new object
						id: snapShot.id,
						...snapShot.data()
					});
				});
			}
			// If userAuth object comes back as null (that's maybe if the current user signs out)
			// userAuth is the object we want to update setCurrentUser with
			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	
	// Handling routes
	render() {
		return (
			// Switching the signin route to exact and replacing component=SignInAndSignUPage
			// to render, so that we can redirect user to home side, if he's signed in, and if not,
			// then render the SignInAndSignUpPage
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' /> ) : (<SignInAndSignUpPage />)} /> 
				</Switch>
			</div>
		);	
	}
}

// Destructuring auth of our state of our userReducer
const mapStateToProps = ({ user }) => ({
	// Returning currentUser prop
	currentUser: user.currentUser
});

// Second connect argument (first in header.component.jsx)
// Function that gets a dispatch prop and returns an object, where the prop name will be a prop we want to pass in that dispatches the new action that we try to pass, which is SET_CURRENT_USER
const mapDispatchToProps = dispatch => ({
	// Returning setCurrentUser that goes to a function that gets the user object and calls dispatch
	// dispatch is a way for redux to know that whatever gets passed, it's going to be an action object that redux will pass to every reducer
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

// Connecting our app to the outcome of our initial connect call using the second argument of connect (mapDispatchToProps)
// We replace our first argument from null (our currentUser) to mapStateToProps, so we have access to the actual current user once he's signed in
export default connect(mapStateToProps, mapDispatchToProps)(App);
