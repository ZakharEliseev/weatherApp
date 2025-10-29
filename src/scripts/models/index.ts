import { UiService } from '../UiService';
import { WeatherDataService } from '../WeatherDataService';

export type ForecastResponse = {
  list: Array<{
    dt_txt: string;
    main: { temp: number; pressure: number; humidity: number };
    weather: Array<{ description: string; icon: string }>;
    wind: { speed: number };
  }>;
};

export interface WeatherEntry {
  time: string;
  temp: number;
  description: string;
  icon: string;
  wind: number;
  pressure: number;
  humidity: number;
}

export type GroupedForecast = {
  [date: string]: WeatherEntry[];
};
