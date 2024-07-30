import { Component, effect, inject } from '@angular/core';
import { ProjectSelectComponent } from '../../project/components/project-select/project-select.component';
import { BranchSelectComponent } from '../../branch/components/branch-select/branch-select.component';
import { ReleaseSelectComponent } from '../../release/components/release-select/release-select.component';
import { CommitSelectComponent } from '../../commit/components/commit-select/commit-select.component';
import { CommitTableComponent } from '../../commit/components/commit-table/commit-table.component';
import { ResponseBoxComponent } from '../../core/components/response-box';
import { TextBoxComponent } from '../../core/components/text-box';
import { DateTimeComponent } from '../../core/components/date-time';
import { EcrTableComponent } from "../../ECR/components/ecr-table/ecr-table.component";
import { EcrCardComponent } from "../../ECR/components/ecr-card/ecr-card.component";
import { CommitService, IssueService } from '../../github';
import { JsonPipe } from '@angular/common';
import { PullRequestTableComponent } from '../../pull-request/components/commit-table';

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [
    ProjectSelectComponent,
    BranchSelectComponent,
    ReleaseSelectComponent,
    CommitSelectComponent,
    PullRequestTableComponent,
    ResponseBoxComponent,
    TextBoxComponent,
    DateTimeComponent,
    EcrTableComponent,
    EcrCardComponent,
    JsonPipe
],
providers:[IssueService,],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss'
})
export class SelectorComponent {
  issueService=inject(IssueService);
  commitService=inject(CommitService);

  eff= effect(() =>{
    this.issueService.getForRepository()
    this.commitService.getForRepository()
  });
}
