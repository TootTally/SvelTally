<script lang="ts">
  import { page } from '$app/stores';

  interface Props {
    href: string;
    children?: import('svelte').Snippet;
  }

  let { href, children }: Props = $props();

  let classes = $derived($page.url.pathname.includes(href) ? 'underline' : '');

  const children_render = $derived(children);
</script>

<a {href} class="font-bold {classes}">
  {@render children_render?.()}
</a>
