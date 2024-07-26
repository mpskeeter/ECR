import { Injectable } from '@angular/core';
import { BaseCrudService } from '../../core';
import { GithubIssue } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class IssueService extends BaseCrudService<GithubIssue>{

  constructor() { 
    super();
    this.endpointType='issues';
  }
}
