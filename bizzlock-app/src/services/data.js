import firebase from 'firebase/app';


// CHECK CONNECTION
let DB_CONNECTION = null;
function _getDBConnection() {
    if (!DB_CONNECTION) {
        DB_CONNECTION = firebase.firestore();
    }
    return DB_CONNECTION;
}

// GETS companies from firebase store
async function getCompanies() {
    const db = _getDBConnection();
    const querySnapshot = await db.collection('companies').get();

    const companies = [];
    querySnapshot.forEach((doc) => {
        companies.push({
            id: doc.id,
            ...doc.data()
        });
    });
    return companies;
}

// GETS users from firebase store
async function getUsers() {
    const db = _getDBConnection();
    const querySnapshot = await db.collection('users').get();

    const firebaseUsers = [];
    querySnapshot.forEach((doc) => {
        firebaseUsers.push({
            id: doc.id,
            ...doc.data()
        });
    });
    return firebaseUsers;
}

// POSTS companies to firebase store
async function postCompany(newCompany) {
    const db = _getDBConnection();
    const result = await db.collection('companies').add(newCompany);
}

// POST USER TO USERS COLLECTION
async function createUser(newUser) {
    const db = _getDBConnection();
    const result = await db.collection('users').doc(newUser.uid).set({newUser}, {merge: true})
}


export { getCompanies, getUsers, postCompany, createUser }