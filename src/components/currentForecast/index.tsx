import { useWeather } from '../../weatherProvider';

export default function CurrentForecast() {
  const { current } = useWeather();

  return (
    <div className="header">
        <div className="location">{current.location.name}</div>
        <div className="temp">{current.temp}</div>
        <div className="conditions">
        {current.condDescription}
        <br />
        H:{current.range.max} L:{current.range.min}
        </div>
    </div>
  );
}

