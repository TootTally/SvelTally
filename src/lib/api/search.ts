/**
 * API functions for anything involving chart search.
 */

import type { SearchFilters, APISongSearchResponse } from "$lib/types/search";
import { buildQueryString } from "$lib/utils/builders";
import { PUBLIC_API_URL } from "$env/static/public";

export function searchSong(filters: SearchFilters): Promise<APISongSearchResponse> {
  let query = buildQueryString(filters);

  return fetch(
    `${PUBLIC_API_URL}/search/?${query}`,
  ).then((res) => res.json());
}
