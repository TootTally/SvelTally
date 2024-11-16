import type { PageLoad } from './$types';
import { PUBLIC_API_URL } from '$env/static/public';

type LeaderboardResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    id: number;
    username: string;
    tt: number;
    rank: number;
    country: string;
    picture: string | null;
  }[];
};

export const load: PageLoad = ({ url, fetch }) => {
  const urlParams = url.searchParams;
  const page = urlParams.get('page') ? Number(urlParams.get('page')) : 1;
  const query: Promise<LeaderboardResponse> = fetch(
    `${PUBLIC_API_URL}/globalleaderboard/?page=${page}`
  ).then((res) => res.json());

  return {
    page: page,
    promise: { query },
  };
};
