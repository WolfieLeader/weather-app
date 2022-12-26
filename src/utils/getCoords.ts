import type { ICityTimeZones } from "../interfaces/cityTimezones";
import cityTimezones from "city-timezones";

const CitiesArray = cityTimezones.cityMapping;

export const getCitiesByQuery = (query: string): ICityTimeZones[] => {
  const citiesStartWith = CitiesArray.filter((cityObj) => cityObj.city.toLowerCase().trimStart().startsWith(query));
  return citiesStartWith.length > 0
    ? citiesStartWith
    : CitiesArray.filter((cityObj) => cityObj.city.toLowerCase().trimStart().includes(query));
};

export const getCityByTimezone = (timezone: string): ICityTimeZones => {
  return CitiesArray.find((cityObj) => cityObj.timezone === timezone);
};
