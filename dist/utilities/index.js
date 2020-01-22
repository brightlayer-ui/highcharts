"use strict";
/**
Copyright (c) 2018-present, Eaton
 
All rights reserved.
 
This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/
Object.defineProperty(exports, "__esModule", { value: true });
/*
  This file contains various utility functions used to help build highcharts components.

  getRandomData: generates random data for a placeholder chart
  sharedTooltipFormatter: function used to render a shared html tooltip
  sharedTimeTooltipFormatter: function used to render a shared html tooltip with Timestamp x value
  simpleTooltipFormatter: function used to render a simple html tooltip for single series charts
*/
var styles_1 = require("../styles");
// timestamp used as a starting point for randomized time-series data
var startTime = (new Date()).getTime();
var contextErrorMessage = 'Error: No context.points.';
/*
  returns a set of randomized numeric data based on the paramters

  scale: (Number) the range of numeric values
  balanced: (Boolean) if true, data will range from -scale/2 to +scale/2. If false, data will range from 0 to scale.
  count: (Number) the number of data points to generate
  timeseries: (Boolean) if true, the x-values will be timestamps
*/
function getRandomData(scale, balanced, count, timeseries) {
    if (balanced === void 0) { balanced = true; }
    if (count === void 0) { count = 20; }
    if (timeseries === void 0) { timeseries = false; }
    // generate an array of random data
    var data = [];
    var i;
    for (i = 0; i < count; i++) {
        if (timeseries) {
            data.push({
                x: startTime + i * 1000,
                y: (Math.random() - (balanced ? 0.5 : 0)) * scale
            });
        }
        else {
            data.push((Math.random() - (balanced ? 0.5 : 0)) * scale);
        }
    }
    return data;
}
exports.getRandomData = getRandomData;
/*
  returns an HTML string for the tooltip of a shared tooltip

  units: (Array<String>) an array of units to append (one per series)
  rounding: (Array<Number>) an array specifying how many decimal places to round the values in the tooltip (one value per series)
*/
function sharedTooltipFormatter(context, units, rounding) {
    if (units === void 0) { units = []; }
    if (rounding === void 0) { rounding = []; }
    var s = "<div style=\"min-width: 100px; padding: 4px; font-family: Open Sans; font-size: " + styles_1.sizes.tooltip + "\"><table>";
    if (context.points) {
        for (var i = 0; i < context.points.length; i++) {
            s += "" + '<tr>' +
                '<td style="padding:0"><b>' + context.points[i].y.toFixed(rounding.length > 0 ? rounding[i] : 3) + "<span style=\"color: " + context.points[i].color + "\">" + (units.length > 0 ? " " + units[i] : '') + "</span></b></td></tr>";
        }
    }
    else {
        s += contextErrorMessage;
    }
    s += "</table><span>" + context.x + "</span></div>";
    return s;
}
exports.sharedTooltipFormatter = sharedTooltipFormatter;
/*
  returns an HTML string for the tooltip of a shared tooltip

  units: (Array<String>) an array of units to append (one per series)
  rounding: (Array<Number>) an array specifying how many decimal places to round the values in the tooltip (one value per series)
*/
function sharedTimeTooltipFormatter(context, units, rounding) {
    if (units === void 0) { units = []; }
    if (rounding === void 0) { rounding = []; }
    var s = "<div style=\"padding: 4px; font-family: Open Sans; font-size: " + styles_1.sizes.tooltip + "\"><table>";
    if (context.points) {
        for (var i = 0; i < context.points.length; i++) {
            s += "" + '<tr>' +
                '<td style="padding:0"><b>' + '<span style="color: ' + context.points[i].color + "\">" + (context.points[i].y.toFixed(rounding.length > 0 ? rounding[i] : 3) + (units.length > 0 ? " " + units[i] : '')) + "</span></b></td></tr>";
        }
    }
    else {
        s += contextErrorMessage;
    }
    s += "</table><span>" + (new Date(context.x)).toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + "</span></div>";
    return s;
}
exports.sharedTimeTooltipFormatter = sharedTimeTooltipFormatter;
/*
  returns an HTML string for the tooltip of a shared tooltip

  units: (Array<String>) an array of units to append (one per series)
  rounding: (Array<Number>) an array specifying how many decimal places to round the values in the tooltip (one value per series)
*/
function simpleTooltipFormatter(context, units, rounding) {
    if (units === void 0) { units = ''; }
    if (rounding === void 0) { rounding = 2; }
    return "<div style=\"padding: 4px; font-family: Open Sans; font-size: " + styles_1.sizes.tooltip + "\">" +
        "<table>" +
        "<tr>" +
        ("<td style=\"padding:0; color: " + context.point.color + "\">" + context.point.name + ":</td>") +
        ("<td><b>" + context.y.toFixed(rounding) + (units ? " " + units : '') + "</b></td>") +
        "</tr>" +
        "</table>" +
        "</div>";
}
exports.simpleTooltipFormatter = simpleTooltipFormatter;
