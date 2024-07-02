import { Injectable } from '@angular/core';
import { BaseCrudService } from '../../core';
import { GithubRelease } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ReleaseService extends BaseCrudService<GithubRelease>{

  constructor() {
    super();
    this.endpointType='releases';
   }
}
