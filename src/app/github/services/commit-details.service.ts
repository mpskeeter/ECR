import { Injectable } from '@angular/core';
import { BaseCrudService } from '../../core';
import { GithubCommit } from '../interfaces';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommitDetailsService extends BaseCrudService<GithubCommit>{
  override endpointType='commits/';


  constructor() { 
    super();
  }

  getById(sha:string){
    this.http.get<GithubCommit[]>(`${this.baseURL}/repos/${this.authService.user()}/${this.authService.repository()}/${this.endpointType}/${sha}`)
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
              name: item.name || item.sha
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
