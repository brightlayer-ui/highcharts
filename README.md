# Highcharts Configurations
This package contains basic configuration settings for HighCharts line, pie, bar, and donut graphs for use with PX Blue. 

## Installation
Install with npm
```
npm install --save @pxblue/visualizations
```
or yarn
```
yarn add @pxblue/visualizations
```

## Basic Usage
The fastest way to use these configurations is to load one (or more) of the sample graphs.

```
import { 
    lineSample, 
    pieSample, 
    donutSample, 
    barSample 
} from '@pxblue/visualizations/highcharts/samples'; 
```

and then use them as placeholders in your application.

For Angular:
```
import { Chart } from 'angular-highcharts';
...
let lineChart = new Chart(lineSample);
```

For React:
```
import ReactHighcharts from 'react-highcharts';
...
<ReactHighcharts config={lineSample}/>
```

For more detailed instructions on using HighCharts in your application, see our demos for [Angular](https://stackblitz.com/edit/pxblue-highcharts-angular) or [React](https://stackblitz.com/edit/pxblue-highcharts-react).

## Advanced Usage
When you are ready to build charts of your own, you can choose to extend one of the sample charts, or you can start from one of the base configurations. If you use the base configurations, your graphs will not draw (and your app may not even render) until you have supplied all of the requisite configuration information. Typically this means specifying a data source and configurations for the x and y axis.

In order to extend the basic configuration objects, you will need to make a clone of the object and then you will be able to directly manipulate the various properties. We recommend you use [lodash.clonedeep](https://www.npmjs.com/package/lodash.clonedeep) to simplify this process. If you do not properly deep clone the object, you may end up with shared references and changes being applied in certain places you do not intend.

```
import { pieBaseConfig } from '@pxblue/visualizations/highcharts';
import clonedeep from 'lodash.clonedeep';
...
let myPieConfig = clonedeep(pieBaseConfig);
myPie.series = [{
    name: 'Browsers',
    data: [
        { name: 'Chrome', y: 61.41 }, 
        { name: 'Internet Explorer', y: 11.84 }, 
        { name: 'Firefox', y: 10.85 }
    ]
}];
```

Please refer to the [Highcharts API](https://api.highcharts.com/highcharts/) for more information about all of the properties that you can specify as part of your chart configuration.

## Additional Utilities
This package also includes several utility functions and style variables to make it easier for users to customize certain parts of the chart configuration. Specific documentation for these functions/variables can be found in the source files.

```
import {
    OpenSans,       
    pxblueColors,
    sizes
} from '@pxblue/visualizations/styles';

import {
    getRandomData,       
    sharedTooltipFormatter,
    sharedTimeTooltipormatter,
    simpleTooltipFormatter
} from '@pxblue/visualizations/utilities';
```