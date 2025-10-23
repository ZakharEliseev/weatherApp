import { Calendar } from './calendarManager';
import { DataManager } from './dataService';
import { DateInfo } from './dateService';
import { WeatherManager } from './weatherManager';

class App {
  private form: HTMLFormElement;
  private input: HTMLInputElement;
  private calendar = new Calendar();
  private dateService = new DateInfo();
  private dataService = new DataManager();
  private weatherManager = new WeatherManager();

  constructor() {
    this.form = document.querySelector('.weather-form') as HTMLFormElement;
    this.input = document.querySelector('.weather-form__input') as HTMLInputElement;
  }

  onGetNumberDays = (): Array<number> => {
    return this.dateService.getNumbersDays();
  };

  onGetMonthName = (): string => {
    return this.dateService.getMonth();
  };

  onGetNamedDays = (): Array<string> => {
    return this.dateService.getNamedDays();
  };

  onGetCityName = (): string => {
    return this.input.value;
  };

  getInputValue() {
    return this.input.value ? this.input.value : 'Москва';
  }

  onGetHours = (hours: number): string => {
    return this.dateService.getЕTime(hours);
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
        await this.dataService.getForecast(this.getInputValue()),
        this.onGetHours,
      );
      this.input.value = '';
      this.console()
    });
    this.calendar.renderCalendar(this.onGetNumberDays, this.onGetMonthName, this.onGetNamedDays);
  }

  async console() {
    console.log(await this.dataService.getF());
  }
}

const app = new App();
app.init();
