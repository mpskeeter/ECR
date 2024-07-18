import { Component, computed, effect, input, output } from '@angular/core';
import { BaseEntity } from '../../interfaces/base-entity';
import { ColumnDef } from '../../interfaces/column-def';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatPaginator, MatCheckboxModule, JsonPipe, MatButtonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent { 

  rows=input<BaseEntity[]>([]);
  columns=input<ColumnDef[]>([]);
  displaySelect=input<boolean>(true);
  selected=output<string[]>();
  displayedColumns=computed(() => {
    const values = [
      ...this.columns().map((item) => item.column),
    ];
    if(this.displaySelect())
      values.unshift('select');
    return values;
  });
  dataSource = new MatTableDataSource<BaseEntity>(this.rows());
  selection = new SelectionModel<BaseEntity>(true, []);

  getProperty = (obj: any, path: string) => (
    path.split('.').reduce((o, p) => o && o[p], obj)
  )
  constructor() {
    effect(() => this.dataSource = new MatTableDataSource<BaseEntity>(this.rows()));
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }
  sendSelected(){
    const temp =this.selection.selected.map((item) => item.name || '');
    console.log(temp);
    this.selected.emit(this.selection.selected.map((item) => item.name || ''));
  }
  /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: BaseEntity): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  // }
}
