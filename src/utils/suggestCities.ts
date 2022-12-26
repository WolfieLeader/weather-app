import axios from "axios";
import { getCitiesByQuery } from "./getCoords";

const suggestCities = (value: string) => {
  const query = value.toLowerCase().trimStart();
  if (!/^[a-zA-Z ,'-]{2,50}$/.test(query)) return [];
  return getCitiesByQuery(query);
};

export default suggestCities;

const fetchOpenWeather = (query: string, openWeatherApiKey: string) => {
  return Promise.all([
    axios.get("http://api.openweathermap.org/geo/1.0/direct", {
      params: {
        appid: openWeatherApiKey,
        limit: 5,
        q: query,
      },
    }),
    axios.get(
      `https://openweathermap.org/data/2.5/find?q=${query}&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric`
    ),
  ]);
};

const fetchRapidApi = (query: string, rapidApiKey: string) => {
  return axios.get("https://wft-geo-db.p.rapidapi.com/v1/geo/cities", {
    params: {
      limit: 10,
      namePrefix: query,
    },
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  });
};
