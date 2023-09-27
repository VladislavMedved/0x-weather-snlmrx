import { useEffect } from "react";

import { HourlyForecastEntity } from "../../data";
import getHourlyForecast from "../../api/getHourlyForecast";
import { fahrenheitToCelsius, formatDateTime } from "../../utils";
import { mapWeatherIconToInternalIcons } from "../weatherIcon";
import {
  STATE_ACTIONS,
  useWeather,
  useWeatherDispatch,
} from "../../weatherProvider";

export const useHourlyForecast = (locationKey: string | undefined) => {
  const dispatch = useWeatherDispatch();
  const state = useWeather();
  const hourly = state.hourly;

  if (!hourly.length) {
    const hourly = localStorage.getItem("hourly");

    try {
      if (hourly) {
        const hourlyData = JSON.parse(hourly);
        if (hourlyData) {
          dispatch({
            type: STATE_ACTIONS.SET_HOURLY_FORECAST,
            data: hourlyData,
          });
        }
      }
    } finally {
    }
  }

  // update current temp data from hourly api
  useEffect(() => {
    if (hourly) {
      const now = hourly[0];

      dispatch({
        type: STATE_ACTIONS.UPDATE_CURRENT_FORECAST,
        data: {
            temp: now.temperature
        },
      });
    }
  }, [hourly]);

  useEffect(() => {
    if (locationKey) {
      getHourlyForecast({ locationKey: locationKey })
        .then((data) => {
          const items_render_count = 5;
          const hourlyData: HourlyForecastEntity[] = ((data) => {
            return data.map((x) => ({
              datetime: formatDateTime(x.DateTime),
              temperature: `${fahrenheitToCelsius(x.Temperature.Value)}°`,
              conditions: x.WeatherIcon || 0,
              conditionsType: mapWeatherIconToInternalIcons(x.WeatherIcon || 0),
            }));
          })(data).slice(0, items_render_count);

          dispatch({
            type: STATE_ACTIONS.SET_HOURLY_FORECAST,
            data: hourlyData,
          });

          localStorage.setItem("hourly", JSON.stringify(hourlyData));
        })
        .catch(console.error);
    }
  }, [locationKey]);

  return hourly;
};
