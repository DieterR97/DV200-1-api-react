import React from 'react';
// import specific chart
import { Line } from 'react-chartjs-2';
// import Chart for properties
import { Chart } from 'chart.js/auto';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// ChartData and ChartOptions is props / parameters
function LineChart({ ChartOptions, ChartData }) {
    return (
        // return specific chart with ChartData as chart data and ChartOptions as options
        <Line options={ChartOptions} data={ChartData} redraw={true} />
    )
}

// export Chart component
export default LineChart;