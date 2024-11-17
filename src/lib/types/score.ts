export type APIScoreResponse = {
  count: number;
  next: string;
  previous: string;
  results: ProfileScore[];
};

export type ProfileScore = {
  score: number;
  player_id: number;
  player: string;
  played_on: string;
  tt: number;
  grade: 'S' | 'A' | 'B' | 'C' | 'D' | 'F';
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

export type SongLeaderboardScoreResponse = {
  score: number;
  player_id: number;
  player: string;
  played_on: string;
  grade: 'S' | 'A' | 'B' | 'C' | 'D' | 'F';
  perfect: number;
  nice: number;
  okay: number;
  meh: number;
  nasty: number;
  max_combo: number;
  percentage: number;
  game_version: string;
  replay_id: string;
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
}
