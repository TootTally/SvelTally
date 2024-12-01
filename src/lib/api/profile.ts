/**
 * API functions for anything involving a user's profile.
 */

import type { Profile } from "$lib/types/profile";
import type { APIProfileScoreResponse } from "$lib/types/score";
import { PUBLIC_API_URL } from '$env/static/public';

export function getProfile(profileId: number, page: number = 1): Promise<Profile> {
  return fetch(
    `${PUBLIC_API_URL}/profile/${profileId}/?page=${page}`
  ).then((res) => res.json());
}

export function getRecentScores(profileId: number, page: number = 1): Promise<APIProfileScoreResponse> {
  return fetch(
    `${PUBLIC_API_URL}/profile/${profileId}/recent_scores/?page=${page}`
  ).then((res) => res.json());
}

export function getBestScores(profileId: number, page: number = 1): Promise<APIProfileScoreResponse> {
  return fetch(
    `${PUBLIC_API_URL}/profile/${profileId}/best_scores/?page=${page}`
  ).then((res) => res.json());
}
