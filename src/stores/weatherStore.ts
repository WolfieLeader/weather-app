import { writable } from "svelte/store";

interface IWeatherStore {
  current: {
    temp: number;
    feels_like: number;
    humidity: number;
    wind_speed: number;
    sunrise: string;
    sunset: string;
    uvi: number;
    description: {
      iconCode: string;
      main: string;
      details: string;
    } | null;
  };
  daily: {
    day: string;
    temp: {
      day: number;
      night: number;
      min: number;
      max: number;
    };
    feels_like: {
      day: number;
      night: number;
    };
    description: {
      iconCode: string;
      main: string;
      details: string;
    } | null;
  }[];
}

export const weatherStore = writable<IWeatherStore>({
  current: {
    temp: 0,
    feels_like: 0,
    humidity: 0,
    wind_speed: 0,
    sunrise: "",
    sunset: "",
    uvi: 0,
    description: null,
  },
  daily: [],
});
