import { Routes } from '@angular/router';
import { SelectorComponent } from './routes/selector/selector.component';
import { EcrFormComponent } from './ECR/components/ecr-form';
import { EcrDocComponent } from './ECR';

export const routes: Routes = [
    { path: 'selector', component: SelectorComponent },
    { path: 'ecr', component: EcrFormComponent },
    { path: 'ecr-edit/:id', component: EcrFormComponent },
    { path: 'ecr-doc/:id', component: EcrDocComponent },
];

