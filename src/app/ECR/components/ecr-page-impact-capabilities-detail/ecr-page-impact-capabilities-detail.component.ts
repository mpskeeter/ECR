import { Component, computed, effect, inject, input } from '@angular/core';
import { CommitService } from '../../../github';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-ecr-page-impact-capabilities-detail',
  standalone: true,
  imports: [JsonPipe],
  providers:[CommitService],
  templateUrl: './ecr-page-impact-capabilities-detail.component.html',
  styleUrl: './ecr-page-impact-capabilities-detail.component.scss'
})
export class EcrPageImpactCapabilitiesDetailComponent {
  itemNumber=input<number>();
  sha=input<string>('');
  service=inject(CommitService);
  module=computed(() => {
    const message= this.service.item()?.commit.message;
    console.log(message);
    const firstChar= (message?.indexOf( "(") || 0) +1; 
    const lastChar= message?.indexOf( ")" ) || message?.length; 
    return message?.substring(firstChar, lastChar);

});


  eff = effect(() => this.service.getById(this.sha()))
}
