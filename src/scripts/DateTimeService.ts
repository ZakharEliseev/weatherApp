import 'dayjs/locale/ru';

import dayjs, {Dayjs} from 'dayjs';

dayjs.locale('ru');

export class DateTimeService {
  private dayjs: Dayjs;

  constructor() {
    this.dayjs = dayjs();
  }

  getWeekday(weekday: string): string {
    return dayjs(weekday).format('dddd')[0].toUpperCase() + dayjs(weekday).format('dddd').slice(1);
  }

  getDate(day: string): string {
    return dayjs(day).format('D');
  }

  getMonth(month: string): string {
    return dayjs(month).format('MMMM')[0].toUpperCase() + dayjs(month).format('MMMM').slice(1);
  }

}
