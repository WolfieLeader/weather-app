<script lang="ts">
  import iconList from "../utils/iconList";

  let icons = [];
  const loadIcons = async () => {
    for (const iconObj of iconList) {
      const icon = await import(`../svgs/${iconObj.represents}.svelte`);
      icons = [...icons, icon.default];
    }
  };
</script>

{#await loadIcons()}
  <p>Loading icons...</p>
{:then}
  {#each icons as icon}
    <div><svelte:component this={icon} /></div>
  {/each}
{/await}
