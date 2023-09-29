import React, { useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'
import {MapContainer, TileLayer, Marker, Popup, GeoJSON} from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import "leaflet/dist/leaflet.css";
import { useMap } from 'react-leaflet';
import usStatesGeoJSON from './geojson/state-borders.json';
import { point, polygon, multiPolygon, booleanPointInPolygon } from '@turf/turf';
import AZBorders from './geojson/AZBorders.json';
import SCBorders from './geojson/SCBorders.json';
import TXBorders from './geojson/TXBorders.json';

const highlightStyle = {
    fillColor: 'blue',
    color: 'blue',
    weight: 1,
    opacity: 1,
    fillOpacity: 0.3,
};
const mouseoverStyle = {
    fillColor: 'darkblue',
    color: 'blue',
    weight: 1,
    opacity: 1,
    fillOpacity: 0.6,
};
let AZStyle = highlightStyle;
let TXStyle = highlightStyle;
let SCStyle = highlightStyle;


export default function Map() {
    const { store } = useContext(GlobalStoreContext);

    const onClickAZ = (feature, layer) => {
        const clicked = () => {
            store.setState(AZBorders);
        }
        const mouseovered = () => {
            AZStyle = mouseoverStyle;
        }
        const mouseoff = () => {
            AZStyle = highlightStyle;
        }
        layer.on({
            click:clicked,
            mouseover:mouseovered,
            mouseout:mouseoff
        });
    }


    const onClickSC = (feature, layer) => {
        const clicked = () => {
            store.setState(SCBorders);
        }
        const mouseovered = () => {
            SCStyle = mouseoverStyle;
        }
        const mouseoff = () => {
            SCStyle = highlightStyle;
        }
        layer.on({
            click:clicked,
            mouseover:mouseovered,
            mouseout:mouseoff
        });
    }

    
    
    const onClickTX = (feature, layer) => {
        const clicked = () => {
            store.setState(TXBorders);
        }
        const mouseovered = () => {
            console.log("MOUSE ON TEXAS")
            TXStyle = mouseoverStyle;
        }
        const mouseoff = () => {
            TXStyle = highlightStyle;
        }
        layer.on({
            click:clicked,
            mouseover:mouseovered,
            mouseout:mouseoff
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
            fillOpacity: 0.00005,
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
                <GeoJSON data={AZBorders} style={AZStyle} onEachFeature={onClickAZ} />
                <GeoJSON data={TXBorders} style={TXStyle} onEachFeature={onClickTX}/>
                <GeoJSON data={SCBorders} style={SCStyle} onEachFeature={onClickSC}/>
            </MapContainer>
        </div>
    )
}