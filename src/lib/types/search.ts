import type { SongInfo } from "./song";

export type SearchFilters = {
  song_name?: string;
  max_diff?: number;
  min_diff?: number;
  official?: number;
  order?: SearchOrder;
  order_by?: SearchOrderBy;
  rated?: RatedStatus;
  page?: number;
  page_size?: number;
}

export type APISongSearchResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: SongInfo[];
}

export enum SearchOrder {
  ASCENDING = 'asc',
  DESCENDING = 'desc',
}

export enum SearchOrderBy {
  ID = '',
  DIFFICULTY = 'difficulty',
  PLAY_COUNT = 'play_count',
  SONG_LENGTH = 'song_length',
}

export enum RatedStatus {
  SHOW_ALL = 0,
  RATED_ONLY = 1,
  LOVED_ONLY = 2,
}
