import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Ecr, ecrData, ecrForm } from '../../interfaces';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ResponseBoxComponent } from "../../../core/components/response-box/response-box.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { JsonPipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';
import { EcrService } from '../../services/ecr.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, Subscription, switchMap, takeUntil } from 'rxjs';

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
export class EcrFormComponent implements OnInit, OnDestroy{
  fb=inject(FormBuilder);
  //ecr=ecrData[0];
  ecr$:Observable<Ecr> = new Observable();
  ecrId:number = 0;
  //ecrForm=ecrForm(this.fb,this.ecr);
  ecrForm!: FormGroup<{ title: FormControl<string | null>; changeSeverity: FormControl<string | null>; changePriority: FormControl<number | null>; requestNumber: FormControl<number | null>; requestCode: FormControl<number | null>; description: FormControl<string | null>; solutionRequirements: FormControl<string | null>; creator: FormControl<string | null>; createdDate: FormControl<Date | null>; signature: FormControl<string | null>; documents: FormControl<string | null>; }>;
  valueCreatedDate = new Date();
  service=inject(EcrService);
  route=inject(ActivatedRoute);
  router=inject(Router);
  sub$=new Subject();

  ngOnInit() {
    this.ecr$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.ecrId = Number(params.get('id'));
        return this.service.getById(this.ecrId);
      })
    );


    this.ecr$
      .pipe(
        takeUntil(this.sub$)
      )
      .subscribe({
        next: (ecr) => {
          this.ecrForm = ecrForm(this.fb,ecr); 
          this.valueCreatedDate = new Date(ecr.createdDate);
        },
        error: (error) => console.log(error),
      })
  }

  ngOnDestroy() {
    this.sub$.next(1);
    this.sub$.complete();
  }

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
    let ecr=this.ecrForm.value as unknown as Ecr;
    ecr={...ecr,id:this.ecrId}
    console.log(ecr)
    this.service.save(ecr);
    this.router.navigate(['selector']);
    // console.log(this.ecrForm.value)
  }



}
