import { BaseEntity } from "../../core";

export interface GithubRelease extends BaseEntity {
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
    // author: Author
    // assets: Asset[]
  }

