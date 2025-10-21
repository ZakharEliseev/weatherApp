import 'dayjs/locale/ru';

import dayjs, { Dayjs } from 'dayjs';
import weekday from 'dayjs/plugin/weekday';

dayjs.locale('ru');
dayjs.extend(weekday);

export class DateInfo {
  private date: Dayjs;
  private month: string;
  private namedDays: string[];
  private numberDays: number[];

  constructor() {
    this.date = dayjs();
    this.month = this.date.format('MMMM');
    this.namedDays = [];
    this.numberDays = [];
  }

  getNamedDays() {
    for (let i = 0; i < 5; i++) {
      const tomorrow = this.date.add(i, 'day');
      const capitalize =
        tomorrow.format('dddd')[0].toUpperCase() + tomorrow.format('dddd').slice(1);
      this.namedDays.push(capitalize);
    }
    return this.namedDays;
  }

  getNumbersDays() {
    for (let i = 0; i < 5; i++) {
      const day = this.date.add(i, 'day');
      const dayNumber = day.date();
      this.numberDays.push(dayNumber);
    }
    return this.numberDays
  }

  getMonth() {
    return this.month[0].toUpperCase() + this.month.slice(1)
  }
}
