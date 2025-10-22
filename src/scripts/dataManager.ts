
import { Config } from '../../config';

export class DataManager {
  private config = new Config();
  private forecast: any;

  constructor() {
    this.forecast = this.getRowData();
  }

  async fetchDataOW(url: string): Promise<any> {
    const response = await fetch(url);
    return response.json();
  }

  async getRowData() {
    const response = await this.fetchDataOW(this.config.getForecastFromOW('москва'));
    return response
  }

  async getProceedData() {
    const response = await this.fetchDataOW(this.config.getForecastFromOW('москва'));
    const data = {
      cityName: response.city.name,
      time: response.list[0].dt_txt,
    };
    return data;
  }
}

const obj =  
 {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1761145200,
            "main": {
                "temp": 6.97,
                "feels_like": 5.63,
                "temp_min": 6.79,
                "temp_max": 6.97,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1000,
                "humidity": 71,
                "temp_kf": 0.18
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 2.03,
                "deg": 45,
                "gust": 4
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-10-22 15:00:00"
        },
        {
            "dt": 1761156000,
            "main": {
                "temp": 6.51,
                "feels_like": 5.26,
                "temp_min": 6.23,
                "temp_max": 6.51,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1000,
                "humidity": 77,
                "temp_kf": 0.28
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 1.87,
                "deg": 50,
                "gust": 3.52
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-10-22 18:00:00"
        },
        {
            "dt": 1761166800,
            "main": {
                "temp": 6.05,
                "feels_like": 6.05,
                "temp_min": 6.05,
                "temp_max": 6.05,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 999,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.05,
                "deg": 12,
                "gust": 1.65
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-10-22 21:00:00"
        },
        {
            "dt": 1761177600,
            "main": {
                "temp": 5.97,
                "feels_like": 5.97,
                "temp_min": 5.97,
                "temp_max": 5.97,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 999,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 0.86,
                "deg": 3,
                "gust": 1.4
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-10-23 00:00:00"
        },
        {
            "dt": 1761188400,
            "main": {
                "temp": 5.75,
                "feels_like": 5.75,
                "temp_min": 5.75,
                "temp_max": 5.75,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 999,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 0.45,
                "deg": 6,
                "gust": 0.75
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-10-23 03:00:00"
        },
        {
            "dt": 1761199200,
            "main": {
                "temp": 6.02,
                "feels_like": 6.02,
                "temp_min": 6.02,
                "temp_max": 6.02,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 999,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 0.48,
                "deg": 191,
                "gust": 0.63
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-10-23 06:00:00"
        },
        {
            "dt": 1761210000,
            "main": {
                "temp": 7.44,
                "feels_like": 6.16,
                "temp_min": 7.44,
                "temp_max": 7.44,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 999,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 95
            },
            "wind": {
                "speed": 2.05,
                "deg": 211,
                "gust": 2.66
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-10-23 09:00:00"
        },
        {
            "dt": 1761220800,
            "main": {
                "temp": 8.35,
                "feels_like": 6.7,
                "temp_min": 8.35,
                "temp_max": 8.35,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 998,
                "humidity": 61,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "облачно с прояснениями",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 72
            },
            "wind": {
                "speed": 2.74,
                "deg": 217,
                "gust": 3.64
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-10-23 12:00:00"
        },
        {
            "dt": 1761231600,
            "main": {
                "temp": 7.72,
                "feels_like": 6.09,
                "temp_min": 7.72,
                "temp_max": 7.72,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 998,
                "humidity": 60,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.55,
                "deg": 194,
                "gust": 4.13
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-10-23 15:00:00"
        },
        {
            "dt": 1761242400,
            "main": {
                "temp": 5.42,
                "feels_like": 3.2,
                "temp_min": 5.42,
                "temp_max": 5.42,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 998,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "облачно с прояснениями",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 64
            },
            "wind": {
                "speed": 2.75,
                "deg": 175,
                "gust": 7.34
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-10-23 18:00:00"
        },
        {
            "dt": 1761253200,
            "main": {
                "temp": 4.65,
                "feels_like": 2.14,
                "temp_min": 4.65,
                "temp_max": 4.65,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 998,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "небольшая облачность",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 19
            },
            "wind": {
                "speed": 2.93,
                "deg": 172,
                "gust": 8.48
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-10-23 21:00:00"
        },
        {
            "dt": 1761264000,
            "main": {
                "temp": 5.68,
                "feels_like": 2.99,
                "temp_min": 5.68,
                "temp_max": 5.68,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 997,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "переменная облачность",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 43
            },
            "wind": {
                "speed": 3.5,
                "deg": 184,
                "gust": 10.84
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-10-24 00:00:00"
        },
        {
            "dt": 1761274800,
            "main": {
                "temp": 6.02,
                "feels_like": 3.28,
                "temp_min": 6.02,
                "temp_max": 6.02,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 996,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.7,
                "deg": 174,
                "gust": 10.46
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-10-24 03:00:00"
        },
        {
            "dt": 1761285600,
            "main": {
                "temp": 6.5,
                "feels_like": 3.69,
                "temp_min": 6.5,
                "temp_max": 6.5,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 997,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.02,
                "deg": 177,
                "gust": 10.79
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-10-24 06:00:00"
        },
        {
            "dt": 1761296400,
            "main": {
                "temp": 9.18,
                "feels_like": 6.51,
                "temp_min": 9.18,
                "temp_max": 9.18,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 997,
                "humidity": 61,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 86
            },
            "wind": {
                "speed": 5.14,
                "deg": 181,
                "gust": 10.14
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-10-24 09:00:00"
        },
        {
            "dt": 1761307200,
            "main": {
                "temp": 9.49,
                "feels_like": 7.04,
                "temp_min": 9.49,
                "temp_max": 9.49,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 996,
                "humidity": 61,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 4.77,
                "deg": 171,
                "gust": 11.08
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-10-24 12:00:00"
        },
        {
            "dt": 1761318000,
            "main": {
                "temp": 7.95,
                "feels_like": 5.22,
                "temp_min": 7.95,
                "temp_max": 7.95,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 996,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 4.56,
                "deg": 160,
                "gust": 11.56
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-10-24 15:00:00"
        },
        {
            "dt": 1761328800,
            "main": {
                "temp": 6.71,
                "feels_like": 3.65,
                "temp_min": 6.71,
                "temp_max": 6.71,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 995,
                "humidity": 69,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 4.61,
                "deg": 156,
                "gust": 12.06
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-10-24 18:00:00"
        },
        {
            "dt": 1761339600,
            "main": {
                "temp": 5.83,
                "feels_like": 2.75,
                "temp_min": 5.83,
                "temp_max": 5.83,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 995,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 4.23,
                "deg": 150,
                "gust": 11.44
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-10-24 21:00:00"
        },
        {
            "dt": 1761350400,
            "main": {
                "temp": 4.89,
                "feels_like": 1.95,
                "temp_min": 4.89,
                "temp_max": 4.89,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 994,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "облачно с прояснениями",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 61
            },
            "wind": {
                "speed": 3.63,
                "deg": 145,
                "gust": 10.08
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-10-25 00:00:00"
        },
        {
            "dt": 1761361200,
            "main": {
                "temp": 5.2,
                "feels_like": 2.2,
                "temp_min": 5.2,
                "temp_max": 5.2,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 993,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "облачно с прояснениями",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 84
            },
            "wind": {
                "speed": 3.83,
                "deg": 134,
                "gust": 9.62
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-10-25 03:00:00"
        },
        {
            "dt": 1761372000,
            "main": {
                "temp": 6.21,
                "feels_like": 3.25,
                "temp_min": 6.21,
                "temp_max": 6.21,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 992,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 4.17,
                "deg": 131,
                "gust": 10.66
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-10-25 06:00:00"
        },
        {
            "dt": 1761382800,
            "main": {
                "temp": 8.54,
                "feels_like": 5.75,
                "temp_min": 8.54,
                "temp_max": 8.54,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 991,
                "humidity": 74,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 5.04,
                "deg": 136,
                "gust": 11.24
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-10-25 09:00:00"
        },
        {
            "dt": 1761393600,
            "main": {
                "temp": 8.08,
                "feels_like": 5.12,
                "temp_min": 8.08,
                "temp_max": 8.08,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 990,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 5.16,
                "deg": 131,
                "gust": 11.76
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-10-25 12:00:00"
        },
        {
            "dt": 1761404400,
            "main": {
                "temp": 8.43,
                "feels_like": 5.43,
                "temp_min": 8.43,
                "temp_max": 8.43,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 990,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "небольшой дождь",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 98
            },
            "wind": {
                "speed": 5.5,
                "deg": 132,
                "gust": 12.77
            },
            "visibility": 10000,
            "pop": 0.27,
            "rain": {
                "3h": 0.13
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-10-25 15:00:00"
        },
        {
            "dt": 1761415200,
            "main": {
                "temp": 8.25,
                "feels_like": 5.18,
                "temp_min": 8.25,
                "temp_max": 8.25,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 989,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 5.55,
                "deg": 130,
                "gust": 13.12
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-10-25 18:00:00"
        },
        {
            "dt": 1761426000,
            "main": {
                "temp": 7.78,
                "feels_like": 4.48,
                "temp_min": 7.78,
                "temp_max": 7.78,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 988,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 96
            },
            "wind": {
                "speed": 5.86,
                "deg": 129,
                "gust": 13.12
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-10-25 21:00:00"
        },
        {
            "dt": 1761436800,
            "main": {
                "temp": 6.7,
                "feels_like": 2.92,
                "temp_min": 6.7,
                "temp_max": 6.7,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 987,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "небольшой дождь",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 98
            },
            "wind": {
                "speed": 6.35,
                "deg": 131,
                "gust": 13.44
            },
            "visibility": 8344,
            "pop": 1,
            "rain": {
                "3h": 1.3
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-10-26 00:00:00"
        },
        {
            "dt": 1761447600,
            "main": {
                "temp": 6.3,
                "feels_like": 2.44,
                "temp_min": 6.3,
                "temp_max": 6.3,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 985,
                "humidity": 90,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "небольшой дождь",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 6.28,
                "deg": 125,
                "gust": 13.53
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 2
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-10-26 03:00:00"
        },
        {
            "dt": 1761458400,
            "main": {
                "temp": 6.51,
                "feels_like": 2.84,
                "temp_min": 6.51,
                "temp_max": 6.51,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 986,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "небольшой дождь",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.93,
                "deg": 183,
                "gust": 10.6
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 1.72
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-10-26 06:00:00"
        },
        {
            "dt": 1761469200,
            "main": {
                "temp": 7.96,
                "feels_like": 4.62,
                "temp_min": 7.96,
                "temp_max": 7.96,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 987,
                "humidity": 74,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "небольшой дождь",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 94
            },
            "wind": {
                "speed": 6.09,
                "deg": 180,
                "gust": 9.82
            },
            "visibility": 10000,
            "pop": 0.2,
            "rain": {
                "3h": 0.12
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-10-26 09:00:00"
        },
        {
            "dt": 1761480000,
            "main": {
                "temp": 7.57,
                "feels_like": 4.28,
                "temp_min": 7.57,
                "temp_max": 7.57,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 988,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "небольшой дождь",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 95
            },
            "wind": {
                "speed": 5.66,
                "deg": 184,
                "gust": 9.84
            },
            "visibility": 10000,
            "pop": 0.2,
            "rain": {
                "3h": 0.12
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-10-26 12:00:00"
        },
        {
            "dt": 1761490800,
            "main": {
                "temp": 7.21,
                "feels_like": 4.21,
                "temp_min": 7.21,
                "temp_max": 7.21,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 988,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.76,
                "deg": 180,
                "gust": 9.58
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-10-26 15:00:00"
        },
        {
            "dt": 1761501600,
            "main": {
                "temp": 6.6,
                "feels_like": 3.52,
                "temp_min": 6.6,
                "temp_max": 6.6,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 988,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 98
            },
            "wind": {
                "speed": 4.6,
                "deg": 174,
                "gust": 10.4
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-10-26 18:00:00"
        },
        {
            "dt": 1761512400,
            "main": {
                "temp": 6.83,
                "feels_like": 3.79,
                "temp_min": 6.83,
                "temp_max": 6.83,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 988,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "небольшой дождь",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 95
            },
            "wind": {
                "speed": 4.64,
                "deg": 184,
                "gust": 10.52
            },
            "visibility": 10000,
            "pop": 0.2,
            "rain": {
                "3h": 0.13
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-10-26 21:00:00"
        },
        {
            "dt": 1761523200,
            "main": {
                "temp": 6.89,
                "feels_like": 3.64,
                "temp_min": 6.89,
                "temp_max": 6.89,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 987,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "небольшой дождь",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 5.15,
                "deg": 180,
                "gust": 9.2
            },
            "visibility": 10000,
            "pop": 0.2,
            "rain": {
                "3h": 0.1
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-10-27 00:00:00"
        },
        {
            "dt": 1761534000,
            "main": {
                "temp": 6.48,
                "feels_like": 3.3,
                "temp_min": 6.48,
                "temp_max": 6.48,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 986,
                "humidity": 90,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "небольшой дождь",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.76,
                "deg": 172,
                "gust": 8.72
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 0.54
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-10-27 03:00:00"
        },
        {
            "dt": 1761544800,
            "main": {
                "temp": 6.69,
                "feels_like": 3.8,
                "temp_min": 6.69,
                "temp_max": 6.69,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 986,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "небольшой дождь",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.26,
                "deg": 180,
                "gust": 8.6
            },
            "visibility": 10000,
            "pop": 0.92,
            "rain": {
                "3h": 0.18
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-10-27 06:00:00"
        },
        {
            "dt": 1761555600,
            "main": {
                "temp": 7.62,
                "feels_like": 4.91,
                "temp_min": 7.62,
                "temp_max": 7.62,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 986,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.34,
                "deg": 188,
                "gust": 7.4
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-10-27 09:00:00"
        },
        {
            "dt": 1761566400,
            "main": {
                "temp": 9.16,
                "feels_like": 6.68,
                "temp_min": 9.16,
                "temp_max": 9.16,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 986,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.66,
                "deg": 200,
                "gust": 8.13
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-10-27 12:00:00"
        }
    ],
    "city": {
        "id": 524901,
        "name": "Москва",
        "coord": {
            "lat": 55.7522,
            "lon": 37.6156
        },
        "country": "RU",
        "population": 1000000,
        "timezone": 10800,
        "sunrise": 1761106466,
        "sunset": 1761142397
    }
}
