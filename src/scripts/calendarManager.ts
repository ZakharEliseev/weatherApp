export class CalendarService {
  private calendarBlock: HTMLDivElement;
  private calendarItems: NodeListOf<HTMLLIElement>;

  constructor() {
    this.calendarBlock = document.querySelector('.calendar') as HTMLDivElement;
    this.calendarItems = document.querySelectorAll('.calendar-item') as NodeListOf<HTMLLIElement>;
  }

  clearActiveDate(): void {
    this.calendarItems.forEach((el) => {
      el.classList.remove('active-date');
    });
  }

  renderCalendar(
    forecast: { [date: string]: any[] },
    getDate: (day: string) => string,
    getMonth: (month: string) => string,
    getWeekday: (month: string) => string,
  ) {
    this.calendarBlock.replaceChildren();
    const days = Object.keys(forecast);
    days.forEach((d) => {
      const li: HTMLLIElement = document.createElement('li');
      li.classList.add('calendar-item');

      const day: HTMLHeadingElement = document.createElement('h2');
      day.classList.add('calendar-day');
      day.textContent = getDate(d);
      li.append(day);

      const dayHeader: HTMLDivElement = document.createElement('div');
      dayHeader.classList.add('calendar-header');
      li.append(dayHeader);

      const month: HTMLParagraphElement = document.createElement('p');
      month.classList.add('calendar-header_month');
      month.textContent = getMonth(d);

      const weekday: HTMLParagraphElement = document.createElement('p');
      weekday.classList.add('calendar-header_weekday');
      weekday.textContent = getWeekday(d);

      dayHeader.append(month, weekday);
      this.calendarBlock.append(li);
    });
  }
}
