<script lang="ts">
  import { getFlagEmoji } from '$lib/utils/flags';
  import { getLocale } from '$lib/paraglide/runtime.js';

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
    {#each data as user}
      <div
        class="bg-toot-pale-red my-4 flex rounded border border-gray-800 p-5 text-center text-xl font-bold drop-shadow-lg"
      >
        <div class="flex w-1/12 place-content-center justify-center">
          <p class="place-self-center">#{user.rank}</p>
        </div>
        <div class="flex w-1/12 place-content-center justify-center">
          <p class="place-self-center text-2xl">{getFlagEmoji(user.country)}</p>
        </div>
        <div class="flex w-1/12 place-content-center justify-center">
          {#if user.picture}
            <img
              class="h-10 w-10 rounded-full object-contain p-1"
              src={user.picture}
              alt={`${user.username}'s avatar`}
            />
          {:else}
            <img
              class="h-10 w-10 rounded-full object-contain p-1"
              src="/tt_logo.svg"
              alt={`${user.username}'s avatar`}
            />
          {/if}
        </div>
        <div class="flex w-7/12 place-content-center justify-center">
          <a class="place-self-center" href="/{getLocale()}/profile/{user.id}">
            <p class="overflow-hidden px-2 text-ellipsis">{user.username}</p>
          </a>
        </div>
        <div class="flex w-2/12 place-content-center justify-center">
          <p class="place-self-center">{user.tt.toFixed(2)}tt</p>
        </div>
      </div>
    {/each}
  {:else}
    <p class="font-title p-6 text-center text-2xl">Loading...</p>
  {/if}
</div>
