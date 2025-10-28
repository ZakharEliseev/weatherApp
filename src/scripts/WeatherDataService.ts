import axios from 'axios';
import dayjs from 'dayjs';

type ForecastResponse = {
  list: Array<{
    dt_txt: string;
    main: { temp: number; pressure: number; humidity: number };
    weather: Array<{ description: string; icon: string }>;
    wind: { speed: number };
  }>;
};

export interface WeatherEntry {
  time: string;
  temp: number;
  description: string;
  icon: string;
  wind: number;
  pressure: number;
  humidity: number;
}

export type GroupedForecast = {
  [date: string]: WeatherEntry[];
};

export class WeatherDataService {
  private groupedForecast: GroupedForecast = {};

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
      const date = dayjs(item.dt_txt).format('YYYY-MM-DD');
      const time = dayjs(item.dt_txt).format('HH:mm');

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
