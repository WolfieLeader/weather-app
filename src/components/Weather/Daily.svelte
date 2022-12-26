<script lang="ts">
  import iconList from "../../utils/iconList";
  import { weatherStore } from "../../stores/weatherStore";

  let days = [];
  weatherStore.subscribe(async (value) => {
    if (value.daily) {
      for (const day of value.daily) {
        if (day.description) {
          const iconObj = iconList.find((icon) => icon.iconCode === day.description.iconCode);
          const icon = await import(`../../svgs/${iconObj.represents}.svelte`);
          days = [
            ...days,
            {
              day: day.day,
              icon: icon.default,
              temp: day.temp,
            },
          ];
        }
      }
    }
  });
</script>

<div class="flex flex-col border-2 border-slate-200 rounded-md px-2 col-span-2 md:col-span-3 w-full">
  <div
    class="grid grid-cols-3 xs:grid-cols-4 justify-items-center items-center py-1.5 text-xl font-bold text-slate-200"
  >
    <span>Day</span>
    <span class="hidden xs:block">Low</span>
    <span class="hidden xs:block">High</span>
    <span class="xs:hidden">Temp</span>
    <span>Forecast</span>
  </div>
  {#each days as day}
    <div
      class="grid grid-cols-3 xs:grid-cols-4 justify-items-center items-center py-1.5 text-xl border-slate-800 border-t-2"
    >
      <span class="text-base xs:text-xl">{day.day}</span>
      <span class="hidden xs:block">{day.temp.min}°C </span>
      <span class="hidden xs:block">{day.temp.max}°C</span>
      <span class="xs:hidden text-xs whitespace-nowrap">{day.temp.min}-{day.temp.max}°C</span>
      <span class="dailyWeather">
        <svelte:component this={day.icon} />
      </span>
    </div>
  {/each}
</div>
