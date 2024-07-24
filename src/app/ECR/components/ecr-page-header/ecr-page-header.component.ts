import { Component, input } from '@angular/core';
import { ResponseBoxComponent } from '../../../core/components/response-box';
import { Ecr } from '../../interfaces';

@Component({
  selector: 'app-ecr-page-header',
  standalone: true,
  imports: [ResponseBoxComponent],
  templateUrl: './ecr-page-header.component.html',
  styleUrl: './ecr-page-header.component.scss'
})
export class EcrPageHeaderComponent {
  ecr=input<Ecr | undefined>({} as Ecr);
  displayLogo=input<boolean>(true);
  title=input<string | null>(null);
}
