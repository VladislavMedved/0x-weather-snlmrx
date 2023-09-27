import axios from 'axios';
import { API_KEY, BASE_ACCUWEATHER_URL } from './constants';
import { LocationData } from './types';
import data from './location_sample.json';

async function getLocationInfo(latitude: number, longitude: number): Promise<LocationData> {
  try {
    // const response = await axios.get(
    //   `${BASE_ACCUWEATHER_URL}/locations/v1/cities/search`,
    //   {
    //     params: {
    //       apikey: API_KEY,
    //       q: `${latitude},${longitude}`,
    //     },
    //   }
    // );

    // return response.data;
    return data[0];
  } catch (error) {
    console.error('Error fetching location data:', error);
    throw error;
  }
}

export default getLocationInfo;
