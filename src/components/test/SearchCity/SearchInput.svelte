<script lang="ts">
  import debounce from "../../../utils/debounce";
  import type { IGeoDBData } from "../../../interfaces/rapidapi";

  export let value = "";
  export let suggestedCities: IGeoDBData[] = [];
  const handleChange = debounce((e) => (value = e.target.value));
  const isListVisible = Array.isArray(suggestedCities) && suggestedCities.length > 0;
</script>

<div>
  <input type="text" {value} on:input={handleChange} />
  {#if isListVisible}
    <ul>
      {#each suggestedCities as city}
        <li>{city.name}</li>
      {/each}
    </ul>
  {/if}
</div>
