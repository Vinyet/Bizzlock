import * as firebase from 'firebase/app';
import 'firebase/firestore';

import { firebaseConfig } from '../config';

// func to initialize firebase with config
function init() {
    firebase.initializeApp(firebaseConfig);
}

// gets companies from firebase store
async function getCompanies() {
    init(); // ¿inicializar en cada función?
    const db = firebase.firestore();
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