import { Config } from "../../config"
import { Calendar } from "./calendarManager";
import { DataManager } from "./dataManager";
import { DateInfo } from './dateManager';
class App {
  private form: HTMLFormElement;
  private input: HTMLInputElement;
  private calendar = new Calendar();
  private date = new DateInfo();
  private dataManager = new DataManager();
  private config = new Config();

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

  init() {
    this.form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const result = await this.dataManager.fetchDataOW(
        this.config.getForecastFromOW(this.input.value),
      );
      console.log(result);
    });
    this.calendar.renderCalendar(this.onGetNumberDays, this.onGetMonthName, this.onGetNamedDays);
  }
}


const app = new App();
app.init();