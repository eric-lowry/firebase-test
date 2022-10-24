import { initializeApp} from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import firebaseConfig from '../.firebase.js';

const fbApp = initializeApp(firebaseConfig);

const fbAuth = getAuth(fbApp);

onAuthStateChanged(fbAuth, user => {
    console.log("auth state change:");
    console.log(user);
})


