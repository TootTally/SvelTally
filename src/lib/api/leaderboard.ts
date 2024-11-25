import type { LeaderboardResponse } from "$lib/types/leaderboard";
import { PUBLIC_API_URL } from '$env/static/public';

export function getGlobalLeaderboard(page: number = 1): Promise<LeaderboardResponse> {
  return fetch(
    `${PUBLIC_API_URL}/globalleaderboard/?page=${page}`
  ).then((res) => res.json());
}
