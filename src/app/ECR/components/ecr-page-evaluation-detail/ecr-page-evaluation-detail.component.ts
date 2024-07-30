import { Component, computed, effect, inject, input } from '@angular/core';
import { IssueService } from '../../../github';
import { EcrPageBlockComponent } from "../ecr-page-block/ecr-page-block.component";
import { DatePipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-ecr-page-evaluation-detail',
  standalone: true,
  imports: [EcrPageBlockComponent, JsonPipe, DatePipe],
  providers: [IssueService],
  templateUrl: './ecr-page-evaluation-detail.component.html',
  styleUrl: './ecr-page-evaluation-detail.component.scss'
})
export class EcrPageEvaluationDetailComponent {
    issueNumber=input<string>('');
    index=input<number>(0);
    issueService=inject(IssueService);
  
    constructor() {
      effect(() => console.log('issueNumber' , this.issueNumber()));
      effect(() => this.issueService.getById(this.issueNumber()));
      effect(() => this.issueService.item()
        ? console.log(this.issueService.item())
        : null
      );
    }
    
  
  // issueNumber=input<string>('');
  // prService=inject(PullRequestService);
  // index=input<number>(0);
  // issueService=inject(IssueService);

  // constructor() {
  //   console.log(this.prNumber())
  //   effect(() =>
  //     this.prNumber() !== undefined && this.prNumber() !== ''
  //       ? this.prService.getById(this.prNumber())
  //       : null
  //   );
  //   effect(() =>
  //     this.prService.item()
  //     ? console.log('prService.item()' , this.prService.item())
  //     : null
  //   );
  //   effect(() => console.log('issueNumber' , this.issueNumber()));
  //   // this.prService.getById(this.prNumber());
  //   // effect(() => console.log(this.prService.item()));
  // }
  
  // getIssue(issueNumber: string){
  //   this.issueService.getById(issueNumber);
  // }

}
