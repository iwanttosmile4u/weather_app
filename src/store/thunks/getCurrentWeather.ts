import { CurrentWeatherService } from '../../services/CurrentWeatherService';
import { AppDispatch } from '../index';
import { currentWeatherSlice } from '../slices/currentWeather';

export const getCurrentWeather = (payload: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(currentWeatherSlice.actions.getCurrentWeather());
    const response = await CurrentWeatherService.getWeather(payload);

    if (response.status === 200) {
      dispatch(currentWeatherSlice.actions.getCurrentWeatherSuccessStatus(response));
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
