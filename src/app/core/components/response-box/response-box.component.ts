import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-response-box',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './response-box.component.html',
  styleUrl: './response-box.component.scss'
})
export class ResponseBoxComponent {
  @Input() label:string='';
  @Input() item:FormControl= new FormControl('');

}
