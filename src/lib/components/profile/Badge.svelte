<script lang="ts">
  import type { BadgeInfo } from '$lib/types/profile';

  interface Props {
    badge: BadgeInfo;
  }

  let { badge }: Props = $props();
</script>

<div class="px-1">
  <img src={badge.image} alt={badge.alt_text} />
</div>
