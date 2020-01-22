/**
Copyright (c) 2018-present, Eaton
 
All rights reserved.
 
This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

/*
  This file contains generator functions for line, bar (column), pie, and donut charts.
  These functions take a single options object, which can include any data supported by Highcharts 
  (see https://api.highcharts.com/highcharts/ for detailed API). These functions simply wrap the native creation and inject
  sample data to ensure the charts will render even when no config is supplied.
*/

import { OpenSans, pxblueColors, sizes } from './styles';

import { getRandomData, sharedTooltipFormatter, sharedTimeTooltipFormatter, simpleTooltipFormatter } from './utilities';

import * as Highcharts from 'highcharts';

export const createPieChart = ({
    chart,
    title,
    subtitle,
    tooltip,
    plotOptions,
    series,
    legend,
    colors,
    ...other
}: Highcharts.Options = {}): Highcharts.Options => {
    const _tooltip = {
        useHTML: tooltip?.useHTML || true,
        backgroundColor: tooltip?.backgroundColor || 'white',
        borderColor: tooltip?.borderColor || 'transparent',
        borderRadius: tooltip?.borderRadius || 0,
        formatter:
            tooltip?.formatter ||
            function(): string {
                return simpleTooltipFormatter(this, '', 2);
            },
    };
    return {
        chart: Object.assign(
            {
                type: 'pie',
                spacing: [0, 0, 0, 0],
            },
            chart
        ),
        title: Object.assign(
            {
                text: '',
                align: 'left',
                style: { 'font-family': OpenSans, 'font-size': sizes.title },
            },
            title
        ),
        subtitle: Object.assign(
            {
                text: '',
                align: 'left',
                style: { 'font-family': OpenSans, 'font-size': sizes.subtitle },
            },
            subtitle
        ),
        tooltip: Object.assign(_tooltip, tooltip),
        plotOptions: Object.assign(
            {
                series: {
                    states: {
                        hover: {
                            halo: {
                                size: 10,
                            },
                        },
                    },
                },
                pie: {
                    dataLabels: {
                        enabled: false,
                    },
                    borderWidth: 3,
                    size: '100%',
                },
            },
            plotOptions
        ),
        legend: Object.assign(
            {
                enabled: true,
                itemStyle: {
                    fontFamily: OpenSans,
                },
            },
            legend
        ),
        series: series || [
            {
                name: 'Browsers',
                colors: colors || pxblueColors,
                type: 'pie',
                data: [
                    {
                        name: 'Chrome',
                        y: 61.41,
                    },
                    {
                        name: 'Internet Explorer',
                        y: 11.84,
                    },
                    {
                        name: 'Firefox',
                        y: 10.85,
                    },
                    {
                        name: 'Edge',
                        y: 4.67,
                    },
                    {
                        name: 'Safari',
                        y: 4.18,
                    },
                    {
                        name: 'Sogou Explorer',
                        y: 1.64,
                    },
                    {
                        name: 'Opera',
                        y: 1.6,
                    },
                    {
                        name: 'QQ',
                        y: 1.2,
                    },
                    {
                        name: 'Other',
                        y: 2.61,
                    },
                ],
            },
        ],
        credits: {
            enabled: false,
        },
        ...other,
    };
};
export const createLineChart = ({
    chart,
    title,
    subtitle,
    tooltip,
    plotOptions,
    series,
    legend,
    colors,
    xAxis,
    yAxis,
    ...other
}: Highcharts.Options = {}): Highcharts.Options => {
    const _tooltip = {
        valueSuffix: tooltip?.valueSuffix || undefined,
        backgroundColor: tooltip?.backgroundColor || 'white',
        borderColor: tooltip?.borderColor || 'transparent',
        borderRadius: tooltip?.borderRadius || 0,
        style: tooltip?.style || { 'font-family': OpenSans, 'font-size': sizes.tooltip },
        useHTML: tooltip?.useHTML || true,
        formatter:
            tooltip?.formatter ||
            function(): string {
                return sharedTimeTooltipFormatter(this, ['V', 'V', 'V'], [3, 3, 3]);
            },
        shared: tooltip?.shared || true,
    };
    return {
        chart: Object.assign(
            {
                type: 'line',
                zoomType: 'xy',
                panning: true,
                panKey: 'shift',
            },
            chart
        ),
        colors: colors || pxblueColors,
        credits: {
            enabled: false,
        },
        legend: Object.assign(
            {
                enabled: true,
                itemStyle: {
                    fontFamily: OpenSans,
                },
            },
            legend
        ),
        plotOptions: Object.assign(
            {
                series: {
                    states: {
                        hover: {
                            enabled: true,
                            lineWidthPlus: 0,
                        },
                    },
                    marker: {
                        enabled: false,
                    },
                    lineWidth: 2,
                },
            },
            plotOptions
        ),
        series: series || [
            {
                name: 'Device 3',
                yAxis: 0,
                data: getRandomData(500, false, 30, true),
                type: 'line',
            },
            {
                name: 'Device 2',
                yAxis: 0,
                data: getRandomData(100, true, 30, true),
                type: 'line',
            },
            {
                name: 'Device 1',
                yAxis: 0,
                data: getRandomData(100, true, 30, true),
                type: 'line',
            },
        ],
        subtitle: Object.assign(
            {
                text: '',
                style: { 'font-family': OpenSans, 'font-size': sizes.subtitle },
            },
            subtitle
        ),
        title: Object.assign(
            {
                text: '',
                style: { 'font-family': OpenSans, 'font-size': sizes.title },
            },
            title
        ),
        tooltip: Object.assign(_tooltip, tooltip),
        xAxis: xAxis || {
            type: 'datetime',
            tickPixelInterval: 80,
            alternateGridColor: 'rgba(0,0,0,0.04)',
            title: {
                style: { 'font-family': OpenSans, 'font-size': sizes.axisTitle },
                text: 'Last 20 Seconds',
            },
            dateTimeLabelFormats: {
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
            },
            categories: undefined,
            labels: {
                distance: undefined,
                rotation: -45,
            },
            startOnTick: false,
            endOnTick: false,
        },
        yAxis: yAxis || [
            {
                title: {
                    text: '',
                    style: { 'font-family': OpenSans, 'font-size': sizes.axisTitle },
                },
                labels: {
                    style: { 'font-family': OpenSans, 'font-size': sizes.axisLabel },
                    format: '{value} V',
                },
                gridLineWidth: 2,
                gridLineDashStyle: 'Dot',
            },
        ],
        ...other,
    };
};
export const createBarChart = ({
    chart,
    title,
    subtitle,
    tooltip,
    plotOptions,
    series,
    legend,
    colors,
    xAxis,
    yAxis,
    ...other
}: Highcharts.Options = {}): Highcharts.Options => ({
    chart: Object.assign(
        {
            type: 'column',
        },
        chart
    ),
    colors: colors || pxblueColors,
    credits: {
        enabled: false,
    },
    legend: Object.assign(
        {
            enabled: true,
            itemStyle: {
                fontFamily: OpenSans,
            },
        },
        legend
    ),
    plotOptions: Object.assign(
        {
            series: {
                states: {
                    hover: {
                        enabled: false,
                    },
                },
            },
            column: {
                pointPadding: 0,
                borderWidth: 0,
                stacking: 'normal',
            },
        },
        plotOptions
    ),
    series: series || [
        {
            name: 'Device 3',
            yAxis: 0,
            data: getRandomData(100, false, 12, false),
            type: 'column',
        },
        {
            name: 'Device 2',
            yAxis: 0,
            data: getRandomData(100, false, 12, false),
            type: 'column',
        },
        {
            name: 'Device 1',
            yAxis: 0,
            data: getRandomData(100, false, 12, false),
            type: 'column',
        },
    ],
    subtitle: Object.assign(
        {
            text: '',
            style: { 'font-family': OpenSans, 'font-size': sizes.subtitle },
        },
        subtitle
    ),
    title: Object.assign(
        {
            text: '',
            style: { 'font-family': OpenSans, 'font-size': sizes.title },
        },
        title
    ),
    tooltip: {
        style: { 'font-family': OpenSans, 'font-size': sizes.tooltip },
        useHTML: true,
        shared: true,
        backgroundColor: 'white',
        borderColor: 'transparent',
        borderRadius: 0,
        formatter: function(): string {
            return sharedTooltipFormatter(this, ['V', 'V', 'V'], [3, 3, 3]);
        },
        ...tooltip,
    },
    xAxis: xAxis || {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        title: {
            style: { 'font-family': OpenSans, 'font-size': sizes.axisTitle },
            text: 'Last 12 Months',
        },
        labels: {
            enabled: true,
        },
        type: 'category',
    },
    yAxis: yAxis || [
        {
            title: {
                text: 'Energy (kWh)',
                style: { 'font-family': OpenSans, 'font-size': sizes.axisTitle },
            },
            labels: {
                style: { 'font-family': OpenSans, 'font-size': sizes.axisLabel },
                format: '{value}',
            },
            alternateGridColor: 'rgba(0,0,0,0.04)',
        },
    ],
    ...other,
});
export const createDonutChart = ({
    chart,
    title,
    subtitle,
    tooltip,
    plotOptions,
    series,
    legend,
    colors,
    ...other
}: Highcharts.Options = {}): Highcharts.Options => {
    const _tooltip: Highcharts.TooltipOptions = {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '16px',
        },
        headerFormat: tooltip?.headerFormat || '',
        pointFormat:
            '{point.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
        positioner: function(labelWidth) {
            return {
                // @ts-ignore
                x: (this.chart.chartWidth - labelWidth) / 2,
                // @ts-ignore
                y: this.chart.plotHeight / 2 - 36,
            };
        },
    };
    return {
        chart: Object.assign(
            {
                type: 'pie',
                spacing: [0, 0, 0, 0],
            },
            chart
        ),
        title: Object.assign(
            {
                text: '',
                style: { 'font-family': OpenSans, 'font-size': sizes.title },
            },
            title
        ),
        subtitle: Object.assign(
            {
                text: '',
                style: { 'font-family': OpenSans, 'font-size': sizes.subtitle },
            },
            subtitle
        ),
        tooltip: Object.assign(_tooltip, tooltip),
        plotOptions: Object.assign(
            {
                series: {
                    states: {
                        hover: {
                            halo: {
                                size: 10,
                            },
                        },
                    },
                },
                pie: {
                    dataLabels: {
                        enabled: false,
                    },
                    borderWidth: 3,
                    innerSize: '75%',
                    size: '100%',
                },
            },
            plotOptions
        ),
        legend: Object.assign(
            {
                enabled: true,
                itemStyle: {
                    fontFamily: OpenSans,
                },
            },
            legend
        ),
        series: series || [
            {
                name: 'Browsers',
                showInLegend: false,
                colors: colors || pxblueColors,
                type: 'pie',
                data: [
                    {
                        name: 'Device 3',
                        y: 61.41,
                    },
                    {
                        name: 'Device 2',
                        y: 11.84,
                    },
                    {
                        name: 'Device 1',
                        y: 10.85,
                    },
                ],
            },
        ],
        credits: {
            enabled: false,
        },
        ...other,
    };
};
