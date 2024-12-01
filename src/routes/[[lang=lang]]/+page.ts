import type { PageLoad } from './$types';
import { getGlobalLeaderboard } from '$lib/api/leaderboard';

export const load: PageLoad = ({ url }) => {
  const urlParams = url.searchParams;
  const page = urlParams.get('page') ? Number(urlParams.get('page')) : 1;
  const query = getGlobalLeaderboard(page);

  return {
    page: page,
    promise: { query }
  };
};
