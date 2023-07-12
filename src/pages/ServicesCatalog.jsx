import React from "react";
import "./servicesCatalog.css";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import ListComp from "../components/ListComp";



const ServicesCatalog = () => {
  const listData = [
    {
      name: "Reportar Baches",
      picture: "car",
      points: "",
      link: '/reportesd'     
    },
    {
      name: "Reportar Asfalto en mal estado",
      picture: "road",
      points: "",
      link: '/reportes'
    },
    {
      name: "Reportar Accidentes de tránsito",
      picture: "accident",
      points: "",
      link: '/reportes'
    },
   
    {
      name: "Reportar Semáforos dañados",
      picture: "semafo",
      points: "",
      link: '/reportes'
    },
   
    {
      name: "Reportar Recogida de Basura",
      picture: "trash",
      points: "",
      link: '/reportesd'
    },
   
    {
      name: "Reportar interrupciones en el Servicio Eléctrico",
      picture: "cord",
      points: "",
      link: '/reportes'
    },
   
    {
      name: "Reportar Averías en el Suministro de Agua Potable",
      picture: "faucet",
      points: "",
      link: '/reportes'
    },
   
    {
      name: "Reportar mantenimiento e instalaciones de acueductos y alcantarillados",
      picture: "drenaje",
      points: "",
      link: '/reportes'
    },
   
   
   
   
  ];
  return (
    <>
      <div className="services-catalog-container">
        <div className="services-catalog-header">
          <h2 style={{ textAlign: "center" }}> Reporte de Servicios</h2>
        </div>
        <div className="searchBox-container">
          <Input
            placeholder="Buscar servicio"
            prefix={<SearchOutlined />}
            style={{ width: "600px", fontSize: "20px" }}
          />
        </div>
      </div>
      <div className="list-container">
        <ListComp  data={listData} />
      </div>
    </>
  );
};

export default ServicesCatalog;
