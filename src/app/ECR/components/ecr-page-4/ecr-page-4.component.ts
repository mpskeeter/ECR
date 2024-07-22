import { Component, input } from '@angular/core';
import { Ecr } from '../../interfaces';
import { EcrPageHeaderComponent } from '../ecr-page-header';

@Component({
  selector: 'app-ecr-page-4',
  standalone: true,
  imports: [EcrPageHeaderComponent],
  templateUrl: './ecr-page-4.component.html',
  styleUrl: './ecr-page-4.component.scss'
})
export class EcrPage4Component {
  ecr=input<Ecr | undefined>({} as Ecr);
}
