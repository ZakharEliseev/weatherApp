import { CalendarService } from './calendarManager';
import { DateFormatter } from './dateService';
import { WeatherDataService } from './fetchData';
import { WeatherManager } from './weatherManager';

class App {
  private searchForm: HTMLFormElement;
  private cityInput: HTMLInputElement;
  private calendarManager = new CalendarService();
  private dateFormatter = new DateFormatter();
  private weatherDataService = new WeatherDataService();
  private weatherManager = new WeatherManager();

  constructor() {
    this.searchForm = document.querySelector('.weather-form') as HTMLFormElement;
    this.cityInput = document.querySelector('.weather-form__input') as HTMLInputElement;
  }

  onSubmit = async (e: any) => {
    e.preventDefault();
    const value = this.cityInput.value;
    if (value.length === 0) {
      alert('Заполните поле!');
      return;
    }
    await this.weatherDataService.processWeatherData(this.cityInput.value);
    this.updateUi();
  };

  updateUi() {
    const list = this.weatherDataService.getGroupedForecast();
    this.calendarManager.renderCalendar(
      list,
      this.dateFormatter.formatDate,
      this.dateFormatter.formatMonth,
      this.dateFormatter.formatWeekday,
    );
    this.weatherManager.renderCityName(this.cityInput.value);
  }

  init() {
    this.searchForm.addEventListener('submit', this.onSubmit);
  }
}

const app = new App();
app.init();
