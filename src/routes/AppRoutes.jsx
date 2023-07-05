import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import AppLayout from "./../pages/AppLayout";
import Reports from "../pages/services-reports/Reports.jsx";
import Indicators from "../pages/indicators/Indicators.jsx";
import ServicesCatalog from "../pages/ServicesCatalog.jsx";
import Reportsd from "../pages/services-reports/reportsd.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Indicators />} />
        <Route path="reportes" element={<Reports />} />
        <Route path="indicadores" element={<Indicators />} />
        <Route path="servicios" element={<ServicesCatalog />} />
        <Route path="reportesd" element={<Reportsd />} />
      </Route>
      <Route path="registro" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
