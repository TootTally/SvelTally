import type { ProfileBaseResponse } from "$lib/types/profile";
import type { APIScoreResponse } from "$lib/types/score";
import { PUBLIC_API_URL } from '$env/static/public';

export function getProfile(profileId: number, page: number = 1): Promise<ProfileBaseResponse> {
  return fetch(
    `${PUBLIC_API_URL}/profile/${profileId}/?page=${page}`
  ).then((res) => res.json());
}

export function getRecentScores(profileId: number, page: number = 1): Promise<APIScoreResponse> {
  return fetch(
    `${PUBLIC_API_URL}/profile/${profileId}/recent_scores/?page=${page}`
  ).then((res) => res.json());
}

export function getBestScores(profileId: number, page: number = 1): Promise<APIScoreResponse> {
  return fetch(
    `${PUBLIC_API_URL}/profile/${profileId}/best_scores/?page=${page}`
  ).then((res) => res.json());
}
