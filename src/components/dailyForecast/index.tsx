import React, { useEffect, useState } from 'react';
import '../../style.css';

import getDailyForecast from '../../api/getDailyForecast';
import { fahrenheitToCelsius, getShortDayOfWeek } from '../../utils';
import { ICON_CATEGORIES, WeatherIcon, mapWeatherIconToInternalIcons } from '../../components/weatherIcon';
import { useLocationInfo } from '../../hooks/useLocationKey';
import { useWeather, useWeatherDispatch } from '../../weatherProvider';

export default function DailyForecast() {
    const location = useLocationInfo();
    const { daily } = useWeather();
    const dispatch = useWeatherDispatch();

    if (!daily.length) {
        const daily = localStorage.getItem('daily');

        try {
            if (daily) {
                const dailyData = JSON.parse(daily);
                if (dailyData) {
                    dispatch({
                        type: 'setDailyForecast',
                        data: dailyData
                    });
                }
            }
        } finally {
        }
    }

    // update current high and low temp data from daily api
    useEffect(() => {
        if (daily) {
            const today = daily[0];

            dispatch({
                type: 'updateCurrentForecast',
                data: {
                    range: {
                        min: `${today.range.min}°`,
                        max: `${today.range.max}°`,
                    }
                }
            });
        }
    }, [daily]);

    useEffect(() => {
        if (location?.Key) {
            getDailyForecast({ locationKey: location?.Key })
                .then((data: any) => {
                    const dailyData = ((data) => {
                        return data.DailyForecasts.map((x: any) => ({
                            datetime: getShortDayOfWeek(x.Date),
                            conditions: 2,
                            temp: 21,
                            range: {
                                min: fahrenheitToCelsius(x.Temperature.Minimum.Value),
                                max: fahrenheitToCelsius(x.Temperature.Maximum.Value),
                            },
                            periodRange: {
                                min: 12,
                                max: 29,
                            },
                            iconCategory: mapWeatherIconToInternalIcons(x.Day.Icon),
                            probability: x.Day.PrecipitationProbability
                        }));
                    })(data);

                    dispatch({
                        type: 'setDailyForecast',
                        data: dailyData
                    });

                    localStorage.setItem('daily', JSON.stringify(dailyData));
                })
                .catch(console.error);
        }

    }, [location?.Key]);

    return (
        <div className="daily">
            <div className="daily-title">{daily.length}-DAY FORECAST</div>
            <div className="daily-list">
                {daily.map(
                    ({
                        datetime,
                        temp,
                        range: { min, max },
                        periodRange: { min: lowest, max: highest },
                        iconCategory,
                        probability
                    }: any) => (
                        <div className="daily-row">
                            <div className="daily-time">{datetime}</div>

                            <div className="daily-conditions">
                                <WeatherIcon iconCategory={iconCategory as ICON_CATEGORIES} />
                                {probability && <span className="probability">{probability}%</span>}
                            </div>

                            <div className="daily-range">
                                <span className="daily-min">{min}°</span>
                                <span className="range">
                                    <span className="range-meter" />
                                    <span className="range-current" />
                                </span>
                                <span className="daily-max">{max}°</span>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>

    );
}

