import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, WritableSignal, computed, effect, input, signal } from '@angular/core';
import * as d3 from 'd3';
import { ChartData } from '../../interfaces';
import { CommonModule } from '@angular/common';

interface Settings {
  width: number;
  height: number;
  translateWidth?: number;
  translateHeight?: number;
}

//https://blog.logrocket.com/data-visualization-angular-d3-js/
@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarChartComponent {
  data = input<ChartData[]>([]);
  title = input<string>('Barchart');

  width = input<number>(400);
  height = input<number>(350);
  margin = input<number>(50);
  fontSize = input<number>(10);

  @ViewChild("xAxis") gx!: ElementRef;
  @ViewChild("yAxis") gy!: ElementRef;
  @ViewChild("barData") barData!: ElementRef;

  maxHeight = computed(() => this.data().reduce((acc,item) => item.count < acc ? acc : item.count, 0) + 100)

  x = computed(() => d3.scaleBand().range([0, this.width()]).domain(this.data().map(d => d.label)).padding(0.2));
  y = computed(() => d3.scaleLinear().domain([0, this.maxHeight()]).range([this.height(), 0]));

  private drawBarChart = () => {
    // Draw the X-axis on the DOM
    d3.select(this.gx?.nativeElement)
    .call(d3.axisBottom(this.x()))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

    // Draw the Y-axis on the DOM
    d3.select(this.gy?.nativeElement)
      .call(d3.axisLeft(this.y()));
  }

  constructor() {
    effect(() => {
      this.data().length > 0
        ? this.drawBarChart()
        : null;
    });
  }
}
