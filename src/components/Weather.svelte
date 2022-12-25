<script lang="ts">
  import { weatherStore } from "../stores/weatherStore";

  let city = "";
  let country = "";
  weatherStore.subscribe((value) => {
    city = value.city;
    country = value.country;
  });
</script>

<h1>
  {city}, {country}
</h1>
