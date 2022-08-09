import React, { useRef, useEffect, useState } from 'react';
import './style.css'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
 
const Map = () => {

return (
    // Each Component needs to be declared
    <div>
         <MapContainer className='map-container' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                
            <Marker position={[51.505, -0.1075]}>
                <Popup>
                    --ALERT--  <br /> 
                    Date: 15/08 <br/>
                    Challenge: *** <br />
                    Host: Chaz <br/>
                    Attendees: 107 <br/>
                    <a href="https://example.com">JOIN US</a>
                </Popup>
            </Marker>

            <Marker position={[51.4968, -0.0952]}>
                <Popup style={{marginLeft:'55px'}}>
                    --ALERT--  <br /> 
                    Date: 17/08 <br/>
                    Challenge: * <br />
                    Host: Sarah <br/>
                    Attendees: 29 <br/>
                    <a href="https://example.com">JOIN US</a>
                </Popup>
            </Marker>

            <Marker position={[51.499, -0.0864]}>
                <Popup>
                    --ALERT--  <br /> 
                    Date: 15/08 <br/>
                    Challenge: ********* <br />
                    Host: Simon <br/>
                    Attendees: 56 <br/>
                    <a href="https://example.com">JOIN US</a>
                </Popup>
            </Marker>
        </MapContainer> 
    </div>
    );
}

export default Map