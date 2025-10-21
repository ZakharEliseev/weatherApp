import { DateInfo } from "./date";

export class Calendar {
  private daysBlock: HTMLDivElement;
  private date: DateInfo;

  constructor() {
    this.daysBlock = document.querySelector('.days') as HTMLDivElement;
    this.date = new DateInfo();
  }


  renderCalendar() {
    console.log(this.date.getNamedDays());
    console.log(this.date.getNumbersDays());
    console.log(this.date.getMonth());
  }
}
