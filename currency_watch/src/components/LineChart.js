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

// ChartData is props / parameters
function LineChart({ ChartOptions, ChartData }) {
    return (
        // return specific chart with ChartData as chart data
        <Line options={ChartOptions} data={ChartData} />
    )
}

// export Chart component
export default LineChart;