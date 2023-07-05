import { Form, Image, Input } from "antd";
import React from "react";
import MapComp from "../../components/MapComp";
import "./reports.css";
import logo from "../../assets/DR.png";
import PhotoUpload from "../../components/PhotoUpload";
const Reportsd = () => {
  return (
    <div className="reports-container">
      <div className="header-container">
        <div className="logo-container">
          <Image alt="Company Logo" src={logo} width={200} />
        </div>
        <div className="header-deading">
          <h2> ESTE REPORTE PERTENECE A:</h2>
          <h3>MINISTERIO DE OBRAS PUBLICAS Y COMUNICACIONES</h3>
        </div>
        <div className="map-container"></div>
      </div>
    </div>
  );
};

export default Reportsd;
