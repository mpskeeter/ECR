import { Routes } from '@angular/router';
import { SelectorComponent } from './routes/selector/selector.component';
import { EcrDocComponent, EcrFormComponent } from './ECR';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'selector', component: SelectorComponent },
    { path: 'ecr-edit/:id', component: EcrFormComponent },
    { path: 'ecr-doc/:id', component: EcrDocComponent },
    { path: 'ecr', component: EcrFormComponent },
    { path: '**', redirectTo: 'dashboard' }
];

