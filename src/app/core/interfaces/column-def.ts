import { Ecr } from "../../ECR/interfaces";
import { GithubCommit, GithubPullRequest } from "../../github/interfaces";

type dataType = GithubCommit | Ecr | GithubPullRequest;

export interface ColumnDef {
    header: string;
    column: string;
    data: (row: dataType) => string | number | Date;
}
 