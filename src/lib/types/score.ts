export type APIProfileScoreResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: ProfileScore[];
};

export type ProfileScore = {
  score: number;
  player_id: number;
  player: string;
  played_on: string;
  tt: number;
  grade: Grade;
  perfect: number;
  nice: number;
  okay: number;
  meh: number;
  nasty: number;
  max_combo?: number;
  percentage: number;
  game_version: string;
  replay_id: string;
  song_id: number;
  song_name: string;
  song_artist: string;
  song_notehash: string;
  song_filehash: string;
  song_is_rated: boolean;
  replay_speed: number;
  difficulty: number;
  modifiers: Modifier[] | null;
};

export type APISongLeaderboardResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: SongLeaderboardScore[];
};

export type SongLeaderboardScore = {
  score: number;
  player_id: number;
  player: string;
  played_on: string; // UTC datetime string
  grade: Grade;
  perfect: number;
  nice: number;
  okay: number;
  meh: number;
  nasty: number;
  max_combo: number;
  percentage: number; // 0 - 100
  game_version: string;
  replay_id: string; // uuid
  tt: number;
  is_rated: boolean;
  replay_speed: number;
  difficulty: number;
  modifiers: Modifier[] | null;
};

export enum Modifier {
  HIDDEN = 'HD',
  FLASHLIGHT = 'FL',
  BRUTAL = 'BT',
  INSTAFAIL = 'IF',
  EASY = 'EZ',
  STRICT = 'ST',
  AUTOTUNE = 'AT',
  HIDDEN_CURSOR = 'HC'
};

export enum Grade {
  SSS = 'SSS',
  SS = 'SS',
  S = 'S',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  F = 'F',
};
