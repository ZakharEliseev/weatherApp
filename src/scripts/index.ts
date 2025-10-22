import { Calendar } from './calendarManager';
import { DataManager } from './dataManager';
import { DateInfo } from './dateManager';
import { WeatherManager } from './weatherManager';

class App {
  private form: HTMLFormElement;
  private input: HTMLInputElement;
  private calendar = new Calendar();
  private date = new DateInfo();
  private dataManager = new DataManager();
  private weatherManager = new WeatherManager();

  constructor() {
    this.form = document.querySelector('.weather-form') as HTMLFormElement;
    this.input = document.querySelector('.weather-form__input') as HTMLInputElement;
  }

  onGetNumberDays = (): Array<number> => {
    return this.date.getNumbersDays();
  };

  onGetMonthName = (): string => {
    return this.date.getMonth();
  };

  onGetNamedDays = (): Array<string> => {
    return this.date.getNamedDays();
  };

  onGetCityName = (): string => {
    return this.input.value;
  };

  init() {
    this.form.addEventListener('submit', async (e) => {
      if (this.input.value.length === 0) {
        alert('Заполните поле!');
        e.preventDefault();
      }
      this.weatherManager.renderWeather(this.onGetCityName);
      e.preventDefault();
      this.input.value = '';
    });
    this.calendar.renderCalendar(this.onGetNumberDays, this.onGetMonthName, this.onGetNamedDays);
    this.console();
  }

  async console() {
    const rowData = await this.dataManager.getRowData();
    const data = await this.dataManager.getProceedData()
    console.log(rowData);
    console.log(data);
  }
}

const app = new App();
app.init();
