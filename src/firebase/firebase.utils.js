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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;