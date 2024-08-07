import { BaseEntity, ColumnDef } from "../../core";
import { GithubUser } from "./github-user"

export interface GithubPullRequest extends BaseEntity{
    url: string;
    html_url: string;
    diff_url: string;
    patch_url: string;
    body: string;
    number:number;
    state:string;
    title:string;
    created_at:string;
    user:GithubUser;
    merged_by:GithubUser;
    merge_commit_sha:string;
  }

  export const GithubPullRequestTableDef: ColumnDef[] = [
    // {
    //   header: 'URL',
    //   column: 'url',
    //   data: (row) => (row as GithubPullRequest).url,
    // },
    {
      header: 'ID',
      column: 'id',
      data: (row) => (row as GithubPullRequest).id || 0,
    },
    {
      header: 'Created Date',
      column: 'created_at',
      data: (row) => new Date((row as GithubPullRequest).created_at),
    },
    {
      header: 'Title',
      column: 'title',
      data: (row) => (row as GithubPullRequest).title,
    },
    
    // {
    //   header: 'NODE',
    //   column: 'node_id',
    //   data: (row: GithubPullRequest) => row.node_id,
    // },
    // {
    //   header: 'HTML',
    //   column: 'html_url',
    //   data: (row: GithubPullRequest) => row.html_url,
    // },
    // {
    //   header: 'COMENTS',
    //   column: 'comments_url',
    //   data: (row: GithubPullRequest) => row.comments_url,
    // },
    {
      header: 'number',
      column: 'number',
      data: (row) => (row as GithubPullRequest).number,
    },
    {
      header: 'User',
      column: 'user',
      data: (row) => (row as GithubPullRequest).user?.login || '',
    },
    {
      header: 'Merged By',
      column: 'merged_by.login',
      data: (row) => (row as GithubPullRequest).merged_by?.login || '',
    },
    // {
    //   header: 'PARENTS',
    //   column: 'parents[0].sha',
    //   data: (row: GithubPullRequest) => row.parents[0].sha,
    // },
  ]