import { Component, inject, input } from '@angular/core';
import { EcrPageHeaderComponent } from "../ecr-page-header/ecr-page-header.component";
import { Ecr } from '../../interfaces';
import { EcrPageBlockComponent } from "../ecr-page-block/ecr-page-block.component";

@Component({
  selector: 'app-ecr-page-identification',
  standalone: true,
  imports: [EcrPageHeaderComponent, EcrPageBlockComponent],
  templateUrl: './ecr-page-identification.component.html',
  styleUrl: './ecr-page-identification.component.scss'
})
export class EcrPageIdentificationComponent {
  ecr=input<Ecr | undefined>({} as Ecr);
  title='SCLIS ECR Identification and Disposition Cover Page'
}
