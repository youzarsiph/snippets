/**
 * Types
 */

interface Reactions {
  likes: number;
  comments: number;
  bookmarks: number;
}

interface Tab {
  title: string;
  active: boolean;
  code: string;
  language: string;
}

export type { Reactions, Tab };
