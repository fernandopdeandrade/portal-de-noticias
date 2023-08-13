import { collection, getDocs } from 'firebase/firestore/lite';
import { dbModel } from '../models/firebase';

const getInfoDataService = async () => {
	const noticiasCollection = collection(dbModel, 'noticias');
	const noticiaSnapshot = await getDocs(noticiasCollection);
	const noticiaList = noticiaSnapshot.docs.map(doc => doc.data());
	return noticiaList;
};

export default getInfoDataService;