import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from 'firebase/firestore/lite';

// Opcionalmente, importe os serviços que você deseja usar
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

const firebaseConfig = {
	  apiKey: "AIzaSyAiLxjJjKAkt7DPJpvx1MImn4PiMdjeEWc",
	  authDomain: "teste-react-native-80417.firebaseapp.com",
	  projectId: "teste-react-native-80417",
	  storageBucket: "teste-react-native-80417.appspot.com",
	  messagingSenderId: "589920940994",
	  appId: "1:589920940994:web:a9ee7a1ddcead528e15c5b",
	  measurementId: "G-measurement-id"
};

const app = firebase.initializeApp(firebaseConfig);
const dbModel = getFirestore(app);
const auth = firebase.auth();

export { auth, dbModel };

