import { Component, input } from '@angular/core';
import { EcrPageHeaderComponent } from '../ecr-page-header';
import { Ecr } from '../../interfaces';
import { EcrPageBlockComponent } from '../ecr-page-block';

@Component({
  selector: 'app-ecr-page-evaluation',
  standalone: true,
  imports: [EcrPageHeaderComponent,EcrPageBlockComponent],
  templateUrl: './ecr-page-evaluation.component.html',
  styleUrl: './ecr-page-evaluation.component.scss'
})
export class EcrPageEvaluationComponent {
  ecr=input<Ecr | undefined>({} as Ecr);
  title='SCLIS ECR Evaluation Results';
  issues=[1,2,3];
}
