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

// POSTS companies to firebase store
async function postCompany(newCompany) {
    const db = _getDBConnection();
    const result = await db.collection('companies').add(newCompany);
}

export { getCompanies, postCompany }