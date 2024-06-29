import { Injectable } from '@angular/core';
import { BaseCrudService } from '../../core/services/base-crud.service';
import { GithubRelease } from '../interfaces/github-release';

@Injectable({
  providedIn: 'root'
})
export class ReleaseService extends BaseCrudService<GithubRelease> {
  constructor() {
    super();
    this.endpointType = 'releases';
  }
}
