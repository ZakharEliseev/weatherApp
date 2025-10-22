export class WeatherManager {
  private weatherBlock: HTMLUListElement;
  private city: HTMLHeadingElement;
  private templateWeatherItem: HTMLTemplateElement;

  constructor() {
    this.weatherBlock = document.querySelector('.weather') as HTMLUListElement;
    this.city = document.querySelector('.city') as HTMLHeadingElement;
    this.templateWeatherItem = document.querySelector(
      '#template-weather_item',
    ) as HTMLTemplateElement;
  }

  rendCityName(cityName: string) {
    const currentCity = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    this.city.textContent = `Погода в городе ${currentCity}`;
  }

  renderWeather(data: any) {
    const template = this.templateWeatherItem.content.cloneNode(true);
    this.weatherBlock.append(template);
    const time = document.querySelector('.weather-temp_time') as HTMLParagraphElement;
    time.textContent = data.time;
    const degree = document.querySelector('.weather-temp_degree') as HTMLHeadElement;
    degree.textContent = data.temp;
    const icon = document.querySelector('.weather-descr_icon') as HTMLDivElement;
    icon.textContent = data.weatherIcon;
    const descr = document.querySelector('.weather-descr-text') as HTMLDivElement;2
    descr.textContent = data.weatherDescr;
    const wind = document.querySelector('.weather-wind_metric') as HTMLParagraphElement;2
    wind.textContent = data.wind;
    const pressure = document.querySelector('.weather-pressure_metric') as HTMLParagraphElement;2
    pressure.textContent = data.pressure;
    const humidity = document.querySelector('.weather-humidity_metric') as HTMLParagraphElement;2
    humidity.textContent = data.humidity;
  }
}