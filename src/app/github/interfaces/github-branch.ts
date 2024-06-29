import { BaseEntity } from "../../core/interfaces/base-entity";
import { GithubCommitTree } from "./github-commit-tree";

export interface Protection {
  required_status_checks: RequiredStatusChecks;
}

export interface RequiredStatusChecks {
  enforcement_level: string;
  contexts: string[];
}

export interface GithubBranch extends BaseEntity {
  commit: GithubCommitTree;
  protected: boolean;
  protection: Protection;
  protection_url: string;
}
