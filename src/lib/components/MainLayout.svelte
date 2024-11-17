<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
  const children_render = $derived(children);
</script>

<main class="m-auto w-full p-2 md:w-[80vw]">
  {@render children_render?.()}
</main>
