import { effect, Injectable, signal } from '@angular/core';
import { Ecr, ecrData } from '../interfaces';
import { BehaviorSubject } from 'rxjs';
import { BaseStateService, MultiSelect } from '../../core';

@Injectable({
  providedIn: 'root'
})
export class EcrService extends BaseStateService<Ecr>{
  signatureHeight=signal<number>(100);
  signatureWidth=signal<number>(450);
  requestCode=signal<MultiSelect[]>([
    {id:1,label:'SQ/HW Change'},
    {id:2,label:'Data/Data Architecture Change'},
    {id:3,label:'Code/SW Architecture Change'}
  ]);
  ecrs=signal<Ecr[]>([
    {
        id:1,
        title:'ECR1',
        changeSeverity:'1',
        changePriority:1,
        requestNumber:1,
        requestCode:[1],
        description:'See individual items from ECR - Evaluation Sheets.',
        solutionRequirements:'',
        creator:'ggg',
        createdDate:'07/17/2024',
        signature:'',
        documents:'',
        repository:'ECR',
        pullRequest:['17','19','20','23'],
        // pullRequest:[],
    },
    {
        id:2,
        title:'ECR2',
        changeSeverity:'1',
        changePriority:1,
        requestNumber:1,
        requestCode:[1,2,3],
        description:'See individual items from ECR - Evaluation Sheets.',
        solutionRequirements:'',
        creator:'Ethan',
        createdDate:'10/31/2024',
        signature:'',
        documents:'',
        repository:'merge-conf',
        pullRequest:['7','8','9'],
        // pullRequest:[],
    },
]);

  constructor() { 
    super();
    effect(() => {
      this.state.update((state) => ({
        ...state,
        items: this.ecrs(),
      }));
    },{allowSignalWrites:true})
  }

  getAll(){
    this.state.update((state) => ({
      ...state,
      items: this.ecrs(),
    }));
  }

  getById(id:number) {
    console.log('ecrService.getById:', id)
    this.state.update((state) => ({
      ...state,
      item: this.ecrs().find((ecr) => ecr.id===id) || {} as Ecr,
      id
    }));
  }

  save(ecr:Ecr) {
    if(ecr.id>0)
    {
      this.ecrs.update((ecrs) => [
        ...ecrs.filter((item) => item.id !== ecr.id),
        ecr
      ]);
    }
    if(ecr.id===0)
    {
      const id= Math.max.apply(null, this.ecrs().map(item => item.id))+1;

      this.ecrs.update((ecrs) => [
        ...ecrs,
        {
          ...ecr,
          id
        } as unknown as Ecr
      ]);
    }
  }

  delete(ecrID:number) {
    this.ecrs.update((ecrs) => ecrs.filter((ecr) => ecr.id !== ecrID));
  }
}
