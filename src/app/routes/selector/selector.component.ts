import { Component, effect, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { ProjectSelectComponent } from '../../project';
import { BranchSelectComponent } from '../../branch';
import { CommitSelectComponent } from '../../commit';
import { PullRequestTableComponent } from '../../pull-request';
import { CommitService, IssueService } from '../../github';
import { EcrCardComponent, EcrTableComponent } from "../../ECR";
import { NewPrComponent } from "../../pull-request/components/new-pr/new-pr.component";

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [
    ProjectSelectComponent,
    BranchSelectComponent,
    CommitSelectComponent,
    PullRequestTableComponent,
    EcrTableComponent,
    EcrCardComponent,
    JsonPipe,
    NewPrComponent
],
providers:[IssueService,],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss'
})
export class SelectorComponent {
  issueService=inject(IssueService);
  commitService=inject(CommitService);

  constructor() {
    effect(() =>{
      this.issueService.getForRepository()
      this.commitService.getForRepository()
    });
  }

}
