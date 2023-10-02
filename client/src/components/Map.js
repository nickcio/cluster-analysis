import React, { useContext, useState, useEffect } from 'react'
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
import AZDistricts from "./geojson/AZDistricts.json";
import SCDistricts from "./geojson/SCDistricts.json";
import TXDistricts from "./geojson/TXDistricts.json";



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
const arizonaPosition = [34.212,-111.929]
const texasPosition = [29.4590,-98.518]
const scPosition = [33.639,-80.948]

function Component() {
    const { store } = useContext(GlobalStoreContext);
    let stateName = store.currentState !== "" ? store.currentState.features[0].properties.NAME : "";
    const map = useMap();

    useEffect(() => {
        if (stateName === "Arizona") {
            map.setView(arizonaPosition, 6)
        }
        else if (stateName === "South Carolina") {
            map.setView(scPosition, 7)
        }
        else if (stateName === "Texas") {
            map.setView(texasPosition, 6)
        }
    })
}

export default function Map() {
    const { store } = useContext(GlobalStoreContext);

    let stateName = store.currentState !== "" ? store.currentState.features[0].properties.NAME : "";


    const onClickAZ = (feature, layer) => {
        const clicked = () => {
            //map.setView(arizonaPosition, 6)
            store.setState(AZBorders,AZDistricts);
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
            //map.setView(scPosition, 7)
            store.setState(SCBorders,SCDistricts);
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
            //map.setView(texasPosition, 6)
            store.setState(TXBorders,TXDistricts);
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




    function ReRender() {

        let stateName = store.currentState !== "" ? store.currentState.features[0].properties.NAME : "";

        let stateDisplay = <></>
        let AZDisplay = <GeoJSON data={AZDistricts} style={AZStyle}/>;
        let TXDisplay = <GeoJSON data={TXDistricts} style={TXStyle}/>;
        let SCDisplay = <GeoJSON data={SCDistricts} style={SCStyle}/>;

        if (store.currentState === "") {
            stateDisplay = 
            <>
            <GeoJSON key="1" data={AZBorders} style={AZStyle} onEachFeature={onClickAZ} />;
            <GeoJSON key="2" data={TXBorders} style={TXStyle} onEachFeature={onClickTX}/>;
            <GeoJSON key="3" data={SCBorders} style={SCStyle} onEachFeature={onClickSC}/>;
            </>
        }
        switch (stateName) {
            case "Arizona":
                console.log("RETURNING AZ")
                return AZDisplay;
            case "Texas":
                console.log("RETURNING TX")
                console.log(TXDisplay)
                return TXDisplay;
            case "South Carolina":
                console.log("RETURNING SC")
                console.log(SCDisplay)
                return SCDisplay;
            default:
                return stateDisplay;
        }
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
                <Component/>
                {ReRender()}
            </MapContainer>
        </div>
    )
}