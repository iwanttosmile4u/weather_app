import axios, { AxiosResponse } from 'axios';

export class CurrentWeatherService {
  static getWeather(city: string): Promise<AxiosResponse<Weather>> {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=60c242311061931edb0695a2eae4da60`);
  }
}
