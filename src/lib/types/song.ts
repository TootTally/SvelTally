export type APISongInfoResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: SongInfo[] | null;
};

export type SongInfo = {
  id: number;
  name: string;
  short_name: string;
  description?: string;
  track_ref: string;
  note_hash: string;
  file_hash: string;
  alt_downloads: AltDownload[] | null;
  difficulty: number;
  bpm?: number | null;
  tap: number;
  aim: number;
  acc: number;
  base_tt: number;
  uploaded_at: string;
  author: string;
  charter: string | null;
  download: string | null;
  mirror: string | null;
  is_official: boolean;
  play_count: number;
  max_score: number;
  s_rank_score: number;
  is_rated: boolean;
  speed_diffs: number[];
  speed_taps: number[];
  speed_aim: number[];
  speed_acc: number[];
  song_length: number;
  note_count: number;
  status: 'WORK_IN_PROGRESS' | 'UNRATED' | 'REQUEST_REVIEW' | 'RATED' | 'LOVED';
};

export type AltDownload = {
  name: string;
  download: string | null;
  mirror: string | null;
};

export enum ChartStatus {
  WORK_IN_PROGRESS = 'WORK_IN_PROGRESS',
  UNRATED = 'UNRATED',
  REQUEST_REVIEW = 'REQUEST_REVIEW',
  RATED = 'RATED',
  LOVED = 'LOVED',
};
