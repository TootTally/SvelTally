<script lang="ts">
  import type { ProfileBaseResponse } from "$lib/types/profile";
  import { getFlagEmoji } from "$lib/utils/flags";
  import Badge from "./Badge.svelte";

  export let user: ProfileBaseResponse;
</script>

<div class="rounded border border-gray-800 bg-toot-red p-2 text-white">
  <div class="my-4 px-2 flex flex-col">
    <div class="w-full grid grid-cols-6">
      <div class="grid col-span-1">
        {#if user.picture}
          <img class="object-fill h-40 w-40 rounded-full border" src={user.picture} alt={`${user.username}'s avatar`} />
        {:else}
          <img
            class="object-fill h-40 w-40 rounded-full border border-gray-900 p-1"
            src="/tt_logo.svg"
            alt={`${user.username}'s avatar`}
          />
        {/if}
      </div>
      <div class="grid col-span-5 content-start">
        <p class="py-2 text-3xl font-bold">{getFlagEmoji(user.country)} {user.username} (#{user.rank})</p>
        <p class="text-xl">{user.tt.toFixed(2)}tt</p>
      </div>
    </div>
    <div class="pt-4 w-full flex flex-row">
      {#each user.badges as badge}
        <Badge badge={badge}/>
      {/each}
    </div>
  </div>
</div>
