import { AfterViewInit, ChangeDetectionStrategy, Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { Ecr, ecrData, ecrForm } from '../../interfaces';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ResponseBoxComponent } from "../../../core/components/response-box/response-box.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';
import { EcrService } from '../../services/ecr.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, Subject, Subscription, switchMap, takeUntil } from 'rxjs';
import { CommitTableComponent } from "../../../commit/components/commit-table/commit-table.component";
import { ProjectSelectComponent } from "../../../project/components/project-select/project-select.component";
import { MatSelectModule } from '@angular/material/select';
import { PullRequestService, RepositoryService } from '../../../github';
import { AuthService } from '../../../core';
import { PullRequestTableComponent } from '../../../pull-request/components/commit-table';
import { SignaturePadComponent } from "../../../core/components/signature-pad/signature-pad.component";
import { MultiSelectComponent } from "../../../core/components/multi-select/multi-select.component";

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
    PullRequestTableComponent,
    ProjectSelectComponent,
    MatSelectModule,
    AsyncPipe,
    SignaturePadComponent, 
    MultiSelectComponent],
    
    providers: [provideNativeDateAdapter()],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EcrFormComponent implements OnInit, AfterViewInit {
  fb=inject(FormBuilder);
  service=inject(EcrService);
  route=inject(ActivatedRoute);
  router=inject(Router);
  repositoryService=inject(RepositoryService);
  authService=inject(AuthService);
  pullRequestService=inject(PullRequestService);

  ecrId:number = 0;
  ecrForm=ecrForm(this.fb,this.service.item());
  valueCreatedDate = new Date();

  pullRequestVal = signal<string[]>(this.service.item()?.pullRequest || []);
  get signature() {
    return this.service.item()?.signature;
  }
  
  set signature(value) {
    this.service.state.update((state) => ({
      ...state,
      item: {
      ...state.item,
      signature: value || '',
      } as Ecr,
    }));
  }
  constructor() {
    this.repositoryService.getAll();
    // effect(() => this.ecrForm=ecrForm(this.fb,this.service.item()));
    // effect(() => console.log(this.service.state()))
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => {
        this.ecrId = Number(params.get('id'));
        this.service.getById(this.ecrId);
        this.ecrForm=ecrForm(this.fb,this.service.item());
      })
    )
    .subscribe();
    this.repository?.valueChanges.subscribe((value) => {
      // console.log(value);
      this.authService.setRepository(value as string);
      this.pullRequestService.getForRepository();
    });
    // this.ecrForm.get('creator')?.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

  }

  ngAfterViewInit() {
    this.authService.setRepository(this.service.item()?.repository || '');
    this.pullRequestService.getForRepository();
  }

  get id() {
    return this.ecrForm.get('id');
  }
  get title() {
    return this.ecrForm.get('title') as FormControl;
  }
  get changeSeverity() {
    return this.ecrForm.get('changeSeverity') as FormControl;
  }
  get changePriotity() {
    return this.ecrForm.get('changePriotity');
  }
  get requestNumber() {
    return this.ecrForm.get('requestNumber') as FormControl;
  }
  get requestCode() {
    return this.ecrForm.get('requestCode') as FormControl;
  }
  get description() {
    return this.ecrForm.get('description') as FormControl;
  }
  get solutionRequirements() {
    return this.ecrForm.get('solutionRequirements') as FormControl;
  }
  get creator() {
    return this.ecrForm.get('creator') as FormControl;
  }
  get createdDate() {
    return this.ecrForm.get('createdDate') as FormControl;
  }
  // get signature() {
  //   return this.ecrForm.get('signature') as FormControl;
  // }
  get documents() {
    return this.ecrForm.get('documents') as FormControl;
  }
  get repository() {
    return this.ecrForm.get('repository');
  }

  get pullRequest() {
    return this.ecrForm.get('pullRequest') as FormControl;
  }

  get pullRequestValues(): string[] {
    // return (this.ecrForm.value as unknown as Ecr).commits?.map((item) => item.commit) || [];
    return (this.ecrForm.value as unknown as Ecr).pullRequest || [];
    // return (this.ecrForm.value as unknown as Ecr).commits || [];
  }
  setPullRequest(values: string[]) {
    console.log(values);
    this.pullRequest.setValue(values);
  }

  onClick(){
    let ecr=(this.ecrForm.value as unknown as Ecr);
    ecr={
      ...ecr,
      id:this.ecrId,
      signature: this.signature || '',
    };
    console.log(ecr);
    this.service.save(ecr);
    this.router.navigate(['dashboard']);
  }
}
