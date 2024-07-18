import { Component, inject } from '@angular/core';
import { ecrData, ecrForm } from '../../interfaces';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { ResponseBoxComponent } from "../../../core/components/response-box/response-box.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { JsonPipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-ecr-form',
    standalone: true,
    templateUrl: './ecr-form.component.html',
    styleUrl: './ecr-form.component.scss',
    imports: [ReactiveFormsModule, 
      ResponseBoxComponent, 
      MatFormFieldModule, 
      MatInputModule, 
      JsonPipe,
      MatDatepickerModule,
      MatIcon,
    ],
    providers: [provideNativeDateAdapter()],
})
export class EcrFormComponent {
  fb=inject(FormBuilder);
  ecr=ecrData[0];
  ecrForm=ecrForm(this.fb,this.ecr);
  valueCreatedDate = new Date(this.ecr.createdDate);



  get id() {
    return this.ecrForm.get('id');
  }
  get title() {
    return this.ecrForm.get('title');
  }
  get changeSeverity() {
    return this.ecrForm.get('changeSeverity');
  }
  get changePriotity() {
    return this.ecrForm.get('changePriotity');
  }
  get requestNumber() {
    return this.ecrForm.get('requestNumber');
  }
  get requestCode() {
    return this.ecrForm.get('requestCode');
  }
  get description() {
    return this.ecrForm.get('description');
  }
  get solutionRequirements() {
    return this.ecrForm.get('solutionRequirements');
  }
  get creator() {
    return this.ecrForm.get('creator');
  }
  get createdDate() {
    return this.ecrForm.get('createdDate');
  }
  get signature() {
    return this.ecrForm.get('signature');
  }
  get documents() {
    return this.ecrForm.get('documents');
  }

  onClick(){
    console.log(this.ecrForm.value)
  }

}
