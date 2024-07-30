import { Component, computed, effect, inject, input } from '@angular/core';
import { CommitService, IssueService, PullRequestService } from '../../../github';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-ecr-page-impact-capabilities-detail',
  standalone: true,
  imports: [JsonPipe],
  providers:[CommitService, PullRequestService, IssueService],
  templateUrl: './ecr-page-impact-capabilities-detail.component.html',
  styleUrl: './ecr-page-impact-capabilities-detail.component.scss'
})
export class EcrPageImpactCapabilitiesDetailComponent {
  itemNumber=input<number>();
  pr=input<string>('');
  prService=inject(PullRequestService);
  service=inject(CommitService);
  issueService=inject(IssueService);
  mergeCommit=computed(() => this.prService.item()?.merge_commit_sha);
  // issueNumber=computed(() => this.prService.item()?.body.match(/(\d+)/g));
  module=computed(() => {
    const message= this.service.item()?.commit.message;
    // console.log(message);
    const firstChar= (message?.indexOf( "("));
    if(firstChar === undefined || firstChar === -1)
    {
      return message || 'unknown';
    }
    const lastChar= message?.indexOf( ")" ) || message?.length; 
    return message?.substring(firstChar+1, lastChar);

});

constructor() {
  // effect(() => console.log('pr' , this.pr()));
  effect(() =>
    this.pr() !== undefined && this.pr() !== ''
      ? this.prService.getById(this.pr())
      : null
  );
  effect(() => 
    this.mergeCommit() !== undefined && this.mergeCommit() !== ''
    ? this.service.getById(this.mergeCommit() || '')
    : null);
  // effect(() =>
  //   this.prService.item()
  //   ? console.log('prService.item()' , this.prService.item())
  //   : null
  // );
  // effect(() => console.log('issueNumber' , this.issueNumber()));
  // effect(() => 
  //   this.service.item()
  //   ? console.log('service.item()' , this.service.item())
  //   : null
  // );
}
}
