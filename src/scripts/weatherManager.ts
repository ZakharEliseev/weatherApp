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

  renderCityName(cityName: string) {
    const currentCity = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    this.city.textContent = `Погода в городе ${currentCity}`;
  }

  renderWeather(
    data: any,
    hours: (time: string) => string,
    onCheckIsToday: (check: number) => boolean,
  ) {
    this.weatherBlock.replaceChildren();
    data.forEach((d: any) => {
      if (onCheckIsToday(d.timestamp)) {
        const template = this.templateWeatherItem.content.cloneNode(true) as DocumentFragment;

        const time = template.querySelector('.weather-temp_time') as HTMLParagraphElement;
        time.textContent = hours(d.time);

        const degree = template.querySelector('.weather-temp_degree') as HTMLHeadElement;
        degree.textContent = d.temp + ' °C';

        const description = template.querySelector('.weather-descr-text') as HTMLDivElement;
        description.textContent = d.weatherDescription;

        const icon = template.querySelector('.weather-descr_icon') as HTMLImageElement;
        icon.src = `./src/img/icons/${d.weatherIcon}@2x.png`;

        const wind = template.querySelector('.weather-wind_metric') as HTMLParagraphElement;
        wind.textContent = d.wind + ' м/с';

        const pressure = template.querySelector('.weather-pressure_metric') as HTMLParagraphElement;
        pressure.textContent = d.pressure + ' мм рт.';

        const humidity = template.querySelector('.weather-humidity_metric') as HTMLParagraphElement;
        humidity.textContent = d.humidity + ' %';

        this.weatherBlock.append(template);
      }
    });
  }
}