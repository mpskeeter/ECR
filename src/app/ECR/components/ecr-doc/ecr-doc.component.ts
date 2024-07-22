import { Component, inject, Input } from '@angular/core';
import { EcrPage1Component } from "../ecr-page-1/ecr-page-1.component";
import { EcrService } from '../../services/ecr.service';
import { JsonPipe } from '@angular/common';
import { EcrPage2Component } from "../ecr-page-2/ecr-page-2.component";
import { EcrPage3Component } from "../ecr-page-3/ecr-page-3.component";
import { EcrPage4Component } from "../ecr-page-4/ecr-page-4.component";

@Component({
  selector: 'app-ecr-doc',
  standalone: true,
  imports: [EcrPage1Component, JsonPipe, EcrPage2Component, EcrPage3Component, EcrPage4Component],
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
