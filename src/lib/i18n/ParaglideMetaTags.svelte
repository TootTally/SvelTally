<!--
    @component
    Adds alternate links to the head of the page for each available language.
    This is vital for SEO.
-->
<script lang="ts">
  import { page } from '$app/stores';
  import { availableLanguageTags } from '$paraglide/runtime';
  import { translatePath } from './index.ts';
</script>

<svelte:head>
  {#each availableLanguageTags as lang}
    <link rel="alternate" hreflang={lang} href={translatePath($page.url.pathname, lang)} />
  {/each}
</svelte:head>
