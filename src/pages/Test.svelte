<script lang="ts">
  import SearchCity from "../components/test/SearchCity/SearchCity.svelte";

  // const payload = {
  //   lat: 51.5085,
  //   lon: -0.1257,
  //   appid: import.meta.env.VITE_API_KEY || import.meta.env.VITE_API_KEY2,
  // };

  // const url = `https://openweathermap.org/data/2.5/onecall?lat=${payload.lat}&lon=${payload.lon}&units=metric&appid=${payload.appid}`;

  // let weatherData;

  // onMount(async () => {
  //   const response = await fetch(url);
  //   weatherData = await response.json();
  // });

  // $: console.log(weatherData);
</script>

<main>
  <SearchCity />
</main>
