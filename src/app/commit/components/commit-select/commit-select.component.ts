import { Component, effect, inject, input } from '@angular/core';
import { CommitService } from '../../../github/services/commit.service';
import { SelectComponent } from '../../../core/components/select/select.component';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-commit-select',
  standalone: true,
  imports: [SelectComponent],
  templateUrl: './commit-select.component.html',
  styleUrl: './commit-select.component.scss'
})
export class CommitSelectComponent {

  service = inject(CommitService);
  authService= inject(AuthService);

  label = 'Commit';

  constructor(){
    effect(() => this.service.getForRepository());
  }

}
