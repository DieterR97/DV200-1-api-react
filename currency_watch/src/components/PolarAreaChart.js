import React from 'react';
// import specific chart
import { PolarArea } from 'react-chartjs-2';
// import Chart for properties
import { Chart } from 'chart.js/auto';

// ChartData is props / parameters
function PolarAreaChart({ ChartOptions, ChartData }) {
    return (
        // return specific chart with ChartData as chart data
        <PolarArea options={ChartOptions} data={ChartData} />
    )
}

// export Chart component
export default PolarAreaChart;