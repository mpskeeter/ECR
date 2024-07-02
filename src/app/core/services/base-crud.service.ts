import { Injectable, inject } from '@angular/core';
import { BaseEntity } from '../interfaces/base-entity'
import { BehaviorSubject, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class BaseCrudService<T extends BaseEntity> {
  http=inject(HttpClient);
  authService=inject(AuthService);

  items = new BehaviorSubject<T[]>([]);
  items$ = this.items.asObservable();

  setValue = (newValue:T[]) => this.items.next(newValue);
  baseURL='https://api.github.com';
  endpointType='';
  constructor() { }

  getAll(){
    this.http.get<T[]>(`${this.baseURL}/${this.endpointType}`)
      .subscribe((data) => this.items.next(data));
  }

  getForRepository(){
    this.http.get<T[]>(`${this.baseURL}/repos/${this.authService.user()}/${this.authService.repository()}/${this.endpointType}`)
      .pipe(
        catchError(error => {
          throw 'error in source. Details: ' + error.code;
         })
      )
      .subscribe({
        next: (data) => this.items.next(
        data?.map((item) =>({
          ...item,
          name: item.name || item.sha
        })) || []
        ),
        error: error => {
          this.items.next([]);
          console.log(error);
        },
   });
  }
}
