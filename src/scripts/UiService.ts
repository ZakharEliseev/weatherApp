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
  
  render(forecast: GroupedForecast, cityName: string): void {
    this.renderCalendar(forecast);
    this.renderCityName(cityName);
  }

  renderCityName(cityName: string): void {
    const currentCity = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    this.city.textContent = `Погода в городе ${currentCity}`;
  }

  toggleActiveDay(currentDay: string) {
    document.querySelectorAll('.calendar-item').forEach((day) => {
      const element = day as HTMLLIElement;
      element.classList.toggle('active-date', element.dataset.timestamp === currentDay);
    });
  }

  renderCalendar(forecast: GroupedForecast): void {
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
          this.toggleActiveDay(date);
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
