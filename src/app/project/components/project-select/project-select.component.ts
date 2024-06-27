import { Component, inject } from '@angular/core';
import { SelectComponent } from '../../../core/select/select.component';
import {Project} from '../../../core/interfaces/project';
import { ProjectService } from '../../services/project.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-project-select',
  standalone: true,
  imports: [SelectComponent, AsyncPipe],
  templateUrl: './project-select.component.html',
  styleUrl: './project-select.component.scss'
})
export class ProjectSelectComponent {

projectService = inject(ProjectService);

  projects: Project[] = [
    // {value: 'steak-0', viewValue: 'Steak'},
    // {value: 'pizza-1', viewValue: 'Pizza'},
    // {value: 'tacos-2', viewValue: 'Tacos'},

    {id: 1, name: 'ECR'},
    {id: 2, name: 'New Project'},
    {id: 3, name: 'Next Project'}

  ];

  label = 'Project';

  ngOnInit(){
    this.projectService.setValue(this.projects);
  }

}
