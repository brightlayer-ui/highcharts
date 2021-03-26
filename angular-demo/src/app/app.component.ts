/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

import { createLineChart, createBarChart, createPieChart, createDonutChart } from '@pxblue/highcharts';
import * as PXBColors from '@pxblue/colors';

const mainConfig = {
    colors: [PXBColors.blue[900], PXBColors.blue[500], PXBColors.blue[200]],
};

const lineConfig = {
    colors: [PXBColors.blue[500], PXBColors.blue[200], PXBColors.blue[200]],
};

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
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
        const piechart = new Chart(createPieChart());
        this.pie = piechart;
        const donutchart = new Chart(createDonutChart(mainConfig));
        this.donut = donutchart;
        const linechart = new Chart(createLineChart(lineConfig));
        this.line = linechart;
        const barchart = new Chart(createBarChart(mainConfig));
        this.bar = barchart;
    }
}
