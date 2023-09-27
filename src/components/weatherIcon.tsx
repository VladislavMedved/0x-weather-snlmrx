import sunnyIcon from '../assets/sunny.svg';
import partlyCloudyIcon from '../assets/partlyCloudy.svg';
import cloudyIcon from '../assets/cloudy.svg';
import lightRainIcon from '../assets/lightRain.svg';
import rainIcon from '../assets/rain.svg';
import heavyRainIcon from '../assets/heavyRain.svg';
import thunderIcon from '../assets/thunder.svg';
import nightCloudyIcon from '../assets/nightCloudy.svg';

export enum ICON_CATEGORIES {
    SUNNY = "Sunny",
    PARTLY_CLOUDY = "Partly Cloudy",
    CLOUDY = "Cloudy",
    LIGHT_RAIN = "Light Rain",
    RAIN = "Rain",
    HEAVY_RAIN = "Heavy Rain",
    THUNDER = "Thunder",
    NIGHT_CLOUDY = "Night Cloudy",
};

/**
 * Categorize AccuWeather icons index to one of internal weather categories
 * to show later specific svg icon
 * The list of all icon's indexes listed at: https://developer.accuweather.com/weather-icons
 */
export function mapWeatherIconToInternalIcons(weatherIconIndex: number) {
    let category;

    if ([1, 2].includes(weatherIconIndex)) {
        category = ICON_CATEGORIES.SUNNY;
    } else if ([3, 4, 5, 20, 23].includes(weatherIconIndex)) {
        category = ICON_CATEGORIES.PARTLY_CLOUDY;
    } else if ([6, 7, 8, 11].includes(weatherIconIndex)) {
        category = ICON_CATEGORIES.CLOUDY;
    } else if ([12, 13, 14, 39, 40].includes(weatherIconIndex)) {
        // showers icons
        category = ICON_CATEGORIES.LIGHT_RAIN;
    } else if ([15, 16, 17, 41, 42].includes(weatherIconIndex)) {
        // T-Storms icons
        category = ICON_CATEGORIES.THUNDER;
    } else if ([35, 36, 37, 38, 43, 44].includes(weatherIconIndex)) {
        category = ICON_CATEGORIES.NIGHT_CLOUDY;
    } else if (weatherIconIndex >= 18 && weatherIconIndex <= 29) {
        category = ICON_CATEGORIES.RAIN;
    }

    return category;
}

export const WeatherIcon = ({ iconCategory }: { iconCategory: ICON_CATEGORIES | undefined }) => {
    switch (iconCategory) {
        case ICON_CATEGORIES.SUNNY:
            return <img src={sunnyIcon} />;
        case ICON_CATEGORIES.PARTLY_CLOUDY:
            return <img src={partlyCloudyIcon} />;
        case ICON_CATEGORIES.CLOUDY:
            return <img src={cloudyIcon} />;
        case ICON_CATEGORIES.LIGHT_RAIN:
            return <img src={lightRainIcon} />;
        case ICON_CATEGORIES.RAIN:
            return <img src={rainIcon} />;
        case ICON_CATEGORIES.HEAVY_RAIN:
            return <img src={heavyRainIcon} />;
        case ICON_CATEGORIES.THUNDER:
            return <img src={thunderIcon} />;
        case ICON_CATEGORIES.NIGHT_CLOUDY:
            return <img src={nightCloudyIcon} />;
        default:
            return null;
    }
};
