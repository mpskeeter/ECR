import { Component, inject, input } from '@angular/core';
import { EcrPageHeaderComponent } from "../ecr-page-header/ecr-page-header.component";
import { EcrService } from '../../services/ecr.service';
import { Ecr } from '../../interfaces';

@Component({
  selector: 'app-ecr-page-1',
  standalone: true,
  imports: [EcrPageHeaderComponent],
  templateUrl: './ecr-page-1.component.html',
  styleUrl: './ecr-page-1.component.scss'
})
export class EcrPage1Component {
  ecr=input<Ecr | undefined>({} as Ecr);
}
