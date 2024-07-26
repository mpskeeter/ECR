import { BaseEntity } from "../../core";
import { GithubPullRequest } from "./github-pull-request";
import { GithubUser } from "./github-user";

export interface GithubIssue {
    id: number;
    node_id: string;
    url: string;
    repository_url: string;
    labels_url: string;
    comments_url: string;
    events_url: string;
    html_url: string;
    number: number;
    state: string;
    title: string;
    body: string;
    user: GithubUser;
    labels: Label[];
    assignee: GithubUser;
    assignees: GithubUser[];
    milestone: Milestone;
    locked: boolean;
    active_lock_reason: string;
    comments: number;
    pull_request: GithubPullRequest;
    closed_at: unknown;
    created_at: string;
    updated_at: string;
    closed_by: GithubUser;
    author_association: string;
    state_reason: string;
}

export interface Label extends BaseEntity{
    // id: number;
    node_id: string;
    url: string;
    // name: string;
    description: string;
    color: string;
    default: boolean;
  }
  export interface Milestone extends BaseEntity{
    url: string;
    html_url: string;
    labels_url: string;
    // id: number;
    node_id: string;
    number: number;
    state: string;
    title: string;
    description: string;
    creator: GithubUser;
    open_issues: number;
    closed_issues: number;
    created_at: string;
    updated_at: string;
    closed_at: string;
    due_on: string;
  }
