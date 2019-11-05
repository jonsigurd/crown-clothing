import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyBFSmnYdJA2eAUeuVdW2jVOFfofielSN7g",
	authDomain: "crown-clothing-f82de.firebaseapp.com",
	databaseURL: "https://crown-clothing-f82de.firebaseio.com",
	projectId: "crown-clothing-f82de",
	storageBucket: "",
	messagingSenderId: "78372993466",
	appId: "1:78372993466:web:8631900a08bd5f200a0583"
};

// Taking user auth object and place it in our database,
// using async (we make API-request = asyncronous action)
export const createUserProfileDocument = async (userAuth, additionalData) => {
	// If there's no userAuth object
	if (!userAuth) return;
	
	// Querying into our firestore for the document of userAuth object
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	
	// Getting snapshot of user reference asyncronously (await)
	// to figure out whether there is data there
	// (snapShot simply represents data)
	const snapShot = await userRef.get();
	
	// If there doesn't exist data for this userAuth object,
	// we want to create data there (In order to perform any
	// CRUD method, we have to use the documentRef)
	if(!snapShot.exists) {
		// Creating data using userRef
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		
		// Making an async request to our database to store the data
		try {
			// Using .set (the create method), and pass in an object of data
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	
	return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;