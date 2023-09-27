import { ICON_CATEGORIES } from "./components/weatherIcon";

export interface CurrentWeather {
  location: {
    lat: number;
    lon: number;
    name: string;
  };
  temp: string;
  cond: number;
  condDescription: string;
  range: {
    min: string;
    max: string;
  };
}

export const currentWeather: CurrentWeather = {
  location: {
    lat: 59,
    lon: 17,
    name: 'Stockholm',
  },
  temp: '21°',
  cond: 1,
  condDescription: 'Partly Cloudy',
  range: {
    min: '15°',
    max: '29°',
  },
};

export interface HourlyForecastEntity {
  datetime: string; // 10 PM, Now
  temperature: string; // '21°'
  conditions: number;
  conditionsType?: ICON_CATEGORIES;
}

export const hourly: HourlyForecastEntity[] = [
  {
    datetime: 'Now',
    temperature: '21°',
    conditions: 6,
    conditionsType: ICON_CATEGORIES.CLOUDY
  },
  {
    datetime: '10 PM',
    temperature: '21°',
    conditions: 6,
  },
];

export interface DailyForecast {
  datetime: string; // 'Fri'
  conditions: number;
  temp: number;
  range: {
    min: number;
    max: number;
  };
  periodRange: {
    min: number;
    max: number;
  };
  iconCategory?: string;
  probability?: number;
}

export const dailyForecast = [
  {
    datetime: 'Today',
    conditions: 2,
    temp: 21,
    range: {
      min: 15,
      max: 25,
    },
    periodRange: {
      min: 12,
      max: 29,
    },
    iconCategory: 'Sunny',
    probability: 60
  },
  {
    datetime: 'Fri',
    conditions: 2,
    temp: 19,
    range: {
      min: 17,
      max: 20,
    },
    periodRange: {
      min: 12,
      max: 29,
    },
    iconCategory: 'Sunny',
    probability: 60
  },
  {
    datetime: 'Sat',
    conditions: 2,
    temp: 21,
    range: {
      min: 12,
      max: 18,
    },
    periodRange: {
      min: 12,
      max: 29,
    },
    iconCategory: 'Sunny',
    probability: 60
  },
  {
    datetime: 'Sun',
    conditions: 2,
    temp: 21,
    range: {
      min: 15,
      max: 25,
    },
    periodRange: {
      min: 12,
      max: 29,
    },
    probability: 60
  },
  {
    datetime: 'Sat',
    conditions: 2,
    temp: 21,
    range: {
      min: 15,
      max: 25,
    },
    periodRange: {
      min: 12,
      max: 29,
    },
    iconCategory: 'Sunny',
  },
];
