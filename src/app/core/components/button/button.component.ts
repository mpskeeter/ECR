import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatIcon, MatButtonModule, IconComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  text=input<string | null>(null);
  icon=input<string | null>(null);
  ariaLabel=input<string>('');

  click=output<boolean>();
}
