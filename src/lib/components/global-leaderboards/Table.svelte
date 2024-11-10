<script lang="ts">
  import { getFlagEmoji } from "$lib/utils/flags";

  type TableItem = {
    username: string;
    tt: number;
    rank: number;
    picture: string | null;
    country: string;
    id: number;
  };

  export let data: TableItem[];
  export let lang: string = "en";
</script>

<div class="rounded border border-gray-800 bg-toot-red p-2 text-white">
  <p class="py-2 text-3xl font-bold">Rankings</p>
  {#if data.length > 0}
    {#each data as user}
      <div
        class="my-4 flex rounded border border-gray-800 bg-toot-pale-red p-5 text-center text-xl font-bold drop-shadow-lg"
      >
        <div class="flex w-1/12 justify-center place-content-center">
          <p class="place-self-center">#{user.rank}</p>
        </div>
        <div class="flex w-1/12 justify-center place-content-center">
          <p class="text-2xl place-self-center">{getFlagEmoji(user.country)}</p>
        </div>
        <div class="flex w-1/12 justify-center place-content-center">
          {#if user.picture}
            <img class="h-10 w-10 object-contain rounded-full p-1" src={user.picture} alt={`${user.username}'s avatar`} />
          {:else}
            <img
              class="h-10 w-10 object-contain rounded-full p-1"
              src="/tt_logo.svg"
              alt={`${user.username}'s avatar`}
            />
          {/if}
        </div>
        <div class="flex w-7/12 justify-center place-content-center">
          <a class="place-self-center" href="/{lang}/profile/{user.id}">
            <p class="overflow-hidden overflow-ellipsis px-2">{user.username}</p>
          </a>
        </div>
        <div class="flex w-2/12 justify-center place-content-center">
          <p class="place-self-center">{user.tt.toFixed(2)}tt</p>
        </div>
      </div>
    {/each}
  {:else}
    <p class="p-6 text-center font-title text-2xl">Loading...</p>
  {/if}
</div>
