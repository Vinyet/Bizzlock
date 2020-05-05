import firebase from '../config';


export async function register() {
  try {
    await firebase.auth().signInAnonymously();
    return true;
  } catch (error) {
    console.log('Error de registro: ', error)
    return false;
  }
}


