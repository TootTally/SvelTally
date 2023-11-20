<script lang="ts">
  import { page } from '$app/stores';

  export let href: string;

  $: classes = $page.url.pathname.includes(href) ? 'underline' : '';
</script>

<a {href} class="font-bold {classes}">
  <slot />
</a>
