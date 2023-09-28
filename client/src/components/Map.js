import { useContext } from 'react'
import {MapContainer, TileLayer, Marker, Popup, GeoJSON} from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import "leaflet/dist/leaflet.css";
import { useMap } from 'react-leaflet';
import usStatesGeoJSON from './geojson/state-borders.json';
import rd3 from 'react-d3-library';

function MarkerComponents() {
    const map = useMap();
    const arizonaPosition = [34.212,-111.929]
    const texasPosition = [31.319,-100.077]
    const scPosition = [33.639,-80.948]

    function zoomInArizona(event) {
        event.stopPropagation();
        console.log("zoomin");
        map.setView(34.212,-111.929);
        console.log(map.locate);
    }

    map.on('click', function(e){
        var coord = e.latlng;
        var lat = coord.lat;
        var lng = coord.lng;
        lat = lat.toFixed(2);
        lng = lng.toFixed(2);
        const coordinate = [lng, lat];
        console.log(coordinate);

        for(var i = 0; i < usStatesGeoJSON.features[0].geometry.coordinates[0].length; i++){
            var x = usStatesGeoJSON.features[0].geometry.coordinates[0][i];
            console.log("hey", x)
            var x_lng = x[0];
            var x_lat = x[1];
            x_lng = parseFloat(x_lng).toFixed(2);
            x_lat = parseFloat(x_lat).toFixed(2);
            const x_lng_difference = coordinate[0] - x_lng;
            const x_lat_difference = coordinate[1] - x_lat;
            console.log("difference: ", x_lng_difference, x_lat_difference);
            if(x_lat_difference < 5 && x_lng_difference < 5){
                console.log("ARIZONA");
                break;
            }
        }

        console.log("d3 stuff", rd3.geoContains(usStatesGeoJSON, coordinate));

        console.log(usStatesGeoJSON.features[0].properties.NAME);
        console.log("You clicked the map at latitude: " + lat + " and longitude: " + lng);
    });
    
    return;
}

const highlightStyle = {
    fillColor: 'purple',
    color: 'blue',
    weight: 1,
    opacity: 1,
    fillOpacity: 0.3,
  };

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

export default function Map() {
    return(
        <div>
            <MapContainer center={[30.569834, -96.764915]} maxBounds={[[24.661994,-129.571321], [42.403179,-63.785237]]} zoom={5} minZoom={4} maxZoom={7} onClick={(e) => {handleMapClick(e)}}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <GeoJSON data={usStatesGeoJSON} style={geoJsonStyle} />
                <MarkerComponents></MarkerComponents>
            </MapContainer>
        </div>
    )
}