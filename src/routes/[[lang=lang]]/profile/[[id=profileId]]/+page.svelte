<script lang="ts">
  import MainLayout from '$lib/components/MainLayout.svelte';
  import PlayTable from '$lib/components/profile/PlayTable.svelte';
  import ProfileHeader from '$lib/components/profile/ProfileHeader.svelte';
  import * as m from '$paraglide/messages';

  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<MainLayout>
  {#await data.promises.query}
    <p class="p-8 text-center font-title text-2xl">{m.loading()}</p>
  {:then resolvedData}
    <ProfileHeader user={resolvedData[0]}/>

    <hr/>
    <PlayTable
      tableName={m.best_plays()}
      plays={resolvedData[2].results}
    />
    
    <hr/>
    <PlayTable
      tableName={m.recent_plays()}
      plays={resolvedData[1].results}
    />
  {/await}
</MainLayout>
