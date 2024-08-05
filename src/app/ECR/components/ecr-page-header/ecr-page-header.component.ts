import { Component, inject, input } from '@angular/core';
import { ResponseBoxComponent } from '../../../core/components/response-box';
import { Ecr } from '../../interfaces';
import { JsonPipe } from '@angular/common';
import { EcrService } from '../../services/ecr.service';

@Component({
  selector: 'app-ecr-page-header',
  standalone: true,
  imports: [ResponseBoxComponent, JsonPipe],
  templateUrl: './ecr-page-header.component.html',
  styleUrl: './ecr-page-header.component.scss'
})
export class EcrPageHeaderComponent {
  ecr=input<Ecr | undefined>({} as Ecr);
  displayLogo=input<boolean>(true);
  title=input<string | null>(null);

  service=inject(EcrService);

  requestCodeString () {
    return this.service.requestCode()
      .filter((rc) => this.ecr()?.requestCode?.some((item) => rc.id===item))
      .map((item) => item.label)
      .join(',');
  }
}
