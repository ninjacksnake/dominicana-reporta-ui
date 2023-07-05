import React from "react";
import { Pie, PieChart } from "recharts";

const PieChartComp = ({ data , index}) => {
  console.log(data, index)
  return (
    <div>
    <h3 style={{textAlign:"center"}}>{data[0].reportName}</h3>
      <PieChart width={300} height={200}>
     
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
};

export default PieChartComp;
