import axios from 'axios';

import { Config } from '../../config';


export class DataManager {
  private config = new Config();
  private cacheData: any = null;
  private forecast: any = [];

  clearCache() {
    this.cacheData = null;
    this.forecast = [];
  }

  async fetchDataOW(url: string): Promise<any> {
    const response = await axios.get(url);
    return response.data;
  }

  async getDataFromCache(city: string): Promise<any> {
    if (!this.cacheData) {
      const response = await this.fetchDataOW(this.config.getForecastFromOW(city));
      this.cacheData = response;
      return this.cacheData;
    }
    return this.cacheData;
  }

  async getForecast(city: string): Promise<[]> {
    this.clearCache();
    const response = await this.getDataFromCache(city);
    response.list.forEach((item: any) => {
      const forecast = {
        cityName: response.city.name,
        timestamp: parseInt(item.dt),
        time: item.dt_txt,
        temp: Math.ceil(item.main.temp),
        weatherDescription: item.weather[0].description,
        weatherIcon: item.weather[0].icon,
        wind: Math.ceil(item.wind.speed),
        pressure: Math.ceil(item.main.pressure / 1.33),
        humidity: item.main.humidity,
      };
      this.forecast.push(forecast);
    });

    return this.forecast;
  }
}
