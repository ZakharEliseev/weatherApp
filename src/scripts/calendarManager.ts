export class CalendarService {
  private calendarBlock: HTMLDivElement;
  private calendarItems: NodeListOf<HTMLLIElement>;

  constructor() {
    this.calendarBlock = document.querySelector('.calendar') as HTMLDivElement;
    this.calendarItems = document.querySelectorAll('.calendar-item') as NodeListOf<HTMLLIElement>;
  }

  deleteClassActiveDay(): void {
    this.calendarItems.forEach((el) => {
      el.classList.remove('active-date');
    });
  }

  renderCalendar(
    forecast: any[],
    getDate: (day: string) => string,
    getMonth: (month: string) => string,
    getWeekday: (month: string) => string
  ) {
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

  // renderCalendar(
  //   numberDays: () => Array<number>,
  //   monthName: () => string,
  //   namedDays: () => Array<string>,
  //   timestamp: () => Array<number>,
  // ) {
  //   const day: NodeListOf<HTMLHeadingElement> = document.querySelectorAll(
  //     '.calendar-day',
  //   ) as NodeListOf<HTMLHeadingElement>;

  //   const month: NodeListOf<HTMLParagraphElement> = document.querySelectorAll(
  //     '.calendar-header_month',
  //   ) as NodeListOf<HTMLParagraphElement>;

  //   const weekDay: NodeListOf<HTMLParagraphElement> = document.querySelectorAll(
  //     '.calendar-header_weekday',
  //   ) as NodeListOf<HTMLParagraphElement>;

  //   const item: NodeListOf<HTMLLIElement> = document.querySelectorAll(
  //     '.calendar-item',
  //   ) as NodeListOf<HTMLLIElement>;

  //   [...this.calendarBlock.children].forEach((_, index) => {
  //     item[index].dataset.timestamp = timestamp()[index].toString();
  //     day[index].textContent = numberDays()[index].toString();
  //     month[index].textContent = monthName();
  //     weekDay[index].textContent = namedDays()[index].toString();
  //   });
  // }
}
