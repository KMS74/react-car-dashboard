import {
  Tooltip,
  AreaChart,
  Area,
  XAxis,
} from "recharts";

const areaData = [
  {
    name: "6 am",
    uv: 400,
  },
  {
    name: "7 am",
    uv: 1000,
  },
  {
    name: "9 am",
    uv: 2000,
  },
  {
    name: "11 am",
    uv: 3500,
  },
  {
    name: "1 pm",
    uv: 2780,
  },
  {
    name: "3 pm",
    uv: 3890,
  },
  {
    name: "5 pm",
    uv: 2390,
  },
  {
    name: "7 pm",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "9 pm",
    uv: 490,
  },
];

const CarsAreaChart = () => {
  return (
    <AreaChart width={500} height={400} data={areaData}>
      <XAxis dataKey="name" />
      <Tooltip
        contentStyle={{ backgroundColor: "#282B32", color: "#fff" }}
        labelStyle={{ color: "#fff" }}
        itemStyle={{ color: "#fff" }}
      />
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#FF764C"
        fill="rgba(255, 118, 76, 0.2)"
      />
    </AreaChart>
  );
};

export default CarsAreaChart;
