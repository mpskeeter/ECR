import { Injectable, signal } from '@angular/core';
import { Ecr, ecrData } from '../interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcrService {

  ecrs=signal<Ecr[]>(ecrData);

  items = new BehaviorSubject<Ecr[]>([]);
  items$ = this.items.asObservable();
  item = new BehaviorSubject<Ecr>({} as Ecr);
  item$ = this.item.asObservable();

  constructor() { }

  getAll(){
    this.items.next(this.ecrs());
  }
  getById(id:number){
    this.item.next(this.ecrs().find((ecr) => ecr.id===id) || {} as Ecr);
    return this.item$;
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
    console.log('ecrservice:delete:', ecrID);
    this.items.next(this.ecrs());
  }

}
