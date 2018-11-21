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

import {
  OpenSans,
  pxblueColors,
  sizes
} from './styles';

import {
  getRandomData,
  sharedTooltipFormatter,
  sharedTimeTooltipFormatter,
  simpleTooltipFormatter
} from './utilities';

export const createPieChart = ({ chart, title, subtitle, tooltip, plotOptions, series, legend, colors, ...other } = {}) => {
  return {
    chart: Object.assign(
      {
        type: 'pie',
        spacing: [0, 0, 0, 0]
      },
      chart
    ),
    title: Object.assign(
      {
        text: '',
        align: 'left',
        style: { 'font-family': OpenSans, 'font-size': sizes.title }
      },
      title
    ),
    subtitle: Object.assign(
      {
        text: '',
        align: 'left',
        style: { 'font-family': OpenSans, 'font-size': sizes.subtitle }
      },
      subtitle
    ),
    tooltip: Object.assign(
      {
        useHTML: true,
        backgroundColor: 'white',
        borderColor: 'transparent',
        borderRadius: 0,
        formatter: function () { return simpleTooltipFormatter(this, '', 2) }
      },
      tooltip
    ),
    plotOptions: Object.assign(
      {
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
      },
      plotOptions
    ),
    legend: Object.assign(
      {
        enabled: true,
        itemStyle: {
          fontFamily: OpenSans
        }
      },
      legend
    ),
    series: series || [{
      name: 'Browsers',
      colors: colors || pxblueColors,
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
    }],
    credits: {
      enabled: false
    },
    ...other
  }
}
export const createLineChart = ({ chart, title, subtitle, tooltip, plotOptions, series, legend, colors, xAxis, yAxis, useUTC, ...other } = {}) => {
  return {
    useUTC: useUTC || false,
    chart: Object.assign({
      type: 'line',
      zoomType: 'xy',
      panning: true,
      panKey: 'shift'
    }, chart),
    colors: colors || pxblueColors,
    credits: {
      enabled: false
    },
    legend: Object.assign({
      enabled: true,
      itemStyle: {
        fontFamily: OpenSans
      }
    }, legend),
    plotOptions: Object.assign({
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
    }, plotOptions),
    series: series || [{
      name: 'Device 3',
      yAxis: 0,
      data: getRandomData(500, false, 30, true)
    },
    {
      name: 'Device 2',
      yAxis: 0,
      data: getRandomData(100, true, 30, true)
    },
    {
      name: 'Device 1',
      yAxis: 0,
      data: getRandomData(100, true, 30, true)
    }],
    subtitle: Object.assign({
      text: '',
      style: { 'font-family': OpenSans, 'font-size': sizes.subtitle }
    }, subtitle),
    title: Object.assign({
      text: '',
      style: { 'font-family': OpenSans, 'font-size': sizes.title }
    }, title),
    tooltip: Object.assign({
      valueSuffix: null,
      backgroundColor: 'white',
      borderColor: 'transparent',
      borderRadius: 0,
      style: { 'font-family': OpenSans, 'font-size': sizes.tooltip },
      useHTML: true,
      formatter: function () { return sharedTimeTooltipFormatter(this, ['V', 'V', 'V'], [3, 3, 3]) },
      shared: true
    }, tooltip),
    xAxis: xAxis || {
      type: 'datetime',
      tickPixelInterval: 80,
      alternateGridColor: 'rgba(0,0,0,0.04)',
      title: {
        style: { 'font-family': OpenSans, 'font-size': sizes.axisTitle },
        text: "Last 20 Seconds"
      },
      dateTimeLabelFormats: {
        second: '%H:%M:%S',
        minute: '%H:%M',
        hour: '%H:%M'
      },
      categories: null,
      labels: {
        distance: null,
        rotation: -45
      },
      startOnTick: false,
      endOnTick: false
    },
    yAxis: yAxis || [{
      title: {
        text: '',
        style: { 'font-family': OpenSans, 'font-size': sizes.axisTitle },
      },
      labels: {
        style: { 'font-family': OpenSans, 'font-size': sizes.axisLabel },
        format: "{value} V"
      },
      gridLineWidth: 2,
      gridLineDashStyle: 'dot'
    }],
    ...other
  }
}
export const createBarChart = ({ chart, title, subtitle, tooltip, plotOptions, series, legend, colors, xAxis, yAxis, ...other } = {}) => {
  return {
    chart: Object.assign({
      type: 'column'
    },chart),
    colors: colors || pxblueColors,
    credits: {
      enabled: false
    },
    legend: Object.assign({
      enabled: true,
      itemStyle: {
        fontFamily: OpenSans
      }
    },legend),
    plotOptions: Object.assign({
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
    },plotOptions),
    series: series || [{
      name: 'Device 3',
      yAxis: 0,
      data: getRandomData(100, false, 12, false)
    },
    {
      name: 'Device 2',
      yAxis: 0,
      data: getRandomData(100, false, 12, false)
    },
    {
      name: 'Device 1',
      yAxis: 0,
      data: getRandomData(100, false, 12, false)
    }],
    subtitle: Object.assign({
      text: '',
      style: { 'font-family': OpenSans, 'font-size': sizes.subtitle },
    },subtitle),
    title: Object.assign({
      text: '',
      style: { 'font-family': OpenSans, 'font-size': sizes.title },
    },title),
    tooltip: Object.assign({
      valueSuffix: null,
      style: { 'font-family': OpenSans, 'font-size': sizes.tooltip },
      useHTML: true,
      shared: true,
      backgroundColor: 'white',
      borderColor: 'transparent',
      borderRadius: 0,
      formatter: function () { return sharedTooltipFormatter(this, ['V', 'V', 'V'], [3, 3, 3]) },
    },tooltip),
    xAxis: xAxis || {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      title: {
        style: { 'font-family': OpenSans, 'font-size': sizes.axisTitle },
        text: "Last 12 Months"
      },
      labels: {
        enabled: true
      },
      type: 'category'
    },
    yAxis: yAxis || [{
      title: {
        text: 'Energy (kWh)',
        style: { 'font-family': OpenSans, 'font-size': sizes.axisTitle },
      },
      labels: {
        style: { 'font-family': OpenSans, 'font-size': sizes.axisLabel },
        format: "{value}"
      },
      alternateGridColor: 'rgba(0,0,0,0.04)'
    }],
    ...other
  }
}
export const createDonutChart = ({ chart, title, subtitle, tooltip, plotOptions, series, legend, colors, ...other } = {}) => {
  return {
    chart: Object.assign({
      type: 'pie',
      spacing: [0, 0, 0, 0]
    },chart),
    title: Object.assign({
      text: '',
      style: { 'font-family': OpenSans, 'font-size': sizes.title }
    },title),
    subtitle: Object.assign({
      text: '',
      style: { 'font-family': OpenSans, 'font-size': sizes.subtitle }
    },subtitle),
    tooltip: Object.assign({
      borderWidth: 0,
      backgroundColor: 'none',
      shadow: false,
      style: {
        fontSize: '16px'
      },
      headerFormat: '',
      pointFormat: '{point.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
      positioner: function (labelWidth) {
        return {
          x: (this.chart.chartWidth - labelWidth) / 2,
          y: (this.chart.plotHeight / 2) - 36
        };
      }
    },tooltip),
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
    },plotOptions),
    legend: Object.assign({
      enabled: true,
      itemStyle: {
        fontFamily: OpenSans
      }
    },legend),
    series: series || [{
      name: 'Browsers',
      showInLegend: false,
      colors: colors || pxblueColors,
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
  }
}