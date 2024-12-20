export type SongInfo = {
  id: number;
  name: string;
  short_name: string;
  track_ref: string;
  note_hash: string;
  file_hash: string;
  alt_downloads: string[];
  difficulty: number;
  tap: number;
  aim: number;
  acc: number;
  base_tt: number;
  uploaded_at: string;
  author: string;
  charter: string;
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
