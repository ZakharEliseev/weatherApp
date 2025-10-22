import { Config } from '../../config';

export class DataManager {
  private config = new Config();

  async fetchDataOW(url: string): Promise<any> {
    const response = await fetch(url);
    return response.json();
  }

  async getUnformattedData(city: string): Promise<any> {
    const response = await this.fetchDataOW(this.config.getForecastFromOW(city));
    return response;
  }

  async getFormattedData(city: string): Promise<{}> {
    const response = await this.getUnformattedData(city);
    const data = {
      cityName: response.city.name,
      time: response.list[0].dt_txt,
      temp: response.list[0].main.temp,
      weatherDescr: response.list[0].weather[0].description,
      weatherIcon: response.list[0].weather[0].icon,
      wind: response.list[0].wind.speed,
      pressure: Math.ceil(response.list[0].main.pressure / 1.33),
      humidity: response.list[0].main.humidity,
    };
    return data;
  }
}
