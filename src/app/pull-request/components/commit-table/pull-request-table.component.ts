import { Component, inject, input, model } from '@angular/core';
import { ScrollableComponent,TableComponent } from '../../../core';
import { JsonPipe } from '@angular/common';
import { PullRequestService, GithubPullRequestTableDef } from '../../../github';

@Component({
  selector: 'app-pull-request-table',
  standalone: true,
  imports: [
    TableComponent,
    ScrollableComponent,
    JsonPipe,
  ],
  templateUrl: './pull-request-table.component.html',
  styleUrl: './pull-request-table.component.scss'
})
export class PullRequestTableComponent {
  columnDef=GithubPullRequestTableDef;
  service=inject(PullRequestService);
  selected=model<string[]>([]);
  // selected=input<string[]>([]);
  constructor(){
    this.service.getForRepository();
  }
}
