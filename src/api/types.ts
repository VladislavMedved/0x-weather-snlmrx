export interface ApiParameters {
    locationKey: string;
}

export interface AccuWeatherCurrentWeather {
    LocalObservationDateTime: string;
    EpochTime: number;
    WeatherText: string;
    WeatherIcon: number;
    HasPrecipitation: boolean;
    PrecipitationType: string | null;
    IsDayTime: boolean;
    Temperature: {
        Metric: {
            Value: number;
            Unit: string;
            UnitType: number;
        };
        Imperial: {
            Value: number;
            Unit: string;
            UnitType: number;
        };
    };
}

export type AccuWeatherCurrentWeatherResponse = AccuWeatherCurrentWeather[];

export type ApiHourlyResponse = ApiHourForecast[];

export interface ApiHourForecast {
    /**
     * DateTime of the forecast, displayed in ISO8601 format. ("2023-09-21T12:00:00+02:00")
     */
    DateTime: string;
    /**
     * Temperatire information for current hour.
     */
    Temperature: {
        /**
         * Rounded value in specified units. May be NULL.
         */
        Value: number;
        /**
         * Type of unit.
         */
        Unit: string;
        /**
         * Numeric ID associated with the type of unit being displayed.
         */
        UnitType: number;
    };
    /**
     * Numeric value representing an image that displays the current condition described by IconPhrase. May be NULL.
     */
    WeatherIcon?: number;
    /**
     * Phrase description of the forecast associated with the WeatherIcon
     */
    IconPhrase: string;
}

export interface ApiDailyResponse {
    Headline: Headline;
    DailyForecasts: DailyForecast[];
}

interface DailyForecast {
    Date: string;
    EpochDate: number;
    Temperature: {
        Minimum: {
            Value: number;
            Unit: string;
            UnitType: number;
        };
        Maximum: {
            Value: number;
            Unit: string;
            UnitType: number;
        };
    };
    Day: {
        Icon: number;
        IconPhrase: string;
        HasPrecipitation: boolean;
        PrecipitationType?: string;
        PrecipitationIntensity?: string;
        PrecipitationProbability?: number;
    };
    Night: {
        Icon: number;
        IconPhrase: string;
        HasPrecipitation: boolean;
        PrecipitationType?: string;
        PrecipitationIntensity?: string;
    };
    Sources: string[];
    MobileLink: string;
    Link: string;
}

interface Headline {
    EffectiveDate: string;
    EffectiveEpochDate: number;
    Severity: number;
    Text: string;
    Category: string;
    EndDate: string;
    EndEpochDate: number;
    MobileLink: string;
    Link: string;
}


export interface LocationData {
    Key: string;
    LocalizedName: string;
    EnglishName: string;
    Region: {
        ID: string;
        LocalizedName: string;
        EnglishName: string;
    };
    Country: {
        ID: string;
        LocalizedName: string;
        EnglishName: string;
    };
    GeoPosition: {
        Latitude: number,
        Longitude: number,
    },
}
