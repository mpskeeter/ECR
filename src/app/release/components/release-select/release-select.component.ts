import { Component, Input, OnChanges, SimpleChanges, effect, inject, input } from '@angular/core';
import { SelectComponent } from '../../../core/components/select/select.component';
import { ReleaseService } from '../../../github/services/release.service';
import { AsyncPipe } from '@angular/common'; 

@Component({
  selector: 'app-release-select',
  standalone: true,
  imports: [SelectComponent, AsyncPipe],
  templateUrl: './release-select.component.html',
  styleUrl: './release-select.component.scss'
})
export class ReleaseSelectComponent {
  project = input<string>();
  releaseService = inject(ReleaseService);
  label = 'Release';

  constructor() {
    effect(() => {
      if (this.project() !== undefined)
        this.releaseService.getAllForRepository(this.project())
    });
  }
}
