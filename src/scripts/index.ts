import { CalendarManager } from './calendarManager';
import { WeatherDataService } from './WeatherDataService';
import { WeatherManager } from './weatherManager';

class App {
  private searchForm: HTMLFormElement;
  private cityInput: HTMLInputElement;
  private calendarManager = new CalendarManager();

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
    );
    this.weatherManager.renderCityName(this.cityInput.value);
  }

  init() {
    this.searchForm.addEventListener('submit', this.onSubmit);
  }
}

const app = new App();
app.init();
