export class Calendar {
  private calendarBlock: HTMLDivElement;

  constructor() {
    this.calendarBlock = document.querySelector('.calendar') as HTMLDivElement;
  }

  renderCalendar(numberDays: () => Array<number>, monthName: () => string, namedDays: () => Array<string>) {
    const day: NodeListOf<HTMLHeadingElement> = document.querySelectorAll(
      '.calendar-day',
    ) as NodeListOf<HTMLHeadingElement>;

    const month: NodeListOf<HTMLParagraphElement> = document.querySelectorAll(
      '.calendar-header_month',
    ) as NodeListOf<HTMLParagraphElement>;

    const weekDay: NodeListOf<HTMLParagraphElement> = document.querySelectorAll(
      '.calendar-header_weekday ',
    ) as NodeListOf<HTMLParagraphElement>;

    [...this.calendarBlock.children].forEach((_, index) => {
      day[index].textContent = numberDays()[index].toString();
      month[index].textContent = monthName();
      weekDay[index].textContent = namedDays()[index].toString();
    });
  }
}
