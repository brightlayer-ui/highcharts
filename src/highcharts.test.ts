import { createBarChart, createLineChart, createPieChart, createDonutChart } from './index';
import { seriesType } from 'highcharts';

test('helper functions return object', () => {
    expect(createBarChart()).toBeDefined();
    expect(createLineChart()).toBeDefined();
    expect(createPieChart()).toBeDefined();
    expect(createDonutChart()).toBeDefined();
});

test('pie chart parameters work', () => {
    const x = createPieChart({
        title: { text: 'test' },
        subtitle: { align: 'left' },
        tooltip: { borderColor: 'red' },
        plotOptions: { series: { states: { hover: { halo: { size: 20 } } } } },
        series: [{ name: 'Test', type: 'pie' }],
        legend: { enabled: false },
    });
    expect(x.title?.text).toEqual('test');
    expect(x.subtitle?.align).toEqual('left');
    expect(x.tooltip?.borderColor).toEqual('red');
    expect(x.plotOptions?.series?.states?.hover?.halo?.size).toEqual(20);
    expect(x.series).toEqual([{ name: 'Test', type: 'pie' }]);
    expect(x.series?.length).toEqual(1);
    expect(x.legend?.enabled).toEqual(false);
});

test('line chart parameters work', () => {
    const x = createLineChart({
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
    const _xAxis = x.xAxis as Highcharts.XAxisOptions;
    const _yAxis = x.yAxis as Highcharts.YAxisOptions;
    expect(x.colors).toEqual(['red', 'blue']);
    expect(x.title?.text).toEqual('test');
    expect(x.subtitle?.align).toEqual('left');
    expect(x.tooltip?.borderColor).toEqual('red');
    expect(x.plotOptions?.series?.states?.hover?.enabled).toEqual(false);
    expect(x.series).toEqual([{ name: 'Test', type: 'line' }]);
    expect(x.series?.length).toEqual(1);
    expect(x.legend?.enabled).toEqual(false);
    expect(_xAxis.title?.text).toEqual('test');
    expect(_yAxis.labels?.format).toEqual('{value}');
});

test('bar chart parameters work', () => {
    const x = createBarChart({
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
    const _xAxis = x.xAxis as Highcharts.XAxisOptions;
    const _yAxis = x.yAxis as Highcharts.YAxisOptions;
    expect(x.colors).toEqual(['red', 'blue']);
    expect(x.title?.text).toEqual('test');
    expect(x.subtitle?.align).toEqual('left');
    expect(x.tooltip?.borderColor).toEqual('red');
    expect(x.plotOptions?.series?.states?.hover?.enabled).toEqual(false);
    expect(x.series).toEqual([{ name: 'Test', type: 'column' }]);
    expect(x.series?.length).toEqual(1);
    expect(x.legend?.enabled).toEqual(false);
    expect(_xAxis.title?.text).toEqual('test');
    expect(_yAxis.labels?.format).toEqual('{value} unit');
});

test('donut chart parameters work', () => {
    const x = createDonutChart({
        title: { text: 'test' },
        subtitle: { align: 'left' },
        tooltip: { borderColor: 'red' },
        plotOptions: { series: { states: { hover: { enabled: false } } } },
        series: [{ name: 'Test', type: 'pie' }],
        legend: { enabled: false },
    });
    expect(x.title?.text).toEqual('test');
    expect(x.subtitle?.align).toEqual('left');
    expect(x.tooltip?.borderColor).toEqual('red');
    expect(x.plotOptions?.series?.states?.hover?.enabled).toEqual(false);
    expect(x.series).toEqual([{ name: 'Test', type: 'pie' }]);
    expect(x.series?.length).toEqual(1);
    expect(x.legend?.enabled).toEqual(false);
});
