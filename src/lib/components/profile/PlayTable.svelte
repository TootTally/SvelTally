<script lang="ts">
  import type { ProfileScore } from '$lib/types/score';
  import { languageTag } from '$paraglide/runtime.js';
  import ScoreGrade from '../ScoreGrade.svelte';

  interface Props {
    plays: ProfileScore[];
    tableName: string;
  }

  let { plays, tableName }: Props = $props();
</script>

<!-- TODO: Paginate play table data -->

<div class="rounded border border-gray-800 bg-toot-red p-2 text-white">
  <p class="m-2 p-2 text-2xl font-bold">{tableName}</p>
  {#if plays.length > 0}
    {#each plays as play}
      <div
        class="my-4 flex place-items-center rounded border border-gray-800 bg-toot-pale-red p-5 text-center align-middle text-xl drop-shadow-lg"
      >
        <div class="w-1/12 text-center">
          <ScoreGrade grade={play.grade} />
        </div>
        <div class="w-2/12 text-center">
          <p>{play.score}</p>
          <p>{play.percentage.toFixed(2)}%</p>
        </div>
        <div class="w-6/12 text-center">
          <p class="overflow-hidden overflow-ellipsis px-2">
            <a href="/{languageTag()}/song/{play.song_id}/">{play.song_name}</a>
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
    <p class="p-6 text-center font-title text-2xl">No plays found!</p>
  {/if}
</div>
