import axios from 'axios';
import { API_KEY, BASE_ACCUWEATHER_URL } from './constants';
import { ApiHourlyResponse, ApiParameters } from './types';
import data from './hourly_sample.json';

async function getHourlyForecast({ locationKey }: ApiParameters): Promise<ApiHourlyResponse> {
  try {
    // const response = await axios.get(
    //   `${BASE_URL}/forecasts/v1/hourly/12hour/${locationKey}`,
    //   {
    //     params: {
    //       apikey: API_KEY,
    //     },
    //   }
    // );

    // return response.data;
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}

export default getHourlyForecast;
