import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function Map() {
    return (
        <MapContainer
            className="content-center w-3/4 h-96 mb-4"
            center={[41.70120474266029, 44.81833696280292]}
            zoom={13}
            scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[41.70120474266029, 44.81833696280292]}>
                <Popup>HotelBRB</Popup>
            </Marker>
        </MapContainer>
    );
}
