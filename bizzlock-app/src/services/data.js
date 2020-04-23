import firebaseApp from '../config';


// gets companies from firebase store
async function getCompanies() {
    const db = firebaseApp.firestore();
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

export { getCompanies }