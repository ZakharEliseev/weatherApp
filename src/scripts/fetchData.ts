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

type GroupedForecast = {
  [date: string]: Array<{
    time: string;
    temp: number;
    description: string;
    icon: string;
    pressure: number;
    humidity: number;
    wind: number;
  }>;
};

export class DataManager {
  private forecast = {};

  async fetchData(city: string): Promise<ForecastResponse[]> {
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

  async getForecast(city: string): Promise<any> {
    const list = await this.fetchData(city);
    this.forecast = list?.reduce((acc: any, item: any) => {
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
    }, {});
  }

  getData() {
    return this.forecast;
  }
}







