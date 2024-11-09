<script lang="ts">
  import type { ProfileScore } from '$lib/types/score';

  export let plays: ProfileScore[];
</script>

<div class="rounded border border-gray-800 bg-toot-red p-2 text-white">
  {#if plays.length > 0}
    {#each plays as play}
      <div
        class="my-4 flex rounded border border-gray-800 bg-toot-pale-red p-5 text-center text-xl drop-shadow-lg align-middle place-items-center"
      >
        <div class="w-1/12 text-center">
          <p>{play.grade}</p>
        </div>
        <div class="w-2/12 text-center">
          <p>{play.score}</p>
          <p>{play.percentage.toFixed(2)}%</p>
        </div>
        <div class="w-6/12 text-center">
          <p class="overflow-hidden overflow-ellipsis px-2">
            <!-- TODO: Have this redirect to the SvelTally version of the song page -->
            <a href="https://toottally.com/song/{play.song_id}/">{play.song_name}</a>
          </p>
        </div>
        <div class="w-2/12 text-center">
          <p>{play.replay_speed.toFixed(2)}x</p>
          <p>{play.modifiers ?? ''}</p>
        </div>
        <div class="w-1/12 text-center">
          <p>{play.tt.toFixed(2)}tt</p>
        </div>
      </div>
    {/each}
  {:else}
    <p class="p-6 text-center font-title text-2xl">Loading...</p>
  {/if}
</div>

