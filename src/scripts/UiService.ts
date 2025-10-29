import dayjs from 'dayjs';

import { DateTimeService } from './DateTimeService';
import { GroupedForecast, WeatherEntry } from './types';

export class UiService {
  private weatherBlock: HTMLUListElement;
  private city: HTMLHeadingElement;
  private calendarBlock: HTMLDivElement;
  private dateFormatter = new DateTimeService();
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
    element.classList.add(className ?? null);
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

  renderCalendar(forecast: GroupedForecast): void {
    this.calendarBlock.replaceChildren();
    const days = Object.keys(forecast);

    days.forEach((day) => {
      const li = this.elementCreator('li', { className: 'calendar-item' });
      li.dataset.timestamp = day;
      if (day === this.activeDay) {
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

      const calendarDay = this.elementCreator('h2', {
        className: 'calendar-day',
        content: this.dateFormatter.formatDate(day),
      });
      li.append(calendarDay);

      const dayHeader = this.div('calendar-header', [
        this.p('calendar-header_month', this.dateFormatter.formatMonth(day)),
        this.p('calendar-header_weekday', this.dateFormatter.formatWeekday(day)),
      ]);

      li.append(dayHeader);
      this.calendarBlock.append(li);
    });
  }

  renderWeather(data: WeatherEntry[]): void {
    this.weatherBlock.replaceChildren();
    data.forEach((day: any) => {
      const temp = this.div('weather-temp', [
        this.p('weather-temp_time', day.time),
        this.p('weather-temp_degree', day.temp + ' °C'),
      ]);

      const icon = document.createElement('img') as HTMLImageElement;
      icon.classList.add('weather-descr_icon');
      icon.src = `./src/img/icons/${day.icon}@2x.png`;

      const description = this.div('weather-descr', [
        this.p('weather-descr-text', day.description),
        icon,
      ]);

      const wind = this.div('weather-wind', [
        this.p('weather-wind_title', 'Скорость ветра'),
        this.p('weather-wind_metric', day.wind + ' м/с'),
      ]);

      const pressure = this.div('weather-pressure', [
        this.p('weather-pressure_title', 'Атмосферное давление'),
        this.p('weather-pressure_metric', day.pressure + ' мм рт.'),
      ]);

      const humidity = this.div('weather-humidity', [
        this.p('weather-humidity_title', 'Влажность'),
        this.p('weather-humidity_metric', day.humidity + ' %'),
      ]);

      const li = this.elementCreator('li', { className: 'weather-item' }, [
        temp,
        description,
        wind,
        pressure,
        humidity,
      ]);
      this.weatherBlock.append(li);
    });
  }
}
