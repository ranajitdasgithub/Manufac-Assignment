import React from "react";
import "../Style/bar.css";
import data from "../data.json";
import ReactEcharts from "echarts-for-react";

const Barchart = () => {
  let alcArr = [data[0].Alcohol];
  let avgMlcArr = [];
  let sum = 0;
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (alcArr[alcArr.length - 1] !== data[i].Alcohol) {
      // Alcochol Category added
      alcArr.push(data[i].Alcohol);
      // Avg. Malic Acid value added except the last one
      avgMlcArr.push(+(sum / count).toFixed(4));
      sum = 0;
      count = 0;
    } else {
      sum += data[i]["Malic Acid"];
      count++;
    }
  }
  // Added the last avg. value of Malic Acid
  if (sum !== 0 && count !== 0) {
    avgMlcArr.push(+(sum / count).toFixed(4));
  }
  return (
    <div>
      <h2>Bar Chart of Alcohol Category vs Avg. of Malic Acid</h2>
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
              name: "Alcohol",
              type: "category",
              data: alcArr,
            },
          ],
          yAxis: [
            {
              name: "Avg. of Malic Acid",
              type: "value",
            },
          ],
          series: [
            {
              name: "Avg. of Malic Acid",
              type: "bar",
              barWidth: "40%",
              data: avgMlcArr,
            },
          ],
        }}
        style={{ width: "100%", height: "50vh"}}
      />
    </div>
  );
};

export default Barchart;
