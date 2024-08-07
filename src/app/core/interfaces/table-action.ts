import { BaseEntity } from "./base-entity";

export interface TableAction {
    label:string;
    icon:string;
    action: (row: BaseEntity) => void;
}
