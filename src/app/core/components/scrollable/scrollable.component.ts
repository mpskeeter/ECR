import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scrollable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scrollable.component.html',
  styleUrl: './scrollable.component.scss'
})
export class ScrollableComponent {
  height=input<number>(400);
}
