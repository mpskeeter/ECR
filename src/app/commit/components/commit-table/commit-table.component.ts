import { Component, inject } from '@angular/core';
import { GithubCommitTableDef } from '../../../github/interfaces';
import { CommitService } from '../../../github/services/commit.service';
import { TableComponent } from '../../../core/components/table/table.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-commit-table',
  standalone: true,
  imports: [TableComponent, AsyncPipe],
  templateUrl: './commit-table.component.html',
  styleUrl: './commit-table.component.scss'
})
export class CommitTableComponent {
  columnDef=GithubCommitTableDef;
  service=inject(CommitService);
}
