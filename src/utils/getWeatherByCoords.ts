import axios from "axios";
import type { IOpenWeather } from "../interfaces/openWeather";

interface ICoords {
  latitude: number;
  longitude: number;
}
const getWeatherByCoords = (coords: ICoords, openWeatherApiKey: string) => {
  return axios.get<IOpenWeather>("https://openweathermap.org/data/2.5/onecall", {
    params: {
      lat: coords.latitude,
      lon: coords.longitude,
      units: "metric",
      appid: openWeatherApiKey,
    },
  });
};

export default getWeatherByCoords;
