<script lang="ts">
  import { locationStore } from "../stores/locationStore";
  import { weatherStore } from "../stores/weatherStore";
  import getWeatherByCoords from "../utils/getWeatherByCoords";

  locationStore.subscribe((value) => {
    if (value.coords) {
      getWeatherByCoords(value.coords, import.meta.env.VITE_OPEN_WEATHER_API_KEY);
    }
  });

  weatherStore.subscribe((value) => {
    console.log(value);
  });
</script>

<div>
  <div class="text-2xl font-bold text-slate-200">The Weather In:</div>
  <div class="text-xl font-semibold">
    {#if $locationStore.city}
      <span>{$locationStore.city}, </span>
      <span>{$locationStore.country}</span>
    {:else}
      <span>Enter a city name above</span>
    {/if}
  </div>
</div>
