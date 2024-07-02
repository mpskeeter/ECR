import { Injectable } from '@angular/core';
import { BaseCrudService } from '../../core/services/base-crud.service';
import { GithubRepository } from '../interfaces/github-repository';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService extends BaseCrudService<GithubRepository>{
  constructor() { 
    super();
    this.endpointType='users/ekue2002/repos';
  }
}
