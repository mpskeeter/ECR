import { Ecr } from "../../ECR/interfaces";
import { GithubCommit } from "../../github/interfaces";

type dataType = GithubCommit | Ecr;

export interface ColumnDef {
    header: string;
    column: string;
    data: (row: dataType) => string | number;
}
 