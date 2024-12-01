<script lang="ts">
  import type { Grade } from "$lib/types/score";

  interface Props {
    grade: Grade;
  }

  let { grade }: Props = $props();
</script>

<div class="drop-shadow-2xl score-grade">
  <p class="font-title text-center">{ grade }</p>
</div>

<style>
  .score-grade {
    display: flex;
    margin: auto;
    width: 1em;
    height: 1em;
    transform: rotate(45deg);
    border: 1em solid black;
    background: black;
    justify-content: center;
    justify-self: center;
    align-content: center;
    align-self: center;
    align-items: center;
    text-align: center;

    p {
      display: table-cell;
      transform: rotate(-45deg);
      text-align: center;
      vertical-align: middle;
      padding-bottom: 100%;
      text-shadow: 0 0 1px whitesmoke;
    }
  }
</style>
