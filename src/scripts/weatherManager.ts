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

  renderWeather(data: any, hours: (time: string) => string, onCheckIsToday: (check: number) => boolean) {
    data.forEach((d: any, index: number) => {
      if (onCheckIsToday(d.timestamp)) {
        const template = this.templateWeatherItem.content.cloneNode(true);
      this.weatherBlock.append(template);

      const time = document.querySelectorAll('.weather-temp_time')[index] as HTMLParagraphElement;
      time.textContent = hours(d.time).toString();

      const degree = document.querySelectorAll('.weather-temp_degree')[index] as HTMLHeadElement;
      degree.textContent = d.temp + ' °C';

      const description = document.querySelectorAll('.weather-descr-text')[index] as HTMLDivElement;
      description.textContent = d.weatherDescription;

      const icon = document.querySelectorAll('.weather-descr_icon')[index] as HTMLImageElement;
      icon.src = `./src/img/icons/${d.weatherIcon}@2x.png`;

      const wind = document.querySelectorAll('.weather-wind_metric')[index] as HTMLParagraphElement;
      wind.textContent = d.wind + ' м\\с';

      const pressure = document.querySelectorAll(
        '.weather-pressure_metric',
      )[index] as HTMLParagraphElement;
      pressure.textContent = d.pressure + ' мм рт.';

      const humidity = document.querySelectorAll(
        '.weather-humidity_metric',
      )[index] as HTMLParagraphElement;
      humidity.textContent = d.humidity + ' %';
      }
    })

  }
}