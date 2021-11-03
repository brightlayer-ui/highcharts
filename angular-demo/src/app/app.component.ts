/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

import { createLineChart, createBarChart, createPieChart, createDonutChart } from '@brightlayer-ui/highcharts';
import * as BLUIColors from '@brightlayer-ui/colors';

const mainConfig = {
    colors: [BLUIColors.blue[900], BLUIColors.blue[500], BLUIColors.blue[200]],
};

const lineConfig = {
    colors: [BLUIColors.blue[500], BLUIColors.blue[200], BLUIColors.blue[200]],
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
