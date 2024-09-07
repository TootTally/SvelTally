import type { PageLoad } from './$types';
import { PUBLIC_API_URL } from '$env/static/public';
import type { ProfileBaseResponse } from '$lib/types/profile';

export const load: PageLoad = ({ params, fetch }) => {
  const query: Promise<ProfileBaseResponse> = fetch(
    `${PUBLIC_API_URL}/profile/${params.id}`
  ).then((res) => res.json());

  return { promise: { query } };
};
