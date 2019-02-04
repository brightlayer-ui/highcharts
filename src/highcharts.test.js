import { createBarChart, createLineChart, createPieChart, createDonutChart } from './index';

test('helper functions return object', () => {
    let x = createBarChart();
    expect(createBarChart()).toBeDefined();
    expect(createLineChart()).toBeDefined();
    expect(createPieChart()).toBeDefined();
    expect(createDonutChart()).toBeDefined();
});

test('pie chart parameters work', () => {
    let x = createPieChart({
        title: {text: 'test'},
        subtitle: {align: 'left'},
        tooltip: {borderColor: 'red'},
        plotOptions: {series: {states: {hover: {halo: {size: 20}}}}},
        series: [{name: 'Test'}],
        legend: {enabled: false}
    });
    expect(x.title.text).toEqual('test');
    expect(x.subtitle.align).toEqual('left');
    expect(x.tooltip.borderColor).toEqual('red');
    expect(x.plotOptions.series.states.hover.halo.size).toEqual(20);
    expect(x.series).toContainEqual({name: 'Test'});
    expect(x.series.length).toEqual(1);
    expect(x.legend.enabled).toEqual(false);
});

test('line chart parameters work', () => {
    let x = createLineChart({
        title: {text: 'test'},
        subtitle: {align: 'left'},
        tooltip: {borderColor: 'red'},
        plotOptions: {series: {states: {hover: {enabled: false}}}},
        series: [{name: 'Test'}],
        legend: {enabled: false},
        colors: ['red', 'blue'],
        xAxis:{title:{text: 'test'}},
        yAxis: {labels:{format: '{value}'}},
        useUTC: true
    });
    expect(x.useUTC).toEqual(true);
    expect(x.colors).toEqual(['red','blue']);
    expect(x.title.text).toEqual('test');
    expect(x.subtitle.align).toEqual('left');
    expect(x.tooltip.borderColor).toEqual('red');
    expect(x.plotOptions.series.states.hover.enabled).toEqual(false);
    expect(x.series).toContainEqual({name: 'Test'});
    expect(x.series.length).toEqual(1);
    expect(x.legend.enabled).toEqual(false);
    expect(x.xAxis.title.text).toEqual('test');
    expect(x.yAxis.labels.format).toEqual('{value}');

});

test('bar chart parameters work', () => {
    let x = createBarChart({
        title: {text: 'test'},
        subtitle: {align: 'left'},
        tooltip: {borderColor: 'red'},
        plotOptions: {series: {states: {hover: {enabled: false}}}},
        series: [{name: 'Test'}],
        legend: {enabled: false},
        colors: ['red', 'blue'],
        xAxis:{title:{text: 'test'}},
        yAxis: {labels:{format: '{value} unit'}},
    });
    expect(x.colors).toEqual(['red','blue']);
    expect(x.title.text).toEqual('test');
    expect(x.subtitle.align).toEqual('left');
    expect(x.tooltip.borderColor).toEqual('red');
    expect(x.plotOptions.series.states.hover.enabled).toEqual(false);
    expect(x.series).toContainEqual({name: 'Test'});
    expect(x.series.length).toEqual(1);
    expect(x.legend.enabled).toEqual(false);
    expect(x.xAxis.title.text).toEqual('test');
    expect(x.yAxis.labels.format).toEqual('{value} unit');
});

test('donut chart parameters work', () => {
    let x = createDonutChart({
        title: {text: 'test'},
        subtitle: {align: 'left'},
        tooltip: {borderColor: 'red'},
        plotOptions: {series: {states: {hover: {enabled: false}}}},
        series: [{name: 'Test'}],
        legend: {enabled: false}
    });
    expect(x.title.text).toEqual('test');
    expect(x.subtitle.align).toEqual('left');
    expect(x.tooltip.borderColor).toEqual('red');
    expect(x.plotOptions.series.states.hover.enabled).toEqual(false);
    expect(x.series).toContainEqual({name: 'Test'});
    expect(x.series.length).toEqual(1);
    expect(x.legend.enabled).toEqual(false);
});