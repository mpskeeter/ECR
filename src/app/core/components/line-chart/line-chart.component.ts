import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  computed,
  Component,
  ElementRef,
  input,
  signal,
  ViewChild,
  WritableSignal,
  effect,
} from '@angular/core';
import * as d3 from 'd3';
import { LineChartData } from '../../interfaces';

//https://blog.logrocket.com/data-visualization-angular-d3-js/
@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineChartComponent {
  data = input.required<LineChartData[]>();
  title = input<string>('Line Chart');
  width = input<number>(800);
  height = input<number>(350);      
  margin = input<{top: number, right: number, bottom: number, left: number}>({top: 10, bottom: 30, left: 30, right: 60});
  displayTooltip = input<boolean>(true);
  color = input<string>('steelblue');
  fontSize = input<number>(10);
  xTimeStep = input<number>(1);
  xFormat = input<string | ((date: Date) => string)>('%b %Y');

  @ViewChild("xAxis") gx!: ElementRef;
  @ViewChild("yAxis") gy!: ElementRef;
  @ViewChild("lineData") lineData!: ElementRef;
  @ViewChild("tooltip") tooltip!: ElementRef;
  @ViewChild("tooltipDate") tooltipDate!: ElementRef;
  @ViewChild("tooltipValue") tooltipValue!: ElementRef;
  @ViewChild("mouse") mouse!: ElementRef;

  // create tooltip div
  tooltipElement: any = null;

  circlePosition: WritableSignal<{x: number, y: number}> = signal<any>({x: 0, y: 0});
  chartWidth = computed(() => this.width() - this.margin().left - this.margin().right)
  chartHeight = computed(() => this.height() - this.margin().top - this.margin().bottom)
  private min = signal(0);

  public x = computed(() => d3.scaleTime().range([0, this.chartWidth()]));
  public y = computed(() => d3.scaleLinear().range([this.chartHeight(), 0]));
  getDate = (date: string) => new Date(date).getTime();

  yData = () => (d3.max(this.data(), d => d.value) as number);

  xTicks = (slice: number) => this.x()?.ticks().slice(slice);
  yTicks = (slice: number) => this.y()?.ticks((this.yData() - this.min()) / this.yStep).slice(slice)

  private yStep = 10;

  // DO NOT DELETE
  // This tooltip is drawn in the div
  drawTooltip = (data: LineChartData[]): void => {
    // create tooltip div
    if (!this.tooltipElement)
      this.tooltipElement = d3.select(this.tooltip?.nativeElement).selectAll("div.tooltip")
        .data([true])
        .enter()
        .append("div")
        .attr("class", "tooltip")
        .style("pointer-events", "none")
      ;

    const mousemove = (e: MouseEvent) => {
      const [xCoord] = d3.pointer(e);
      const bisectDate = d3.bisector((d: any) => new Date(d.date)).left;
      const x0 = this.x().invert(xCoord);
      const i = bisectDate(data, x0, 1);
      const d0 = data[i - 1];
      const d1 = data[i];
      const d = (x0?.getTime() - this.getDate(d0?.date)) > (this.getDate(d1?.date) - x0?.getTime()) ? d1 : d0;

      this.circlePosition.set({x: this.x()(new Date(d?.date)), y: this.y()(d?.value)});

      // add in  our tooltip
      this.tooltipElement
        // .style("display", "block")
        .style("visibility", "visible")
        .style("position", "relative")
        .style("background-color", this.color())
        .style("border", "1px solid white")
        .style("border-radius", "10px")      
        .style("width", "140px")
        .style("padding", "10px")
        .style("left", `${this.circlePosition().x + 100}px`)
        .style("top", `${this.circlePosition().y + 50}px`)
        .html(`Date: ${new Date(d.date).toLocaleDateString()}<br>Value: ${d.value !== undefined ? d.value : 'Unknown'}`)
    }

    // append the rectangle to capture mouse
    d3.select(this.mouse?.nativeElement)
        .on("mouseover", () => this.tooltipElement.style("visibility", "visible"))
        .on("mouseout", () => this.tooltipElement.style("visibility", "hidden"))
        .on("mouseleave", () => this.tooltipElement.style("visibility", "hidden"))
        .on("mousemove", mousemove);
  };

  drawAxes = (data: LineChartData[]) => {
    if (data && this.gx && this.gy) {
      d3.select(this.gx?.nativeElement)
        .call(
          d3.axisBottom(this.x())
            .tickValues(this.x().ticks(d3.timeDay.every(this.xTimeStep()) as d3.TimeInterval)) 
            .tickFormat((date) => 
              this.xTimeStep() !== 1
                ? d3.timeFormat(this.xFormat() as string)(date as Date)
                : d3.timeYear(date as Date) < date
                  ? d3.timeFormat('%b %d')(date as Date)
                  : d3.timeFormat('%Y')(date as Date)
            )
        )
        .call((g: any) => g.select(".domain").remove()) 
        .selectAll(".tick line") 
        .style("stroke-opacity", 0);
      ;
  
      d3.select(this.gy?.nativeElement)
        .call(
          d3.axisLeft(this.y())
            .ticks(((d3.max(this.data(), d => d.value as number) || 0) - this.min()) / this.yStep)
            .tickSize(0)
            .tickPadding(10)
        )
        .call((g: any) => g.select(".domain").remove()) 
        .selectAll(".tick text")
        .style("fill", "#777")
      ;
    }
  };

  drawData = (data: LineChartData[]) => {
    // Create the line generator
    const line = d3.line<LineChartData>()
      .x(d => this.x()(new Date(d?.date)))
      .y(d => this.y()(d.value));

    // Clear all existing paths in the SVG element
    d3.select(this.lineData?.nativeElement)
      .selectAll("path")
      .remove();

    // Add the line path to the SVG element
    d3.select(this.lineData?.nativeElement)  
      .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", this.color())
        .attr("stroke-width", 1)
        .attr("d", line);

  };

  constructor() {
    effect(() => {
      // Define the x and y domains
      this.x().domain(d3.extent(this.data(), d => new Date(d.date)) as Date[]);
      this.y().domain([this.min(), d3.max(this.data(), d => d.value as number) || 0]);

      this.drawAxes(this.data());
      this.drawData(this.data());
      this.drawTooltip(this.data());
    });
  }
}
