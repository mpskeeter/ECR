import { Component, input } from '@angular/core';
import { EcrPageHeaderComponent } from '../ecr-page-header';
import { Ecr } from '../../interfaces';

@Component({
  selector: 'app-ecr-page-3',
  standalone: true,
  imports: [EcrPageHeaderComponent],
  templateUrl: './ecr-page-3.component.html',
  styleUrl: './ecr-page-3.component.scss'
})
export class EcrPage3Component {
  ecr=input<Ecr | undefined>({} as Ecr);
}
