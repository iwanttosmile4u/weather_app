import React, { useEffect } from 'react';
import './App.scss';

import { Header } from './components/Header';
import { WeatherCard } from './components/WeatherCard';
import { useCustomDispatch, useCustomSelector } from './hooks/store';
import { getCurrentWeather } from './store/thunks/getCurrentWeather';

export const App: React.FC = () => {
  const dispatch = useCustomDispatch();

  const { weathers } = useCustomSelector(state => state.currentWeatherSliceReducer);

  useEffect(() => {
    dispatch(getCurrentWeather('paris'));
  }, []);

  return (
    <>
      <Header />
      {
        weathers.map((weather) => (
          <WeatherCard key={weather.city} weather={weather} />
        ))
      }
    </>
  );
};
