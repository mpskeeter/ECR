import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = environment.GITHUB_TOKEN;
  owner = environment.GITHUB_OWNER;

  constructor() { }
}
