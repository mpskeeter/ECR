import {Component, EventEmitter,Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BaseEntity} from '../../interfaces/base-entity';


/**
 * @title Basic select
 */

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {

  @Input() items:BaseEntity[] | null = [];
  @Input() label:string='';
  @Input() initial:string='';
  @Output() value:EventEmitter<string> = new EventEmitter();

}
