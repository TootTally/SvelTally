import type { SongInfo } from "./song";

export type ProfileBaseResponse = {
  id: number;
  username: string;
  rank: number;
  country: string;
  account_standing: AccountStanding;
  tt: number;
  status: Status;
  picture: string | null;
  currently_playing: SongInfo[] | null;
  badges: BadgeInfo[];
  dev: boolean;
  rating_team: boolean;
  supporter: boolean;
  beta_tester: boolean;
  moderator: boolean;
};

export type BadgeInfo = {
  name: string;
  alt_text: string;
  image: string;
  image_2x: string;
  image_4x: string;
  badge_type: BadgeType;
};

export enum Status {
  OFFLINE = "Offline",
  ONLINE = "Online",
  IDLE = "Idle",
  MAIN_MENU = "Main Menu",
  BROWSING_SONGS = "Browsing Songs",
  PLAYING = "Playing",
  WATCHING_REPLAY = "Watching Replay",
  SPECTATING = "Spectating",
};

export enum AccountStanding {
  GOOD = "Good Standing",
  RESTRICTED = "Restricted",
  BANNED = "Banned",
}

export enum BadgeType {
  PLAYER = 0,
  CHARTER = 1,
}
