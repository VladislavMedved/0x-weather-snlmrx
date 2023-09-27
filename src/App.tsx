import './style.css';

import { useLocationInfo } from './hooks/useLocationKey';
import { HourlyForecast } from './components/hourlyForecast';
import DailyForecast from './components/dailyForecast';
import CurrentForecast from './components/currentForecast';


export default function App() {
  useLocationInfo();

  return (
    <>
      <CurrentForecast />
      <HourlyForecast />
      <DailyForecast />
    </>
  );
}

