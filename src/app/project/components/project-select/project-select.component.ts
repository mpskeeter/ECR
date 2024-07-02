import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { SelectComponent } from '../../../core/components/select/select.component';
import {Project} from '../../../core/interfaces/project';
import { ProjectService } from '../../services/project.service';
import { AsyncPipe } from '@angular/common';
import { RepositoryService } from '../../../github/services/repository.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-project-select',
  standalone: true,
  imports: [SelectComponent, AsyncPipe],
  templateUrl: './project-select.component.html',
  styleUrl: './project-select.component.scss'
})
export class ProjectSelectComponent {
 
  projectService = inject(RepositoryService);
  authService = inject(AuthService);

  label = 'Project';


  ngOnInit(){
    this.projectService.getAll();
  }

}
