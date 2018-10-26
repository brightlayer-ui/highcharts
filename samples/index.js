/**
Copyright (c) 2018-present, Eaton
 
All rights reserved.
 
This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

/*
  This file contains sample configuration objects for line, bar (column), pie, and donut charts.
  These expand on the base configuration objects and include all of the parameters required to successfully 
  render the chart to the page (if parameters are missing, your app will display a blank screen or potentially
  even crash). These can be used as placeholders while you build out the final configuration that you want
  to use.
*/

import { 
  OpenSans, 
  pxblueColors,
  sizes
} from '../styles';

import { 
  getRandomData, 
  sharedTooltipFormatter, 
  sharedTimeTooltipFormatter, 
  simpleTooltipFormatter 
} from '../utilities';


export const lineSample = {
  useUTC: false,
  chart: {
    type: 'line',
    zoomType: 'xy',
    panning: true,
    panKey: 'shift'
  },
  colors: pxblueColors,
  credits: {
    enabled: false
  },
  legend: {
    enabled: true,
    itemStyle: {
      fontFamily: OpenSans
    }
  },
  plotOptions: {
    series:{
      states:{
        hover:{
          enabled: true,
          lineWidthPlus: 0
        }
      },
      marker: {
        enabled: false
      },
      lineWidth: 2
    }
  },
  series: [{
    name: 'Voltage',
    yAxis: 0,
    data: getRandomData(500, false, 20, true)
  },
  {
    name: 'Current',
    yAxis: 1,
    type: 'spline',
    data: getRandomData(100, true, 20, true)
  }],
  subtitle: {
    text: 'Sample Subtitle',
    style: {'font-family': OpenSans, 'font-size': sizes.subtitle}
  },
  title: {
    text: 'Sample Line Graph',
    style: {'font-family': OpenSans, 'font-size': sizes.title}
  },
  tooltip: {
    valueSuffix: null,
    backgroundColor: 'white',
    borderColor: 'transparent',
    borderRadius: 0,
    style: {'font-family': OpenSans, 'font-size': sizes.tooltip},
    useHTML: true,
    formatter: function(){return sharedTimeTooltipFormatter(this, ['V','A'],[3,3])},
    shared: true
  },
  xAxis: {
    type: 'datetime',
    tickPixelInterval: 200,
    title: {
      style: {'font-family': OpenSans, 'font-size': sizes.axisTitle},
      text: "Last 20 Seconds"
    },
    dateTimeLabelFormats: {
      second: '%H:%M:%S',
      minute: '%H:%M',
      hour: '%H:%M'
    },
    categories:  null,
    labels: {
      distance: null
    },
    startOnTick: false,
    endOnTick: false
  },
  yAxis: [{
    title: {
      text: 'Voltage',
      style: {'font-family': OpenSans, 'font-size': sizes.axisTitle},
    },
    labels: {
      style: {'font-family': OpenSans, 'font-size': sizes.axisLabel},
      format: "{value} V"
    },
    plotLines: [{
      color: '#f33333',
      width: 3,
      value: 350,
      dashStyle: 'dash'
    }]
  },
  {
    title: {
      text: 'Amperage',
      style: {'font-family': OpenSans, 'font-size': sizes.axisTitle},
    },
    labels: {
      style: {'font-family': OpenSans, 'font-size': sizes.axisLabel},
      format: "{value} A"
    },
    opposite: true
  }]
};
export const barSample = {
  chart: {
      type: 'column'
  },
  colors: pxblueColors,
  credits: {
      enabled: false
  },
  legend: {
      enabled: true,
      itemStyle: {
        fontFamily: OpenSans
      }
  },
  plotOptions: {
    series:{
      states:{
        hover: {
          enabled: false
        }
      }
    },
    column: {
        pointPadding: 0,
        borderWidth: 0
    }
  },
  series: [{
    name: 'Energy',
    yAxis: 0,
    data: getRandomData(500, false, 12, false)
  },
  {
    name: 'Power',
    yAxis: 1,
    data: getRandomData(500, false, 12, false)
  }],
  subtitle: {
    text: 'Sample Subtitle',
    style: {'font-family': OpenSans, 'font-size': sizes.subtitle},
  },
  title: {
    text: 'Sample Bar Graph',
    style: {'font-family': OpenSans, 'font-size': sizes.title},
  },
  tooltip: {
    valueSuffix: null,
    style: {'font-family': OpenSans, 'font-size': sizes.tooltip},
    useHTML: true,
    shared: true,
    backgroundColor: 'white',
    borderColor: 'transparent',
    borderRadius: 0,
    formatter: function(){return sharedTooltipFormatter(this, ['V','A'],[3,3])},
  },
  xAxis: {
      categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      title: {
        style: {'font-family': OpenSans, 'font-size': sizes.axisTitle},
        text: "Last 12 Months"
      },
      labels: {
        enabled: true
      },
      type: 'category'
  },
  yAxis: [{
    title: {
      text: 'Energy (kWh)',
      style: {'font-family': OpenSans, 'font-size': sizes.axisTitle},
    },
    labels: {
      style: {'font-family': OpenSans, 'font-size': sizes.axisLabel},
      format: "{value}"
    },
    plotBands: [{
      color: '#c4e9bc',
      from: 0,
      to: 200
    },
    {
      color: '#fbefc1',
      from: 200,
      to: 300
    },
    {
      color: '#efc5c5',
      from: 300,
      to: Number.MAX_SAFE_INTEGER
    }]
  },
  {
    title: {
      text: 'Power (VAR)',
      style: {'font-family': OpenSans, 'font-size': sizes.axisTitle},
    },
    labels: {
      style: {'font-family': OpenSans, 'font-size': sizes.axisLabel},
      format: "{value}"
    },
    opposite: true
  }]
};
export const donutSample = {
  chart: {
    type: 'pie',
    spacing: [0,0,0,0]
  },
  title: {
    text: 'Sample Donut Graph',
    style: {'font-family': OpenSans, 'font-size': sizes.title}
  },
  subtitle: {
    text: 'Sample Subtitle',
    style: {'font-family': OpenSans, 'font-size': sizes.subtitle}
  },
  tooltip: {
    useHTML: true,
    backgroundColor: 'white',
    borderColor: 'transparent',
    borderRadius: 0,
    formatter: function () {
      var s = '<div style="padding: 4px; font-family: Open Sans; font-size: '+sizes.tooltip+'"><table>';
      s += '<tr>'+
            '<td style="padding:0; color: ' + this.point.color + '">' + this.point.name + ':</td><td> <b>' + this.y.toFixed(3) + '</b></td></tr>'
      s += '</table></div>';
      return s;
    }
  },
  plotOptions: {
    series:{
      states:{
        hover:{
          halo:{
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
  },
  legend: {
    enabled: true,
    itemStyle: {
      fontFamily: OpenSans
    }
  },
  series: [{
        name: 'Browsers',
        colors: pxblueColors,
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
};
export const pieSample = {
  chart: {
      type: 'pie',
      spacing: [0,0,0,0]
  },
  title: {
      text: 'Sample Pie Graph',
      style: {'font-family': OpenSans, 'font-size': sizes.title}
  },
  subtitle: {
      text: 'Sample Subtitle',
      style: {'font-family': OpenSans, 'font-size': sizes.subtitle}
  },
  tooltip: {
      useHTML: true,
      backgroundColor: 'white',
      borderColor: 'transparent',
      borderRadius: 0,
      formatter: function () {
      var s = '<div style="padding: 4px; font-family: Open Sans; font-size: '+sizes.tooltip+'"><table>';
      s += '<tr>'+
              '<td style="padding:0; color: ' + this.point.color + '">' + this.point.name + ':</td><td> <b>' + this.y.toFixed(3) + '</b></td></tr>'
      s += '</table></div>';
      return s;
      }
  },
  plotOptions: {
      series:{
      states:{
          hover:{
          halo:{
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
  legend: {
      enabled: true,
      itemStyle: {
        fontFamily: OpenSans
      }
  },
  series: [{
          name: 'Browsers',
          colors: pxblueColors,
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
};

