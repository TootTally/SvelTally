<script lang="ts">
  import type { ProfileBaseResponse } from "$lib/types/profile";

  export let user: ProfileBaseResponse;
</script>

<div class="rounded border border-gray-800 bg-toot-red p-2 text-white">
  {#if user.picture}
    <img class="h-6" src={user.picture} alt={`${user.username}'s avatar`} />
  {:else}
    <img
      class="h-8 w-8 rounded-full border border-gray-900 p-1"
      src="/tt_logo.svg"
      alt={`${user.username}'s avatar`}
    />
  {/if}
  <p class="py-2 text-3xl font-bold">{user.username} (#{user.rank} {user.tt.toFixed(2)}tt)</p>
</div>
