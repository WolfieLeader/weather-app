<script lang="ts">
  import { locationStore } from "../../stores/locationStore";
  import { weatherStore } from "../../stores/weatherStore";
  import getWeatherByCoords from "../../utils/getWeatherByCoords";
  import Advanced from "./Advanced.svelte";
  import Main from "./Main.svelte";
  import SunPhases from "./SunPhases.svelte";

  locationStore.subscribe((value) => {
    if (value.coords) {
      getWeatherByCoords(value.coords, import.meta.env.VITE_OPEN_WEATHER_API_KEY);
    }
  });
</script>

<div class="relative z-30 flex flex-col">
  <div class="text-xl font-bold text-slate-200 mb-1">
    {#if $locationStore.coords}
      <span>Weather in:</span>
    {:else}
      <span>Enter a city name above</span>
    {/if}
  </div>
  {#if $weatherStore.current.description && $locationStore.coords}
    <div class="grid grid-cols-2 gap-4 md:grid-cols-3 justify-items-center">
      <Main />
      <Advanced className="hidden md:flex" />
      <SunPhases />
      <Advanced className="flex md:hidden" />
    </div>
  {/if}
</div>
