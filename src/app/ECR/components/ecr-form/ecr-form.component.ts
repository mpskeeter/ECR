import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  OnInit,
  signal
} from '@angular/core';
import { JsonPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { Ecr, ecrForm } from '../../interfaces';
import { EcrService } from '../../services/ecr.service';
import { map } from 'rxjs';
import { ProjectSelectComponent } from "../../../project";
import { PullRequestService, RepositoryService } from '../../../github';
import { AuthService, MultiSelectComponent, SignaturePadComponent } from '../../../core';
import { PullRequestTableComponent } from '../../../pull-request';
import { NewPrComponent } from "../../../pull-request/components/new-pr/new-pr.component";

@Component({
    selector: 'app-ecr-form',
    standalone: true,
    templateUrl: './ecr-form.component.html',
    styleUrl: './ecr-form.component.scss',
    imports: [
    JsonPipe,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIcon,
    MatInputModule,
    MatSelectModule,
    MultiSelectComponent,
    ProjectSelectComponent,
    PullRequestTableComponent,
    ReactiveFormsModule,
    SignaturePadComponent,
    NewPrComponent
],  
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
  // form: FormGroup  = ecrForm(this.fb,this.service.item());
  form = this.fb.group({
    id: new FormControl(0),
    title: new FormControl('',[Validators.required]),
    changeSeverity: new FormControl(''),
    changePriority: new FormControl(0),
    requestNumber: new FormControl(0),
    requestCode: new FormControl([0]),
    description: new FormControl(''),
    solutionRequirements: new FormControl(''),
    creator: new FormControl('',[Validators.required]),
    createdDate: new FormControl(new Date('')),
    signature: new FormControl(''),
    documents: new FormControl(''),
    repository: new FormControl('',[Validators.required]),
    pullRequest: new FormControl(['']),
  });

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
    console.log('ecrForm:constructor');
    this.repositoryService.getAll();
    effect(() => {
      const ecr = {
        ...this.service.item(),
        id: this.service.item()?.id || 0,
        title: this.service.item()?.title || '',
        changeSeverity: this.service.item()?.changeSeverity || '',
        changePriority: this.service.item()?.changePriority || 0,
        requestNumber: this.service.item()?.requestNumber || 0,
        requestCode: this.service.item()?.requestCode || [],
        description: this.service.item()?.description || '',
        solutionRequirements: this.service.item()?.solutionRequirements || '',
        creator: this.service.item()?.creator || '',
        signature: this.service.item()?.signature || '',
        documents: this.service.item()?.documents || '',
        repository: this.service.item()?.repository || '',
        pullRequest: this.service.item()?.pullRequest || [],    
        createdDate: new Date(this.service.item()?.createdDate || ''),
      };
      this.form.setValue(ecr);
    });
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => {
          console.log('params:', params);
          this.ecrId = Number(params.get('id'));
          if (this.ecrId !== 0)
            this.service.getById(this.ecrId);
        })
      )
      .subscribe();

    this.repository?.valueChanges
      .subscribe((value) => {
      // console.log(value);
      this.authService.setRepository(value as string);
      this.pullRequestService.getForRepository();
      });
  }

  ngAfterViewInit() {
    this.authService.setRepository(this.service.item()?.repository || '');
    this.pullRequestService.getForRepository();
  }

  get id() {
    return this.form?.get('id');
  }

  get title() {
    return this.form?.get('title') as FormControl;
  }

  get changeSeverity() {
    return this.form?.get('changeSeverity') as FormControl;
  }

  get changePriotity() {
    return this.form?.get('changePriotity');
  }

  get requestNumber() {
    return this.form?.get('requestNumber') as FormControl;
  }

  get requestCode() {
    return this.form?.get('requestCode') as FormControl;
  }

  get description() {
    return this.form?.get('description') as FormControl;
  }

  get solutionRequirements() {
    return this.form?.get('solutionRequirements') as FormControl;
  }

  get creator() {
    return this.form?.get('creator') as FormControl;
  }

  get createdDate() {
    return this.form?.get('createdDate') as FormControl;
  }

  get documents() {
    return this.form?.get('documents') as FormControl;
  }

  get repository() {
    return this.form.get('repository');
  }

  get pullRequest() {
    return this.form.get('pullRequest') as FormControl;
  }

  get pullRequestValues(): string[] {
    // return (this.ecrForm.value as unknown as Ecr).commits?.map((item) => item.commit) || [];
    return (this.form.value as unknown as Ecr).pullRequest || [];
    // return (this.ecrForm.value as unknown as Ecr).commits || [];
  }

  setPullRequest(values: string[]) {
    console.log(values);
    this.pullRequest.setValue(values);
  }

  onClick(){
    let ecr=(this.form?.value as unknown as Ecr);
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
