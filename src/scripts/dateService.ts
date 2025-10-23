import 'dayjs/locale/ru';

import dayjs, { Dayjs } from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import weekday from 'dayjs/plugin/weekday';

dayjs.locale('ru');
dayjs.extend(weekday);
dayjs.extend(utc);
dayjs.extend(timezone);


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

  getЕTime(timestamp: number): string {
    const time = dayjs(timestamp * 1000).format('HH:mm');
    const ttt = 1761242400;

    console.log('Timestamp:', ttt);
    console.log('Timestamp в ms:', ttt * 1000);

    const date = new Date(ttt * 1000);
    console.log('Date toString:', date.toString());
    console.log('Date toUTCString:', date.toUTCString());
    console.log('Date toISOString:', date.toISOString());

    const dayjsTime = dayjs(ttt * 1000);
    console.log('Dayjs format:', dayjsTime.format('HH:mm'));
    console.log('Dayjs UTC:', dayjsTime.utc().format('HH:mm'));
    console.log('Dayjs +05:00:', dayjsTime.utcOffset(5 * 60).format('HH:mm'));

    console.log('Текущее время ПК:', dayjs().format('HH:mm'));
    console.log('Часовой пояс ПК:', dayjs().format('Z'));
    return time;
  }
}
