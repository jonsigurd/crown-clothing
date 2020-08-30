import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBFSmnYdJA2eAUeuVdW2jVOFfofielSN7g",
    authDomain: "crown-clothing-f82de.firebaseapp.com",
    databaseURL: "https://crown-clothing-f82de.firebaseio.com",
    projectId: "crown-clothing-f82de",
    storageBucket: "crown-clothing-f82de.appspot.com",
    messagingSenderId: "78372993466",
    appId: "1:78372993466:web:8631900a08bd5f200a0583"
  };

firebase.initializeApp(config);

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
	
	return userRef; // Used in app.js componentDidMount
};

// Making a util that we can use again in the future
// This util takes a collection key and objects to add 
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	// Creating the collection using the collection key
	// Once we add elements to this collectionRef object as documents, then firebase will start creating
	// both the collection and the documents inside of firestore
	const collectionRef = firestore.collection(collectionKey);
	
	// batch groups all of our calls together into one requaest, so that if f.ex. the internet connection
	const batch = firestore.batch();
	
	// We will loop over the objectsToAdd array using the forEach method (forEach does not return a new
	// array)
	objectsToAdd.forEach(obj => {
		// We create a new document reference, which is equal to our collection reference and get our
		// document at an empty string
		const newDocRef = collectionRef.doc();
		// Setting the new value using newDocRef, but not newDocRef.set, but instead batch.set in order to
		// batch it (group it) - setting the value to object
		batch.set(newDocRef, obj);
	});
	
	// Firing off our batch call asyncronously
	return await batch.commit();
};

// This function is going to get the whole snapshot and convert it to an object instead of the array that
// we get back
export const convertCollectionsSnapshotToMap = (collections) => {
	// Doing .map on the query snapshot array that we get (that we get through .docs)
	const transformedCollection = collections.docs.map(doc => {
		// In each one we're going to get the document object and we'll pull of the title and the items, which
		// are the two props we want from the actual doc.data
		const { title, items } = doc.data();
		
		// Returning an object from the map function that represents the final object representing all the data
		// we want for our front end
		// encodeURI takes a string and converts everything into something that the url can read 
		return {
			// This represents the final object that we want (id comes from .doc and not from .data)
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		};
	});
	
	// We now want to reduce from the array down to the final object, so for the second parameter of our
	// reduce, we pass in the empty object as our initial accumulator
	// The function will get the accumulator as the first value and our collection object at the current
	// iteration as the second
	return transformedCollection.reduce((accumulator, collection) => {
		// We want to call our accumulator (our object) up until that point, and want to set the prop equal
		// to our collections.title lowercased and setting that key equal to our collection itself
		// This means that we get f.ex. a title = hats and set it equal to hats inside the collection, so
		// that we get a object with a title that is the key that equals its respective collection object
		// (at each iteration we get a different title. First hats, second jackets and so forth)
		accumulator[collection.title.toLowerCase()] = collection;
		// Returning the accumulator in order to, so that it goes into the next iteration on our reduce
		return accumulator;
	} , {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;