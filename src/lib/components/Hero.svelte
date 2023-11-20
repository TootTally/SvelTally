<script lang="ts">
  export let title: string;
</script>

<div class="flex bg-gradient-to-br from-blue-600 to-pink-700 py-16">
  <div class="m-auto flex w-full md:w-[80vw]">
    <div
      class="border border-b-[4.4em] border-l-[1em] border-t-0 border-blue-900 border-l-transparent border-opacity-50 sm:ml-4"
    ></div>
    <h1
      class="z-10 inline-block bg-blue-900 bg-opacity-50 px-3 pb-2 pt-4 font-title text-5xl leading-none text-black"
    >
      {title}
    </h1>
    <div
      class="border border-b-0 border-r-[1em] border-t-[4.4em] border-blue-900 border-r-transparent border-opacity-50"
    ></div>
  </div>
</div>

<style>
  .font-title {
    text-shadow:
      3px 0 #fff,
      -3px 0 #fff,
      0 3px #fff,
      0 -3px #fff,
      2px 2px #fff,
      -2px -2px #fff,
      2px -2px #fff,
      -2px 2px #fff;
    z-index: 10;
  }
</style>
