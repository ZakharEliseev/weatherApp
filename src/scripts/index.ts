import { Calendar } from './calendarManager';
import { DataManager } from './dataService';
import { DateInfo } from './dateService';
import { WeatherManager } from './weatherManager';

class App {
  private form: HTMLFormElement;
  private input: HTMLInputElement;
  private calendarElement: HTMLUListElement;
  private calendar = new Calendar();
  private dateService = new DateInfo();
  private dataService = new DataManager();
  private weatherManager = new WeatherManager();

  constructor() {
    this.form = document.querySelector('.weather-form') as HTMLFormElement;
    this.input = document.querySelector('.weather-form__input') as HTMLInputElement;
    this.calendarElement = document.querySelector('.calendar') as HTMLUListElement;
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

  onGetHours = (hours: string): string => {
    return this.dateService.getЕTime(hours);
  };

  onGetToday = (checkDay: number): boolean => {
    return this.dateService.isToday(checkDay);
  };

  onCheckIsToday = (baseDate: number, checkDate: number): boolean => {
    return this.dateService.getCurrentDay(baseDate, checkDate);
  };

  onGetTimeStamp = (): number[] => {
    return this.dateService.getTimeStamp();
  };

  async init() {
    this.form.addEventListener('submit', async (e) => {
      if (this.input.value.length === 0) {
        alert('Заполните поле!');
        e.preventDefault();
      }
      this.weatherManager.rendCityName(this.input.value);
      e.preventDefault();
      this.weatherManager.renderWeather(
        await this.dataService.getForecast(this.input.value),
        this.onGetHours,
        this.onGetToday,
      );
      // await this.print();
      this.input.value = '';
    });
    this.calendar.renderCalendar(
      this.onGetNumberDays,
      this.onGetMonthName,
      this.onGetNamedDays,
      this.onGetTimeStamp,
    );
    // this.calendarElement.addEventListener('click', (e) => {
    //   const item = (e.target as Element).closest('.calendar-item') as HTMLLIElement;
    //   const timestamp = item.getAttribute('data-timestamp');
    //   this.calendar.deleteClassActiveDay();
    //   item.classList.add('active-date')
    //   console.log(timestamp)
    // });
  }

  // async print() {
  //   const data = await this.dataService.getF();
  //   const dataU = await this.dataService.getData(this.input.value);
  //   console.log(data);
  //   console.log(dataU);
  // }
}

const app = new App();
app.init();
