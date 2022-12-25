<script lang="ts">
  // const url = `https://openweathermap.org/data/2.5/onecall?lat=${payload.lat}&lon=${payload.lon}&units=metric&appid=${payload.appid}`;
  import type { IGeoDB } from "../interfaces/rapidapi";
  import debounce from "../utils/debounce";
  import axios from "axios";

  let value = "";
  const handleChange = debounce((e) => {
    value = e.target.value;
    fetchSuggestedCities();
  });

  const fetchSuggestedCities = async () => {
    if (!import.meta.env.VITE_OPEN_WEATHER_API_KEY || !import.meta.env.VITE_RAPID_API_KEY) {
      console.error("API keys are not set");
      return;
    }
    if (!/^[a-zA-Z0-9\s\-']+$/.test(value) || value.length < 3) return;
    const [openWeatherRes, openWeatherAltRes, rapidApiRes] = await Promise.all([
      axios.get("http://api.openweathermap.org/geo/1.0/direct", {
        params: {
          appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
          limit: 5,
          q: value,
        },
      }),
      axios.get(
        `https://openweathermap.org/data/2.5/find?q=${value}&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric`
      ),
      axios.get("https://wft-geo-db.p.rapidapi.com/v1/geo/cities", {
        params: {
          limit: 10,
          namePrefix: value,
        },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
        },
      }),
    ]);

    console.log(openWeatherRes.data);
    console.log(openWeatherAltRes.data);
    console.log(rapidApiRes.data);
  };

  let suggestedCities: IGeoDB["data"] = [];

  $: suggestedCities.forEach((city) => {
    city.name = city.name.replace(`, ${city.country}`, "").replace(` ,${city.country}`, "");
  });
</script>

<div>
  <span class="text-lg font-semibold">Search City:</span>
  <div>
    <input type="text" {value} on:input={handleChange} placeholder="City" class="rounded py-0.5 px-2" />
    {#if suggestedCities.length > 0}
      <ul>
        {#each suggestedCities as city}
          <li>{city.name}, {city.country}</li>
        {/each}
      </ul>
    {/if}
  </div>
</div>
