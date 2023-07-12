import { Input, Select } from "antd";
import BarCharComp from "../../components/charts/BarChartComp";
import LineChartComp from "../../components/charts/LineChartComp";
import "./indicators.css";
import React, { useState } from "react";
import PieChartComp from "../../components/charts/PieChart";
import ListComp from "../../components/ListComp";

const Indicators = () => {
  const [currentProvince, setCurrentProvince] = useState("Santo Domingo");
  const data = [
    { name: "Jan", uv: 400, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 300, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 200, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 278, pv: 3908, amt: 2000 },
    { name: "May", uv: 189, pv: 4800, amt: 2181 },
    { name: "Jun", uv: 239, pv: 3800, amt: 2500 },
  ];
  const dataPies = [
    {
      reportName: "Reportes Abiertos",
      name: "40%",
      value: 400,
    },
    {
      reportName: "Reportes Criticos",
      name: "40%",
      value: 400,
    },
    {
      reportName: "Respuestas a tiempo",
      name: "40%",
      value: 400,
    },
  ];
  const listData = [
    {
      name: "Juan Perez",
      picture: "../assets/DR.png",
      points: 150,
    },
    {
      name: "Juana Mendez",
      picture: "test",
      points: 300,
    },
    {
      name: "Maximo Gomez",
      picture: "test",
      points: 200,
    },
  ];

  const handleChange = (value) => {
    setCurrentProvince(value);
  };
  return (
    <>
      <div className="indicator-container">
        <h3>Seleccione una provincia</h3>
        <Select
          defaultValue="Santo Domingo"
          style={{ width: 200 }}
          onChange={handleChange}
          options={[
            { value: "Santiago", label: "Santiago" },
            { value: "Santo Domingo", label: "Santo Domingo" },
            { value: "San Juan", label: "San Juan" },
            { value: "Punta Cana", label: "Punta Cana", disabled: false },
          ]}
        />
        <h2>
          Indicadores de {currentProvince}
        </h2>
        <hr />
        <div className="pie-chart-container">
          <PieChartComp data={[dataPies[0]]} index={0} key={"pie1"} />
          <PieChartComp data={[dataPies[1]]} index={1} key={"pie2"} />
          <PieChartComp data={[dataPies[2]]} index={3} key={"pie3"} />
        </div>

        <h2>
          Reportes por Servicios {}
        </h2>
        <hr />
        <div className="bar-chart-container">
          <BarCharComp data={data} />
          <BarCharComp data={data} />
        </div>

        <br />

        <h2>
          Puntos ganados {}
        </h2>
        <hr />

        <ListComp data={listData} />
      </div>
    </>
  );
};

export default Indicators;
