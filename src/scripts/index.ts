import { CalendarService } from './calendarManager';
import { DateService } from './dateService';
import { DataManager } from './fetchData';
import { WeatherManager } from './weatherManager';

class App {
  private form: HTMLFormElement;
  private input: HTMLInputElement;
  private calendarManager = new CalendarService();
  private dateService = new DateService();
  private dataManager = new DataManager();
  private weatherManager = new WeatherManager();

  constructor() {
    this.form = document.querySelector('.weather-form') as HTMLFormElement;
    this.input = document.querySelector('.weather-form__input') as HTMLInputElement;
    this.calendarElement = document.querySelector('.calendar') as HTMLUListElement;
  }

  onGetForecast = (): Promise<any[]> => {
    return this.dataManager.getForecast(this.input.value);
  };

  onGetDate = (day: string): string => {
    return this.dateService.getDate(day);
  };

  onGetMonth = (month: string): string => {
    return this.dateService.getMonth(month);
  };

  onGetWeekday = (weekday: string): string => {
    return this.dateService.getWeekday(weekday);
  };


  init() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (this.input.value.length === 0) {
        alert('Заполните поле!');
        return;
      }
      this.calendarManager.renderCalendar(
        this.onGetForecast,
        this.onGetDate,
        this.onGetMonth,
        this.onGetWeekday,
      );
    });
    // this.calendarManager.renderCalendar(this.onGetForecast);

    // this.form.addEventListener('submit', async (e) => {
    //   if (this.input.value.length === 0) {
    //     alert('Заполните поле!');
    //     e.preventDefault();
    //   }
    //   this.weatherManager.renderCityName(this.input.value);
    //   e.preventDefault();
    //   this.weatherManager.renderWeather(
    //     await this.dataService.getForecast(this.input.value),
    //     this.onGetHours,
    //   );
    //   this.input.value = '';
    // });

    // this.calendarElement.addEventListener('click', (e) => {
    //   const item = (e.target as Element).closest('.calendar-item') as HTMLLIElement;
    //   this.calendar.deleteClassActiveDay();
    //   item.classList.add('active-date');
    // });
  }
}

const app = new App();
app.init();
