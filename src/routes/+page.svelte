<script lang="ts">
  import { globalLeaderboardsQuery } from '$lib/api/globalLeaderboards';

  let pageParam = 1;

  $: query = globalLeaderboardsQuery({ pageParam });
  $: pageCount = $query.data ? $query.data.count / 50 : 1;
</script>

<h1>Leaderboards</h1>

<button on:click={() => pageParam -= 1} disabled="{!$query.data?.previous}">&lt;</button>
{#each Array.from({ length: pageCount }) as _, i}
  <button on:click={() => pageParam = i + 1}>{i + 1}</button>
{/each}
<button on:click={() => pageParam += 1} disabled="{!$query.data?.next}">&gt;</button>

<p>Page count: {pageCount}</p>
{#if $query.isLoading}
  <p>Loading...</p>
{:else if $query.isError}
  <p>Error: {$query.error.message}</p>
{:else if $query.isSuccess}
  {JSON.stringify($query.data.results)}
{/if}

