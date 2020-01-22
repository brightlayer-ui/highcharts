import { createBarChart, createLineChart, createPieChart, createDonutChart } from './index';

test('helper functions return object', () => {
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
        series: [{name: 'Test', type: 'pie'}],
        legend: {enabled: false}
    });
    expect(x.title?.text).toEqual('test');
    expect(x.subtitle?.align).toEqual('left');
    expect(x.tooltip?.borderColor).toEqual('red');
    expect(x.plotOptions?.series?.states?.hover?.halo?.size).toEqual(20);
    expect(x.series).toContainEqual({name: 'Test'});
    expect(x.series?.length).toEqual(1);
    expect(x.legend?.enabled).toEqual(false);
});

test('line chart parameters work', () => {
    let x = createLineChart({
        title: {text: 'test'},
        subtitle: {align: 'left'},
        tooltip: {borderColor: 'red'},
        plotOptions: {series: {states: {hover: {enabled: false}}}},
        series: [{name: 'Test', type: "line"}],
        legend: {enabled: false},
        colors: ['red', 'blue'],
        xAxis:{title:{text: 'test'}},
        yAxis: {labels:{format: '{value}'}}
    });
    expect(x.colors).toEqual(['red','blue']);
    expect(x.title?.text).toEqual('test');
    expect(x.subtitle?.align).toEqual('left');
    expect(x.tooltip?.borderColor).toEqual('red');
    expect(x.plotOptions?.series?.states?.hover?.enabled).toEqual(false);
    expect(x.series).toContainEqual({name: 'Test'});
    expect(x.series?.length).toEqual(1);
    expect(x.legend?.enabled).toEqual(false);
    expect((<Highcharts.XAxisOptions>(x.xAxis)).title?.text).toEqual('test');
    expect((<Highcharts.YAxisOptions>(x.yAxis)).labels?.format).toEqual('{value}');

});

test('bar chart parameters work', () => {
    let x = createBarChart({
        title: {text: 'test'},
        subtitle: {align: 'left'},
        tooltip: {borderColor: 'red'},
        plotOptions: {series: {states: {hover: {enabled: false}}}},
        series: [{name: 'Test', type: "column"}],
        legend: {enabled: false},
        colors: ['red', 'blue'],
        xAxis:{title:{text: 'test'}},
        yAxis: {labels:{format: '{value} unit'}},
    });
    expect(x.colors).toEqual(['red','blue']);
    expect(x.title?.text).toEqual('test');
    expect(x.subtitle?.align).toEqual('left');
    expect(x.tooltip?.borderColor).toEqual('red');
    expect(x.plotOptions?.series?.states?.hover?.enabled).toEqual(false);
    expect(x.series).toContainEqual({name: 'Test'});
    expect(x.series?.length).toEqual(1);
    expect(x.legend?.enabled).toEqual(false);
    expect((<Highcharts.XAxisOptions>(x.xAxis)).title?.text).toEqual('test');
    expect((<Highcharts.YAxisOptions>(x.yAxis)).labels?.format).toEqual('{value} unit');
});

test('donut chart parameters work', () => {
    let x = createDonutChart({
        title: {text: 'test'},
        subtitle: {align: 'left'},
        tooltip: {borderColor: 'red'},
        plotOptions: {series: {states: {hover: {enabled: false}}}},
        series: [{name: 'Test', type: 'pie'}],
        legend: {enabled: false}
    });
    expect(x.title?.text).toEqual('test');
    expect(x.subtitle?.align).toEqual('left');
    expect(x.tooltip?.borderColor).toEqual('red');
    expect(x.plotOptions?.series?.states?.hover?.enabled).toEqual(false);
    expect(x.series).toContainEqual({name: 'Test'});
    expect(x.series?.length).toEqual(1);
    expect(x.legend?.enabled).toEqual(false);
});