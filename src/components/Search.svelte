<script lang="ts">
  import debounce from "../utils/debounce";
  import suggestCities from "../utils/suggestCities";
  import type { ICityTimeZones } from "../interfaces/cityTimezones";
  import { weatherStore } from "../stores/weatherStore";
  // const url = `https://openweathermap.org/data/2.5/onecall?lat=${payload.lat}&lon=${payload.lon}&units=metric&appid=${payload.appid}`;

  let value = "";
  let suggestedCities: ICityTimeZones[] = [];

  const handleChange = debounce((e) => {
    value = e.target.value;
    suggestedCities = suggestCities(value).slice(0, 7);
  });

  const handleSelect = (city: ICityTimeZones) => {
    weatherStore.set({
      city: city.city,
      country: city.country,
      timezone: city.timezone,
      latitude: city.lat,
      longitude: city.lng,
      currentTemp: 0,
    });
  };
</script>

<div>
  <span class="text-lg font-semibold">Search City:</span>
  <div class="bg-white p-1 rounded w-fit">
    <input type="text" {value} on:input={handleChange} placeholder="Enter City Name" class="outline-none" />
    {#if suggestedCities.length > 0}
      <ul>
        {#each suggestedCities as city}
          <li>
            <button on:click={() => handleSelect(city)}>{city.city}, {city.country}</button>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>
