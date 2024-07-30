import { Component, computed, effect, input, model, output, ViewChild } from '@angular/core';
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
import { ButtonComponent } from '../button';
import { IconComponent } from "../icon/icon.component";

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
    ButtonComponent,
    IconComponent
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
  // selected=model<string[]>(['4be880668e496bfd22fd1b1fdd959d8ffcc85e21','54070e1768bdbc506c68e559e6b8c77bc6cddc33','b19ab97c8a97c51a525def1fa46ba987ef4e26d6']);
  selected=model<Array<string | number>>([]);
  // selected=input<string[]>([]);

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
  };

  selectedRows = computed(() => {
    // console.log('selected:', this.selected());
    let selectedRows;
    const row= this.rows()[0];
    if(row?.hasOwnProperty('name') && row?.name) {
      console.log('checking string');
      selectedRows = this.rows()?.filter((row) => this.selected()?.some((name) => name === row.name || ''));
    } else {
      console.log('checking number');
      console.log('selected:', this.selected());
      console.log('rows:', this.rows());
      selectedRows = this.rows()?.filter((row) => this.selected()?.some((id) => (id as number) === row.id));
    }
    console.log('selectedRows:', selectedRows);
    return selectedRows;
  });

  dataSource = new MatTableDataSource<BaseEntity>(this.rows());
  selection = new SelectionModel<BaseEntity>(true, this.selectedRows());

  getProperty = (obj: any, path: string) => (
    path.split('.').reduce((o, p) => o && o[p], obj)
  )

  constructor() {
    effect(() => {
      this.dataSource.data = this.rows();
    });

    effect(() => {
      // console.log('effect selected()',this.selected());
      this.selection = new SelectionModel<BaseEntity>(true, this.selectedRows());
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
    this.selected.set(this.selection.selected.map((item) => item.name || ''));
  }
}
