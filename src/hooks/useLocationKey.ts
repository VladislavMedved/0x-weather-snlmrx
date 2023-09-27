import { useEffect, useState } from "react";

import getLocationInfo from "../api/getLocationInfo";
import { LocationData } from "../api/types";
import { STATE_ACTIONS, useWeatherDispatch } from "../weatherProvider";

export const useLocationInfo = () => {
  const [location, setLocation] = useState<LocationData>();
  const dispatch = useWeatherDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude: lat, longitude: lon } = pos.coords;

      getLocationInfo(lat, lon).then((data) => {
        setLocation(data);
      });
    });
  }, []);

  // update current location info from location api
  useEffect(() => {
    if (location) {
      dispatch({
        type: STATE_ACTIONS.UPDATE_CURRENT_FORECAST,
        data: {
          location: {
            lat: location.GeoPosition?.Latitude,
            lon: location.GeoPosition?.Longitude,
            name: location.EnglishName,
          },
        },
      });
    }
  }, [location]);

  return location;
};
