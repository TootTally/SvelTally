<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import MainLayout from '$lib/components/MainLayout.svelte';
  import SongInfoHeader from '$lib/components/song/SongInfoHeader.svelte';
  import * as m from '$paraglide/messages';

  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<MainLayout>
  {#await data.promises.query}
    <p class="p-8 text-center font-title text-2xl">{m.loading()}</p>
  {:then resolvedData}
    {#if resolvedData[0].results != null && resolvedData[0].results.length == 1}
      <SongInfoHeader song={resolvedData[0].results[0]} />
    {:else}
      <p class="p-8 text-center font-title text-2xl">{m.generic_error()}</p>
    {/if}
  {/await}
</MainLayout>