<script lang="ts">
  import type { ProfileBaseResponse } from '$lib/types/profile';
  import { getFlagEmoji } from '$lib/utils/flags';
  import Badge from './Badge.svelte';

  interface Props {
    user: ProfileBaseResponse;
  }

  let { user }: Props = $props();
</script>

<div class="bg-toot-red rounded border border-gray-800 p-2 text-white">
  <div class="my-4 flex flex-col px-2">
    <div class="grid w-full grid-cols-6 gap-4">
      <div class="col-span-1 grid">
        {#if user.picture}
          <img
            class="aspect-square max-h-40 w-full rounded-full border object-cover"
            src={user.picture}
            alt={`${user.username}'s avatar`}
          />
        {:else}
          <img
            class="aspect-square rounded-full border border-gray-900"
            src="/tt_logo.svg"
            alt={`${user.username}'s avatar`}
          />
        {/if}
      </div>
      <div class="col-span-5 grid px-4">
        <p class="py-2 text-3xl font-bold">
          {getFlagEmoji(user.country)}
          {user.username} (#{user.rank})
        </p>
        <p class="text-xl">{user.tt.toFixed(2)}tt</p>
      </div>
    </div>
    <div class="flex w-full flex-row pt-4">
      {#each user.badges as badge}
        <Badge {badge} />
      {/each}
    </div>
  </div>
</div>
