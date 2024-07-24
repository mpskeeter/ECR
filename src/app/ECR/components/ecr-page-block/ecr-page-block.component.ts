import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-ecr-page-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ecr-page-block.component.html',
  styleUrl: './ecr-page-block.component.scss'
})
export class EcrPageBlockComponent {
  label=input<string>('');
  content=input<string>('');
  height=input<number>(100);
  labelBackgroundColor=input<string>('transparent');
  contentBackgroundColor=input<string>('transparent');
  labelCenter=input<boolean>(false);


}
