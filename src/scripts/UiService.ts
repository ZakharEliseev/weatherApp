import dayjs from 'dayjs';

import { DateFormatter } from './DateTimeService';
import { GroupedForecast, WeatherEntry } from './WeatherDataService';

export class UiService {
  private weatherBlock: HTMLUListElement;
  private city: HTMLHeadingElement;
  private calendarBlock: HTMLDivElement;
  private dateFormatter = new DateFormatter();
  private activeDay: string;

  constructor() {
    this.calendarBlock = document.querySelector('.calendar') as HTMLDivElement;
    this.activeDay = dayjs().format('YYYY-MM-DD');
    this.weatherBlock = document.querySelector('.weather') as HTMLUListElement;
    this.city = document.querySelector('.city') as HTMLHeadingElement;
  }

  private elementCreator(
    tag: string,
    {
      className,
      content,
    }: {
      className: string;
      content?: string;
    },
    children: (HTMLElement | string)[] = [],
  ): HTMLElement {
    const element = document.createElement(tag);
    if (className) {
      element.classList.add(className);
    }
    element.textContent = content ?? null;
    children.forEach((elem) => element.append(elem));
    return element;
  }

  private div(cls: string, children?: HTMLElement[]) {
    return this.elementCreator('div', { className: cls }, children);
  }

  private p(cls: string, content: string) {
    return this.elementCreator('p', { className: cls, content: content });
  }

  private renderCityName(cityName: string): void {
    const currentCity = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    this.city.textContent = `Погода в городе ${currentCity}`;
  }

  private toggleActiveDay(currentDay: string) {
    this.activeDay = currentDay;
    document.querySelectorAll('.calendar-item').forEach((day) => {
      const element = day as HTMLLIElement;
      element.classList.toggle('active-date', element.dataset.timestamp === currentDay);
    });
  }

  render(forecast: GroupedForecast, cityName: string): void {
    this.renderCalendar(forecast);
    this.renderCityName(cityName);
    this.renderWeather(forecast[this.activeDay]);
  }

  createLi(forecast: GroupedForecast) {
    this.calendarBlock.replaceChildren();
    const days = Object.keys(forecast);
    
  }

  renderCalendar(forecast: GroupedForecast): void {
    this.calendarBlock.replaceChildren();
    const days = Object.keys(forecast);

    days.forEach((d) => {
      const li = this.elementCreator('li', { className: 'calendar-item' });
      li.dataset.timestamp = d;
      if (d === this.activeDay) {
        li.classList.add('active-date');
      }
      li.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLLIElement;
        const date = target.dataset.timestamp;
        if (date && forecast[date]) {
          this.toggleActiveDay(date);
          this.renderWeather(forecast[date]);
        }
      });

      const day = this.elementCreator('h2', {
        className: 'calendar-day',
        content: this.dateFormatter.formatDate(d),
      });
      li.append(day);

      const dayHeader = this.div('calendar-header', [
        this.p('calendar-header_month', this.dateFormatter.formatMonth(d)),
        this.p('calendar-header_weekday', this.dateFormatter.formatWeekday(d)),
      ]);

      li.append(dayHeader);
      this.calendarBlock.append(li);
    });
  }

  renderWeather(data: WeatherEntry[]): void {
    this.weatherBlock.replaceChildren();
    data.forEach((d: any) => {
      const li = document.createElement('li');
      li.classList.add('weather-item');

      const temp = document.createElement('div');
      temp.classList.add('weather-temp');

      const time = document.createElement('p');
      time.classList.add('weather-temp_time');
      time.textContent = d.time;

      const degree = document.createElement('p');
      degree.classList.add('weather-temp_degree');
      degree.textContent = d.temp + ' °C';

      temp.append(time, degree);

      const description = document.createElement('div');
      description.classList.add('weather-descr');

      const descriptionIcon = document.createElement('img');
      descriptionIcon.classList.add('weather-descr_icon');
      descriptionIcon.src = `./src/img/icons/${d.icon}@2x.png`;

      const descriptionText = document.createElement('p');
      descriptionText.classList.add('weather-descr-text');
      description.textContent = d.description;

      description.append(descriptionIcon, descriptionText);

      const wind = document.createElement('div');
      wind.classList.add('weather-wind');

      const windTitle = document.createElement('p');
      windTitle.classList.add('weather-wind_title');
      wind.textContent = 'Скорость ветра';

      const windMetric = document.createElement('p');
      windMetric.classList.add('weather-wind_metric');
      windMetric.textContent = d.wind + ' м/с';

      wind.append(windTitle, windMetric);

      const pressure = document.createElement('div');
      pressure.classList.add('weather-pressure');

      const pressureTitle = document.createElement('p');
      pressureTitle.classList.add('weather-pressure_title');
      pressureTitle.textContent = 'Атмосферное давление';

      const pressureMetric = document.createElement('p');
      pressureMetric.classList.add('weather-pressure_metric');
      pressureMetric.textContent = d.pressure + ' мм рт.';

      pressure.append(pressureTitle, pressureMetric);

      const humidity = document.createElement('div');
      humidity.classList.add('weather-humidity');

      const humidityTitle = document.createElement('p');
      humidityTitle.classList.add('weather-humidity_title');
      humidityTitle.textContent = 'Влажность';

      const humidityMetric = document.createElement('p');
      humidityMetric.classList.add('weather-humidity_metric');
      humidityMetric.textContent = d.humidity + ' %';

      humidity.append(humidityTitle, humidityMetric);

      li.append(temp, description, wind, pressure, humidity);
      this.weatherBlock.append(li);
    });
  }
}
