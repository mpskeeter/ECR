import { BaseEntity } from "../../core/interfaces/base-entity";
import { GithubAuthor } from "./github-author";

export interface Asset extends BaseEntity {
  // id: number;
  // name: string;
  url: string;
  browser_download_url: string;
  node_id: string;
  label: string;
  state: string;
  content_type: string;
  size: number;
  download_count: number;
  created_at: string;
  updated_at: string;
  uploader: GithubAuthor;
}

export interface GithubRelease extends BaseEntity {
  // id: number;
  // name: string;
  url: string;
  html_url: string;
  assets_url: string;
  upload_url: string;
  tarball_url: string;
  zipball_url: string;
  node_id: string;
  tag_name: string;
  target_commitish: string;
  body: string;
  draft: boolean;
  prerelease: boolean;
  created_at: string;
  published_at: string;
  author: GithubAuthor;
  assets: Asset[];
}