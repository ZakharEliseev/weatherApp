import { DateFormatter } from './DateFormatter';
import { GroupedForecast, WeatherEntry } from './WeatherDataService';

export class CalendarManager {
  private calendarBlock: HTMLDivElement;
  private dateFormatter = new DateFormatter();

  constructor() {
    this.calendarBlock = document.querySelector('.calendar') as HTMLDivElement;
  }

  renderCalendar(forecast: GroupedForecast, cb: (weatherData: WeatherEntry[]) => void) {
    this.calendarBlock.replaceChildren();
    const days = Object.keys(forecast);
    days.forEach((d) => {
      const li: HTMLLIElement = document.createElement('li');
      li.dataset.timestamp = d;
      li.classList.add('calendar-item');
      li.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLLIElement;
        this.removeActiveDay();
        target.classList.add('active-date');
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

  selectFirstDay(forecast: GroupedForecast, cb: (data: WeatherEntry[]) => void) {
    const calendarItems = document.querySelectorAll('.calendar-item') as NodeListOf<HTMLLIElement>;
    if (calendarItems.length > 0) {
      calendarItems[0].classList.add('active-date');
      const firstDate = calendarItems[0].dataset.timestamp;
      if (firstDate && forecast[firstDate]) {
        cb(forecast[firstDate]);
      }
    }
  }

  removeActiveDay(): void {
    const days = document.querySelectorAll('.calendar-item') as NodeListOf<HTMLLIElement>;
    days.forEach((d) => {
      d.classList.remove('active-date');
    });
  }
}
