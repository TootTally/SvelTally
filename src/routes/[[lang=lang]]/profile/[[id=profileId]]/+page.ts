import type { PageLoad } from './$types';
import { PUBLIC_API_URL } from '$env/static/public';
import type { ProfileBaseResponse } from '$lib/types/profile';
import type { APIScoreResponse } from '$lib/types/score';

export const load: PageLoad = ({ params, fetch }) => {
  const profile: Promise<ProfileBaseResponse> = fetch(
    `${PUBLIC_API_URL}/profile/${params.id}/`
  ).then((res) => res.json());

  const recentScores: Promise<APIScoreResponse> = fetch(
    `${PUBLIC_API_URL}/profile/${params.id}/recent_scores/`
  ).then((res) => res.json());

  const bestScores: Promise<APIScoreResponse> = fetch(
    `${PUBLIC_API_URL}/profile/${params.id}/best_scores/`
  ).then((res) => res.json());

  return {
    promises: {
      query: Promise.all([profile, recentScores, bestScores])
    },
    lang: params.lang
  };
};
