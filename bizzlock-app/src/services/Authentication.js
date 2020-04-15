import * as firebase from 'firebase/app';
import 'firebase/firestore';


// https://firebase.google.com/docs/auth/web/anonymous-auth?authuser=0
// https://firebase.google.com/docs/reference/js/firebase.auth.Auth?authuser=0#signInAnonymously

firebase.auth().signInAnonymously().catch(function(error) {
    // handle errors 
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
});

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
    } else {
      // user is signed out
    }
});

