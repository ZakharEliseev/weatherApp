import 'dayjs/locale/ru';

import dayjs from 'dayjs';

dayjs.locale('ru');



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

export class DateService {

  getWeekday(weekday: string): string {
    return dayjs(weekday).format('dddd')[0].toUpperCase() + dayjs(weekday).format('dddd').slice(1);
  }

  getDate(day: string): string {
    return dayjs(day).format('D');
  }

  getMonth(month: string): string {
    return Month[dayjs(month).format('M')];
  }

}
