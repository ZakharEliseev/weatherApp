import { Config } from '../../config';
export class DataManager {
  private config = new Config();
  private cacheData: any = null;
  private forecast: any = [];

  async fetchDataOW(url: string): Promise<any> {
    const response = await fetch(url);
    return response.json();
  }

  async getData(city: string): Promise<any> {
    if (!this.cacheData) {
      const response = await this.fetchDataOW(this.config.getForecastFromOW(city));
      this.cacheData = response;
      return this.cacheData;
    }
    return this.cacheData;
    
  }

  async getForecast(city: string): Promise<[]> {
    const response = await this.getData(city);
    for (let i=0; i < response.list.length; i++) {
        const forecast = {
        cityName: response.city.name,
        time: response.list[i].dt_txt,
        temp: Math.ceil(response.list[i].main.temp),
        weatherDescription: response.list[i].weather[0].description,
        weatherIcon: response.list[i].weather[0].icon,
        wind: Math.ceil(response.list[i].wind.speed),
        pressure: Math.ceil(response.list[i].main.pressure / 1.33),
        humidity: response.list[i].main.humidity,
        }
        this.forecast.push(forecast);
    }
    return this.forecast;
  }

  getF() {
    return this.forecast;
  }

}
