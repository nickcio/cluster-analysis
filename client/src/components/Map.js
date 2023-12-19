import React, { useContext, useState, useEffect } from "react";
import { GlobalStoreContext } from "../store";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useMap } from "react-leaflet";
import AZBorders from "./geojson/AZBorders.json";
import SCBorders from "./geojson/SCBorders.json";
import TXBorders from "./geojson/TXBorders.json";
import AZDistricts from "./geojson/AZDistricts.json";
import SCDistricts from "./geojson/SCDistricts.json";
import TXDistricts from "./geojson/TXDistricts.json";
import { useNavigate, useLocation } from 'react-router-dom';

const highlightStyle = {
  fillColor: "blue",
  color: "blue",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.3,
};
const mouseoverStyle = {
  fillColor: "darkblue",
  color: "black",
  weight: 2,
  opacity: 1,
  fillOpacity: 0.6,
};
const districtStyle = {
  fillColor: "red",
  color: "black",
  weight: 2,
  opacity: 1,
  fillOpacity: 0.6,
};
let AZStyle = highlightStyle;
let TXStyle = highlightStyle;
let SCStyle = highlightStyle;
const arizonaPosition = [34.212, -111.929];
const texasPosition = [31.459, -98.518];
const scPosition = [33.639, -80.948];
const mainPosition = [32, -96];
const arizonaPositionEnsemble = [30.4, -111.929];
const texasPositionEnsemble = [25.459, -98.518];
const scPositionEnsemble = [31.739, -80.948];

function Component() {
  const location = useLocation();
  const { store } = useContext(GlobalStoreContext);
  let stateName =
    store.currentState !== ""
      ? store.currentState.features[0].properties.NAME
      : "";
  const map = useMap();

  useEffect(() => {
    if(location.pathname.includes("ensemble") || location.pathname.includes("cluster")){
      if (location.pathname.includes("Arizona")) {
        map.setView(arizonaPositionEnsemble, 6);
      } else if (location.pathname.includes("SC")) {
        map.setView(scPositionEnsemble, 7);
      } else if (location.pathname.includes("Texas")) {
        map.setView(texasPositionEnsemble, 5);
      } else {
        map.setView(mainPosition, 5);
      }
    }
    else if (location.pathname.includes("Arizona")) {
      map.setView(arizonaPosition, 6);
    } else if (location.pathname.includes("SC")) {
      map.setView(scPosition, 7);
    } else if (location.pathname.includes("Texas")) {
      map.setView(texasPosition, 6);
    } else {
      map.setView(mainPosition, 5);
    }


  });
}

export default function Map(geoJsonName) {
  const { store } = useContext(GlobalStoreContext);
  console.log("name?", geoJsonName);

  let stateName =
    store.currentState !== ""
      ? store.currentState.features[0].properties.NAME
      : "";

  const onClickAZ = (feature, layer) => {
    const clicked = () => {
      //map.setView(arizonaPosition, 6)
      store.setState(AZBorders, AZDistricts);
    };
    const mouseovered = (e) => {
      const layer = e.target;
      layer.setStyle(mouseoverStyle);
    };
    const mouseoff = (e) => {
      const layer = e.target;
      layer.setStyle(highlightStyle);
    };
    layer.on({
      click: clicked,
      mouseover: mouseovered,
      mouseout: mouseoff,
    });
  };

  const onClickSC = (feature, layer) => {
    const clicked = () => {
      //map.setView(scPosition, 7)
      store.setState(SCBorders, SCDistricts);
    };
    const mouseovered = (e) => {
      const layer = e.target;
      layer.setStyle(mouseoverStyle);
    };
    const mouseoff = (e) => {
      const layer = e.target;
      layer.setStyle(highlightStyle);
    };
    layer.on({
      click: clicked,
      mouseover: mouseovered,
      mouseout: mouseoff,
    });
  };

  const onClickTX = (feature, layer) => {
    const clicked = () => {
      //map.setView(texasPosition, 6)
      store.setState(TXBorders, TXDistricts);
    };
    const mouseovered = (e) => {
      const layer = e.target;
      layer.setStyle(mouseoverStyle);
    };
    const mouseoff = (e) => {
      const layer = e.target;
      layer.setStyle(highlightStyle);
    };
    layer.on({
      click: clicked,
      mouseover: mouseovered,
      mouseout: mouseoff,
    });
  };

  const districtAZ = (feature, layer) => {
    if (feature.properties && feature.properties.LONGNAME) {
      layer.bindPopup(feature.properties.LONGNAME);
    }
    const clicked = () => {
      console.log(feature);
    };
    const mouseovered = (e) => {
      const layer = e.target;
      layer.setStyle(districtStyle);
    };
    const mouseoff = (e) => {
      const layer = e.target;
      layer.setStyle(mouseoverStyle);
    };
    layer.on({
      click: clicked,
      mouseover: mouseovered,
      mouseout: mouseoff,
    });
  };

  const districtTX = (feature, layer) => {
    if (feature.properties && feature.properties.LONGNAME) {
      layer.bindPopup(feature.properties.LONGNAME);
    }
    const clicked = () => {
      //send info to change the district
    };
    const mouseovered = (e) => {
      const layer = e.target;
      layer.setStyle(districtStyle);
    };
    const mouseoff = (e) => {
      const layer = e.target;
      layer.setStyle(mouseoverStyle);
    };
    layer.on({
      click: clicked,
      mouseover: mouseovered,
      mouseout: mouseoff,
    });
  };

  const districtSC = (feature, layer) => {
    console.log(feature.properties, feature.properties.DISTRICT, feature);
    if (feature.properties && feature.properties.DISTRICT) {
      layer.bindPopup("District " + feature.properties.DISTRICT);
    }
    const clicked = () => {
      //send info to change the district
    };
    const mouseovered = (e) => {
      const layer = e.target;
      layer.setStyle(districtStyle);
    };
    const mouseoff = (e) => {
      const layer = e.target;
      layer.setStyle(mouseoverStyle);
    };
    layer.on({
      click: clicked,
      mouseover: mouseovered,
      mouseout: mouseoff,
    });
  };

  function ReRender() {
    let stateName =
      store.currentState !== ""
        ? store.currentState.features[0].properties.NAME
        : "";

    let stateDisplay = <></>;

    if (store.currentState === "") {
      stateDisplay = (
        <>
          <GeoJSON
            key="1"
            data={AZBorders}
            style={AZStyle}
            onEachFeature={onClickAZ}
          />
          ;
          <GeoJSON
            key="2"
            data={TXBorders}
            style={TXStyle}
            onEachFeature={onClickTX}
          />
          ;
          <GeoJSON
            key="3"
            data={SCBorders}
            style={SCStyle}
            onEachFeature={onClickSC}
          />
          ;
        </>
      );
    }

    switch (stateName) {
      case "Arizona":
        console.log("RETURNING AZ");
        AZStyle = mouseoverStyle;
        return (
          <>
            <GeoJSON
              key="4"
              data={AZDistricts}
              style={AZStyle}
              onEachFeature={districtAZ}
            />
            ;
            <GeoJSON
              key="5"
              data={TXBorders}
              style={TXStyle}
              onEachFeature={onClickTX}
            />
            ;
            <GeoJSON
              key="6"
              data={SCBorders}
              style={SCStyle}
              onEachFeature={onClickSC}
            />
            ;
          </>
        );
      case "Texas":
        console.log("RETURNING TX");
        TXStyle = mouseoverStyle;
        return (
          <>
            <GeoJSON
              key="7"
              data={AZBorders}
              style={AZStyle}
              onEachFeature={onClickAZ}
            />
            ;
            <GeoJSON
              key="8"
              data={TXBorders}
              style={TXStyle}
              onEachFeature={districtTX}
            />
            ;
            <GeoJSON
              key="9"
              data={SCBorders}
              style={SCStyle}
              onEachFeature={onClickSC}
            />
            ;
          </>
        );
      case "South Carolina":
        console.log("RETURNING SC");
        SCStyle = mouseoverStyle;
        return (
          <>
            <GeoJSON
              key="10"
              data={AZBorders}
              style={AZStyle}
              onEachFeature={onClickAZ}
            />
            ;
            <GeoJSON
              key="11"
              data={TXBorders}
              style={TXStyle}
              onEachFeature={onClickTX}
            />
            ;
            <GeoJSON
              key="12"
              data={SCDistricts}
              style={SCStyle}
              onEachFeature={districtSC}
            />
            ;
          </>
        );
      default:
        console.log("returning default");
        return stateDisplay;
    }
  }

  const geoJsonStyle = (feature) => {
    if (
      feature.properties.NAME === "Arizona" ||
      feature.properties.NAME === "Texas" ||
      feature.properties.NAME === "South Carolina"
    ) {
      return highlightStyle;
    }

    return {
      fillColor: "blue", // Default state color
      color: "",
      weight: 2,
      opacity: 1,
      fillOpacity: 0.00005,
    };
  };

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    console.log(lat, lng);
  };

  return (
    <div>
      <MapContainer
        center={[49.569834, -96.764915]}
        zoom={5}
        minZoom={4}
        maxZoom={15}
        onClick={(e) => {
          handleMapClick(e);
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Component />
        {ReRender()}
      </MapContainer>
    </div>
  );
}
