import { Component, computed, effect, input, output, ViewChild } from '@angular/core';
import { BaseEntity } from '../../interfaces/base-entity';
import { ColumnDef } from '../../interfaces/column-def';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { TableAction } from '../../interfaces';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginator,
    MatCheckboxModule,
    JsonPipe,
    MatButtonModule,
    MatSortModule,
    MatIcon,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent { 

  rows=input<BaseEntity[]>([]);
  columns=input<ColumnDef[]>([]);
  displaySelect=input<boolean>(true);
  allowSort=input<boolean>(true);
  allowPagination=input<boolean>(true);
  actions=input<TableAction[]>([]);
  selected=output<string[]>();

  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator: MatPaginator | any = {};

  displayedColumns=computed(() => {
    const values = [
      ...this.columns().map((item) => item.column),
    ];
    if(this.displaySelect())
      values.unshift('select');
    if(this.actions().length>0) {
      values.push('actions');
    }
    return values;
  });

  pathDataAccessor = (item: any, path: string): any => {
    return path.split('.')
      .reduce((accumulator: any, key: string) => {
        const value = accumulator ? accumulator[key] : undefined;
        return typeof value === 'string'
          ? value.toLocaleLowerCase()
          : value;
      }, item);
  }

  dataSource = new MatTableDataSource<BaseEntity>(this.rows());
  selection = new SelectionModel<BaseEntity>(true, []);

  getProperty = (obj: any, path: string) => (
    path.split('.').reduce((o, p) => o && o[p], obj)
  )

  constructor() {
    effect(() => {
      this.dataSource.data = this.rows();
    });

    effect(() => {
      if(this.allowSort()) {
      this.dataSource.sortingDataAccessor = this.pathDataAccessor;
      this.dataSource.sort = this.sort;
      }
    });

    effect(() => {
      if(this.allowPagination()) {
        this.dataSource.paginator = this.paginator;
      }
    });
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
