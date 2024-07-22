import { computed, Injectable, signal } from '@angular/core';
import { BaseState } from '../interfaces/base-state';

@Injectable({
  providedIn: 'root'
})
export class BaseStateService<T>{
  state=signal<BaseState<T>>({});

  items=computed(() => this.state().items);
  item=computed(() => this.state().item);
  id=computed(() => this.state().id);
  name=computed(() => this.state().name);

  constructor() { }
}
