import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-date-time',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule, MatButtonModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './date-time.component.html',
  styleUrl: './date-time.component.scss'
})
export class DateTimeComponent {

}
