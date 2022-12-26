<script lang="ts">
  import Volcano from "./images/Volcano.png";
  import Search from "./components/Search.svelte";
  import Weather from "./components/Weather.svelte";
</script>

<div class="z-10 w-full h-full flex flex-1 bg-slate-900 bg-opacity-70 px-5 py-10 ">
  <main class="w-full rounded">
    <Search />
    <!-- <Weather /> -->
  </main>
  <!-- <div class="w-full h-[10rem] bg-sky-600 bg-opacity-50 absolute -left-72 top-32 rotate-45 blur-[7rem]" /> -->
</div>
<div class="w-full h-full absolute top-0 left-0 z-0" style="background-image:url;">
  <img src={Volcano} alt="Volcano" class="w-full h-full object-cover object-center lg:object-left" />
</div>
