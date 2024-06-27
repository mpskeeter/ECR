import { Component, inject } from '@angular/core';
import { SelectComponent } from '../../../core/select/select.component';
import {Item} from '../../../core/item';
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

  projects: Item[] = [
    // {value: 'steak-0', viewValue: 'Steak'},
    // {value: 'pizza-1', viewValue: 'Pizza'},
    // {value: 'tacos-2', viewValue: 'Tacos'},

    {value: 1, viewValue: 'ECR'},
    {value: 2, viewValue: 'New Project'},
    {value: 3, viewValue: 'Next Project'}

  ];

  label = 'Project';

  ngOnInit(){
    this.projectService.setValue(this.projects);
  }

}
