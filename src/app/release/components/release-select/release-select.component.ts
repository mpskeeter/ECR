import { Component, Input, effect, inject, input } from '@angular/core';
import { SelectComponent } from '../../../core/components/select/select.component';
import { ReleaseService } from '../../../github/services/release.service';
import { AsyncPipe } from '@angular/common'; 
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-release-select',
  standalone: true,
  imports: [SelectComponent, AsyncPipe],
  templateUrl: './release-select.component.html',
  styleUrl: './release-select.component.scss'
})
export class ReleaseSelectComponent {

  releaseService = inject(ReleaseService);
  authService = inject(AuthService);

  label = 'Release';

  constructor(){
    effect(() => this.releaseService.getForRepository());
  }

}
