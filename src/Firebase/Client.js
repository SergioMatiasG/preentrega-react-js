import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDqBkkrVbDvLsmBykcuQt_qXHROHPvLmRU",
    authDomain: "coderhouse-ecommerce-templo.firebaseapp.com",
    projectId: "coderhouse-ecommerce-templo",
    storageBucket: "coderhouse-ecommerce-templo.appspot.com",
    messagingSenderId: "486617230268",
    appId: "1:486617230268:web:00a1e5e960cb2fa73419b9"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);