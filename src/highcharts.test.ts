import { createBarChart, createLineChart, createPieChart, createDonutChart } from './index';

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
    const _title = x.title as Highcharts.TitleOptions;
    const _subtitle = x.subtitle as Highcharts.SubtitleOptions;
    const _tooltip = x.tooltip as Highcharts.TooltipOptions;
    const _size = (((((x.plotOptions as Highcharts.PlotOptions).series as Highcharts.PlotSeriesOptions)
        .states as Highcharts.PlotSeriesStatesOptions).hover as Highcharts.PlotSeriesStatesHoverOptions)
        .halo as Highcharts.PlotSeriesStatesHoverHaloOptions).size;
    const _series = x.series as Highcharts.SeriesOptionsType[];
    const _legend = x.legend as Highcharts.LegendOptions;
    expect(_title.text).toEqual('test');
    expect(_subtitle.align).toEqual('left');
    expect(_tooltip.borderColor).toEqual('red');
    expect(_size).toEqual(20);
    expect(_series).toEqual([{ name: 'Test', type: 'pie' }]);
    expect(_series.length).toEqual(1);
    expect(_legend.enabled).toEqual(false);
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
    const _title = x.title as Highcharts.TitleOptions;
    const _subtitle = x.subtitle as Highcharts.SubtitleOptions;
    const _tooltip = x.tooltip as Highcharts.TooltipOptions;
    const _hover = (((x.plotOptions as Highcharts.PlotOptions).series as Highcharts.PlotSeriesOptions)
        .states as Highcharts.PlotSeriesStatesOptions).hover as Highcharts.PlotSeriesStatesHoverOptions;
    const _series = x.series as Highcharts.SeriesOptionsType[];
    const _legend = x.legend as Highcharts.LegendOptions;
    const _xAxis = x.xAxis as Highcharts.XAxisOptions;
    const _yAxis = x.yAxis as Highcharts.YAxisOptions;
    expect(x.colors).toEqual(['red', 'blue']);
    expect(_title.text).toEqual('test');
    expect(_subtitle.align).toEqual('left');
    expect(_tooltip.borderColor).toEqual('red');
    expect(_hover.enabled).toEqual(false);
    expect(_series).toEqual([{ name: 'Test', type: 'line' }]);
    expect(_series.length).toEqual(1);
    expect(_legend.enabled).toEqual(false);
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
    const _title = x.title as Highcharts.TitleOptions;
    const _subtitle = x.subtitle as Highcharts.SubtitleOptions;
    const _tooltip = x.tooltip as Highcharts.TooltipOptions;
    const _hover = (((x.plotOptions as Highcharts.PlotOptions).series as Highcharts.PlotSeriesOptions)
        .states as Highcharts.PlotSeriesStatesOptions).hover as Highcharts.PlotSeriesStatesHoverOptions;
    const _series = x.series as Highcharts.SeriesOptionsType[];
    const _legend = x.legend as Highcharts.LegendOptions;
    const _xAxis = x.xAxis as Highcharts.XAxisOptions;
    const _yAxis = x.yAxis as Highcharts.YAxisOptions;
    expect(x.colors).toEqual(['red', 'blue']);
    expect(_title.text).toEqual('test');
    expect(_subtitle.align).toEqual('left');
    expect(_tooltip.borderColor).toEqual('red');
    expect(_hover.enabled).toEqual(false);
    expect(_series).toEqual([{ name: 'Test', type: 'column' }]);
    expect(_series.length).toEqual(1);
    expect(_legend.enabled).toEqual(false);
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

    const _title = x.title as Highcharts.TitleOptions;
    const _subtitle = x.subtitle as Highcharts.SubtitleOptions;
    const _tooltip = x.tooltip as Highcharts.TooltipOptions;
    const _hover = (((x.plotOptions as Highcharts.PlotOptions).series as Highcharts.PlotSeriesOptions)
        .states as Highcharts.PlotSeriesStatesOptions).hover as Highcharts.PlotSeriesStatesHoverOptions;
    const _series = x.series as Highcharts.SeriesOptionsType[];
    const _legend = x.legend as Highcharts.LegendOptions;
    expect(_title.text).toEqual('test');
    expect(_subtitle.align).toEqual('left');
    expect(_tooltip.borderColor).toEqual('red');
    expect(_hover.enabled).toEqual(false);
    expect(_series).toEqual([{ name: 'Test', type: 'pie' }]);
    expect(_series.length).toEqual(1);
    expect(_legend.enabled).toEqual(false);
});
