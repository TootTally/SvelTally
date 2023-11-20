<script lang="ts">
  export let title: string;
</script>

<div class="py-16 flex bg-gradient-to-br from-blue-600 to-pink-700">
  <div class="flex w-full md:w-[80vw] m-auto">
    <div
      class="sm:ml-4 border border-t-0 border-b-[4.4em] border-l-transparent border-l-[1em] border-blue-900 border-opacity-50"></div>
    <h1
      class="z-10 bg-blue-900 bg-opacity-50 leading-none pb-2 pt-4 px-3 inline-block font-title text-black text-5xl">
      {title}
    </h1>
    <div
      class="border border-b-0 border-t-[4.4em] border-r-transparent border-r-[1em] border-blue-900 border-opacity-50"></div>
  </div>
</div>

<style>
    .font-title {
        text-shadow: 3px 0 #fff, -3px 0 #fff, 0 3px #fff, 0 -3px #fff,
        2px 2px #fff, -2px -2px #fff, 2px -2px #fff, -2px 2px #fff;
        z-index: 10;
    }
</style>

