export class Calendar {
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
    numberDays: () => Array<number>,
    monthName: () => string,
    namedDays: () => Array<string>,
    timestamp: () => Array<number>,
  ) {
    const day: NodeListOf<HTMLHeadingElement> = document.querySelectorAll(
      '.calendar-day',
    ) as NodeListOf<HTMLHeadingElement>;

    const month: NodeListOf<HTMLParagraphElement> = document.querySelectorAll(
      '.calendar-header_month',
    ) as NodeListOf<HTMLParagraphElement>;

    const weekDay: NodeListOf<HTMLParagraphElement> = document.querySelectorAll(
      '.calendar-header_weekday',
    ) as NodeListOf<HTMLParagraphElement>;

    const item: NodeListOf<HTMLLIElement> = document.querySelectorAll(
      '.calendar-item',
    ) as NodeListOf<HTMLLIElement>;

    [...this.calendarBlock.children].forEach((_, index) => {
      item[index].dataset.timestamp = timestamp()[index].toString();
      day[index].textContent = numberDays()[index].toString();
      month[index].textContent = monthName();
      weekDay[index].textContent = namedDays()[index].toString();
    });
  }
}
