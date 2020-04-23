import firebaseApp from '../config';


export async function register() {
  try {
    await firebaseApp.auth().signInAnonymously()
    return true;
  } catch (error) {
    console.log('Error de registro: ', error)
    return false;
  }
}

/* TRIGGERS IF THERE'S NO ERRORS */
firebaseApp.auth().onAuthStateChanged(function(user) {
    if (user) { 
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
    } else {
      // user is signed out
    }
});

 