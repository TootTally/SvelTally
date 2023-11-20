<script lang="ts">
  export let page = 1;
  export let pageCount = 1;
  export let query;
</script>

<div class="flex justify-center my-4">
  <button
    class="hover:underline rounded-tl-lg rounded-bl-lg p-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-2xl font-title"
    on:click={() => page = 1}
    class:pointer-events-none={page === 1}
    class:disabled={page === 1}
    disabled="{page === 1}">&lt;&lt;
  </button>
  <button
    class="hover:underline p-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-2xl font-title"
    on:click={() => page -= 1}
    class:pointer-events-none={!$query.data?.previous}
    class:disabled={!$query.data?.previous}
    disabled="{!$query.data?.previous}">&lt;
  </button>
  {#each Array.from({ length: pageCount }) as _, i}
    <button
      class="leading-none hover:underline p-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-2xl font-title"
      class:underline={page === i + 1}
      on:click={() => page = i + 1}>{i + 1}</button>
  {/each}
  <button
    class="hover:underline p-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-2xl font-title"
    class:pointer-events-none={!$query.data?.next}
    class:disabled={!$query.data?.next}
    on:click={() => page += 1} disabled="{!$query.data?.next}">&gt;
  </button>
  <button
    class="hover:underline rounded-tr-lg rounded-br-lg p-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-2xl font-title"
    class:pointer-events-none={page === pageCount}
    class:disabled={page === pageCount}
    on:click={() => page = pageCount} disabled="{page === pageCount}">&gt;&gt;
  </button>
</div>

<style>
    .disabled {
        opacity: 0.8;
    }
</style>