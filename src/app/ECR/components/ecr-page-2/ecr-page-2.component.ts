import { Component, input } from '@angular/core';
import { EcrPageHeaderComponent } from '../ecr-page-header';
import { Ecr } from '../../interfaces';

@Component({
  selector: 'app-ecr-page-2',
  standalone: true,
  imports: [EcrPageHeaderComponent],
  templateUrl: './ecr-page-2.component.html',
  styleUrl: './ecr-page-2.component.scss'
})
export class EcrPage2Component {
  ecr=input<Ecr | undefined>({} as Ecr);
}
