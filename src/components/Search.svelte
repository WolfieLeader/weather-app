<script lang="ts">
  import debounce from "../utils/debounce";
  import suggestCities from "../utils/suggestCities";
  import type { ICityTimeZones } from "../interfaces/cityTimezones";
  import { locationStore } from "../stores/locationStore";
  import { onMount } from "svelte";
  import { getCityByTimezone } from "../utils/getCoords";

  let value = "";
  let suggestedCities: ICityTimeZones[] = [];
  let isFocused = false;

  const handleInput = debounce((e) => {
    value = e.target.value;
    suggestedCities = suggestCities(value).slice(0, 7);
  });
  const handleFocus = () => {
    isFocused = true;
  };
  const handleBlur = () => {
    setTimeout(() => {
      isFocused = false;
    }, 200);
  };

  const handleSelect = (city: ICityTimeZones) => {
    const formattedData = {
      city: city.city,
      country: city.country,
      timezone: city.timezone,
      coords: {
        latitude: city.lat,
        longitude: city.lng,
      },
    };
    locationStore.set(formattedData);
  };

  onMount(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const city = getCityByTimezone(timezone);
    const formattedData = {
      city: city.city,
      country: city.country,
      timezone: city.timezone,
      coords: {
        latitude: city.lat,
        longitude: city.lng,
      },
    };
    locationStore.set(formattedData);
  });
</script>

<div class="relative mb-6">
  <div class="text-3xl font-bold text-slate-200 mb-2">Search City:</div>
  <div class="bg-slate-800 px-3 py-2 rounded-lg w-full text-slate-300 border-2 border-slate-300 relative">
    <input
      type="text"
      {value}
      on:input={handleInput}
      on:focus={handleFocus}
      on:blur={handleBlur}
      placeholder="Enter City Name"
      class="w-full outline-none bg-transparent placeholder-slate-300 border-slate-700 text-lg font-semibold"
      class:border-b-2={suggestedCities.length > 0 && isFocused}
    />
    {#if suggestedCities.length > 0 && isFocused}
      <ul class="z-40">
        {#each suggestedCities as city}
          <li class="w-full mt-0.5">
            <button
              class="w-full px-1 py-2 text-lg text-left font-semibold outline-none bg-transparent text-slate-300 hover:bg-slate-700 hover:text-slate-200"
              on:click|once={() => handleSelect(city)}>{city.city}, {city.country}</button
            >
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>
