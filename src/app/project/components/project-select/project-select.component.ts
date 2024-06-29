import { Component, EventEmitter, Output, inject, model, output } from '@angular/core';
import { SelectComponent } from '../../../core/components/select/select.component';
import { RepositoryService } from '../../../github/services/repository.service';
import { AsyncPipe } from '@angular/common';
import { GithubRepository } from '../../../github/interfaces/github-repository';

@Component({
  selector: 'app-project-select',
  standalone: true,
  imports: [SelectComponent, AsyncPipe],
  templateUrl: './project-select.component.html',
  styleUrl: './project-select.component.scss'
})
export class ProjectSelectComponent {
  project = model<string>();
  projectService = inject(RepositoryService);
  label = 'Project';
  // @Output() project = new EventEmitter<string>();

  ngOnInit(){
    this.projectService.getAll()
  }

  setProject = (project: string) =>  this.project.set(project)

}
