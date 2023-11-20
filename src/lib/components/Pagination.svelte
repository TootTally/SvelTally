<script lang="ts">
  export let page = 1;
  export let pageCount = 1;
  export let query;
</script>

<div class="my-4 flex justify-center">
  <button
    class="rounded-bl-lg rounded-tl-lg bg-gray-900 p-4 font-title text-2xl text-white hover:underline dark:bg-white dark:text-gray-900"
    on:click={() => (page = 1)}
    class:pointer-events-none={page === 1}
    class:disabled={page === 1}
    disabled={page === 1}
    >&lt;&lt;
  </button>
  <button
    class="bg-gray-900 p-4 font-title text-2xl text-white hover:underline dark:bg-white dark:text-gray-900"
    on:click={() => (page -= 1)}
    class:pointer-events-none={!$query.data?.previous}
    class:disabled={!$query.data?.previous}
    disabled={!$query.data?.previous}
    >&lt;
  </button>
  {#each Array.from({ length: pageCount }) as _, i}
    <button
      class="bg-gray-900 p-4 font-title text-2xl leading-none text-white hover:underline dark:bg-white dark:text-gray-900"
      class:underline={page === i + 1}
      on:click={() => (page = i + 1)}>{i + 1}</button
    >
  {/each}
  <button
    class="bg-gray-900 p-4 font-title text-2xl text-white hover:underline dark:bg-white dark:text-gray-900"
    class:pointer-events-none={!$query.data?.next}
    class:disabled={!$query.data?.next}
    on:click={() => (page += 1)}
    disabled={!$query.data?.next}
    >&gt;
  </button>
  <button
    class="rounded-br-lg rounded-tr-lg bg-gray-900 p-4 font-title text-2xl text-white hover:underline dark:bg-white dark:text-gray-900"
    class:pointer-events-none={page === pageCount}
    class:disabled={page === pageCount}
    on:click={() => (page = pageCount)}
    disabled={page === pageCount}
    >&gt;&gt;
  </button>
</div>

<style>
  .disabled {
    opacity: 0.8;
  }
</style>
