<script lang="ts">
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import NavBar from '$lib/components/NavBar.svelte';
  import ParaglideMetaTags from '$lib/i18n/ParaglideMetaTags.svelte';
  import {
    getLocale,
    setLocale,
    type Locale
  } from '$lib/paraglide/runtime';
  import { onMount } from 'svelte';
  import '../app.css';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  let preferredLanguage = $state(localStorage.getItem('lang'));

  $effect(() => {
    localStorage.setItem('lang', lang);
    preferredLanguage = lang;

    if (page.params.lang !== lang) {
      goto(`/${lang}${page.url.pathname.slice(3)}${page.url.search}`);
    }
  });

  //Determine the current language from the URL. Fall back to the source language if none is specified.
  let lang = $derived(
    preferredLanguage
      ? preferredLanguage
      : ((page.params.lang) ?? getLocale())
  );

  //Set the language tag in the Paraglide runtime.
  //This determines which language the strings are translated to.
  //You should only do this in the template, to avoid concurrent requests interfering with each other.
  onMount(() => {
    setLocale(lang as Locale);
    if (browser) {
      document.documentElement.lang = lang;
    }
  });
</script>

<ParaglideMetaTags />

<NavBar />
{#key lang}
  {@render children?.()}
{/key}
