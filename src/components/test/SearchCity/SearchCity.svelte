<script lang="ts">
  import { onMount } from "svelte";
  import type { IGeoDB, IGeoDBData } from "../../../interfaces/rapidapi";
  import SearchInput from "./SearchInput.svelte";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  const fetchCities = async (prefix: string) => {
    if (!/^[a-zA-Z0-9\s\-']+$/.test(prefix) || prefix.length < 3) return;
    const response = await fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&sort=population&namePrefix=${prefix}`,
      options
    );
    const data: IGeoDB = await response.json();
    if (data.data.length === 0) return;
    suggestedCities = data.data;
  };

  let searchValue = "";
  let suggestedCities: IGeoDBData[] = [];

  $: fetchCities(searchValue);
</script>

<main>
  <h1>Search City:{searchValue}</h1>
  <SearchInput value={searchValue} {suggestedCities} />
</main>
