export class Config {
  getForecastFromOW(city: string) {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const baseUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=ru`;
    return baseUrl;
  }
}
