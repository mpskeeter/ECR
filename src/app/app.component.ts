import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectSelectComponent } from './project/components/project-select/project-select.component';
import { ReleaseSelectComponent } from './release/components/release-select/release-select.component';
import { CommitSelectComponent } from './commit/components/commit-select/commit-select.component';
import { AuthService } from './core/services/auth.service';
import { BranchSelectComponent } from './branch/components/branch-select/branch-select.component';
import { CommitTableComponent } from './commit/components/commit-table/commit-table.component';
import { DashboardPageComponent } from "./dashboard-page/dashboard-page.component";
import { SidenavComponent } from "./dashboard/components/sidenav/sidenav.component";
import { ResponseBoxComponent } from './core/components/response-box';
import { DateTimeComponent } from './core/components/date-time';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterOutlet,
        ProjectSelectComponent,
        ReleaseSelectComponent,
        CommitSelectComponent,
        BranchSelectComponent,
        CommitTableComponent,
        DashboardPageComponent,
        SidenavComponent,
        ResponseBoxComponent,
        DateTimeComponent
    ]
})
export class AppComponent {
  title = 'ecr';

  authService=inject(AuthService);
  

  project='proj1';

}
