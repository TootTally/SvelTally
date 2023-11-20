<script lang="ts">
  type TableItem = {
    username: string;
    tt: number;
    rank: number;
    picture: string | null;
  };

  export let data: TableItem[];
</script>

<div class="rounded border border-gray-800 bg-toot-red p-2 text-white">
  <p class="py-2 text-3xl font-bold">Rankings</p>
  {#if data.length > 0}
    {#each data as user}
      <div
        class="my-4 flex rounded border border-gray-800 bg-toot-pale-red p-5 text-center text-xl font-bold drop-shadow-lg"
      >
        <div class="w-1/12">
          <p>#{user.rank}</p>
        </div>
        <div class="flex w-1/12 justify-center">
          {#if user.picture}
            <img class="h-6" src={user.picture} alt={`${user.username}'s avatar`} />
          {:else}
            <img
              class="h-8 w-8 rounded-full border border-gray-900 p-1"
              src="/tt_logo.svg"
              alt={`${user.username}'s avatar`}
            />
          {/if}
        </div>
        <div class="w-8/12 text-center">
          <p class="overflow-hidden overflow-ellipsis px-2">{user.username}</p>
        </div>
        <div class="w-2/12 text-center">
          <p>{user.tt.toFixed(2)}tt</p>
        </div>
      </div>
    {/each}
  {:else}
    <p class="p-6 text-center font-title text-2xl">Loading...</p>
  {/if}
</div>
