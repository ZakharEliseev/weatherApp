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

  getInputValue() {
    return this.input.value ? this.input.value : 'Москва';
  }

  onGetHours = (hours: string): string => {
    return this.date.getЕTime(hours);
  };
  async init() {
    this.form.addEventListener('submit', async (e) => {
      if (this.input.value.length === 0) {
        alert('Заполните поле!');
        e.preventDefault();
      }
      this.weatherManager.rendCityName(this.getInputValue());
      e.preventDefault();
      this.weatherManager.renderWeather(
        await this.dataManager.getForecast(this.getInputValue()),
        this.onGetHours,
      );
      this.input.value = '';
    });
    this.calendar.renderCalendar(this.onGetNumberDays, this.onGetMonthName, this.onGetNamedDays);
  }

}

const app = new App();
app.init();
