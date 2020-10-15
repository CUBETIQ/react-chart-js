# React Chart.js Component

**Install**

Using NPM

```shell
npm install @cubetiq/react-chart-js
```

OR using Yarn

```shell
yarn add @cubetiq/react-chart-js
```

### Link to examples: [https://git.cubetiqs.com/CUBETIQ/react-chart-js/src/branch/master/examples/line-chart-example](https://git.cubetiqs.com/CUBETIQ/react-chart-js/src/branch/master/examples/line-chart-example)

### Line Chart Example
```typescript
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
```

### Contributors
Project's repository: [React Countdown](https://git.cubetiqs.com/CUBETIQ/react-chart-js.git)
- [@s.long](https://git.cubetiqs.com/s.long)
- [@sombochea](https://git.cubetiqs.com/sombochea)
- [@cubetiq](https://git.cubetiqs.com/CUBETIQ)