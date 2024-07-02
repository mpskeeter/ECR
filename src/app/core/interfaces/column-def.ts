import { GithubCommit } from "../../github/interfaces";

export interface ColumnDef {
    header: string;
    column: string;
    data: (row: GithubCommit) => string;
}
 