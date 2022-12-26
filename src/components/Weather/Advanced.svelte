<script lang="ts">
  import { weatherStore } from "../../stores/weatherStore";
  import Droplet from "../../svgs/Droplet.svelte";
  import UmbrellaBeach from "../../svgs/UmbrellaBeach.svelte";
  import Wind from "../../svgs/Wind.svelte";

  export let className: string;
</script>

<div
  class="flex-row md:flex-col border-2 border-slate-200 rounded-md p-2 col-span-2 md:col-span-1 md:row-span-2 w-full items-center justify-around {className}"
>
  <div class="flex flex-col justify-center items-center font-semibold text-red-400">
    <UmbrellaBeach />
    <div>UV Index:</div>
    <div>{$weatherStore.current.uvi}</div>
  </div>
  <div class="flex flex-col justify-center items-center font-semibold text-orange-400">
    <Wind />
    <div>Wind Speed:</div>
    <div>{$weatherStore.current.wind_speed} m/s</div>
  </div>
  <div class="flex flex-col justify-center items-center font-semibold text-blue-400">
    <Droplet />
    <div>Humidity:</div>
    <div>{$weatherStore.current.humidity}%</div>
  </div>
</div>
