import React from 'react';
// @ts-ignore
import ReactHighcharts from 'react-highcharts';

// @ts-ignore
import { createLineChart, createBarChart, createPieChart, createDonutChart } from '@pxblue/highcharts';

// @ts-ignore
import * as PXBColors from '@pxblue/colors';

const mainConfig = {
   colors: [PXBColors.blue[900], PXBColors.blue[500], PXBColors.blue[200]]
};

const lineConfig = {
   colors: [PXBColors.blue[500], PXBColors.blue[200], PXBColors.blue[200]]
};

const graphStyles = {
   domProps: {
      style: {
         height: '100%'
      }
   }
};

const App: React.FC = () => {
   return (
      <div>
         <div style={{height: '200px'}}>
            <ReactHighcharts config={createPieChart()} {...graphStyles}/>
         </div>
         <div style={{height: '300px'}}>
            <ReactHighcharts config={createDonutChart(mainConfig)} {...graphStyles}/>
         </div>
         <div style={{height: '400px'}}>
            <ReactHighcharts config={createLineChart(lineConfig)} {...graphStyles}/>
         </div>
         <div style={{height: '400px'}}>
            <ReactHighcharts config={createBarChart(mainConfig)} {...graphStyles}/>
         </div>
      </div>
   );
};

export default App;
