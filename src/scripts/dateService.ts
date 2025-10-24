import 'dayjs/locale/ru';

import dayjs, { Dayjs } from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import weekday from 'dayjs/plugin/weekday';


dayjs.locale('ru');
dayjs.extend(weekday);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isToday);

const Month: { [key: string]: string } = {
  1: 'Января',
  2: 'Февраля',
  3: 'Марта',
  4: 'Апреля',
  5: 'Мая',
  6: 'Июня',
  7: 'Июля',
  8: 'Августа',
  9: 'Сентября',
  10: 'Октября',
  11: 'Ноября',
  12: 'Декабря',
};

export class DateInfo {
  private date: Dayjs;
  private month: string;
  private namedDays: string[];
  private numberDays: number[];

  constructor() {
    this.date = dayjs();
    this.month = this.date.format('M');
    this.namedDays = [];
    this.numberDays = [];
  }

  getNamedDays(): Array<string> {
    for (let i = 0; i < 4; i++) {
      const tomorrow = this.date.add(i, 'day');
      const capitalize =
        tomorrow.format('dddd')[0].toUpperCase() + tomorrow.format('dddd').slice(1);
      this.namedDays.push(capitalize);
    }
    return this.namedDays;
  }

  getNumbersDays(): Array<number> {
    for (let i = 0; i < 4; i++) {
      const day = this.date.add(i, 'day');
      const dayNumber = day.date();
      this.numberDays.push(dayNumber);
    }
    return this.numberDays;
  }

  getMonth(): string {
    return Month[this.month];
  }

  getЕTime(timestamp: string): string {
    const time = dayjs(timestamp).format('HH:mm');
    return time;
  }

  getTimeStamp(): number[] {
    const timestamps: number[] = [];
    for (let i = 0; i < 4; i++) {
      const day = dayjs().add(i, 'day').startOf('day');
      const timestamp = day.utc();
      timestamps.push(Number(timestamp));
    }
    return timestamps;
  }

  getCurrentDay(baseDate: number, checkDate: number): boolean {
    const base = dayjs.utc(baseDate);
    const check = dayjs.utc(checkDate * 1000);
    return check.isSame(base, 'day');
  }

  isToday(checkDate: number): boolean {
    const check = dayjs.utc(checkDate * 1000);
    return check.isToday();
  }
}
