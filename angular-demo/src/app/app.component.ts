import {Component, OnInit} from '@angular/core';
import { Chart } from 'angular-highcharts';

import {
  createLineChart,
  createBarChart,
  createPieChart,
  createDonutChart
} from '@pxblue/highcharts';
import * as PXBColors from '@pxblue/colors';

const mainConfig = {
  colors: [PXBColors.blue[900], PXBColors.blue[500], PXBColors.blue[200]]
};

const lineConfig = {
  colors: [PXBColors.blue[500], PXBColors.blue[200], PXBColors.blue[200]]
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  line: Chart;
  pie: Chart;
  donut: Chart;
  bar: Chart;

  ngOnInit() {
    this.init();
  }

  init() {
    let piechart = new Chart(createPieChart());
      this.pie = piechart;
    let donutchart = new Chart(createDonutChart(mainConfig));
      this.donut = donutchart;
    let linechart = new Chart(createLineChart(lineConfig));
      this.line = linechart;
    let barchart = new Chart(createBarChart(mainConfig));
      this.bar = barchart;
  }
}
