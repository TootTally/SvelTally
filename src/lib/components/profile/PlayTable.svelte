<script lang="ts">
  import type { ProfileScore } from '$lib/types/score';

  interface Props {
    plays: ProfileScore[];
    tableName: string;
  }

  let { plays, tableName }: Props = $props();
</script>

<!-- TODO: Paginate play table data -->

<div class="bg-toot-red rounded border border-gray-800 p-2 text-white">
  <p class="m-2 p-2 text-2xl font-bold">{tableName}</p>
  {#if plays.length > 0}
    {#each plays as play}
      <div
        class="bg-toot-pale-red my-4 flex place-items-center flex-wrap rounded border border-gray-800 p-5 text-center align-middle text-xl drop-shadow-lg"
      >
        <div class="w-1/2 lg:w-1/12 text-center">
          <p>{play.grade}</p>
        </div>
        <div class="w-1/2 lg:w-2/12 text-center text-sm">
          <p>{play.score}</p>
          <p>{play.percentage.toFixed(2)}%</p>
        </div>
        <div class="w-full lg:w-1/2 text-center">
          <p class="overflow-hidden p-2 py-4 text-ellipsis">
            <!-- TODO: Have this redirect to the SvelTally version of the song page -->
            <a href="https://toottally.com/song/{play.song_id}/">{play.song_name}</a>
          </p>
        </div>
        <div class="w-1/2 lg:w-2/12 text-center text-sm">
          <p>{play.replay_speed.toFixed(2)}x</p>
          <p>{play.modifiers ?? ''}</p>
        </div>
        <div class="w-1/2 lg:w-1/12 text-center text-sm">
          <p>{play.tt.toFixed(2)}tt</p>
        </div>
      </div>
    {/each}
  {:else}
    <p class="font-title p-6 text-center text-2xl">No plays found!</p>
  {/if}
</div>
