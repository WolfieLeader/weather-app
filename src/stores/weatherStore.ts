import { writable } from "svelte/store";

export const weatherStore = writable({
  current: {
    temp: 0,
    feels_like: 0,
    humidity: 0,
    wind_speed: 0,
    sunrise: 0,
    sunset: 0,
    uvi: 0,
  },
});
