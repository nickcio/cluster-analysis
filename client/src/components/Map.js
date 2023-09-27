import { useContext } from 'react'
import {MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map(){
    return(
        <div>
            <MapContainer center={[33.569834, -97.464915]} zoom={5}>
                <TileLayer
                attribution='&copy; <a href-"https://www.openstreetmap.org/copyright'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </MapContainer>
        </div>
    )
}