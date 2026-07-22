// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC32clAJLPvEMZ4FR8ctNs-XDJlh7cT7M4",
  authDomain: "cravit-249f1.firebaseapp.com",
  projectId: "cravit-249f1",
  storageBucket: "cravit-249f1.appspot.com",
  messagingSenderId: "249564309576",
  appId: "1:249564309576:web:8ccc2efb3ef10253f9907d",
  measurementId: "G-K1F9NMN35R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics: typeof getAnalytics | null = null;
try {
  // analytics is only available in browser environments
  analytics = getAnalytics(app);
} catch (e) {
  // ignore analytics initialization errors in non-browser environments
  analytics = null;
}

// Auth, Firestore and Storage
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;