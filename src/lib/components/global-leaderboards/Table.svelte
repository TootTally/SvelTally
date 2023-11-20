<script lang="ts">
  type TableItem = {
    username: string;
    tt: number;
    rank: number;
    picture?: string;
  }

  export let data: TableItem[];
</script>

<div class="rounded p-2 border border-gray-800 bg-toot-red text-white">
  <p class="py-2 text-3xl font-bold">Rankings</p>
  {#if data.length > 0}
    {#each data as user}
      <div
        class="flex font-bold text-xl text-center rounded p-5 border border-gray-800 bg-toot-pale-red my-4 drop-shadow-lg">
        <div class="w-1/12">
          <p>#{user.rank}</p>
        </div>
        <div class="w-1/12 flex justify-center">
          {#if user.picture}
            <img class="h-6" src="{user.picture}" alt="Profile Picture" />
          {:else}
            <img class="h-8 w-8 p-1 rounded-full border border-gray-900" src="/tt_logo.svg" alt="Profile Picture" />
          {/if}
        </div>
        <div class="text-center w-8/12">
          <p class="overflow-hidden overflow-ellipsis px-2">{user.username}</p>
        </div>
        <div class="w-2/12 text-center">
          <p>{user.tt.toFixed(2)}tt</p>
        </div>
      </div>
    {/each}
  {:else}
    <p class="p-6 text-2xl font-title text-center">Loading...</p>
  {/if}
</div>

