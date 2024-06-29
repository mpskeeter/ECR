import { Injectable } from '@angular/core';
import { GithubRepository } from '../interfaces/github-repository';
import { BaseCrudService } from '../../core/services/base-crud.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService extends BaseCrudService<GithubRepository>{
  constructor() {
    super();
    this.endpointType = `/users/${environment.GITHUB_OWNER}/repos`
  }
}
