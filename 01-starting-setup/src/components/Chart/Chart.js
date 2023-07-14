import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointsValues);

  const val = props.dataPoints.map((dataPoint) => {
    return (
      <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMax}
        label={dataPoint.label}
      />
    );
  });

  return <div className="chart">{val}</div>;
};

export default Chart;
