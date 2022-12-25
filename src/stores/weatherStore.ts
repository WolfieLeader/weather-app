import { writable } from "svelte/store";

export const weatherStore = writable({
  city: "",
  country: "",
  timezone: "",
  latitude: 0,
  longitude: 0,
  currentTemp: 0,
});
