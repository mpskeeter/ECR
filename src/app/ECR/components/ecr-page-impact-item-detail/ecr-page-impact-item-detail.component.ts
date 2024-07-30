import { Component, effect, inject, input } from '@angular/core';
import { CommitService, PullRequestService } from '../../../github';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-ecr-page-impact-item-detail',
  standalone: true,
  imports: [CommonModule],
  providers:[CommitService,PullRequestService],
  templateUrl: './ecr-page-impact-item-detail.component.html',
  styleUrl: './ecr-page-impact-item-detail.component.scss'
})
export class EcrPageImpactItemDetailComponent {
  itemNumber=input<number>();
  pr=input<string>();
  service=inject(CommitService);
  prService=inject(PullRequestService);

  constructor() {
    effect(() => this.prService.getById(this.pr() || ''));
    effect(() =>  this.service.getById(this.prService.item()?.merge_commit_sha || ''));
  }
}
