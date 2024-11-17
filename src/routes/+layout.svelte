<script lang="ts">
  import '../app.css';
  import NavBar from '$lib/components/NavBar.svelte';
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import {
    setLanguageTag,
    sourceLanguageTag,
    onSetLanguageTag,
    type AvailableLanguageTag
  } from '$paraglide/runtime';
  import ParaglideMetaTags from '$lib/i18n/ParaglideMetaTags.svelte';
  import { goto } from '$app/navigation';
  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  const preferredLanguage = writable(localStorage.getItem('lang') as AvailableLanguageTag | null);

  onSetLanguageTag((newLanguageTag) => {
    localStorage.setItem('lang', newLanguageTag);
    $preferredLanguage = newLanguageTag;

    if ($page.params.lang !== newLanguageTag) {
      goto(`/${newLanguageTag}${$page.url.pathname.slice(3)}${$page.url.search}`);
    }
  });

  //Determine the current language from the URL. Fall back to the source language if none is specified.
  let lang = $derived(
    $preferredLanguage
      ? $preferredLanguage
      : (($page.params.lang as AvailableLanguageTag) ?? sourceLanguageTag)
  );

  //Set the language tag in the Paraglide runtime.
  //This determines which language the strings are translated to.
  //You should only do this in the template, to avoid concurrent requests interfering with each other.
  onMount(() => {
    setLanguageTag(lang);
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
