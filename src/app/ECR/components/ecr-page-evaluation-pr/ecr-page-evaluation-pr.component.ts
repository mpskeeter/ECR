import { Component, computed, effect, inject, input } from '@angular/core';
import { IssueService, PullRequestService } from '../../../github';
import { EcrPageEvaluationDetailComponent } from "../ecr-page-evaluation-detail/ecr-page-evaluation-detail.component";
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-ecr-page-evaluation-pr',
  standalone: true,
  imports: [EcrPageEvaluationDetailComponent, JsonPipe],
  providers: [PullRequestService],
  templateUrl: './ecr-page-evaluation-pr.component.html',
  styleUrl: './ecr-page-evaluation-pr.component.scss'
})
export class EcrPageEvaluationPrComponent {
  prNumber=input<string>('');
  prService=inject(PullRequestService);
  issueNumber=computed(() => this.prService.item()?.body?.match(/(\d+)/g))
  
  constructor() {
    console.log(this.prNumber());
    // effect(() => console.log('prNumber:', this.prNumber()));
    effect(() =>
      this.prNumber() !== undefined && this.prNumber() !== ''
        ? this.prService.getById(this.prNumber())
        : null
    );
    // effect(() =>
    //   this.prService.item()
    //   ? console.log('prService.item()' , this.prService.item())
    //   : null
    // );
    // effect(() =>
    //   this.issueNumber()
    //     ? console.log('issueNumber', this.prNumber(), this.issueNumber())
    //     : null
    // );
  }
  
}
