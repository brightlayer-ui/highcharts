"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDonutChart = exports.createBarChart = exports.createLineChart = exports.createPieChart = void 0;

var _styles = require("./styles");

var _utilities = require("./utilities");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var createPieChart = function createPieChart() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      chart = _ref.chart,
      title = _ref.title,
      subtitle = _ref.subtitle,
      tooltip = _ref.tooltip,
      plotOptions = _ref.plotOptions,
      series = _ref.series,
      legend = _ref.legend,
      colors = _ref.colors,
      other = _objectWithoutProperties(_ref, ["chart", "title", "subtitle", "tooltip", "plotOptions", "series", "legend", "colors"]);

  return _objectSpread({
    chart: Object.assign({
      type: 'pie',
      spacing: [0, 0, 0, 0]
    }, chart),
    title: Object.assign({
      text: '',
      align: 'left',
      style: {
        'font-family': _styles.OpenSans,
        'font-size': _styles.sizes.title
      }
    }, title),
    subtitle: Object.assign({
      text: '',
      align: 'left',
      style: {
        'font-family': _styles.OpenSans,
        'font-size': _styles.sizes.subtitle
      }
    }, subtitle),
    tooltip: Object.assign({
      useHTML: true,
      backgroundColor: 'white',
      borderColor: 'transparent',
      borderRadius: 0,
      formatter: function formatter() {
        return (0, _utilities.simpleTooltipFormatter)(this, '', 2);
      }
    }, tooltip),
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
        size: '100%'
      }
    }, plotOptions),
    legend: Object.assign({
      enabled: true,
      itemStyle: {
        fontFamily: _styles.OpenSans
      }
    }, legend),
    series: series || [{
      name: 'Browsers',
      colors: colors || _styles.pxblueColors,
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
    }
  }, other);
};

exports.createPieChart = createPieChart;

var createLineChart = function createLineChart() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      chart = _ref2.chart,
      title = _ref2.title,
      subtitle = _ref2.subtitle,
      tooltip = _ref2.tooltip,
      plotOptions = _ref2.plotOptions,
      series = _ref2.series,
      legend = _ref2.legend,
      colors = _ref2.colors,
      xAxis = _ref2.xAxis,
      yAxis = _ref2.yAxis,
      useUTC = _ref2.useUTC,
      other = _objectWithoutProperties(_ref2, ["chart", "title", "subtitle", "tooltip", "plotOptions", "series", "legend", "colors", "xAxis", "yAxis", "useUTC"]);

  return _objectSpread({
    useUTC: useUTC || false,
    chart: Object.assign({
      type: 'line',
      zoomType: 'xy',
      panning: true,
      panKey: 'shift'
    }, chart),
    colors: colors || _styles.pxblueColors,
    credits: {
      enabled: false
    },
    legend: Object.assign({
      enabled: true,
      itemStyle: {
        fontFamily: _styles.OpenSans
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
      data: (0, _utilities.getRandomData)(500, false, 30, true)
    }, {
      name: 'Device 2',
      yAxis: 0,
      data: (0, _utilities.getRandomData)(100, true, 30, true)
    }, {
      name: 'Device 1',
      yAxis: 0,
      data: (0, _utilities.getRandomData)(100, true, 30, true)
    }],
    subtitle: Object.assign({
      text: '',
      style: {
        'font-family': _styles.OpenSans,
        'font-size': _styles.sizes.subtitle
      }
    }, subtitle),
    title: Object.assign({
      text: '',
      style: {
        'font-family': _styles.OpenSans,
        'font-size': _styles.sizes.title
      }
    }, title),
    tooltip: Object.assign({
      valueSuffix: null,
      backgroundColor: 'white',
      borderColor: 'transparent',
      borderRadius: 0,
      style: {
        'font-family': _styles.OpenSans,
        'font-size': _styles.sizes.tooltip
      },
      useHTML: true,
      formatter: function formatter() {
        return (0, _utilities.sharedTimeTooltipFormatter)(this, ['V', 'V', 'V'], [3, 3, 3]);
      },
      shared: true
    }, tooltip),
    xAxis: xAxis || {
      type: 'datetime',
      tickPixelInterval: 80,
      alternateGridColor: 'rgba(0,0,0,0.04)',
      title: {
        style: {
          'font-family': _styles.OpenSans,
          'font-size': _styles.sizes.axisTitle
        },
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
        style: {
          'font-family': _styles.OpenSans,
          'font-size': _styles.sizes.axisTitle
        }
      },
      labels: {
        style: {
          'font-family': _styles.OpenSans,
          'font-size': _styles.sizes.axisLabel
        },
        format: "{value} V"
      },
      gridLineWidth: 2,
      gridLineDashStyle: 'dot'
    }]
  }, other);
};

exports.createLineChart = createLineChart;

var createBarChart = function createBarChart() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      chart = _ref3.chart,
      title = _ref3.title,
      subtitle = _ref3.subtitle,
      tooltip = _ref3.tooltip,
      plotOptions = _ref3.plotOptions,
      series = _ref3.series,
      legend = _ref3.legend,
      colors = _ref3.colors,
      xAxis = _ref3.xAxis,
      yAxis = _ref3.yAxis,
      other = _objectWithoutProperties(_ref3, ["chart", "title", "subtitle", "tooltip", "plotOptions", "series", "legend", "colors", "xAxis", "yAxis"]);

  return _objectSpread({
    chart: Object.assign({
      type: 'column'
    }, chart),
    colors: colors || _styles.pxblueColors,
    credits: {
      enabled: false
    },
    legend: Object.assign({
      enabled: true,
      itemStyle: {
        fontFamily: _styles.OpenSans
      }
    }, legend),
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
    }, plotOptions),
    series: series || [{
      name: 'Device 3',
      yAxis: 0,
      data: (0, _utilities.getRandomData)(100, false, 12, false)
    }, {
      name: 'Device 2',
      yAxis: 0,
      data: (0, _utilities.getRandomData)(100, false, 12, false)
    }, {
      name: 'Device 1',
      yAxis: 0,
      data: (0, _utilities.getRandomData)(100, false, 12, false)
    }],
    subtitle: Object.assign({
      text: '',
      style: {
        'font-family': _styles.OpenSans,
        'font-size': _styles.sizes.subtitle
      }
    }, subtitle),
    title: Object.assign({
      text: '',
      style: {
        'font-family': _styles.OpenSans,
        'font-size': _styles.sizes.title
      }
    }, title),
    tooltip: Object.assign({
      valueSuffix: null,
      style: {
        'font-family': _styles.OpenSans,
        'font-size': _styles.sizes.tooltip
      },
      useHTML: true,
      shared: true,
      backgroundColor: 'white',
      borderColor: 'transparent',
      borderRadius: 0,
      formatter: function formatter() {
        return (0, _utilities.sharedTooltipFormatter)(this, ['V', 'V', 'V'], [3, 3, 3]);
      }
    }, tooltip),
    xAxis: xAxis || {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      title: {
        style: {
          'font-family': _styles.OpenSans,
          'font-size': _styles.sizes.axisTitle
        },
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
        style: {
          'font-family': _styles.OpenSans,
          'font-size': _styles.sizes.axisTitle
        }
      },
      labels: {
        style: {
          'font-family': _styles.OpenSans,
          'font-size': _styles.sizes.axisLabel
        },
        format: "{value}"
      },
      alternateGridColor: 'rgba(0,0,0,0.04)'
    }]
  }, other);
};

exports.createBarChart = createBarChart;

var createDonutChart = function createDonutChart() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      chart = _ref4.chart,
      title = _ref4.title,
      subtitle = _ref4.subtitle,
      tooltip = _ref4.tooltip,
      plotOptions = _ref4.plotOptions,
      series = _ref4.series,
      legend = _ref4.legend,
      colors = _ref4.colors,
      other = _objectWithoutProperties(_ref4, ["chart", "title", "subtitle", "tooltip", "plotOptions", "series", "legend", "colors"]);

  return {
    chart: Object.assign({
      type: 'pie',
      spacing: [0, 0, 0, 0]
    }, chart),
    title: Object.assign({
      text: '',
      style: {
        'font-family': _styles.OpenSans,
        'font-size': _styles.sizes.title
      }
    }, title),
    subtitle: Object.assign({
      text: '',
      style: {
        'font-family': _styles.OpenSans,
        'font-size': _styles.sizes.subtitle
      }
    }, subtitle),
    tooltip: Object.assign({
      borderWidth: 0,
      backgroundColor: 'none',
      shadow: false,
      style: {
        fontSize: '16px'
      },
      headerFormat: '',
      pointFormat: '{point.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
      positioner: function positioner(labelWidth) {
        return {
          x: (this.chart.chartWidth - labelWidth) / 2,
          y: this.chart.plotHeight / 2 - 36
        };
      }
    }, tooltip),
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
        fontFamily: _styles.OpenSans
      }
    }, legend),
    series: series || [{
      name: 'Browsers',
      showInLegend: false,
      colors: colors || _styles.pxblueColors,
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

exports.createDonutChart = createDonutChart;