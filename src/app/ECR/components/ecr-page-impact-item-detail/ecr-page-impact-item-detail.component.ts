import { Component, effect, inject, input } from '@angular/core';
import { CommitService } from '../../../github';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-ecr-page-impact-item-detail',
  standalone: true,
  imports: [CommonModule],
  providers:[CommitService],
  templateUrl: './ecr-page-impact-item-detail.component.html',
  styleUrl: './ecr-page-impact-item-detail.component.scss'
})
export class EcrPageImpactItemDetailComponent {
  itemNumber=input<number>();
  sha=input<string>('');
  service=inject(CommitService);

  eff = effect(() => this.service.getById(this.sha()))
}
