<script lang="ts">
  import NavBarLink from '$lib/components/NavBarLink.svelte';
  import { availableLanguageTags, languageTag, setLanguageTag } from '$paraglide/runtime.js';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  const changeLanguage = (event: Event) => {
    const newLanguageTag = (event.target as HTMLSelectElement)
      .value as (typeof availableLanguageTags)[number];
    setLanguageTag(newLanguageTag);
    goto(`/${newLanguageTag}${$page.url.pathname.slice(3)}`);
  };

  $: currentLanguage = languageTag();
</script>

<header class="bg-toot-red text-white">
  <nav class="m-auto flex max-w-full items-center justify-between py-2 md:max-w-[80vw]">
    <div class="flex gap-4">
      <a href="/static"><img class="h-6" src="/tt_logo.svg" alt="TootTally Logo" /></a>
      <NavBarLink href="/">Home</NavBarLink>
    </div>
    <div>
      <select
        bind:value={currentLanguage}
        on:change={changeLanguage}
        class="rounded-md border-2 border-white bg-toot-red p-1 uppercase text-white"
      >
        {#each availableLanguageTags as languageTag}
          <option value={languageTag}>{languageTag}</option>
        {/each}
      </select>
    </div>
  </nav>
</header>
