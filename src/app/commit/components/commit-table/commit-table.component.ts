import { Component, inject } from '@angular/core';
import { GithubCommitTableDef } from '../../../github/interfaces';
import { CommitService } from '../../../github/services/commit.service';
import { ScrollableComponent,TableComponent } from '../../../core';

@Component({
  selector: 'app-commit-table',
  standalone: true,
  imports: [TableComponent, ScrollableComponent],
  templateUrl: './commit-table.component.html',
  styleUrl: './commit-table.component.scss'
})
export class CommitTableComponent {
  columnDef=GithubCommitTableDef;
  service=inject(CommitService);
  selected:string[]=[];
}
