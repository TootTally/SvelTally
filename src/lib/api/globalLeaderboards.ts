  import { PUBLIC_API_URL } from '$env/static/public';
  import { createQuery } from '@tanstack/svelte-query';

  type LeaderboardResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
      'id': number,
      'username': string,
      'tt': number,
      'rank': number,
      'country': string,
      'picture': string | null,
    }[];
  }

  const fetchLeaderboards = async ({ pageParam = 1 }) => {
    return fetch(`${PUBLIC_API_URL}/globalleaderboard/?page=${pageParam}`).then(res => res.json());
  };

  export const globalLeaderboardsQuery =  ({ pageParam = 1 }) => createQuery<LeaderboardResponse>({
    queryKey: ['leaderboards'],
    queryFn: () => fetchLeaderboards({ pageParam })
  })