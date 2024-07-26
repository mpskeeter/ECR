import { Component, inject, Input } from '@angular/core';
import { EcrService } from '../../services/ecr.service';
import { JsonPipe } from '@angular/common';
import { EcrPageIdentificationComponent } from "../ecr-page-identification";
import { EcrPageImpactComponent } from "../ecr-page-impact/ecr-page-impact.component";
import { EcrPageEvaluationComponent } from "../ecr-page-evaluation/ecr-page-evaluation.component";
import { EcrPageRecommendationComponent } from "../ecr-page-recommendation";

@Component({
  selector: 'app-ecr-doc',
  standalone: true,
  imports: [
    JsonPipe,
    EcrPageIdentificationComponent,
    EcrPageImpactComponent,
    EcrPageEvaluationComponent,
    EcrPageRecommendationComponent,
  ],
  templateUrl: './ecr-doc.component.html',
  styleUrl: './ecr-doc.component.scss'
})
export class EcrDocComponent {
  @Input()
  set id(ecrId: string) {
    this.service.getById(+ecrId);
  }
  service=inject(EcrService);


}
