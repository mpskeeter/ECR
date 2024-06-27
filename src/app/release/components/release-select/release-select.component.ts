import { Component, inject } from '@angular/core';
import { SelectComponent } from '../../../core/select/select.component';
import {Item} from '../../../core/item';
import { ReleaseService } from '../../services/release.service';
import { AsyncPipe } from '@angular/common'; 

@Component({
  selector: 'app-release-select',
  standalone: true,
  imports: [SelectComponent, AsyncPipe],
  templateUrl: './release-select.component.html',
  styleUrl: './release-select.component.scss'
})
export class ReleaseSelectComponent {

  releaseService = inject(ReleaseService);


  releases: Item[] = [
    // {value: 'steak-0', viewValue: 'Steak'},
    // {value: 'pizza-1', viewValue: 'Pizza'},
    // {value: 'tacos-2', viewValue: 'Tacos'},

    {parent:1, value: 1, viewValue: 'RC-1'},
    {parent:2, value: 2, viewValue: 'RC-2'}
  ];

  label = 'Release';

  ngOnInit(){
    this.releaseService.setValue(this.releases);
  }

}
