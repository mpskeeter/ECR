import { Component, input } from '@angular/core';
import { Ecr } from '../../interfaces';
import { EcrPageHeaderComponent } from '../ecr-page-header';
import { EcrPageBlockComponent } from '../ecr-page-block';

@Component({
  selector: 'app-ecr-page-recommendation',
  standalone: true,
  imports: [EcrPageHeaderComponent, EcrPageBlockComponent],
  templateUrl: './ecr-page-recommendation.component.html',
  styleUrl: './ecr-page-recommendation.component.scss'
})
export class EcrPageRecommendationComponent {
  ecr=input<Ecr | undefined>({} as Ecr);
  recommendations=[1,2,3,4]
}
