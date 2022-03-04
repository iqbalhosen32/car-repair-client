import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCaIa3dhOlAnGiZUKJmaD4LkPQZKQn_RJk",
    authDomain: "car-repair-by-iqbal.firebaseapp.com",
    projectId: "car-repair-by-iqbal",
    storageBucket: "car-repair-by-iqbal.appspot.com",
    messagingSenderId: "555435881355",
    appId: "1:555435881355:web:dd62887a1352ea230ab58e",
    measurementId: "G-KW7ZZ94S8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);