import React, { useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const arizonaPosition = [34.212, -111.929];
const texasPosition = [29.459, -98.518];
const scPosition = [33.639, -80.948];

export default function DistrictPlanMap({ geoJsonData}) {
    let {stateId} = useParams();

    const onEachFeature = (feature, layer) => {
      layer.on({
        mouseover: (e) => {
          var layer = e.target;
          layer.setStyle({
            fillColor: "darkblue",
            color: "black",
            weight: 2,
            opacity: 1,
            fillOpacity: 0.6,
          });
        },
        mouseout: (e) => {
          e.target.setStyle({
            fillColor: "red",
            color: "black",
            weight: 2,
            opacity: 1,
            fillOpacity: 0.6,
          });
        }
      });
    };
    
    let centerPosition = [];
    if(stateId === "Arizona"){
        centerPosition = arizonaPosition;
    }
    else if( stateId === "SC"){
        centerPosition = scPosition;
    }
    else if( stateId === "Texas"){
        centerPosition = texasPosition;
    }
  
    return (
      <MapContainer center={centerPosition} zoom={6} style={{ height: "275px" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON data={geoJsonData} onEachFeature={onEachFeature} />
      </MapContainer>
    );
  }
  