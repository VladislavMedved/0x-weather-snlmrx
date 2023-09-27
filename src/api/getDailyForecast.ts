import axios from 'axios';
import { API_KEY, BASE_ACCUWEATHER_URL } from './constants';
import { ApiDailyResponse, ApiParameters } from './types';
import data from './daily_sample.json';

async function getDailyForecast({ locationKey }: ApiParameters): Promise<ApiDailyResponse> {
  try {
    /**
     * For some reason 10day and 15day endpoints returns 401 Unathorized status code with CORS error.
     * So fpr these accuweather endpoints, web-server lacks CORS specific headers that allows to fetch data.
     * Used 5day instead.
     */
    // const response = await axios.get(
    //   `${BASE_URL}/forecasts/v1/daily/5day/${locationKey}`,
    //   {
    //     params: {
    //       apikey: API_KEY,
    //       details: true
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

export default getDailyForecast;
