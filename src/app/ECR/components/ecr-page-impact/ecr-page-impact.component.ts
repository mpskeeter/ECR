import { Component, effect, inject, input, untracked } from '@angular/core';
import { EcrPageHeaderComponent } from '../ecr-page-header';
import { Ecr } from '../../interfaces';
import { EcrPageBlockComponent } from '../ecr-page-block';
import { CommitDetailsService, CommitService } from '../../../github';
import { CommonModule, JsonPipe } from '@angular/common';
import { AuthService } from '../../../core';
import { EcrPageImpactItemDetailComponent } from '../ecr-page-impact-item-detail/ecr-page-impact-item-detail.component';

@Component({
  selector: 'app-ecr-page-impact',
  standalone: true,
  imports: [EcrPageHeaderComponent, 
            EcrPageBlockComponent, 
            JsonPipe, 
            EcrPageImpactItemDetailComponent,
            CommonModule,
            ],
  // providers:[CommitService],
  templateUrl: './ecr-page-impact.component.html',
  styleUrl: './ecr-page-impact.component.scss'
})
export class EcrPageImpactComponent {
  ecr=input<Ecr | undefined>({} as Ecr);
  // commitService=inject(CommitService);
  authService=inject(AuthService);
  title='SCLIS ECR Impact & Product Information';

  // eff = untracked(() => this.authService.setRepository(this.ecr()?.repository || ''));


  getCommitDetails(id: string){
    // this.commitService.getById(id);
    // return this.commitService.item();
  }
}
