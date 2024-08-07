import { Injectable } from '@angular/core';
import { BaseCrudService } from '../../core';
import { GithubPullRequest } from '../interfaces';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PullRequestService extends BaseCrudService<GithubPullRequest>{

  constructor() { 
    super();
    this.endpointType='pulls';
  }

  override getForRepository(){
    this.http.get<GithubPullRequest[]>(`${this.baseURL}/repos/${this.authService.user()}/${this.authService.repository()}/${this.endpointType}?state=all`)
      .pipe(
        catchError(error => {
          throw 'error in source. Details: ' + error.code;
         })
      )
      .subscribe({
        next: (data) => {
          this.state.update((state) => ({
            ...state,
            items: data?.map((item) =>({
              ...item,
              name: item.name || item.number?.toString() || item.sha 
            })) || []
          }));
        } ,
        error: error => {
          this.state.update((state) => ({
            ...state,
            items: []
          }));
          console.log(error);
        },
   });
  }
}
