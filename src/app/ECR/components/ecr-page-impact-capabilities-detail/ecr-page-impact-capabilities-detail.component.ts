import { Component, effect, inject, input } from '@angular/core';
import { CommitService } from '../../../github';

@Component({
  selector: 'app-ecr-page-impact-capabilities-detail',
  standalone: true,
  imports: [],
  templateUrl: './ecr-page-impact-capabilities-detail.component.html',
  styleUrl: './ecr-page-impact-capabilities-detail.component.scss'
})
export class EcrPageImpactCapabilitiesDetailComponent {
  itemNumber=input<number>();
  sha=input<string>('');
  service=inject(CommitService);

  eff = effect(() => this.service.getById(this.sha()))
}
