import { Injectable, computed, signal } from '@angular/core';
import { State } from '../interfaces/state';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  state=signal<State>({});
  
  token = computed(() => this.state().token || environment.github_api);
  user = computed(() => this.state().user || 'ekue2002');
  repository = computed(() => this.state().repository || 'ECR');
  release = computed(() => this.state().release);
  commit = computed(() => this.state().commit);
  branch = computed(() => this.state().branch);

  constructor() { }

  setUser(user:string){
    this.state.update((oldState) => ({
      ...oldState,
      user,
    }));
  }

  setRepository(repository:string){
    this.state.update((oldState) => ({
      ...oldState,
      repository,
    }));
  }

  setRelease(release:string){
    this.state.update((oldState) => ({
      ...oldState,
      release,
    }));
  }

  setCommit(commit:string){
    this.state.update((oldState) => ({
      ...oldState,
      commit,
    }));
  }
  setBranch(branch:string){
    this.state.update((oldState) => ({
      ...oldState,
      branch,
    }));
  }
}

