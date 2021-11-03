import React from 'react';
// @ts-ignore
import ReactHighcharts from 'react-highcharts';

// @ts-ignore
import { createLineChart, createBarChart, createPieChart, createDonutChart } from '@brightlayer-ui/highcharts';
import * as BLUIColors from '@brightlayer-ui/colors';

const mainConfig = {
    colors: [BLUIColors.blue[900], BLUIColors.blue[500], BLUIColors.blue[200]],
};

const lineConfig = {
    colors: [BLUIColors.blue[500], BLUIColors.blue[200], BLUIColors.blue[200]],
};

const graphStyles = {
    domProps: {
        style: {
            height: '100%',
        },
    },
};

export const App: React.FC = () => (
    <div>
        <div style={{ height: '200px' }}>
            <ReactHighcharts config={createPieChart()} {...graphStyles} />
        </div>
        <div style={{ height: '300px' }}>
            <ReactHighcharts config={createDonutChart(mainConfig)} {...graphStyles} />
        </div>
        <div style={{ height: '400px' }}>
            <ReactHighcharts config={createLineChart(lineConfig)} {...graphStyles} />
        </div>
        <div style={{ height: '400px' }}>
            <ReactHighcharts config={createBarChart(mainConfig)} {...graphStyles} />
        </div>
    </div>
);
