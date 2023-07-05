import { LeftCircleFilled } from "@ant-design/icons";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  ReferenceLine,
  Area,
} from "recharts";

const LineChartComp = ({ data }) => {
  return (
    <ResponsiveContainer width={700} height="80%">
      <LineChart
        width={300}
        height={300}
        data={data}
        margin={{ top: 10, right: 30, left: -10, bottom: 0 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComp;
