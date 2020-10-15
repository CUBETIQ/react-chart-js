"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var chart_js_1 = require("chart.js");
var react_1 = __importStar(require("react"));
var ReactChartJs = function (props) {
    var chartConfig = props.chartConfig;
    var canvasDomRef = react_1.useRef();
    var chartInstanceRef = react_1.useRef({});
    react_1.useEffect(function () {
        var canvasDom = canvasDomRef.current;
        var chartInstance = chartInstanceRef.current.chartInstance;
        if (chartInstance) {
            chartInstance.destroy();
        }
        chartInstanceRef.current.chartInstance = new chart_js_1.Chart(canvasDom, chartConfig);
        // if (!chartInstance) {
        // } else {
        //     chartInstanceRef.current!.chartInstance.update()
        // }
    }, [chartConfig]);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("canvas", { ref: function (instance) {
                canvasDomRef.current = instance;
            }, width: "400", height: "200" })));
};
exports.default = ReactChartJs;
