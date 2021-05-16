import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const facebookLogin = async () => {
    const provider = new firebase.auth.FacebookAuthProvider;
    let data = await firebaseApp.auth().signInWithPopup(provider);
    return data;
}

export default {
    facebookLogin,
}