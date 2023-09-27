import { useContext } from 'react'
import {MapContainer, TileLayer, Marker, Popup, useMapEvents} from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import "leaflet/dist/leaflet.css";
import { useMap } from 'react-leaflet';

function MarkerComponents() {
    const map = useMap();
    const arizonaPosition = [34.212,-111.929]
    const texasPosition = [31.319,-100.077]
    const scPosition = [33.639,-80.948]

    function zoomInArizona() {
        console.log("zoomin");
        map.setView(34.212,-111.929);
        console.log(map.locate);
    }
    return(
        <div>
            <div id="test-div"> HELLO </div>
            <Marker position={arizonaPosition} icon={new Icon({iconUrl: markerIconPng, iconSize: [15, 20], iconAnchor: [12, 41]})}>
                <Popup>
                    Arizona
                </Popup>
            </Marker>
            <Marker position={texasPosition} icon={new Icon({iconUrl: markerIconPng, iconSize: [15, 20], iconAnchor: [12, 41]})}>
                <Popup>
                    Texas
                </Popup>
            </Marker>

            <Marker position={scPosition} icon={new Icon({iconUrl: markerIconPng, iconSize: [15, 20], iconAnchor: [12, 41]})}>
                <Popup>
                    South Carolina
                </Popup>
            </Marker>
        </div>
    );
}
export default function Map(){
    return(
        <div>
            <MapContainer center={[33.569834, -96.764915]} zoom={4.5} >
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <MarkerComponents></MarkerComponents>
            </MapContainer>
        </div>
    )
}