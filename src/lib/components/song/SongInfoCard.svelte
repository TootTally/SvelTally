<script lang="ts">
  import type { SongInfo } from "$lib/types/song";

  interface Props {
    song: SongInfo;
  }

  let { song }: Props = $props();
</script>
