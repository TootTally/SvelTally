<script lang="ts">
  import { globalLeaderboardsQuery } from '$lib/api/globalLeaderboards';
  import Hero from '$lib/components/Hero.svelte';
  import MainLayout from '$lib/components/MainLayout.svelte';
  import Pagination from '$lib/components/Pagination.svelte';
  import Table from '$lib/components/global-leaderboards/Table.svelte';

  let page = 1;

  $: query = globalLeaderboardsQuery({ page });
  $: pageCount = $query.data ? $query.data.count / 50 : 1;
</script>

<Hero title="Global Leaderboards" />

<MainLayout>
  {#if $query.isFetching}
    <p class="text-2xl font-title p-8 text-center">Loading...</p>
  {:else if $query.isError}
    <p class="text-2xl font-title">Something went wrong! Try again later :]</p>
  {:else if $query.isSuccess}
    <Pagination
      bind:page={page}
      bind:pageCount={pageCount}
      bind:query={query}
    />

    {#if $query.data && $query.data.results.length > 0}
      <Table data={$query.data.results} />
    {/if}

    <Pagination
      bind:page={page}
      bind:pageCount={pageCount}
      bind:query={query}
    />
  {/if}
</MainLayout>
