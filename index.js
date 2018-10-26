/**
Copyright (c) 2018-present, Eaton
 
All rights reserved.
 
This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

/*
  This file contains the base/skeleton configuration objects for line, bar (column), pie, and donut charts.
  In order to render charts, users must extend these basic objects to include the required (and optional) data.
  This includes supplying definitions for the axes, data, etc. See the /samples directory for fully configured 
  examples that can be used as placeholders.
*/

import { 
  OpenSans, 
  sizes,
  pxblueColors
} from './styles';

import { 
  getRandomData, 
  sharedTooltipFormatter, 
  sharedTimeTooltipFormatter, 
  simpleTooltipFormatter 
} from './utilities';


// the default configuration for pie charts
export const pieBaseConfig = {
  chart: {
    type: 'pie',
    spacing: [0,0,0,0]
  },
  title: {
    text:'',
    align: 'left',
    style: {'font-family': OpenSans, 'font-size': sizes.title}
  },
  subtitle: {
    text:'',
    align: 'left',
    style: {'font-family': OpenSans, 'font-size': sizes.subtitle}
  },
  tooltip: {
    useHTML: true,
    backgroundColor: 'white',
    borderColor: 'transparent',
    borderRadius: 0,
    formatter: function () {return simpleTooltipFormatter(this, '', 2)}
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
  series: [],
  credits: {
    enabled: false
  }
};

// the default configuration for donut charts
export const donutBaseConfig = {
  chart: {
    type: 'pie',
    spacing: [0,0,0,0]
  },
  title: {
    text: '',
    align: 'left',
    style: {'font-family': OpenSans, 'font-size': sizes.title}
  },
  subtitle: {
    text: '',
    align: 'left',
    style: {'font-family': OpenSans, 'font-size': sizes.subtitle}
  },
  tooltip: {
    useHTML: true,
    backgroundColor: 'white',
    borderColor: 'transparent',
    borderRadius: 0,
    formatter: function () {return simpleTooltipFormatter(this, '', 2)}
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
  series: [],
  credits: {
    enabled: false
  }
};

// the default configuration for bar (column) charts
export const barBaseConfig = {
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
      formatter: function(){return sharedTooltipFormatter(this, [],[])}
    },
    xAxis: [],
    yAxis: []
};

// the default configuration for line charts
export const lineBaseConfig = {
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
  series: [],
  subtitle: {
    text: '',
    style: {'font-family': OpenSans, 'font-size': sizes.subtitle}
  },
  title: {
    text: '',
    style: {'font-family': OpenSans, 'font-size': sizes.title}
  },
  tooltip: {
    valueSuffix: null,
    backgroundColor: 'white',
    borderColor: 'transparent',
    borderRadius: 0,
    style: {'font-family': OpenSans, 'font-size': sizes.tooltip},
    useHTML: true,
    formatter: function(){return sharedTimeTooltipFormatter(this, [],[])},
    shared: true
  },
  xAxis: [],
  yAxis: []
};


