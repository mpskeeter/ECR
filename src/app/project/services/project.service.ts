import { Injectable } from '@angular/core';
import { Project } from '../../core/interfaces/project';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  items = new BehaviorSubject<Project[]>([]);
  items$ = this.items.asObservable();

  constructor() { }

setValue = (newValue:Project[]) => this.items.next(newValue);

}
