import { Injectable } from '@angular/core';
import { BaseEntity } from '../interfaces/base-entity'
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BaseCrudService<T extends BaseEntity> {

  items = new BehaviorSubject<T[]>([]);
  items$ = this.items.asObservable();

  setValue = (newValue:T[]) => this.items.next(newValue);

  constructor() { }
}
