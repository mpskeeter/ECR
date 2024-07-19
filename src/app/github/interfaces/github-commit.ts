import { BaseEntity } from "../../core";
import { ColumnDef } from "../../core/interfaces/column-def";

export interface GithubCommit extends BaseEntity{
    url: string;
    sha: string;
    node_id: string;
    html_url: string;
    comments_url: string;
    commit: Commit2;
    author: Author2;
    committer: Committer2;
    parents: Parent[];
  }
  
  interface Commit2 {
    url: string;
    author: Author;
    committer: Committer;
    message: string;
    tree: Tree;
    comment_count: number;
    verification: Verification;
  }
  
  interface Author {
    name: string;
    email: string;
    date: string;
  }
  
  interface Committer {
    name: string;
    email: string;
    date: string;
  }
  
  interface Tree {
    url: string;
    sha: string;
  }
  
  interface Verification {
    verified: boolean;
    reason: string;
    signature: any;
    payload: any;
  }
  
  interface Author2 {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  }
  
  interface Committer2 {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  }
  
  interface Parent {
    url: string;
    sha: string;
  }

  export const GithubCommitTableDef: ColumnDef[] = [
    // {
    //   header: 'URL',
    //   column: 'url',
    //   data: (row: GithubCommit) => row.url,
    // },
    {
      header: 'SHA',
      column: 'sha',
      data: (row) => (row as GithubCommit).sha,
    },
    // {
    //   header: 'NODE',
    //   column: 'node_id',
    //   data: (row: GithubCommit) => row.node_id,
    // },
    // {
    //   header: 'HTML',
    //   column: 'html_url',
    //   data: (row: GithubCommit) => row.html_url,
    // },
    // {
    //   header: 'COMENTS',
    //   column: 'comments_url',
    //   data: (row: GithubCommit) => row.comments_url,
    // },
    {
      header: 'COMMIT',
      column: 'commit.message',
      data: (row) => (row as GithubCommit).commit?.message,
    },
    {
      header: 'AUTHOR',
      column: 'author.login',
      data: (row) => (row as GithubCommit).author?.login || '',
    },
    {
      header: 'COMMITTER',
      column: 'committer.login',
      data: (row) => (row as GithubCommit).committer?.login || '',
    },
    // {
    //   header: 'PARENTS',
    //   column: 'parents[0].sha',
    //   data: (row: GithubCommit) => row.parents[0].sha,
    // },
  ]