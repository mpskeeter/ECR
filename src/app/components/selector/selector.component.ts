import { Component, signal } from '@angular/core';
import { ProjectSelectComponent } from '../../project/components/project-select/project-select.component';
import { ReleaseSelectComponent } from '../../release/components/release-select/release-select.component';
import { BranchSelectComponent } from '../../branch/components/branch-select/branch-select.component';
import { CommitSelectComponent } from '../../commit/components/commit-select/commit-select.component';

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [
    ProjectSelectComponent,
    ReleaseSelectComponent,
    BranchSelectComponent,
    CommitSelectComponent,
  ],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss'
})
export class SelectorComponent {
  project = signal<string>('');

  setProject = (project: string) => {
    this.project.update(() => project);
    console.log('project:', this.project());
  }

}
