import { Component, inject, input } from '@angular/core';
import { EcrPageHeaderComponent } from '../ecr-page-header';
import { Ecr } from '../../interfaces';
import { EcrPageBlockComponent } from '../ecr-page-block';
import { CommitDetailsService } from '../../../github';

@Component({
  selector: 'app-ecr-page-impact',
  standalone: true,
  imports: [EcrPageHeaderComponent, EcrPageBlockComponent],
  templateUrl: './ecr-page-impact.component.html',
  styleUrl: './ecr-page-impact.component.scss'
})
export class EcrPageImpactComponent {
  ecr=input<Ecr | undefined>({} as Ecr);
  commitService=inject(CommitDetailsService);
  title='SCLIS ECR Impact & Product Information';

  getCommitDetails(sha: string){
    this.commitService.getById(sha);
  }
}
