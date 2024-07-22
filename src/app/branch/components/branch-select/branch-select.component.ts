import { Component, effect, inject } from '@angular/core';
import { SelectComponent } from '../../../core/components/select/select.component';
import { JsonPipe } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { BranchService } from '../../../github/services/branch.service';

@Component({
  selector: 'app-branch-select',
  standalone: true,
  imports: [SelectComponent, JsonPipe],
  templateUrl: './branch-select.component.html',
  styleUrl: './branch-select.component.scss'
})
export class BranchSelectComponent {
  service = inject(BranchService);
  authService= inject(AuthService);

  label='Branch'

  constructor(){
    effect(() => this.service.getForRepository());
  }
}
