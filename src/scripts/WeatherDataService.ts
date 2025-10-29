import axios from 'axios';

import { ForecastResponse, GroupedForecast } from '../models/index';
import { DateTimeService } from './DateTimeService';

export class WeatherDataService {
  private groupedForecast: GroupedForecast = {};
  private dateTimeService: DateTimeService = new DateTimeService();


  async fetchWeatherData(city: string): Promise<ForecastResponse[]> {
    try {
      const { data } = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
        params: {
          q: city,
          appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
          units: 'metric',
          lang: 'ru',
        },
      });

      return data.list;
    } catch (error) {
      console.log('Error', error);
      return [];
    }
  }

  async processWeatherData(city: string): Promise<void> {
    const list = await this.fetchWeatherData(city);
    this.groupedForecast = list?.reduce((acc: GroupedForecast, item: any) => {
      const date = this.dateTimeService.format(item.dt_txt, 'YYYY-MM-DD')
      const time = this.dateTimeService.format(item.dt_txt, 'HH:mm');

      const entry = {
        time,
        temp: Math.ceil(item.main.temp),
        description: item.weather[0].description,
        icon: item.weather[0].icon,
        wind: Math.ceil(item.wind.speed),
        pressure: Math.ceil(item.main.pressure / 1.33),
        humidity: item.main.humidity,
      };

      if (!acc[date]) acc[date] = [];
      acc[date].push(entry);
      return acc;
    }, {});
  }

  getGroupedForecast(): GroupedForecast {
    return this.groupedForecast;
  }
}
