//https://openweathermap.org/api/one-call-3
export interface IOpenWeather {
  timezone: string;
  timezone_offset: number;
  lat: number;
  lon: number;
  current: ICurrent;
  minutely: IMinutely[];
  hourly: IHourly[];
  daily: IDaily[];
}

interface IWeatherObj {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface ICurrent {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: IWeatherObj[];
  wind_deg: number;
  wind_speed: number;
}

interface IMinutely {
  dt: number;
  precipitation: number;
}

interface IHourly {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pop: number;
  pressure: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: IWeatherObj[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

interface IDaily {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: IPartsOfTheDay;
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: IPartsOfTheDay & { min: number; max: number };
  uvi: number;
  weather: IWeatherObj[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

interface IPartsOfTheDay {
  day: number;
  eve: number;
  morn: number;
  night: number;
}
