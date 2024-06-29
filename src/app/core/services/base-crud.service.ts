import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
import { BaseEntity } from '../interfaces/base-entity'

@Injectable({
  providedIn: 'root'
})
export class BaseCrudService<T extends BaseEntity> {
  http = inject(HttpClient);
  authService = inject(AuthService);

  baseURL: string = 'https://api.github.com';
  endpointType: string = '';

  items = new BehaviorSubject<T[]>([]);
  items$ = this.items.asObservable();

  constructor() { }

  getAll = () => {
    this.http.get<T[]>(`${this.baseURL}${this.endpointType}`).subscribe(items => this.items.next(items));
  }

  getAllForRepository = (repository: string = '') => {
    if (repository !== '') {
      this.http.get<T[]>(`${this.baseURL}/repos/${this.authService.owner}/${repository}/${this.endpointType}`)
        .subscribe((items) => this.items.next(
          items.map((item) => 
            item.name
            ? item
            : {
              ...item,
              name: item.sha,
            }
          )
        ));
    }
  } 

}
