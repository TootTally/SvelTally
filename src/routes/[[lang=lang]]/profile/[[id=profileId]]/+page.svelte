<script lang="ts">
  import MainLayout from '$lib/components/MainLayout.svelte';
  import PlayTable from '$lib/components/profile/PlayTable.svelte';
  import ProfileHeader from '$lib/components/profile/ProfileHeader.svelte';
  import * as m from '$paraglide/messages';

  import type { PageData } from './$types';

  export let data: PageData;
</script>

<MainLayout>
  {#await data.promises.query}
    <p class="p-8 text-center font-title text-2xl">{m.loading()}</p>
  {:then resolvedData}
    <ProfileHeader user={resolvedData[0]}/>

    <hr/>
    {#if resolvedData[2].count > 0}
      <PlayTable plays={resolvedData[2].results}/>
    {:else}
      <p>No plays found.</p>
    {/if}
    
    <hr/>
    {#if resolvedData[1].count > 0}
      <PlayTable plays={resolvedData[1].results}/>
    {:else}
      <p>No plays found.</p>
    {/if}
  {/await}
</MainLayout>
