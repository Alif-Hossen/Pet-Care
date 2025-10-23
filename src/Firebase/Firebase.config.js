// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDJBej2UJXhoDFlxx2MNLc2OoFI3Mk3GM",
  authDomain: "pet-care-service-f44d4.firebaseapp.com",
  projectId: "pet-care-service-f44d4",
  storageBucket: "pet-care-service-f44d4.firebasestorage.app",
  messagingSenderId: "202431996415",
  appId: "1:202431996415:web:8d4ba04a5204f47be947ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;