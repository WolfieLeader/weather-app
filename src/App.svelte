<script lang="ts">
  import Volcano from "./images/Volcano.png";
  import Search from "./components/Search.svelte";
  import Weather from "./components/Weather/Weather.svelte";
</script>

<div class="z-10 w-full h-full flex flex-1 flex-col bg-slate-900 bg-opacity-90 px-5 py-10 ">
  <main class="w-full p-5 flex flex-col">
    <Search />
    <Weather />
  </main>
</div>
<div class="w-full h-full absolute inset-0 z-0">
  <img src={Volcano} alt="Volcano" class="w-full h-full object-cover object-center lg:object-left" />
</div>
