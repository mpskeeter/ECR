import { Injectable } from '@angular/core';
import { BaseCrudService } from '../../core/services/base-crud.service';
import { GithubCommit } from '../interfaces/github-commit';

@Injectable({
  providedIn: 'root'
})
export class CommitService extends BaseCrudService<GithubCommit>{
  constructor() {
    super();
    this.endpointType = 'commits';
  }
}
