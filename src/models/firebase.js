import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore/lite';
// Siga este padrão para importar outros serviços do Firebase
// import { } from 'firebase/<service>';

// TODO: Substitua o seguinte pela configuração do projeto Firebase do seu aplicativo
const firebaseConfig = {
	  apiKey: "AIzaSyAiLxjJjKAkt7DPJpvx1MImn4PiMdjeEWc",
	  authDomain: "teste-react-native-80417.firebaseapp.com",
	  projectId: "teste-react-native-80417",
	  storageBucket: "teste-react-native-80417.appspot.com",
	  messagingSenderId: "589920940994",
	  appId: "1:589920940994:web:a9ee7a1ddcead528e15c5b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Obtenha uma lista de noticias do seu banco de dados
const getInfoData = async () => {
	const noticiasCollection = collection(db, 'noticias');
	const noticiaSnapshot = await getDocs(noticiasCollection);
	const noticiaList = noticiaSnapshot.docs.map(doc => doc.data());
	return noticiaList;
};

export default getInfoData;