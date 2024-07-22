import { Injectable, inject, signal } from '@angular/core';
import { BaseEntity } from '../interfaces/base-entity'
import { BehaviorSubject, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { BaseState } from '../interfaces';
import { BaseStateService } from './base-state.service';


@Injectable({
  providedIn: 'root'
})
export class BaseCrudService<T extends BaseEntity> extends BaseStateService<T> {
  http=inject(HttpClient);
  authService=inject(AuthService);


  // items = new BehaviorSubject<T[]>([]);
  // items$ = this.items.asObservable();

  // setValue = (newValue:T[]) => this.items.next(newValue);
  baseURL='https://api.github.com';
  endpointType='';
  constructor() { 
    super();
  }

  getAll(){
    this.http.get<T[]>(`${this.baseURL}/${this.endpointType}`)
      .subscribe((data) => {
        this.state.update((state) => ({
          ...state,
          items: data,
        }));
      });
  }

  getForRepository(){
    this.http.get<T[]>(`${this.baseURL}/repos/${this.authService.user()}/${this.authService.repository()}/${this.endpointType}`)
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
