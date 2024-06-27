import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectSelectComponent } from './project/components/project-select/project-select.component';
import { ReleaseSelectComponent } from './release/components/release-select/release-select.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectSelectComponent, ReleaseSelectComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecr';
}
