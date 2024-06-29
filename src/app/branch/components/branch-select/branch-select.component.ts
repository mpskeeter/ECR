import { Component, effect, inject, input } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BranchService } from '../../../github/services/branch.service';
import { SelectComponent } from '../../../core/components/select/select.component';

@Component({
  selector: 'app-branch-select',
  standalone: true,
  imports: [
    AsyncPipe,
    SelectComponent,
  ],
  templateUrl: './branch-select.component.html',
  styleUrl: './branch-select.component.scss'
})
export class BranchSelectComponent {
  project = input<string>();
  branchService = inject(BranchService);
  label = 'Branch';

  constructor() {
    effect(() => {
      if (this.project() !== undefined)
        this.branchService.getAllForRepository(this.project())
    });
  }
}
