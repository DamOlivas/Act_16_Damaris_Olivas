import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyByiPF9bfpbvKWIlNDRPOPRbzSZMR0i5kM",
  authDomain: "actividad-16-b3651.firebaseapp.com",
  projectId: "actividad-16-b3651",
  storageBucket: "actividad-16-b3651.appspot.com",
  messagingSenderId: "642299029191",
  appId: "1:642299029191:web:7ac13e1e159439b15900e2"
};

const db = initializeApp(firebaseConfig);

export default getDatabase(db);