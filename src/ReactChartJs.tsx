import { Chart, ChartConfiguration } from 'chart.js';
import React, { FunctionComponent, useEffect, useRef } from 'react';

interface ReactChartJSProps {
    chartConfig?: ChartConfiguration;
    width?: number;
    height?: number;
    containerProps: any;
    canvasProps: any;
}

interface RefForChartInstance {
    chartInstance?: Chart;
}

const ReactChartJs: FunctionComponent<ReactChartJSProps> = (props: any) => {
    const { chartConfig, containerProps, canvasProps } = props;

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
        <div {...containerProps}>
            <canvas
                ref={(instance: any) => {
                    canvasDomRef.current = instance!;
                }}
                width={props.width || 'auto'}
                height={props.height || 'auto'}
                {...canvasProps}
            />
        </div>
    );
};

export default ReactChartJs;
