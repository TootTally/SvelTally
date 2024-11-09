<script lang="ts">
  import type { BadgeInfo } from '$lib/types/profile';

  export let badge: BadgeInfo;
</script>

<div class="px-1">
  <img src="{badge.image}" alt="{badge.alt_text}"/>
</div>
