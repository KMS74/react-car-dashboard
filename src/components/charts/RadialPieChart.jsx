import React from "react";
import { PieChart, Pie, Label, Tooltip, Cell } from "recharts";

const RadialPieChart = ({
  data,
  primaryColor,
  secondaryColor,
  labelFillColor,
  labelUnit,
}) => {
  return (
    <PieChart width={200} height={200}>
      <Tooltip
        contentStyle={{ backgroundColor: "#282B32", color: "#fff" }}
        labelStyle={{ color: "#fff" }}
        itemStyle={{ color: "#fff" }}
      />
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        dataKey="value"
        innerRadius={60}
        outerRadius={80}
      >
        {data.map((entry, index) => {
          if (index === 1) {
            return <Cell key={`cell-${index}`} fill={secondaryColor} />;
          }
          return <Cell key={`cell-${index}`} fill={primaryColor} />;
        })}
        <Label
          value={data[0].value + labelUnit}
          position="center"
          fill={labelFillColor}
          style={{
            fontSize: "26px",
            fontFamily: "DM Sans",
            fontWeight: "700",
          }}
        />
      </Pie>
    </PieChart>
  );
};

export default RadialPieChart;
