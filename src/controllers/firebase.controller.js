import { getInfoDataService } from '../services/firebase.service';

const getInfoDataController = async () => {
  const response = await getInfoDataService();
  return response;
}

export { getInfoDataController };

