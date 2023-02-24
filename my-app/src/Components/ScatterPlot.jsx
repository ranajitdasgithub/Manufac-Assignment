import React from "react";
import "../Style/sca.css";
import data from "../data.json";
import ReactEcharts from "echarts-for-react";

const ScatterPlot = () => {
  let colorArr = [];
  let hueArr = [];
  for (let i = 0; i < data.length; i++) {
    // Color Intensity and hue value added in the respective array
    colorArr.push(data[i]["Color intensity"]);
    hueArr.push(data[i].Hue);
  }
  return (
    <div>
      <h2>Scatter plot of Color Intensity vs Hue</h2>
      <ReactEcharts
        key={Date.now()}
        theme="light"
        option={{
          color: ["#3398DB"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          grid: {},
          xAxis: [
            {
              name: "Color Intensity",
              type: "category",
              data: colorArr,
            },
          ],
          yAxis: [
            {
              name: "Hue",
              type: "value",
            },
          ],
          series: [
            {
              name: "Hue",
              type: "scatter",
              barWidth: "40%",
              data: hueArr,
            },
          ],
        }}
        style={{ width: "100%", height: "50vh" }}
      />
    </div>
  );
};

export default ScatterPlot;
