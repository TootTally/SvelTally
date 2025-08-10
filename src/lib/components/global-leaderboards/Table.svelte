<script lang="ts">
  import { getLocale } from '$lib/paraglide/runtime.js';
  import { getFlagEmoji } from '$lib/utils/flags';

  type TableItem = {
    username: string;
    tt: number;
    rank: number;
    picture: string | null;
    country: string;
    id: number;
  };

  export let data: TableItem[];
</script>

<div class="bg-toot-red rounded border border-gray-800 p-2 text-white">
  <p class="py-2 text-3xl font-bold">Rankings</p>
  {#if data.length > 0}
    {#each data as user (user.id)}
      <div
        class="bg-toot-pale-red my-4 flex flex-wrap rounded border border-gray-800 p-5 text-center text-xl font-bold drop-shadow-lg"
      >
        <div class="flex w-1/2 items-center justify-center md:w-1/12">
          <p>#{user.rank}</p>
        </div>
        <div class="flex w-1/2 items-center justify-center md:w-1/12">
          <p class="text-2xl">{getFlagEmoji(user.country)}</p>
          {#if user.picture}
            <img
              class="max-h-10 w-10 rounded-full object-cover p-1"
              src={user.picture}
              alt={`${user.username}'s avatar`}
            />
          {:else}
            <img
              class="max-h-10 w-10 rounded-full object-cover p-1"
              src="/tt_logo.svg"
              alt={`${user.username}'s avatar`}
            />
          {/if}
        </div>
        <div class="flex w-full items-center justify-center md:w-7/12">
          <a href="/{getLocale()}/profile/{user.id}">
            <p class="overflow-hidden px-2 text-ellipsis">{user.username}</p>
          </a>
        </div>
        <div class="flex w-full items-center justify-center md:w-3/12">
          <p>{user.tt.toFixed(2)}tt</p>
        </div>
      </div>
    {/each}
  {:else}
    <p class="font-title p-6 text-center text-2xl">Loading...</p>
  {/if}
</div>
