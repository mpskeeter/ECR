import { Component, inject, input } from '@angular/core';
import { EcrPageHeaderComponent } from '../ecr-page-header';
import { Ecr } from '../../interfaces';
import { EcrPageBlockComponent } from '../ecr-page-block';
import { IssueService, PullRequestService } from '../../../github';
import { JsonPipe } from '@angular/common';
import { EcrPageEvaluationPrComponent } from '../ecr-page-evaluation-pr';

@Component({
  selector: 'app-ecr-page-evaluation',
  standalone: true,
  imports: [EcrPageHeaderComponent, 
            EcrPageBlockComponent, 
            JsonPipe, 
            EcrPageEvaluationPrComponent],
  templateUrl: './ecr-page-evaluation.component.html',
  styleUrl: './ecr-page-evaluation.component.scss'
})
export class EcrPageEvaluationComponent {
  ecr=input<Ecr | undefined>({} as Ecr);
  title='SCLIS ECR Evaluation Results';
  issues=[1,2,3];
  issueService=inject(IssueService);

  // getPr(prNumber:string){
  //   this.pullRequestService.getById(prNumber);
  //   return this.pullRequestService.item();
  // }
}
