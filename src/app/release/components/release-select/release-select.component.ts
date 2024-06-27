import { Component, inject } from '@angular/core';
import { SelectComponent } from '../../../core/select/select.component';
import {Release} from '../../../core/interfaces/release';
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


  releases: Release[] = [
    // {value: 'steak-0', viewValue: 'Steak'},
    // {value: 'pizza-1', viewValue: 'Pizza'},
    // {value: 'tacos-2', viewValue: 'Tacos'},

    {projectId:1, id: 1, name: 'RC-1'},
    {projectId:2, id: 2, name: 'RC-2'}
  ];

  label = 'Release';

  ngOnInit(){
    this.releaseService.setValue(this.releases);
  }

}
