import dayjs from 'dayjs';

import { DateFormatter } from './DateFormatter';
import { GroupedForecast, WeatherEntry } from './WeatherDataService';

export class UiManager {
  private weatherBlock: HTMLUListElement;
  private city: HTMLHeadingElement;
  private templateWeatherItem: HTMLTemplateElement;
  private calendarBlock: HTMLDivElement;
  private dateFormatter = new DateFormatter();
  private activeDay: string;
  constructor() {
    this.calendarBlock = document.querySelector('.calendar') as HTMLDivElement;
    this.activeDay = dayjs().format('YYYY-MM-DD');
    this.weatherBlock = document.querySelector('.weather') as HTMLUListElement;
    this.city = document.querySelector('.city') as HTMLHeadingElement;
    this.templateWeatherItem = document.querySelector(
      '#template-weather_item',
    ) as HTMLTemplateElement;
  }

  renderCityName(cityName: string): void {
    const currentCity = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    this.city.textContent = `Погода в городе ${currentCity}`;
  }
  toggleActivaDay(currentDay: string) {
    document.querySelectorAll('.calendar-item').forEach((day) => {
      const element = day as HTMLLIElement;
      element.classList.toggle('active-date', element.dataset.timestamp === currentDay);
    });
  }
  render(forecast: GroupedForecast): void {
    this.calendarBlock.replaceChildren();
    const days = Object.keys(forecast);

    days.forEach((d) => {
      const li: HTMLLIElement = document.createElement('li');
      li.dataset.timestamp = d;
      li.classList.add('calendar-item');
      if (d === this.activeDay) {
        li.classList.add('active-date');
        this.renderWeather(forecast[d]);
      }
      li.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLLIElement;
        const date = target.dataset.timestamp;
        if (date && forecast[date]) {
          this.toggleActivaDay(date);
          this.renderWeather(forecast[date]);
        }
      });

      const day: HTMLHeadingElement = document.createElement('h2');
      day.classList.add('calendar-day');
      day.textContent = this.dateFormatter.formatDate(d);
      li.append(day);

      const dayHeader: HTMLDivElement = document.createElement('div');
      dayHeader.classList.add('calendar-header');
      li.append(dayHeader);

      const month: HTMLParagraphElement = document.createElement('p');
      month.classList.add('calendar-header_month');
      month.textContent = this.dateFormatter.formatMonth(d);

      const weekday: HTMLParagraphElement = document.createElement('p');
      weekday.classList.add('calendar-header_weekday');
      weekday.textContent = this.dateFormatter.formatWeekday(d);

      dayHeader.append(month, weekday);
      this.calendarBlock.append(li);
    });
  }

  renderWeather(data: WeatherEntry[]): void {
    this.weatherBlock.replaceChildren();
    data.forEach((d: any) => {
      const template = this.templateWeatherItem.content.cloneNode(true) as DocumentFragment;

      const time = template.querySelector('.weather-temp_time') as HTMLParagraphElement;
      time.textContent = d.time;

      const degree = template.querySelector('.weather-temp_degree') as HTMLHeadElement;
      degree.textContent = d.temp + ' °C';

      const description = template.querySelector('.weather-descr-text') as HTMLDivElement;
      description.textContent = d.description;

      const icon = template.querySelector('.weather-descr_icon') as HTMLImageElement;
      icon.src = `./src/img/icons/${d.icon}@2x.png`;

      const wind = template.querySelector('.weather-wind_metric') as HTMLParagraphElement;
      wind.textContent = d.wind + ' м/с';

      const pressure = template.querySelector('.weather-pressure_metric') as HTMLParagraphElement;
      pressure.textContent = d.pressure + ' мм рт.';

      const humidity = template.querySelector('.weather-humidity_metric') as HTMLParagraphElement;
      humidity.textContent = d.humidity + ' %';

      this.weatherBlock.append(template);
    });
  }
}
