import { Component, input } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MultiSelect } from '../../interfaces';

@Component({
  selector: 'app-multi-select',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.scss'
})
export class MultiSelectComponent {
  data=input<MultiSelect[]>([]);
  selection = new FormControl('');
  selectionList: string[] = ['SW/HW Change', 'Data/Data Architecture Change', 'Code/SW Architecture Change'];
}

