import { Injectable } from '@angular/core';
import { Release } from '../../core/interfaces/release';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReleaseService {

  items = new BehaviorSubject<Release[]>([]);
  items$ = this.items.asObservable();

  constructor() { }

  setValue = (newValue:Release[]) => this.items.next(newValue);

}
