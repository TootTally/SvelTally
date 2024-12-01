/**
 * API functions for anything involving the global
 * and country leaderboards.
 */

import type { APILeaderboardResponse } from "$lib/types/leaderboard";
import { PUBLIC_API_URL } from '$env/static/public';

/**
 * Get the current overall rated leaderboard for everyone
 * @param page 
 * @returns LeaderboardResponse for that page
 */
export function getGlobalLeaderboard(page: number = 1): Promise<APILeaderboardResponse> {
  return fetch(
    `${PUBLIC_API_URL}/globalleaderboard/?page=${page}`
  ).then((res) => res.json());
}

/**
 * Get the current overall rated leaderboard for a country
 * @param country ISO 3166-1 alpha-2 country code
 * @param page
 * @returns LeaderboardResponse for that country and page
 */
export function getCountryLeaderboard(country: string, page: number = 1): Promise<APILeaderboardResponse> {
  return fetch(
    `${PUBLIC_API_URL}/countryleaderboard/${country}/?page=${page}`
  ).then((res) => res.json());
}
