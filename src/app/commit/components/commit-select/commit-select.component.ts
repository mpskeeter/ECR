import { AsyncPipe } from '@angular/common';
import { Component, effect, inject, input } from '@angular/core';
import { SelectComponent } from '../../../core/components/select/select.component';
import { CommitService } from '../../../github/services/commit.service';

@Component({
  selector: 'app-commit-select',
  standalone: true,
  imports: [
    AsyncPipe,
    SelectComponent,
  ],
  templateUrl: './commit-select.component.html',
  styleUrl: './commit-select.component.scss'
})
export class CommitSelectComponent {
  project = input<string>();
  commitService = inject(CommitService);
  label = 'Commit';

  constructor() {
    effect(() => {
      if (this.project() !== undefined)
        this.commitService.getAllForRepository(this.project())
    });
  }

}
