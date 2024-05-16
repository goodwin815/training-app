export interface ILink {
  name: string;
  path: string;
  sublinks?: boolean;
  sublinksArray?: { name: string; path: string }[];
}
