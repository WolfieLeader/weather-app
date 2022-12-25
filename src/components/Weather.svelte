<script lang="ts">
  import axios from "axios";
  import type { IOpenWeather } from "../interfaces/openWeather";
  import { weatherStore } from "../stores/weatherStore";

  const fetchWeather = async (latitude: number, longitude: number) => {
    const { data } = (await axios.get("https://openweathermap.org/data/2.5/onecall", {
      params: {
        lat: latitude,
        lon: longitude,
        units: "metric",
        appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
      },
    })) as { data: IOpenWeather };
    weatherData.temp = data.current.temp;
    weatherData.feels_like = data.current.feels_like;
  };

  weatherStore.subscribe((value) => {
    const { latitude, longitude } = value.coords;
    if (latitude && longitude) {
      fetchWeather(latitude, longitude);
    }
  });

  let weatherData = {
    temp: 0,
    feels_like: 0,
  };
</script>

<div>
  <span class="text-lg font-semibold">Weather:</span>
  <div class="bg-white p-1 rounded w-fit">
    <span>Temperature: {weatherData.temp}</span>
    <span>Feels Like: {weatherData.feels_like}</span>
  </div>
</div>
