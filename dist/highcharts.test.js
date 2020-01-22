"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
test('helper functions return object', function () {
    expect(index_1.createBarChart()).toBeDefined();
    expect(index_1.createLineChart()).toBeDefined();
    expect(index_1.createPieChart()).toBeDefined();
    expect(index_1.createDonutChart()).toBeDefined();
});
test('pie chart parameters work', function () {
    var x = index_1.createPieChart({
        title: { text: 'test' },
        subtitle: { align: 'left' },
        tooltip: { borderColor: 'red' },
        plotOptions: { series: { states: { hover: { halo: { size: 20 } } } } },
        series: [{ name: 'Test', type: 'pie' }],
        legend: { enabled: false },
    });
    var _title = x.title;
    var _subtitle = x.subtitle;
    var _tooltip = x.tooltip;
    var _size = x
        .plotOptions
        .series
        .states
        .hover
        .halo
        .size;
    var _series = x.series;
    var _legend = x.legend;
    expect(_title.text).toEqual('test');
    expect(_subtitle.align).toEqual('left');
    expect(_tooltip.borderColor).toEqual('red');
    expect(_size).toEqual(20);
    expect(_series).toEqual([{ name: 'Test', type: 'pie' }]);
    expect(_series.length).toEqual(1);
    expect(_legend.enabled).toEqual(false);
});
test('line chart parameters work', function () {
    var _a, _b;
    var x = index_1.createLineChart({
        title: { text: 'test' },
        subtitle: { align: 'left' },
        tooltip: { borderColor: 'red' },
        plotOptions: { series: { states: { hover: { enabled: false } } } },
        series: [{ name: 'Test', type: 'line' }],
        legend: { enabled: false },
        colors: ['red', 'blue'],
        xAxis: { title: { text: 'test' } },
        yAxis: { labels: { format: '{value}' } },
    });
    var _title = x.title;
    var _subtitle = x.subtitle;
    var _tooltip = x.tooltip;
    var _hover = x
        .plotOptions
        .series
        .states
        .hover;
    var _series = x.series;
    var _legend = x.legend;
    var _xAxis = x.xAxis;
    var _yAxis = x.yAxis;
    expect(x.colors).toEqual(['red', 'blue']);
    expect(_title.text).toEqual('test');
    expect(_subtitle.align).toEqual('left');
    expect(_tooltip.borderColor).toEqual('red');
    expect(_hover.enabled).toEqual(false);
    expect(_series).toEqual([{ name: 'Test', type: 'line' }]);
    expect(_series.length).toEqual(1);
    expect(_legend.enabled).toEqual(false);
    expect((_a = _xAxis.title) === null || _a === void 0 ? void 0 : _a.text).toEqual('test');
    expect((_b = _yAxis.labels) === null || _b === void 0 ? void 0 : _b.format).toEqual('{value}');
});
test('bar chart parameters work', function () {
    var _a, _b;
    var x = index_1.createBarChart({
        title: { text: 'test' },
        subtitle: { align: 'left' },
        tooltip: { borderColor: 'red' },
        plotOptions: { series: { states: { hover: { enabled: false } } } },
        series: [{ name: 'Test', type: 'column' }],
        legend: { enabled: false },
        colors: ['red', 'blue'],
        xAxis: { title: { text: 'test' } },
        yAxis: { labels: { format: '{value} unit' } },
    });
    var _title = x.title;
    var _subtitle = x.subtitle;
    var _tooltip = x.tooltip;
    var _hover = x
        .plotOptions
        .series
        .states
        .hover;
    var _series = x.series;
    var _legend = x.legend;
    var _xAxis = x.xAxis;
    var _yAxis = x.yAxis;
    expect(x.colors).toEqual(['red', 'blue']);
    expect(_title.text).toEqual('test');
    expect(_subtitle.align).toEqual('left');
    expect(_tooltip.borderColor).toEqual('red');
    expect(_hover.enabled).toEqual(false);
    expect(_series).toEqual([{ name: 'Test', type: 'column' }]);
    expect(_series.length).toEqual(1);
    expect(_legend.enabled).toEqual(false);
    expect((_a = _xAxis.title) === null || _a === void 0 ? void 0 : _a.text).toEqual('test');
    expect((_b = _yAxis.labels) === null || _b === void 0 ? void 0 : _b.format).toEqual('{value} unit');
});
test('donut chart parameters work', function () {
    var x = index_1.createDonutChart({
        title: { text: 'test' },
        subtitle: { align: 'left' },
        tooltip: { borderColor: 'red' },
        plotOptions: { series: { states: { hover: { enabled: false } } } },
        series: [{ name: 'Test', type: 'pie' }],
        legend: { enabled: false },
    });
    var _title = x.title;
    var _subtitle = x.subtitle;
    var _tooltip = x.tooltip;
    var _hover = x
        .plotOptions
        .series
        .states
        .hover;
    var _series = x.series;
    var _legend = x.legend;
    expect(_title.text).toEqual('test');
    expect(_subtitle.align).toEqual('left');
    expect(_tooltip.borderColor).toEqual('red');
    expect(_hover.enabled).toEqual(false);
    expect(_series).toEqual([{ name: 'Test', type: 'pie' }]);
    expect(_series.length).toEqual(1);
    expect(_legend.enabled).toEqual(false);
});
