<script lang="ts">
  import { weatherStore } from "../../stores/weatherStore";
  import Twilight from "../../svgs/Twilight.svelte";

  const blocks = [
    {
      name: "Sunrise",
      color: "yellow",
      time: $weatherStore.current.sunrise,
    },
    {
      name: "Sunset",
      color: "indigo",
      time: $weatherStore.current.sunset,
    },
  ];
</script>

<div
  class="w-full py-4 flex flex-col justify-center items-center text-yellow-400 font-semibold border-2 border-slate-200 rounded-md"
>
  <div class="text-slate-300 text-lg">Sunrise:</div>
  <Twilight />
  <div class="text-yellow-200">
    {$weatherStore.current.sunrise}
  </div>
</div>
<div
  class="w-full py-4 flex flex-col justify-center items-center text-indigo-400 font-semibold border-2 border-slate-200 rounded-md"
>
  <div class="text-slate-300 text-lg">Sunset:</div>
  <Twilight />
  <div class="text-indigo-200">
    {$weatherStore.current.sunset}
  </div>
</div>
