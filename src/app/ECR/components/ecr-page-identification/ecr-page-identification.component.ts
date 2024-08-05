import { Component, inject, input } from '@angular/core';
import { EcrPageHeaderComponent } from "../ecr-page-header/ecr-page-header.component";
import { Ecr } from '../../interfaces';
import { EcrPageBlockComponent } from "../ecr-page-block/ecr-page-block.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ecr-page-identification',
  standalone: true,
  imports: [EcrPageHeaderComponent, 
            EcrPageBlockComponent,
            CommonModule],
  templateUrl: './ecr-page-identification.component.html',
  styleUrl: './ecr-page-identification.component.scss'
})
export class EcrPageIdentificationComponent {
  ecr=input<Ecr | undefined>({} as Ecr);
  signatureHeight=input.required<number>();
  signaureWidth=input.required<number>();
  title='SCLIS ECR Identification and Disposition Cover Page'
}
