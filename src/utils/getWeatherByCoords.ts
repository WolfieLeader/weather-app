import axios from "axios";
import type { IOpenWeather } from "../interfaces/openWeather";
import { weatherStore } from "../stores/weatherStore";
import formatTime from "./formatTime";

interface ICoords {
  latitude: number;
  longitude: number;
}
const getWeatherByCoords = async (coords: ICoords, openWeatherApiKey: string) => {
  const { data } = await axios.get<IOpenWeather>("https://openweathermap.org/data/2.5/onecall", {
    params: {
      lat: coords.latitude,
      lon: coords.longitude,
      units: "metric",
      appid: openWeatherApiKey,
    },
  });
  if (!data) return;
  const formattedData = {
    current: {
      temp: data.current.temp,
      feels_like: data.current.feels_like,
      humidity: data.current.humidity,
      wind_speed: data.current.wind_speed,
      sunrise: formatTime(data.current.sunrise),
      sunset: formatTime(data.current.sunset),
      uvi: data.current.uvi,
      description: {
        icon: data.current.weather[0].icon,
        main: data.current.weather[0].main,
        details: data.current.weather[0].description,
      },
    },
    daily: data.daily.map((day) => {
      return {
        temp: {
          day: day.temp.day,
          night: day.temp.night,
          min: day.temp.min,
          max: day.temp.max,
        },
        feels_like: {
          day: day.feels_like.day,
          night: day.feels_like.night,
        },
      };
    }),
  };
  weatherStore.set(formattedData);
};

export default getWeatherByCoords;
