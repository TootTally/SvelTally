<script lang="ts">
  import type { SongInfo } from "$lib/types/song";
  import { buildTimeString } from "$lib/utils/builders";

  interface Props {
    song: SongInfo;
  }

  let { song }: Props = $props();
  let songLength = buildTimeString(song.song_length);
</script>

<div class="container md:mx-auto rounded-lg bg-gray-500">
  <div class="rounded border border-gray-800 p-2 text-white">
    <div class="grid w-full grid-cols-2">
      <div class="inline-block px-2 pb-2 pt-4">
        <h1 class="text-center font-title text-2xl leading-none">{song.name}</h1>
        <br>
        <h2 class="text-center font-title leading-none">{song.author}</h2>
        <br>
        {#if song.charter === null || song.charter === ''}
        <p class="text-center font-title leading-none">Unknown charter</p>
        {:else}
        <p class="text-center font-title leading-none">Charted by {song.charter}</p>
        {/if}
        {#if song.description !== undefined && song.description !== null}
          <p class="text-center">{song.description}</p>
        {:else}
          <p class="text-center"><i>No song description provided.</i></p>
        {/if}
      </div>
      <div class="inline-block px-2 pb-2 pt-4">
        <p class="text-center">{song.difficulty}☆</p>
        <p class="text-center">{songLength} | {song.play_count} plays</p>
        <p class="text-center"><a href="{song.download}">Download</a> | <a href="{song.mirror}">Mirror</a></p>
      </div>
    </div>
  </div>
</div>
