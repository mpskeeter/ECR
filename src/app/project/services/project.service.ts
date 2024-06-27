import { Injectable } from '@angular/core';
import { Project } from '../../core/interfaces/project';
import { BaseCrudService } from '../../core/services/base-crud.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends BaseCrudService<Project> {
  
  constructor() { super() }
}
