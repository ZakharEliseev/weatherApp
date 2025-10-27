import axios from 'axios';

export class DataManager {

  fetchData(city: string): Promise<any> {
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
      params: {
        q: city,
        appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
        units: 'metric',
        lang: 'ru',
      },
    });
  }

  async getForecast(city: string): Promise<any[]> {
    try {
      const {data} = await this.fetchData(city);
      return data.list.map((item: any) => ({
          cityName: data.city.name,
          timestamp: parseInt(item.dt),
          time: item.dt_txt,
          temp: Math.ceil(item.main.temp),
          weatherDescription: item.weather[0].description,
          weatherIcon: item.weather[0].icon,
          wind: Math.ceil(item.wind.speed),
          pressure: Math.ceil(item.main.pressure / 1.33),
          humidity: item.main.humidity,
      }));
    } catch(error) {
      console.log('Error', error);
      return []
    }
  }
}
