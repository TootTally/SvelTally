import { PUBLIC_API_URL } from '$env/static/public';
import { createQuery } from '@tanstack/svelte-query';

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

const fetchLeaderboards = async ({ page = 1 }) => {
  return fetch(`${PUBLIC_API_URL}/globalleaderboard/?page=${page}`).then((res) => res.json());
};

export const globalLeaderboardsQuery = ({ page = 1 }) =>
  createQuery<LeaderboardResponse>({
    queryKey: ['leaderboards'],
    queryFn: () => fetchLeaderboards({ page })
  });
