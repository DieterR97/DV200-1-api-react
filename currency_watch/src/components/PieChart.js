import React from 'react';
// import specific chart
import { Pie } from 'react-chartjs-2';
// import Chart for properties
import { Chart } from 'chart.js/auto';

// ChartData is props / parameters
function PieChart({ ChartOptions, ChartData }) {
    return (
        // return specific chart with ChartData as chart data
        <Pie options={ChartOptions} data={ChartData} />
    )
}

// export Chart component
export default PieChart;