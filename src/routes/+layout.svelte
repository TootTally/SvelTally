<script lang="ts">
  import '../app.css';
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
  import NavBar from '$lib/components/NavBar.svelte';
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import { setLanguageTag, sourceLanguageTag, type AvailableLanguageTag } from '$paraglide/runtime';
  import ParaglideMetaTags from '$lib/i18n/ParaglideMetaTags.svelte';

  const queryClient = new QueryClient();

  //Determine the current language from the URL. Fall back to the source language if none is specified.
  $: lang = ($page.params.lang as AvailableLanguageTag) ?? sourceLanguageTag;

  //Set the language tag in the Paraglide runtime.
  //This determines which language the strings are translated to.
  //You should only do this in the template, to avoid concurrent requests interfering with each other.
  $: setLanguageTag(lang);

  //Keep the <html> lang and dir attributes in sync with the current language
  $: if (browser) {
    document.documentElement.lang = lang;
  }
</script>

<ParaglideMetaTags />

<QueryClientProvider client={queryClient}>
  <NavBar />
  {#key lang}
    <slot />
  {/key}
</QueryClientProvider>
