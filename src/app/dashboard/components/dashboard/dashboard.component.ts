import { Component, effect, inject } from '@angular/core';
import { EcrTableComponent } from "../../../ECR";
import { BarChartComponent } from '../../../core/components/bar-chart';
import { ProjectSelectComponent } from '../../../project';
import { CommitService } from '../../../github';
import { JsonPipe } from '@angular/common';
import { LineChartComponent } from "../../../core/components/line-chart/line-chart.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    EcrTableComponent,
    BarChartComponent,
    ProjectSelectComponent,
    JsonPipe,
    LineChartComponent
],
  providers: [
    CommitService,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  commitService=inject(CommitService);

  constructor(){
    effect(() => this.commitService.authService.repository() ? this.commitService.getForRepository() : null);
  }
}
