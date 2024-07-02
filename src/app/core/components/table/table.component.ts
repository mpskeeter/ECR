import { Component, Input, computed, input } from '@angular/core';
import { BaseEntity } from '../../interfaces/base-entity';
import { ColumnDef } from '../../interfaces/column-def';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  rows=input<BaseEntity[]>([]);
  columns=input<ColumnDef[]>([]);
  displayedColumns=computed(() => this.columns().map((item) => item.column));
  
  getProperty = (obj: any, path: string) => (
    path.split('.').reduce((o, p) => o && o[p], obj)
  )
}
