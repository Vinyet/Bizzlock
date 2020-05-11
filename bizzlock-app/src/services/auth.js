import firebase from '../config';


// REGISTER
export async function register() {
  try {
    await firebase.auth().signInAnonymously();
  } catch (error) {
    console.log('Error de registro: ', error)
  }
}

// GET CURRENT USER
export function getCurrentUser() {
  try {
    return firebase.auth().currentUser;
  } catch (error) {
    console.log('Current user error: ', error)
  }
}
