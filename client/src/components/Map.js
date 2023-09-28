import React, { useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'
import {MapContainer, TileLayer, Marker, Popup, GeoJSON} from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import "leaflet/dist/leaflet.css";
import { useMap } from 'react-leaflet';
import usStatesGeoJSON from './geojson/state-borders.json';
import { point, polygon, multiPolygon, booleanPointInPolygon } from '@turf/turf';
import ArizonaBorders from './geojson/ArizonaBorders.json';
import SCBorders from './geojson/SCBorders.json';
import TexasBorders from './geojson/TexasBorders.json';


export default function Map() {
    const { store } = useContext(GlobalStoreContext);
    const highlightStyle = {
        fillColor: 'purple',
        color: 'blue',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.3,
    };

    const AZClicked = () => {
        store.setState("Arizona");
    }

    const onClickAZ = (feature, layer) => {
    layer.on({
        click:AZClicked
    });
    }

    const SCClicked = () => {
        store.setState("South Carolina");
    }

    const onClickSC = (feature, layer) => {
    layer.on({
        click:SCClicked
    });
    }

    const TXClicked = () => {
        store.setState("Texas");
    }
    
    const onClickTX = (feature, layer) => {
        layer.on({
        click:TXClicked
        });
    }
    


    const geoJsonStyle = (feature) => {
        if (feature.properties.NAME === "Arizona" || feature.properties.NAME === "Texas" || feature.properties.NAME === "South Carolina") {
            
            return highlightStyle;
        }

        return {
            fillColor: 'blue', // Default state color
            color: '',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.0000005,
        };
    };

    const handleMapClick = (e)=> {
        const {lat, lng} = e.latlng;
        console.log(lat, lng)
        
    }

    return(
        <div>
            <MapContainer center={[30.569834, -96.764915]} maxBounds={[[24.661994,-129.571321], [42.403179,-63.785237]]} zoom={5} minZoom={4} maxZoom={15} onClick={(e) => {handleMapClick(e)}}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <GeoJSON data={ArizonaBorders} style={geoJsonStyle} onEachFeature={onClickAZ} />
                <GeoJSON data={TexasBorders} style={geoJsonStyle} onEachFeature={onClickTX}/>
                <GeoJSON data={SCBorders} style={geoJsonStyle} onEachFeature={onClickSC}/>
            </MapContainer>
        </div>
    )
}