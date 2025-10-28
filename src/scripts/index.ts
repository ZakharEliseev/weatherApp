import { UiService } from './UiService';
import { WeatherDataService } from './WeatherDataService';

class App {
  private searchForm: HTMLFormElement;
  private cityInput: HTMLInputElement;
  private uiService = new UiService();
  private weatherDataService = new WeatherDataService();

  constructor() {
    this.searchForm = document.querySelector('.weather-form') as HTMLFormElement;
    this.cityInput = document.querySelector('.weather-form__input') as HTMLInputElement;
  }

  onSubmit = async (e: SubmitEvent): Promise<void> => {
    e.preventDefault();
    const value = this.cityInput.value;
    if (value.length === 0) {
      alert('Заполните поле!');
      return;
    }
    await this.weatherDataService.processWeatherData(this.cityInput.value);
    this.updateUi();
    this.cityInput.value = '';
  };

  updateUi(): void {
    const list = this.weatherDataService.getGroupedForecast();
    this.uiService.render(list, this.cityInput.value);
  }

  init(): void {
    this.searchForm.addEventListener('submit', this.onSubmit);
  }
}

const app = new App();
app.init();
