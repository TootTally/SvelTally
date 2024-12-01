<script lang="ts">
  import type { ChartStatus } from "$lib/types/song";
  interface Props {
    status: ChartStatus;
  }

  let { status }: Props = $props();
  let statusClass: string = "status-" + status.toLowerCase().replaceAll("_", "-");
  let statusText: string = status.replaceAll("_"," ");
</script>

<div class="rounded-full object-contain {statusClass}">
  <p>{statusText}</p>
</div>

<style>
  .status-rated {
    background-color: green;
  }

  .status-unrated {
    background-color: gainsboro;
  }
</style>
