import dayjs, { Dayjs } from 'dayjs';

import { DateFormatter } from './DateFormatter';
import { GroupedForecast, WeatherEntry } from './WeatherDataService';
export class CalendarManager {
  private calendarBlock: HTMLDivElement;
  private dateFormatter = new DateFormatter();
  private activeDay: string;
  constructor() {
    this.calendarBlock = document.querySelector('.calendar') as HTMLDivElement;
    this.activeDay = dayjs().format('YYYY-MM-DD');
  }

  renderCalendar(forecast: GroupedForecast, cb: (weatherData: WeatherEntry[]) => void): void {
    this.calendarBlock.replaceChildren();
    const days = Object.keys(forecast);
    
    days.forEach((d) => {
      const li: HTMLLIElement = document.createElement('li');
      li.dataset.timestamp = d;
      li.classList.add('calendar-item');
      if (d === this.activeDay) {
        li.classList.add('active-date');
        cb(forecast[d])
      }
      li.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLLIElement;
        this.removeActiveDay();
        li.classList.add('active-date');
        const date = target.dataset.timestamp;
        if (date && forecast[date]) {
          cb(forecast[date]);
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

  removeActiveDay(): void {
    const days = document.querySelectorAll('.calendar-item') as NodeListOf<HTMLLIElement>;
    days.forEach((d) => {
      d.classList.remove('active-date');
    });
  }
}
