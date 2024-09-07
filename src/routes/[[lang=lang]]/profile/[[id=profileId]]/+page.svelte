<script lang="ts">
  import MainLayout from '$lib/components/MainLayout.svelte';
  import ProfileHeader from '$lib/components/profile/ProfileHeader.svelte';
  import * as m from '$paraglide/messages';

  import type { PageData } from './$types';

  export let data: PageData;
</script>

<MainLayout>
  {#await data.promise.query}
    <p class="p-8 text-center font-title text-2xl">{m.loading()}</p>
  {:then resolvedData}
    <ProfileHeader user={resolvedData}/>
  {/await}
</MainLayout>
