<script lang="ts">
  interface Props {
    title: string;
  }

  let { title }: Props = $props();
</script>

<div class="flex bg-linear-to-br from-blue-600 to-pink-700 py-4 lg:py-16">
  <div
    class="relative z-0 m-auto flex w-full justify-center overflow-hidden md:w-[80vw] md:justify-start"
  >
    <h1
      class="font-title relative z-10 inline-block px-5 pt-4 pb-2 text-center text-2xl leading-none text-black md:ml-5 lg:text-5xl"
    >
      <span class="bg"></span>
      {title}
    </h1>
  </div>
</div>

<style lang="postcss">
  @reference '@/app.css';
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
    @apply absolute top-0 left-0 h-full w-full bg-blue-900/50;
    z-index: -1;
    height: 100%;
    transform: skewX(-30deg);
  }
</style>
