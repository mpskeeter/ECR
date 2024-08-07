import { Component, computed, effect, inject, input, model, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { ScrollableComponent,TableComponent } from '../../../core';
import { PullRequestService, GithubPullRequestTableDef } from '../../../github';
import { EcrService } from '../../../ECR';

@Component({
  selector: 'app-pull-request-table',
  standalone: true,
  imports: [
    TableComponent,
    ScrollableComponent,
    JsonPipe,
  ],
  providers: [
    PullRequestService,
    EcrService,
  ],
  templateUrl: './pull-request-table.component.html',
  styleUrl: './pull-request-table.component.scss'
})
export class PullRequestTableComponent implements OnInit{
  columnDef=GithubPullRequestTableDef;
  ecrId=input<number>();
  service=inject(PullRequestService);
  ecrService=inject(EcrService);
  selected=model<string[]>([]);
  prList=computed(() => {
    const prs:string[] =[];
    const ecrs= this.ecrService.items()?.filter(
        (item) => item.id != this.ecrId()
      );
      ecrs?.map((ecr) => prs.push(...ecr.pullRequest));
      return prs;
  });
  prListAvailable=computed(() => 
    this.service.items()?.filter((item) => 
      !this.prList().includes(item.number.toString())
    ) || []
  );

  constructor() {}
  
  ngOnInit() {
    this.service.getForRepository();
    this.ecrService.getAll();
  }
}
