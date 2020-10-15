import React from 'react';
import { ReactChartJs } from '@cubetiq/react-chart-js';

function LineChartExample(props) {
    return (
        <ReactChartJs
            chartConfig={{
                type: 'line',
                options: {
                    responsive: true,
                    title: {
                        display: true,
                        text: 'Monthly Payments',
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true,
                    },
                },
                data: {
                    datasets: [
                        {
                            label: 'Part-time',
                            data: [5, 10, 30],
                            fill: false,
                            borderColor: '#ff6384',
                        },
                        {
                            label: 'Full-time',
                            data: [10, 15, 45],
                            fill: false,
                            borderColor: '#36a2eb',
                        },
                    ],
                    labels: ['Jan', 'Feb', 'Mar'],
                },
            }}
        />
    );
}

export default LineChartExample;
