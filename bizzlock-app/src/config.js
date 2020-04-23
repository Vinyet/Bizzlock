import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB8WigLf8eLlQAQyN9D_0O2Qzndr22_vCA",
    authDomain: "bizzlock-b46dc.firebaseapp.com",
    databaseURL: "https://bizzlock-b46dc.firebaseio.com",
    projectId: "bizzlock-b46dc",
    storageBucket: "bizzlock-b46dc.appspot.com",
    messagingSenderId: "382078226856",
    appId: "1:382078226856:web:11a7a325de40b83e3acd9d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;