import { BaseEntity } from "../../core/interfaces/base-entity";
import { GithubAuthor } from "./github-author";
import { GithubCommitTree } from "./github-commit-tree";

export interface Commit {
  url: string;
  author: Committer;
  committer: Committer;
  message: string;
  tree: GithubCommitTree;
  comment_count: number;
  verification: Verification;
}

export interface Committer {
  name: string;
  email: string;
  date: string;
}

export interface Verification {
  verified: boolean;
  reason: string;
  signature: unknown;
  payload: unknown;
}

export interface GithubCommit extends BaseEntity {
  url: string;
  sha: string;
  node_id: string;
  html_url: string;
  comments_url: string;
  commit: Commit;
  author: GithubAuthor;
  committer: GithubAuthor;
  parents: GithubCommitTree[];
}