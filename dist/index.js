"use strict";
/**
Copyright (c) 2018-present, Eaton
 
All rights reserved.
 
This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
  This file contains generator functions for line, bar (column), pie, and donut charts.
  These functions take a single options object, which can include any data supported by Highcharts
  (see https://api.highcharts.com/highcharts/ for detailed API). These functions simply wrap the native creation and inject
  sample data to ensure the charts will render even when no config is supplied.
*/
var styles_1 = require("./styles");
var utilities_1 = require("./utilities");
exports.createPieChart = function (_a) {
    if (_a === void 0) { _a = {}; }
    var _b, _c, _d, _e, _f;
    var chart = _a.chart, title = _a.title, subtitle = _a.subtitle, tooltip = _a.tooltip, plotOptions = _a.plotOptions, series = _a.series, legend = _a.legend, colors = _a.colors, other = __rest(_a, ["chart", "title", "subtitle", "tooltip", "plotOptions", "series", "legend", "colors"]);
    var _tooltip = {
        useHTML: ((_b = tooltip) === null || _b === void 0 ? void 0 : _b.useHTML) || true,
        backgroundColor: ((_c = tooltip) === null || _c === void 0 ? void 0 : _c.backgroundColor) || 'white',
        borderColor: ((_d = tooltip) === null || _d === void 0 ? void 0 : _d.borderColor) || 'transparent',
        borderRadius: ((_e = tooltip) === null || _e === void 0 ? void 0 : _e.borderRadius) || 0,
        formatter: ((_f = tooltip) === null || _f === void 0 ? void 0 : _f.formatter) || function () { return utilities_1.simpleTooltipFormatter(this, '', 2); }
    };
    return __assign({ chart: Object.assign({
            type: 'pie',
            spacing: [0, 0, 0, 0]
        }, chart), title: Object.assign({
            text: '',
            align: 'left',
            style: { 'font-family': styles_1.OpenSans, 'font-size': styles_1.sizes.title }
        }, title), subtitle: Object.assign({
            text: '',
            align: 'left',
            style: { 'font-family': styles_1.OpenSans, 'font-size': styles_1.sizes.subtitle }
        }, subtitle), tooltip: Object.assign(_tooltip, tooltip), plotOptions: Object.assign({
            series: {
                states: {
                    hover: {
                        halo: {
                            size: 10
                        }
                    }
                }
            },
            pie: {
                dataLabels: {
                    enabled: false
                },
                borderWidth: 3,
                size: '100%'
            }
        }, plotOptions), legend: Object.assign({
            enabled: true,
            itemStyle: {
                fontFamily: styles_1.OpenSans
            }
        }, legend), series: series || [{
                name: 'Browsers',
                colors: colors || styles_1.pxblueColors,
                type: 'pie',
                data: [{
                        name: 'Chrome',
                        y: 61.41
                    }, {
                        name: 'Internet Explorer',
                        y: 11.84
                    }, {
                        name: 'Firefox',
                        y: 10.85
                    }, {
                        name: 'Edge',
                        y: 4.67
                    }, {
                        name: 'Safari',
                        y: 4.18
                    }, {
                        name: 'Sogou Explorer',
                        y: 1.64
                    }, {
                        name: 'Opera',
                        y: 1.6
                    }, {
                        name: 'QQ',
                        y: 1.2
                    }, {
                        name: 'Other',
                        y: 2.61
                    }]
            }], credits: {
            enabled: false
        } }, other);
};
exports.createLineChart = function (_a) {
    if (_a === void 0) { _a = {}; }
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var chart = _a.chart, title = _a.title, subtitle = _a.subtitle, tooltip = _a.tooltip, plotOptions = _a.plotOptions, series = _a.series, legend = _a.legend, colors = _a.colors, xAxis = _a.xAxis, yAxis = _a.yAxis, other = __rest(_a, ["chart", "title", "subtitle", "tooltip", "plotOptions", "series", "legend", "colors", "xAxis", "yAxis"]);
    var _tooltip = {
        valueSuffix: ((_b = tooltip) === null || _b === void 0 ? void 0 : _b.valueSuffix) || undefined,
        backgroundColor: ((_c = tooltip) === null || _c === void 0 ? void 0 : _c.backgroundColor) || 'white',
        borderColor: ((_d = tooltip) === null || _d === void 0 ? void 0 : _d.borderColor) || 'transparent',
        borderRadius: ((_e = tooltip) === null || _e === void 0 ? void 0 : _e.borderRadius) || 0,
        style: ((_f = tooltip) === null || _f === void 0 ? void 0 : _f.style) || { 'font-family': styles_1.OpenSans, 'font-size': styles_1.sizes.tooltip },
        useHTML: ((_g = tooltip) === null || _g === void 0 ? void 0 : _g.useHTML) || true,
        formatter: ((_h = tooltip) === null || _h === void 0 ? void 0 : _h.formatter) || function () { return utilities_1.sharedTimeTooltipFormatter(this, ['V', 'V', 'V'], [3, 3, 3]); },
        shared: ((_j = tooltip) === null || _j === void 0 ? void 0 : _j.shared) || true
    };
    return __assign({ chart: Object.assign({
            type: 'line',
            zoomType: 'xy',
            panning: true,
            panKey: 'shift'
        }, chart), colors: colors || styles_1.pxblueColors, credits: {
            enabled: false
        }, legend: Object.assign({
            enabled: true,
            itemStyle: {
                fontFamily: styles_1.OpenSans
            }
        }, legend), plotOptions: Object.assign({
            series: {
                states: {
                    hover: {
                        enabled: true,
                        lineWidthPlus: 0
                    }
                },
                marker: {
                    enabled: false
                },
                lineWidth: 2
            }
        }, plotOptions), series: series || [{
                name: 'Device 3',
                yAxis: 0,
                data: utilities_1.getRandomData(500, false, 30, true),
                type: 'line'
            },
            {
                name: 'Device 2',
                yAxis: 0,
                data: utilities_1.getRandomData(100, true, 30, true),
                type: 'line'
            },
            {
                name: 'Device 1',
                yAxis: 0,
                data: utilities_1.getRandomData(100, true, 30, true),
                type: 'line'
            }], subtitle: Object.assign({
            text: '',
            style: { 'font-family': styles_1.OpenSans, 'font-size': styles_1.sizes.subtitle }
        }, subtitle), title: Object.assign({
            text: '',
            style: { 'font-family': styles_1.OpenSans, 'font-size': styles_1.sizes.title }
        }, title), tooltip: Object.assign(_tooltip, tooltip), xAxis: xAxis || {
            type: 'datetime',
            tickPixelInterval: 80,
            alternateGridColor: 'rgba(0,0,0,0.04)',
            title: {
                style: { 'font-family': styles_1.OpenSans, 'font-size': styles_1.sizes.axisTitle },
                text: "Last 20 Seconds"
            },
            dateTimeLabelFormats: {
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M'
            },
            categories: undefined,
            labels: {
                distance: undefined,
                rotation: -45
            },
            startOnTick: false,
            endOnTick: false
        }, yAxis: yAxis || [{
                title: {
                    text: '',
                    style: { 'font-family': styles_1.OpenSans, 'font-size': styles_1.sizes.axisTitle },
                },
                labels: {
                    style: { 'font-family': styles_1.OpenSans, 'font-size': styles_1.sizes.axisLabel },
                    format: "{value} V"
                },
                gridLineWidth: 2,
                gridLineDashStyle: 'Dot'
            }] }, other);
};
exports.createBarChart = function (_a) {
    if (_a === void 0) { _a = {}; }
    var chart = _a.chart, title = _a.title, subtitle = _a.subtitle, tooltip = _a.tooltip, plotOptions = _a.plotOptions, series = _a.series, legend = _a.legend, colors = _a.colors, xAxis = _a.xAxis, yAxis = _a.yAxis, other = __rest(_a, ["chart", "title", "subtitle", "tooltip", "plotOptions", "series", "legend", "colors", "xAxis", "yAxis"]);
    return __assign({ chart: Object.assign({
            type: 'column'
        }, chart), colors: colors || styles_1.pxblueColors, credits: {
            enabled: false
        }, legend: Object.assign({
            enabled: true,
            itemStyle: {
                fontFamily: styles_1.OpenSans
            }
        }, legend), plotOptions: Object.assign({
            series: {
                states: {
                    hover: {
                        enabled: false
                    }
                }
            },
            column: {
                pointPadding: 0,
                borderWidth: 0,
                stacking: 'normal'
            }
        }, plotOptions), series: series || [{
                name: 'Device 3',
                yAxis: 0,
                data: utilities_1.getRandomData(100, false, 12, false),
                type: 'column'
            },
            {
                name: 'Device 2',
                yAxis: 0,
                data: utilities_1.getRandomData(100, false, 12, false),
                type: 'column'
            },
            {
                name: 'Device 1',
                yAxis: 0,
                data: utilities_1.getRandomData(100, false, 12, false),
                type: 'column'
            }], subtitle: Object.assign({
            text: '',
            style: { 'font-family': styles_1.OpenSans, 'font-size': styles_1.sizes.subtitle },
        }, subtitle), title: Object.assign({
            text: '',
            style: { 'font-family': styles_1.OpenSans, 'font-size': styles_1.sizes.title },
        }, title), tooltip: __assign({ style: { 'font-family': styles_1.OpenSans, 'font-size': styles_1.sizes.tooltip }, useHTML: true, shared: true, backgroundColor: 'white', borderColor: 'transparent', borderRadius: 0, formatter: function () { return utilities_1.sharedTooltipFormatter(this, ['V', 'V', 'V'], [3, 3, 3]); } }, tooltip), xAxis: xAxis || {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title: {
                style: { 'font-family': styles_1.OpenSans, 'font-size': styles_1.sizes.axisTitle },
                text: "Last 12 Months"
            },
            labels: {
                enabled: true
            },
            type: 'category'
        }, yAxis: yAxis || [{
                title: {
                    text: 'Energy (kWh)',
                    style: { 'font-family': styles_1.OpenSans, 'font-size': styles_1.sizes.axisTitle },
                },
                labels: {
                    style: { 'font-family': styles_1.OpenSans, 'font-size': styles_1.sizes.axisLabel },
                    format: "{value}"
                },
                alternateGridColor: 'rgba(0,0,0,0.04)'
            }] }, other);
};
exports.createDonutChart = function (_a) {
    if (_a === void 0) { _a = {}; }
    var _b;
    var chart = _a.chart, title = _a.title, subtitle = _a.subtitle, tooltip = _a.tooltip, plotOptions = _a.plotOptions, series = _a.series, legend = _a.legend, colors = _a.colors, other = __rest(_a, ["chart", "title", "subtitle", "tooltip", "plotOptions", "series", "legend", "colors"]);
    var _tooltip = {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '16px'
        },
        headerFormat: ((_b = tooltip) === null || _b === void 0 ? void 0 : _b.headerFormat) || '',
        pointFormat: '{point.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
        positioner: function (labelWidth) {
            return {
                // @ts-ignore
                x: (this.chart.chartWidth - labelWidth) / 2,
                // @ts-ignore
                y: (this.chart.plotHeight / 2) - 36
            };
        }
    };
    return {
        chart: Object.assign({
            type: 'pie',
            spacing: [0, 0, 0, 0]
        }, chart),
        title: Object.assign({
            text: '',
            style: { 'font-family': styles_1.OpenSans, 'font-size': styles_1.sizes.title }
        }, title),
        subtitle: Object.assign({
            text: '',
            style: { 'font-family': styles_1.OpenSans, 'font-size': styles_1.sizes.subtitle }
        }, subtitle),
        tooltip: Object.assign(_tooltip, tooltip),
        plotOptions: Object.assign({
            series: {
                states: {
                    hover: {
                        halo: {
                            size: 10
                        }
                    }
                }
            },
            pie: {
                dataLabels: {
                    enabled: false
                },
                borderWidth: 3,
                innerSize: '75%',
                size: '100%'
            }
        }, plotOptions),
        legend: Object.assign({
            enabled: true,
            itemStyle: {
                fontFamily: styles_1.OpenSans
            }
        }, legend),
        series: series || [{
                name: 'Browsers',
                showInLegend: false,
                colors: colors || styles_1.pxblueColors,
                type: 'pie',
                data: [{
                        name: 'Device 3',
                        y: 61.41
                    }, {
                        name: 'Device 2',
                        y: 11.84
                    }, {
                        name: 'Device 1',
                        y: 10.85
                    }]
            }],
        credits: {
            enabled: false
        }
    };
};
