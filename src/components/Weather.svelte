<script lang="ts">
  import { locationStore } from "../stores/locationStore";
  import { weatherStore } from "../stores/weatherStore";
  import formatTime from "../utils/formatTime";
  import getWeatherByCoords from "../utils/getWeatherByCoords";

  locationStore.subscribe(async (value) => {
    if (!value.coords) return;
    const { data } = await getWeatherByCoords(value.coords, import.meta.env.VITE_OPEN_WEATHER_API_KEY);
    weatherData = {
      current: {
        temp: data.current.temp,
        feels_like: data.current.feels_like,
        humidity: data.current.humidity,
        wind_speed: data.current.wind_speed,
        sunrise: formatTime(data.current.sunrise),
        sunset: formatTime(data.current.sunset),
        uvi: data.current.uvi,
      },
    };
  });

  let weatherData = {
    current: {
      temp: 0,
      feels_like: 0,
      humidity: 0,
      wind_speed: 0,
      sunrise: "",
      sunset: "",
      uvi: 0,
    },
  };
</script>

<div>
  <span class="text-lg font-semibold">Weather:</span>
  <div class="bg-white p-1 rounded w-fit">
    <ul>
      <li>Temperature: {weatherData.current.temp}</li>
      <li>Feels Like: {weatherData.current.feels_like}</li>
      <li>Humidity: {weatherData.current.humidity}</li>
      <li>Wind Speed: {weatherData.current.wind_speed}</li>
      <li>Sunrise: {weatherData.current.sunrise}</li>
      <li>Sunset: {weatherData.current.sunset}</li>
      <li>UV Index: {weatherData.current.uvi}</li>
    </ul>
  </div>
</div>
