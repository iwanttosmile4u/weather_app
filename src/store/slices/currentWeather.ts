/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

export interface CurrentWeather {
  weather: Weather,
  city: string,
}

interface InitialState {
  weathers: CurrentWeather[],
  cities: string[],
  isLoading: boolean,
}

const initialState: InitialState = {
  weathers: [],
  cities: ['Kyiv', 'Warsaw', 'London', 'Tokio'],
  isLoading: false,
};

export const currentWeatherSlice = createSlice({
  name: 'current-weather',
  initialState,
  reducers: {
    getCurrentWeather(state) {
      state.isLoading = true;
    },
    getCurrentWeatherSuccessStatus(
      state,
      action: PayloadAction<AxiosResponse<Weather>>,
    ) {
      const weather = action.payload.data;

      state.isLoading = false;
      state.weathers = [...state.weathers, { weather, city: weather.name }];
    },
    selectCity(state, action: PayloadAction<string>) {
      state.cities = state.cities.filter(city => city !== action.payload);
    },
  },
});

export default currentWeatherSlice.reducer;
