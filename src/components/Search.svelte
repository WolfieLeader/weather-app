<script lang="ts">
  import debounce from "../utils/debounce";
  import suggestCities from "../utils/suggestCities";
  import type { ICityTimeZones } from "../interfaces/cityTimezones";
  import { locationStore } from "../stores/locationStore";

  let value = "";
  let suggestedCities: ICityTimeZones[] = [];

  const handleChange = debounce((e) => {
    value = e.target.value;
    suggestedCities = suggestCities(value).slice(0, 7);
  });

  const handleSelect = (city: ICityTimeZones) => {
    locationStore.set({
      city: city.city,
      country: city.country,
      timezone: city.timezone,
      coords: {
        latitude: city.lat,
        longitude: city.lng,
      },
    });
  };
</script>

<div>
  <span class="text-3xl font-semibold text-slate-200">Search City:</span>
  <div class="bg-slate-800 p-1 rounded w-fit text-slate-400 absolute">
    <input
      type="text"
      {value}
      on:input={handleChange}
      placeholder="Enter City Name"
      class="w-full outline-none bg-transparent placeholder-slate-400 border-slate-700"
      class:border-b-2={suggestedCities.length > 0}
    />
    {#if suggestedCities.length > 0}
      <ul>
        {#each suggestedCities as city}
          <li>
            <button
              class="text-left w-full px-0.5 py-1 mt-0.5 outline-none bg-transparent text-slate-400 hover:bg-slate-700 hover:text-slate-200"
              on:click={() => handleSelect(city)}>{city.city}, {city.country}</button
            >
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>
