import { Component, inject } from '@angular/core';
import { EcrTableDef } from '../../interfaces';
import { EcrService } from '../../services/ecr.service';
import { TableComponent, ScrollableComponent, TableAction } from "../../../core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-ecr-table',
  standalone: true,
  imports: [ScrollableComponent, TableComponent],
  templateUrl: './ecr-table.component.html',
  styleUrl: './ecr-table.component.scss'
})
export class EcrTableComponent {
  columnDef=EcrTableDef;
  service=inject(EcrService);
  router=inject(Router);
  selected:string[]=[];
  displaySelect:boolean = false;

  actions:TableAction[] = [
    {
      label:'Edit',
      icon:'edit',
      action: (row) => this.router.navigate(['ecr-edit', row.id])
    },
    {
      label:'Delete',
      icon:'delete',
      action: (row) => this.service.delete(row?.id as number)
    },
    {
      label:'Print',
      icon:'print',
      action: (row) => this.router.navigate(['ecr-doc', row.id])
    }
  ];


  constructor(){
    this.service.getAll();
  }

}
