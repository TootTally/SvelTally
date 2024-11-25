import type { PageLoad } from './$types';
import { PUBLIC_API_URL } from '$env/static/public';
import { LeaderboardResponse } from '$lib/types/leaderboard';

export const load: PageLoad = ({ url, fetch }) => {
  const urlParams = url.searchParams;
  const page = urlParams.get('page') ? Number(urlParams.get('page')) : 1;
  const query: Promise<LeaderboardResponse> = fetch(
    `${PUBLIC_API_URL}/globalleaderboard/?page=${page}`
  ).then((res) => res.json());

  return {
    page: page,
    promise: { query }
  };
};
