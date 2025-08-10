<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import NavBarLink from '$lib/components/NavBarLink.svelte';
  import { type Locale, getLocale, locales, setLocale } from '$lib/paraglide/runtime.js';

  const changeLanguage = (event: Event) => {
    const newLanguageTag = (event.target as HTMLSelectElement).value as Locale;
    setLocale(newLanguageTag);
    goto(`/${newLanguageTag}${page.url.pathname.slice(3)}`);
  };

  let currentLanguage = $state();
  let isDark = $state();
  $effect(() => {
    currentLanguage = getLocale();
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      isDark = true;
    }
  });

  function toggleDarkMode() {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      isDark = false;
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      isDark = true;
    }
  }
</script>

<header class="bg-toot-red text-white">
  <nav class="m-auto flex max-w-full items-center justify-between p-2 md:max-w-[80vw]">
    <div class="flex gap-4">
      <a href="/static"><img class="h-6" src="/tt_logo.svg" alt="TootTally Logo" /></a>
      <NavBarLink href="/">Home</NavBarLink>
    </div>
    <div class="flex items-center">
      <select
        bind:value={currentLanguage}
        onchange={changeLanguage}
        class="bg-toot-red rounded-md border-2 border-white p-1 text-white uppercase"
      >
        {#each locales as languageTag}
          <option value={languageTag}>{languageTag}</option>
        {/each}
      </select>
      <!-- TODO: for when we decide to implement light mode
      <button
        aria-label="Toggle Dark Mode"
        class="ml-1 flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400 ring-cyan-400 transition-all hover:ring-2 dark:bg-cyan-800"
        onclick={toggleDarkMode}
      >
        {#if isDark}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            class="h-5 w-5 text-zinc-800 dark:text-cyan-100"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728
						0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        {:else}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            class="h-5 w-5 text-zinc-800 dark:text-zinc-200"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        {/if}
      </button> -->
    </div>
  </nav>
</header>
