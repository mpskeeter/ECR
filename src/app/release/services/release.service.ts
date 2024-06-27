import { Injectable } from '@angular/core';
import { Release } from '../../core/interfaces/release';
import { BaseCrudService } from '../../core/services/base-crud.service';

@Injectable({
  providedIn: 'root'
})
export class ReleaseService extends BaseCrudService <Release> {

  constructor() { super() }
}
