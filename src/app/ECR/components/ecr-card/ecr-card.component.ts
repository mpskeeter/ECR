import { Component, inject } from '@angular/core';
import { CardComponent } from "../../../core/components/card/card.component";
import { EcrService } from '../../services/ecr.service';
import { MatIcon } from '@angular/material/icon';
import { TableAction } from '../../../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ecr-card',
  standalone: true,
  imports: [CardComponent, MatIcon],
  templateUrl: './ecr-card.component.html',
  styleUrl: './ecr-card.component.scss'
})
export class EcrCardComponent {
  service=inject(EcrService);
  router=inject(Router);

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
}
