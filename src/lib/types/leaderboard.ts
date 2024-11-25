export type LeaderboardResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    id: number;
    username: string;
    tt: number;
    rank: number;
    country: string;
    picture: string | null;
  }[];
};