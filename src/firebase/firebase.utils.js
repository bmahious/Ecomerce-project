import firebase from "firebase/app";

import "firebase/firestore"; //for database
import "firebase/auth"; //for authentication


const config = {
  apiKey: "AIzaSyB1E1YP95SHvfZHyT6eejVEhg-ub5XAcw8",
  authDomain: "crow-bd.firebaseapp.com",
  databaseURL: "https://crow-bd.firebaseio.com",
  projectId: "crow-bd",
  storageBucket: "crow-bd.appspot.com",
  messagingSenderId: "362779908075",
  appId: "1:362779908075:web:c1c6ecdfbe0165159e2bae",
  measurementId: "G-N9456QZYJJ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const creatdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        creatdAt,
        ...additionalData
      })
    }catch(error) {
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
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
