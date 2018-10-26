/**
Copyright (c) 2018-present, Eaton
 
All rights reserved.
 
This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

/*
  This file contains various utility functions used to help build highcharts components.

  getRandomData: generates random data for a placeholder chart
  sharedTooltipFormatter: function used to render a shared html tooltip
  sharedTimeTooltipFormatter: function used to render a shared html tooltip with Timestamp x value
  simpleTooltipFormatter: function used to render a simple html tooltip for single series charts
*/

import { sizes } from '../styles';

// timestamp used as a starting point for randomized time-series data
const startTime = (new Date()).getTime();

/*
  returns a set of randomized numeric data based on the paramters

  scale: (Number) the range of numeric values
  balanced: (Boolean) if true, data will range from -scale/2 to +scale/2. If false, data will range from 0 to scale.
  count: (Number) the number of data points to generate
  timeseries: (Boolean) if true, the x-values will be timestamps
*/
export function getRandomData(scale, balanced = true, count = 20, timeseries = false){
  // generate an array of random data
  var data = [], i;

  for (i = 0; i < count; i++) {
    if(timeseries){
        data.push({
            x: startTime + i * 1000,
            y: (Math.random() - (balanced ? 0.5 : 0)) * scale
        });
    }
    else{
        data.push((Math.random() - (balanced ? 0.5 : 0) )* scale);
    }
  }
  return data;
}

/*
  returns an HTML string for the tooltip of a shared tooltip

  units: (Array<String>) an array of units to append (one per series)
  rounding: (Array<Number>) an array specifying how many decimal places to round the values in the tooltip (one value per series)
*/
export function sharedTooltipFormatter(context, units = [], rounding = []){
  let s = '<div style="padding: 4px; font-family: Open Sans; font-size: '+sizes.tooltip+'"><table>';
  for(let i = 0; i < context.points.length; i++){
    s += '<tr>'+
        '<td style="padding:0"><b>' + (context.points[i].y.toFixed(rounding.length > 0 ? rounding[i] : 3) + '<span style="color: '+context.points[i].series.color+'">' + (units.length > 0 ? ' ' + units[i] : '')) + '</span></b></td></tr>'
  }
  s += '</table><span>' + context.x + '</span></div>';
  return s;
}

/*
  returns an HTML string for the tooltip of a shared tooltip

  units: (Array<String>) an array of units to append (one per series)
  rounding: (Array<Number>) an array specifying how many decimal places to round the values in the tooltip (one value per series)
*/
export function sharedTimeTooltipFormatter(context, units = [], rounding = []){
  let s = '<div style="padding: 4px; font-family: Open Sans; font-size: '+sizes.tooltip+'"><table>';
  for(let i = 0; i < context.points.length; i++){
    s += '<tr>'+
        '<td style="padding:0"><b>' + (context.points[i].y.toFixed(rounding.length > 0 ? rounding[i] : 3) + '<span style="color: '+context.points[i].series.color+'">' + (units.length > 0 ? ' ' + units[i] : '')) + '</span></b></td></tr>'
  }
  s += '</table><span>' + (new Date(context.x)).toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit', second: '2-digit'}) + '</span></div>';
  return s;
}

/*
  returns an HTML string for the tooltip of a shared tooltip

  units: (Array<String>) an array of units to append (one per series)
  rounding: (Array<Number>) an array specifying how many decimal places to round the values in the tooltip (one value per series)
*/
export function simpleTooltipFormatter(context, units = '', rounding = 2){
  return '<div style="padding: 4px; font-family: Open Sans; font-size: '+sizes.tooltip+'">'+
            '<table>'+
              '<tr>' +
                '<td style="padding:0; color: ' + context.point.color + '">' + context.point.name + ':</td>'+
                '<td><b>' + context.y.toFixed(rounding) + (units ? ' ' + units : '') + '</b></td>'+
              '</tr>' +
            '</table>'+
          '</div>';
}
