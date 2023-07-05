import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "./mapComp.css"
const MapComp = () => {
  return (
    <>
    <div className="map-container">
    <div className="map-title-container">
      <h2>FAVOR SELECCIONAR SU UBICACION</h2>
    </div>
    <MapContainer center={[18.735693, -70.162651]} zoom={5} style={{ height: "200px", width:"400px" }}>
      
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      <Marker position={[18.735693, -70.162651]}/>

    </MapContainer>
    </div>
    </>
  )
}

export default MapComp