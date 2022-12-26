<script lang="ts">
  import iconList from "../../utils/iconList";
  import { locationStore } from "../../stores/locationStore";
  import { weatherStore } from "../../stores/weatherStore";

  let icon = null;
  weatherStore.subscribe(async (value) => {
    if (value.current.description) {
      const iconObj = iconList.find((icon) => icon.iconCode === value.current.description.iconCode);
      icon = await import(`../../svgs/${iconObj.represents}.svelte`);
    }
  });
</script>

<div class="flex flex-col border-2 border-slate-200 rounded-md p-2 col-span-2 w-full">
  <div class="text-xl font-semibold">
    <span>{$locationStore.city}, </span>
    <span>{$locationStore.country}</span>
  </div>
  <div class="flex flex-row items-center justify-between w-full px-2">
    <div class="text-2xl font-semibold text-slate-200">{$weatherStore.current.temp}°C</div>
    {#if icon}
      <svelte:component this={icon.default} />
    {/if}
  </div>
  <div class="text-base">Feels Like {$weatherStore.current.feels_like}°C</div>
</div>
