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
  }


  init() {
    this.form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (this.input.value.length === 0) {
        alert('Заполните поле!');
        return;
      }
      const list = await this.dataManager.getForecast(this.input.value);
      this.calendarManager.renderCalendar(
        list,
        this.dateService.getDate,
        this.dateService.getMonth,
        this.dateService.getWeekday,
      );
    });

  }
}

const app = new App();
app.init();
