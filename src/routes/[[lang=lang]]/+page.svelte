<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import MainLayout from '$lib/components/MainLayout.svelte';
  import Pagination from '$lib/components/Pagination.svelte';
  import Table from '$lib/components/global-leaderboards/Table.svelte';
  import * as m from '$paraglide/messages';

  import type { PageData } from './$types';

  export let data: PageData;
</script>

<Hero title={m.global_leaderboards()} />

<MainLayout>
  {#await data.promise.query}
    <p class="p-8 text-center font-title text-2xl">{m.loading()}</p>
  {:then resolvedData}
    <Pagination
      bind:currentPage={data.page}
      next={resolvedData.next}
      previous={resolvedData.previous}
      pageCount={resolvedData.count ? Math.ceil(resolvedData.count / 50) : 1}
    />

    {#if resolvedData.results?.length > 0}
      <Table
        data={resolvedData.results}
        lang={data.lang ?? "en"}
      />
    {/if}

    <Pagination
      bind:currentPage={data.page}
      next={resolvedData.next}
      previous={resolvedData.previous}
      pageCount={resolvedData.count ? Math.ceil(resolvedData.count / 50) : 1}
    />
  {/await}
</MainLayout>
