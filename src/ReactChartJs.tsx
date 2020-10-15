import { Chart, ChartConfiguration } from 'chart.js';
import React, { FunctionComponent, useEffect, useRef } from 'react';

interface ReactChartJSProps {
    chartConfig?: ChartConfiguration;
}

interface RefForChartInstance {
    chartInstance?: Chart;
}

const ReactChartJs: FunctionComponent<ReactChartJSProps> = (props) => {
    const { chartConfig } = props;

    const canvasDomRef = useRef<HTMLCanvasElement>();

    const chartInstanceRef = useRef<RefForChartInstance>({});

    useEffect(() => {
        const canvasDom = canvasDomRef.current;
        const chartInstance = chartInstanceRef.current!.chartInstance;

        if (chartInstance) {
            chartInstance.destroy();
        }
        chartInstanceRef.current!.chartInstance = new Chart(canvasDom!, chartConfig!);
    }, [chartConfig]);

    return (
        <div>
            <canvas
                ref={(instance) => {
                    canvasDomRef.current = instance!;
                }}
                width="400"
                height="200"
            />
        </div>
    );
};

export default ReactChartJs;
