import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { SelectComponent } from '../../../core/components/select/select.component';
import { RepositoryService } from '../../../github/services/repository.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-project-select',
  standalone: true,
  imports: [SelectComponent],
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
