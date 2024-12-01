import type { PageLoad } from './$types';
import { getProfile, getRecentScores, getBestScores } from '$lib/api/profile';

export const load: PageLoad = ({ params }) => {
  let profileId = Number(params.id);

  if (profileId === 0 || profileId <= 0) {
    console.error("Invalid profile ID");
    return;
  }

  const profile = getProfile(profileId);
  const recentScores = getRecentScores(profileId);
  const bestScores = getBestScores(profileId);

  return {
    promises: {
      query: Promise.all([profile, recentScores, bestScores])
    },
    lang: params.lang
  };
};
