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
  const params = url.searchParams;
  const page = params.get('page') ? Number(params.get('page')) : 1;
  const query: Promise<LeaderboardResponse> = fetch(
    `${PUBLIC_API_URL}/globalleaderboard/?page=${page}`
  ).then((res) => res.json());

  return { page, promise: { query } };
};
