<script lang="ts">
  export let currentPage = 1;
  export let pageCount = 1;
  export let next: string | null = '';
  export let previous: string | null = '';
</script>

<div class="my-4 flex justify-center">
  <a
    href="?page=1"
    class="rounded-bl-lg rounded-tl-lg bg-gray-900 p-4 font-title text-2xl text-white hover:underline dark:bg-white dark:text-gray-900"
    class:pointer-events-none={currentPage === 1}
    class:disabled={currentPage === 1}
    >&lt;&lt;
  </a>
  <a
    href="?page={currentPage - 1}"
    class="bg-gray-900 p-4 font-title text-2xl text-white hover:underline dark:bg-white dark:text-gray-900"
    class:pointer-events-none={!previous}
    class:disabled={!previous}
    >&lt;
  </a>
  {#if pageCount > 5}
    {#if currentPage <= 3}
      {#each Array.from({ length: 5 }) as _, i}
        <a
          href="?page={i + 1}"
          class="bg-gray-900 p-4 pt-5 font-title text-2xl leading-none text-white hover:underline dark:bg-white dark:text-gray-900"
          class:underline={currentPage === i + 1}
        >
          {i + 1}
        </a>
      {/each}
      <span class="bg-gray-900 p-4 font-title text-2xl leading-none text-white dark:bg-white dark:text-gray-900">...</span>
    {:else if currentPage >= pageCount - 2}
      <span class="bg-gray-900 p-4 font-title text-2xl leading-none text-white dark:bg-white dark:text-gray-900">...</span>
      {#each Array.from({ length: 5 }) as _, i}
        <a
          href="?page={pageCount - 4 + i}"
          class="bg-gray-900 p-4 pt-5 font-title text-2xl leading-none text-white hover:underline dark:bg-white dark:text-gray-900"
          class:underline={currentPage === pageCount - 4 + i}
        >
          {pageCount - 4 + i}
        </a>
      {/each}
    {:else}
      <span class="bg-gray-900 p-4 font-title text-2xl leading-none text-white dark:bg-white dark:text-gray-900">...</span>
      {#each Array.from({ length: 5 }) as _, i}
        <a
          href="?page={currentPage - 2 + i}"
          class="bg-gray-900 p-4 pt-5 font-title text-2xl leading-none text-white hover:underline dark:bg-white dark:text-gray-900"
          class:underline={currentPage === currentPage - 2 + i}
        >
          {currentPage - 2 + i}
        </a>
      {/each}
      <span class="bg-gray-900 p-4 font-title text-2xl leading-none text-white dark:bg-white dark:text-gray-900">...</span>
    {/if}
  {:else}
    {#each Array.from({ length: pageCount }) as _, i}
      <a
        href="?page={i + 1}"
        class="bg-gray-900 p-4 pt-5 font-title text-2xl leading-none text-white hover:underline dark:bg-white dark:text-gray-900"
        class:underline={currentPage === i + 1}
      >
        {i + 1}
      </a>
    {/each}
  {/if}
  <a
    href="?page={currentPage + 1}"
    class="bg-gray-900 p-4 font-title text-2xl text-white hover:underline dark:bg-white dark:text-gray-900"
    class:pointer-events-none={!next}
    class:disabled={!next}
    >&gt;
  </a>
  <a
    href="?page={pageCount}"
    class="rounded-br-lg rounded-tr-lg bg-gray-900 p-4 font-title text-2xl text-white hover:underline dark:bg-white dark:text-gray-900"
    class:pointer-events-none={currentPage === pageCount}
    class:disabled={currentPage === pageCount}
    >&gt;&gt;
  </a>
</div>

<style>
  .disabled {
    opacity: 0.8;
  }
</style>
