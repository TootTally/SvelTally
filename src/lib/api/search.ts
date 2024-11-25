import type { SearchFilters, SearchResponse } from "$lib/types/search";
import { buildQueryString } from "$lib/utils/builders";
import { PUBLIC_API_URL } from "$env/static/public";

export function searchSong(filters: SearchFilters): Promise<SearchResponse> {
  let query = buildQueryString(filters);

  return fetch(
    `${PUBLIC_API_URL}/search/?${query}`,
  ).then((res) => res.json());
}
