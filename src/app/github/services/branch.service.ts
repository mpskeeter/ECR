import { Injectable } from '@angular/core';
import { GithubBranch } from '../interfaces';
import { BaseCrudService } from '../../core/services/base-crud.service';

@Injectable({
  providedIn: 'root'
})
export class BranchService extends BaseCrudService<GithubBranch>{

  constructor() { 
    super();
    this.endpointType='branches';
  }
}
