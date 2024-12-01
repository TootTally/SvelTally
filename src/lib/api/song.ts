/**
 * API functions for anything involving song/chart information
 * and their respective leaderboards.
 */

import { PUBLIC_API_URL } from "$env/static/public";
import type { APISongInfoResponse } from "$lib/types/song";
import type { APISongLeaderboardResponse } from "$lib/types/score";

export function getSongInfo(songId: number): Promise<APISongInfoResponse> {
  return fetch(
    `${PUBLIC_API_URL}/songs/${songId}/`,
  ).then((res) => res.json());
}

export function getSongLeaderboard(songId: number, page: number = 1): Promise<APISongLeaderboardResponse> {
  return fetch(
    `${PUBLIC_API_URL}/songs/${songId}/leaderboard/?page=${page}`,
  ).then((res) => res.json());
}
