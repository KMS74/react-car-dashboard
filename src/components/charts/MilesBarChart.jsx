import { Tooltip, BarChart, Bar, Cell, XAxis } from "recharts";
import React, { useState } from "react";

const barChartdata = [
  {
    name: "1 pm",
    uv: 4000,
  },
  {
    name: "2 pm",
    uv: 3000,
  },
  {
    name: "3 pm",
    uv: 2000,
  },
  {
    name: "4 pm",
    uv: 2780,
  },
  {
    name: "5 pm",
    uv: 1890,
  },
  {
    name: "6 pm",
    uv: 2390,
  },
  {
    name: "7 pm",
    uv: 3490,
  },
];

const MilesBarChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <BarChart width={500} height={400} data={barChartdata}>
      <XAxis dataKey="name" />
      <Tooltip
        contentStyle={{ backgroundColor: "#282B32", color: "#fff" }}
        labelStyle={{ color: "#fff" }}
        itemStyle={{ color: "#fff" }}
      />
      <Bar dataKey="uv">
        {barChartdata.map((entry, index) => (
          <Cell
            onClick={() => setActiveIndex(index)}
            cursor="pointer"
            fill={index === activeIndex ? "#2884FF" : "#F4F5F9"}
            key={`cell-${index}`}
          />
        ))}
      </Bar>
    </BarChart>
  );
};

export default MilesBarChart;
