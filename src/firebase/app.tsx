import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRCBDrVvBuLBLZXe3XjdoAtAik2JgD7SM",
  authDomain: "nagai-bab28.firebaseapp.com",
  databaseURL: "https://nagai-bab28-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nagai-bab28",
  storageBucket: "nagai-bab28.appspot.com",
  messagingSenderId: "652793459461",
  appId: "1:652793459461:web:cde1eec35107ddf3d17d6c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(firebaseApp);

export { firebaseApp, auth };