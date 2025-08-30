import { getSongInfo } from '$lib/api/song';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  let songId: number = Number(params.id);

  const songInfo = getSongInfo(songId);

  return {
    promises: {
      query: Promise.all([songInfo]),
    }
  }
}
