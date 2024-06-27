import { Injectable } from '@angular/core';
import { Item } from '../../core/item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  items = new BehaviorSubject<Item[]>([]);
  items$ = this.items.asObservable();

  constructor() { }

setValue = (newValue:Item[]) => this.items.next(newValue);

}
