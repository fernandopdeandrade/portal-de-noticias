import { collection, getDocs } from 'firebase/firestore/lite';
import { dbModel } from '../models/firebase';

const getInfoDataService = async () => {
	try {
	const noticiasCollection = collection(dbModel, 'noticias');
	const noticiaSnapshot = await getDocs(noticiasCollection);
	const noticiaList = noticiaSnapshot.docs.map(doc => doc.data());
		return noticiaList;
	} catch (error) {
		console.log(error);
	}
};

export { getInfoDataService };

