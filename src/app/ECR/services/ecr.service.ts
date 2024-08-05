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
  ecrs=signal<Ecr[]>(ecrData);

  // items = new BehaviorSubject<Ecr[]>([]);
  // items$ = this.items.asObservable();
  // item = new BehaviorSubject<Ecr>({} as Ecr);
  // item$ = this.item.asObservable();

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
  getById(id:number){
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
    // this.items.next(this.ecrs());
  }

}
