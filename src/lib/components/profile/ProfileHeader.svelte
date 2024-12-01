<script lang="ts">
  import type { Profile } from '$lib/types/profile';
  import { getFlagEmoji } from '$lib/utils/flags';
  import Badge from './Badge.svelte';

  interface Props {
    user: Profile;
  }

  let { user }: Props = $props();
</script>

<div class="rounded border border-gray-800 bg-toot-red p-2 text-white">
  <div class="my-4 flex flex-col px-2">
    <div class="grid w-full grid-cols-6">
      <div class="col-span-1 grid">
        {#if user.picture}
          <img
            class="h-40 w-40 rounded-full border object-fill"
            src={user.picture}
            alt={`${user.username}'s avatar`}
          />
        {:else}
          <img
            class="h-40 w-40 rounded-full border border-gray-900 object-fill p-1"
            src="/tt_logo.svg"
            alt={`${user.username}'s avatar`}
          />
        {/if}
      </div>
      <div class="col-span-5 grid content-start">
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
