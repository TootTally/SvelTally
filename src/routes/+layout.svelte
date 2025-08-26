<script lang="ts">
  import { page } from '$app/state';
  import NavBar from '$lib/components/NavBar.svelte';
  import ParaglideMetaTags from '$lib/i18n/ParaglideMetaTags.svelte';
  import { baseLocale } from '$paraglide/runtime';
  import '../app.css';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  let preferredLanguage = $state(localStorage.getItem('lang'));

  //Determine the current language from the URL. Fall back to the source language if none is specified.
  let lang = $derived(preferredLanguage ? preferredLanguage : (page.params.lang ?? baseLocale));

  $effect(() => {
    localStorage.setItem('lang', lang);
    preferredLanguage = lang;
  });
</script>

<ParaglideMetaTags />

<NavBar />
{#key lang}
  {@render children?.()}
{/key}
