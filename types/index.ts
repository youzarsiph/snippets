/**
 * Types
 */

interface Reactions {
  likes: number;
  comments: number;
  bookmarks: number;
}

interface TabType {
  title: string;
  active: boolean;
  code: string;
  language: string;
}

export type { Reactions, TabType };
