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
        legend: { enabled: false }
    });
    // expect(x.title?.text).toEqual('test');
    // expect(x.subtitle?.align).toEqual('left');
    // expect(x.tooltip?.borderColor).toEqual('red');
    // // // // // expect(x.plotOptions?.series?.states?.hover?.halo?.size).toEqual(20);
    expect(x.series).toEqual([{ name: 'Test', type: 'pie' }]);
    // expect(x.series?.length).toEqual(1);
    // expect(x.legend?.enabled).toEqual(false);
});
test('line chart parameters work', function () {
    var _a;
    var x = index_1.createLineChart({
        title: { text: 'test' },
        subtitle: { align: 'left' },
        tooltip: { borderColor: 'red' },
        plotOptions: { series: { states: { hover: { enabled: false } } } },
        series: [{ name: 'Test', type: "line" }],
        legend: { enabled: false },
        colors: ['red', 'blue'],
        xAxis: { title: { text: 'test' } },
        yAxis: { labels: { format: '{value}' } }
    });
    expect(x.colors).toEqual(['red', 'blue']);
    // expect(x.title?.text).toEqual('test');
    // expect(x.subtitle?.align).toEqual('left');
    // expect(x.tooltip?.borderColor).toEqual('red');
    // // // // expect(x.plotOptions?.series?.states?.hover?.enabled).toEqual(false);
    expect(x.series).toEqual([{ name: 'Test', type: "line" }]);
    // expect(x.series?.length).toEqual(1);
    // expect(x.legend?.enabled).toEqual(false);
    expect((_a = (x.xAxis).title) === null || _a === void 0 ? void 0 : _a.text).toEqual('test');
    // expect((<Highcharts.YAxisOptions>(x.yAxis)).labels?.format).toEqual('{value}');
});
test('bar chart parameters work', function () {
    var x = index_1.createBarChart({
        title: { text: 'test' },
        subtitle: { align: 'left' },
        tooltip: { borderColor: 'red' },
        plotOptions: { series: { states: { hover: { enabled: false } } } },
        series: [{ name: 'Test', type: "column" }],
        legend: { enabled: false },
        colors: ['red', 'blue'],
        xAxis: { title: { text: 'test' } },
        yAxis: { labels: { format: '{value} unit' } },
    });
    expect(x.colors).toEqual(['red', 'blue']);
    // expect(x.title?.text).toEqual('test');
    // expect(x.subtitle?.align).toEqual('left');
    // expect(x.tooltip?.borderColor).toEqual('red');
    // // // // expect(x.plotOptions?.series?.states?.hover?.enabled).toEqual(false);
    expect(x.series).toEqual([{ name: 'Test', type: "column" }]);
    // expect(x.series?.length).toEqual(1);
    // expect(x.legend?.enabled).toEqual(false);
    // expect((<Highcharts.XAxisOptions>(x.xAxis)).title?.text).toEqual('test');
    // expect((<Highcharts.YAxisOptions>(x.yAxis)).labels?.format).toEqual('{value} unit');
});
test('donut chart parameters work', function () {
    var x = index_1.createDonutChart({
        title: { text: 'test' },
        subtitle: { align: 'left' },
        tooltip: { borderColor: 'red' },
        plotOptions: { series: { states: { hover: { enabled: false } } } },
        series: [{ name: 'Test', type: 'pie' }],
        legend: { enabled: false }
    });
    // expect(x.title?.text).toEqual('test');
    // expect(x.subtitle?.align).toEqual('left');
    // expect(x.tooltip?.borderColor).toEqual('red');
    // // // // expect(x.plotOptions?.series?.states?.hover?.enabled).toEqual(false);
    expect(x.series).toEqual([{ name: 'Test', type: 'pie' }]);
    // expect(x.series?.length).toEqual(1);
    // expect(x.legend?.enabled).toEqual(false);
});
