import { BaseEntity } from "./base-entity";

export interface Release extends BaseEntity{
    projectId?: number;
}
