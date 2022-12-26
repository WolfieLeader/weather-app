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
