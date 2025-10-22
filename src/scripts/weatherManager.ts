export class WeatherManager {
  private weatherBlock: HTMLUListElement;
  private city: HTMLHeadingElement;

  constructor () {
    this.weatherBlock = document.querySelector('.weather') as HTMLUListElement;
    this.city = document.querySelector('.city') as HTMLHeadingElement;
  }

  renderWeather(cityName: () => string) {
    const currentCity = cityName().charAt(0).toUpperCase() + cityName().slice(1);
    this.city.textContent = `Погода в городе ${currentCity}`;

    const li = document.createElement('li');
    li.classList.add('weather-item');

    const weatherTempTime = document.createElement('div');
    weatherTempTime.classList.add('weather-temp');
    const weatherTime = document.createElement('p');
    weatherTime.classList.add('weather-temp_time');
    const weatherTemp = document.createElement('p');
    weatherTemp.classList.add('weather-temp_degree');

    weatherTempTime.append(weatherTime, weatherTemp)
    li.append(weatherTempTime)
    this.weatherBlock.append(li);
  }

}