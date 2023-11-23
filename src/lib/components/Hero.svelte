<script lang="ts">
  export let title: string;
</script>

<div class="flex bg-gradient-to-br from-blue-600 to-pink-700 py-16">
  <div
    class="relative z-0 m-auto flex w-full justify-center overflow-hidden md:w-[80vw] md:justify-start"
  >
    <h1
      class="relative z-10 inline-block px-5 pb-2 pt-4 text-center font-title text-5xl leading-none text-black md:ml-5"
    >
      <span class="bg" />
      {title}
    </h1>
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

  .bg {
    @apply absolute left-0 top-0 h-full w-full bg-blue-900 bg-opacity-50;
    z-index: -1;
    height: 100%;
    transform: skewX(-30deg);
  }
</style>
