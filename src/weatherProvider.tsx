import { PropsWithChildren, createContext, useContext, useReducer } from "react";
import { currentWeather, dailyForecast, hourly } from "./data";

const initialState = {
  current: currentWeather,
  daily: dailyForecast,
  hourly: hourly
};

const WeatherContext = createContext(null);

const WeatherDispatchContext = createContext(null);

export const WeatherProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  return (
    <WeatherContext.Provider value={state as any}>
      <WeatherDispatchContext.Provider value={dispatch as any}>
        {children}
      </WeatherDispatchContext.Provider>
    </WeatherContext.Provider>
  );
};

export function useWeather(): any {
  return useContext(WeatherContext) as any;
}

export function useWeatherDispatch() {
  return useContext(WeatherDispatchContext) as any;
}

const weatherReducer: any = (state: any, action: any) => {
  switch (action.type) {
    case STATE_ACTIONS.SET_DAILY_FORECAST:
      return {
        ...state,
        daily: action.data
      };
    case STATE_ACTIONS.SET_HOURLY_FORECAST: 
      return {
        ...state,
        hourly: action.data
      };
    case STATE_ACTIONS.UPDATE_CURRENT_FORECAST:
      return {
        ...state,
        current: {
          ...state.current,
          ...action.data
        }
      };
    default:
      break;
  };

  return state;
};

export enum STATE_ACTIONS {
  SET_DAILY_FORECAST = 'SET_DAILY_FORECAST',
  SET_HOURLY_FORECAST = 'SET_HOURLY_FORECAST',
  UPDATE_CURRENT_FORECAST = 'UPDATE_CURRENT_FORECAST',
};
