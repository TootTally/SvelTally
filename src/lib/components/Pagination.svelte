<script lang="ts">
  interface Props {
    currentPage?: number;
    pageCount?: number;
    next?: string | null;
    previous?: string | null;
  }

  let { currentPage = $bindable(1), pageCount = 1, next = '', previous = '' }: Props = $props();
</script>

<div class="my-4 flex justify-center lg:text-2xl">
  <div class="flex w-full items-center justify-around rounded bg-white">
    <a
      href="?page=1"
      class="font-title rounded-tl-lg rounded-bl-lg bg-gray-900 p-1 text-white hover:underline lg:p-4 dark:bg-white dark:text-gray-900"
      class:pointer-events-none={currentPage === 1}
      class:!text-gray-300={currentPage === 1}
      >&lt;&lt;
    </a>
    <a
      href="?page={currentPage - 1}"
      class="font-title bg-gray-900 p-1 text-white hover:underline lg:p-4 dark:bg-white dark:text-gray-900"
      class:pointer-events-none={!previous}
      class:!text-gray-300={!previous}
      >&lt;
    </a>
    {#if pageCount > 5}
      {#if currentPage <= 3}
        {#each Array.from({ length: 5 }) as _, i}
          <a
            href="?page={i + 1}"
            class="font-title bg-gray-900 p-1 leading-none text-white hover:underline lg:p-4 dark:bg-white dark:text-gray-900"
            class:underline={currentPage === i + 1}
          >
            {i + 1}
          </a>
        {/each}
        <span
          class="font-title bg-gray-900 p-1 leading-none text-white lg:p-4 dark:bg-white dark:text-gray-900"
          >...</span
        >
      {:else if currentPage >= pageCount - 2}
        <span
          class="font-title bg-gray-900 p-1 leading-none text-white lg:p-4 dark:bg-white dark:text-gray-900"
          >...</span
        >
        {#each Array.from({ length: 5 }) as _, i}
          <a
            href="?page={pageCount - 4 + i}"
            class="font-title bg-gray-900 p-1 leading-none text-white hover:underline lg:p-4 dark:bg-white dark:text-gray-900"
            class:underline={currentPage === pageCount - 4 + i}
          >
            {pageCount - 4 + i}
          </a>
        {/each}
      {:else}
        <span
          class="font-title bg-gray-900 p-1 leading-none text-white lg:p-4 dark:bg-white dark:text-gray-900"
          >...</span
        >
        {#each Array.from({ length: 5 }) as _, i}
          <a
            href="?page={currentPage - 2 + i}"
            class="font-title bg-gray-900 p-1 leading-none text-white hover:underline lg:p-4 dark:bg-white dark:text-gray-900"
            class:underline={currentPage === currentPage - 2 + i}
          >
            {currentPage - 2 + i}
          </a>
        {/each}
        <span
          class="font-title bg-gray-900 p-1 leading-none text-white lg:p-4 dark:bg-white dark:text-gray-900"
          >...</span
        >
      {/if}
    {:else}
      {#each Array.from({ length: pageCount }) as _, i}
        <a
          href="?page={i + 1}"
          class="font-title bg-gray-900 p-1 leading-none text-white hover:underline lg:p-4 dark:bg-white dark:text-gray-900"
          class:underline={currentPage === i + 1}
        >
          {i + 1}
        </a>
      {/each}
    {/if}
    <a
      href="?page={currentPage + 1}"
      class="font-title bg-gray-900 p-1 text-white hover:underline lg:p-4 dark:bg-white dark:text-gray-900"
      class:pointer-events-none={!next}
      class:!text-gray-300={!next}
      >&gt;
    </a>
    <a
      href="?page={pageCount}"
      class="font-title rounded-tr-lg rounded-br-lg bg-gray-900 p-1 text-white hover:underline lg:p-4 dark:bg-white dark:text-gray-900"
      class:pointer-events-none={currentPage === pageCount}
      class:!text-gray-300={currentPage === pageCount}
      >&gt;&gt;
    </a>
  </div>
</div>
