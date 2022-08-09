import React from 'react';
import './style.css'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
 
const MapStatic = () => {

return (
    // Each Component needs to be declared
    <div>
         <MapContainer className='map-container' center={[51.505,  -0.1075]} zoom={13} scrollWheelZoom={false} zoomControl={false} doubleClickZoom={false} dragging={false} zoomSnap={false} trackResize={false} touchZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                
            <Marker position={[51.505, -0.1075]}>
                <Popup>
                    --ALERT--  <br /> 
                    Date: 18/08  <br/>
                    Challenge: *** <br />
                    Host: Chaz <br/>
                    Attendees: 107 <br/>
                    <a href="https://example.com">JOIN US</a>
                </Popup>
            </Marker>

        </MapContainer> 
    </div>
    );
}

export default MapStatic
