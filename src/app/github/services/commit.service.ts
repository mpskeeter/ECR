import { Injectable } from '@angular/core';
import { BaseCrudService } from '../../core';
import { GithubCommit } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommitService extends BaseCrudService<GithubCommit> {

  constructor() { 
    super();
    this.endpointType='commits';
   }
}
