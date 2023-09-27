import '../../style.css';

import { WeatherIcon } from '../weatherIcon';
import { useHourlyForecast } from './useHourlyForecast';
import { useLocationInfo } from '../../hooks/useLocationKey';

export const HourlyForecast = () => {
    const location = useLocationInfo();
    const hourly = useHourlyForecast(location?.Key);

    return (
        <div className="forecast">
            <div className="forecast-title">HOURLY FORECAST</div>
            <div className="scroller">
                <div className="forecast-list">
                    {hourly.map(({ datetime, temperature, conditionsType }: any) => (
                        <div className="forecast-item">
                            <span>{datetime}</span>
                            <span>
                                <WeatherIcon iconCategory={conditionsType} />
                            </span>
                            <span>{temperature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

