/**
Copyright (c) 2018-present, Eaton
 
All rights reserved.
 
This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/
import * as Highcharts from 'highcharts';
export declare const createPieChart: ({ chart, title, subtitle, tooltip, plotOptions, series, legend, colors, ...other }?: Highcharts.Options) => Highcharts.Options;
export declare const createLineChart: ({ chart, title, subtitle, tooltip, plotOptions, series, legend, colors, xAxis, yAxis, ...other }?: Highcharts.Options) => Highcharts.Options;
export declare const createBarChart: ({ chart, title, subtitle, tooltip, plotOptions, series, legend, colors, xAxis, yAxis, ...other }?: Highcharts.Options) => Highcharts.Options;
export declare const createDonutChart: ({ chart, title, subtitle, tooltip, plotOptions, series, legend, colors, ...other }?: Highcharts.Options) => Highcharts.Options;
